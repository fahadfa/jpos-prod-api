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
var Props_1 = require("../../constants/Props");
var SalesTable_1 = require("../../entities/SalesTable");
var SalesLine_1 = require("../../entities/SalesLine");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var SalesLineDAO_1 = require("../repos/SalesLineDAO");
var uuid = require("uuid");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var RawQuery_1 = require("../common/RawQuery");
var SalesTableService_1 = require("./SalesTableService");
var typeorm_1 = require("typeorm");
var InventtableDAO_1 = require("../repos/InventtableDAO");
var InventTrans_1 = require("../../entities/InventTrans");
var Log_1 = require("../../utils/Log");
var HistoricalSalesordersService = /** @class */ (function () {
    function HistoricalSalesordersService() {
        this.axios = require("axios");
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.salesTableDAO = new SalesTableDAO_1.SalesTableDAO();
        this.salesLineDAO = new SalesLineDAO_1.SalesLineDAO();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventtableDAO = new InventtableDAO_1.InventtableDAO();
        this.db = typeorm_1.getManager();
    }
    HistoricalSalesordersService.prototype.get = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, salesId, salesOrder, salestable, returnOrdersData, salesline, salesData, _i, returnOrdersData_1, item, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_1.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 16, 18, 20]);
                        salesId = data.salesId;
                        return [4 /*yield*/, this.getSalesOrderOrder(salesId)];
                    case 4:
                        salesOrder = _a.sent();
                        salestable = salesOrder && salesOrder.OrderTable.length > 0 ? salesOrder.OrderTable[0] : null;
                        returnOrdersData = void 0;
                        if (!salestable) return [3 /*break*/, 14];
                        salesline = salesOrder && salesOrder.OrderLine ? salesOrder.OrderLine : null;
                        salestable.salesLine = salesline;
                        return [4 /*yield*/, this.mapSalesData(salestable, salesId, "SALESORDER")];
                    case 5:
                        salesData = _a.sent();
                        return [4 /*yield*/, this.getreturnOrders(salesId)];
                    case 6:
                        returnOrdersData = _a.sent();
                        return [4 /*yield*/, this.mapReturnOrderData(returnOrdersData.creditNotes, salesId)];
                    case 7:
                        returnOrdersData = _a.sent();
                        return [4 /*yield*/, this.save(salesData, queryRunner)];
                    case 8:
                        _a.sent();
                        _i = 0, returnOrdersData_1 = returnOrdersData;
                        _a.label = 9;
                    case 9:
                        if (!(_i < returnOrdersData_1.length)) return [3 /*break*/, 12];
                        item = returnOrdersData_1[_i];
                        return [4 /*yield*/, this.save(item, queryRunner)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        _i++;
                        return [3 /*break*/, 9];
                    case 12: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 13:
                        _a.sent();
                        return [2 /*return*/, { status: 1, id: salesData.salesId, message: "SAVED_SUCCESSFULLY" }];
                    case 14: throw { status: 0, message: "ORDER_NOT_FOUND" };
                    case 15: return [3 /*break*/, 20];
                    case 16:
                        error_1 = _a.sent();
                        Log_1.log.error(error_1);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 17:
                        _a.sent();
                        throw error_1;
                    case 18: return [4 /*yield*/, queryRunner.release()];
                    case 19:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalSalesordersService.prototype.mapSalesData = function (data, salesId, type) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData_1, i, _loop_1, _i, _a, v, _loop_2, this_1, _b, _c, line, error_2;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 6]);
                        salesData_1 = new SalesTable_1.SalesTable();
                        salesData_1.salesId = data.SALESID;
                        salesData_1.salesName = data.SALESNAME;
                        salesData_1.custAccount = data.CUSTACCOUNT;
                        salesData_1.invoiceAccount = data.INVOICEACCOUNT;
                        salesData_1.deliveryDate = data.DELIVERYDATE;
                        salesData_1.transkind = type;
                        salesData_1.status = "POSTED";
                        salesData_1.deliveryDate = data.DELIVERYDATE;
                        salesData_1.deliveryAddress = data.DELIVERYADDRESS;
                        salesData_1.documentStatus = data.DOCUMENTSTATUS;
                        salesData_1.currencyCode = data.CURRENCYCODE;
                        salesData_1.dataareaid = data.DATAAREAID ? data.DATAAREAID.toLowerCase() : data.DATAAREAID;
                        salesData_1.recversion = data.RECVERSION;
                        salesData_1.recId = data.RECID;
                        salesData_1.payment = data.PAYMENT;
                        salesData_1.custGroup = data.CUSTGROUP;
                        salesData_1.priceGroupId = data.PRICEGROUPID;
                        salesData_1.shippingDateConfirmed = data.SHIPPINGDATEREQUESTED;
                        salesData_1.deliveryStreet = data.DELIVERYSTREET;
                        salesData_1.salesStatus = data.SALESSTATUS;
                        salesData_1.numberSequenceGroup = data.NUMBERSEQUENCEGROUP;
                        salesData_1.cashDisc = data.CASHDISC;
                        salesData_1.freightsliptype = data.FREIGHTSLIPTYPE;
                        salesData_1.salesTaker = data.SALESTAKER;
                        salesData_1.interCompanyOriginalSalesId = type == "SALESORDER" ? null : salesId;
                        salesData_1.url = data.URL;
                        salesData_1.purchOrderFormNum = data.PURCHORDERFORMNUM;
                        salesData_1.shippingDateConfirmed = data.SHIPPINGDATECONFIRMED;
                        salesData_1.deadline = data.DEADLINE;
                        salesData_1.fixedDueDate = data.FIXEDDUEDATE;
                        salesData_1.receiptDateConfirmed = data.RECEIPTDATECONFIRMED;
                        salesData_1.returnDeadLine = data.RETURNDEADLINE;
                        salesData_1.createddatetime = data.CREATEDDATETIME;
                        salesData_1.lastModifiedDate = data.CREATEDDATETIME;
                        salesData_1.createdby = data.CREATEDBY;
                        salesData_1.customerRef = data.CUSTOMERREF;
                        salesData_1.syncStatus = 4;
                        salesData_1.vatamount = data.SumTax;
                        salesData_1.amount = data.AMOUNT;
                        salesData_1.disc = data.DISC;
                        salesData_1.netAmount = data.NETAMOUNT;
                        salesData_1.cashAmount = data.NETAMOUNT;
                        salesData_1.cityCode = data.CITYCODE;
                        salesData_1.districtCode = data.DISTRICTCODE;
                        salesData_1.latitude = data.LATITUDE;
                        salesData_1.longitude = data.LONGITUDE;
                        salesData_1.forCustomer = data.ForCustomer;
                        salesData_1.vehicleCode = data.VehicleCode;
                        salesData_1.voucherNum = data.VOUCHERNUM;
                        salesData_1.painter = data.Painter;
                        salesData_1.redeemPoints = data.REDEEMPOINTS;
                        salesData_1.originalprinted = true;
                        salesData_1.redeemAmount = data.REDEEMAMT;
                        salesData_1.ajpenddisc = data.AJPEndDisc;
                        salesData_1.taxGroup = data.TaxGroup;
                        salesData_1.iscash = salesData_1.payment == "CASH" ? true : false;
                        salesData_1.multilineDiscountGroupId = data.MultiLineDisc;
                        salesData_1.salesLine = [];
                        i = 1;
                        _loop_1 = function (v) {
                            if (v.ITEMID != "HSN-00001") {
                                var salesLine = new SalesLine_1.SalesLine();
                                salesLine.salesId = v.SALESID;
                                salesLine.lineNum = i;
                                salesLine.itemid = v.ITEMID;
                                salesLine.name = v.NAME;
                                salesLine.salesprice = v.SALESPRICE;
                                salesLine.currencyCode = v.CURRENCYCODE;
                                salesLine.salesQty = v.SALESQTY;
                                salesLine.lineAmount = v.LINEAMOUNT;
                                salesLine.salesUnit = v.SALESUNIT;
                                salesLine.qtyOrdered = v.QTYORDERED;
                                salesLine.remainSalesPhysical = v.REMAINSALESPHYSICAL;
                                salesLine.remainSalesFinancial = v.REMAINSALESFINANCIAL;
                                salesLine.receiptDateConfirmed = v.RECEIPTDATECONFIRMED;
                                salesLine.shippingDateRequested = v.SHIPPINGDATEREQUESTED;
                                salesLine.shippingDateConfirmed = v.SHIPPINGDATECONFIRMED;
                                salesLine.lastModifiedDate = data.CREATEDDATETIME;
                                salesLine.lastModifiedBy = data.CREATEDDATETIME;
                                salesLine.status = "POSTED";
                                salesLine.confirmedDlv = v.CONFIRMEDDLV;
                                salesLine.salesType = v.SALESTYPE;
                                salesLine.dataareaid = salesData_1.dataareaid;
                                salesLine.recversion = v.RECVERSION;
                                salesLine.recid = v.RECID;
                                salesLine.custGroup = v.CUSTGROUP;
                                salesLine.custAccount = v.CUSTACCOUNT;
                                salesLine.inventsizeid = v.INVENTSIZEID;
                                salesLine.configId = v.CONFIGID;
                                salesLine.numberSequenceGroupId = v.NUMBERSEQUENCEGROUPID;
                                salesLine.inventLocationId = v.INVENTLOCATIONID;
                                salesData_1.inventLocationId = v.INVENTLOCATIONID;
                                salesLine.inventTransid = v.INVENTTRANSID;
                                salesLine.colorantprice = 0;
                                salesLine.salesDeliverNow = v.SALESDELIVERNOW;
                                salesLine.salesStatus = v.SALESSTATUS;
                                salesLine.location = v.LOCATION;
                                salesLine.batchNo = v.BATCHNO;
                                salesLine.instantDisc = v.InstantDisc;
                                salesLine.voucherDisc = v.VoucherDisc;
                                salesLine.redeeDisc = v.RedeemDisc;
                                salesLine.promotiondisc = v.PromotionDisc;
                                salesLine.lineTotalDisc = v.LineTotalDisc;
                                salesLine.lineSalesTax = parseFloat(v.LineSalesTax);
                                salesLine.netAmtTax = v.NetAmtTax;
                                salesLine.lineSalesTaxPercent = v.LineSalesTaxPercent;
                                salesData_1.sumTax = v.LineSalesTaxPercent;
                                salesLine.taxGroup = v.TaxGroup;
                                salesLine.taxItemGroup = v.TaxItemGroup;
                                salesLine.linediscamt = v.LINEDISCAMT;
                                salesLine.customDiscAmt = v.CUSTOMDISCAMT;
                                salesLine.supplMultipleQty = v.SupplMultipleQty;
                                salesLine.supplFreeQty = v.SupplFreeQty;
                                salesLine.multilnPercent = v.MultiLnPercent;
                                salesLine.vat = v.LineSalesTaxPercent;
                                salesLine.vatamount = parseFloat(v.LineSalesTax);
                                salesLine.multilndisc = v.MultiLnDisc;
                                salesLine.InteriorExteriorAmount = v.InteriorExteriorAmount;
                                salesLine.InteriorExteriorPer = v.InteriorExteriorPer;
                                salesLine.PromotionDiscEqual = v.PromotionDiscEqual;
                                salesLine.PromotionDiscEqualRecId = v.PromotionDiscEqualRecId;
                                salesLine.id = uuid();
                                salesLine.batches = {
                                    id: uuid(),
                                    qty: type == "SALESORDER" ? -parseInt(salesLine.salesQty) : parseInt(salesLine.salesQty),
                                    itemid: salesLine.itemid,
                                    transrefid: type == "SALESORDER" ? salesLine.salesId : salesData_1.interCompanyOriginalSalesId,
                                    invoiceid: salesLine.salesId,
                                    batchno: salesLine.batchNo,
                                    configid: salesLine.configId,
                                    reservationid: salesLine.colorantId,
                                    inventsizeid: salesLine.inventsizeid,
                                    inventlocationid: salesLine.inventLocationId,
                                    dataareaid: salesLine.dataareaid.toLowerCase(),
                                    transactionClosed: false,
                                    dateinvent: salesLine.lastModifiedDate,
                                    reserveStatus: "OLD_POS_DATA",
                                };
                                salesLine.batch = [
                                    {
                                        batchNo: v.BATCHNO,
                                        quantity: v.SALESQTY,
                                    },
                                ];
                                salesLine.isParent = false;
                                salesLine.appliedDiscounts = [];
                                // CALUCULATIONS:
                                if (v.INVENTTRANSID && v.INVENTTRANSID != "" && v.INVENTTRANSID != "empty") {
                                    var colorantdata = data.salesLine.find(function (u) { return u.ITEMID == "HSN-00001" && u.CONFIGID == v.INVENTTRANSID && u.SALESQTY == v.SALESQTY; });
                                    if (colorantdata) {
                                        salesLine.colorantprice = colorantdata.SALESPRICE;
                                        salesLine.lineSalesTax += parseFloat(colorantdata.LineSalesTax);
                                        salesLine.vatamount += parseFloat(colorantdata.LineSalesTax);
                                    }
                                    else {
                                        salesLine.colorantprice = 0;
                                    }
                                }
                                else {
                                    salesLine.colorantprice = 0;
                                    salesLine.inventTransid = "";
                                }
                                i += 1;
                                salesData_1.salesLine.push(salesLine);
                            }
                        };
                        for (_i = 0, _a = data.salesLine; _i < _a.length; _i++) {
                            v = _a[_i];
                            _loop_1(v);
                        }
                        _loop_2 = function (line) {
                            var MultiLineDiscRangesQuery, MultiLineDiscRanges, InstantDiscRangesQuery, InstantDiscRanges, filterItems;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (line.InteriorExteriorAmount && line.InteriorExteriorAmount > 0) {
                                            line.appliedDiscounts.push({
                                                discountType: "INTERIOR_AND_EXTERIOR",
                                                percentage: parseFloat(line.InteriorExteriorPer),
                                                discountAmount: parseFloat(line.InteriorExteriorAmount),
                                            });
                                        }
                                        if (line.voucherDisc && line.voucherDisc > 0) {
                                            line.appliedDiscounts.push({
                                                discountType: "VOUCHER_DISCOUNT",
                                                percentage: (parseFloat(line.voucherDisc) * 100) / parseFloat(line.lineAmount),
                                                discountAmount: parseFloat(line.voucherDisc),
                                            });
                                        }
                                        if (line.customDiscAmt && line.customDiscAmt > 0) {
                                            line.appliedDiscounts.push({
                                                discountType: "TOTAL_DISCOUNT",
                                                percentage: (parseFloat(line.customDiscAmt) * 100) / parseFloat(line.lineAmount),
                                                discountAmount: parseFloat(line.customDiscAmt),
                                                cond: [],
                                            });
                                        }
                                        if (line.linediscamt && line.linediscamt > 0) {
                                            line.appliedDiscounts.push({
                                                discountType: "LINE_DISCOUNT",
                                                percentage: (parseFloat(line.linediscamt) * 100) / parseFloat(line.lineAmount),
                                                discountAmount: parseFloat(line.linediscamt),
                                                cond: [],
                                            });
                                        }
                                        if (!(line.multilndisc && line.multilndisc > 0)) return [3 /*break*/, 2];
                                        MultiLineDiscRangesQuery = "SELECT itemrelation, ACCOUNTRELATION,QUANTITYAMOUNT,\n                                          CURRENCY,PERCENT1 FROM \n                                          PRICEDISCTABLE WHERE MODULE = 1 AND \n                                          ITEMCODE = 1 AND ACCOUNTCODE = 1 AND \n                                          ACCOUNTRELATION = '" + line.custAccount + "' AND LOWER(DATAAREAID) = LOWER('" + line.dataareaid + "') AND CURRENCY='" + line.currencyCode + "'";
                                        return [4 /*yield*/, this_1.db.query(MultiLineDiscRangesQuery)];
                                    case 1:
                                        MultiLineDiscRanges = _a.sent();
                                        line.appliedDiscounts.push({
                                            discountType: "MULTI_LINE_DISCOUNT",
                                            percentage: parseFloat(line.multilnPercent),
                                            discountAmount: parseFloat(line.multilndisc),
                                            cond: MultiLineDiscRanges,
                                        });
                                        _a.label = 2;
                                    case 2:
                                        if (!(line.instantDisc && line.instantDisc > 0)) return [3 /*break*/, 4];
                                        InstantDiscRangesQuery = "select \n          * from custtotaldiscount where dataareaid ='ajp' and custaccount = '" + line.custAccount + "' order by minamount";
                                        return [4 /*yield*/, this_1.db.query(InstantDiscRangesQuery)];
                                    case 3:
                                        InstantDiscRanges = _a.sent();
                                        line.appliedDiscounts.push({
                                            discountType: "INSTANT_DISCOUNT",
                                            percentage: (parseFloat(line.instantDisc) * 100) / parseFloat(line.lineAmount),
                                            discountAmount: parseFloat(line.instantDisc),
                                            cond: InstantDiscRanges,
                                        });
                                        _a.label = 4;
                                    case 4:
                                        if (line.promotiondisc && line.promotiondisc > 0) {
                                            filterItems = salesData_1.salesLine.filter(function (value) { return value.itemid == line.itemid && value.inventsizeid == line.inventsizeid; });
                                            filterItems.map(function (v) {
                                                var index = salesData_1.salesLine.indexOf(v);
                                                salesData_1.salesLine[index].isItemFree = v.SupplMultipleQty > 0 ? true : false;
                                                salesData_1.salesLine[index].linkId = line.recid;
                                                line.multipleQty = v.SupplMultipleQty > 0 ? v.SupplMultipleQty : line.multipleQty;
                                                line.freeQty = v.SupplFreeQty > 0 ? v.SupplFreeQty : line.freeQty;
                                            });
                                            line.isParent = true;
                                            line.appliedDiscounts.push({
                                                discountType: "PROMOTIONAL_DISCOUNT",
                                                discountAmount: parseFloat(line.promotiondisc),
                                                cond: [
                                                    {
                                                        multipleQty: line.multipleQty,
                                                        freeQty: line.freeQty,
                                                    },
                                                ],
                                            });
                                        }
                                        if (line.PromotionDiscEqual && line.PromotionDiscEqual > 0) {
                                            line.linkId =
                                                line.PromotionDiscEqualRecId && line.PromotionDiscEqualRecId == "empty"
                                                    ? line.recid
                                                    : line.PromotionDiscEqualRecId;
                                            line.isItemFree = line.PromotionDiscEqualRecId && line.PromotionDiscEqualRecId != "empty" ? true : false;
                                            line.isParent = line.isItemFree ? false : true;
                                            line.appliedDiscounts.push({
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
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b = 0, _c = salesData_1.salesLine;
                        _d.label = 1;
                    case 1:
                        if (!(_b < _c.length)) return [3 /*break*/, 4];
                        line = _c[_b];
                        return [5 /*yield**/, _loop_2(line)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, salesData_1];
                    case 5:
                        error_2 = _d.sent();
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalSalesordersService.prototype.save = function (data, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, salesLine, _i, salesLine_1, item, batches, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 12, , 13]);
                        if (!(data.inventLocationId == this.sessionInfo.inventlocationid)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.salesTableDAO.findOne({ salesId: data.salesId })];
                    case 1:
                        salesData = _a.sent();
                        if (!salesData) return [3 /*break*/, 2];
                        throw { status: 0, message: "SALESORDER_ALREADY_EXISTS" };
                    case 2:
                        salesData = data;
                        salesLine = data.salesLine;
                        delete salesData.salesLine;
                        salesData.invoiceDate = salesData.lastModifiedDate;
                        salesData.linesCount = salesLine.length;
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(salesData)];
                    case 3:
                        _a.sent();
                        _i = 0, salesLine_1 = salesLine;
                        _a.label = 4;
                    case 4:
                        if (!(_i < salesLine_1.length)) return [3 /*break*/, 8];
                        item = salesLine_1[_i];
                        item.id = uuid();
                        item.salesId = salesData.salesId;
                        batches = item.batches;
                        delete item.batches;
                        batches.salesLineId = item.id;
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(item)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventTrans_1.Inventorytrans).save(batches)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 4];
                    case 8: return [2 /*return*/, { status: 1, id: salesData.salesId, message: "SAVED_SUCCESSFULLY" }];
                    case 9: return [3 /*break*/, 11];
                    case 10: throw { status: 0, message: "INVOICE_ID_NOT_RELATED_TO_THIS_STORE" };
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        error_3 = _a.sent();
                        throw error_3;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalSalesordersService.prototype.getSalesOrderOrder = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, reqData, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = Props_1.Props._URL + "salesorder";
                        this.axios.defaults.headers["Authorization"] = Props_1.Props._TOKEN;
                        reqData = {
                            data: {
                                orderId: salesId,
                            },
                        };
                        return [4 /*yield*/, this.axios.post(url, reqData)];
                    case 1:
                        data = _a.sent();
                        data = data.data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data.data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        throw { status: 0, message: "INVALID_SALES_ID" };
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalSalesordersService.prototype.getreturnOrders = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, reqData, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = Props_1.Props._URL + "returnorders";
                        this.axios.defaults.headers["Authorization"] = Props_1.Props._TOKEN;
                        reqData = {
                            data: {
                                salesId: salesId,
                            },
                        };
                        return [4 /*yield*/, this.axios.post(url, reqData)];
                    case 1:
                        data = _a.sent();
                        data = data.data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        else {
                            return [2 /*return*/, data.data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw { status: 0, message: "INVALID_SALES_ID" };
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoricalSalesordersService.prototype.mapReturnOrderData = function (data, salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var returnOrdersData, _i, data_1, item, returnOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnOrdersData = [];
                        _i = 0, data_1 = data;
                        _a.label = 1;
                    case 1:
                        if (!(_i < data_1.length)) return [3 /*break*/, 4];
                        item = data_1[_i];
                        item.salesLine = item.Lines;
                        delete item.Lines;
                        return [4 /*yield*/, this.mapSalesData(item, salesId, "RETURNORDER")];
                    case 2:
                        returnOrder = _a.sent();
                        returnOrdersData.push(returnOrder);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, returnOrdersData];
                }
            });
        });
    };
    HistoricalSalesordersService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        token = void 0;
                        url = Props_1.Props.REDEEM_URL + "?clientId=" + Props_1.Props.REDEEM_CLIENT_ID + "&clientSecret=" + Props_1.Props.REDEEM_CLIENT_SECRET;
                        return [4 /*yield*/, this.axios.post(url)];
                    case 1:
                        data = _a.sent();
                        token = data.headers.token;
                        return [2 /*return*/, token];
                    case 2:
                        error_6 = _a.sent();
                        throw { status: 0, message: error_6 };
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HistoricalSalesordersService;
}());
exports.HistoricalSalesordersService = HistoricalSalesordersService;
