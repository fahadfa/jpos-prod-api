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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// let sql = require("mssql");
var App_1 = require("../../utils/App");
var InventTrans_1 = require("../../entities/InventTrans");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var InventoryOnhandDAO_1 = require("../repos/InventoryOnhandDAO");
var RawQuery_1 = require("../common/RawQuery");
var uuid = require("uuid");
var fs = __importStar(require("fs"));
var Log_1 = require("../../utils/Log");
var OpeningBalanceService = /** @class */ (function () {
    function OpeningBalanceService() {
        var _this = this;
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            var mssqlClient, connectionString;
            return __generator(this, function (_a) {
                try {
                    mssqlClient = require("mssql/msnodesqlv8");
                    connectionString = "server=localhost;Database=DAX;Trusted_Connection=Yes;Driver={SQL Server Native Client 10.0.1600}";
                    // const connectionString = mssqlString;
                    this.pool = new mssqlClient.ConnectionPool(connectionString);
                }
                catch (err) {
                    Log_1.log.error(err);
                    this.pool = null;
                }
                return [2 /*return*/];
            });
        }); };
        // this.run();
        this.inventtransDAO = new InventTransDAO_1.InventorytransDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventoryTrans = new InventTrans_1.Inventorytrans();
        this.inventoryOnhandDAO = new InventoryOnhandDAO_1.InventoryOnhandDAO();
    }
    OpeningBalanceService.prototype.getOpeningBalance = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var fs_1, rawdata, syncDataDate, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        //await sql.connect();
                        // const conn = new sql.connect(config);
                        Log_1.log.info(reqData);
                        fs_1 = require("fs");
                        rawdata = {
                            date: reqData.date,
                            inventlocationid: this.sessionInfo.inventlocationid,
                            dataareaid: this.sessionInfo.dataareaid,
                            host: reqData.server,
                            username: reqData.username,
                            password: reqData.password,
                            database: reqData.database,
                        };
                        syncDataDate = JSON.stringify(rawdata);
                        Log_1.log.info(syncDataDate);
                        fs_1.writeFile(__dirname + "/data.json", syncDataDate, function (err) {
                            if (err) {
                                Log_1.log.error(err);
                            }
                            else {
                                Log_1.log.info("Successfully wrote file");
                            }
                        });
                        return [4 /*yield*/, this.get_open_bal_data_for_onhand(rawdata)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_1 = _a.sent();
                        Log_1.log.error(err_1);
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OpeningBalanceService.prototype.save = function (reqData, fromCsv) {
        if (fromCsv === void 0) { fromCsv = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cond, chunkData, _i, chunkData_1, item, inventtransData, child_process, syncFile, fs_2, returnData, err_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        return [4 /*yield*/, this.validate(reqData, fromCsv)];
                    case 1:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.rawQuery.deleteBalances(this.sessionInfo.inventlocationid, fromCsv)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.chunkArray(reqData, 100)];
                    case 3:
                        chunkData = _a.sent();
                        _i = 0, chunkData_1 = chunkData;
                        _a.label = 4;
                    case 4:
                        if (!(_i < chunkData_1.length)) return [3 /*break*/, 7];
                        item = chunkData_1[_i];
                        item.map(function (v) {
                            v.id = uuid() + App_1.App.UniqueCode();
                            v.dateinvent = new Date(App_1.App.DateNow());
                            v.datephysical = new Date(App_1.App.DateNow());
                            v.transactionClosed = true;
                            v.invoiceid = "OPEN_BALANCE";
                            v.reserveStatus = "OPEN_BALANCE";
                            v.inventlocationid = _this.sessionInfo.inventlocationid;
                            v.dataareaid = "ajp";
                        });
                        return [4 /*yield*/, this.inventtransDAO.savearr(item)];
                    case 5:
                        inventtransData = _a.sent();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        if (fromCsv == false) {
                            child_process = require("child_process");
                            syncFile = __dirname + "/SyncPrevTransactionsServices.ts";
                            syncFile = fs.existsSync(syncFile)
                                ? __dirname + "/SyncPrevTransactionsServices.ts"
                                : __dirname + "/SyncPrevTransactionsServices.js";
                            child_process.fork(syncFile);
                        }
                        else {
                            fs_2 = require("fs");
                            fs_2.unlinkSync(__dirname + "/data.json");
                        }
                        returnData = { status: 1, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 8:
                        if (cond == "INVENTORY_NOT_RELATED_TO_THIS_STORE") {
                            throw { status: 0, message: "INVENTORY NOT REATED TO THIS STORE" };
                        }
                        else if (cond == "INVALID_DATA") {
                            throw {
                                status: 0,
                                message: "some of the itemids, configids and inventsizeids are null or empty values please correct the data and upload again ",
                            };
                        }
                        else {
                            throw { message: "invalid data" };
                        }
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        err_2 = _a.sent();
                        Log_1.log.error(err_2);
                        throw err_2;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    OpeningBalanceService.prototype.validate = function (data, fromCsv) {
        if (fromCsv === void 0) { fromCsv = false; }
        return __awaiter(this, void 0, void 0, function () {
            var filteredData, invalidData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fromCsv == true) {
                            data[0];
                            filteredData = data.filter(function (v) { return v.inventlocationid.trim() != process.env.ENV_STORE_ID; });
                            if (filteredData.length > 0) {
                                return [2 /*return*/, "INVENTORY_NOT_RELATED_TO_THIS_STORE"];
                            }
                        }
                        return [4 /*yield*/, data.filter(function (v) {
                                return v.itemid == null ||
                                    v.itemid == "" ||
                                    v.configid == null ||
                                    v.configid == "" ||
                                    v.inventsizeid == null ||
                                    v.inventsizeid == "";
                            })];
                    case 1:
                        invalidData = _a.sent();
                        if (invalidData.length > 0) {
                            return [2 /*return*/, "INVALID_DATA"];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    OpeningBalanceService.prototype.chunkArray = function (myArray, chunk_size) {
        return __awaiter(this, void 0, void 0, function () {
            var index, arrayLength, tempArray, myChunk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        arrayLength = myArray.length;
                        tempArray = [];
                        for (index = 0; index < arrayLength; index += chunk_size) {
                            myChunk = myArray.slice(index, index + chunk_size);
                            // Do something if you want with the group
                            tempArray.push(myChunk);
                        }
                        return [4 /*yield*/, tempArray];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OpeningBalanceService.prototype.get_open_bal_data_for_onhand = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var mssqlClient, mssqlString, connectionString, query, rows, result, err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        mssqlClient = require("mssql");
                        mssqlString = "mssql://" + reqData.username + ":" + reqData.password + "@" + reqData.host + "/" + reqData.database;
                        connectionString = mssqlString;
                        this.pool = new mssqlClient.ConnectionPool(connectionString);
                        return [4 /*yield*/, this.pool.connect()];
                    case 1:
                        _a.sent();
                        Log_1.log.info("eonnection established");
                        query = "SELECT\n        i.ITEMID as itemid, \n        i.ConfigId as configid, \n        i.InventSizeId as inventsizeid, \n        i.BatchNo as batchno, \n        SUM(i.qty) as qty\n        FROM INVENTTRANS i\n        inner join  inventtable  B ON i.itemid = B.itemid\n        where i.ITEMID NOT LIKE 'HSN%' and i.DATEPHYSICAL < '" + reqData.date + "'\n        group by i.ITEMID, i.ConfigId, i.InventSizeId, i.BatchNo HAVING sum(QTY) >0 ";
                        //await sql.query(connectionString, query, (err:any, rows:any) => {
                        Log_1.log.info(query);
                        return [4 /*yield*/, this.pool.request().query(query)];
                    case 2:
                        rows = _a.sent();
                        return [4 /*yield*/, this.pool.close()];
                    case 3:
                        _a.sent();
                        result = rows.recordset;
                        result.map(function (v) {
                            v.inventlocationid = _this.sessionInfo.inventlocationid;
                            if (v.qty > 0 && v.qty < 1) {
                                v.qty = 1;
                            }
                        });
                        return [2 /*return*/, result];
                    case 4:
                        err_3 = _a.sent();
                        Log_1.log.error(err_3);
                        throw { status: 0, message: "INVALID_CREDENTIALS" };
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OpeningBalanceService.prototype.check_data_complete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fs;
            return __generator(this, function (_a) {
                fs = require("fs");
                // log.info("88888888888888888888888888888888888888888888888888888888888888888888888");
                try {
                    // log.info(fs.existsSync(`${__dirname}/data.json`));
                    if (fs.existsSync(__dirname + "/data.json")) {
                        return [2 /*return*/, false];
                    }
                    else {
                        return [2 /*return*/, true];
                    }
                }
                catch (err) {
                    Log_1.log.error(err);
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    return OpeningBalanceService;
}());
exports.OpeningBalanceService = OpeningBalanceService;
