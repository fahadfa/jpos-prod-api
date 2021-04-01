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
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var RawQuery_1 = require("../common/RawQuery");
var CusttableDAO_1 = require("../repos/CusttableDAO");
var QuotationReport = /** @class */ (function () {
    function QuotationReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.salestableDAO = new SalesTableDAO_1.SalesTableDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.custtableDAO = new CusttableDAO_1.CusttableDAO();
    }
    QuotationReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id, status_1, data_1, salesLine, i, quantity_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 14, , 15]);
                        id = params.salesId;
                        return [4 /*yield*/, this.query_to_data(id)];
                    case 1:
                        data_1 = _a.sent();
                        data_1 = data_1.length >= 1 ? data_1[0] : {};
                        console.log("==========transkind==========", data_1.transkind);
                        data_1.isSalesOrder = data_1.transkind == "SALESORDER";
                        data_1.isSalesQuotation = data_1.transkind == "SALESQUOTATION";
                        data_1.isPurchOrder = data_1.transkind == "PURCHASEORDER";
                        data_1.isPurchQuotation = data_1.transkind == "PURCHASEREQUEST";
                        data_1.vat = parseInt(data_1.vat);
                        data_1.originalPrinted = data_1.originalPrinted ? data_1.originalPrinted : false;
                        if (!(data_1.originalPrinted && data_1.status == "CONVERTED")) return [3 /*break*/, 3];
                        status_1 = "CONVERTED";
                        return [4 /*yield*/, this.rawQuery.updateSalesTable(id.toUpperCase(), status_1)];
                    case 2:
                        _a.sent();
                        data_1.isCopy = true;
                        return [3 /*break*/, 11];
                    case 3:
                        if (!(data_1.originalPrinted && data_1.status == "CREATED")) return [3 /*break*/, 5];
                        status_1 = "POSTED";
                        return [4 /*yield*/, this.rawQuery.updateSalesTable(id.toUpperCase(), status_1)];
                    case 4:
                        _a.sent();
                        data_1.isCopy = true;
                        return [3 /*break*/, 11];
                    case 5:
                        if (!(data_1.originalPrinted == false && data_1.status == "CONVERTED")) return [3 /*break*/, 7];
                        status_1 = "CONVERTED";
                        return [4 /*yield*/, this.rawQuery.updateSalesTable(id.toUpperCase(), status_1)];
                    case 6:
                        _a.sent();
                        data_1.isCopy = false;
                        return [3 /*break*/, 11];
                    case 7:
                        if (!(data_1.originalPrinted == false && data_1.status == "CREATED")) return [3 /*break*/, 9];
                        status_1 = "POSTED";
                        return [4 /*yield*/, this.rawQuery.updateSalesTable(id.toUpperCase(), status_1, new Date().toISOString())];
                    case 8:
                        _a.sent();
                        data_1.isCopy = true;
                        return [3 /*break*/, 11];
                    case 9:
                        if (!(data_1.status == "SAVED")) return [3 /*break*/, 11];
                        status_1 = "POSTED";
                        return [4 /*yield*/, this.rawQuery.updateSalesTable(id.toUpperCase(), status_1, new Date().toISOString())];
                    case 10:
                        _a.sent();
                        data_1.isCopy = true;
                        _a.label = 11;
                    case 11: return [4 /*yield*/, this.salesline_query_to_data(id)];
                    case 12:
                        salesLine = _a.sent();
                        data_1.vat = salesLine && salesLine.length > 0 ? parseInt(salesLine[0].vat) : "-";
                        return [4 /*yield*/, this.chunkArray(salesLine, 10)];
                    case 13:
                        salesLine = _a.sent();
                        i = 1;
                        quantity_1 = 0;
                        data_1.salesLine = salesLine.map(function (v) {
                            var salesLine = {};
                            salesLine.salesLine = v;
                            salesLine.quantity = 0;
                            v.forEach(function (element) {
                                element.salesQty = parseInt(element.salesQty);
                                element.vat = parseInt(element.vat);
                                salesLine.quantity += element.salesQty;
                                salesLine.vatamount = data_1.vatamount;
                                salesLine.netAmount = data_1.netAmount;
                                salesLine.disc = data_1.disc;
                                salesLine.amount = data_1.amount;
                            });
                            quantity_1 += salesLine.quantity;
                            return salesLine;
                        });
                        data_1.salesLine.map(function (v) {
                            v.wname = data_1.wname;
                            v.wnamealias = data_1.wnamealias;
                            v.custmobilenumber = data_1.custmobilenumber;
                            v.fax = data_1.fax;
                            v.customername = data_1.customername;
                            v.cvatNum = data_1.cvatNum;
                            v.deliveryaddress = data_1.deliveryaddress;
                            v.quantity = quantity_1;
                            v.isSalesOrder = data_1.isSalesOrder;
                            v.isSalesQuotation = data_1.isSalesQuotation;
                            v.isPurchOrder = data_1.isPurchOrder;
                            v.isPurchQuotation = data_1.isPurchQuotation;
                            v.vat = parseInt(data_1.vat);
                            v.originalPrinted = data_1.originalPrinted;
                        });
                        // data.salesLine.map((v: any) => {
                        //   v.sNo = i;
                        //   i += 1;
                        //   v.salesQty = parseInt(v.salesQty);
                        //   v.vat = parseInt(v.vat);
                        //   data.quantity += parseInt(v.salesQty);
                        // });
                        return [2 /*return*/, data_1];
                    case 14:
                        error_1 = _a.sent();
                        throw error_1;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    QuotationReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                // console.log(result.salesLine[0].product.nameEnglish);
                renderData = result;
                console.log(params.lang);
                file = params.lang == "en" ? "sq-en" : "sq-ar";
                console.log(result);
                renderData.user = params && params.user ? params.user : "";
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
    QuotationReport.prototype.chunkArray = function (myArray, chunk_size) {
        return __awaiter(this, void 0, void 0, function () {
            var index, arrayLength, tempArray, myChunk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        arrayLength = myArray.length;
                        tempArray = [];
                        for (index = 0; index < arrayLength; index += chunk_size) {
                            myChunk = myArray.slice(index, index + chunk_size);
                            // Do something if you want with the group
                            tempArray.push(myChunk);
                        }
                        return [4 /*yield*/, tempArray];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuotationReport.prototype.query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            st.salesid as \"salesId\",\n            st.custaccount as \"custAccount\",\n            st.status as status,\n            st.transkind as transkind,\n            st.salesname as customername,\n            st.mobileno as custmobilenumber,\n            to_char(st.vatamount, 'FM999999999990.00')  as vatamount,\n            to_char(st.netamount, 'FM999999999990.00')  as \"netAmount\",\n            to_char(st.disc, 'FM999999999990.00')  as disc,\n            to_char(st.amount , 'FM999999999990.00') as amount,\n            st.createdby as \"createdBy\",\n            c.name as cname,\n            c.namealias as \"cnamealias\",\n            c.phone as \"cphone\",\n            to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n            st.originalprinted as \"originalPrinted\",\n            st.inventlocationid as \"inventLocationId\",\n            st.sumtax as vat,\n            st.description as notes,\n            w.namealias as wnamealias,\n            w.name as wname,\n            concat(d.num,' - ', d.description) as salesman\n            from salestable st \n            left join dimensions d on st.dimension6_ = d.num\n            left join inventlocation w on w.inventlocationid = st.inventlocationid\n            left join custtable c on c.accountnum = st.custaccount\n            where salesid='" + id + "'\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuotationReport.prototype.salesline_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n            select\n            ROW_NUMBER()  OVER (ORDER BY  ln.salesid) As \"sNo\",\n            ln.itemid as itemid,\n            ln.inventsizeid as inventsizeid,\n            ln.configid as configid,\n            ln.salesqty as \"salesQty\",\n            to_char(ln.salesprice, 'FM999999999990.00') as salesprice,\n            coalesce(ln.vat,0) as vat,\n            to_char(ln.vatamount, 'FM999999999990.00') as \"vatAmount\",\n            to_char(ln.linetotaldisc, 'FM999999999990.00') as \"lineTotalDisc\",\n            to_char(ln.colorantprice, 'FM999999999990.00') as colorantprice,\n            to_char((ln.salesprice * ln.salesqty) + (ln.colorantprice  * ln.salesqty) + ln.vatamount - ln.linetotaldisc, 'FM999999999990.00') as \"lineAmount\",\n            b.itemname as \"prodNameAr\",\n            b.namealias as \"prodNameEn\",\n            c.\"name\" as \"colNameAr\",\n            c.\"name\" as \"colNameEn\",\n            s.description as \"sizeNameEn\",\n            s.\"name\" as \"sizeNameAr\",\n            to_char(coalesce(ln.lineamount,0) - coalesce(ln.linetotaldisc,0)+  coalesce(ln.colorantprice * ln.salesqty,0), 'FM999999999990.00') as \"lineAmountBeforeVat\",\n            ln.vat as vat,\n            ln.colorantid as colorant,\n            st.sumtax as vat,\n            ln.linenum as linenum\n            from salesline ln\n            inner join salestable st on st.salesid = ln.salesid\n            inner join inventtable b on b.itemid = ln.itemid\n            inner join configtable c on c.configid = ln.configid and c.itemid = ln.itemid\n            inner join inventsize s on s.inventsizeid=ln.inventsizeid and s.itemid = ln.itemid \n            where ln.salesid = '" + id + "'\n            ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return QuotationReport;
}());
exports.QuotationReport = QuotationReport;
