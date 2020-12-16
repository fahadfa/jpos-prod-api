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
var SalesOrdersReport = /** @class */ (function () {
    function SalesOrdersReport() {
        this.db = typeorm_1.getManager();
    }
    SalesOrdersReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, resData_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            v.paymentMode = v.paymentType == "ONLINE" ? "Online" : v.paymentMode;
                            v.paymentTypeAr = v.paymentType == "ONLINE" ? "عبر الانترنت" : v.paymentMode;
                            v.paymentMode = v.iscash ? "CASH" : v.paymtermid;
                            v.paymentModeAr = v.iscash ? "السيولة النقدية" : v.paymtermid;
                            v.grossAmount = v.grossAmount ? v.grossAmount : 0;
                            v.discount = v.discount ? v.discount : 0;
                            v.vatAmount = v.vatAmount ? v.vatAmount : 0;
                            v.netAmount = v.netAmount ? v.netAmount : 0;
                            // if (process.env.ENV_STORE_ID) {
                            //   v.lastmodifieddate = v.lastmodifieddate ? new Date(v.lastmodifieddate).toLocaleString() : v.lastmodifieddate;
                            // } else {
                            v.lastmodifieddate = App_1.App.convertUTCDateToLocalDate(new Date(v.lastmodifieddate), parseInt(params.timeZoneOffSet));
                            // }
                            v.phone = v.phone && v.phone != "null" ? v.phone : null;
                        });
                        resData_1 = {
                            grossAmount: 0,
                            discount: 0,
                            vatAmount: 0,
                            netAmount: 0,
                            cashAmount: 0,
                            cardAmount: 0,
                            designServiceRedeemAmount: 0,
                            redeemAmount: 0,
                        };
                        data.map(function (v) {
                            resData_1.grossAmount += parseFloat(v.grossAmount);
                            resData_1.discount += parseFloat(v.discount);
                            resData_1.vatAmount += parseFloat(v.vatAmount);
                            resData_1.netAmount += parseFloat(v.netAmount);
                        });
                        resData_1.grossAmount = resData_1.grossAmount.toFixed(2);
                        resData_1.discount = resData_1.discount.toFixed(2);
                        resData_1.vatAmount = resData_1.vatAmount.toFixed(2);
                        resData_1.netAmount = resData_1.netAmount.toFixed(2);
                        resData_1.cashAmount = resData_1.cashAmount.toFixed(2);
                        resData_1.cardAmount = resData_1.cardAmount.toFixed(2);
                        resData_1.designServiceRedeemAmount = resData_1.designServiceRedeemAmount.toFixed(2);
                        resData_1.redeemAmount = resData_1.redeemAmount.toFixed(2);
                        // console.log("salesorders  ", data);
                        resData_1.data = data;
                        return [2 /*return*/, resData_1];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SalesOrdersReport.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid ='" + param + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data ? data[0] : {}];
                }
            });
        });
    };
    SalesOrdersReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                result.printDate = new Date().toLocaleString();
                result.fromDate = params.fromDate;
                result.toDate = params.toDate;
                // (result.status = params.status),
                //   (result.status = "")
                // );
                if (params.status != "ALL") {
                    if (params.status == "RESERVED") {
                        result.status = "RESERVED";
                    }
                    else if (params.status == "SAVED") {
                        result.status = "SAVED";
                    }
                    else if (params.status == "CREATED") {
                        result.status = "CREATED";
                    }
                    else if (params.status == "POSTED") {
                        result.status = "PRINTED/PAID";
                    }
                    else if (params.status == "PAID") {
                        result.status = "PAID/PRINTED";
                    }
                }
                result.user = params.user;
                // renderData.total = 0;
                (result.printDate = new Date(params.printDate)
                    .toISOString()
                    .replace(/T/, " ") // replace T with a space
                    .replace(/\..+/, "")),
                    console.log(params.lang);
                console.log(result);
                if (params.type == "excel") {
                    file = params.lang == "en" ? "salesorder-excel" : "salesorder-excel-ar";
                }
                else {
                    file = params.lang == "en" ? "salesorder-report" : "salesorder-report-ar";
                }
                try {
                    return [2 /*return*/, App_1.App.HtmlRender(file, result)];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    SalesOrdersReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        query = "\n            select \n            distinct\n              s.salesid as \"salesId\",\n              s.dimension6_ as \"salesManId\",\n              s.inventlocationid as \"fromWareHouse\",\n              s.custaccount as \"custaccount\",\n              to_char(s.createddatetime, 'DD-MM-YYYY') as \"createddatetime\",\n              s.lastmodifieddate as \"lastmodifieddate\",\n              s.status as status,              \n              als.en as \"statusEn\",\n              als.ar as \"statusAr\",              \n              alt.en as \"transkindEn\",\n              alt.ar as \"transkindAr\",\n              to_char(s.disc , 'FM999999999990.00') as discount,\n              s.salesname as name,\n              s.salesname as \"nameAlias\",\n              to_char(s.amount , 'FM999999999990.00') as \"grossAmount\",\n              to_char(s.netamount , 'FM999999999990.00') as \"netAmount\",\n              to_char(s.vatamount , 'FM999999999990.00') as \"vatAmount\",\n              w.name as \"wareHouseNameAr\",\n              w.namealias as \"wareHouseNameEn\",\n              s.payment as \"paymentMode\",\n              alp.en as \"paymentModeEn\",\n            \talp.ar as \"paymentModeAr\",              \n              c.walkincustomer as \"walkincustomer\",\n              s.mobileno as phone,\n              s.createddatetime,\n              s.iscash,\n              c.paymtermid,\n              s.transkind as type,\n              s.payment_type as \"paymentType\",\n              s.voucherdiscchecked as \"voucherdiscchecked\",\n              s.vouchernum as \"vouchernum\",\n              s.cash_amount as \"cashAmount\",\n              s.card_amount as \"cardAmount\",\n              s.shipping_amount as \"shippingAmount\",\n              s.online_amount as \"onlineAmount\",\n              s.redeemptsamt as \"redeemAmount\",\n              s.design_service_redeem_amount as \"designServiceRedeemAmount\",\n              coalesce(s.deliveryaddress, '') || coalesce(s.citycode, '') || coalesce(s.districtcode, '') || coalesce(s.country_code, '') as deliveryaddress,\n              concat(d.num,' - ', d.description) as salesman\n            from salestable s\n              left join inventlocation w on w.inventlocationid=s.inventlocationid\n              left join custtable c on c.accountnum=s.custaccount\n              left join app_lang als on als.id = s.status\n              left join app_lang alt on alt.id = s.transkind\n              left join app_lang alp on alp.id = s.payment\n              left join dimensions d on s.dimension6_ = d.num\n            where s.transkind in ('SALESORDER', 'DESIGNERSERVICE')\n            and s.lastmodifieddate >= '" + fromDate + "' ::timestamp\n            AND  s.lastmodifieddate < ('" + toDate + "' ::timestamp + '1 day'::interval) \n            ";
                        if (!(params.inventlocationid == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where inventlocationid= '" + params.key + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr_1 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        inQueryStr_1 += "'" + params.key + "',";
                        query += " and s.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " and s.inventlocationid='" + params.inventlocationid + "' ";
                        _a.label = 3;
                    case 3:
                        if (params.status != "ALL") {
                            if (params.status == "RESERVED") {
                                query += " and s.status in ('RESERVED') ";
                            }
                            else if (params.status == "SAVED") {
                                query += " and s.status in ('SAVED') ";
                            }
                            else if (params.status == "CREATED") {
                                query += " and s.status in ('CREATED') ";
                            }
                            else if (params.status == "POSTED") {
                                query += " and s.status in ('POSTED','PAID','PRINTED') ";
                            }
                            else if (params.status == "PAID") {
                                query += " and s.status in ('PAID','POSTED','PRINTED') ";
                            }
                            else if (params.status == "PRINTED") {
                                query += " and s.status in ('PAID','POSTED','PRINTED') ";
                            }
                        }
                        if (params.paymentMode != "ALL") {
                            if (params.paymentMode == "CASH") {
                                query += " and (s.iscash = true or c.paymtermid = 'CASH') ";
                            }
                            else if (params.paymentMode == "CREDIT") {
                                query += " and s.iscash != true and c.paymtermid != 'CASH' ";
                            }
                        }
                        if (params.accountnum) {
                            query += " and (s.custaccount = '" + params.accountnum + "' or s.mobileno ='" + params.accountnum + "' or s.invoiceaccount='" + params.accountnum + "') ";
                        }
                        query += " order by s.createddatetime ASC";
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SalesOrdersReport;
}());
exports.SalesOrdersReport = SalesOrdersReport;
