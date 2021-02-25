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
var InventsizeDAO_1 = require("../repos/InventsizeDAO");
var RawQuery_1 = require("../common/RawQuery");
var InventsizeService = /** @class */ (function () {
    function InventsizeService() {
        this.inventsizeDAO = new InventsizeDAO_1.InventsizeDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    InventsizeService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.inventsizeDAO.entity(id)];
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
    InventsizeService.prototype.search = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, items, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        data = void 0;
                        if (!(reqData.itemid && reqData.configid)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rawQuery.getSizeCodes(reqData)];
                    case 1:
                        items = _a.sent();
                        if (!(items.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.inventsizeDAO.search(reqData, items)];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        data = [];
                        _a.label = 4;
                    case 4:
                        reqData.sizes = data;
                        return [4 /*yield*/, this.getPrices(reqData)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: throw { status: 0, message: "itemid and configid Required" };
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_2 = _a.sent();
                        throw error_2;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    InventsizeService.prototype.searchSalesOrderSizes = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var items, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        if (!(params.itemid && params.configid)) return [3 /*break*/, 6];
                        params.inventlocationid = this.sessionInfo.inventlocationid;
                        return [4 /*yield*/, this.rawQuery.getSizeCodesInStock(params)];
                    case 1:
                        items = _a.sent();
                        if (!(items.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.inventsizeDAO.search(params, items)];
                    case 2:
                        data = _a.sent();
                        params.sizes = data;
                        return [4 /*yield*/, this.getPrices(params)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, []];
                    case 5: return [3 /*break*/, 7];
                    case 6: throw { status: 0, message: "itemid and configid Required" };
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_3 = _a.sent();
                        throw error_3;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    InventsizeService.prototype.searchSizesWithNoPrice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var t0, data, items, t1, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!(params.itemid && params.configid)) return [3 /*break*/, 5];
                        t0 = new Date().getTime();
                        data = [];
                        params.inventlocationid = this.sessionInfo.inventlocationid;
                        return [4 /*yield*/, this.rawQuery.getSizeCodes(params)];
                    case 1:
                        items = _a.sent();
                        if (!(items.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.inventsizeDAO.search(params, items)];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        data = [];
                        _a.label = 4;
                    case 4:
                        t1 = new Date().getTime();
                        data.map(function (v) {
                            v.price = 0;
                        });
                        return [2 /*return*/, data];
                    case 5: throw { status: 0, message: "itemid and configid Required" };
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_4 = _a.sent();
                        throw error_4;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    InventsizeService.prototype.getPrices = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var getCustomers, getCustomer, defaultcustomer, queryData, _i, _a, size, prices, _loop_1, _b, _c, size;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(reqData.custaccount, this.sessionInfo.defaultcustomerid)];
                    case 1:
                        getCustomers = _d.sent();
                        getCustomer = getCustomers.find(function (v) { return v.accountnum == reqData.custaccount; });
                        getCustomer = getCustomer ? getCustomer : {};
                        defaultcustomer = getCustomers.find(function (v) { return v.accountnum == _this.sessionInfo.defaultcustomerid; });
                        defaultcustomer = defaultcustomer ? defaultcustomer : {};
                        if (getCustomer.walkincustomer == true || getCustomer == {}) {
                            reqData.custaccount = this.sessionInfo.defaultcustomerid;
                        }
                        if (!reqData.pricegroup) {
                            reqData.pricegroup = defaultcustomer.pricegroup;
                            reqData.currency = defaultcustomer.currency;
                        }
                        queryData = {
                            custaccount: reqData.custaccount,
                            itemid: reqData.itemid,
                            pricegroup: reqData.pricegroup,
                            configid: reqData.configid,
                            spGroup: reqData.spGroup,
                            currency: "SAR",
                            inventsizeids: [],
                        };
                        for (_i = 0, _a = reqData.sizes; _i < _a.length; _i++) {
                            size = _a[_i];
                            queryData.inventsizeids.push(size.code.toLowerCase());
                        }
                        queryData.inventsizeids = queryData.inventsizeids.map(function (d) { return "'" + d + "'"; }).join(",");
                        return [4 /*yield*/, this.rawQuery.allSizePrices(queryData)];
                    case 2:
                        prices = _d.sent();
                        _loop_1 = function (size) {
                            var amount = prices.filter(function (v) {
                                return v.inventsizeid.toLowerCase() == size.code.toLowerCase() && v.accountrelation == queryData.custaccount;
                            });
                            if (amount.length <= 0) {
                                amount = prices.filter(function (v) {
                                    return v.inventsizeid.toLowerCase() == size.code.toLowerCase() &&
                                        v.accountrelation.toLowerCase() == queryData.pricegroup.toLowerCase();
                                });
                            }
                            if (amount.length <= 0) {
                                amount = prices.filter(function (v) { return v.inventsizeid.toLowerCase() == size.code.toLowerCase() && v.accountrelation == queryData.spGroup; });
                            }
                            if (amount.length > 0) {
                                size.price = parseFloat(amount[0].price);
                            }
                            else {
                                size.price = 0;
                            }
                        };
                        for (_b = 0, _c = reqData.sizes; _b < _c.length; _b++) {
                            size = _c[_b];
                            _loop_1(size);
                        }
                        return [2 /*return*/, reqData.sizes];
                }
            });
        });
    };
    return InventsizeService;
}());
exports.InventsizeService = InventsizeService;
