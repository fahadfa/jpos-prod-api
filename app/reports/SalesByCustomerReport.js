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
var moment = require("moment");
var SalesByCustomerReport = /** @class */ (function () {
    function SalesByCustomerReport() {
        this.db = typeorm_1.getManager();
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
    SalesByCustomerReport.prototype.execute = function (params) {
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
                        // console.log("--------------sssss--------");
                        // console.log(params);
                        // console.log("------------sssss----------");
                        if (rows && rows[0]) {
                            result.headers.wnamealias = rows[0].wnamealias;
                            result.headers.wname = rows[0].wname;
                            result.headers.fromDate = params.fromDate;
                            result.headers.toDate = params.toDate;
                            result.headers.salesman = params.salesmanid ? rows[0].salesman : "ALL";
                            // result.headers.printtime = moment().format("HH:mm:ss");
                            // result.headers.printdate = moment().format("DD-MM-YY");
                        }
                        else {
                            result.headers.wnamealias = params.inventlocationid;
                            // result.headers.wname = params.viewType;
                            result.headers.fromDate = params.fromDate;
                            result.headers.toDate = params.toDate;
                            result.headers.salesman = params.salesmanid ? rows[0].salesman : "ALL";
                            // result.headers.printtime = moment().format("HH:mm:ss");
                            // result.headers.printdate = moment().format("DD-MM-YY");
                        }
                        _loop_1 = function (item) {
                            saleslist = result.data.find(function (ele) { return ele.salesgroup.salesmanId == item.salesmanId; });
                            console.log(saleslist);
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
                        return [2 /*return*/, result];
                }
            });
        });
    };
    SalesByCustomerReport.prototype.updateAmount = function (saleslist, item) {
        saleslist.salesgroup.amount += Number.parseFloat(item.amount);
        saleslist.salesgroup.netamount += Number.parseFloat(item.netamount);
        saleslist.salesgroup.vatamount += Number.parseFloat(item.vatamount);
        saleslist.salesgroup.disc += item.disc ? Number.parseFloat(item.disc) : 0;
    };
    SalesByCustomerReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                // console.log(result.salesLine[0].product.nameEnglish);
                renderData = result;
                renderData.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                console.log(params.lang);
                file = params.lang == "en" ? "sales-by-customer-en" : "sales-by-customer-ar";
                try {
                    return [2 /*return*/, App_1.App.HtmlRender(file, renderData)];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    SalesByCustomerReport.prototype.salesData = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "\n      select\n        st.salesname as customername,\n        als.en as \"statusEn\",\n        als.ar as \"statusAr\",\n        alt.en as \"transkindEn\",\n        alt.ar as \"transkindAr\",\n        to_char(sum(st.vatamount), 'FM999999999990.00') as vatamount,\n        to_char(sum(st.netamount), 'FM999999999990.00') as \"netamount\",\n        to_char(sum(st.disc), 'FM999999999990.00') as disc,\n        to_char(sum(st.amount) , 'FM999999999990.00') as amount,\n        w.namealias as wnamealias,\n        w.name as wname,\n        d.description as salesman,\n        d.num as \"salesmanId\"\n      from\n        salestable st\n      left join inventlocation w on\n        w.inventlocationid = st.inventlocationid\n      inner join dimensions d on\n        d.num = st.dimension6_\n      left join app_lang als on als.id = st.status\n      left join app_lang alt on alt.id = st.transkind\n      where\n        1 = 1\n        and st.transkind not in ('SALESQUOTATION', 'ORDERSHIPEMT', 'TRANSFERORDER', 'ORDERRECEIVE', 'INVENTORYMOVEMENT')\n        AND st.status in ('POSTED', 'PAID', 'PRINTED')\n        and st.lastmodifieddate between '" + params.fromDate + "' and ('" + params.toDate + "'::date + '2 day'::interval)\n        and st.inventlocationid = '" + params.inventlocationid + "'\n  ";
                        if (params.salesmanid) {
                            sql = sql + (" and d.num = '" + params.salesmanid + "' ");
                        }
                        sql =
                            sql +
                                " \n    group by st.salesname, w.namealias, w.name, d.description, als.en, als.ar, alt.en, alt.ar ,  d.num\n    order by customername";
                        return [4 /*yield*/, this.db.query(sql)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    return SalesByCustomerReport;
}());
exports.SalesByCustomerReport = SalesByCustomerReport;
