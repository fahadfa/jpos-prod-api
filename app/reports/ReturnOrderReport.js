"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var App_1 = require("../../utils/App");
var RawQuery_1 = require("../common/RawQuery");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var SalesLineDAO_1 = require("../repos/SalesLineDAO");
var DesignerserviceRepository_1 = require("../repos/DesignerserviceRepository");
var typeorm_2 = require("typeorm");
var SalesTableService_1 = require("../services/SalesTableService");
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var UnSyncedTransactions_1 = require("../../entities/UnSyncedTransactions");
var uuid_1 = __importDefault(require("uuid"));
var ReturnOrderReport = /** @class */ (function () {
    function ReturnOrderReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.designerServiceDAO = new DesignerserviceRepository_1.DesignerserviceRepository();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.salesLineDAO = new SalesLineDAO_1.SalesLineDAO();
        this.salesTableDAO = new SalesTableDAO_1.SalesTableDAO();
        this.salesTableService = new SalesTableService_1.SalesTableService();
    }
    ReturnOrderReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, unSyncedData_1, data_1, batchesList, result, new_data_1, i_1, date, linesCount, statusQuery, salesLineQuery, inventtransQuery, lineids, inventtransids, designerServices, _i, designerServices_1, service, salesLine, salesLineData, _loop_1, _a, salesLineData_1, item, sNo_1, quantity_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 21, 23, 25]);
                        unSyncedData_1 = [];
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 4:
                        data_1 = _b.sent();
                        data_1 = data_1.length > 0 ? data_1[0] : {};
                        data_1.originalPrinted = data_1.originalPrinted == null ? false : data_1.originalPrinted;
                        data_1.vatAmount = Math.round(parseFloat((data_1.vatAmount * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                        data_1.ReturnDate = new Date(data_1.ReturnDate).toLocaleDateString();
                        if (data_1.originalPrinted) {
                            data_1.isCopy = true;
                        }
                        else {
                            data_1.isCopy = false;
                        }
                        return [4 /*yield*/, this.batches_data_to_query(params)];
                    case 5:
                        batchesList = _b.sent();
                        result = this.groupBy(batchesList, function (item) {
                            return [item.itemid, item.batchno, item.configid, item.inventsizeid];
                        });
                        new_data_1 = [];
                        result.forEach(function (groupitem) {
                            var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.qty); }, 0);
                            if (qty > 0) {
                                groupitem[0].qty = Math.abs(qty);
                                groupitem[0].returnQuantity = 0;
                                new_data_1.push(__assign({}, groupitem[0]));
                            }
                        });
                        i_1 = 1;
                        new_data_1.forEach(function (element) {
                            element.sNo = i_1;
                            element.price = Math.round(parseFloat((element.price * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                            element.lineAmount =
                                Math.round(parseFloat((element.lineAmount * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                            i_1++;
                        });
                        data_1.batches = new_data_1;
                        if (!(data_1.status != "POSTED")) return [3 /*break*/, 16];
                        date = new Date().toISOString();
                        return [4 /*yield*/, this.db.query(" select count(1) as apptype from salesline where salesid in ('" + params.salesId + "')")];
                    case 6:
                        linesCount = _b.sent();
                        linesCount = linesCount.length > 0 ? linesCount[0].apptype : 0;
                        statusQuery = "UPDATE salestable SET \n                          originalprinted = 'true',\n                          status = 'POSTED',\n                          apptype = " + linesCount + ",\n                          lastmodifieddate = '" + date + "' \n                          WHERE salesid = '" + params.salesId + "' or \n                          salesgroup = '" + params.salesId + "' or \n                          deliverystreet = '" + params.salesId + "'";
                        // await this.rawQuery.updateSalesTable(params.salesId.toUpperCase(), "POSTED");
                        queryRunner.query(statusQuery);
                        salesLineQuery = " UPDATE salesline SET \n        status = 'POSTED',\n        lastmodifieddate = '" + date + "' \n        WHERE salesid = '" + params.salesId + "' ";
                        queryRunner.query(salesLineQuery);
                        inventtransQuery = "UPDATE inventtrans SET transactionclosed = " + true + ", reserve_status = 'POSTED' ";
                        if (date) {
                            inventtransQuery += ",dateinvent = '" + date + "' ";
                        }
                        inventtransQuery += " WHERE invoiceid = '" + params.salesId.toUpperCase() + "'";
                        return [4 /*yield*/, queryRunner.query(inventtransQuery)];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, this.updateSalesLineData(params.salesId)];
                    case 8:
                        _b.sent();
                        unSyncedData_1.push({
                            id: uuid_1.default(),
                            transactionId: params.salesId,
                            transactionTable: "salestable",
                            updatedOn: new Date(),
                        });
                        return [4 /*yield*/, this.db.query("select id from salesline where salesid = '" + params.salesId + "'")];
                    case 9:
                        lineids = _b.sent();
                        return [4 /*yield*/, this.db.query("select id from inventtrans where invoiceid = '" + params.salesId + "'")];
                    case 10:
                        inventtransids = _b.sent();
                        lineids.map(function (v) {
                            unSyncedData_1.push({
                                id: uuid_1.default(),
                                transactionId: v.id,
                                transactionTable: "salesline",
                                updatedOn: new Date(),
                            });
                        });
                        inventtransids.map(function (v) {
                            unSyncedData_1.push({
                                id: uuid_1.default(),
                                transactionId: v.id,
                                transactionTable: "inventtrans",
                                updatedOn: new Date(),
                            });
                        });
                        return [4 /*yield*/, queryRunner.manager.getRepository(UnSyncedTransactions_1.UnSyncedTransactions).save(unSyncedData_1)];
                    case 11:
                        _b.sent();
                        return [4 /*yield*/, this.salesTableDAO.search({ deliveryStreet: params.salesId })];
                    case 12:
                        designerServices = _b.sent();
                        console.log(designerServices);
                        _i = 0, designerServices_1 = designerServices;
                        _b.label = 13;
                    case 13:
                        if (!(_i < designerServices_1.length)) return [3 /*break*/, 16];
                        service = designerServices_1[_i];
                        service.status = "PAID";
                        this.salesTableService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.salesTableService.saveQuotation(service, queryRunner)];
                    case 14:
                        _b.sent();
                        _b.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 13];
                    case 16: return [4 /*yield*/, this.salesline_query_to_data(params)];
                    case 17:
                        salesLine = _b.sent();
                        console.log(salesLine);
                        return [4 /*yield*/, this.salesline_query(params)];
                    case 18:
                        salesLineData = _b.sent();
                        _loop_1 = function (item) {
                            console.log(item.link_id);
                            var relatedItem = salesLine.find(function (v) {
                                return v.linkId == item.link_id && parseFloat(v.lineAmount) * parseInt(v.salesQty) > parseFloat(item.linetotaldisc);
                            });
                            var relatedItemIndex = salesLine.findIndex(function (v) {
                                return v.linkId == item.link_id && parseFloat(v.lineAmount) * parseInt(v.salesQty) > parseFloat(item.linetotaldisc);
                            });
                            if (relatedItem) {
                                console.log(salesLine[relatedItemIndex].lineTotalDisc, salesLine[relatedItemIndex].vatAmount, item.linetotaldisc, item.vatamount);
                                salesLine[relatedItemIndex].lineTotalDisc = salesLine[relatedItemIndex].lineTotalDisc
                                    ? parseFloat(salesLine[relatedItemIndex].lineTotalDisc) + parseFloat(item.linetotaldisc)
                                    : 0;
                                salesLine[relatedItemIndex].vatAmount = salesLine[relatedItemIndex].vatAmount
                                    ? parseFloat(salesLine[relatedItemIndex].vatAmount) + parseFloat(item.vatamount)
                                    : 0;
                                salesLine[relatedItemIndex].lineTotalDisc = salesLine[relatedItemIndex].lineTotalDisc.toFixed(2);
                                salesLine[relatedItemIndex].vatAmount = salesLine[relatedItemIndex].vatAmount.toFixed(2);
                            }
                            salesLine[relatedItemIndex].lineTotalDisc;
                        };
                        for (_a = 0, salesLineData_1 = salesLineData; _a < salesLineData_1.length; _a++) {
                            item = salesLineData_1[_a];
                            _loop_1(item);
                        }
                        sNo_1 = 1;
                        data_1.vat = salesLine.length > 0 ? salesLine[0].vat : "-";
                        quantity_1 = 0;
                        salesLine.map(function (val) {
                            val.sNo = sNo_1;
                            sNo_1 += 1;
                            quantity_1 += parseInt(val.salesQty);
                        });
                        return [4 /*yield*/, this.chunkArray(salesLine, 10)];
                    case 19:
                        salesLine = _b.sent();
                        data_1.salesLine = salesLine.map(function (v) {
                            var salesLine = {};
                            salesLine.salesLine = v;
                            salesLine.vat = data_1.vat;
                            salesLine.wareHouseNameEn = data_1.wareHouseNameEn;
                            salesLine.salesId = data_1.salesId;
                            salesLine.fromWareHouse = data_1.fromWareHouse;
                            salesLine.custaccount = data_1.custaccount;
                            salesLine.invoiceAccount = data_1.invoiceAccount;
                            salesLine.createdDateTime = data_1.createdDateTime;
                            salesLine.ReturnDate = data_1.ReturnDate;
                            salesLine.lastModifiedDate = data_1.lastModifiedDate;
                            salesLine.status = data_1.status;
                            salesLine.statusEn = data_1.statusEn;
                            salesLine.statusAr = data_1.statusAr;
                            salesLine.transkindEn = data_1.transkindEn;
                            salesLine.transkindAr = data_1.transkindAr;
                            salesLine.name = data_1.name;
                            salesLine.discount = data_1.discount;
                            salesLine.phone = data_1.phone;
                            salesLine.grossAmount = data_1.grossAmount;
                            salesLine.netAmount = data_1.netAmount;
                            salesLine.vatAmount = data_1.vatAmount;
                            salesLine.cashAmount = data_1.cashAmount;
                            salesLine.cardAmount = data_1.cardAmount;
                            salesLine.onlineAmount = data_1.onlineAmount;
                            salesLine.designServiceRedeemAmount = data_1.designServiceRedeemAmount;
                            salesLine.redeemAmount = data_1.redeemAmount;
                            salesLine.originalPrinted = data_1.originalPrinted;
                            salesLine.createdBy = data_1.createdBy;
                            salesLine.salesOrderId = data_1.salesOrderId;
                            salesLine.notes = data_1.notes;
                            salesLine.wareHouseNameAr = data_1.wareHouseNameAr;
                            salesLine.wareHouseNameEn = data_1.wareHouseNameEn;
                            salesLine.salesman = data_1.salesman;
                            salesLine.createddatetime = data_1.createddatetime;
                            salesLine.isCopy = data_1.isCopy;
                            return salesLine;
                        });
                        //--------------------End-------------------//
                        // data.salesLine = salesLine;
                        // data.quantity = 0;
                        // data.salesLine.map((v: any) => {
                        //   data.quantity += parseInt(v.salesQty);
                        // });
                        // console.log(data);
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 20:
                        //--------------------End-------------------//
                        // data.salesLine = salesLine;
                        // data.quantity = 0;
                        // data.salesLine.map((v: any) => {
                        //   data.quantity += parseInt(v.salesQty);
                        // });
                        // console.log(data);
                        _b.sent();
                        return [2 /*return*/, data_1];
                    case 21:
                        error_1 = _b.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 22:
                        _b.sent();
                        throw error_1;
                    case 23: return [4 /*yield*/, queryRunner.release()];
                    case 24:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    ReturnOrderReport.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    ReturnOrderReport.prototype.updateSalesLineData = function (returnOrderId) {
        return __awaiter(this, void 0, void 0, function () {
            var returnOrderlLinesQuery, returnOrderLines, _i, returnOrderLines_1, v, salesline;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnOrderlLinesQuery = "select \n                                                s.intercompanyoriginalsalesid as salesorderid, \n                                                sl.lineamount as lineamount, \n                                                sl.colorantprice colorantprice,\n                                                sl.salesqty as salesqty, \n                                                sl.itemid as itemid, \n                                                sl.configid as configid, \n                                                sl.inventsizeid as inventsizeid, \n                                                sl.linetotaldisc as linetotaldisc, \n                                                sl.vatamount as vatamount,\n                                                sl.is_item_free as isitemfree,\n                                                sl.applied_discounts as applied_discounts,\n                                                sl.remainsalesfinancial as remainsalesfinancial\n                                                from salesline sl\n                                                inner join salestable s on s.salesid = sl.salesid \n                                                where sl.salesid= '" + returnOrderId + "'\n                                                ";
                        return [4 /*yield*/, this.db.query(returnOrderlLinesQuery)];
                    case 1:
                        returnOrderLines = _a.sent();
                        _i = 0, returnOrderLines_1 = returnOrderLines;
                        _a.label = 2;
                    case 2:
                        if (!(_i < returnOrderLines_1.length)) return [3 /*break*/, 6];
                        v = returnOrderLines_1[_i];
                        return [4 /*yield*/, this.salesLineDAO.findOne({
                                isItemFree: v.isitemfree,
                                itemid: v.itemid,
                                configId: v.configid,
                                inventsizeid: v.inventsizeid,
                                salesId: v.salesorderid,
                            })];
                    case 3:
                        salesline = _a.sent();
                        // console.log(salesline);
                        salesline.totalReturnedQuantity = parseInt(salesline.totalReturnedQuantity) + parseInt(v.salesqty);
                        salesline.totalSettledAmount =
                            parseFloat(salesline.totalSettledAmount) +
                                parseFloat(v.lineamount) -
                                parseFloat(v.linetotaldisc) +
                                parseFloat(v.vatamount);
                        salesline.lastModifiedDate = new Date();
                        salesline.remainSalesFinancial = salesline.remainSalesFinancial
                            ? parseInt(salesline.remainSalesFinancial) + parseInt(v.remainsalesfinancial)
                            : parseInt(v.remainsalesfinancial);
                        return [4 /*yield*/, this.salesLineDAO.save(salesline)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // async updateDesignerServiceForCustomer(reqData: any) {
    //   let designerData: any = await this.db.query(
    //     ` select * from designerservice where salesorderid = '${reqData.salesOrderId}' `
    //   );
    //   designerData = designerData.length > 0 ? designerData[0] : {};
    //   let designerServiceData: any = {
    //     custphone: reqData.phone,
    //     amount: reqData.designServiceRedeemAmount,
    //     invoiceid: designerData.invoiceid,
    //     salesorderid: reqData.salesId,
    //     dataareaid: reqData.dataareaid,
    //     recordtype: 0,
    //     settle: 0,
    //     selectedforsettle: 0,
    //     createdby: reqData.createdBy,
    //     createddatetime: new Date(App.DateNow()),
    //     lastmodifiedby: reqData.createdBy,
    //     lastmodifieddate: new Date(App.DateNow()),
    //     customer: {
    //       accountnum: reqData.invoiceAccount,
    //     },
    //   };
    //   await this.designerServiceDAO.save(designerServiceData);
    // }
    ReturnOrderReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                renderData = result;
                console.log("===========================data===============================");
                console.log(renderData);
                file = params.lang == "en" ? "ro-en" : "ro-ar";
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
    ReturnOrderReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n                distinct\n                s.salesid as \"salesId\",\n                s.inventlocationid as \"fromWareHouse\",\n                s.custaccount as \"custaccount\",\n                S.invoiceaccount as \"invoiceAccount\",\n                s.createddatetime as \"createdDateTime\",\n                s.lastmodifieddate as \"ReturnDate\",\n                s.lastmodifieddate as \"lastModifiedDate\",\n                s.status as status,\n                als.en as \"statusEn\",\n                als.ar as \"statusAr\",\n                alt.en as \"transkindEn\",\n                alt.ar as \"transkindAr\",\n                s.salesname as name,\n                to_char(s.disc, 'FM999999999990.00')  as discount,\n                s.mobileno as phone,\n                to_char(s.amount , 'FM999999999990.00') as \"grossAmount\",\n                to_char(s.netamount, 'FM999999999990.00') as \"netAmount\",\n                to_char(s.vatamount,  'FM999999999990.00') as \"vatAmount\",\n                to_char(s.cash_amount, 'FM999999999990.00') as \"cashAmount\",\n                to_char(s.card_amount, 'FM999999999990.00') as \"cardAmount\",\n                to_char(s.online_amount, 'FM999999999990.00') as \"onlineAmount\",\n                to_char(s.design_service_redeem_amount, 'FM999999999990.00') as \"designServiceRedeemAmount\",\n                to_char(s.redeemptsamt, 'FM999999999990.00') as \"redeemAmount\",\n                s.originalprinted as \"originalPrinted\",\n                s.createdby as \"createdBy\",\n                s.intercompanyoriginalsalesid as \"salesOrderId\",\n                s.description as notes,\n                w.name as \"wareHouseNameAr\",\n                w.namealias as \"wareHouseNameEn\",\n                d.\"description\" as salesman,\n                to_char(s.createddatetime, 'DD-MM-YYYY') as createddatetime\n                from salestable s\n                left join salesline sl on sl.salesid = s.salesid\n                left join inventlocation w on w.inventlocationid=s.inventlocationid\n                left join custtable c on c.accountnum=s.custaccount\n                left join dimensions d on d.num = s.dimension6_\n                left join app_lang als on als.id = s.status\n                left join app_lang alt on alt.id = s.transkind\n            where s.transkind = 'RETURNORDER' and s.salesid = '" + params.salesId + "' limit 1\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReturnOrderReport.prototype.batches_data_to_query = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var batchesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batchesQuery = "select \n    distinct on (i.id, i.invoiceid, i.itemid, i.configid, i.inventsizeid, i.batchno, i.qty, i.sales_line_id)\n    i.itemid as itemid,\n    bs.name_en as nameEn,\n    bs.name_ar as nameAr,\n    to_char(i.qty, 'FM999,999,999,999D') as qty,\n    i.configid as configid,\n    i.inventsizeid as inventsizeid,\n    i.invoiceid as invoiceid,\n    i.transrefid as transrefid,\n    s.name_en as sizenameen,\n    s.name_ar as sizenamear,\n    i.batchno as batchno,\n    b.expdate as batchExpDate,\n    b.expdate as batchExpDate,\n    sl.salesprice as price,\n    sl.lineamount as \"lineAmount\",\n    sl.vatamount as \"vatAmount\",\n    sl.vat as vat\n    from inventtrans  i\nleft join salesline sl on sl.id = i.sales_line_id\nleft join inventbatch b on i.batchno = b.inventbatchid\nleft join bases bs on i.itemid = bs.code\nleft join sizes s on s.code = i.inventsizeid\nwhere   i.invoiceid = '" + params.salesId + "'";
                        return [4 /*yield*/, this.db.query(batchesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReturnOrderReport.prototype.salesline_query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n    select\n    distinct\n    ln.salesid,\n    ln.itemid,\n    ln.batchno,\n    ln.configid,\n    ln.inventsizeid,\n    ln.saleslineqty,\n    to_char(ln.lastmodifieddate, 'DD-MM-YYYY') as \"shippingDate\",\n    to_char(ln.salesqty, 'FM999999999D') as \"salesQty\",\n    to_char(ln.salesprice, 'FM999999999990.00') as salesprice,\n    to_char((ln.vatamount/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"vatAmount\",\n    to_char((ln.linetotaldisc/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineTotalDisc\",\n    to_char(ln.colorantprice, 'FM999999999990.00') as colorantprice,\n    to_char((ln.lineamount / ln.saleslineqty)*ln.salesqty + (ln.colorantprice*ln.salesqty) - (ln.linetotaldisc / ln.saleslineqty)*ln.salesqty + (ln.vatamount / ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineAmount\",\n    ln.prodnamear as \"prodNameAr\",\n    ln.prodnameen as \"prodNameEn\",\n    ln.colNameAr as \"colNameAr\",\n    ln.colNameEn as \"colNameEn\",\n    ln.sizeNameEn as \"sizeNameEn\",\n    ln.sizeNameAr as \"sizeNameAr\",\n    to_char((ln.lineamount/ln.saleslineqty)*ln.salesqty + (ln.colorantprice*ln.salesqty) - (ln.linetotaldisc/ln.saleslineqty)*ln.salesqty, 'FM999999999990.00') as \"lineAmountBeforeVat\",\n    ln.vat as vat,\n    ln.colorantid as colorant,\n    ln.linenum as linenum,\n    ln.link_id as \"linkId\"\n    from\n    (\n      select distinct on (i.invoiceid, i.itemid, i.configid, i.inventsizeid, i.qty, i.batchno, i.sales_line_id)\n      i.invoiceid as salesid,\n      i.batchno,\n      i.itemid,\n      i.configid,\n      i.inventsizeid,\n      st.status as status,\n      ABS(i.qty) as salesqty,\n      b.itemname as prodnamear,\n      b.namealias as prodnameen,\n      coalesce(sl.salesprice, 0)  as salesprice,\n      coalesce(sl.vatamount, 0)  as vatamount,\n      coalesce(sl.linetotaldisc, 0) as linetotaldisc,\n      coalesce(sl.colorantprice,0) as colorantprice,\n      c.name as colNameAr,\n      c.name as colNameEn,\n      s.description as sizeNameEn,\n      s.name as sizeNameAr,\n      coalesce(sl.lineamount,0) as  lineamount,\n      sl.colorantid as  colorantid,\n      sl.salesqty as saleslineqty,\n      sl.vat as vat,\n      sl.linenum,\n      sl.lastmodifieddate,\n      sl.link_id \n      from inventtrans i\n      left join salestable st on st.salesid = i.invoiceid\n      left join salesline sl on sl.id = i.sales_line_id\n      left join inventtable b on i.itemid=b.itemid\n      left join inventsize s on s.itemid = i.itemid and i.inventsizeid = s.inventsizeid\n      left join configtable c on c.configid = i.configid and c.itemid = i.itemid\n      \n  where invoiceid='" + params.salesId + "'\n  ) as ln order by linenum ASC\n    \n    ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReturnOrderReport.prototype.salesline_query = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n          select \n         *\n          from salesline sl\n        where sl.salesid='" + params.salesId + "' and sl.salesqty=0 order by linenum ASC\n  ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReturnOrderReport.prototype.chunkArray = function (myArray, chunk_size) {
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
    return ReturnOrderReport;
}());
exports.ReturnOrderReport = ReturnOrderReport;
