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
var BaseSizeColorsDAO_1 = require("../repos/BaseSizeColorsDAO");
var RawQuery_1 = require("../common/RawQuery");
var Props_1 = require("../../constants/Props");
var BaseSizeColorsService = /** @class */ (function () {
    function BaseSizeColorsService() {
        this.baseSizeColorsDAO = new BaseSizeColorsDAO_1.BaseSizeColorsDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.baseSizesDAO = new BaseSizesDAO_1.BaseSizesDAO();
    }
    BaseSizeColorsService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseSizeColorsDAO.entity(id)];
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
    BaseSizeColorsService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var Items_1, reqData, colorIds, data, result, new_data_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        Items_1 = [];
                        reqData = {
                            inventlocationid: this.sessionInfo.inventlocationid,
                            baseId: params.baseId,
                        };
                        if (!(params.type == "salesorder")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rawQuery.checkInventoryForColors(reqData)];
                    case 1:
                        colorIds = _a.sent();
                        colorIds.map(function (v) {
                            Items_1.push(v.id);
                        });
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.baseSizeColorsDAO.search(params, Items_1)];
                    case 3:
                        data = _a.sent();
                        result = this.groupBy(data, function (item) {
                            return [item.colors.id];
                        });
                        new_data_1 = [];
                        result.forEach(function (groupitem) {
                            var new_baseSizes = [];
                            groupitem.forEach(function (item) {
                                item.baseSizes.colorId = item.colors.id;
                                item.baseSizes.itemId = item.baseSizes.base.code;
                                new_baseSizes.push(item.baseSizes);
                            });
                            groupitem[0].baseSizes = new_baseSizes;
                            new_data_1.push(groupitem[0]);
                        });
                        return [2 /*return*/, new_data_1];
                    case 4:
                        error_2 = _a.sent();
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsService.prototype.find = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseSizeColorsDAO.find(params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsService.prototype.paginate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseSizeColorsDAO.pagination(item)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { totalCount: data.count, data: data.data }];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, colors, returnData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.baseSizeColorsDAO.save(data.successfulRecords)];
                    case 2:
                        colors = _a.sent();
                        returnData = { failedRecords: data.failedRecords, message: Props_1.Props.SAVED_SUCCESSFULLY };
                        return [2 /*return*/, returnData];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsService.prototype.validate = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var newData, colors, _loop_1, this_1, _i, reqData_1, d, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        newData = { successfulRecords: [], failedRecords: [], successRecords: [] };
                        colors = void 0;
                        if (!(reqData.length > 100)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.baseSizeColorsDAO.find({})];
                    case 1:
                        colors = _a.sent();
                        _a.label = 2;
                    case 2:
                        _loop_1 = function (d) {
                            var color, filterData, basesizecolorObj, size, color_1, base, basesize, basesizeData;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        color = void 0;
                                        if (!(reqData.length > 100)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, colors.filter(function (v) {
                                                return v.colors.code == d.colorCode &&
                                                    v.baseSizes.sizes.code == d.sizeCode &&
                                                    v.baseSizes.base.code == d.baseCode;
                                            })];
                                    case 1:
                                        color = _a.sent();
                                        color = color.length > 0 ? color[0] : null;
                                        return [3 /*break*/, 4];
                                    case 2:
                                        filterData = { itemid: d.baseCode, sizeid: d.sizeCode, configid: d.colorCode };
                                        return [4 /*yield*/, this_1.baseSizeColorsDAO.findOne(filterData)];
                                    case 3:
                                        color = _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        basesizecolorObj = {};
                                        if (!color) return [3 /*break*/, 5];
                                        basesizecolorObj = color;
                                        basesizecolorObj.price = d.price;
                                        basesizecolorObj.updatedAt = new Date();
                                        newData.successfulRecords.push(basesizecolorObj);
                                        newData.successRecords.push(d);
                                        return [3 /*break*/, 14];
                                    case 5: return [4 /*yield*/, this_1.rawQuery.getsizeid(d.sizeCode)];
                                    case 6:
                                        size = _a.sent();
                                        return [4 /*yield*/, this_1.rawQuery.getColorid(d.colorCode)];
                                    case 7:
                                        color_1 = _a.sent();
                                        return [4 /*yield*/, this_1.rawQuery.getbaseid(d.baseCode)];
                                    case 8:
                                        base = _a.sent();
                                        basesize = void 0;
                                        if (!(size && base && color_1)) return [3 /*break*/, 13];
                                        return [4 /*yield*/, this_1.rawQuery.getbasesizeid({ baseId: base.id, sizeId: size.id })];
                                    case 9:
                                        basesize = _a.sent();
                                        if (!!basesize) return [3 /*break*/, 11];
                                        basesizeData = {
                                            base: {
                                                id: base.id,
                                            },
                                            sizes: {
                                                id: size.id,
                                            },
                                            insertedAt: new Date(),
                                            updatedAt: new Date(),
                                        };
                                        return [4 /*yield*/, this_1.baseSizesDAO.save(basesizeData)];
                                    case 10:
                                        _a.sent();
                                        _a.label = 11;
                                    case 11: return [4 /*yield*/, this_1.rawQuery.getbasesizeid({ baseId: base.id, sizeId: size.id })];
                                    case 12:
                                        basesize = _a.sent();
                                        basesize.sizes = size;
                                        basesize.base = base;
                                        basesizecolorObj.colors = color_1;
                                        basesizecolorObj.baseSizes = basesize;
                                        basesizecolorObj.insertedAt = new Date();
                                        basesizecolorObj.price = d.price;
                                        basesizecolorObj.updatedAt = new Date();
                                        newData.successfulRecords.push(basesizecolorObj);
                                        newData.successRecords.push(d);
                                        return [3 /*break*/, 14];
                                    case 13:
                                        newData.failedRecords.push(d);
                                        _a.label = 14;
                                    case 14: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, reqData_1 = reqData;
                        _a.label = 3;
                    case 3:
                        if (!(_i < reqData_1.length)) return [3 /*break*/, 6];
                        d = reqData_1[_i];
                        return [5 /*yield**/, _loop_1(d)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        colors = [];
                        return [2 /*return*/, newData];
                    case 7:
                        error_6 = _a.sent();
                        throw error_6;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsService.prototype.groupBy = function (array, f) {
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
    BaseSizeColorsService.prototype.getBaseSizeColor = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.baseSizeColorsDAO.findOne(params)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BaseSizeColorsService;
}());
exports.BaseSizeColorsService = BaseSizeColorsService;
