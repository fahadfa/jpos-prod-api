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
var Custtable_1 = require("../../entities/Custtable");
var Props_1 = require("../../constants/Props");
var CusttableDAO = /** @class */ (function () {
    function CusttableDAO() {
        this.dao = typeorm_1.getRepository(Custtable_1.Custtable);
        this.db = typeorm_1.getManager();
    }
    CusttableDAO.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.groupCollapsed(data);
                        if (!data.name) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where("LOWER(custtable.name) like LOWER(:name) or LOWER(custtable.nameAlias) like LOWER(:nameAlias)", {
                                name: "%" + data.name + "%",
                                nameAlias: "%" + data.name + "%",
                            })
                                .andWhere("custtable.deleted=false")
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!data.phone) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where("LOWER(custtable.phone) like LOWER(:phone)", {
                                phone: "%" + data.phone + "%",
                            })
                                .andWhere("custtable.deleted=false")
                                .getMany()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        if (!data.painter) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where("LOWER(custtable.name) like LOWER(:name) or LOWER(custtable.nameAlias) like LOWER(:nameAlias)", {
                                name: "%" + data.painter + "%",
                                nameAlias: "%" + data.painter + "%",
                            })
                                .andWhere("custtable.deleted=false")
                                .getMany()];
                    case 5:
                        result = _a.sent();
                        return [2 /*return*/, result.filter(function (item) {
                                return item.rcusttype == 2;
                            })];
                    case 6: return [2 /*return*/, []];
                }
            });
        });
    };
    CusttableDAO.prototype.getCreditLimit = function (accountNum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao
                            .createQueryBuilder("custtable")
                            .where("custtable.accountnum = :accountnum AND custtable.paymtermid <> :payid", {
                            accountnum: accountNum,
                            payid: "CASH",
                        })
                            .select(["custtable.creditmax"])
                            .andWhere("custtable.deleted=false")
                            .getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CusttableDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CusttableDAO.prototype.entity = function (accountnum) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao
                            .createQueryBuilder("custtable")
                            // .where({ accountnum: accountnum })
                            .where("LOWER(custtable.accountnum) like LOWER('" + accountnum + "')")
                            .leftJoinAndSelect("custtable.Custgroup", "Custgroup")
                            .getOne()];
                    case 1: 
                    // return await this.dao.findOne(accountnum);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CusttableDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.remove([data])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CusttableDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CusttableDAO.prototype.findAll = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.find(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // async pagination(data: any) {
    //     return await this.dao.find({
    //         skip: (data.page - 1) * data.count,
    //         take: data.count
    //     });
    // }
    CusttableDAO.prototype.pagination = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var custtypeEnKeys, custtypeArKeys, result, count, filter, custtypeFilter, _loop_1, _i, _a, item, matchesEn, _b, matchesEn_1, match, matchesAr, _c, matchesAr_1, match;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log(data);
                        custtypeEnKeys = Object.keys(Props_1.Props.rcusttypeEn);
                        custtypeArKeys = Object.keys(Props_1.Props.rcusttypeAr);
                        if (!(data.filter != null && data.filter != "null")) return [3 /*break*/, 9];
                        data.filter = JSON.parse(data.filter);
                        filter = "";
                        custtypeFilter = "";
                        if (typeof data.filter[0] == "object") {
                            _loop_1 = function (item) {
                                if (typeof item == "object") {
                                    if (item[0] == "rcusttypeen") {
                                        var matchesEn = custtypeEnKeys.filter(function (s) { return s.toLowerCase().includes(item[2].toLowerCase()); });
                                        for (var _i = 0, matchesEn_2 = matchesEn; _i < matchesEn_2.length; _i++) {
                                            var match = matchesEn_2[_i];
                                            if (matchesEn.indexOf(match) == matchesEn.length - 1) {
                                                custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeEn[match] + ")");
                                            }
                                            else {
                                                custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeEn[match] + " or ");
                                            }
                                        }
                                    }
                                    else if (item[0] == "rcusttypear") {
                                        var matchesAr = custtypeArKeys.filter(function (s) { return s.toLowerCase().includes(item[2].toLowerCase()); });
                                        for (var _a = 0, matchesAr_2 = matchesAr; _a < matchesAr_2.length; _a++) {
                                            var match = matchesAr_2[_a];
                                            if (matchesAr.indexOf(match) == matchesAr.length - 1) {
                                                custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeAr[match] + ")");
                                            }
                                            else {
                                                custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeAr[match] + " or ");
                                            }
                                        }
                                    }
                                    else {
                                        filter += "custtable." + item[0] + " ILike " + ("'%" + item[2] + "%'");
                                    }
                                }
                                if (typeof item == "string") {
                                    filter += " " + item + " ";
                                }
                            };
                            for (_i = 0, _a = data.filter; _i < _a.length; _i++) {
                                item = _a[_i];
                                _loop_1(item);
                            }
                        }
                        else if (typeof data.filter[0] == "string") {
                            if (data.filter[0] == "rcusttypeen") {
                                matchesEn = custtypeEnKeys.filter(function (s) { return s.toLowerCase().includes(data.filter[2].toLowerCase()); });
                                for (_b = 0, matchesEn_1 = matchesEn; _b < matchesEn_1.length; _b++) {
                                    match = matchesEn_1[_b];
                                    if (matchesEn.indexOf(match) == matchesEn.length - 1) {
                                        custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeEn[match] + ")");
                                    }
                                    else {
                                        custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeEn[match] + " or ");
                                    }
                                }
                            }
                            else if (data.filter[0] == "rcusttypear") {
                                matchesAr = custtypeArKeys.filter(function (s) { return s.toLowerCase().includes(data.filter[2].toLowerCase()); });
                                for (_c = 0, matchesAr_1 = matchesAr; _c < matchesAr_1.length; _c++) {
                                    match = matchesAr_1[_c];
                                    if (matchesAr.indexOf(match) == matchesAr.length - 1) {
                                        custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeAr[match] + ")");
                                    }
                                    else {
                                        custtypeFilter += "rcusttype=" + (Props_1.Props.rcusttypeAr[match] + " or ");
                                    }
                                }
                            }
                            else {
                                filter += "custtable." + data.filter[0] + " ILike " + ("'%" + data.filter[2] + "%'");
                            }
                        }
                        if (custtypeFilter.length > 0) {
                            filter += "(" + custtypeFilter;
                        }
                        console.log("filter", filter);
                        if (!(filter.length > 0)) return [3 /*break*/, 7];
                        if (!(data.orderby && data.orderby != "null")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where({ deleted: false, walkincustomer: true })
                                .andWhere(filter)
                                // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                                // .andWhere(
                                //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                                //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                                //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                                //         data.sabiccustomers.length > 0 ? `OR` : ``
                                //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                                // )
                                .take(data.take)
                                .addOrderBy(data.column == "rcusttypeen" || data.column == "rcusttypear" ? "rcusttype" : data.column, data.orderby)
                                .getMany()];
                    case 1:
                        result = _d.sent();
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                // .innerJoinAndSelect("custtable.Custgroup", "Custgroup")
                                .where({ deleted: false, walkincustomer: true })
                                .andWhere(filter)
                                // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                                // .andWhere(
                                //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                                //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                                //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                                //         data.sabiccustomers.length > 0 ? `OR` : ``
                                //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                                // )
                                .getCount()];
                    case 2:
                        count = _d.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.dao
                            .createQueryBuilder("custtable")
                            .where({ deleted: false, walkincustomer: true })
                            .andWhere(filter)
                            // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                            // .andWhere(
                            //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                            //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                            //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                            //         data.sabiccustomers.length > 0 ? `OR` : ``
                            //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                            // )
                            .take(data.take)
                            .orderBy("createddatetime", "DESC")
                            .getMany()];
                    case 4:
                        result = _d.sent();
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where({ deleted: false })
                                .andWhere(filter)
                                // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                                // .andWhere(
                                //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                                //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                                //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                                //         data.sabiccustomers.length > 0 ? `OR` : ``
                                //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                                // )
                                .getCount()];
                    case 5:
                        count = _d.sent();
                        _d.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        result = [];
                        count = 0;
                        _d.label = 8;
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        if (!(data.orderby && data.orderby != "null")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where({ deleted: false, walkincustomer: true })
                                // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                                // .andWhere(
                                //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                                //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                                //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                                //         data.sabiccustomers.length > 0 ? `OR` : ``
                                //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                                // )
                                .take(data.take)
                                .skip(data.skip)
                                .addOrderBy(data.column == "rcusttypeen" || data.column == "rcusttypear" ? "rcusttype" : data.column, data.orderby)
                                .getMany()];
                    case 10:
                        result = _d.sent();
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where({ deleted: false, walkincustomer: true })
                                // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                                // .andWhere(
                                //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                                //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                                //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                                //         data.sabiccustomers.length > 0 ? `OR` : ``
                                //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                                // )
                                .addOrderBy(data.column == "rcusttypeen" || data.column == "rcusttypear" ? "rcusttype" : data.column, data.orderby)
                                .getCount()];
                    case 11:
                        count = _d.sent();
                        return [3 /*break*/, 15];
                    case 12: return [4 /*yield*/, this.dao
                            .createQueryBuilder("custtable")
                            .where({ deleted: false, walkincustomer: true })
                            // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                            // .andWhere(
                            //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                            //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                            //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                            //         data.sabiccustomers.length > 0 ? `OR` : ``
                            //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                            // )
                            .take(data.take)
                            .skip(data.skip)
                            .orderBy("createddatetime", "DESC")
                            .getMany()];
                    case 13:
                        result = _d.sent();
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("custtable")
                                .where({ deleted: false, walkincustomer: true })
                                // .andWhere(`(custgroup in (${data.customergroup}) OR accountnum in (${data.additionalcustomer}) OR accountnum='${data.defaultcustomerid}' or walkincustomer = true)`)
                                // .andWhere(
                                //     `${data.customergroup.length > 0 ? `custgroup in (${data.customergroup})` : ``} ${data.customergroup.length > 0 ? `OR` : ``}  ${
                                //         data.additionalcustomer.length > 0 ? `accountnum in (${data.additionalcustomer})` : ``
                                //     } ${data.additionalcustomer.length > 0 ? `OR` : ``} ${data.sabiccustomers.length > 0 ? `accountnum in (${data.sabiccustomers})` : ``} ${
                                //         data.sabiccustomers.length > 0 ? `OR` : ``
                                //     } ${data.defaultcustomerid ? `accountnum='${data.defaultcustomerid}'` : ``} or walkincustomer = true`
                                // )
                                .getCount()];
                    case 14:
                        count = _d.sent();
                        _d.label = 15;
                    case 15: return [2 /*return*/, { data: result, count: count }];
                }
            });
        });
    };
    CusttableDAO.prototype.mobile_pagination = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        c.accountnum, \n        c.name, \n        c.namealias,\n        c.phone,\n        c.pricegroup,\n        c.inventlocation,\n        c.dataareaid,\n        c.walkincustomer,\n        c.custgroup,\n        c.cashdisc,\n        c.salesgroup,\n        c.currency,\n        c.paymtermid,\n        c.custtype,\n        c.rcusttype,\n        c.dimension as regionid,\n        c.dimension2_ as departmentid,\n        c.dimension3_ as costcenterid,\n        c.dimension4_ as employeeid,\n        c.dimension5_ as projectid,\n        c.blocked as blocked,\n        (CASE \n          WHEN c.dimension6_!='' THEN concat(d.num,' - ', d.description)\n          ELSE '" + (data.salesmanid.length > 0 ? data.salesmanid[0].salesman : null) + "'\n      END\n       ) as salesman,\n       (CASE \n        WHEN c.dimension6_!='' THEN concat(d.num)\n        ELSE '" + (data.salesmanid.length > 0 ? data.salesmanid[0].salesmanid : null) + "'\n    END\n     ) as salesmanid,\n        c.dimension7_ as brandid,\n        c.dimension8_ as productlineid,\n        rct.name as rcusttypeen,\n        rct.namealias as rcusttypear,\n        ct.name as custtypeen,\n        ct.namealias as custtypear,\n        c.rcusttype \n        from custtable c\n        left join dimensions d on c.dimension6_ = d.num\n        left join custtype ct on ct.id = c.custtype\n        left join rcusttype rct on rct.id = c.rcusttype\n        where c.deleted = false ";
                        if (data.type == "designerservice") {
                            query += " and( c.paymtermid = 'CASH' or c.walkincustomer=true) ";
                        }
                        else if (data.type == "walkincustomer") {
                            query += " and (c.walkincustomer=true) ";
                        }
                        else {
                            query += " and (";
                            if (data.customergroup.length > 0) {
                                query += "(c.custgroup in (" + data.customergroup + ") or c.walkincustomer = true) ";
                            }
                            if (data.additionalcustomer.length > 0) {
                                query += "OR (c.accountnum in (" + data.additionalcustomer + ") or c.walkincustomer = true) ";
                            }
                            if (data.sabiccustomers.length > 0) {
                                query += "OR (c.accountnum in (" + data.sabiccustomers + ") or c.walkincustomer = true) ";
                            }
                            if (data.defaultcustomerid) {
                                query += " or (c.accountnum='" + data.defaultcustomerid + " or c.walkincustomer = true') ";
                            }
                            query += ")";
                        }
                        if (data.filter) {
                            query += " and (\n            c.accountnum ILike '%" + data.filter + "%' or \n            c.name ILike '%" + data.filter + "%' or \n            c.namealias ILike '%" + data.filter + "%' or\n            rct.namealias ILike '%" + data.filter + "%' or\n            rct.name ILike '%" + data.filter + "%' or\n            ct.namealias ILike '%" + data.filter + "%' or\n            ct.name ILike '%" + data.filter + "%'\n            )";
                        }
                        query += " ORDER BY \n        c.createddatetime DESC offset " + (data.page - 1) * data.pageCount + " limit " + data.pageCount;
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CusttableDAO;
}());
exports.CusttableDAO = CusttableDAO;
Object.seal(CusttableDAO);
