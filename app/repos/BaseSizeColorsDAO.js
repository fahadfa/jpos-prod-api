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
var typeorm_1 = require("typeorm");
var BaseSizeColors_1 = require("../../entities/BaseSizeColors");
var BaseSizeColorsDAO = /** @class */ (function () {
    function BaseSizeColorsDAO() {
        this.dao = typeorm_1.getRepository(BaseSizeColors_1.BaseSizeColors);
        this.db = typeorm_1.getManager();
    }
    BaseSizeColorsDAO.prototype.search = function (data, items) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data.baseId) return [3 /*break*/, 5];
                        if (!(data.type == "salesorder" && items.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("baseSizeColors")
                                .leftJoinAndSelect("baseSizeColors.colors", "colors")
                                .leftJoinAndSelect("baseSizeColors.baseSizes", "baseSizes")
                                .leftJoinAndSelect("baseSizes.sizes", "sizes")
                                .leftJoin("baseSizes.base", "base")
                                .addSelect("base.code")
                                .where({})
                                .where("colors.id IN (:...names)", { names: items })
                                .andWhere("base.id = '" + data.baseId + "'")
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.dao
                            .createQueryBuilder("baseSizeColors")
                            .leftJoinAndSelect("baseSizeColors.colors", "colors")
                            .leftJoinAndSelect("baseSizeColors.baseSizes", "baseSizes")
                            .leftJoinAndSelect("baseSizes.sizes", "sizes")
                            .leftJoin("baseSizes.base", "base")
                            .addSelect("base.code")
                            .where({})
                            // .where("colors.id IN (:...names)", { names: items })
                            .andWhere("base.id = '" + data.baseId + "'")
                            .getMany()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5: throw "ProductId or BaseId is Required";
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.save(data)];
                    case 1: 
                    // console.log(data);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao
                            .createQueryBuilder("baseSizeColors")
                            .innerJoinAndSelect("baseSizeColors.colors", "colors")
                            .innerJoinAndSelect("baseSizeColors.baseSizes", "baseSizes")
                            .innerJoinAndSelect("baseSizes.sizes", "sizes")
                            .innerJoin("baseSizes.base", "base")
                            .addSelect("base.code")
                            .where({ id: id })
                            .getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.delete(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao
                            .createQueryBuilder("baseSizeColors")
                            .innerJoinAndSelect("baseSizeColors.colors", "colors")
                            .innerJoinAndSelect("baseSizeColors.baseSizes", "baseSizes")
                            .innerJoinAndSelect("baseSizes.sizes", "sizes")
                            .innerJoinAndSelect("baseSizes.base", "base")
                            // .where(data)
                            .where("base.code = '" + data.itemid + "' and sizes.code = '" + data.sizeid + "' and  colors.code = '" + data.configid + "'")
                            .getOne()];
                    case 1: 
                    // console.log(data);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.find = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao
                            .createQueryBuilder("baseSizeColors")
                            .innerJoinAndSelect("baseSizeColors.colors", "colors")
                            .innerJoinAndSelect("baseSizeColors.baseSizes", "baseSizes")
                            .innerJoinAndSelect("baseSizes.sizes", "sizes")
                            .innerJoinAndSelect("baseSizes.base", "base")
                            .where({})
                            .getMany()];
                    case 1: 
                    // console.log(data);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseSizeColorsDAO.prototype.pagination = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query, countQuery, new_filter_data, _i, _a, item, _b, item_1, value, filter, _c, _d, item, baseSizeColorData_1, count_1, count, baseSizeColorData;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        query = "\n                select \n                i.basecode as \"baseCode\",\n                i.sizeCode as \"sizeCode\",\n                i.colorcode as \"colorCode\",\n                i.price as price  \n                from\n                (select\n                b.code as basecode,\n                s.code as sizecode,\n                c.code as colorcode,\n                bsc.price as price\n                from base_size_colors bsc\n                inner join base_sizes bs on bs.id = bsc.base_size_id\n                inner join colors c on c.id = bsc.color_id\n                inner join sizes s on s.id = bs.size_id\n                inner join bases b on b.id = bs.base_id) \n                as i\n                ";
                        countQuery = "select \n                count(*)\n                from base_size_colors";
                        if (!(data.filter != null && data.filter != "null")) return [3 /*break*/, 2];
                        console.log(data.filter);
                        data.filter = JSON.parse(data.filter);
                        new_filter_data = [];
                        for (_i = 0, _a = data.filter; _i < _a.length; _i++) {
                            item = _a[_i];
                            if (typeof item[0] == "object") {
                                for (_b = 0, item_1 = item; _b < item_1.length; _b++) {
                                    value = item_1[_b];
                                    new_filter_data.push(value);
                                }
                            }
                            else {
                                new_filter_data.push(item);
                            }
                        }
                        data.filter = new_filter_data;
                        filter = "";
                        if (typeof data.filter[0] == "object") {
                            for (_c = 0, _d = data.filter; _c < _d.length; _c++) {
                                item = _d[_c];
                                if (typeof item == "object") {
                                    filter += item[0] + " ILike " + ("'%" + item[2] + "%'");
                                }
                                if (typeof item == "string") {
                                    filter += " " + item + " ";
                                }
                            }
                        }
                        else if (typeof data.filter[0] == "string") {
                            filter += data.filter[0] + " ILike " + ("'%" + data.filter[2] + "%'");
                        }
                        console.log(filter);
                        countQuery += " where " + filter;
                        query += " where " + filter;
                        // if (!data.orderby) {
                        //     query += ` ORDER BY dateOfVisit DESC `;
                        // }
                        if (data.orderby && data.orderby != "null") {
                            query += " ORDER BY " + data.column + " " + data.orderby + " ";
                        }
                        query += "offset '" + data.skip + "' limit '" + data.take + "'";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        baseSizeColorData_1 = _e.sent();
                        count_1 = baseSizeColorData_1.length;
                        return [2 /*return*/, { data: baseSizeColorData_1, count: count_1 }];
                    case 2:
                        if (data.orderby && data.orderby != "null") {
                            query += " ORDER BY " + data.column + " " + data.orderby + " ";
                        }
                        query += "offset " + data.skip + " limit " + data.take;
                        return [4 /*yield*/, this.db.query(countQuery)];
                    case 3:
                        count = _e.sent();
                        return [4 /*yield*/, this.db.query(query)];
                    case 4:
                        baseSizeColorData = _e.sent();
                        return [2 /*return*/, { data: baseSizeColorData, count: count[0].count }];
                }
            });
        });
    };
    return BaseSizeColorsDAO;
}());
exports.BaseSizeColorsDAO = BaseSizeColorsDAO;
Object.seal(BaseSizeColorsDAO);
