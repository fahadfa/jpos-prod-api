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
var VisitCustomer_1 = require("../../entities/VisitCustomer");
var VisitCustomerDAO = /** @class */ (function () {
    function VisitCustomerDAO() {
        this.dao = typeorm_1.getRepository(VisitCustomer_1.VisitCustomer);
        this.db = typeorm_1.getManager();
    }
    VisitCustomerDAO.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.find(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.searchInventLocationId = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select v.* \n        from visitcustomer v inner join usergroupconfig ucg \n        on v.usergroupid =ucg.usergroupid where ucg.inventlocationid ='" + data.inventlocationid + "'\n        and v.dateofvisit >= current_date - interval '15' day";
                        return [4 /*yield*/, this.dao.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        return [4 /*yield*/, this.dao.findOne({ visitorSequenceNumber: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.remove([data])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.findAll = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.find(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.pagination = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query, countQuery, new_filter_data, _i, _a, item, _b, item_1, value, filter, _c, _d, item, count_1, visitorData_1, count, visitorData;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        query = "select \n            v.visitorid as \"visitorId\",\n            v.visitorsequencenumber as \"visitorSequenceNumber\",\n            v.dateofvisit as \"dateOfVisit\",\n            d.description as \"salesmanName\",\n            d.name as name,\n            v.salesmanid as \"salesmanId\",\n            v.regionnumber as \"regionNumber\",\n            v.showroomid as \"showroomId\",\n            v.usergroupid as \"userGroupId\",\n            v.visitormobilenumber as \"visitorMobileNumber\",\n            v.visitorname as \"visitorName\",\n            v.purchased as \"purchased\",\n            v.visitortype as \"visitorType\",\n            v.reasonfornotpurchase as \"description\",\n            v.createdby as \"createdBy\",\n            v.createddatetime as \"createdDateTime\",\n            v.lastmodifiedby as \"lastModifiedBy\",\n            v.dataareaid as \"dataareaid\",\n            v.lastmodifieddate as \"lastModifiedDate\"\n            from visitcustomer v\n            left join dimensions as d on d.num = v.salesmanid ";
                        countQuery = "select \n        count(*)\n        from visitcustomer v\n        left join dimensions as d on d.num = v.salesmanid ";
                        if (!(data.filter != null && data.filter != "null")) return [3 /*break*/, 3];
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
                                    if (item[0] == "dateOfVisit") {
                                        filter += "dateOfVisit " + ("" + item[1]) + ("'" + new Date(item[2]).toDateString() + "'");
                                    }
                                    else {
                                        filter += item[0] + " ILike " + ("'%" + item[2] + "%'");
                                    }
                                }
                                if (typeof item == "string") {
                                    if (item == "dateOfVisit") {
                                        filter += "dateOfVisit " + ("" + item[1]) + ("'" + new Date(item[2]).toDateString() + "'");
                                    }
                                    else {
                                        filter += " " + item + " ";
                                    }
                                }
                            }
                        }
                        else if (typeof data.filter[0] == "string") {
                            if (data.filter[0] == "dateOfVisit") {
                                filter += "dateOfVisit " + ("" + data.filter[1]) + ("'" + new Date(data.filter[2]).toDateString() + "'");
                            }
                            else {
                                filter += data.filter[0] + " ILike " + ("'%" + data.filter[2] + "%'");
                            }
                        }
                        console.log(filter);
                        countQuery += " where " + filter;
                        query += " where " + filter;
                        // if (!data.orderby) {
                        //     query += ` ORDER BY dateOfVisit DESC `;
                        // }
                        query += data.orderby && data.orderby != "null" ? " ORDER BY " + data.column + " " + data.orderby + " " : " ORDER BY dateOfVisit DESC ";
                        query += "offset '" + data.skip + "' limit '" + data.take + "'";
                        return [4 /*yield*/, this.db.query(countQuery)];
                    case 1:
                        count_1 = _e.sent();
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        visitorData_1 = _e.sent();
                        return [2 /*return*/, { data: visitorData_1, count: count_1[0].count }];
                    case 3:
                        // if (!data.orderby) {
                        //     query += ` ORDER BY dateOfVisit DESC `;
                        // }
                        query += data.orderby && data.orderby != "null" ? " ORDER BY " + data.column + " " + data.orderby + " " : " ORDER BY dateOfVisit DESC ";
                        query += "offset " + data.skip + " limit " + data.take;
                        return [4 /*yield*/, this.db.query(countQuery)];
                    case 4:
                        count = _e.sent();
                        return [4 /*yield*/, this.db.query(query)];
                    case 5:
                        visitorData = _e.sent();
                        return [2 /*return*/, { data: visitorData, count: count[0].count }];
                }
            });
        });
    };
    VisitCustomerDAO.prototype.mobile_pagination = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        v.visitorid as \"visitorId\",\n        v.visitorsequencenumber as \"visitorSequenceNumber\",\n        v.dateofvisit as \"dateOfVisit\",\n        d.description as \"salesmanName\",\n        d.name as name,\n        v.salesmanid as \"salesmanId\",\n        v.regionnumber as \"regionNumber\",\n        v.showroomid as \"showroomId\",\n        v.usergroupid as \"userGroupId\",\n        v.visitormobilenumber as \"visitorMobileNumber\",\n        v.visitorname as \"visitorName\",\n        v.purchased as \"purchased\",\n        v.visitortype as \"visitorType\",\n        v.reasonfornotpurchase as \"description\",\n        v.createdby as \"createdBy\",\n        v.createddatetime as \"createdDateTime\",\n        v.lastmodifiedby as \"lastModifiedBy\",\n        v.dataareaid as \"dataareaid\",\n        v.lastmodifieddate as \"lastModifiedDate\"\n        from visitcustomer v\n        left join dimensions as d on d.num = v.salesmanid ";
                        if (data.filter) {
                            query += "where (v.visitorsequencenumber ILike '%" + data.filter + "%' or \n            v.visitorname ILike '%" + data.filter + "%')";
                        }
                        query += "  ORDER BY \n        v.createddatetime DESC offset " + (data.page - 1) * data.pageCount + " limit " + data.pageCount;
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return VisitCustomerDAO;
}());
exports.VisitCustomerDAO = VisitCustomerDAO;
Object.seal(VisitCustomerDAO);
