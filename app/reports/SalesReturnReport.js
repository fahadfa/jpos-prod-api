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
var App_1 = require("../../utils/App");
var SalesReturnReport = /** @class */ (function () {
    function SalesReturnReport() {
        this.db = typeorm_1.getManager();
    }
    SalesReturnReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            v.lastmodifieddate = App_1.App.convertUTCDateToLocalDate(new Date(v.lastmodifieddate), parseInt(params.timeZoneOffSet));
                            v.phone = v.phone && v.phone != "null" ? v.phone : null;
                        });
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SalesReturnReport.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid ='" + param + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    SalesReturnReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, warehouse, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderData = {
                            printDate: App_1.App.convertUTCDateToLocalDate(new Date(App_1.App.DateNow()), parseInt(params.timeZoneOffSet)),
                            fromDate: params.fromDate,
                            toDate: params.toDate,
                            status: params.status,
                            user: params.user,
                        };
                        console.log(renderData.printDate);
                        return [4 /*yield*/, this.warehouseName(params.inventlocationid)];
                    case 1:
                        warehouse = _a.sent();
                        renderData.warehouseNameEn = warehouse.namealias;
                        renderData.warehouseNameAr = warehouse.name;
                        renderData.grossAmount = 0;
                        renderData.discount = 0;
                        renderData.vatAmount = 0;
                        renderData.netAmount = 0;
                        result.map(function (v) {
                            renderData.grossAmount += parseFloat(v.grossAmount);
                            // renderData.discount += parseFloat(v.discount);
                            renderData.discount += Number(v.discount);
                            renderData.vatAmount += parseFloat(v.vatAmount);
                            renderData.netAmount += parseFloat(v.netAmount);
                        });
                        renderData.grossAmount = renderData.grossAmount.toFixed(2);
                        renderData.discount = renderData.discount.toFixed(2);
                        renderData.vatAmount = renderData.vatAmount.toFixed(2);
                        renderData.netAmount = renderData.netAmount.toFixed(2);
                        // console.log(result.salesLine[0].product.nameEnglish);
                        renderData.data = result;
                        if (params.type == "excel") {
                            file = params.lang == "en" ? "salesreturn-excel" : "salesreturn-excel-ar";
                        }
                        else {
                            file = params.lang == "en" ? "salesreturn-report" : "salesreturn-report-ar";
                        }
                        try {
                            return [2 /*return*/, App_1.App.HtmlRender(file, renderData)];
                        }
                        catch (error) {
                            throw error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesReturnReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet);
                        query = "\n            select \n                distinct\n                s.salesid as \"salesId\",\n                s.inventlocationid as \"fromWareHouse\",\n                s.custaccount as \"custaccount\",\n                s.createddatetime as createdDateTime,\n                s.lastmodifieddate as lastModifiedDate,\n                to_char(coalesce(s.disc, 0) , 'FM999999999990.00') as \"discount\",\n                to_char(s.amount , 'FM999999999990.00') as \"netAmount\",\n                to_char(s.netamount , 'FM999999999990.00') as \"grossAmount\",\n                to_char(s.vatamount , 'FM999999999990.00') as \"vatAmount\",\n                s.status as status,\n                als.en as \"statusEn\",\n                als.ar as \"statusAr\",\n                s.salesname as name,\n                s.salesname as \"nameAlias\",\n                to_char(s.amount, 'FM999999999990.00') as \"netAmount\",\n                to_char(s.netamount,'FM999999999990.00')  as \"grossAmount\",\n                s.transkind as type,\n                alt.en as \"transkindEn\",\n\t              alt.ar as \"transkindAr\",\n                w.name as \"wareHouseNameAr\",\n                w.namealias as \"wareHouseNameEn\",\n                c.paymtermid as \"paymentMode\",\n                alp.en as \"paymentModeEn\",\n                alp.ar as \"paymentModeAr\",\n                c.walkincustomer as \"walkincustomer\",\n                c.phone as phone\n            from salestable s\n              left join inventlocation w on w.inventlocationid=s.inventlocationid\n              left join custtable c on c.accountnum=s.custaccount\n              left join app_lang als on als.id = s.status\n              left join app_lang alt on alt.id = s.transkind\n              left join app_lang alp on alp.id = s.payment\n            where s.transkind in ('RETURNORDER', 'DESIGNERSERVICERETURN') \n            and s.createddatetime >= '" + fromDate + "' ::timestamp\n            AND  s.createddatetime < ('" + toDate + "' ::timestamp + '1 day'::interval) \n            ";
                        if (params.status != "ALL") {
                            if (params.status == "RESERVED") {
                                query += " and s.status in ('RESERVED') ";
                            }
                            else if (params.status == "APPROVED") {
                                query += " and s.status in ('APPROVEDBYRA','APPROVEDBYRM','APPROVED') ";
                            }
                            else if (params.status == "SAVED") {
                                query += " and s.status in ('SAVED') ";
                            }
                            else if (params.status == "CREATED") {
                                query += " and s.status in ('CREATED') ";
                            }
                            else if (params.status == "POSTED") {
                                query += " and s.status in ('POSTED','PAID', 'PRINTED') ";
                            }
                            else if (params.status == "PAID") {
                                query += " and s.status in ('PAID','POSTED', 'PRINTED') ";
                            }
                        }
                        if (!(params.inventlocationid == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where inventlocationid= '" + params.key + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr_1 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        inQueryStr_1 += "'" + params.inventlocationid + "',";
                        query += " and s.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " and s.inventlocationid='" + params.inventlocationid + "' ";
                        _a.label = 3;
                    case 3:
                        // if (params.status && params.status != "ALL") {
                        //   query += ` and  s.status = '${params.status}' `;
                        // }
                        if (params.accountnum) {
                            query += " and s.custaccount = '" + params.accountnum + "'";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SalesReturnReport;
}());
exports.SalesReturnReport = SalesReturnReport;
