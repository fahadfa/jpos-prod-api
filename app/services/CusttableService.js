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
var Custtable_1 = require("../../entities/Custtable");
var CusttableDAO_1 = require("../repos/CusttableDAO");
var Props_1 = require("../../constants/Props");
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("../common/RawQuery");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var typeorm_2 = require("typeorm");
var CusttableService = /** @class */ (function () {
    function CusttableService() {
        this.db = typeorm_1.getManager();
        this.custtableDAO = new CusttableDAO_1.CusttableDAO();
        this.custTable = new Custtable_1.Custtable();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
    }
    CusttableService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.custtableDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.custtableDAO.findOne({ accountnum: id })];
                    case 2:
                        data = _a.sent();
                        _a.label = 3;
                    case 3:
                        // let count = this.rawQuery.customers_count();
                        console.log(data);
                        if (data) {
                            // data.Custgroup = {};
                            return [2 /*return*/, data];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CusttableService.prototype.getAvailableCreditLimit = function (accountNum) {
        return __awaiter(this, void 0, void 0, function () {
            var overDue, creditUtilized, customerLimit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rawQuery.getCustomerOverDue(accountNum)];
                    case 1:
                        overDue = _a.sent();
                        creditUtilized = overDue.reduce(function (res, x) { return res + parseFloat(x.invoiceamount); }, 0);
                        return [4 /*yield*/, this.custtableDAO.getCreditLimit(accountNum)];
                    case 2:
                        customerLimit = _a.sent();
                        return [2 /*return*/, parseFloat(customerLimit.creditmax.toString()) - creditUtilized];
                }
            });
        });
    };
    CusttableService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.custtableDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CusttableService.prototype.paginate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var additionalcustomer_1, customergroup_1, sabicCustomers_1, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        additionalcustomer_1 = this.sessionInfo.additionalcustomer
                            ? this.sessionInfo.additionalcustomer.split(",")
                            : [];
                        customergroup_1 = this.sessionInfo.customergroup ? this.sessionInfo.customergroup.split(",") : [];
                        sabicCustomers_1 = this.sessionInfo.sabiccustomers ? this.sessionInfo.sabiccustomers.trim().split(",") : [];
                        item.additionalcustomer = "";
                        item.sabiccustomers = "";
                        item.customergroup = "";
                        additionalcustomer_1.forEach(function (element) {
                            item.additionalcustomer +=
                                additionalcustomer_1.indexOf(element) == additionalcustomer_1.length - 1
                                    ? "'" + element + "'"
                                    : "'" + element + "', ";
                        });
                        customergroup_1.forEach(function (element) {
                            item.customergroup +=
                                customergroup_1.indexOf(element) == customergroup_1.length - 1 ? "'" + element + "'" : "'" + element + "', ";
                        });
                        sabicCustomers_1.forEach(function (element) {
                            console.log(element);
                            item.sabiccustomers +=
                                sabicCustomers_1.indexOf(element) == sabicCustomers_1.length - 1 ? "'" + element + "'" : "'" + element + "', ";
                        });
                        item.defaultcustomerid = this.sessionInfo.defaultcustomerid;
                        return [4 /*yield*/, this.custtableDAO.pagination(item)];
                    case 1:
                        data = _a.sent();
                        data.data.forEach(function (element) {
                            if (element.rcusttype && Props_1.Props.RCUSTTYPE[element.rcusttype]) {
                                element.rcusttypeen = Props_1.Props.RCUSTTYPE[element.rcusttype][1];
                                element.rcusttypear = Props_1.Props.RCUSTTYPE[element.rcusttype][2];
                            }
                            else {
                                element.rcusttypeen = "Individual";
                                element.rcusttypear = "أفراد";
                            }
                            element.phone = !element.phone || element.phone.length <= 1 ? "N/A" : element.phone;
                        });
                        if (item.filter && item.filter != "null") {
                            return [2 /*return*/, { count: data.count, data: data.data }];
                        }
                        return [2 /*return*/, { count: data.count, data: data.data }];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CusttableService.prototype.mobile_paginate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var additionalcustomer, customergroup, sabicCustomers, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        item.salesmanid = this.sessionInfo.salesmanid;
                        additionalcustomer = this.sessionInfo.additionalcustomer
                            ? this.sessionInfo.additionalcustomer.split(",")
                            : [];
                        customergroup = this.sessionInfo.customergroup ? this.sessionInfo.customergroup.split(",") : [];
                        sabicCustomers = this.sessionInfo.sabiccustomers ? this.sessionInfo.sabiccustomers.trim().split(",") : [];
                        additionalcustomer = additionalcustomer ? additionalcustomer : [];
                        customergroup = customergroup ? customergroup : [];
                        item.additionalcustomer = "";
                        item.customergroup = "";
                        item.sabiccustomers = "";
                        item.additionalcustomer = additionalcustomer.map(function (d) { return "'" + d + "'"; }).join(",");
                        item.customergroup = customergroup.map(function (d) { return "'" + d + "'"; }).join(",");
                        item.sabiccustomers = sabicCustomers.map(function (d) { return "'" + d + "'"; }).join(",");
                        item.defaultcustomerid = this.sessionInfo.defaultcustomerid;
                        item.dataareaid = this.sessionInfo.dataareaid;
                        return [4 /*yield*/, this.custtableDAO.mobile_pagination(item)];
                    case 1:
                        data = _a.sent();
                        data.forEach(function (element) {
                            // if (element.rcusttype && Props.RCUSTTYPE[element.rcusttype]) {
                            //   element.rcusttypeen = Props.RCUSTTYPE[element.rcusttype][1];
                            //   element.rcusttypear = Props.RCUSTTYPE[element.rcusttype][2];
                            // } else {
                            //   element.rcusttypeen = "Individual";
                            //   element.rcusttypear = "أفراد";
                            // }
                            element.phone = !element.phone || element.phone.length <= 1 ? "N/A" : element.phone;
                        });
                        return [2 /*return*/, data];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CusttableService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, cond, returnData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 9, 11, 13]);
                        delete reqData.Custgroup;
                        console.log(reqData.Custgroup);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 4:
                        cond = _a.sent();
                        console.log(cond);
                        if (!(cond == true)) return [3 /*break*/, 7];
                        reqData.walkincustomer = true;
                        //let customer = await this.custtableDAO.save(reqData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(Custtable_1.Custtable).save(reqData)];
                    case 5:
                        //let customer = await this.custtableDAO.save(reqData);
                        _a.sent();
                        returnData = { id: reqData.accountnum, message: "SAVED_SUCCESSFULLY" };
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, returnData];
                    case 7:
                        if (cond == "phone") {
                            throw { message: "RECORD_ALREADY_EXISTS" };
                        }
                        else {
                            throw { message: "INVALID_DATA" };
                        }
                        _a.label = 8;
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        error_5 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 10:
                        _a.sent();
                        throw error_5;
                    case 11: return [4 /*yield*/, queryRunner.release()];
                    case 12:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    CusttableService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousData, mdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item.accountnum);
                        previousData = null;
                        if (!(!item.accountnum || item.accountnum == "" || item.accountnum == "0")) return [3 /*break*/, 1];
                        item.accountnum = null;
                        return [3 /*break*/, 3];
                    case 1:
                        console.log(item.accountnum);
                        return [4 /*yield*/, this.custtableDAO.findOne({ accountnum: item.accountnum })];
                    case 2:
                        previousData = _a.sent();
                        console.log(previousData);
                        _a.label = 3;
                    case 3:
                        mdata = [];
                        if (!item.phone) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.custtableDAO.findAll({ phone: item.phone })];
                    case 4:
                        mdata = _a.sent();
                        _a.label = 5;
                    case 5:
                        // console.log(mdata);
                        if (!item.accountnum) {
                            if (mdata.length > 0) {
                                return [2 /*return*/, "phone"];
                            }
                            else {
                                if (previousData) {
                                    item.lastmodifiedby = this.sessionInfo.userName;
                                    item.lastmodifieddate = new Date(App_1.App.DateNow());
                                }
                                else {
                                    item.accountnum = item.phone.toString();
                                    item.inventlocation = this.sessionInfo.inventlocationid;
                                    item.createdDateTime = new Date(App_1.App.DateNow());
                                    item.createdby = this.sessionInfo.userName;
                                    item.citycode = this.sessionInfo.showroomCityCode;
                                    item.districtcode = this.sessionInfo.showroomDistrictCode;
                                    item.countryCode = this.sessionInfo.showroomCountryCode
                                        ? this.sessionInfo.showroomCountryCode
                                        : "KSA: Kingdom of Saudi Arabia";
                                    item.walkincustomer = true;
                                    item.paymtermid = "CASH";
                                    item.dataareaId = this.sessionInfo.dataareaid;
                                }
                                // item.accountnum = await this.getAccountNum();
                            }
                        }
                        item.lastmodifieddate = new Date(App_1.App.DateNow());
                        item.lastmodifiedby = this.sessionInfo.userName;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CusttableService.prototype.getAccountNum = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userGroupConfigData, regionNumber, showroomId, data, hashString, prevYear, year, accountNum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usergroupconfigDAO.findOne({ groupid: this.sessionInfo.groupid })];
                    case 1:
                        userGroupConfigData = _a.sent();
                        regionNumber = userGroupConfigData.regionId;
                        showroomId = userGroupConfigData.costCenterId;
                        return [4 /*yield*/, this.rawQuery.getNumberSequence("CUSTOMER", "ALL")];
                    case 2:
                        data = _a.sent();
                        hashString = data.format.slice(data.format.indexOf("#"), data.format.lastIndexOf("#") + 1);
                        prevYear = new Date(data.lastmodifieddate).getFullYear().toString().substr(2, 2);
                        year = new Date().getFullYear().toString().substr(2, 2);
                        data.nextrec = prevYear == year ? data.nextrec : 1;
                        accountNum = data.format.replace(hashString, regionNumber + "-" + showroomId + "-" + year + "-" + data.nextrec);
                        console.log(accountNum);
                        return [4 /*yield*/, this.rawQuery.updateNumberSequence(data.numbersequence, data.nextrec)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, accountNum];
                }
            });
        });
    };
    CusttableService.prototype.delete = function (accountNum) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.custtableDAO.entity(accountNum)];
                    case 1:
                        customer = _a.sent();
                        if (!customer) return [3 /*break*/, 2];
                        customer.deleted = true;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.custtableDAO.findOne({ accountnum: accountNum })];
                    case 3:
                        customer = _a.sent();
                        customer.deleted = true;
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.custtableDAO.save(customer)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { id: customer.accountnum, message: "REMOVED" }];
                    case 6:
                        error_6 = _a.sent();
                        throw error_6;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return CusttableService;
}());
exports.CusttableService = CusttableService;
