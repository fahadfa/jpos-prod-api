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
var GeneralJournal_1 = require("../../entities/GeneralJournal");
var GeneralJournalDAO_1 = require("../repos/GeneralJournalDAO");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var RawQuery_1 = require("../common/RawQuery");
var LedgerJournalTransDAO_1 = require("../repos/LedgerJournalTransDAO");
var LedgerJournalTrans_1 = require("../../entities/LedgerJournalTrans");
var LedgerTransDAO_1 = require("../repos/LedgerTransDAO");
var typeorm_1 = require("typeorm");
var GeneralJournalService = /** @class */ (function () {
    function GeneralJournalService() {
        this.generalJournalDAO = new GeneralJournalDAO_1.GeneralJournalDAO();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.legerJournalTrasDAO = new LedgerJournalTransDAO_1.LedgerJournalTransDAO();
        this.ledgerTrasDAO = new LedgerTransDAO_1.LedgerTransDAO();
    }
    GeneralJournalService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, legerJournalTras, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.generalJournalDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            data.status = data.posted == 0 ? "OPEN" : "POSTED";
                            data.createdDatetime = data.createdDatetime ? data.createdDatetime.toLocaleDateString() : data.createdDatetime;
                            data.lastModifiedDate = data.lastModifiedDate
                                ? data.lastModifiedDate.toLocaleDateString()
                                : data.lastModifiedDate;
                            legerJournalTras = data.legerJournalTras;
                            legerJournalTras.map(function (ele) {
                                ele.createDateTime = ele.createDateTime ? ele.createDateTime.toISOString().substr(0, 10) : ele.createDateTime;
                                ele.lastModifiedDate = ele.lastModifiedDate
                                    ? ele.lastModifiedDate.toISOString().substr(0, 10)
                                    : ele.lastModifiedDate;
                                ele.transdDate = ele.transdDate ? ele.transdDate.toISOString().substr(0, 10) : ele.transdDate;
                                ele.amountCurCredit = parseFloat(ele.amountCurCredit);
                                ele.amountCurDebit = parseFloat(ele.amountCurDebit);
                            });
                            data.legerJournalTras = legerJournalTras;
                            return [2 /*return*/, data];
                        }
                        else {
                            throw { status: 0, message: "RECORD_NOT_FOUND" };
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
    GeneralJournalService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        item.dataareaid = this.sessionInfo.dataareaid;
                        return [4 /*yield*/, this.generalJournalDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (i) {
                            i.status = i.posted == 0 || i.posted == null ? "OPEN" : "POSTED";
                            i.createdDatetime = i.createdDatetime ? i.createdDatetime.toLocaleDateString() : i.createdDatetime;
                            i.lastModifiedDate = i.lastModifiedDate ? i.lastModifiedDate.toLocaleDateString() : i.lastModifiedDate;
                            i.legerJournalTras.sort(function (item1, item2) { return item1.lineNum - item2.lineNum; });
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
    GeneralJournalService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, cond, userGroupData, account, _i, _a, item, customer, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        queryRunner = typeorm_1.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 18, 20, 22]);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 4:
                        cond = _b.sent();
                        if (!(cond == true)) return [3 /*break*/, 17];
                        reqData.dataareaid = this.sessionInfo.dataareaid;
                        return [4 /*yield*/, this.usergroupconfigDAO.entity(this.sessionInfo.usergroupconfigid)];
                    case 5:
                        userGroupData = _b.sent();
                        reqData.journalName = userGroupData.journalnameid;
                        return [4 /*yield*/, queryRunner.manager.getRepository(GeneralJournal_1.GeneralJournal).save(reqData)];
                    case 6:
                        account = _b.sent();
                        _i = 0, _a = reqData.legerJournalTras;
                        _b.label = 7;
                    case 7:
                        if (!(_i < _a.length)) return [3 /*break*/, 15];
                        item = _a[_i];
                        if (!(item.amountCurCredit == 0 && item.amountCurDebit == 0)) return [3 /*break*/, 8];
                        throw { status: 0, message: "INVALID_AMOUNT" };
                    case 8:
                        if (!(reqData.log == "cash" && !userGroupData.ledgeraccount)) return [3 /*break*/, 9];
                        throw { status: 0, message: "INVALID_LEDGER_ACCOUNT" };
                    case 9:
                        item.journalNum = reqData.journalNum;
                        item.region = userGroupData.regionId;
                        if (!(reqData.log == "cash" && item.accountType == 0)) return [3 /*break*/, 10];
                        item.accountNum =
                            item.accountNum && item.accountNum != "" ? item.accountNum : userGroupData.ledgeraccount;
                        return [3 /*break*/, 12];
                    case 10:
                        if (!(reqData.log == "cash" && item.accountType == 1)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.rawQuery.getCustomer(item.accountNum)];
                    case 11:
                        customer = _b.sent();
                        customer = customer && customer.length > 0 ? customer[0] : null;
                        if (customer && customer.walkincustomer == true) {
                            item.accountNum = userGroupData.defaultcustomerid;
                        }
                        _b.label = 12;
                    case 12:
                        item.department = userGroupData.departmentid;
                        item.costcenter = userGroupData.costCenterId;
                        item.employee = userGroupData.employeeid;
                        item.project = userGroupData.projectid;
                        item.salesman = userGroupData.salesmanid;
                        item.brand = userGroupData.brandid;
                        item.productline = userGroupData.productlineid;
                        item.dataareaid = this.sessionInfo.dataareaid;
                        item.currencyCode = userGroupData.currencycode;
                        item.modifiedDateTime = new Date(App_1.App.DateNow());
                        item.lastModifiedBy = this.sessionInfo.userName;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, queryRunner.manager.getRepository(LedgerJournalTrans_1.LedgerJournalTrans).save(item)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14:
                        _i++;
                        return [3 /*break*/, 7];
                    case 15: 
                    // let account: GeneralJournal = await this.generalJournalDAO.save(reqData);
                    // let legerJournalTras: LedgerJournalTrans[] = await this.legerJournalTrasDAO.save(reqData.legerJournalTras);
                    return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 16:
                        // let account: GeneralJournal = await this.generalJournalDAO.save(reqData);
                        // let legerJournalTras: LedgerJournalTrans[] = await this.legerJournalTrasDAO.save(reqData.legerJournalTras);
                        _b.sent();
                        return [2 /*return*/, { id: reqData.journalNum, message: "SAVED_SUCCESSFULLY" }];
                    case 17: return [3 /*break*/, 22];
                    case 18:
                        error_3 = _b.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 19:
                        _b.sent();
                        throw error_3;
                    case 20: return [4 /*yield*/, queryRunner.release()];
                    case 21:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    GeneralJournalService.prototype.getaccountNum = function () {
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
                        seqNum = usergroupconfig.generaljournalsequencegroup;
                        return [4 /*yield*/, this.rawQuery.getNumberSequence("LEDGERJOURNAL", this.sessionInfo.inventlocationid)];
                    case 2:
                        data = _a.sent();
                        if (!data) return [3 /*break*/, 4];
                        prevYear = new Date(data.lastmodifieddate).getFullYear().toString().substr(2, 2);
                        year = new Date().getFullYear().toString().substr(2, 2);
                        data.nextrec = prevYear == year ? data.nextrec : "00001";
                        hashString = data.format.slice(data.format.indexOf("#"), data.format.lastIndexOf("#") + 1);
                        salesId = data.format.replace(hashString, year) + "-" + data.nextrec;
                        return [4 /*yield*/, this.rawQuery.updateNumberSequence(data.numbersequence, data.nextrec)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, salesId];
                    case 4: throw { status: 0, message: "CANNOT_FIND_SEQUENCE_FORMAT_FROM_NUMBER_SEQUENCE_TABLE" };
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_4 = _a.sent();
                        if (error_4 == {}) {
                            error_4 = { message: "TECHNICAL_ISSUE_PLEASE_CONTACT_YOUR_TECHNICAL_TEAM" };
                        }
                        else {
                            throw { status: 0, message: "SERVER_SIDE_ERROR" };
                        }
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    GeneralJournalService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousData, mdata, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        previousData = null;
                        if (!(!item.journalNum || item.journalNum == "" || item.journalNum == "0")) return [3 /*break*/, 1];
                        item.journalNum = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.generalJournalDAO.findOne({ journalNum: item.journalNum })];
                    case 2:
                        previousData = _b.sent();
                        _b.label = 3;
                    case 3:
                        item.lastModifiedBy = this.sessionInfo.userName;
                        mdata = [];
                        if (!item.journalNum) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.generalJournalDAO.search({ journalNum: item.journalNum })];
                    case 4:
                        mdata = _b.sent();
                        _b.label = 5;
                    case 5:
                        if (!(item.journalNum == "null" || !item.journalNum)) return [3 /*break*/, 7];
                        _a = item;
                        return [4 /*yield*/, this.getaccountNum()];
                    case 6:
                        _a.journalNum = _b.sent();
                        item.dataareaid = this.sessionInfo.dataareaid;
                        item.createdBy = this.sessionInfo.userName;
                        item.createdDatetime = new Date(App_1.App.DateNow());
                        item.legerJournalTras.map(function (i) {
                            i.journalNum = item.journalNum;
                            i.createDateTime = new Date(App_1.App.DateNow());
                            i.createdBy = _this.sessionInfo.userName;
                            if (previousData) {
                                item.cashdate = previousData.cashdate;
                                i.transdDate = item.cashdate;
                            }
                            else {
                                i.transdDate = item.cashdate;
                            }
                        });
                        return [3 /*break*/, 8];
                    case 7:
                        delete item.createdDatetime;
                        if (previousData) {
                            if (item.journalNum != previousData.journalNum) {
                                if (mdata.length > 0) {
                                    return [2 /*return*/, "journalNum"];
                                }
                            }
                        }
                        _b.label = 8;
                    case 8:
                        if (previousData && previousData.posted != 1) {
                            item.lastModifiedDate = new Date(App_1.App.DateNow());
                            item.modifiedDatetime = new Date(App_1.App.DateNow());
                        }
                        item.lastModifiedBy = this.sessionInfo.userName;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    GeneralJournalService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var entity, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.generalJournalDAO.entity(id)];
                    case 1:
                        entity = _a.sent();
                        if (entity) {
                            entity.deleted = true;
                        }
                        else {
                            throw { status: 0, message: "RECORD_NOT_FOUND" };
                        }
                        entity.deletedby = this.sessionInfo.userName;
                        return [4 /*yield*/, this.generalJournalDAO.save(entity)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { id: entity.journalNum, message: "REMOVED" }];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return GeneralJournalService;
}());
exports.GeneralJournalService = GeneralJournalService;
