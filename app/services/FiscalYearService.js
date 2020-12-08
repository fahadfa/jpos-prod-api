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
var FiscalYearDAO_1 = require("../repos/FiscalYearDAO");
var FiscalYearService = /** @class */ (function () {
    function FiscalYearService() {
        this.fiscalyearRepository = new FiscalYearDAO_1.FiscalYearDAO();
    }
    FiscalYearService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fiscalyearRepository.entity(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FiscalYearService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fiscalyearRepository.search(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (ele) {
                            ele.status = ele.closing == 1 ? "Posted" : "Open";
                            ele.createdDateTime = ele.createdDateTime ? ele.createdDateTime.toLocaleDateString() : ele.createdDateTime;
                            ele.lastModifiedDate = ele.lastModifiedDate ? ele.lastModifiedDate.toLocaleDateString() : ele.lastModifiedDate;
                            ele.startDate = ele.startDate.toLocaleDateString();
                            ele.endingDate = ele.endingDate.toLocaleDateString();
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
    FiscalYearService.prototype.save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, data, year, i, obj, _a, fiscalyearData, returnData, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        return [4 /*yield*/, this.validate(item)];
                    case 1:
                        cond = _b.sent();
                        if (!(cond == true)) return [3 /*break*/, 8];
                        data = [];
                        console.log();
                        year = item.yearNo;
                        i = 1;
                        _b.label = 2;
                    case 2:
                        if (!(i <= 12)) return [3 /*break*/, 6];
                        _a = {
                            yearNo: item.yearNo,
                            closing: item.closing,
                            financialDataareaid: item.financialDataareaid,
                            dataareaid: item.dataareaid,
                            recversion: item.recversion ? item.recversion : 0,
                            recid: item.recid ? item.recid : 0,
                            lastModifiedBy: item.lastModifiedBy,
                            createdDateTime: item.createdDateTime,
                            createdBy: item.createdBy,
                            lastModifiedDate: item.lastModifiedDate
                        };
                        return [4 /*yield*/, App_1.App.DaysBack(new Date(item.yearNo, i - 1, 1), 0)];
                    case 3:
                        _a.startDate = _b.sent();
                        return [4 /*yield*/, App_1.App.DaysBack(new Date(i == 12 ? parseInt(year) + 1 : item.yearNo, i == 12 ? 0 : i, 1), 1)];
                    case 4:
                        obj = (_a.endingDate = _b.sent(),
                            _a);
                        data.push(obj);
                        _b.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 2];
                    case 6:
                        console.log(data);
                        return [4 /*yield*/, this.fiscalyearRepository.save(data)];
                    case 7:
                        fiscalyearData = _b.sent();
                        returnData = { id: item.yearNo, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 8:
                        if (cond == "year") {
                            throw { message: "DUPLICATE_RECORD" };
                        }
                        else {
                            throw { message: "INVALID_DATA" };
                        }
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_3 = _b.sent();
                        throw error_3;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    FiscalYearService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousItem, condData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        previousItem = null;
                        if (!(!item.yearNo || item.yearNo.toString() == "" || item.yearNo.toString() == "0")) return [3 /*break*/, 1];
                        throw "YEAR_REQUIRED";
                    case 1: return [4 /*yield*/, this.fiscalyearRepository.findOne({ yearNo: item.yearNo })];
                    case 2:
                        previousItem = _a.sent();
                        console.log(previousItem);
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.fiscalyearRepository.search({ yearNo: item.yearNo })];
                    case 4:
                        condData = _a.sent();
                        console.log(condData);
                        if (condData.length > 0) {
                            return [2 /*return*/, "year"];
                        }
                        item.lastModifiedBy = this.sessionInfo.userName;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.createdDateTime = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.dataareaid = this.sessionInfo.dataareaid;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    FiscalYearService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result, returnData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.fiscalyearRepository.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!data)
                            throw { message: "RECORD_NOT_FOUND" };
                        return [4 /*yield*/, this.fiscalyearRepository.delete(data)];
                    case 2:
                        result = _a.sent();
                        returnData = { id: id, message: "REMOVED" };
                        return [2 /*return*/, returnData];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return FiscalYearService;
}());
exports.FiscalYearService = FiscalYearService;
