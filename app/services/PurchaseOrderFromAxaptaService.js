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
var App_1 = require("../../utils/App");
var Props_1 = require("../../constants/Props");
var SalesTable_1 = require("../../entities/SalesTable");
var SalesLine_1 = require("../../entities/SalesLine");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var BaseSizesDAO_1 = require("../repos/BaseSizesDAO");
var ColorsDAO_1 = require("../repos/ColorsDAO");
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var SalesLineDAO_1 = require("../repos/SalesLineDAO");
var uuid = require("uuid");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var RawQuery_1 = require("../common/RawQuery");
var SalesTableService_1 = require("./SalesTableService");
var typeorm_1 = require("typeorm");
var InventtableDAO_1 = require("../repos/InventtableDAO");
var PurchaseOrderFromAxaptaService = /** @class */ (function () {
    function PurchaseOrderFromAxaptaService() {
        this.axios = require("axios");
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.colorsDAO = new ColorsDAO_1.ColorsDAO();
        this.baseSizeDAO = new BaseSizesDAO_1.BaseSizesDAO();
        this.salesTableDAO = new SalesTableDAO_1.SalesTableDAO();
        this.salesLineDAO = new SalesLineDAO_1.SalesLineDAO();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventtableDAO = new InventtableDAO_1.InventtableDAO();
    }
    PurchaseOrderFromAxaptaService.prototype.get = function (purchaseID) {
        return __awaiter(this, void 0, void 0, function () {
            var axaptaData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getPurchaseOrder(purchaseID, this.sessionInfo.inventlocationid)];
                    case 1:
                        axaptaData = _a.sent();
                        return [4 /*yield*/, this.mapSalesData(axaptaData)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.mapSalesData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, custAccount, customer, i, _i, data_1, v, salesLine, batches, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        if (!(data.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.salesTableDAO.findOne({ salesId: data[0].transfer_id })];
                    case 1:
                        salesData = _a.sent();
                        console.log(data, this.sessionInfo.inventlocationid);
                        if (!(data[0].invent_location_id.trim() == this.sessionInfo.inventlocationid)) return [3 /*break*/, 4];
                        salesData = new SalesTable_1.SalesTable();
                        // salesData.salesId = data[0].purch_id;
                        salesData.interCompanyOriginalSalesId = data[0].purch_id;
                        salesData.inventLocationId = data[0].invent_location_id.trim();
                        salesData.transkind = "PACKINGSLIP";
                        salesData.saleStatus = "SAVED";
                        salesData.custAccount = data[0].vend_account;
                        salesData.invoiceAccount = data.cust_account;
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(salesData.invoiceAccount)];
                    case 2:
                        custAccount = _a.sent();
                        customer = custAccount ? custAccount : {};
                        salesData.salesmanId = customer.salesmanid;
                        salesData.invoiceDate = new Date(App_1.App.DateNow());
                        salesData.shippingDateConfirmed = new Date(App_1.App.DateNow());
                        salesData.dataareaid = data[0].data_area_id;
                        salesData.lastModifiedDate = new Date(App_1.App.DateNow());
                        salesData.createddatetime = new Date(App_1.App.DateNow());
                        salesData.salesType = 4;
                        salesData.salesLines = [];
                        i = 1;
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            v = data_1[_i];
                            salesLine = new SalesLine_1.SalesLine();
                            salesLine.salesId = v.purch_id;
                            salesLine.lineNum = i;
                            salesLine.itemid = v.item_id;
                            salesLine.salesprice = 0;
                            salesLine.appliedDiscounts = [];
                            salesLine.configId = v.config_id;
                            salesLine.inventsizeid = v.invent_size_id;
                            salesLine.salesQty = parseInt(v.purch_qty);
                            salesLine.dataareaid = v.data_area_id;
                            salesLine.inventLocationId = v.invent_location_id;
                            salesLine.batchNo = v.batch_no;
                            salesLine.custAccount = v.vend_account;
                            salesLine.lastModifiedDate = new Date(App_1.App.DateNow());
                            salesLine.createddatetime = new Date(App_1.App.DateNow());
                            batches = {};
                            batches.qty = parseInt(v.purch_qty);
                            batches.itemid = salesLine.itemid;
                            batches.transrefid = salesLine.salesId;
                            batches.invoiceid = salesLine.salesId;
                            batches.batchno = salesLine.batchNo;
                            batches.configid = salesLine.configId;
                            batches.inventsizeid = salesLine.inventsizeid;
                            batches.inventlocationid = salesLine.inventLocationId;
                            batches.dataareaid = salesLine.dataareaid;
                            batches.transactionClosed = true;
                            batches.dateinvent = new Date(App_1.App.DateNow());
                            salesLine.batches = batches;
                            salesData.salesLines.push(salesLine);
                            i += 1;
                        }
                        return [4 /*yield*/, App_1.App.getItemNamesInSalesLines(salesData.salesLines, this.inventtableDAO)];
                    case 3:
                        _a.sent();
                        salesData.status = 1;
                        return [2 /*return*/, salesData];
                    case 4: throw { status: 0, message: "INVOICE_ID_NOT_RELATED_TO_THIS_STORE" };
                    case 5: return [3 /*break*/, 7];
                    case 6: throw { status: 0, message: "DATA_NOT_FOUND" };
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_2 = _a.sent();
                        throw error_2;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, salesData, usergroupconfig, oldItem, salesIdExists, uid, salesLines, _i, salesLines_1, item, batches, error_3;
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
                        _a.trys.push([3, 21, 23, 25]);
                        if (!data.inventLocationId) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.salesTableDAO.findOne({
                                interCompanyOriginalSalesId: data.interCompanyOriginalSalesId,
                            })];
                    case 4:
                        salesData = _a.sent();
                        if (!salesData) return [3 /*break*/, 5];
                        throw { status: 0, message: "ALREADY_RECEIVED" };
                    case 5: return [4 /*yield*/, this.usergroupconfigDAO.findOne({
                            groupid: this.sessionInfo.groupid,
                        })];
                    case 6:
                        usergroupconfig = _a.sent();
                        oldItem = null;
                        salesIdExists = true;
                        _a.label = 7;
                    case 7:
                        if (!salesIdExists) return [3 /*break*/, 10];
                        salesData = data;
                        salesData.status = data.saleStatus;
                        salesData.transkind = "PACKINGSLIP";
                        return [4 /*yield*/, this.getSalesid("PACKINGSLIP", salesData)];
                    case 8:
                        uid = _a.sent();
                        return [4 /*yield*/, this.salesTableDAO.findOne(uid)];
                    case 9:
                        oldItem = _a.sent();
                        if (oldItem) {
                        }
                        else {
                            salesData.salesId = uid;
                            salesIdExists = false;
                        }
                        return [3 /*break*/, 7];
                    case 10:
                        salesLines = data.salesLines;
                        delete salesData.salesLines;
                        salesData.linesCount = salesLines.length;
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(salesData)];
                    case 11:
                        _a.sent();
                        _i = 0, salesLines_1 = salesLines;
                        _a.label = 12;
                    case 12:
                        if (!(_i < salesLines_1.length)) return [3 /*break*/, 16];
                        item = salesLines_1[_i];
                        item.id = uuid();
                        item.salesId = salesData.salesId;
                        item.batch = [
                            {
                                batchNo: item.batches.batchno,
                                quantity: parseInt(item.batches.qty),
                            },
                        ];
                        batches = item.batches;
                        batches.invoiceid = salesData.salesId;
                        batches.salesLineId = item.id;
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(item)];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(batches, false, true, queryRunner)];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 12];
                    case 16: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 17:
                        _a.sent();
                        return [2 /*return*/, { status: 1, id: salesData.salesId, message: Props_1.Props.SAVED_SUCCESSFULLY }];
                    case 18: return [3 /*break*/, 20];
                    case 19: throw { status: 0, message: "INVALID_DATA" };
                    case 20: return [3 /*break*/, 25];
                    case 21:
                        error_3 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 22:
                        _a.sent();
                        throw error_3;
                    case 23: return [4 /*yield*/, queryRunner.release()];
                    case 24:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.getPurchaseOrder = function (purchID, inventLocationId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, reqData, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = Props_1.Props._URL + "purchaseorder";
                        console.log("axpta url :  ", url);
                        this.axios.defaults.headers["Authorization"] = Props_1.Props._TOKEN;
                        console.log(this.axios.defaults.headers);
                        reqData = {
                            data: {
                                transferID: purchID,
                                inventLocationId: inventLocationId,
                            },
                        };
                        return [4 /*yield*/, this.axios.post(url, reqData)];
                    case 1:
                        data = _a.sent();
                        console.log(Object.keys(data));
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
                        throw { status: 0, message: error_4 };
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.getAgentOrder = function (purchaseID) {
        return __awaiter(this, void 0, void 0, function () {
            var axaptaData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.getAgentPurchaseOrder(purchaseID)];
                    case 1:
                        axaptaData = _a.sent();
                        if (!(axaptaData.invent_location_id.trim() == this.sessionInfo.inventlocationid)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.mapAgentpurcaseOrder(axaptaData)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: throw { status: 0, message: "ORDER_NOT_RELATED_TO_THIS_STORE" };
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_5 = _a.sent();
                        throw error_5;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.getAgentPurchaseOrder = function (purchID) {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log(token);
                        url = Props_1.Props.AXAPTA_URL + ("AgentPurchaseOrder?purchID=" + purchID);
                        console.log("axpta url :  ", url);
                        this.axios.defaults.headers["Token"] = token;
                        console.log(this.axios.defaults.headers);
                        return [4 /*yield*/, this.axios.get(url)];
                    case 2:
                        data = _a.sent();
                        console.log(Object.keys(data));
                        console.log();
                        return [2 /*return*/, data.data];
                    case 3:
                        error_6 = _a.sent();
                        throw { status: 0, message: error_6.response.data.Message };
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.mapAgentpurcaseOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, custAccount, customer, salesLine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesData = {};
                        salesData.salesId = data.purch_id;
                        salesData.salesName = data.cust_name;
                        salesData.custAccount = data.cust_account;
                        salesData.invoiceAccount = data.cust_account;
                        salesData.deliveryAddress = data.deilvery_address;
                        salesData.custGroup = data.cust_group;
                        salesData.invoiceDate = data.order_date;
                        salesData.currencyCode = data.currency_code;
                        salesData.payment = data.payment_terms;
                        salesData.priceGroupId = data.price_group_id;
                        salesData.inventLocationId = data.invent_location_id.trim();
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(salesData.invoiceAccount)];
                    case 1:
                        custAccount = _a.sent();
                        customer = custAccount ? custAccount : {};
                        salesData.salesmanId = customer.salesmanid;
                        salesData.taxGroup = data.tax_group;
                        salesData.amount = data.gross_amount;
                        salesData.disc = data.total_disc;
                        salesData.vatamount = data.total_vat_amount;
                        salesData.netAmount = data.net_amount;
                        salesData.dataareaid = data.data_area_id;
                        salesLine = [];
                        data.agentOrderLines.map(function (v) {
                            var line = {};
                            line.salesId = v.purch_id;
                            line.custAccount = v.cust_account;
                            line.lineNum = v.line_num;
                            line.itemid = v.item_id;
                            line.name = v.name;
                            line.configId = v.config_id;
                            line.inventsizeid = v.invent_size_id;
                            line.taxGroup = v.tax_group;
                            line.taxItemGroup = v.tax_item_group;
                            line.salesprice = v.unit_price;
                            line.salesQty = parseInt(v.qty);
                            line.lineTotalDisc = v.line_disc;
                            line.lineAmount = v.line_amount;
                            line.vat = v.line_vat_percent;
                            line.vatamount = v.line_vat;
                            line.currencyCode = v.currency_code;
                            line.dataareaid = salesData.dataareaid;
                            line.inventLocationId = salesData.inventLocationId;
                            salesLine.push(line);
                        });
                        return [4 /*yield*/, App_1.App.getItemNamesInSalesLines(salesLine, this.inventtableDAO)];
                    case 2:
                        _a.sent();
                        salesData.salesLine = salesLine;
                        return [2 /*return*/, salesData];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.saveAgentOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!(data.inventLocationId.trim() == this.sessionInfo.inventlocationid)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.salesTableDAO.findOne({ interCompanyOriginalSalesId: data.salesId })];
                    case 1:
                        salesData = _a.sent();
                        if (!salesData) return [3 /*break*/, 2];
                        throw { status: 0, message: "ALREADY_RECEIVED" };
                    case 2:
                        salesData = data;
                        salesData.interCompanyOriginalSalesId = data.salesId;
                        salesData.status = "SAVED";
                        salesData.transkind = "SALESORDER";
                        delete salesData.salesId;
                        this.salesTableService.sessionInfo = this.sessionInfo;
                        salesData.inventLocationId = data.inventLocationId;
                        return [4 /*yield*/, this.salesTableService.save(salesData)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, { status: 1, id: salesData.salesId, message: Props_1.Props.SAVED_SUCCESSFULLY }];
                    case 4: return [3 /*break*/, 6];
                    case 5: throw { status: 0, message: "ORDER_NOT_RELATED_TO_THIS_STORE" };
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_7 = _a.sent();
                        throw error_7;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.getSalesid = function (type, item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, hashString, date, prevYear, year, salesId, error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 36, , 37]);
                        data = void 0;
                        _a = type;
                        switch (_a) {
                            case "SALESQUOTATION": return [3 /*break*/, 1];
                            case "SALESORDER": return [3 /*break*/, 3];
                            case "RESERVED": return [3 /*break*/, 5];
                            case "DESIGNERSERVICE": return [3 /*break*/, 7];
                            case "RETURNORDER": return [3 /*break*/, 9];
                            case "DESIGNERSERVICERETURN": return [3 /*break*/, 11];
                            case "INVENTORYMOVEMENT": return [3 /*break*/, 13];
                            case "TRANSFERORDER": return [3 /*break*/, 15];
                            case "ORDERSHIPMENT": return [3 /*break*/, 17];
                            case "ORDERRECEIVE": return [3 /*break*/, 19];
                            case "PURCHASEREQUEST": return [3 /*break*/, 21];
                            case "PURCHASEORDER": return [3 /*break*/, 23];
                            case "PURCHASERETURN": return [3 /*break*/, 25];
                            case "PURCHASERETURN": return [3 /*break*/, 27];
                            case "PACKINGSLIP": return [3 /*break*/, 29];
                        }
                        return [3 /*break*/, 31];
                    case 1: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESQUOTATION", this.sessionInfo.inventlocationid)];
                    case 2:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 3: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESORDER", this.sessionInfo.inventlocationid)];
                    case 4:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 5: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESORDER", this.sessionInfo.inventlocationid)];
                    case 6:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 7: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESORDER", this.sessionInfo.inventlocationid)];
                    case 8:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 9: return [4 /*yield*/, this.rawQuery.getNumberSequence("RETURNORDER", this.sessionInfo.inventlocationid)];
                    case 10:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 11: return [4 /*yield*/, this.rawQuery.getNumberSequence("RETURNORDER", this.sessionInfo.inventlocationid)];
                    case 12:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 13: return [4 /*yield*/, this.rawQuery.getNumberSequence("INVENTORYMOVEMENT", this.sessionInfo.inventlocationid)];
                    case 14:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 15: return [4 /*yield*/, this.rawQuery.getNumberSequence("TRANSFERORDER", this.sessionInfo.inventlocationid)];
                    case 16:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 17: return [4 /*yield*/, this.rawQuery.getNumberSequence("ORDERSHIPMENT", this.sessionInfo.inventlocationid)];
                    case 18:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 19: return [4 /*yield*/, this.rawQuery.getNumberSequence("ORDERRECEIVE", this.sessionInfo.inventlocationid)];
                    case 20:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 21: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASEREQUEST", this.sessionInfo.inventlocationid)];
                    case 22:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 23: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASEORDER", this.sessionInfo.inventlocationid)];
                    case 24:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 25: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASERETURN", this.sessionInfo.inventlocationid)];
                    case 26:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 27: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASERETURN", this.sessionInfo.inventlocationid)];
                    case 28:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 29: return [4 /*yield*/, this.rawQuery.getNumberSequence("PACKINGSLIP", this.sessionInfo.inventlocationid)];
                    case 30:
                        data = _b.sent();
                        return [3 /*break*/, 32];
                    case 31: throw { status: 0, message: "TRANSKIND_REQUIRED" };
                    case 32:
                        if (!(data && data.format)) return [3 /*break*/, 34];
                        hashString = data.format.slice(data.format.indexOf("#"), data.format.lastIndexOf("#") + 1);
                        date = new Date(data.lastmodifieddate).toLocaleString();
                        prevYear = new Date(data.lastmodifieddate).getFullYear().toString().substr(2, 2);
                        year = new Date(App_1.App.DateNow()).getFullYear().toString().substr(2, 2);
                        data.nextrec = prevYear == year ? data.nextrec : "00001";
                        if (data.nextrec == 1 || data.nextrec == "1") {
                            data.nextrec = "00001";
                        }
                        salesId = data.format.replace(hashString, year) + "-" + data.nextrec;
                        item.numberSequenceGroup = data.numbersequence;
                        item.isInsert = true;
                        return [4 /*yield*/, this.rawQuery.updateNumberSequence(data.numbersequence, data.nextrec)];
                    case 33:
                        _b.sent();
                        return [2 /*return*/, salesId];
                    case 34: throw { status: 0, message: "CANNOT_FIND_SEQUENCE_FORMAT_FROM_NUMBER_SEQUENCE_TABLE" };
                    case 35: return [3 /*break*/, 37];
                    case 36:
                        error_8 = _b.sent();
                        if (error_8 == {}) {
                            error_8 = { status: 0, message: "SERVER_SIDE_ERROR" };
                        }
                        throw error_8;
                    case 37: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseOrderFromAxaptaService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_9;
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
                        error_9 = _a.sent();
                        throw { status: 0, message: error_9 };
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PurchaseOrderFromAxaptaService;
}());
exports.PurchaseOrderFromAxaptaService = PurchaseOrderFromAxaptaService;
