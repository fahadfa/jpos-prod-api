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
var PackingSlipReport = /** @class */ (function () {
    function PackingSlipReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
    }
    PackingSlipReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id, status_1, data_1, salesLine, list_1, j, chunkArray, newSalesline_1, sNo_1, quantity_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        id = params.salesId;
                        return [4 /*yield*/, this.query_to_data(id)];
                    case 1:
                        data_1 = _a.sent();
                        data_1 = data_1.length >= 1 ? data_1[0] : {};
                        if (!data_1.documentStatus) {
                            data_1.documentStatus = data_1.documentStatus ? data_1.documentStatus : false;
                            this.rawQuery.updateDocumentStatus(params.salesId.toUpperCase());
                        }
                        return [4 /*yield*/, this.salesline_query_to_data(id)];
                    case 2:
                        salesLine = _a.sent();
                        data_1.salesLine = salesLine;
                        list_1 = [];
                        j = 0;
                        return [4 /*yield*/, this.chunkArray(salesLine, 12)];
                    case 3:
                        chunkArray = _a.sent();
                        list_1 = list_1.concat(chunkArray);
                        newSalesline_1 = [];
                        sNo_1 = 1;
                        quantity_1 = 0;
                        list_1.map(function (val) {
                            val.colorantid = val.colorantid ? val.colorantid : "-";
                            var lines = {
                                amount: parseFloat(data_1.amount).toFixed(2),
                                quantity: 0,
                                vatamount: parseFloat(data_1.vatAmount).toFixed(2),
                                page: 1,
                                totalPages: list_1.length,
                                voucherdiscchecked: data_1.voucherdiscchecked,
                                salesId: data_1.salesId,
                                custAccount: data_1.custAccount,
                                status: data_1.status,
                                transkind: data_1.transkind,
                                customername: data_1.customername,
                                custmobilenumber: data_1.custmobilenumber,
                                cname: data_1.cname,
                                cnamealias: data_1.cnamealias,
                                cphone: data_1.cphone,
                                createddatetime: data_1.createddatetime,
                                lastmodifieddate: data_1.lastmodifieddate,
                                originalPrinted: data_1.originalPrinted,
                                inventLocationId: data_1.inventLocationId,
                                wnamealias: data_1.wnamealias,
                                wname: data_1.wname,
                                createdby: data_1.createdby,
                                deliveryaddress: data_1.deliveryaddress,
                                salesman: data_1.salesman,
                                notes: data_1.notes,
                                deliveryDate: data_1.deliveryDate,
                                isbreak: data_1.isbreak,
                                vatGrand: data_1.vatamount,
                                paymentType: data_1.paymentType,
                                paymentMode: data_1.paymentType == "ONLINE" ? "Online" : data_1.paymentMode,
                                paymentModeAr: data_1.paymentType == "ONLINE" ? "عبر الانترنت" : data_1.paymentMode,
                                lines: [],
                            };
                            data_1.isbreak = val.length > 5 ? true : false;
                            val.map(function (v) {
                                lines.quantity += parseInt(v.salesQty);
                                v.colorantid = v.colorantid;
                                v.sNo = sNo_1;
                                lines.lines.push(v);
                                sNo_1 += 1;
                            });
                            lines.page = list_1.indexOf(val) + 1;
                            lines.quantity = lines.quantity + quantity_1;
                            quantity_1 = lines.quantity;
                            newSalesline_1.push(lines);
                        });
                        data_1.salesLine = newSalesline_1;
                        data_1.quantity = 0;
                        data_1.salesLine.map(function (v) {
                            data_1.quantity += parseInt(v.quantity);
                        });
                        console.log("----------------------------");
                        // console.log(data);
                        console.log("----------------------------");
                        // console.log(salesLine);
                        return [2 /*return*/, data_1];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PackingSlipReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                renderData = result;
                file = params.lang == "en" ? "packing-slip-en" : "packing-slip-ar";
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
    PackingSlipReport.prototype.query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            st.salesid as \"salesId\",\n            st.custaccount as \"custAccount\",\n            st.status as status,\n            st.transkind as transkind,\n            als.en as \"statusEn\",\n            als.ar as \"statusAr\",\n            alt.en as \"transkindEn\",\n            alt.ar as \"transkindAr\",\n            to_char(st.vatamount, 'FM999999999990.00')  as vatamount,\n            to_char(st.netamount, 'FM999999999990.00')  as \"netAmount\",\n            to_char(st.disc, 'FM999999999990.00')  as disc,\n            to_char(st.amount , 'FM999999999990.00') as amount,\n            st.salesname as cname,\n            st.salesname as \"cnamealias\",\n            st.mobileno as \"cphone\",\n            to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n            st.originalprinted as \"originalPrinted\",\n            st.documentstatus as \"documentStatus\",\n            st.inventlocationid as \"inventLocationId\",\n            st.createdby as createdby,\n            st.description as notes,\n            w.namealias as wnamealias,\n            w.name as wname,\n            coalesce(st.deliveryaddress, ' ') || (' ') || coalesce(st.citycode, ' ') || (' ') || coalesce(st.districtcode, ' ') || (' ') || coalesce(st.country_code, ' ') as deliveryaddress,\n            concat(d.num,' - ', d.description) as salesman,\n            to_char(st.deliverydate, 'DD-MM-YYYY') as \"deliveryDate\"\n            from salestable st \n            left join inventlocation w on w.inventlocationid = st.inventlocationid\n            left join custtable c on c.accountnum = st.custaccount\n            left join dimensions d on d.num = st.dimension6_\n            left join app_lang als on als.id = st.status\n            left join app_lang alt on alt.id = st.transkind\n            where salesid='" + id + "'\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PackingSlipReport.prototype.salesline_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n            select\n            ROW_NUMBER()  OVER (ORDER BY  ln.salesid) As \"sNo\",\n            ln.salesid,\n            ln.itemid,\n            ln.batchno,\n            ln.colorantid,\n            ln.configid,\n            ln.inventsizeid,\n            to_char(ln.salesqty, 'FM999999999') as \"salesQty\",\n            to_char(ln.salesprice, 'FM999999999990.00') as salesprice,\n            to_char(ln.vatamount, 'FM999999999990.00') as \"vatAmount\",\n            to_char((ln.linetotaldisc/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineTotalDisc\",\n            to_char(ln.colorantprice, 'FM999999999990.00') as colorantprice,\n            to_char(((ln.salesprice + ln.colorantprice) \n            + (ln.vatamount) - ((ln.linetotaldisc/ln.saleslineqty)*ln.salesqty)) \n            , 'FM999999999990.00') as \"lineAmount\",\n            ln.prodnamear as \"prodNameAr\",\n            ln.prodnameen as \"prodNameEn\",\n            ln.colNameAr as \"colNameAr\",\n            ln.colNameEn as \"colNameEn\",\n            ln.sizeNameEn as \"sizeNameEn\",\n            ln.sizeNameAr as \"sizeNameAr\",\n            to_char((ln.lineamount - (ln.linetotaldisc/ln.saleslineqty)*ln.salesqty), 'FM999999999990.00') as \"lineAmountBeforeVat\",\n            ln.vat as vat\n            from\n            (\n              select\n                distinct on (i.invoiceid, i.itemid, i.configid, i.inventsizeid, i.batchno, i.qty, i.sales_line_id)\n                i.invoiceid as salesid,\n                i.batchno,\n                i.itemid,\n                i.configid,\n                i.inventsizeid,\n                st.status as status,\n                ABS(i.qty) as salesqty,\n                b.itemname as prodnamear,\n                b.namealias as prodnameen,\n                coalesce(sl.salesprice, 0)  as salesprice,\n                coalesce(sl.vatamount, 0)  as vatamount,\n                coalesce(sl.linetotaldisc, 0) as linetotaldisc,\n                coalesce(sl.colorantprice,0) as colorantprice,\n                c.name as colNameAr,\n                c.name as colNameEn,\n                s.description as sizeNameEn,\n                s.name as sizeNameAr,\n                sl.lineamount + (sl.colorantprice * sl.salesqty) as  lineamount,\n                (\n                  CASE\n                      WHEN sl.colorantid IS NULL THEN 'N/A'\n                      ELSE sl.colorantid\n                      END\n                ) as colorantid,\n                sl.salesqty as saleslineqty,\n                sl.vat as vat,\n                sl.linenum\n                from inventtrans i\n                left join salestable st on st.salesid = i.invoiceid\n                left join salesline sl on sl.id = i.sales_line_id\n                left join inventtable b on i.itemid=b.itemid\n                left join inventsize s on s.itemid = i.itemid and i.inventsizeid = s.inventsizeid\n                left join configtable c on c.configid = i.configid and c.itemid = i.itemid\n            where invoiceid='" + id + "'\n            ) as ln\n            ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PackingSlipReport.prototype.chunkArray = function (myArray, chunk_size) {
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
    return PackingSlipReport;
}());
exports.PackingSlipReport = PackingSlipReport;
