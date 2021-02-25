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
var RawQuery_1 = require("../common/RawQuery");
var moment = require("moment");
var SalesByOrderReport = /** @class */ (function () {
    function SalesByOrderReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    /**
     * data structure.
     {
        headers: {},
        data:[
          {
            salesgroup: {},
            salesdata: []
          }
        ]
      }
     * @param params
     */
    SalesByOrderReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var result, saleslist, rows, _loop_1, this_1, _i, rows_1, item, _a, _b, saleslist_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        result = {};
                        result.headers = {};
                        result.data = [];
                        saleslist = { salesgroup: {}, salesdata: [] };
                        return [4 /*yield*/, this.salesData(params)];
                    case 1:
                        rows = _c.sent();
                        if (rows && rows.length > 0) {
                            result.headers.wnamealias = rows[0].wnamealias;
                            result.headers.wname = rows[0].wname;
                            result.headers.fromDate = params.fromDate;
                            result.headers.toDate = params.toDate;
                            result.headers.salesman = params.salesmanid ? params.salesmanid + "-" + rows[0].salesman : "ALL";
                            // result.headers.time = moment().format("HH:mm:ss");
                            result.headers.printtime = moment().format("HH:mm:ss");
                            result.headers.printdate = moment().format("DD-MM-YY");
                        }
                        else {
                            result.headers.wnamealias = params.inventlocationid;
                            // result.headers.wname = params.viewType;
                            result.headers.fromDate = params.fromDate;
                            result.headers.toDate = params.toDate;
                            result.headers.salesman = params.salesmanid ? (rows.length > 0 ? rows[0].salesman : "-") : "ALL";
                            result.headers.printtime = moment().format("HH:mm:ss");
                            result.headers.printdate = moment().format("DD-MM-YY");
                        }
                        _loop_1 = function (item) {
                            saleslist = result.data.find(function (ele) { return ele.salesgroup.salesmanId == item.salesmanId; });
                            item.deliverydate = App_1.App.convertUTCDateToLocalDate(new Date(item.deliverydate), parseInt(params.timeZoneOffSet));
                            if (saleslist) {
                                this_1.updateAmount(saleslist, item);
                                saleslist.salesdata.push(item);
                            }
                            else {
                                saleslist = { salesgroup: {}, salesdata: [] };
                                saleslist.salesgroup.salesman = item.salesman;
                                saleslist.salesgroup.salesmanId = item.salesmanId;
                                saleslist.salesgroup.amount = 0;
                                saleslist.salesgroup.netamount = 0;
                                saleslist.salesgroup.vatamount = 0;
                                saleslist.salesgroup.disc = 0;
                                this_1.updateAmount(saleslist, item);
                                saleslist.salesdata.push(item);
                                result.data.push(saleslist);
                            }
                        };
                        this_1 = this;
                        for (_i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                            item = rows_1[_i];
                            _loop_1(item);
                        }
                        for (_a = 0, _b = result.data; _a < _b.length; _a++) {
                            saleslist_1 = _b[_a];
                            saleslist_1.salesgroup.amount = Number(saleslist_1.salesgroup.amount).toFixed(2);
                            saleslist_1.salesgroup.netamount = Number(saleslist_1.salesgroup.netamount).toFixed(2);
                            saleslist_1.salesgroup.vatamount = Number(saleslist_1.salesgroup.vatamount).toFixed(2);
                            saleslist_1.salesgroup.disc = saleslist_1.salesgroup.disc ? Number(saleslist_1.salesgroup.disc).toFixed(2) : 0;
                        }
                        // console.log('=============result=======================');
                        // console.log(result);
                        // console.log('===========result=========================');
                        return [2 /*return*/, result];
                }
            });
        });
    };
    SalesByOrderReport.prototype.updateAmount = function (saleslist, item) {
        if (item && item.transkind == "RETURNORDER") {
            item.amount = -Number.parseFloat(item.amount);
            item.netamount = -Number.parseFloat(item.netamount);
            item.vatamount = -Number.parseFloat(item.vatamount);
            item.disc = item.disc ? -Number.parseFloat(item.disc) : 0;
        }
        saleslist.salesgroup.amount += Number.parseFloat(item.amount);
        saleslist.salesgroup.netamount += Number.parseFloat(item.netamount);
        saleslist.salesgroup.vatamount += Number.parseFloat(item.vatamount);
        saleslist.salesgroup.disc += item.disc ? Number.parseFloat(item.disc) : 0;
    };
    SalesByOrderReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, query, data, title, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log(result.salesLine[0].product.nameEnglish);
                        renderData = result;
                        if (!(renderData.headers.salesman === "ALL")) return [3 /*break*/, 2];
                        query = "select * from app_lang ap where ap.id = '" + renderData.headers.salesman + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data[0] : {};
                        renderData.headers.salesman = params.lang == "en" ? data.en : data.ar;
                        _a.label = 2;
                    case 2:
                        renderData.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                        return [4 /*yield*/, this.rawQuery.getAppLangName("SALESBYSALEMAN-SALESORDERVIEW")];
                    case 3:
                        title = _a.sent();
                        if (title) {
                            result.title = title;
                            console.table(title);
                        }
                        console.log(renderData);
                        file = params.lang == "en" ? "sales-by-order-en" : "sales-by-order-ar";
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
    SalesByOrderReport.prototype.salesData = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, sql, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("My params", params);
                        console.log("--------------", new Date(params.fromDate));
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        sql = "\n      select\n        st.salesid as \"salesid\" ,\n        st.custaccount as \"custaccount\",\n        st.status as status,\n        als.en as \"statusEn\",\n        als.ar as \"statusAr\",\n        alt.en as \"transkindEn\",\n        alt.ar as \"transkindAr\",\n        st.transkind as transkind,\n        st.salesname as customername,\n        st.mobileno as custmobilenumber,\n        to_char(st.vatamount, 'FM999999999990.00') as vatamount,\n        to_char(st.netamount, 'FM999999999990.00') as \"netamount\",\n        to_char(st.disc, 'FM999,999999990.00') as disc,\n        to_char(st.amount , 'FM999999999990.00') as amount,\n        w.namealias as wnamealias,\n        w.name as wname,\n        d.description as salesman,\n        d.num as \"salesmanId\",\n        st.lastmodifieddate as \"deliverydate\"\n      from\n        salestable st\n      left join inventlocation w on\n        w.inventlocationid = st.inventlocationid\n      inner join dimensions d on\n        d.num = st.dimension6_\n      left join app_lang als on als.id = st.status\n      left join app_lang alt on alt.id = st.transkind  \n      where\n        1 = 1\n        and st.transkind not in ('SALESQUOTATION', 'ORDERSHIPEMT', 'TRANSFERORDER', 'ORDERRECEIVE', 'INVENTORYMOVEMENT')\n        AND st.status in ('POSTED', 'PAID', 'PRINTED')\n        and st.lastmodifieddate between '" + fromDate + "'::timestamp and ('" + toDate + "'::timestamp + '1 day'::interval)\n        and st.inventlocationid = '" + params.inventlocationid + "'\n  ";
                        if (params.salesmanid) {
                            sql = sql + (" and d.num = '" + params.salesmanid + "' ");
                        }
                        sql = sql + " order by st.lastmodifieddate  ";
                        console.log(sql);
                        return [4 /*yield*/, this.db.query(sql)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    return SalesByOrderReport;
}());
exports.SalesByOrderReport = SalesByOrderReport;
