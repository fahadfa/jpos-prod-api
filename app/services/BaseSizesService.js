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
var BaseSizesDAO_1 = require("../repos/BaseSizesDAO");
var RawQuery_1 = require("../common/RawQuery");
var CusttableDAO_1 = require("../repos/CusttableDAO");
var BaseSizesService = /** @class */ (function () {
    function BaseSizesService() {
        this.rawQuery = new RawQuery_1.RawQuery();
        this.custtableDAO = new CusttableDAO_1.CusttableDAO();
        this.baseSizesDAO = new BaseSizesDAO_1.BaseSizesDAO();
    }
    BaseSizesService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseSizesDAO.entity(id)];
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
    BaseSizesService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        params.base = { id: params.baseId };
                        return [4 /*yield*/, this.baseSizesDAO.search(params)];
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
    BaseSizesService.prototype.getbaseSizes = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var paramsData, data, _i, data_1, size, queryData, _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        paramsData = { base: { id: params.baseId } };
                        return [4 /*yield*/, this.baseSizesDAO.search(paramsData)];
                    case 1:
                        data = _b.sent();
                        _i = 0, data_1 = data;
                        _b.label = 2;
                    case 2:
                        if (!(_i < data_1.length)) return [3 /*break*/, 5];
                        size = data_1[_i];
                        queryData = params;
                        queryData.inventsizeid = size.sizes.code;
                        _a = size;
                        return [4 /*yield*/, this.getPrice(queryData)];
                    case 3:
                        _a.price = _b.sent();
                        console.log(size.price);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, data];
                    case 6:
                        error_3 = _b.sent();
                        throw error_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizesService.prototype.getPrice = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultcustomer, amount, _a, amount_1, _b, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 20, , 21]);
                        defaultcustomer = void 0;
                        if (!!reqData.pricegroup) return [3 /*break*/, 2];
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(this.sessionInfo.defaultcustomerid)];
                    case 1:
                        defaultcustomer = _c.sent();
                        reqData.pricegroup = defaultcustomer.pricegroup;
                        reqData.currency = defaultcustomer.currency;
                        _c.label = 2;
                    case 2:
                        amount = [{ amount: 0 }];
                        return [4 /*yield*/, this.rawQuery.getHighPrice(reqData)];
                    case 3:
                        amount = _c.sent();
                        if (!(amount.length == 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rawQuery.getCustomerSpecificPrice(reqData)];
                    case 4:
                        amount = _c.sent();
                        _c.label = 5;
                    case 5:
                        if (!(amount.length == 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.rawQuery.getNormalPrice(reqData)];
                    case 6:
                        amount = _c.sent();
                        _c.label = 7;
                    case 7:
                        if (!(amount.length == 0)) return [3 /*break*/, 18];
                        _c.label = 8;
                    case 8:
                        _c.trys.push([8, 16, , 17]);
                        if (!!defaultcustomer) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.custtableDAO.entity(this.sessionInfo.defaultcustomerid)];
                    case 9:
                        _a = _c.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        _a = defaultcustomer;
                        _c.label = 11;
                    case 11:
                        defaultcustomer = _a;
                        reqData.pricegroup = defaultcustomer.pricegroup;
                        reqData.currency = defaultcustomer.currency;
                        amount_1 = [];
                        if (!(amount_1.length == 0)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.rawQuery.getCustomerSpecificPrice(reqData)];
                    case 12:
                        amount_1 = _c.sent();
                        _c.label = 13;
                    case 13:
                        if (!(amount_1.length == 0)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.rawQuery.getNormalPrice(reqData)];
                    case 14:
                        amount_1 = _c.sent();
                        _c.label = 15;
                    case 15:
                        if (amount_1.length == 0) {
                            return [2 /*return*/, { amount: 0 }];
                        }
                        else {
                            amount_1[0].amount = Math.ceil(amount_1[0].amount);
                            return [2 /*return*/, amount_1[0]];
                        }
                        return [3 /*break*/, 17];
                    case 16:
                        _b = _c.sent();
                        return [2 /*return*/, { amount: 0 }];
                    case 17: return [3 /*break*/, 19];
                    case 18:
                        amount[0].amount = Math.ceil(amount[0].amount);
                        return [2 /*return*/, amount[0]];
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        error_4 = _c.sent();
                        throw error_4;
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    return BaseSizesService;
}());
exports.BaseSizesService = BaseSizesService;
