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
var VisitCustomer_1 = require("../../entities/VisitCustomer");
var VisitCustomerDAO_1 = require("../repos/VisitCustomerDAO");
var Props_1 = require("../../constants/Props");
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("../common/RawQuery");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var VisitCustomerService = /** @class */ (function () {
    function VisitCustomerService() {
        this.db = typeorm_1.getManager();
        this.visitCustomerDAO = new VisitCustomerDAO_1.VisitCustomerDAO();
        this.salesTableDAO = new SalesTableDAO_1.SalesTableDAO();
        this.visitCustomer = new VisitCustomer_1.VisitCustomer();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
    }
    VisitCustomerService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.visitCustomerDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        data.visitorSequenceNumber;
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VisitCustomerService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.visitCustomerDAO.search(item)];
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
    VisitCustomerService.prototype.searchVisitors = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, citycodes_1, cities_1, uniqueCodes, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.salesTableDAO.searchVisitors(item)];
                    case 1:
                        data_1 = _a.sent();
                        console.log("========================", data_1);
                        citycodes_1 = [];
                        data_1.forEach(function (item) {
                            if (item.citycode != null && item.citycode && item.citycode.toString().trim().length > 0) {
                                citycodes_1.push(item.citycode);
                            }
                        });
                        if (!(citycodes_1.length > 0)) return [3 /*break*/, 3];
                        uniqueCodes = new Set(citycodes_1);
                        return [4 /*yield*/, this.salesTableDAO.searchCities(Array.from(uniqueCodes))];
                    case 2:
                        cities_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        cities_1 = [];
                        _a.label = 4;
                    case 4:
                        data_1.forEach(function (item, index) {
                            var city = cities_1.find(function (cityObj) {
                                return cityObj.cityname == item.citycode;
                            });
                            if (city) {
                                data_1[index] = Object.assign({}, data_1[index], city);
                            }
                        });
                        return [2 /*return*/, data_1];
                    case 5:
                        error_3 = _a.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    VisitCustomerService.prototype.save = function (reqData, queryRunner) {
        if (queryRunner === void 0) { queryRunner = null; }
        return __awaiter(this, void 0, void 0, function () {
            var userGroupConfigData, cond, visitor, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.usergroupconfigDAO.findOne({ groupid: this.sessionInfo.groupid })];
                    case 1:
                        userGroupConfigData = _a.sent();
                        reqData.regionNumber = userGroupConfigData.regionId;
                        reqData.userGroupId = userGroupConfigData.groupid;
                        reqData.showroomId = userGroupConfigData.costCenterId;
                        reqData.dataareaid = this.sessionInfo.dataareaid;
                        return [4 /*yield*/, this.validate(reqData)];
                    case 2:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 7];
                        // console.log(this.sessionInfo);
                        reqData.userGroupId = this.sessionInfo.groupid;
                        if (!queryRunner) return [3 /*break*/, 4];
                        return [4 /*yield*/, queryRunner.manager.getRepository(VisitCustomer_1.VisitCustomer).save(reqData)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.visitCustomerDAO.save(reqData)];
                    case 5:
                        visitor = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, { id: reqData.visitorSequenceNumber, message: Props_1.Props.SAVED_SUCCESSFULLY }];
                    case 7:
                        if (cond == "VisitSeqNumber") {
                            throw { message: "RECORD_ALREADY_EXISTS" };
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        error_4 = _a.sent();
                        throw error_4;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    VisitCustomerService.prototype.getVisitCustNum = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var result, data, hashString, prevYear, year, visitCustNum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.visitCustomer.showroomId = item.showroomId;
                        return [4 /*yield*/, this.visitCustomerDAO.search(item)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.rawQuery.getNumberSequence("VISITOR", "ALL")];
                    case 2:
                        data = _a.sent();
                        hashString = data.format.slice(data.format.indexOf("#"), data.format.lastIndexOf("#") + 1);
                        prevYear = new Date(data.lastmodifieddate).getFullYear().toString().substr(2, 2);
                        year = new Date().getFullYear().toString().substr(2, 2);
                        data.nextrec = prevYear == year ? data.nextrec : 1;
                        visitCustNum = data.format.replace(hashString, item.regionNumber + "-" + this.visitCustomer.showroomId + "-" + year + "-" + data.nextrec);
                        // let visitCustNum: string = data.format.substr(0, 3) + item.regionNumber + "-" + this.visitCustomer.showroomId + "-" + year + "-" + data.nextrec;
                        console.log(visitCustNum);
                        return [4 /*yield*/, this.rawQuery.updateNumberSequence("VST_NUMBER", data.nextrec)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, visitCustNum];
                }
            });
        });
    };
    VisitCustomerService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousData, mdata, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        previousData = null;
                        if (!(!item.visitorSequenceNumber || item.visitorSequenceNumber == "" || item.visitorSequenceNumber == "0")) return [3 /*break*/, 1];
                        item.visitorSequenceNumber = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.visitCustomerDAO.findOne({ visitorSequenceNumber: item.visitorSequenceNumber })];
                    case 2:
                        previousData = _b.sent();
                        _b.label = 3;
                    case 3:
                        item.lastModifiedBy = this.sessionInfo.userName;
                        return [4 /*yield*/, this.visitCustomerDAO.findAll({ visitorSequenceNumber: item.visitorSequenceNumber })];
                    case 4:
                        mdata = _b.sent();
                        if (!!item.visitorSequenceNumber) return [3 /*break*/, 6];
                        _a = item;
                        return [4 /*yield*/, this.getVisitCustNum(item)];
                    case 5:
                        _a.visitorSequenceNumber = _b.sent();
                        item.createdDateTime = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.dateOfVisit = new Date(App_1.App.DateNow());
                        return [3 /*break*/, 7];
                    case 6:
                        console.log(item.visitorSequenceNumber);
                        if (item.visitorSequenceNumber != previousData.visitorSequenceNumber) {
                            if (mdata.length > 0) {
                                return [2 /*return*/, "VisitSeqNumber"];
                            }
                        }
                        _b.label = 7;
                    case 7:
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        // console.log("iso", App.dateNow());
                        // console.log("normal", new Date());
                        // console.log("iso converted", new Date(App.DateNow()));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    VisitCustomerService.prototype.paginate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.visitCustomerDAO.pagination(item)];
                    case 1:
                        data = _a.sent();
                        data.data.map(function (v) {
                            v.dateOfVisit = v.dateOfVisit;
                        });
                        return [2 /*return*/, { count: data.count, data: data.data }];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VisitCustomerService.prototype.mobilepaginate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.visitCustomerDAO.mobile_pagination(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            v.dateOfVisit = v.dateOfVisit;
                        });
                        return [2 /*return*/, data];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return VisitCustomerService;
}());
exports.VisitCustomerService = VisitCustomerService;
