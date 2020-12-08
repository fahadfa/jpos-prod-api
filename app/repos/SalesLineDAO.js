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
var SalesLine_1 = require("../../entities/SalesLine");
var SalesLineDAO = /** @class */ (function () {
    function SalesLineDAO() {
        this.dao = typeorm_1.getRepository(SalesLine_1.SalesLine);
        this.db = typeorm_1.getManager();
    }
    SalesLineDAO.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("===================", data);
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("salesline")
                                .leftJoinAndSelect("salesline.color", "color")
                                .leftJoin("salesline.size", "size")
                                .leftJoin("size.product", "product")
                                .where(data)
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.mobilesearch = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("=========================", data);
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("salesline")
                                .leftJoinAndSelect("salesline.color", "color")
                                .leftJoinAndSelect("salesline.size", "size")
                                .leftJoinAndSelect("size.product", "product")
                                .where(data)
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.getDesignerServiceLines = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = " select \n        sl.id as id,\n        sl.salesid as \"salesId\",\n        sl.linenum as \"lineNum\",\n        sl.itemid as \"itemid\",\n        sl.name as name,\n        sl.salesprice as \"salesprice\",\n        sl.lineamount as \"lineAmount\",\n        sl.dataareaid,\n        sl.custgroup as \"custGroup\",\n        sl.custaccount as \"custAccount\",\n        sl.vatamount as vatamount,\n        sl.vat,\n        sl.currencycode as \"currencyCode\",\n        sl.salesqty as \"salesQty\",\n        sl.dataareaid as \"dataareaid\",\n        sl.inventsizeid,\n        sl.inventlocationid as \"inventLocationId\",\n        sl.configid as \"configId\",\n        dp.name_en as \"nameEn\",\n        dp.name_ar as \"nameAr\"\n        from salesline sl\n        left join designer_products dp on dp.name_en = sl.inventsizeid\n        left join inventtable i on i.itemid = sl.itemid\n        where sl.salesid='" + salesId + "' ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.findByReturnOrderArray = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("salesline")
                                .leftJoinAndSelect("salesline.colors", "colors")
                                .leftJoinAndSelect("salesline.baseSizes", "baseSizes")
                                .leftJoinAndSelect("baseSizes.sizes", "sizes")
                                .where("salesline.salesid IN (:...names)", { names: data })
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.findAll = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.find(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.entity = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(salesId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.remove(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.findTop20FromToDate = function (inventlocationid, from, to) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = " select \n    salesline.itemid ,\n    --sum(salesline.lineamount) as amount \n    sum(salesline .lineamount +salesline .vatamount -salesline .linetotaldisc+coalesce(salesline.colorantprice, 0) * salesline.salesqty ) as amount \n    from salesline as salesline \n    inner join salestable st on st.salesid = salesline.salesid\n    where salesline.salesid in (\n      select salesid from salestable st\n      where st.transkind In('SALESORDER') \n      and st.status IN('POSTED', 'PAID', 'PRINTED')\n      and st.lastmodifieddate ::date>='" + from + "'\n      and st.lastmodifieddate ::date<='" + to + "'\n      and st.inventlocationid='" + inventlocationid + "'     \n      ) \n      group by salesline.itemid ,salesline.itemid order by amount desc limit 20\n     \n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesLineDAO.prototype.findTop20FromToDateWithItemIds = function (inventlocationid, from, to, itemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = " select \n    salesline.itemid ,\n    sum(salesline .lineamount +salesline .vatamount -salesline .linetotaldisc+coalesce(salesline.colorantprice, 0) * salesline.salesqty ) as previousamount \n    from salesline as salesline \n    inner join salestable st on st.salesid = salesline.salesid\n    where (salesline.lastmodifieddate::date >= '" + from + "' \n    and salesline.lastmodifieddate::date <= '" + to + "' ) \n    and salesline.inventlocationid='" + inventlocationid + "'     \n    and st.transkind In('SALESORDER')  \n    and st.status IN('POSTED', 'PAID', 'PRINTED')\n    and salesline.itemid  in(" + itemIds
                            .map(function (id) {
                            return "'" + id + "'";
                        })
                            .join(",") + ")\n     group by salesline.itemid       \n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SalesLineDAO;
}());
exports.SalesLineDAO = SalesLineDAO;
Object.seal(SalesLineDAO);
