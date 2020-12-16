"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var InventTrans_1 = require("../../entities/InventTrans");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var RawQuery_1 = require("../common/RawQuery");
var SalesLineDAO_1 = require("../repos/SalesLineDAO");
var InventtransService = /** @class */ (function () {
    function InventtransService() {
        this.inventtransDAO = new InventTransDAO_1.InventorytransDAO();
        this.salesLineDAO = new SalesLineDAO_1.SalesLineDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventoryTrans = new InventTrans_1.Inventorytrans();
    }
    InventtransService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.inventtransDAO.entity(id)];
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
    InventtransService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var t0, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        t0 = new Date().getTime();
                        params.inventlocationid = this.sessionInfo.inventlocationid;
                        data = void 0;
                        if (!(params.itemId == "HSN-00001")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rawQuery.inventoryOnHandForColorant(params)];
                    case 1:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.rawQuery.inventoryOnHand(params)];
                    case 3:
                        data = _a.sent();
                        _a.label = 4;
                    case 4:
                        // let data: any = await this.rawQuery.getInventTransFromView(params);
                        data.map(function (v) {
                            v.availabilty = parseInt(v.availabilty);
                            v.reservedQuantity = parseInt(v.reservedQuantity);
                            v.totalAvailable = parseInt(v.totalAvailable);
                        });
                        return [2 /*return*/, data];
                    case 5:
                        error_2 = _a.sent();
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    InventtransService.prototype.find = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result, new_result, _i, result_1, ele, batch, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.inventtransDAO.findAll(data)];
                    case 1:
                        result = _a.sent();
                        new_result = [];
                        for (_i = 0, result_1 = result; _i < result_1.length; _i++) {
                            ele = result_1[_i];
                            batch = {
                                itemid: ele.itemid,
                                inventsizeid: ele.inventsizeid,
                                batchNo: ele.batchno,
                                configid: ele.configid,
                                quantity: Math.abs(ele.qty),
                            };
                            new_result.push(batch);
                        }
                        return [2 /*return*/, new_result];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InventtransService.prototype.getSelectedBatches = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, new_data, _i, data_1, v, i, _a, t0, data, salesorderlines_1, returnorderlines_1, salesorderlinesresult, returnorderlinesresult, so_list_1, ro_list_1, resData_1, result, new_data_1, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 9, , 10]);
                        if (!(params.type == "DESIGNERSERVICERETURN")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.salesLineDAO.search({ salesId: params.salesid })];
                    case 1:
                        data = _b.sent();
                        new_data = [];
                        _i = 0, data_1 = data;
                        _b.label = 2;
                    case 2:
                        if (!(_i < data_1.length)) return [3 /*break*/, 5];
                        v = data_1[_i];
                        _a = {
                            itemid: v.itemid
                        };
                        return [4 /*yield*/, this.rawQuery.desiner_product_name(v.itemid)];
                    case 3:
                        i = (_a.nameen = _b.sent(),
                            _a.configid = v.configId,
                            _a.inventsizeid = v.inventsizeid,
                            _a.qty = parseInt(v.salesQty),
                            _a.batchno = "-",
                            _a.colorantid = "-",
                            _a);
                        i.namear = i.itemen;
                        new_data.push(i);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, new_data];
                    case 6:
                        t0 = new Date().getTime();
                        params.inventlocationid = this.sessionInfo.inventlocationid;
                        return [4 /*yield*/, this.rawQuery.getSelectedBatches(params)];
                    case 7:
                        data = _b.sent();
                        console.log(data, "=====================================");
                        salesorderlines_1 = [];
                        returnorderlines_1 = [];
                        data.map(function (v) {
                            v.itemid = v.itemid.toUpperCase();
                            v.configid = v.configid.toUpperCase();
                            v.inventsizeid = v.inventsizeid.toUpperCase();
                            if (params.type == "SALESORDER") {
                                if (parseInt(v.qty) > 0) {
                                    returnorderlines_1.push(v);
                                }
                                else if (parseInt(v.qty) < 0) {
                                    salesorderlines_1.push(v);
                                }
                            }
                        });
                        if (params.type == "SALESORDER") {
                            salesorderlinesresult = void 0;
                            returnorderlinesresult = void 0;
                            salesorderlinesresult = this.groupBy(salesorderlines_1, function (item) {
                                return [item.itemid, item.batchno, item.configid, item.inventsizeid, item.isItemFree, item.colorantId];
                            });
                            returnorderlinesresult = this.groupBy(returnorderlines_1, function (item) {
                                return [item.itemid, item.batchno, item.configid, item.inventsizeid, item.isItemFree, item.colorantId];
                            });
                            so_list_1 = [];
                            ro_list_1 = [];
                            salesorderlinesresult.forEach(function (groupitem) {
                                var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.qty); }, 0);
                                groupitem[0].qty = Math.abs(qty);
                                groupitem[0].returnQuantity = 0;
                                so_list_1.push(__assign({}, groupitem[0]));
                            });
                            returnorderlinesresult.forEach(function (groupitem) {
                                var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.qty); }, 0);
                                groupitem[0].qty = Math.abs(qty);
                                groupitem[0].returnQuantity = 0;
                                ro_list_1.push(__assign({}, groupitem[0]));
                            });
                            if (ro_list_1.length > 0) {
                                resData_1 = [];
                                so_list_1.forEach(function (v) {
                                    var ro_data = ro_list_1.find(function (i) {
                                        return v.itemid == i.itemid &&
                                            v.configid == i.configid &&
                                            v.inventsizeid == i.inventsizeid &&
                                            v.batchno == i.batchno &&
                                            v.isItemFree == i.isItemFree &&
                                            v.colorantId == i.colorantId;
                                    });
                                    console.log("=============1", ro_data, v.qty);
                                    if (ro_data) {
                                        if (v.qty > ro_data.qty) {
                                            v.qty = v.qty - ro_data.qty;
                                        }
                                        else {
                                            v.qty = 0;
                                        }
                                    }
                                    console.log("==========3", v);
                                    resData_1.push(v);
                                });
                                return [2 /*return*/, resData_1];
                            }
                            else {
                                return [2 /*return*/, so_list_1];
                            }
                        }
                        else {
                            result = void 0;
                            if (params.type == "INVENTORYMOVEMENT") {
                                result = this.groupBy(data, function (item) {
                                    return [
                                        item.itemid,
                                        item.batchno,
                                        item.configid,
                                        item.inventsizeid,
                                        item.isItemFree,
                                        item.colorantId,
                                        item.salesLineId,
                                    ];
                                });
                            }
                            else {
                                result = this.groupBy(data, function (item) {
                                    return [item.itemid, item.batchno, item.configid, item.inventsizeid, item.isItemFree, item.colorantId];
                                });
                            }
                            new_data_1 = [];
                            result.forEach(function (groupitem) {
                                var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.qty); }, 0);
                                if (params.type == "SALESORDER" || params.type == "PURCHASERETURN" || params.type == "INVENTORYMOVEMENT") {
                                    if (qty <= 0 && params.type != "INVENTORYMOVEMENT") {
                                        groupitem[0].qty = Math.abs(qty);
                                        groupitem[0].returnQuantity = 0;
                                        new_data_1.push(__assign({}, groupitem[0]));
                                    }
                                    else if (qty > 0 && params.type == "SALESORDER") {
                                        groupitem[0].qty = Math.abs(qty);
                                        groupitem[0].returnQuantity = 0;
                                        new_data_1.push(__assign({}, groupitem[0]));
                                    }
                                    else if (params.type == "INVENTORYMOVEMENT") {
                                        groupitem[0].qty = parseInt(qty);
                                        groupitem[0].returnQuantity = 0;
                                        new_data_1.push(__assign({}, groupitem[0]));
                                    }
                                }
                                else {
                                    if (qty > 0) {
                                        groupitem[0].qty = Math.abs(qty);
                                        groupitem[0].returnQuantity = 0;
                                        new_data_1.push(__assign({}, groupitem[0]));
                                    }
                                    else if (qty <= 0) {
                                        groupitem[0].qty = Math.abs(qty);
                                        groupitem[0].returnQuantity = 0;
                                        new_data_1.push(__assign({}, groupitem[0]));
                                    }
                                }
                            });
                            return [2 /*return*/, new_data_1];
                        }
                        _b.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_4 = _b.sent();
                        throw error_4;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    InventtransService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(this.sessionInfo);
                        return [4 /*yield*/, this.inventtransDAO.save(reqData)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data.id];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    InventtransService.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    InventtransService.prototype.paginate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        item.inventlocationid = this.sessionInfo.inventlocationid;
                        return [4 /*yield*/, this.rawQuery.inventoryOnHand(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            v.availabilty = parseInt(v.availabilty);
                            v.reservedQuantity = parseInt(v.reservedQuantity);
                            v.totalAvailable = parseInt(v.totalAvailable);
                        });
                        return [4 /*yield*/, data];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InventtransService.prototype.stockOnHandCheck = function (salesLine, salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var colors_1, items_1, sizes_1, result_2, groupSalesLines, newSalesline_1, itemsInStock_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        colors_1 = [];
                        items_1 = [];
                        sizes_1 = [];
                        result_2 = [];
                        groupSalesLines = this.groupBy(salesLine, function (item) {
                            return [item.itemid, item.configId, item.inventsizeid];
                        });
                        newSalesline_1 = [];
                        groupSalesLines.forEach(function (groupitem) {
                            var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.salesQty); }, 0);
                            groupitem[0].salesQty = Math.abs(qty);
                            newSalesline_1.push(__assign({}, groupitem[0]));
                        });
                        newSalesline_1.map(function (v) {
                            // console.log(v);
                            if (v.itemid && v.configId && v.inventsizeid) {
                                items_1.push(v.itemid), colors_1.push(v.configId), sizes_1.push(v.inventsizeid);
                            }
                            else {
                                result_2.push({
                                    itemid: v.itemid,
                                    configId: v.configId,
                                    inventsizeid: v.inventsizeid,
                                    availabilty: 0,
                                });
                            }
                        });
                        return [4 /*yield*/, this.rawQuery.checkItems(this.sessionInfo.inventlocationid, items_1, colors_1, sizes_1, salesId)];
                    case 1:
                        itemsInStock_1 = _a.sent();
                        newSalesline_1.map(function (v) {
                            var index = itemsInStock_1.findIndex(function (value) {
                                return value.itemid.toLowerCase() == v.itemid.toLowerCase() &&
                                    value.configid.toLowerCase() == v.configId.toLowerCase() &&
                                    value.inventsizeid.toLowerCase() == v.inventsizeid.toLowerCase();
                            });
                            if (index >= 0) {
                                if (parseInt(v.salesQty) > parseInt(itemsInStock_1[index].qty)) {
                                    result_2.push({
                                        itemid: v.itemid,
                                        configId: v.configId,
                                        inventsizeid: v.inventsizeid,
                                        selectedQuantity: v.salesQty,
                                        availabilty: parseInt(itemsInStock_1[index].qty),
                                        product: v.product,
                                    });
                                }
                            }
                            else {
                                if (v.itemid != "HSN-00001") {
                                    result_2.push({
                                        itemid: v.itemid,
                                        configId: v.configId,
                                        inventsizeid: v.inventsizeid,
                                        selectedQuantity: v.salesQty,
                                        availabilty: 0,
                                    });
                                }
                            }
                        });
                        return [2 /*return*/, result_2];
                    case 2:
                        err_1 = _a.sent();
                        throw { message: err_1 };
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return InventtransService;
}());
exports.InventtransService = InventtransService;
