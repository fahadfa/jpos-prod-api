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
var RawQuery_1 = require("../common/RawQuery");
var CusttableDAO_1 = require("../repos/CusttableDAO");
var typeorm_1 = require("typeorm");
var PriceService = /** @class */ (function () {
    function PriceService() {
        this.rawQuery = new RawQuery_1.RawQuery();
        this.custtableDAO = new CusttableDAO_1.CusttableDAO();
        this.db = typeorm_1.getManager();
    }
    PriceService.prototype.getPrice = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultcustomer, queryData, amount, _a, amount_1, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 17, , 18]);
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
                        queryData = {
                            custaccount: reqData.custaccount,
                            itemid: reqData.itemid,
                            inventsizeid: reqData.inventsizeid,
                            pricegroup: reqData.pricegroup,
                            configid: reqData.configid,
                            currency: "SAR",
                            dataareaid: reqData.dataareaid,
                            warehouseid: reqData.warehouseid,
                        };
                        amount = [];
                        return [4 /*yield*/, this.rawQuery.getCustomerSpecificPrice(queryData)];
                    case 3:
                        amount = _c.sent();
                        if (!(amount.length == 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rawQuery.getNormalPrice(queryData)];
                    case 4:
                        amount = _c.sent();
                        _c.label = 5;
                    case 5:
                        if (!(amount.length == 0)) return [3 /*break*/, 15];
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 13, , 14]);
                        if (!!defaultcustomer) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.custtableDAO.entity(this.sessionInfo.defaultcustomerid)];
                    case 7:
                        _a = _c.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        _a = defaultcustomer;
                        _c.label = 9;
                    case 9:
                        defaultcustomer = _a;
                        queryData.pricegroup = defaultcustomer.pricegroup;
                        queryData.currency = defaultcustomer.currency;
                        amount_1 = [];
                        return [4 /*yield*/, this.rawQuery.getCustomerSpecificPrice(queryData)];
                    case 10:
                        amount_1 = _c.sent();
                        if (!(amount_1.length == 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.rawQuery.getNormalPrice(queryData)];
                    case 11:
                        amount_1 = _c.sent();
                        _c.label = 12;
                    case 12:
                        if (amount_1.length == 0) {
                            return [2 /*return*/, { amount: 0 }];
                        }
                        else {
                            amount_1[0].amount = Math.ceil(amount_1[0].amount);
                            return [2 /*return*/, amount_1[0]];
                        }
                        return [3 /*break*/, 14];
                    case 13:
                        _b = _c.sent();
                        return [2 /*return*/, { amount: 0 }];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        amount[0].amount = Math.ceil(amount[0].amount);
                        return [2 /*return*/, amount[0]];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        error_1 = _c.sent();
                        throw error_1;
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    PriceService.prototype.getPrices = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultcustomer, queryData, inQueryStr_1, amounts, _i, _a, sizeid, amount, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 9, , 10]);
                        defaultcustomer = void 0;
                        if (!!reqData.pricegroup) return [3 /*break*/, 2];
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(this.sessionInfo.defaultcustomerid)];
                    case 1:
                        defaultcustomer = _b.sent();
                        reqData.pricegroup = defaultcustomer.pricegroup;
                        reqData.currency = defaultcustomer.currency;
                        _b.label = 2;
                    case 2:
                        queryData = {
                            custaccount: reqData.custaccount,
                            itemid: reqData.itemid,
                            inventsizeid: reqData.inventsizeid,
                            pricegroup: reqData.pricegroup,
                            configid: reqData.configid,
                            currency: "SAR",
                            dataareaid: reqData.dataareaid,
                            warehouseid: reqData.warehouseid,
                        };
                        inQueryStr_1 = "";
                        if (reqData.inventsizeids.length > 0) {
                            reqData.inventsizeids.map(function (item) {
                                inQueryStr_1 += "'" + item + "',";
                            });
                            inQueryStr_1 = inQueryStr_1.substr(0, inQueryStr_1.length - 1);
                        }
                        queryData.inventsizeids = inQueryStr_1;
                        amounts = [];
                        _i = 0, _a = reqData.inventsizeids;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        sizeid = _a[_i];
                        amount = [];
                        queryData.inventsizeid = sizeid;
                        return [4 /*yield*/, this.rawQuery.getCustomerSpecificPrice(queryData)];
                    case 4:
                        amount = _b.sent();
                        if (!(amount.length <= 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rawQuery.sizePrices(queryData)];
                    case 5:
                        amount = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (amount.length > 0) {
                            amounts.push(amount[0]);
                        }
                        _b.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 3];
                    case 8:
                        amounts.map(function (v) {
                            v.configid = reqData.configid;
                            v.price = Math.ceil(v.price);
                        });
                        return [2 /*return*/, amounts];
                    case 9:
                        error_2 = _b.sent();
                        throw error_2;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return PriceService;
}());
exports.PriceService = PriceService;
