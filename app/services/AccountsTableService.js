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
var App_1 = require("../../utils/App");
var AccountsTableDAO_1 = require("../repos/AccountsTableDAO");
var Props_1 = require("../../constants/Props");
var RawQuery_1 = require("../common/RawQuery");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var AccountsTableService = /** @class */ (function () {
    function AccountsTableService() {
        this.accountsTableDAO = new AccountsTableDAO_1.AccountsTableDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
    }
    AccountsTableService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.accountsTableDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            data.closed = data.closed == 1 ? true : false;
                            data.locked = data.locked == 1 ? true : false;
                            data.createdDateTime = data.createdDateTime ? data.createdDateTime.toLocaleDateString() : data.createdDateTime;
                            data.lastModifiedDate = data.lastModifiedDate
                                ? data.lastModifiedDate.toLocaleDateString()
                                : data.lastModifiedDate;
                            return [2 /*return*/, data];
                        }
                        else {
                            throw { message: "DATA_NOT_FOUND" };
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountsTableService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        item.dataareaid = this.sessionInfo.dataareaid;
                        return [4 /*yield*/, this.accountsTableDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (element) {
                            element.accountTypeName = Props_1.Props.ACCOUNT_TYPE[element.accountType];
                            element.closed = element.closed == 1 ? true : false;
                            element.locked = element.locked == 1 ? true : false;
                            element.createdDatetime = element.createdDatetime
                                ? element.createdDatetime.toLocaleDateString()
                                : element.createdDatetime;
                            element.lastModifiedDate = element.lastModifiedDate
                                ? element.lastModifiedDate.toLocaleDateString()
                                : element.lastModifiedDate;
                        });
                        return [2 /*return*/, data];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AccountsTableService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, account, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 1:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 3];
                        console.log(this.sessionInfo);
                        return [4 /*yield*/, this.accountsTableDAO.save(reqData)];
                    case 2:
                        account = _a.sent();
                        return [2 /*return*/, { id: account.accountNum, message: "SAVED_SUCCESSFULLY" }];
                    case 3:
                        if (cond == "required") {
                            throw { message: "ACCOUNT_NUM_REQUIREMENT" };
                        }
                        else if (cond == "accountNum") {
                            throw { message: "RECORD_ALREADY_EXISTS" };
                        }
                        else {
                            throw { message: "INVALID_DATA" };
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AccountsTableService.prototype.getaccountNum = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usergroupconfig, data, seqNum, prevYear, year, hashString, salesId, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.usergroupconfigDAO.findOne({
                                inventlocationid: this.sessionInfo.inventlocationid,
                            })];
                    case 1:
                        usergroupconfig = _a.sent();
                        data = void 0;
                        seqNum = usergroupconfig.legeraccountsequencegroup;
                        return [4 /*yield*/, this.rawQuery.getNumberSequence("LEDGERJOURNAL", this.sessionInfo.inventlocationid)];
                    case 2:
                        data = _a.sent();
                        if (!data) return [3 /*break*/, 4];
                        prevYear = new Date(data.lastmodifieddate).getFullYear().toString().substr(2, 2);
                        year = new Date().getFullYear().toString().substr(2, 2);
                        data.nextrec = prevYear == year ? data.nextrec : 1;
                        hashString = data.format.slice(data.format.indexOf("#"), data.format.lastIndexOf("#") + 1);
                        salesId = data.format.replace(hashString, data.nextrec) + "-" + year;
                        console.log(salesId);
                        return [4 /*yield*/, this.rawQuery.updateNumberSequence(data.numbersequence, data.nextrec)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, salesId];
                    case 4: throw { message: "CANNOT_FIND_SEQUENCE_FORMAT_FROM_NUMBER_SEQUENCE_TABLE" };
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_4 = _a.sent();
                        if (error_4 == {}) {
                            error_4 = "SERVER_SIDE_ERROR";
                        }
                        throw error_4;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AccountsTableService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousData, mdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        previousData = null;
                        if (!(!item.accountNum || item.accountNum == "" || item.accountNum == "0")) return [3 /*break*/, 1];
                        item.accountNum = null;
                        return [2 /*return*/, "required"];
                    case 1: return [4 /*yield*/, this.accountsTableDAO.findOne({ accountNum: item.accountNum })];
                    case 2:
                        previousData = _a.sent();
                        _a.label = 3;
                    case 3:
                        item.lastModifiedBy = this.sessionInfo.userName;
                        return [4 /*yield*/, this.accountsTableDAO.search({ accountNum: item.accountNum })];
                    case 4:
                        mdata = _a.sent();
                        if (!previousData) {
                            // item.accountNum = await this.getaccountNum();
                            item.dataareaid = this.sessionInfo.dataareaid;
                            item.createdBy = this.sessionInfo.userName;
                            item.createdDatetime = new Date(App_1.App.DateNow());
                        }
                        else {
                            console.log(item.accountNum);
                            if (item.accountNum != previousData.accountNum) {
                                if (mdata.length > 0) {
                                    return [2 /*return*/, "accountNum"];
                                }
                            }
                        }
                        item.modifiedDatetime = new Date(App_1.App.DateNow());
                        item.lastModifiedBy = this.sessionInfo.userName;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AccountsTableService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsTable, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.accountsTableDAO.entity(id)];
                    case 1:
                        accountsTable = _a.sent();
                        if (accountsTable) {
                            accountsTable.deleted = true;
                        }
                        else {
                            throw { message: Props_1.Props.RECORD_NOT_FOUND };
                        }
                        accountsTable.deletedby = this.sessionInfo.userName;
                        return [4 /*yield*/, this.accountsTableDAO.save(accountsTable)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { id: accountsTable.accountNum, message: "REMOVED" }];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AccountsTableService;
}());
exports.AccountsTableService = AccountsTableService;
