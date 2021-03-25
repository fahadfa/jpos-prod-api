"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SyncServiceHelper_1 = require("../sync/SyncServiceHelper");
var Props_1 = require("../constants/Props");
var App_1 = require("../utils/App");
var moment = require("moment");
var STAGING_ID = "STAGING";
var STORE_ID = process.env.ENV_STORE_ID || "LOCAL-TEST";
var SyncDMLService = /** @class */ (function () {
    function SyncDMLService(slog) {
        this.limitData = 500;
        this.log = slog;
    }
    SyncDMLService.prototype.deleteExecute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stageDbConfig, localDbConfig, sql, syncResults, sysDeleteQuery, tableDeleteQuery, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log.info("#################### DeleteExecute " + STORE_ID + " - " + new Date().toISOString() + " #######################");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        stageDbConfig = SyncServiceHelper_1.SyncServiceHelper.StageDBOptions();
                        localDbConfig = SyncServiceHelper_1.SyncServiceHelper.LocalDBOptions();
                        sql = "SELECT table_id, table_name, table_value, deleted_on FROM sync_delete_data order by deleted_on asc limit 250";
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(localDbConfig, sql, this.log)];
                    case 2:
                        syncResults = _a.sent();
                        syncResults = syncResults ? syncResults.rows : [];
                        syncResults = syncResults.length > 0 ? syncResults : null;
                        this.log.debug(JSON.stringify(syncResults, null, 2));
                        if (!syncResults)
                            return [2 /*return*/, Promise.resolve("")];
                        sysDeleteQuery = this.buildDMLSyncDeleteQuery(syncResults);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(stageDbConfig, sysDeleteQuery, this.log)];
                    case 3:
                        _a.sent();
                        tableDeleteQuery = this.buildDMLDeleteQuery(syncResults);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(localDbConfig, tableDeleteQuery, this.log)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.log.warn(":::::::::::::::::::CATCH DELETE BLOCK START ::::::::::::::::::::::");
                        this.log.error(err_1);
                        throw err_1;
                    case 6:
                        this.log.info("#################### DeleteExecute #######################");
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncDMLService.prototype.execute = function (type, priority, fallback) {
        if (priority === void 0) { priority = 9; }
        return __awaiter(this, void 0, void 0, function () {
            var stageDbConfig, localDbConfig, sql, utcDate, utcDateTime, currentTime, syncResults, sourceDB, targetDB, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log.info("###########################################");
                        // App.Sleep(2000);
                        this.log.debug("!!!!!!!!!!!!!!!!!!!! " + STORE_ID + " - " + new Date().toISOString() + "!!!!!!!!!!!!!!!!!!!!");
                        stageDbConfig = SyncServiceHelper_1.SyncServiceHelper.StageDBOptions();
                        localDbConfig = SyncServiceHelper_1.SyncServiceHelper.LocalDBOptions();
                        sql = "SELECT to_char (now(), 'YYYY-MM-DD\"T\"HH24:MI:SS') as utc_date";
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(stageDbConfig, sql, this.log)];
                    case 1:
                        utcDate = _a.sent();
                        utcDateTime = utcDate.rows[0]["utc_date"];
                        currentTime = moment().toISOString();
                        this.log.info("Db Date: " + utcDateTime);
                        this.log.info("currentTime Date: " + currentTime + ", -> " + new Date(Date.parse(currentTime)) + ", utctime: " + new Date(utcDateTime) + " ");
                        if (App_1.App.DaysDiff(new Date(utcDateTime), new Date(Date.parse(currentTime))) != 0) {
                            this.log.error("+++++++++++++++++++++++ INVALID DATE SYNC +++++++++++++++++++++++");
                            return [2 /*return*/, Promise.resolve("")];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        if (stageDbConfig.host == localDbConfig.host)
                            throw { message: "Invalid DB config Data" };
                        if (fallback == null) {
                            if (type == "M") {
                                sql = " select * from sync_table \n          where (target_id = '" + STORE_ID + "' ) \n          and active = true \n          and priority = " + priority + " \n          order by updated_on  ASC \n          limit 1";
                            }
                            else {
                                sql = " select * from sync_table \n          where (source_id = '" + STORE_ID + "' ) \n          and active = true \n          and priority = " + priority + "\n          order by updated_on  ASC \n          limit 1";
                            }
                        }
                        else {
                            sql = " select * from sync_table \n        where (target_id = '" + STORE_ID + "' ) \n        and active = true \n        and map_table = '" + fallback.table_name + "' \n        order by updated_on  ASC \n        limit 1";
                        }
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(stageDbConfig, sql, this.log)];
                    case 3:
                        syncResults = _a.sent();
                        syncResults = syncResults ? syncResults.rows : [];
                        syncResults = syncResults.length > 0 ? syncResults[0] : null;
                        this.log.debug(JSON.stringify(syncResults, null, 2));
                        if (!syncResults)
                            return [2 /*return*/, Promise.resolve("")];
                        if (!(syncResults.source_id != syncResults.target_id)) return [3 /*break*/, 5];
                        sourceDB = syncResults.source_id == STAGING_ID ? stageDbConfig : localDbConfig;
                        targetDB = syncResults.target_id == STORE_ID ? localDbConfig : stageDbConfig;
                        // if (syncResults.source_id != STAGING_ID) {
                        //   syncResults.last_update = moment(syncResults.last_update)
                        //     .format()
                        //     .split("+")[0];
                        // }
                        this.log.warn("\n\n((((((<<<< " + syncResults.map_table + "::" + syncResults.last_update + " >>>>))))))\n\n");
                        if (fallback != null) {
                            syncResults.cond = fallback.cond;
                            syncResults.last_update = fallback.from_date;
                            this.log.debug(JSON.stringify(syncResults, null, 2));
                        }
                        return [4 /*yield*/, this.syncDb(sourceDB, targetDB, syncResults, currentTime)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.log.error(error_1);
                        throw error_1;
                    case 7:
                        this.log.info("###########################################");
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncDMLService.prototype.syncDb = function (sourceDb, targetDb, sync, currentTime) {
        return __awaiter(this, void 0, void 0, function () {
            var updateSyncConfig, batchSql, sql, isChunkEnd, offset, isTableUpdated, lastUpdate, rowsAvalible_1, rowsNotAvalible, soruceRes, rowsLength, primaryKeys, res, metaDataTable, updateQuery, err_2, updateQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateSyncConfig = SyncServiceHelper_1.SyncServiceHelper.StageDBOptions();
                        batchSql = [];
                        isChunkEnd = false;
                        offset = 0;
                        isTableUpdated = true;
                        lastUpdate = currentTime;
                        //let lastUpdate = await this.buildLastUpdatedDate(sourceDb, sync);
                        this.log.info("************* Last Update: " + lastUpdate + " *************");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 17, , 20]);
                        rowsAvalible_1 = null;
                        rowsNotAvalible = null;
                        _a.label = 2;
                    case 2:
                        if (!(isChunkEnd == false)) return [3 /*break*/, 15];
                        this.log.info("************* ***** *************");
                        rowsAvalible_1 = null;
                        rowsNotAvalible = null;
                        batchSql = [];
                        sql = this.buildDMLSelectQuery(sync, offset, currentTime);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(sourceDb, sql, this.log)];
                    case 3:
                        soruceRes = _a.sent();
                        if (!(soruceRes && soruceRes.rows.length != 0)) return [3 /*break*/, 13];
                        rowsLength = soruceRes.rows.length;
                        primaryKeys = soruceRes.rows.map(function (ele) { return ele[sync.map_pk]; });
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ChackAvalibleQuery(sync.map_table, soruceRes.metaData, primaryKeys, sync.map_pk, this.log)];
                    case 4:
                        sql = _a.sent();
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(targetDb, sql, this.log)];
                    case 5:
                        res = _a.sent();
                        rowsAvalible_1 = res.rows.map(function (ele) { return ele[sync.map_pk]; });
                        rowsNotAvalible = primaryKeys.filter(function (ele) { return rowsAvalible_1.indexOf(ele) < 0; });
                        this.log.debug("\t\tUpdate Records: " + sync.map_table + " --> " + rowsAvalible_1.length);
                        this.log.debug("\t\tInsert Records: " + sync.map_table + " --> " + rowsNotAvalible.length);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.MetadataTable(targetDb, sync.map_table)];
                    case 6:
                        metaDataTable = _a.sent();
                        if (!(rowsAvalible_1 && rowsAvalible_1.length > 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.PrepareQuery(sync.map_table, metaDataTable, soruceRes.rows, rowsAvalible_1, "UPDATE", sync.map_pk, this.log)];
                    case 7:
                        sql = _a.sent();
                        batchSql.push(sql);
                        _a.label = 8;
                    case 8:
                        if (!(rowsNotAvalible && rowsNotAvalible.length > 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.PrepareQuery(sync.map_table, metaDataTable, soruceRes.rows, rowsNotAvalible, "INSERT", sync.map_pk, this.log)];
                    case 9:
                        sql = _a.sent();
                        batchSql.push(sql);
                        _a.label = 10;
                    case 10:
                        if (!(batchSql && batchSql.length > 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(targetDb, batchSql, this.log)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        offset = offset + this.limitData;
                        this.log.warn("Offset: " + offset);
                        /** check loop ends */
                        if (rowsLength < this.limitData) {
                            this.log.debug("completed batch data ...");
                            isChunkEnd = true;
                        }
                        return [3 /*break*/, 14];
                    case 13:
                        isTableUpdated = false;
                        this.log.debug("No data found...");
                        isChunkEnd = true;
                        _a.label = 14;
                    case 14:
                        this.log.info("************* ***** *************");
                        return [3 /*break*/, 2];
                    case 15:
                        this.log.debug(":::::::::::::::::::UPDATE " + sync.id + " START ::::::::::::::::::::::");
                        updateQuery = null;
                        if (isTableUpdated == true) {
                            updateQuery = "update sync_table set last_update = '" + lastUpdate + "', updated_on = '" + currentTime + "'  where id='" + sync.id + "'";
                        }
                        else {
                            updateQuery = "update sync_table set  updated_on = '" + currentTime + "'  where id='" + sync.id + "'";
                        }
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(updateSyncConfig, [updateQuery], this.log)];
                    case 16:
                        _a.sent();
                        this.log.debug(":::::::::::::::::::UPDATE " + sync.id + " END ::::::::::::::::::::::\n\n");
                        return [3 /*break*/, 20];
                    case 17:
                        err_2 = _a.sent();
                        this.log.warn(":::::::::::::::::::CATCH BLOCK START ::::::::::::::::::::::");
                        this.log.error(err_2);
                        updateQuery = null;
                        if (err_2 == Props_1.Props.RECORD_NOT_FOUND) {
                            updateQuery = "update sync_table set updated_on = '" + currentTime + "'  where id='" + sync.id + "'";
                        }
                        else {
                            updateQuery = "update sync_table set updated_on = '" + currentTime + "'  where id='" + sync.id + "'";
                        }
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(updateSyncConfig, [updateQuery], this.log)];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ErrorMessage("DML", err_2, this.log)];
                    case 19:
                        _a.sent();
                        this.log.warn(":::::::::::::::::::CATCH BLOCK ENDS ::::::::::::::::::::::");
                        throw err_2;
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    SyncDMLService.prototype.fallBackData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stageDbConfig, sql, soruceRes, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stageDbConfig = SyncServiceHelper_1.SyncServiceHelper.StageDBOptions();
                        sql = "select *  from sync_fallback where target_id='" + STORE_ID + "' and is_synced = false order by from_date asc limit 10";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(stageDbConfig, sql, this.log)];
                    case 2:
                        soruceRes = _a.sent();
                        if (soruceRes && soruceRes.rows && soruceRes.rows) {
                            return [2 /*return*/, soruceRes.rows];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        throw err_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SyncDMLService.prototype.fallBackDataUpdate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var stageDbConfig, sql, soruceRes, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stageDbConfig = SyncServiceHelper_1.SyncServiceHelper.StageDBOptions();
                        sql = "update sync_fallback set is_synced = true  where id = '" + id + "'";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(stageDbConfig, [sql], this.log)];
                    case 2:
                        soruceRes = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SyncDMLService.prototype.buildLastUpdatedDate = function (sourceDb, sync) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, soruceRes, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select " + sync.sync_column + " as updated_date from " + sync.map_table + " order by  " + sync.sync_column + " desc limit 1";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(sourceDb, sql, this.log)];
                    case 2:
                        soruceRes = _a.sent();
                        if (soruceRes && soruceRes.rows && soruceRes.rows[0]) {
                            return [2 /*return*/, soruceRes.rows[0]["updated_date"]];
                        }
                        else {
                            return [2 /*return*/, moment().toISOString()];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        throw err_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SyncDMLService.prototype.buildDMLSelectQuery = function (sync, offset, currentTime) {
        var sql = "select * from " + sync.map_table + " where " + sync.cond + "  \n    and " + sync.sync_column + " >= '" + sync.last_update + "' \n    offset " + offset + " limit " + this.limitData;
        return sql;
    };
    SyncDMLService.prototype.buildDMLSyncDeleteQuery = function (deleteData) {
        var list = [];
        deleteData.map(function (val) {
            list.push("delete from " + val.table_name + " where " + val.table_id + "='" + val.table_value + "'");
        });
        return list;
    };
    SyncDMLService.prototype.buildDMLDeleteQuery = function (deleteData) {
        var list = [];
        deleteData.map(function (val) {
            list.push("delete from sync_delete_data where table_name='" + val.table_name + "' and table_id='" + val.table_id + "' and table_value='" + val.table_value + "'");
        });
        return list;
    };
    return SyncDMLService;
}());
exports.SyncDMLService = SyncDMLService;
