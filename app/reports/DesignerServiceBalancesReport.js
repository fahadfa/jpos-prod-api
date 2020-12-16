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
var SalesTableService_1 = require("../services/SalesTableService");
var RawQuery_1 = require("../common/RawQuery");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var DesignerServiceBalancesReport = /** @class */ (function () {
    function DesignerServiceBalancesReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
    }
    DesignerServiceBalancesReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data = params;
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            // if (process.env.ENV_STORE_ID) {
                            //   v.lastmodifieddate = v.lastmodifieddate ? new Date(v.lastmodifieddate).toLocaleString() : v.lastmodifieddate;
                            // } else {
                            v.lastmodifieddate = App_1.App.convertUTCDateToLocalDate(new Date(v.lastmodifieddate), parseInt(params.timeZoneOffSet));
                            // }
                        });
                        console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DesignerServiceBalancesReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                renderData = params;
                renderData.data = result;
                file = params.lang == "en" ? "designer-service-balances-en" : "designer-service-balances-ar";
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
    DesignerServiceBalancesReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        query = "          \nselect distinct d.invoiceid, d.customerid, d.custphone,\ncast(coalesce(d.balanceamount, 0) as Decimal(10,2)) as \"balanceAmount\",\ncast((coalesce(d.designerserviceamount, 0) - coalesce(d.balanceamount, 0)) as Decimal(10,2)) as \"usedAmount\",\ncast(coalesce(d.designerserviceamount, 0) as Decimal(10,2)) \nas \"designerserviceAmount\",st.lastmodifieddate,st.status from\n(\nselect\na.invoiceid,\na.customerid,\na.custphone,\n(select ABS(sum(b.amount)) from designerservice b where b.invoiceid=a.invoiceid \nand b.customerid = a.customerid and b.custphone= a.custphone \ngroup by b.invoiceid, b.customerid, b.custphone )\nas balanceamount,\n(select ABS(sum(e.amount)) from \ndesignerservice e where e.amount > 0 \nand  e.recordtype = 1 and e.invoiceid=a.invoiceid and e.customerid = a.customerid and e.custphone = a.custphone group by e.invoiceid, e.customerid, e.custphone)\nas designerserviceamount\nfrom designerservice a \n--                where a.customerid = '0554076508'\n)  \nas d \ninner join salestable as st on d.invoiceid=st.salesid \nwhere d.balanceamount > 0\nand st.inventlocationid ='" + params.inventlocationid + "'\nand st.lastmodifieddate ::Date>='" + fromDate + "' ::timestamp\nand st.lastmodifieddate ::Date<='" + toDate + "' ::timestamp";
                        if (params.status != "ALL") {
                            if (params.status == "RESERVED") {
                                query += " and st.status in ('RESERVED') ";
                            }
                            else if (params.status == "SAVED") {
                                query += " and st.status in ('SAVED') ";
                            }
                            else if (params.status == "CREATED") {
                                query += " and st.status in ('CREATED') ";
                            }
                            else if (params.status == "POSTED") {
                                query += " and st.status in ('POSTED','PAID', 'PRINTED') ";
                            }
                            else if (params.status == "PAID") {
                                query += " and st.status in ('PAID','POSTED', 'PRINTED') ";
                            }
                            else if (params.status == "PRINTED") {
                                query += " and st.status in ('PAID','POSTED', 'PRINTED') ";
                            }
                        }
                        if (params.custaccount) {
                            query += "and d.customerid = '" + params.custaccount + "'";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DesignerServiceBalancesReport;
}());
exports.DesignerServiceBalancesReport = DesignerServiceBalancesReport;
