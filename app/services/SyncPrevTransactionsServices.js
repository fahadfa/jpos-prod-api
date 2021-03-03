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
var SyncServiceHelper_1 = require("../../sync/SyncServiceHelper");
var Log_1 = require("../../utils/Log");
var App_1 = require("../../utils/App");
var uuid = require("uuid");
var SyncPrevTransactionsService = /** @class */ (function () {
    function SyncPrevTransactionsService() {
        var _this = this;
        this.run = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                }
                catch (err) {
                    Log_1.log.error(err);
                    this.pool = null;
                }
                return [2 /*return*/];
            });
        }); };
        // this.run();
        this.fs = require("fs");
        this.jsonString = this.fs.readFileSync(__dirname + "/data.json", "utf-8");
        this.dateObj = JSON.parse(this.jsonString);
        // this.fs.unlinkSync(`${__dirname}/data.json`);
        // this.mssqlDbOptions = mssqlDbOptions;
        this.localDbConfig = SyncServiceHelper_1.SyncServiceHelper.LocalDBOptions();
        // this.localDbConfig = LocalDBOptions();
    }
    SyncPrevTransactionsService.prototype.mssqlTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cond, mssqlClient, mssqlString, connectionString, data, rows, query, sCond, slCond, tCond, optDate, current_date, transactionclosed, _i, data_1, item, _a, item_1, salesdata, lineData, err_1, _b, data_2, item, err_2, err_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        cond = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 24, 25, 26]);
                        mssqlClient = require("mssql");
                        mssqlString = "mssql://" + this.dateObj.username + ":" + this.dateObj.password + "@" + this.dateObj.host + "/" + this.dateObj.database;
                        connectionString = mssqlString;
                        this.pool = new mssqlClient.ConnectionPool(connectionString);
                        return [4 /*yield*/, this.pool.connect()];
                    case 2:
                        _c.sent();
                        data = [];
                        rows = void 0;
                        query = void 0;
                        sCond = void 0;
                        slCond = void 0;
                        tCond = void 0;
                        optDate = this.dateObj.date;
                        current_date = new Date().toISOString().slice(0, 10);
                        transactionclosed = false;
                        // log.info(optDate);
                        // log.info(current_date);
                        if (optDate >= current_date) {
                            sCond = " CREATEDDATETIME BETWEEN dateadd(day, -120, '" + this.dateObj.date + "') AND  '" + this.dateObj.date + "' ORDER BY RECID ASC ";
                            slCond = " CREATEDDATETIME BETWEEN dateadd(day, -120, '" + this.dateObj.date + "') AND  '" + this.dateObj.date + "') ORDER BY RECID ASC ";
                            tCond = "  DATEPHYSICAL BETWEEN dateadd(day, -120, '" + this.dateObj.date + "') AND  '" + this.dateObj.date + "' ORDER BY RECID ASC ";
                        }
                        else {
                            sCond = " CREATEDDATETIME BETWEEN '" + this.dateObj.date + "' AND  getdate() ORDER BY RECID ASC ";
                            tCond = " DATEPHYSICAL BETWEEN '" + this.dateObj.date + "' AND  getdate() ORDER BY RECID ASC ";
                            slCond = " CREATEDDATETIME BETWEEN  '" + this.dateObj.date + "' AND  getdate()) ORDER BY RECID ASC ";
                            transactionclosed = true;
                        }
                        Log_1.log.info(tCond);
                        Log_1.log.info(sCond);
                        query = salesTableQuery + sCond;
                        Log_1.log.info(query);
                        return [4 /*yield*/, this.pool.request().query(query)];
                    case 3:
                        rows = _c.sent();
                        return [4 /*yield*/, this.chunkArray(rows.recordset, 5000)];
                    case 4:
                        data = _c.sent();
                        _i = 0, data_1 = data;
                        _c.label = 5;
                    case 5:
                        if (!(_i < data_1.length)) return [3 /*break*/, 15];
                        item = data_1[_i];
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 13, , 14]);
                        return [4 /*yield*/, this.sync_salesTableData(item)];
                    case 7:
                        _c.sent();
                        _a = 0, item_1 = item;
                        _c.label = 8;
                    case 8:
                        if (!(_a < item_1.length)) return [3 /*break*/, 12];
                        salesdata = item_1[_a];
                        return [4 /*yield*/, this.pool
                                .request()
                                .query("SELECT * FROM SALESLINE WHERE SALESID = '" + salesdata.salesid + "'")];
                    case 9:
                        lineData = _c.sent();
                        return [4 /*yield*/, this.sync_salesLine(lineData.recordset, salesdata.createddatetime)];
                    case 10:
                        _c.sent();
                        _c.label = 11;
                    case 11:
                        _a++;
                        return [3 /*break*/, 8];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        err_1 = _c.sent();
                        Log_1.log.error(err_1);
                        return [3 /*break*/, 14];
                    case 14:
                        _i++;
                        return [3 /*break*/, 5];
                    case 15:
                        query = inventTransQuery + tCond;
                        return [4 /*yield*/, this.pool.request().query(query)];
                    case 16:
                        rows = _c.sent();
                        return [4 /*yield*/, this.chunkArray(rows.recordset, 1)];
                    case 17:
                        data = _c.sent();
                        _b = 0, data_2 = data;
                        _c.label = 18;
                    case 18:
                        if (!(_b < data_2.length)) return [3 /*break*/, 23];
                        item = data_2[_b];
                        _c.label = 19;
                    case 19:
                        _c.trys.push([19, 21, , 22]);
                        return [4 /*yield*/, this.syncInventTransData(item, [], transactionclosed)];
                    case 20:
                        _c.sent();
                        return [3 /*break*/, 22];
                    case 21:
                        err_2 = _c.sent();
                        Log_1.log.error(err_2);
                        return [3 /*break*/, 22];
                    case 22:
                        _b++;
                        return [3 /*break*/, 18];
                    case 23:
                        Log_1.log.info("%%%%%%%%%%%%%%%%%%%%%%COMPLETED%%%%%%%%%%%%%%%%%%%");
                        return [3 /*break*/, 26];
                    case 24:
                        err_3 = _c.sent();
                        Log_1.log.error(err_3);
                        cond = false;
                        return [3 /*break*/, 26];
                    case 25:
                        this.pool.close();
                        this.fs.unlinkSync(__dirname + "/data.json");
                        return [7 /*endfinally*/];
                    case 26: return [2 /*return*/];
                }
            });
        });
    };
    SyncPrevTransactionsService.prototype.sync_salesTableData = function (salesTableData, queryData) {
        if (queryData === void 0) { queryData = []; }
        return __awaiter(this, void 0, void 0, function () {
            var salesLines, _i, salesTableData_1, item, query, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        salesLines = [];
                        for (_i = 0, salesTableData_1 = salesTableData; _i < salesTableData_1.length; _i++) {
                            item = salesTableData_1[_i];
                            item.createdby = "SYSTEM";
                            item.syncstatus = 4;
                            item.inventlocationid = this.dateObj.inventlocationid;
                            item.invoicecreatedby = "SYSTEM";
                            item.lastmodifiedby = "SYSTEM";
                            item.lastmodifieddate = new Date(App_1.App.DateNow());
                            item.originalprinted = true;
                            item.iscash = item.payment == "CASH" ? true : false;
                            item.deliverytype = "self";
                            item.documentstatus = item.documentstatus == 0 ? false : true;
                            item.netamount = item.netamount ? item.netamount : 0;
                            item.custaccount = item.custaccount ? item.custaccount.trim() : item.custaccount;
                            query = "INSERT INTO public.salestable (salesid,salesname, reservation, custaccount, invoiceaccount, deliverydate,\n          deliveryaddress, documentstatus, currencycode, dataareaid, recversion,\n          recid, languageid, payment, custgroup, pricegroupid, shippingdaterequested,\n          deliverystreet, salestype, salesstatus, numbersequencegroup, cashdisc,\n           intercompanyoriginalsalesid, salesgroup, shippingdateconfirmed, deadline, fixedduedate, returndeadline, createddatetime, createdby, syncstatus, amount, disc, netamount,\n           citycode, districtcode, latitude, vehiclecode, vouchernum, painter, ajpenddisc, taxgroup, sumtax, inventlocationid, vatamount, invoicedate, invoicecreatedby, multilinediscountgroupid,\n           lastmodifiedby, lastmodifieddate, originalprinted, iscash,  transkind, status, redeempts, redeemptsamt, deliverytype, customerref, loyalty_status,loyaltystatus, country_code,\n            cash_amount, card_amount,\n           design_service_redeem_amount, online_amount, shipping_amount, payment_type, forcustomer\n           ) VALUES(\n           '" + item.salesid + "','" + item.salesname + "'," + item.reservation + ",'" + item.custaccount + "','" + item.invoiceaccount + "','" + item.deliverydate + "', '" + item.deliveryaddress + "'," + item.documentstatus + ",'" + item.currencycode + "','" + item.dataareaid + "',\n          " + item.recversion + "," + item.recid + ", '" + item.languageid + "', '" + item.payment + "', '" + item.custgroup + "','" + item.pricegroupid + "', '" + item.shippingdaterequested + "', '" + item.deliverystreet + "',\n          " + item.salestype + "," + item.salesstatus + ",'" + item.numbersequencegroup + "','" + item.cashdisc + "','" + (item.salestype == 4 ? item.customerref : item.intercompanyoriginalsalesid) + "','" + item.salesgroup + "','" + item.shippingdateconfirmed + "',\n          '" + item.deadline + "','" + item.fixedduedate + "','" + item.returndeadline + "',\n          '" + item.createddatetime + "','" + item.createdby + "'," + item.syncstatus + "," + item.amount + "," + item.disc + "," + item.netamount + ",'" + item.citycode + "','" + item.districtcode + "','" + item.latitude + "','" + item.vehiclecode + "','" + item.vouchernum + "',\n          '" + item.painter + "','" + item.ajpenddisc + "','" + item.taxgroup + "'," + item.sumtax + ",'" + item.inventlocationid + "',\n           " + item.vatamount + ",'" + item.createddatetime + "','" + item.invoicecreatedby + "','" + item.multilinediscountgroupid + "','" + item.lastmodifiedby + "',\n           '" + item.createddatetime + "'," + item.originalprinted + ",'" + item.iscash + "','" + item.transkind + "', '" + item.status + "', " + item.redeempts + "," + item.redeemptsamt + ",'" + item.deliverytype + "', '" + item.customerref + "', 4,4, 966, " + item.netamount + ", 0,0,0,0,'OFFLINE', 0);";
                            Log_1.log.info(query);
                            queryData.push(query);
                        }
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(this.localDbConfig, queryData, Log_1.log)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        Log_1.log.error(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncPrevTransactionsService.prototype.sync_salesLine = function (salesLineData, date, queryData) {
        if (queryData === void 0) { queryData = []; }
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, _i, salesLineData_1, line, _a, salesLineData_2, line, query, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _loop_1 = function (line) {
                            var colorantdata, MultiLineDiscRangesQuery, MultiLineDiscRanges, InstantDiscRangesQuery, InstantDiscRanges, filterItems;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (line.INVENTTRANSID && line.INVENTTRANSID != "") {
                                            colorantdata = salesLineData.find(function (v) { return v.ITEMID == "HSN-00001" && v.CONFIGID == line.INVENTTRANSID && v.SALESQTY == line.SALESQTY; });
                                            if (colorantdata) {
                                                line.COLORANTPRICE = colorantdata.SALESPRICE;
                                                line.LineSalesTax += colorantdata.LineSalesTax;
                                            }
                                            else {
                                                line.COLORANTPRICE = 0;
                                            }
                                        }
                                        else {
                                            line.COLORANTPRICE = 0;
                                            line.INVENTTRANSID = "";
                                        }
                                        line.link_id = line.RECID;
                                        line.applied_discounts = [];
                                        line.is_parent = false;
                                        if (line.InteriorExteriorAmount && line.InteriorExteriorAmount > 0) {
                                            line.applied_discounts.push({
                                                discountType: "INTERIOR_AND_EXTERIOR",
                                                percentage: parseFloat(line.InteriorExteriorPer),
                                                discountAmount: parseFloat(line.InteriorExteriorAmount),
                                            });
                                        }
                                        if (line.VoucherDisc && line.VoucherDisc > 0) {
                                            line.applied_discounts.push({
                                                discountType: "VOUCHER_DISCOUNT",
                                                percentage: (parseFloat(line.VoucherDisc) * 100) / parseFloat(line.LINEAMOUNT),
                                                discountAmount: parseFloat(line.VoucherDisc),
                                            });
                                        }
                                        if (line.CUSTOMDISCAMT && line.CUSTOMDISCAMT > 0) {
                                            line.applied_discounts.push({
                                                discountType: "TOTAL_DISCOUNT",
                                                percentage: (parseFloat(line.CUSTOMDISCAMT) * 100) / parseFloat(line.LINEAMOUNT),
                                                discountAmount: parseFloat(line.CUSTOMDISCAMT),
                                                cond: [],
                                            });
                                        }
                                        if (line.LINEDISCAMT && line.LINEDISCAMT > 0) {
                                            line.applied_discounts.push({
                                                discountType: "LINE_DISCOUNT",
                                                percentage: (parseFloat(line.LINEDISCAMT) * 100) / parseFloat(line.LINEAMOUNT),
                                                discountAmount: parseFloat(line.LINEDISCAMT),
                                                cond: [],
                                            });
                                        }
                                        if (!(line.MultiLnDisc && line.MultiLnDisc > 0)) return [3 /*break*/, 2];
                                        MultiLineDiscRangesQuery = "SELECT itemrelation, ACCOUNTRELATION,QUANTITYAMOUNT,\n                                          CURRENCY,PERCENT1 FROM \n                                          PRICEDISCTABLE WHERE MODULE = 1 AND \n                                          ITEMCODE = 1 AND ACCOUNTCODE = 1 AND \n                                          ACCOUNTRELATION = '" + line.CUSTACCOUNT + "' AND LOWER(DATAAREAID) = LOWER('" + line.DATAAREAID + "') AND CURRENCY='" + line.CURRENCYCODE + "'";
                                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(this_1.localDbConfig, MultiLineDiscRangesQuery, Log_1.log)];
                                    case 1:
                                        MultiLineDiscRanges = _a.sent();
                                        line.applied_discounts.push({
                                            discountType: "MULTI_LINE_DISCOUNT",
                                            percentage: parseFloat(line.MultiLnPercent),
                                            discountAmount: parseFloat(line.MultiLnDisc),
                                            cond: MultiLineDiscRanges.rows,
                                        });
                                        _a.label = 2;
                                    case 2:
                                        if (!(line.InstantDisc && line.InstantDisc > 0)) return [3 /*break*/, 4];
                                        InstantDiscRangesQuery = "select \n          * from custtotaldiscount where dataareaid ='ajp' and custaccount = '" + line.CUSTACCOUNT + "' order by minamount";
                                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(this_1.localDbConfig, InstantDiscRangesQuery, Log_1.log)];
                                    case 3:
                                        InstantDiscRanges = _a.sent();
                                        line.applied_discounts.push({
                                            discountType: "INSTANT_DISCOUNT",
                                            percentage: (parseFloat(line.InstantDisc) * 100) / parseFloat(line.LINEAMOUNT),
                                            discountAmount: parseFloat(line.InstantDisc),
                                            cond: InstantDiscRanges.rows,
                                        });
                                        _a.label = 4;
                                    case 4:
                                        if (line.PromotionDisc && line.PromotionDisc > 0) {
                                            filterItems = salesLineData.filter(function (value) { return value.ITEMID == line.ITEMID && value.INVENTSIZEID == line.INVENTSIZEID; });
                                            filterItems.map(function (v) {
                                                var index = salesLineData.indexOf(v);
                                                salesLineData[index].isitemfree = v.SupplMultipleQty > 0 ? true : false;
                                                salesLineData[index].link_id = line.RECID;
                                                line.multipleQty = v.SupplMultipleQty > 0 ? v.SupplMultipleQty : line.multipleQty;
                                                line.freeQty = v.SupplFreeQty > 0 ? v.SupplFreeQty : line.freeQty;
                                            });
                                            line.is_parent = true;
                                            line.applied_discounts.push({
                                                discountType: "PROMOTIONAL_DISCOUNT",
                                                discountAmount: parseFloat(line.PromotionDisc),
                                                cond: [
                                                    {
                                                        multipleQty: line.multipleQty,
                                                        freeQty: line.freeQty,
                                                    },
                                                ],
                                            });
                                        }
                                        if (line.PromotionDiscEqual && line.PromotionDiscEqual > 0) {
                                            line.link_id = line.PromotionDiscEqualRecId ? line.PromotionDiscEqualRecId.split(",")[0] : line.RECID;
                                            line.isitemfree = line.PromotionDiscEqualRecId ? true : false;
                                            line.is_parent = line.isitemfree ? false : true;
                                            line.applied_discounts.push({
                                                discountType: "BUY_ONE_GET_ONE_DISCOUNT",
                                                discountAmount: parseFloat(line.PromotionDiscEqual),
                                                cond: [
                                                    {
                                                        multipleQty: 1,
                                                        freeQty: 1,
                                                    },
                                                ],
                                            });
                                        }
                                        line.applied_discounts = JSON.stringify(line.applied_discounts);
                                        line.batches = JSON.stringify([
                                            {
                                                batchNo: line.BATCHNO,
                                                quantity: line.SALESQTY,
                                            },
                                        ]);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, salesLineData_1 = salesLineData;
                        _b.label = 1;
                    case 1:
                        if (!(_i < salesLineData_1.length)) return [3 /*break*/, 4];
                        line = salesLineData_1[_i];
                        return [5 /*yield**/, _loop_1(line)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        for (_a = 0, salesLineData_2 = salesLineData; _a < salesLineData_2.length; _a++) {
                            line = salesLineData_2[_a];
                            query = "INSERT INTO public.salesline\n        (id, salesid, linenum, itemid, \"name\", salesprice, currencycode, salesqty, lineamount, salesunit, priceunit, qtyordered, remainsalesphysical, remainsalesfinancial,\n        salestype, dataareaid, custgroup, custaccount, inventsizeid, configid, numbersequencegroupid, inventlocationid, salesdelivernow, salesstatus, \"location\", batchno, instantdisc, voucherdisc,\n          redeemdisc, promotiondisc, linetotaldisc, linesalestax, netamttax, linesalestaxpercent, taxgroup, taxitemgroup, linediscamt, customdiscamt, supplmultipleqty, supplfreeqty, multilndisc, multilnpercent, enddisc,\n          createdby, createddatetime, lastmodifiedby, lastmodifieddate, \n            vatamount, vat, voucherdiscamt, sabic_customer_discount, is_item_free, link_id, batches, applied_discounts, is_parent, status, colorantid, colorantprice)\n        VALUES('" + (uuid() + App_1.App.UniqueNumber()) + "', '" + line.SALESID + "', " + line.LINENUM + ", '" + line.ITEMID + "', '" + line.NAME + "', " + line.SALESPRICE + ", '" + line.CURRENCYCODE + "', " + line.SALESQTY + ", " + line.LINEAMOUNT + ", '" + line.SALESUNIT + "', " + line.PRICEUNIT + ", " + line.QTYORDERED + ", \n        " + line.REMAINSALESPHYSICAL + ", " + line.REMAINSALESFINANCIAL + ",  " + line.SALESTYPE + ", '" + (line.DATAAREAID ? line.DATAAREAID.toLowerCase() : null) + "', '" + line.CUSTGROUP + "', '" + line.CUSTACCOUNT + "', '" + line.INVENTSIZEID + "', '" + line.CONFIGID + "',\n         '" + line.NUMBERSEQUENCEGROUPID + "', '" + line.INVENTLOCATIONID + "', " + line.SALESDELIVERNOW + ", " + line.SALESSTATUS + ", '" + line.LOCATION + "', '" + line.BATCHNO + "', " + (line.InstantDisc ? line.InstantDisc : 0) + ", " + (line.VoucherDisc ? line.VoucherDisc : 0) + ", " + (line.RedeemDisc ? line.RedeemDisc : 0) + ", " + (line.PromotionDisc ? line.PromotionDisc : 0) + ", \n         " + (line.LineTotalDisc ? line.LineTotalDisc : 0) + ", " + (line.LineSalesTax ? line.LineSalesTax : 0) + ", " + (line.NetAmtTax ? line.NetAmtTax : 0) + ", " + (line.LineSalesTaxPercent ? line.LineSalesTaxPercent : 0) + ", '" + line.TAXGROUP + "', '" + line.TAXITEMGROUP + "', " + (line.LINEDISCAMT ? line.LINEDISCAMT : 0) + ", " + (line.CUSTOMDISCAMT ? line.CUSTOMDISCAMT : 0) + ", " + (line.SupplMultipleQty ? line.SupplMultipleQty : 0) + ", " + (line.SupplFreeQty ? line.SupplFreeQty : 0) + ",\n         " + (line.MulLnDisc ? line.MultiLineDisc : 0) + ", " + (line.MultiPercent ? line.MultiPercent : 0) + ", " + (line.CUSTOMDISCAMT ? line.CUSTOMDISCAMT : 0) + ", 'SYSTEM', '" + date + "', 'SYSTEM', '" + date + "',\n          " + (line.LineSalesTax ? line.LineSalesTax : 0) + ", " + (line.LineSalesTaxPercent ? line.LineSalesTaxPercent : 0) + ",\n           " + (line.VoucherDisc ? line.VoucherDisc : 0) + ", " + (line.InteriorExteriorAmount ? line.InteriorExteriorAmount : 0) + ", " + (line.isitemfree ? line.isitemfree : false) + ", '" + line.link_id + "', '" + line.batches + "', '" + line.applied_discounts + "', " + line.is_parent + ", 'POSTED', '" + line.INVENTTRANSID + "', '" + line.COLORANTPRICE + "')\n        ";
                            Log_1.log.info(query);
                            queryData.push(query);
                        }
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(this.localDbConfig, queryData, Log_1.log)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_5 = _b.sent();
                        Log_1.log.error(err_5);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SyncPrevTransactionsService.prototype.syncInventTransData = function (inventTransData, queryData, transactionclosed) {
        if (queryData === void 0) { queryData = []; }
        return __awaiter(this, void 0, void 0, function () {
            var inventoryOnHandQuery, text, _i, inventTransData_1, trans, salesOrderData, salesOrderData, saleslinequery, salesLineData, query, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        inventoryOnHandQuery = [];
                        text = void 0;
                        _i = 0, inventTransData_1 = inventTransData;
                        _a.label = 1;
                    case 1:
                        if (!(_i < inventTransData_1.length)) return [3 /*break*/, 8];
                        trans = inventTransData_1[_i];
                        if (!(trans.TRANSTYPE == 4)) return [3 /*break*/, 3];
                        text = "select salesid from salestable where intercompanyoriginalsalesid = '" + trans.TRANSREFID + "' limit 1";
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(this.localDbConfig, text, Log_1.log)];
                    case 2:
                        salesOrderData = _a.sent();
                        trans.INVOICEID = salesOrderData.rows[0] ? salesOrderData.rows[0].salesid : trans.TRANSREFID;
                        return [3 /*break*/, 5];
                    case 3:
                        text = "select intercompanyoriginalsalesid from salestable where salesid = '" + trans.TRANSREFID + "' limit 1";
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(this.localDbConfig, text, Log_1.log)];
                    case 4:
                        salesOrderData = _a.sent();
                        trans.INVOICEID = trans.TRANSREFID;
                        trans.TRANSREFID = salesOrderData.rows[0]
                            ? salesOrderData.rows[0].intercompanyoriginalsalesid
                            : trans.TRANSREFID;
                        trans.TRANSREFID = trans.TRANSREFID == "Nothing" ? trans.INVOICEID : trans.TRANSREFID;
                        _a.label = 5;
                    case 5:
                        saleslinequery = "select id, colorantid   from salesline where salesid = '" + trans.INVOICEID + "' AND itemid = '" + trans.ITEMID + "' AND configid = '" + trans.ConfigId + "' AND inventsizeid = '" + trans.InventSizeId + "' AND batchno = '" + trans.BATCHNO + "' AND salesqty = ABS(" + trans.QTY + ") limit 1";
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.ExecuteQuery(this.localDbConfig, saleslinequery, Log_1.log)];
                    case 6:
                        salesLineData = _a.sent();
                        // log.info(salesLineData);
                        trans.saleslineid = salesLineData.rows.length > 0 ? salesLineData.rows[0].id : "";
                        trans.reservationid = salesLineData.rows.length > 0 ? salesLineData.rows[0].colorantid : "";
                        Log_1.log.info(salesLineData.rows);
                        query = "INSERT INTO public.inventtrans\n        (id, itemid, qty, datephysical, transtype, transrefid, invoiceid, dataareaid, recversion, recid, inventsizeid, configid, batchno, inventlocationid, transactionclosed, reserve_status, sales_line_id, dateinvent, reservationid)\n        VALUES('" + (uuid() + App_1.App.UniqueNumber()) + "', '" + trans.ITEMID + "', " + trans.QTY + ", '" + trans.DATEPHYSICAL + "'," + trans.TRANSTYPE + ", '" + trans.TRANSREFID + "', '" + trans.INVOICEID + "', '" + trans.DATAAREAID + "', " + trans.RECVERSION + ", " + trans.RECID + ", '" + trans.InventSizeId + "',\n         '" + trans.ConfigId + "', '" + trans.BATCHNO + "', '" + this.dateObj.inventlocationid + "', " + transactionclosed + ", 'OLD_POS_DATA', '" + trans.saleslineid + "', now(), '" + trans.reservationid + "');\n        ";
                        Log_1.log.info(query);
                        // if (transactionclosed == true && trans.ITEMID != "HSN-00001") {
                        //   text = `select * from inventory_onhand where itemid = '${trans.ITEMID}' AND configid = '${trans.ConfigId}' and inventsizeid = '${trans.InventSizeId}' and batchno = '${trans.BATCHNO}' and inventlocationid = '${this.dateObj.inventlocationid}'`;
                        //   let onhanddata = await SyncServiceHelper.ExecuteQuery(this.localDbConfig, text);
                        //   log.info(onhanddata);
                        //   if (onhanddata && onhanddata.rows.length > 0) {
                        //     trans.qty_in =
                        //       parseInt(trans.QTY) > 0
                        //         ? parseInt(onhanddata.rows[0].qty_in) + Math.abs(parseInt(trans.QTY))
                        //         : parseInt(onhanddata.rows[0].qty_in) + 0;
                        //     trans.qty_out =
                        //       parseInt(trans.QTY) <= 0
                        //         ? parseInt(onhanddata.rows[0].qty_out) + Math.abs(parseInt(trans.QTY))
                        //         : parseInt(onhanddata.rows[0].qty_out) + 0;
                        //     let onhandquery = `UPDATE public.inventory_onhand SET  qty_in='${trans.qty_in}', qty_out= '${trans.qty_out}', updated_on=now() WHERE id='${onhanddata.rows[0].id}'`;
                        //     inventoryOnHandQuery.push(onhandquery);
                        //   } else {
                        //     trans.qty_in = parseInt(trans.QTY) > 0 ? Math.abs(parseInt(trans.QTY)) : 0;
                        //     trans.qty_out = parseInt(trans.QTY) <= 0 ? Math.abs(parseInt(trans.QTY)) : 0;
                        //     let onhandquery = `INSERT INTO public.inventory_onhand (id, itemid, configid, inventsizeid, batchno, qty_in, qty_out, qty_reserved, dataareaid, inventlocationid, updated_on, "name", updated_by) VALUES( '${
                        //       uuid() + App.UniqueNumber()
                        //     }', '${trans.ITEMID}', '${trans.ConfigId}', '${trans.InventSizeId}', '${trans.BATCHNO}', '${
                        //       trans.qty_in
                        //     }', '${trans.qty_out}', 0, '${trans.DATAAREAID.toLowerCase()}', '${
                        //       this.dateObj.inventlocationid
                        //     }', now(), 'inventory', 'SYSTEM');`;
                        //     inventoryOnHandQuery.push(onhandquery);
                        //   }
                        // }
                        queryData.push(query);
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8:
                        Log_1.log.info(inventoryOnHandQuery);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.BatchQuery(this.localDbConfig, queryData, Log_1.log)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        err_6 = _a.sent();
                        Log_1.log.error(err_6);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    SyncPrevTransactionsService.prototype.chunkArray = function (myArray, chunk_size) {
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
    return SyncPrevTransactionsService;
}());
exports.SyncPrevTransactionsService = SyncPrevTransactionsService;
var sync = new SyncPrevTransactionsService();
try {
    sync.mssqlTransactions();
}
catch (err) {
    Log_1.log.error(err);
}
var salesTableQuery = "\nSELECT SALESID AS salesid,\nSALESTYPE as salestype,\nSALESSTATUS AS salesstatus,\nSALESGROUP as salesgroup,\nCAST(CASE SALESTYPE \n  WHEN 3 THEN 'SALESORDER' \n  WHEN 4 THEN 'RETURNORDER' \n  WHEN 5 THEN 'TRANSFERORDER'\n  WHEN 6 THEN 'ORDERSHIPMENT'\n  WHEN 7 THEN 'ORDERRECEIVE'\n  WHEN 10 THEN 'INVENTORYMOVEMENT'\n  ELSE ''\nEND AS VARCHAR(20)) AS transkind,\nSALESGROUP as intercompanyoriginalsalesid,\nCUSTOMERREF AS customerref,\nCAST(CASE SALESSTATUS \n  WHEN 2 THEN 'POSTED' \n  WHEN 3 THEN 'POSTED'\n  ELSE ''\nEND AS VARCHAR(20)) AS status,\nSALESNAME as salesname,\nRESERVATION as reservation,\nCAST(CASE SALESTYPE \n  WHEN 5 THEN DELIVERYSTREET\n  WHEN 6 THEN DELIVERYSTREET\n  WHEN 7 THEN DELIVERYSTREET\n  ELSE CUSTACCOUNT\nEND AS VARCHAR(64)) AS custaccount,\n    INVOICEACCOUNT as invoiceaccount,\n    DELIVERYADDRESS as deliveryaddress,\n    CONVERT(VARCHAR(10), DELIVERYDATE, 120) as deliverydate,\n    DOCUMENTSTATUS as documentstatus,\n    CURRENCYCODE as currencycode,\n    lower(DATAAREAID) as dataareaid,\n    RECVERSION as recversion,\n    RECID as recid,\n    LANGUAGEID as languageid,\n    PAYMENT as payment,\n    CUSTGROUP as custgroup,\n    PRICEGROUPID as pricegroupid,\n    CONVERT(VARCHAR(10), SHIPPINGDATEREQUESTED, 120) as shippingdaterequested,\n    DELIVERYSTREET as deliverystreet,\n    NUMBERSEQUENCEGROUP as numbersequencegroup,\n    CASHDISC as cashdisc,\n    CONVERT(VARCHAR(10), SHIPPINGDATECONFIRMED, 120) as shippingdateconfirmed,\n    CONVERT(VARCHAR(10), DEADLINE, 120) AS deadline,\n    CONVERT(VARCHAR(10), FIXEDDUEDATE, 120) as fixedduedate,\n    CONVERT(VARCHAR(10), RETURNDEADLINE, 120) as returndeadline,\n    CONVERT(VARCHAR(10), CREATEDDATETIME, 120) as createddatetime,\n    AMOUNT AS amount,\n    DISC as disc,\n    NETAMOUNT as netamount,\n    CITYCODE as citycode,\n    DISTRICTCODE as districtcode,\n    LATITUDE AS latitude,\n    LONGITUDE as longitude,\n    VehicleCode as vehiclecode,\n    APPTYPE as apptype,\n    VOUCHERNUM as vouchernum,\n    Painter as painter,\n    AJPENDDISC as ajpenddisc,\n    TAXGROUP as taxgroup,\n    SUMTAX as sumtax,\n    SUMTAX as vatamount,\n    CardNo as cardno,\n    REDEEMPOINTS as redeempts,\n    REDEEMAMT as redeemptsamt,\n    MultiLineDisc as multilinediscountgroupid,\n    BANKCARDNO as bankcardno,\n    CARDHOLDERNAME as cardholdername,\n    CARDEXPIRY as cardexpiry\nFROM SALESTABLE\nWHERE \nSALESTYPE IN (3,4,5,6,7,10) AND  SALESSTATUS IN (2,3)\nAND ";
var salesLineQuery = "SELECT * FROM SALESLINE WHERE SALESID IN (\n  SELECT SALESID\n  FROM SALESTABLE\n  WHERE \n  SALESTYPE IN (3,4,5,6,7,10) AND  SALESSTATUS IN (2,3)\n  AND ";
var inventTransQuery = "\nSELECT \nITEMID,\nCONVERT(VARCHAR(10), DATEPHYSICAL, 120) as DATEPHYSICAL,\nQTY,\nTRANSTYPE,\nTRANSREFID,\nINVOICEID,\nRECVERSION,\nRECID,\nInventSizeId,\nConfigId,\nBATCHNO,\nlower(DATAAREAID) as DATAAREAID\nFROM INVENTTRANS where ";
