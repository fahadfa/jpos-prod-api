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
var itemSalesByCustomerReport = /** @class */ (function () {
    function itemSalesByCustomerReport() {
        this.db = typeorm_1.getManager();
    }
    itemSalesByCustomerReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, totalQuantity_1, totalLineAmount_1, colorantPrice_1, price_1, vatAmount_1, totalDisc_1, queryCustomer, userData, renderData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        totalQuantity_1 = 0;
                        totalLineAmount_1 = 0;
                        colorantPrice_1 = 0;
                        price_1 = 0;
                        vatAmount_1 = 0;
                        totalDisc_1 = 0;
                        data.forEach(function (v) {
                            totalQuantity_1 += v.quantity ? parseInt(v.quantity) : 0;
                            totalLineAmount_1 += v.lineAmount ? parseFloat(v.lineAmount) : 0;
                            colorantPrice_1 += v.colorantPrice ? parseFloat(v.colorantPrice) : 0;
                            price_1 += v.price ? parseFloat(v.price) : 0;
                            vatAmount_1 += v.vatAmount ? parseFloat(v.vatAmount) : 0;
                            totalDisc_1 += v.totalDisc ? parseFloat(v.totalDisc) : 0;
                        });
                        queryCustomer = " select namealias as \"nameEn\", name as \"nameAr\" from custtable where accountnum =  '" + params.accountnum + "'";
                        return [4 /*yield*/, this.db.query(queryCustomer)];
                    case 2:
                        userData = _a.sent();
                        userData = userData.length > 0 ? userData[0] : {};
                        console.log(userData);
                        renderData = {
                            printDate: new Date().toLocaleString(),
                            fromDate: params.fromDate,
                            toDate: params.toDate,
                            status: params.status,
                            transType: params.transType,
                            color: params.color,
                            product: params.product,
                            customerName: userData.nameEn ? userData.nameEn : "-",
                            customerNameAr: userData.nameAr > 0 ? userData.nameAr : "-",
                            totalQuantity: totalQuantity_1,
                            totalLineAmount: totalLineAmount_1.toFixed(2),
                            colorantPrice: colorantPrice_1.toFixed(2),
                            vatAmount: vatAmount_1.toFixed(2),
                            totalDisc: totalDisc_1.toFixed(2),
                            user: params.user,
                            price: price_1.toFixed(2),
                        };
                        renderData.data = data;
                        return [2 /*return*/, renderData];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    itemSalesByCustomerReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                result.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                // console.log(result.salesLine[0].product.nameEnglish);
                console.log(result);
                if (params.type == "excel") {
                    file = params.lang == "en" ? "itemsalesbycustomer-excel" : "itemsalesbycustomer-excel-ar";
                }
                else {
                    file = params.lang == "en" ? "itemsalesbycustomer-report" : "itemsalesbycustomer-report-ar";
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
    itemSalesByCustomerReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            distinct\n                i.itemid, \n                i.name, \n                i.nameAlias as \"nameAlias\", \n                to_char(sum(i.colorantprice), 'FM999,999,999,999D') as \"colorantPrice\",\n                to_char(sum(i.quantity), 'FM999,999,999,999D') as \"quantity\", \n                to_char(sum(i.price), 'FM999999999990.00') as price, \n                to_char(sum(i.vatAmount), 'FM999999999990.00') as \"vatAmount\",\n                to_char(sum(i.lineAmount), 'FM999999999990.00') as \"lineAmount\",\n                to_char(sum(i.totalDisc), 'FM999999999990.00') as \"totalDisc\",\n                i.wareHouseNameAr as \"wareHouseNameAr\", i.wareHouseNameEn as \"wareHouseNameEn\",\n                i.sizeNameEn as \"sizeNameEn\", \n                i.sizeNameAr as \"sizeNameAr\",\n                i.nameEn as \"nameEn\", \n                i.nameAr as \"nameAr\", \n                i.configId as \"configId\", \n                i.inventsizeid as \"inventsizeid\",\n                i.batchno as batchno\n            from( select \n                distinct on (sl.id)\n                    s.inventlocationid as inventlocationid,\n                    s.custaccount as custaccount,\n                    s.salesname as customername,\n                    to_char(sl.createddatetime, 'DD-MM-YYYY') as createdDateTime,\n                    to_char(sl.lastmodifieddate, 'DD-MM-YYYY') as lastModifiedDate,\n                    sl.salesqty as quantity,\n                    sl.salesprice as price,\n                    sl.vatamount as vatAmount,\n                    sl.linetotaldisc as totalDisc,\n                    sl.itemid as itemid,\n                    sl.colorantprice as colorantprice,\n                    (sl.lineamount - sl.linetotaldisc + (sl.colorantprice * sl.salesqty) + sl.vatamount ) as lineAmount,\n                    c.name as name,\n                    c.namealias as nameAlias,\n                    w.name as wareHouseNameAr,\n                    w.namealias as wareHouseNameEn,\n                    c.paymmode as paymentMode,\n                    sz.description as sizeNameEn,\n                    sz.name as sizeNameAr,\n                    sz.inventsizeid as inventsizeid,\n                    i.batchno,\n                    bs.namealias as nameEn,\n                    bs.itemname as nameAr,\n                    col.configid as configid\n                from salesline sl\n                inner join salestable s on s.salesid = sl.salesid\n                left join inventlocation w on w.inventlocationid=s.inventlocationid\n                left join custtable c on c.accountnum=s.custaccount\n                left join inventtrans i on i.invoiceid=s.salesid\n                left join configtable col on sl.configid = col.configid and sl.itemid = col.itemid\n                left join inventsize sz on  sz.itemid = sl.itemid and sz.inventsizeid = sl.inventsizeid\n                left join inventtable bs on bs.itemid = sl.itemid\n                where s.transkind = 'SALESORDER' and s.status in ('PAID', 'POSTED', 'PRINTED')\n                and sl.lastmodifieddate >= '" + params.fromDate + "' ::date\n                AND  sl.lastmodifieddate < ('" + params.toDate + "' ::date + '1 day'::interval) \n            ";
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
                        query += " and i.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " and i.inventlocationid='" + params.inventlocationid + "' ";
                        _a.label = 3;
                    case 3:
                        if (params.configId) {
                            query += " and  sl.configid = '" + params.configId + "' ";
                        }
                        if (params.itemId) {
                            query += " and  sl.itemid = '" + params.itemId + "' ";
                        }
                        if (params.transType && params.transType != "ALL") {
                            query += " and  st.transkind = '" + params.transType + "' ";
                        }
                        if (params.batchNo) {
                            query += " and  i.batchno = '" + params.batchNo + "' ";
                        }
                        if (params.accountnum) {
                            query += " and  ( s.mobileno ='" + params.accountnum + "' or s.invoiceaccount='" + params.accountnum + "' or s.custaccount='" + params.accountnum + "') ";
                        }
                        if (params.inventsizeid) {
                            query += " and  i.inventsizeid = '" + params.inventsizeid + "' ";
                        }
                        query += ") as i \n            group by i.name, i.nameAlias, i.wareHouseNameAr , \n           i.wareHouseNameEn , i.sizeNameEn, i.sizeNameAr ,\n           i.nameEn , i.nameAr , i.configId, i.itemid, i.inventsizeid, i.batchno order by i.itemid ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return itemSalesByCustomerReport;
}());
exports.itemSalesByCustomerReport = itemSalesByCustomerReport;
