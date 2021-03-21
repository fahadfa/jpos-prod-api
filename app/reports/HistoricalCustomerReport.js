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
var RawQuery_1 = require("../common/RawQuery");
var typeorm_1 = require("typeorm");
var App_1 = require("../../utils/App");
var Props_1 = require("../../constants/Props");
var axios = require("axios");
var HistoricalCustomerReport = /** @class */ (function () {
    function HistoricalCustomerReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    HistoricalCustomerReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var custaccount, data, olddata, salesTable, salesLines, newLines_1, inventLocationIds_1, lines_1, wquery, invlocations_1, _a, newArr, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, , 11]);
                        custaccount = params.custaccount;
                        if (!custaccount) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getHistoricalData(params)];
                    case 1:
                        data = _b.sent();
                        console.log(data);
                        if (data && data.length > 0) {
                            data = data.map(function (item) {
                                item.lastmodifieddate = App_1.App.convertUTCDateToLocalDate(new Date(item.lastmodifieddate), params.timeZoneOffSet);
                                item.salesline = item.salesline.map(function (lines) {
                                    lines.colorant = lines.colorant ? lines.colorant : "--";
                                    return lines;
                                });
                                return item;
                            });
                        }
                        return [4 /*yield*/, App_1.App.checkInternet()];
                    case 2:
                        if (!_b.sent()) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.oldDataUrl(params)];
                    case 3:
                        olddata = _b.sent();
                        salesTable = olddata && olddata.SalesTable.length > 0 ? olddata.SalesTable : [];
                        salesLines = olddata && olddata.SalesLine.length > 0 ? olddata.SalesLine : [];
                        console.log("++++++++++++++++++++++++++ salesTable ++++++++++++++++++++++++", salesTable.length);
                        newLines_1 = {};
                        salesLines.forEach(function (line) {
                            var newLine = {};
                            newLine.itemid = line.ITEMID;
                            newLine.salesId = line.SALESID;
                            newLine.vatAmount = line.LineSalesTax;
                            newLine.netAmount = line.LINEAMOUNT;
                            newLine.salesQty = line.SALESQTY;
                            newLine.salesprice = line.SALESPRICE;
                            newLine.lineTotalDisc = line.LINEDISCAMT;
                            newLine.configid = line.CONFIGID;
                            newLine.inventsizeid = line.INVENTSIZEID;
                            newLine.salesQty = line.SALESQTY;
                            newLine.colorant = "-";
                            newLine.colorantprice = "0";
                            newLine.linenum = line.LINENUM;
                            newLine.inventLocationId = line.INVENTLOCATIONID;
                            !newLines_1[newLine.salesId] ? newLines_1[newLine.salesId] = [] : null;
                            newLines_1[newLine.salesId].push(newLine);
                        });
                        inventLocationIds_1 = "";
                        lines_1 = Object.values(newLines_1);
                        lines_1.forEach(function (d, index) {
                            if (d.length > 0 && d[0].inventLocationId) {
                                inventLocationIds_1 += "'" + d[0].inventLocationId + "'";
                                if (index < lines_1.length - 1) {
                                    inventLocationIds_1 += ",";
                                }
                            }
                        });
                        wquery = "select i.inventlocationid,i.namealias as wnamealias,i.\"name\" as wname from inventlocation i where i.inventlocationid in(" + inventLocationIds_1 + ");";
                        if (!inventLocationIds_1) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.db.query(wquery)];
                    case 4:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _a = [];
                        _b.label = 6;
                    case 6:
                        invlocations_1 = _a;
                        newArr = salesTable.map(function (item) {
                            var object = {};
                            object.salesId = item.SALESID;
                            object.createddatetime = new Date(item.CREATEDDATETIME);
                            object.netAmount = item.NETAMOUNT;
                            object.disc = item.DISC;
                            object.amount = item.AMOUNT;
                            object.vatamount = item.SumTax;
                            object.salesline = newLines_1[object.salesId] ? newLines_1[object.salesId] : [];
                            object.salesline.sort(function (a, b) {
                                return a.linenum - b.linenum;
                            });
                            object.inventLocationId = object.salesline.length > 0 ? object.salesline[0].inventLocationId : '';
                            var wh = invlocations_1.find(function (loc) { return object.inventLocationId == loc.inventlocationid; });
                            object.wname = wh ? wh.wname : "";
                            object.wnamealias = wh ? wh.wnamealias : "";
                            // console.log(object);
                            return object;
                        });
                        // console.log("==================Before data================",data.length);
                        data.push.apply(data, newArr);
                        _b.label = 7;
                    case 7:
                        // let olddata = await this.oldDataUrl(params);
                        console.log("+++++++++++++++++++++++++Final Data+++++++++++++++++++++++++++++++++++++", data.length);
                        return [2 /*return*/, data];
                    case 8: throw { message: "Select custaccount ID" };
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_1 = _b.sent();
                        throw error_1;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalCustomerReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, title, file, completeData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderData = result;
                        return [4 /*yield*/, this.rawQuery.getAppLangName("HISTORICAL_CUSTOMER_REPORT")];
                    case 1:
                        title = _a.sent();
                        if (title) {
                            result.title = title;
                            console.table(title);
                        }
                        file = params.lang == "en" ? "historical-customer-en" : "historical-customer-ar";
                        try {
                            completeData = { data: renderData };
                            completeData.fromDate = params.fromDate; //App.convertUTCDateToLocalDate(new Date(params.fromDate),params.timeZoneOffset);
                            completeData.toDate = params.toDate; //App.convertUTCDateToLocalDate(new Date(params.toDate),params.timeZoneOffset);
                            completeData.printDate = params.printDate; //App.convertUTCDateToLocalDate(new Date(params.printDate),params.timeZoneOffset)
                            completeData.user = params.user ? params.user : "";
                            completeData.customername = result.length > 0 ? result[0].customername : "";
                            completeData.walkincustomer = result.length > 0 ? result[0].walkincustomer : "";
                            completeData.phone = result.length > 0 && completeData.walkincustomer ? result[0].phone : "";
                            completeData.custAccount = result.length > 0 ? result[0].custAccount : "";
                            return [2 /*return*/, App_1.App.HtmlRender(file, completeData)];
                        }
                        catch (error) {
                            throw error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoricalCustomerReport.prototype.getHistoricalData = function (params) {
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
                        query = "SELECT \n        st.salesid as \"salesId\",cust1.walkincustomer,salesline.lines as salesLine,\n                       st.intercompanyoriginalsalesid as \"interCompanyOriginalSalesId\",\n                       st.custaccount as \"custAccount\",\n                       st.invoiceaccount as \"invoiceAccount\",\n                       st.status as status,\n                       st.transkind as transkind,\n                       als.en as \"statusEn\",\n                       als.ar as \"statusAr\",\n                       alt.en as \"transkindEn\",\n                       alt.ar as \"transkindAr\",\n                       st.salesname as customername,\n                       st.mobileno as custmobilenumber,\n                       to_char(st.vatamount, 'FM999999999990.00')  as vatamount,\n                       to_char(st.netamount, 'FM999999999990.00')  as \"netAmount\",\n                       to_char(st.disc, 'FM999999999990.00')  as disc,\n                       to_char(st.amount , 'FM999999999990.00') as amount,\n                       to_char(st.shipping_amount, 'FM999999999990.00') as \"shippingAmount\",\n                       st.salesname as cname,\n                       st.salesname as \"cnamealias\",\n                       st.voucherdiscchecked as \"voucherdiscchecked\",\n                       st.vouchernum as \"vouchernum\",\n                       st.payment_type as \"paymentType\",\n                       c.phone as \"cphone\",\n                       to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n                       st.lastmodifieddate as lastmodifieddate,\n                       st.originalprinted as \"originalPrinted\",\n                       st.inventlocationid as \"inventLocationId\",\n                       w.namealias as wnamealias,\n                       w.name as wname,\n                       st.payment as \"paymentMode\",\n                       alu.en as \"paymentModeEn\",\n                       alu.ar as \"paymentModeAr\",\n                       st.iscash as iscash,\n                       st.createdby,\n                       st.description as notes,\n                       to_char(st.cash_amount, 'FM999999999990.00') as \"cashAmount\",\n                       to_char(st.card_amount, 'FM999999999990.00') as \"cardAmount\",\n                       st.shipping_amount as \"shippingAmount\",\n                       to_char(st.online_amount, 'FM999999999990.00') as \"onlineAmount\",\n                       to_char(st.design_service_redeem_amount, 'FM999999999990.00') as \"designServiceRedeemAmount\",\n                       to_char(st.redeemptsamt, 'FM999999999990.00') as \"redeemAmount\",\n                       coalesce(st.deliveryaddress, ' ') || (' ') || coalesce(st.citycode, ' ') || (' ') || coalesce(st.districtcode, ' ') || (' ') || coalesce(st.country_code, ' ') as deliveryaddress,\n                       concat(d.num,' - ', d.description) as salesman,\n                       to_char(st.deliverydate, 'DD-MM-YYYY') as \"deliveryDate\" \n       from salestable st \n       left join  custtable cust1 on  st.invoiceaccount=cust1.accountnum\n                       left join dimensions d on st.dimension6_ = d.num\n                       left join inventlocation w on w.inventlocationid = st.inventlocationid\n                       left join custtable c on c.accountnum = st.custaccount\n                       left join paymterm p on p.paymtermid = st.payment\n                       left join app_lang als on als.id = st.status\n                       left join app_lang alt on alt.id = st.transkind \n                       left join app_lang alu on alu.id = st.payment   \n       LEFT   JOIN LATERAL (\n          SELECT json_agg(\n          json_build_object(\n              'salesid', s3.salesid,\n              'nameAr', i2.itemname   ,\n              'nameEn',i2.namealias,\n              'salesid',s3.salesid,\n              'custaccount' ,s3.custaccount,\n              'itemid',s3.itemid,\n              'batchno',s3.batchno,\n              'configid',s3.configid,\n              'inventsizeid',s3.inventsizeid,\n              'saleslineqty',s3.salesqty,\n              'netAmount',to_char(s3.lineamount, 'FM999999999990.00'),\n              'lineAmount',to_char(s3.lineamount, 'FM999999999990.00'),\n              'batches',s3.batches,\n              'shippingDate',to_char(s3.lastmodifieddate, 'DD-MM-YYYY'),\n              'salesQty',to_char(s3.salesqty, 'FM999999999D'),\n              'salesprice',to_char(s3.salesprice, 'FM999999999990.00'),\n              'vatAmount',to_char((s3.vatamount/s3.salesqty)*s3.salesqty, 'FM999999999990.00'),\n              'colorantprice',to_char(s3.colorantprice, 'FM999999999990.00'),\n              'lineTotalDisc',to_char((s3.linetotaldisc/s3.salesqty)*s3.salesqty, 'FM999999999990.00'),\n              'vat',s3.vat,\n              'colorant',s3.colorantid,\n              'linenum',s3.linenum \n          )) AS lines\n          FROM   salesline s3 left join inventtable i2 on i2.itemid =s3.itemid \n          WHERE  s3.salesid = st.salesid \n       ) salesline ON true\n          where (st.custaccount ='" + params.custaccount + "' or st.invoiceaccount='" + params.custaccount + "')\n          and st.transkind in ('SALESORDER','RETURNORDER')\n          and st.status in ('PRINTED','POSTED')\n          and cust1.walkincustomer\n           and st.lastmodifieddate between '" + fromDate + "' ::timestamp and ('" + toDate + "'::timestamp + '1 day'::interval)\n       ORDER  BY st.lastmodifieddate ; \n       ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HistoricalCustomerReport.prototype.query_to_data = function (custaccount) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n                select \n                st.salesid as \"salesId\",\n                st.intercompanyoriginalsalesid as \"interCompanyOriginalSalesId\",\n                st.custaccount as \"custAccount\",\n                st.invoiceaccount as \"invoiceAccount\",\n                st.status as status,\n                st.transkind as transkind,\n                st.salesname as customername,\n                st.mobileno as custmobilenumber,\n                to_char(st.vatamount, 'FM999999999990.00')  as vatamount,\n                to_char(st.netamount, 'FM999999999990.00')  as \"netAmount\",\n                to_char(st.disc, 'FM999999999990.00')  as disc,\n                to_char(st.amount , 'FM999999999990.00') as amount,\n                to_char(st.shipping_amount, 'FM999999999990.00') as \"shippingAmount\",\n                st.salesname as cname,\n                st.salesname as \"cnamealias\",\n                st.voucherdiscchecked as \"voucherdiscchecked\",\n                st.vouchernum as \"vouchernum\",\n                st.payment_type as \"paymentType\",\n                c.phone as \"cphone\",\n                to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n                st.lastmodifieddate as lastmodifieddate,\n                st.originalprinted as \"originalPrinted\",\n                st.inventlocationid as \"inventLocationId\",\n                w.namealias as wnamealias,\n                w.name as wname,\n                st.payment as \"paymentMode\",\n                st.iscash as iscash,\n                st.createdby,\n                st.description as notes,\n                to_char(st.cash_amount, 'FM999999999990.00') as \"cashAmount\",\n                to_char(st.card_amount, 'FM999999999990.00') as \"cardAmount\",\n                st.shipping_amount as \"shippingAmount\",\n                to_char(st.online_amount, 'FM999999999990.00') as \"onlineAmount\",\n                to_char(st.design_service_redeem_amount, 'FM999999999990.00') as \"designServiceRedeemAmount\",\n                to_char(st.redeemptsamt, 'FM999999999990.00') as \"redeemAmount\",\n                coalesce(st.deliveryaddress, ' ') || (' ') || coalesce(st.citycode, ' ') || (' ') || coalesce(st.districtcode, ' ') || (' ') || coalesce(st.country_code, ' ') as deliveryaddress,\n                concat(d.num,' - ', d.description) as salesman,\n                to_char(st.deliverydate, 'DD-MM-YYYY') as \"deliveryDate\"\n                from salestable st \n                left join dimensions d on st.dimension6_ = d.num\n                left join inventlocation w on w.inventlocationid = st.inventlocationid\n                left join custtable c on c.accountnum = st.custaccount\n                left join paymterm p on p.paymtermid = st.payment\n                where custaccount='" + custaccount + "' and\n                and st.transkind in ('SALESORDER')\n                ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HistoricalCustomerReport.prototype.salesline_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n                  select\n                  distinct\n                  ln.salesid,\n                  ln.custaccount,\n                  ln.itemid,\n                  ln.batchno,\n                  ln.configid,\n                  ln.inventsizeid,\n                  ln.saleslineqty,\n                  to_char(ln.lineamount, 'FM999999999990.00') as \"netAmount\",\n                  to_char(ln.lastmodifieddate, 'DD-MM-YYYY') as \"shippingDate\",\n                  to_char(ln.salesqty, 'FM999999999D') as \"salesQty\",\n                  to_char(ln.salesprice, 'FM999999999990.00') as salesprice,\n                  to_char((ln.vatamount/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"vatAmount\",\n                  to_char((ln.linetotaldisc/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineTotalDisc\",\n                  to_char(ln.colorantprice, 'FM999999999990.00') as colorantprice,\n                  to_char((ln.lineamount / ln.saleslineqty)*ln.salesqty + (ln.colorantprice*ln.salesqty) - (ln.linetotaldisc / ln.saleslineqty)*ln.salesqty + (ln.vatamount / ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineAmount\",\n                  ln.prodnamear as \"prodNameAr\",\n                  ln.prodnameen as \"prodNameEn\",\n                  ln.colNameAr as \"colNameAr\",\n                  ln.colNameEn as \"colNameEn\",\n                  ln.sizeNameEn as \"sizeNameEn\",\n                  ln.sizeNameAr as \"sizeNameAr\",\n                  to_char((ln.lineamount/ln.saleslineqty)*ln.salesqty + (ln.colorantprice*ln.salesqty) - (ln.linetotaldisc/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineAmountBeforeVat\",\n                  ln.vat as vat,\n                  ln.colorantid as colorant,\n                  ln.linenum as linenum\n                  from\n                  (\n                    select distinct on (i.id, i.invoiceid, i.itemid, i.configid, i.inventsizeid, i.qty, i.batchno, i.sales_line_id)\n                    i.invoiceid as salesid,\n                    i.batchno,\n                    i.itemid,\n                    i.configid,\n                    i.inventsizeid,\n                    st.status as status,\n                    ABS(i.qty) as salesqty,\n                    b.itemname as prodnamear,\n                    b.namealias as prodnameen,\n                    coalesce(sl.salesprice, 0)  as salesprice,\n                    coalesce(sl.vatamount, 0)  as vatamount,\n                    coalesce(sl.linetotaldisc, 0) as linetotaldisc,\n                    coalesce(sl.colorantprice,0) as colorantprice,\n                    c.name as colNameAr,\n                    c.name as colNameEn,\n                    s.description as sizeNameEn,\n                    s.name as sizeNameAr,\n                    coalesce(sl.lineamount,0) as  lineamount,\n                    sl.colorantid as  colorantid,\n                    sl.salesqty as saleslineqty,\n                    sl.vat as vat,\n                    sl.linenum,\n                    sl.custaccount,\n                    sl.lastmodifieddate\n                    from inventtrans i\n                    left join salestable st on st.salesid = i.invoiceid\n                    left join salesline sl on sl.id = i.sales_line_id\n                    left join inventtable b on i.itemid=b.itemid\n                    left join inventsize s on s.itemid = i.itemid and i.inventsizeid = s.inventsizeid\n                    left join configtable c on c.configid = i.configid and c.itemid = i.itemid\n                    \n                where st.custaccount='" + id + "'\n                ) as ln order by linenum ASC\n                ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HistoricalCustomerReport.prototype.chunkArray = function (myArray, chunk_size) {
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
    HistoricalCustomerReport.prototype.oldDataUrl = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log(token);
                        url = "http://pos.al-jazeerapaints.com:200/API/HistoricalData?MobileNo=" + params.custaccount + "&fromDate=" + params.fromDate + "&toDate=" + params.toDate;
                        axios.defaults.headers["Token"] = token;
                        console.log(url);
                        return [4 /*yield*/, axios.get(url)];
                    case 2:
                        data = _a.sent();
                        // console.log(data.data);
                        // console.log("===========================================",data.data.lengt)
                        // this.otpStore.set(params.mobile, { token: data.data.otp_token, validate: false });
                        return [2 /*return*/, data.data];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        throw { message: Props_1.Props.DATA_NOT_FOUND };
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalCustomerReport.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        token = void 0;
                        url = Props_1.Props.REDEEM_URL + "?clientId=" + Props_1.Props.REDEEM_CLIENT_ID + "&clientSecret=" + Props_1.Props.REDEEM_CLIENT_SECRET;
                        console.log(url);
                        return [4 /*yield*/, axios.post(url)];
                    case 1:
                        data = _a.sent();
                        token = data.headers.token;
                        return [2 /*return*/, token];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HistoricalCustomerReport;
}());
exports.HistoricalCustomerReport = HistoricalCustomerReport;
