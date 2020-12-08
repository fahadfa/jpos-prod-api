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
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("../../utils/App");
var SalesTable_1 = require("../../entities/SalesTable");
var Custtable_1 = require("../../entities/Custtable");
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var SalesLineDAO_1 = require("../repos/SalesLineDAO");
var CusttableDAO_1 = require("../repos/CusttableDAO");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var ColorsDAO_1 = require("../repos/ColorsDAO");
var RawQuery_1 = require("../common/RawQuery");
var typeorm_1 = require("typeorm");
var Props_1 = require("../../constants/Props");
var Overdue_1 = require("../../entities/Overdue");
var OverDueDAO_1 = require("../repos/OverDueDAO");
var VisitCustomerService_1 = require("./VisitCustomerService");
var VisitCustomer_1 = require("../../entities/VisitCustomer");
var DesignerserviceRepository_1 = require("../repos/DesignerserviceRepository");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var SalesOrderTokensDAO_1 = require("../repos/SalesOrderTokensDAO");
var RedeemService_1 = require("../services/RedeemService");
var Log_1 = require("../../utils/Log");
var typeorm_2 = require("typeorm");
var moment = require("moment");
// to generate uuid for salesline data
var uuid = require("uuid");
var Sms_1 = require("../../utils/Sms");
var SalesLine_1 = require("../../entities/SalesLine");
var Designerservice_1 = require("../../entities/Designerservice");
var InventTrans_1 = require("../../entities/InventTrans");
var SalesTableService = /** @class */ (function () {
    function SalesTableService() {
        this.salesOrderTokensDAO = new SalesOrderTokensDAO_1.SalesOrderTokensDAO();
        this.colorsDAO = new ColorsDAO_1.ColorsDAO();
        this.salestableDAO = new SalesTableDAO_1.SalesTableDAO();
        this.salesLineDAO = new SalesLineDAO_1.SalesLineDAO();
        this.usergroupconfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.custtableDAO = new CusttableDAO_1.CusttableDAO();
        this.overDueDAO = new OverDueDAO_1.OverDueDAO();
        this.visitCustomerService = new VisitCustomerService_1.VisitCustomerService();
        this.designerServiceDAO = new DesignerserviceRepository_1.DesignerserviceRepository();
        this.visitCustomerService.sessionInfo = this.sessionInfo;
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.updateInventoryService.sessionInfo = this.sessionInfo;
        this.redeemService = new RedeemService_1.RedeemService();
        this.db = typeorm_1.getManager();
    }
    SalesTableService.prototype.entity = function (id, type) {
        if (type === void 0) { type = null; }
        return __awaiter(this, void 0, void 0, function () {
            var data, promiseList, _a, condition, sabicCustomers, salesLine, _i, salesLine_1, item, baseSizeBatchesList_1, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 15, , 16]);
                        return [4 /*yield*/, this.salestableDAO.entity(id.toUpperCase())];
                    case 1:
                        data = _b.sent();
                        if (!data) {
                            throw { message: "ORDER_NOT_FOUND" };
                        }
                        return [4 /*yield*/, this.calData(data)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.getcustomer(data)];
                    case 3:
                        _a = [
                            _b.sent()
                        ];
                        return [4 /*yield*/, this.getpainter(data)];
                    case 4:
                        _a = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, this.getsalesman(data)];
                    case 5:
                        _a = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, this.workflowstatus(data)];
                    case 6:
                        promiseList = _a.concat([
                            _b.sent()
                        ]);
                        return [4 /*yield*/, this.rawQuery.workflowconditions(this.sessionInfo.usergroupconfigid)];
                    case 7:
                        condition = _b.sent();
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 8:
                        _b.sent();
                        data.custAccount = data.custAccount ? data.custAccount.trim() : null;
                        data.customer = data.customer ? data.customer : {};
                        data.painter = data.painter ? data.painter : {};
                        data.instantDiscChecked = data.instantDiscChecked ? data.instantDiscChecked : false;
                        data.voucherDiscChecked = data.voucherDiscChecked ? data.voucherDiscChecked : false;
                        data.originalPrinted = data.originalPrinted ? data.originalPrinted : false;
                        data.deleted = data.deleted ? data.deleted : false;
                        data.designServiceRedeemAmount = data.designServiceRedeemAmount ? parseFloat(data.designServiceRedeemAmount) : 0;
                        sabicCustomers = this.sessionInfo.sabiccustomers
                            ? this.sessionInfo.sabiccustomers
                                .trim()
                                .split(",")
                                .map(function (d) { return "'" + d + "'"; })
                                .join(",")
                            : [];
                        if (data.transkind == "RETURNORDER") {
                            if (condition.approvalRequired) {
                                if (data.designServiceRedeemAmount > 0) {
                                    data.sendForApproval = true;
                                }
                                else if ([1, 2].includes(data.customer.custtype) &&
                                    (condition.rmApprovalRequired || condition.raApprovalRequired)) {
                                    data.sendForApproval = true;
                                }
                                else {
                                    data.sendForApproval = false;
                                }
                            }
                            else {
                                data.sendForApproval = true;
                            }
                        }
                        else if (data.transkind == "INVENTORYMOVEMENT") {
                            if (data.movementType && data.movementType.id == 10) {
                                data.sendForApproval = false;
                            }
                            else {
                                data.sendForApproval = true;
                            }
                        }
                        else if (data.transkind == "SALESORDER" && sabicCustomers.includes(data.custAccount)) {
                            data.sendForApproval = true;
                        }
                        else {
                            data.sendForApproval = true;
                        }
                        data.deleted = data.deleted ? data.deleted : false;
                        data.isCash = data.isCash ? data.isCash : false;
                        data.vatamount = data.vatamount ? parseFloat(data.vatamount) : 0;
                        data.movementType = data.movementType ? data.movementType : {};
                        salesLine = data.salesLine;
                        return [4 /*yield*/, this.allocateSalesLineData(salesLine)];
                    case 9:
                        _b.sent();
                        salesLine.sort(function (a, b) {
                            var lineA = a.lineNum, lineB = b.lineNum;
                            if (lineA < lineB)
                                //sort string ascending
                                return -1;
                            if (lineA > lineB)
                                return 1;
                            return 0; //default return value (no sorting)
                        });
                        _i = 0, salesLine_1 = salesLine;
                        _b.label = 10;
                    case 10:
                        if (!(_i < salesLine_1.length)) return [3 /*break*/, 13];
                        item = salesLine_1[_i];
                        item.product = item.size ? item.size.product : {};
                        item.size = item.size ? item.size : {};
                        delete item.size.product;
                        if (!((data.transkind == "TRANSFERORDER" && data.custAccount == this.sessionInfo.inventlocationid) ||
                            (data.transkind == "SALESORDER" && data.status == "SAVED") ||
                            (data.transkind == "ORDERSHIPMENT" &&
                                data.status != "POSTED" &&
                                data.inventLocationId == this.sessionInfo.inventlocationid))) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.inventoryOnHandCheck(item, data.transkind, data.custAccount)];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 10];
                    case 13: return [4 /*yield*/, this.rawQuery.getBaseSizeBatchesList(id)];
                    case 14:
                        baseSizeBatchesList_1 = _b.sent();
                        console.log(baseSizeBatchesList_1);
                        if (data.transkind == "SALESORDER" ||
                            data.transkind == "TRANSFERORDER" ||
                            data.transkind == "ORDERSHIPMENT" ||
                            data.transkind == "ORDERRECEIVE" ||
                            data.transkind == "INVENTORYMOVEMENT") {
                            salesLine.map(function (item) {
                                item.batches = baseSizeBatchesList_1.filter(function (v) {
                                    return v.itemid.toLowerCase() == item.itemid.toLowerCase() &&
                                        v.configid.toLowerCase() == item.configId.toLowerCase() &&
                                        v.inventsizeid.toLowerCase() == item.inventsizeid.toLowerCase() &&
                                        v.saleslineid == item.id;
                                });
                            });
                        }
                        if (type == "mobile") {
                            delete data.salesLine;
                            data.selectedItems = salesLine;
                        }
                        else {
                            delete data.salesLine;
                            data.salesLine = salesLine;
                        }
                        console.log("======================================================", data.painter);
                        return [2 /*return*/, data];
                    case 15:
                        error_1 = _b.sent();
                        throw error_1;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.getcustomer = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = data;
                        return [4 /*yield*/, this.custtableDAO.entity(data.custAccount)];
                    case 1:
                        _a.customer = _b.sent();
                        data.customer = data.customer ? data.customer : {};
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.getpainter = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = data;
                        return [4 /*yield*/, this.custtableDAO.entity(data.painter)];
                    case 1:
                        _a.painter = _b.sent();
                        data.painter = data.painter ? data.painter : {};
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.getsalesman = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = data;
                        return [4 /*yield*/, this.rawQuery.salesman(data.salesmanId)];
                    case 1:
                        _a.salesmanId = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.workflowstatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var workFlowStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(data.status != "PAID" && data.status != "POSTED" && data.status != "PRINTED")) return [3 /*break*/, 2];
                        data = data ? data : {};
                        return [4 /*yield*/, this.rawQuery.workflowstatus(data.salesId)];
                    case 1:
                        workFlowStatus = _a.sent();
                        data.status = workFlowStatus ? workFlowStatus.status : data.status;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.ecommerceEntity = function (id, type) {
        if (type === void 0) { type = null; }
        return __awaiter(this, void 0, void 0, function () {
            var data, tokenData, salesLine, _i, salesLine_2, item, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.salestableDAO.entity(id.toUpperCase())];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw { message: "ORDER_NOT_FOUND" };
                        }
                        return [4 /*yield*/, this.calData(data)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.rawQuery.getSalesToken(id.toUpperCase())];
                    case 3:
                        tokenData = _a.sent();
                        data.paymentStatus = data.status == "PAID" || data.status == "POSTED" ? true : false;
                        data.custAccount = data.custAccount ? data.custAccount.trim() : null;
                        // data.customer = await this.custtableDAO.entity(data.custAccount);
                        data.customer = data.customer ? data.customer : {};
                        data.painter = data.painter ? data.painter : {};
                        data.instantDiscChecked = data.instantDiscChecked ? data.instantDiscChecked : false;
                        data.voucherDiscChecked = data.voucherDiscChecked ? data.voucherDiscChecked : false;
                        data.originalPrinted = data.originalPrinted ? data.originalPrinted : false;
                        data.deleted = data.deleted ? data.deleted : false;
                        data.designServiceRedeemAmount = data.designServiceRedeemAmount ? parseFloat(data.designServiceRedeemAmount) : 0;
                        data.isMovementIn = data.isMovementIn ? data.isMovementIn : false;
                        data.deleted = data.deleted ? data.deleted : false;
                        data.isCash = data.isCash ? data.isCash : false;
                        data.vatamount = data.vatamount ? parseFloat(data.vatamount) : 0;
                        data.movementType = data.movementType ? data.movementType : {};
                        data.authToken = tokenData.authToken;
                        salesLine = data.salesLine;
                        return [4 /*yield*/, this.allocateSalesLineData(salesLine)];
                    case 4:
                        _a.sent();
                        salesLine.sort(function (a, b) {
                            var lineA = a.lineNum, lineB = b.lineNum;
                            if (lineA < lineB)
                                //sort string ascending
                                return -1;
                            if (lineA > lineB)
                                return 1;
                            return 0; //default return value (no sorting)
                        });
                        for (_i = 0, salesLine_2 = salesLine; _i < salesLine_2.length; _i++) {
                            item = salesLine_2[_i];
                            item.product = item.size ? item.size.product : {};
                            item.size = item.size ? item.size : {};
                            delete item.size.product;
                        }
                        delete data.salesLine;
                        salesLine.map(function (v) {
                            _this.calItem(v);
                        });
                        data.salesLine = salesLine;
                        return [2 /*return*/, data];
                    case 5:
                        error_2 = _a.sent();
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.allocateSalesLineData = function (salesLine) {
        salesLine.map(function (v) {
            v.lineNum = v.lineNum ? parseInt(v.lineNum) : 0;
            v.salesprice = v.salesprice ? parseFloat(v.salesprice) : 0;
            v.salesQty = v.salesQty ? parseInt(v.salesQty) : 0;
            v.lineAmount = v.lineAmount ? parseFloat(v.lineAmount) : 0;
            v.salesUnit = v.salesUnit ? parseFloat(v.salesUnit) : 0;
            v.netAmount = v.netAmount ? parseFloat(v.netAmount) : 0;
            v.qtyOrdered = v.qtyOrdered ? parseFloat(v.qtyOrdered) : 0;
            v.remainSalesPhysical = v.remainSalesPhysical ? parseFloat(v.remainSalesPhysical) : 0;
            v.remainSalesFinancial = v.remainSalesFinancial ? parseFloat(v.remainSalesFinancial) : 0;
            v.lineTotalDisc = v.lineTotalDisc ? parseFloat(v.lineTotalDisc) : 0;
            v.supplMultipleQty = v.supplMultipleQty ? parseFloat(v.supplMultipleQty) : 0;
            v.supplFreeQty = v.supplFreeQty ? parseFloat(v.supplFreeQty) : 0;
            v.multilndisc = v.multilndisc ? parseFloat(v.multilndisc) : 0;
            v.multilnPercent = v.multilnPercent ? parseFloat(v.multilnPercent) : 0;
            v.endDisc = v.endDisc ? parseFloat(v.endDisc) : 0;
            v.enddiscamt = v.enddiscamt ? parseFloat(v.enddiscamt) : 0;
            v.colorantprice = v.colorantprice ? parseFloat(v.colorantprice) : 0;
            v.totalReturnedQuantity = v.totalReturnedQuantity ? parseFloat(v.totalReturnedQuantity) : 0;
            v.totalSettledAmount = v.totalSettledAmount ? parseFloat(v.totalSettledAmount) : 0;
            v.vatamount = v.vatamount ? parseFloat(v.vatamount) : 0;
            v.vat = v.vat ? parseFloat(v.vat) : 0;
            v.voucherdiscamt = v.voucherdiscamt ? parseFloat(v.voucherdiscamt) : 0;
            v.voucherdiscpercent = v.voucherdiscpercent ? parseFloat(v.voucherdiscpercent) : 0;
            if (v.batch) {
                v.batch.map(function (j) {
                    j.quantity = parseInt(j.quantity);
                });
            }
            v.appliedDiscounts = v.appliedDiscounts ? v.appliedDiscounts : [];
            v.appliedDiscounts.map(function (value) {
                value.percentage = value.percentage ? parseFloat(value.percentage) : 0;
                value.discountAmount = value.discountAmount ? parseFloat(value.discountAmount) : 0;
            });
        });
    };
    SalesTableService.prototype.designerServiceEntity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, salesLine, _i, salesLine_3, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salestableDAO.entity(id.toUpperCase())];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw { message: "ORDER_NOT_FOUND" };
                        }
                        return [4 /*yield*/, this.calData(data)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.workflowstatus(data)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.salesLineDAO.getDesignerServiceLines(id)];
                    case 4:
                        salesLine = _a.sent();
                        _i = 0, salesLine_3 = salesLine;
                        _a.label = 5;
                    case 5:
                        if (!(_i < salesLine_3.length)) return [3 /*break*/, 8];
                        item = salesLine_3[_i];
                        return [4 /*yield*/, this.calItem(item)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8:
                        data.salesLine = salesLine;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    SalesTableService.prototype.inventoryOnHandCheck = function (item, transkind, custAccount) {
        return __awaiter(this, void 0, void 0, function () {
            var inventory, availabilty;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rawQuery.inventoryOnHand({
                            inventlocationid: custAccount == this.sessionInfo.inventlocationid ? custAccount : this.sessionInfo.inventlocationid,
                            itemId: item.itemid,
                            configid: item.color ? item.color.code : null,
                            inventsizeid: item.size.code,
                        })];
                    case 1:
                        inventory = _a.sent();
                        availabilty = 0;
                        inventory.forEach(function (element) {
                            availabilty += parseInt(element.availabilty);
                        });
                        //console.log("--------------------------------------------", availabilty);
                        if (availabilty > 0) {
                            // item.batches = inventory;
                            //console.log("--------------------------------------------", transkind, item.status);
                            if (parseInt(item.salesQty) > availabilty && transkind == "SALESORDER") {
                                item.availableQuantity = availabilty;
                                item.adjustedquantity = item.salesQty - availabilty;
                            }
                            else if (parseInt(item.salesQty) > availabilty && transkind == "TRANSFERORDER") {
                                if (item.status == "REQUESTED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.availableQuantity = availabilty;
                                }
                                else if (item.status == "APPROVED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.approvedQuantity = item.qtyOrdered;
                                }
                                else if (item.status == "SHIPPED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.approvedQuantity = item.qtyOrdered;
                                    item.shippedQuantity = item.remainSalesPhysical;
                                }
                                else if (item.status == "RECEIVED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.approvedQuantity = item.qtyOrdered;
                                    item.shippedQuantity = item.remainSalesPhysical;
                                    item.receivedQuantity = item.remainSalesFinancial;
                                }
                                else {
                                    item.requestedQuantity = item.salesQty;
                                }
                            }
                            else {
                                if (transkind == "TRANSFERORDER" && (item.status == "REQUESTED" || item.status == null)) {
                                    item.requestedQuantity = item.salesQty;
                                    item.availableQuantity = availabilty;
                                }
                                else {
                                    item.availableQuantity = availabilty;
                                    item.adjustedquantity = 0;
                                }
                            }
                        }
                        else {
                            if (transkind == "TRANSFERORDER") {
                                if (item.status == "REQUESTED" || item.status == null) {
                                    item.requestedQuantity = item.salesQty;
                                    item.availableQuantity = availabilty;
                                    //console.log("--------------------------------------------", availabilty);
                                }
                                else if (item.status == "APPROVED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.approvedQuantity = item.qtyOrdered;
                                }
                                else if (item.status == "SHIPPED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.approvedQuantity = item.qtyOrdered;
                                    item.shippedQuantity = item.remainSalesPhysical;
                                }
                                else if (item.status == "RECEIVED") {
                                    item.requestedQuantity = item.salesQty;
                                    item.approvedQuantity = item.qtyOrdered;
                                    item.shippedQuantity = item.remainSalesPhysical;
                                    item.receivedQuantity = item.remainSalesFinancial;
                                }
                                else {
                                    item.requestedQuantity = item.salesQty;
                                }
                            }
                            else {
                                item.availableQuantity = 0;
                                item.adjustedquantity = item.salesQty;
                            }
                        }
                        return [4 /*yield*/, item];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesTableService.prototype.search = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, newData_1, error_3;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        switch (reqData.type) {
                            case "quotation":
                                reqData.transkind = "('SALESQUOTATION')";
                                break;
                            case "movement":
                                reqData.transkind = "('INVENTORYMOVEMENT')";
                                break;
                            case "salesorder":
                                reqData.transkind = "('SALESORDER')";
                                break;
                            case "returnorder":
                                reqData.transkind = "('RETURNORDER')";
                                break;
                            case "transferorder":
                                reqData.transkind = "('TRANSFERORDER', 'ORDERSHIPMENT', 'ORDERRECEIVE')";
                                break;
                            case "ordershipment":
                                reqData.transkind = "('ORDERSHIPMENT')";
                                break;
                            case "orderrecieve":
                                reqData.transkind = "('ORDERRECEIVE')";
                                break;
                            case "purchaseorder":
                                reqData.transkind = "('PURCHASEORDER', 'PURCHASERETURN')";
                                break;
                            case "purchaseorderreturn":
                                reqData.transkind = "('PURCHASERETURN')";
                                break;
                            default:
                                reqData.transkind = null;
                        }
                        if (!reqData.transkind) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.salestableDAO.searchorders(reqData, this.sessionInfo.inventlocationid)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.salestableDAO.search(reqData, null)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        data = _a;
                        newData_1 = [];
                        data.forEach(function (item) {
                            if (item.transkind == "ORDERSHIPMENT" || item.transkind == "TRANSFERORDER") {
                                var fromWarehouseEn = item.toWarehouseEn;
                                var fromWarehouseAr = item.toWarehouseAr;
                                var toWarehouseAr = item.fromWarehouseAr;
                                var toWarehouseEn = item.fromWarehouseEn;
                                item.toWarehouseId = item.custAccount;
                                item.fromWarehouseId = item.inventLocationId;
                                item.fromWarehouseEn = fromWarehouseEn;
                                item.fromWarehouseAr = fromWarehouseAr;
                                item.toWarehouseAr = toWarehouseAr;
                                item.toWarehouseEn = toWarehouseEn;
                            }
                            if (item.transkind == "ORDERSHIPMENT") {
                                if (item.inSalesid != null && item.slSalesId != null) {
                                    if (item.custAccount == _this.sessionInfo.inventlocationid && item.status == "POSTED") {
                                        newData_1.push(item);
                                    }
                                    else if (item.inventLocationId == _this.sessionInfo.inventlocationid) {
                                        newData_1.push(item);
                                    }
                                    else if (item.jazeeraWarehouse == _this.sessionInfo.inventlocationid) {
                                        newData_1.push(item);
                                    }
                                }
                                else if (item.transkind == "TRANSFERORDER") {
                                    if (item.slSalesId != null) {
                                        if (item.custAccount == _this.sessionInfo.inventlocationid &&
                                            item.status != "CREATED" &&
                                            item.status != "SAVED") {
                                            newData_1.push(item);
                                        }
                                        else if (item.inventLocationId == _this.sessionInfo.inventlocationid) {
                                            newData_1.push(item);
                                        }
                                        else if (item.jazeeraWarehouse == _this.sessionInfo.inventlocationid) {
                                            newData_1.push(item);
                                        }
                                    }
                                }
                            }
                            else if (item.transkind == "PURCHASEORDER" || item.transkind == "PURCHASERETURN") {
                                console.log("=================", item);
                                if (item.jazeeraWarehouse == _this.sessionInfo.inventlocationid && item.status == "POSTED") {
                                    newData_1.push(item);
                                }
                                else if (item.inventLocationId == _this.sessionInfo.inventlocationid) {
                                    newData_1.push(item);
                                }
                            }
                            else {
                                if (item.custAccount == _this.sessionInfo.inventlocationid &&
                                    item.status != "CREATED" &&
                                    item.status != "SAVED") {
                                    newData_1.push(item);
                                }
                                else if (item.inventLocationId == _this.sessionInfo.inventlocationid) {
                                    newData_1.push(item);
                                }
                                else if (item.jazeeraWarehouse == _this.sessionInfo.inventlocationid) {
                                    newData_1.push(item);
                                }
                            }
                        });
                        return [2 /*return*/, newData_1];
                    case 5:
                        error_3 = _b.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.paginate = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(reqData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        switch (reqData.type) {
                            case "quotation":
                                reqData.transkind = "('SALESQUOTATION')";
                                break;
                            case "movement":
                                reqData.transkind = "('INVENTORYMOVEMENT')";
                                break;
                            case "salesorder":
                                reqData.transkind = "('SALESORDER')";
                                break;
                            case "returnorder":
                                reqData.transkind = "('RETURNORDER')";
                                break;
                            case "transferorder":
                                reqData.transkind = "('TRANSFERORDER', 'ORDERSHIPMENT', 'ORDERRECEIVE')";
                                break;
                            case "ordershipment":
                                reqData.transkind = "('ORDERSHIPMENT')";
                                break;
                            case "orderreceive":
                                reqData.transkind = "('ORDERRECEIVE')";
                                break;
                            case "purchaseorder":
                                reqData.transkind = "('PURCHASEORDER')";
                                break;
                            case "designerservice":
                                reqData.transkind = "('DESIGNERSERVICE')";
                                break;
                            case "designerservicereturn":
                                reqData.transkind = "('DESIGNERSERVICERETURN')";
                                break;
                        }
                        return [4 /*yield*/, this.salestableDAO.pagination(reqData, this.sessionInfo.inventlocationid)];
                    case 2:
                        data = _a.sent();
                        // data.map((v: any) => {});
                        return [2 /*return*/, data];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 39, , 40]);
                        if (!(reqData.salesLine && reqData.salesLine.length > 0)) return [3 /*break*/, 37];
                        _a = reqData.transkind;
                        switch (_a) {
                            case "SALESQUOTATION": return [3 /*break*/, 1];
                            case "SALESORDER": return [3 /*break*/, 3];
                            case "RESERVED": return [3 /*break*/, 5];
                            case "RETURNORDER": return [3 /*break*/, 7];
                            case "DESIGNERSERVICERETURN": return [3 /*break*/, 9];
                            case "INVENTORYMOVEMENT": return [3 /*break*/, 11];
                            case "TRANSFERORDER": return [3 /*break*/, 13];
                            case "ORDERSHIPMENT": return [3 /*break*/, 15];
                            case "ORDERRECEIVE": return [3 /*break*/, 19];
                            case "PURCHASEREQUEST": return [3 /*break*/, 23];
                            case "PURCHASEORDER": return [3 /*break*/, 25];
                            case "PURCHASERETURN": return [3 /*break*/, 27];
                            case "DESIGNERSERVICE": return [3 /*break*/, 29];
                        }
                        return [3 /*break*/, 35];
                    case 1: return [4 /*yield*/, this.saveQuotation(reqData)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, this.saveSalesOrder(reqData)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, this.saveSalesOrder(reqData)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [4 /*yield*/, this.saveReturnOrder(reqData)];
                    case 8: return [2 /*return*/, _b.sent()];
                    case 9: return [4 /*yield*/, this.saveReturnOrder(reqData)];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11: return [4 /*yield*/, this.saveInventoryMovementOrder(reqData)];
                    case 12: return [2 /*return*/, _b.sent()];
                    case 13: return [4 /*yield*/, this.saveQuotation(reqData)];
                    case 14: return [2 /*return*/, _b.sent()];
                    case 15:
                        if (!(reqData.interCompanyOriginalSalesId && reqData.interCompanyOriginalSalesId != "")) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.saveOrderShipment(reqData)];
                    case 16: return [2 /*return*/, _b.sent()];
                    case 17: throw { message: "INVOICE_ID_REQUIRED" };
                    case 18: return [3 /*break*/, 36];
                    case 19:
                        if (!(reqData.interCompanyOriginalSalesId && reqData.interCompanyOriginalSalesId != "")) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.saveOrderReceive(reqData)];
                    case 20: return [2 /*return*/, _b.sent()];
                    case 21: throw { message: "INVOICE_ID_REQUIRED" };
                    case 22: return [3 /*break*/, 36];
                    case 23: return [4 /*yield*/, this.saveQuotation(reqData)];
                    case 24: return [2 /*return*/, _b.sent()];
                    case 25: return [4 /*yield*/, this.saveQuotation(reqData)];
                    case 26: 
                    // let custAccount = await this.rawQuery.get_vedor_related_custaccount(reqData.custAccount);
                    //console.log(custAccount);
                    // if (custAccount) {
                    return [2 /*return*/, _b.sent()];
                    case 27: return [4 /*yield*/, this.saveReturnOrder(reqData)];
                    case 28: return [2 /*return*/, _b.sent()];
                    case 29:
                        if (!(reqData.status == "PAID")) return [3 /*break*/, 33];
                        if (!(reqData.mobileNo && reqData.mobileNo != "" && reqData.mobileNo.length > 8)) return [3 /*break*/, 31];
                        return [4 /*yield*/, this.saveQuotation(reqData)];
                    case 30: return [2 /*return*/, _b.sent()];
                    case 31: throw { message: "PLEASE_ENTER_MOBILE_NUMBER" };
                    case 32: return [3 /*break*/, 35];
                    case 33: return [4 /*yield*/, this.saveQuotation(reqData)];
                    case 34: return [2 /*return*/, _b.sent()];
                    case 35: throw { message: "TRANSKIND_REQUIRED" };
                    case 36: return [3 /*break*/, 38];
                    case 37: throw { message: "INVALID_DATA" };
                    case 38: return [3 /*break*/, 40];
                    case 39:
                        error_5 = _b.sent();
                        throw error_5;
                    case 40: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.validate = function (item, salesLine) {
        return __awaiter(this, void 0, void 0, function () {
            var oldItem, statusData, salesIdExists, uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldItem = null;
                        if (!(!item.salesId || item.salesId == "" || item.salesId == "0")) return [3 /*break*/, 1];
                        item.salesId = null;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(item.transkind == "SALESORDER")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rawQuery.checkSalesStatus(item.salesId)];
                    case 2:
                        statusData = _a.sent();
                        console.log(statusData);
                        if (statusData.status == "PAID" || statusData.status == "POSTED" || statusData.status == "PRINTED") {
                            return [2 /*return*/, "ALREADY_PAID"];
                        }
                        _a.label = 3;
                    case 3:
                        if (!!item.salesId) return [3 /*break*/, 7];
                        item.dataareaid = this.sessionInfo.dataareaid;
                        item.deleted = false;
                        item.inventLocationId = item.inventLocationId ? item.inventLocationId : this.sessionInfo.inventlocationid;
                        item.warehouse = { inventLocationId: item.inventLocationId };
                        item.createdby = this.sessionInfo.userName;
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.countryCode = item.countryCode ? item.countryCode : 966;
                        salesIdExists = true;
                        _a.label = 4;
                    case 4:
                        if (!salesIdExists) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getSalesid(item.transkind, item)];
                    case 5:
                        uid = _a.sent();
                        return [4 /*yield*/, this.salestableDAO.findOne(uid)];
                    case 6:
                        oldItem = _a.sent();
                        if (oldItem) {
                            console.log(oldItem.salesId);
                        }
                        else {
                            item.salesId = uid;
                            salesIdExists = false;
                        }
                        return [3 /*break*/, 4];
                    case 7:
                        item.lastModifiedBy = this.sessionInfo.userName;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        if (item.cardAmount) {
                        }
                        if (item.cashAmount == "" || item.cashAmount == null) {
                            item.cashAmount = 0;
                        }
                        if (item.designServiceRedeemAmount == "" || item.designServiceRedeemAmount == null) {
                            item.designServiceRedeemAmount = 0;
                        }
                        if (item.cardAmount == "" || item.cardAmount == null) {
                            item.cardAmount = 0;
                        }
                        if (item.shippingAmount == "" || item.shippingAmount == null) {
                            item.shippingAmount = 0;
                        }
                        if (item.redeemAmount == "" || item.redeemAmount == null) {
                            item.redeemAmount = 0;
                        }
                        if (salesLine) {
                            salesLine.forEach(function (element) {
                                console.log(element.itemid, element.configId, element.inventsizeid, element.salesQty);
                                if (!element.itemid || !element.configId || !element.inventsizeid) {
                                    console.log(element.itemid, element.configId, element.inventsizeid, element.salesQty);
                                    throw { message: "INVALID_DATA" };
                                }
                            });
                        }
                        else {
                            console.log("=======================================");
                            throw { message: "INVALID_DATA" };
                        }
                        console.log(item.lastModifiedDate.toISOString());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SalesTableService.prototype.getSalesid = function (type, item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, hashString, date, prevYear, year, salesId, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 32, , 33]);
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
                        }
                        return [3 /*break*/, 27];
                    case 1: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESQUOTATION", this.sessionInfo.inventlocationid)];
                    case 2:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 3: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESORDER", this.sessionInfo.inventlocationid)];
                    case 4:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 5: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESORDER", this.sessionInfo.inventlocationid)];
                    case 6:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 7: return [4 /*yield*/, this.rawQuery.getNumberSequence("SALESORDER", this.sessionInfo.inventlocationid)];
                    case 8:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 9: return [4 /*yield*/, this.rawQuery.getNumberSequence("RETURNORDER", this.sessionInfo.inventlocationid)];
                    case 10:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 11: return [4 /*yield*/, this.rawQuery.getNumberSequence("RETURNORDER", this.sessionInfo.inventlocationid)];
                    case 12:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 13: return [4 /*yield*/, this.rawQuery.getNumberSequence("INVENTORYMOVEMENT", this.sessionInfo.inventlocationid)];
                    case 14:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 15: return [4 /*yield*/, this.rawQuery.getNumberSequence("TRANSFERORDER", this.sessionInfo.inventlocationid)];
                    case 16:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 17: return [4 /*yield*/, this.rawQuery.getNumberSequence("ORDERSHIPMENT", this.sessionInfo.inventlocationid)];
                    case 18:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 19: return [4 /*yield*/, this.rawQuery.getNumberSequence("ORDERRECEIVE", this.sessionInfo.inventlocationid)];
                    case 20:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 21: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASEREQUEST", this.sessionInfo.inventlocationid)];
                    case 22:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 23: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASEORDER", this.sessionInfo.inventlocationid)];
                    case 24:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 25: return [4 /*yield*/, this.rawQuery.getNumberSequence("PURCHASERETURN", this.sessionInfo.inventlocationid)];
                    case 26:
                        data = _b.sent();
                        return [3 /*break*/, 28];
                    case 27: throw { message: "TRANSKIND_REQUIRED" };
                    case 28:
                        if (!(data && data.format)) return [3 /*break*/, 30];
                        hashString = data.format.slice(data.format.indexOf("#"), data.format.lastIndexOf("#") + 1);
                        date = new Date(data.lastmodifieddate).toLocaleString();
                        console.log(date);
                        console.log(data);
                        prevYear = new Date(data.lastmodifieddate).getFullYear().toString().substr(2, 2);
                        year = new Date(App_1.App.DateNow()).getFullYear().toString().substr(2, 2);
                        data.nextrec = prevYear == year ? data.nextrec : "000001";
                        if (data.nextrec == 1 || data.nextrec == "1") {
                            data.nextrec = "000001";
                        }
                        salesId = data.format.replace(hashString, year) + "-" + data.nextrec;
                        //console.log(salesId);
                        item.numberSequenceGroup = data.numbersequence;
                        return [4 /*yield*/, this.rawQuery.updateNumberSequence(data.numbersequence, data.nextrec)];
                    case 29:
                        _b.sent();
                        return [2 /*return*/, salesId];
                    case 30: throw { message: "CANNOT_FIND_SEQUENCE_FORMAT_FROM_NUMBER_SEQUENCE_TABLE" };
                    case 31: return [3 /*break*/, 33];
                    case 32:
                        error_6 = _b.sent();
                        if (error_6 == {}) {
                            error_6 = { message: "SERVER_SIDE_ERROR" };
                        }
                        throw error_6;
                    case 33: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.onlineInvoicePaymentService = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, statusData, salesData, reqData, _i, _a, item, batches, _b, _c, v, batch, returnData, error_7;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.rawQuery.checkSalesStatus(data.orderId)];
                    case 4:
                        statusData = _d.sent();
                        if (statusData.status == "PAID" || statusData.status == "POSTED" || statusData.status == "PRINTED") {
                            throw "ALREADY_PAID";
                        }
                        return [4 /*yield*/, this.salestableDAO.entity(data.orderId)];
                    case 5:
                        salesData = _d.sent();
                        reqData = __assign({}, salesData);
                        reqData.status = "PAID";
                        reqData.paymentType = "ONLINE";
                        reqData.paymentStatus = true;
                        for (_i = 0, _a = reqData.salesLine; _i < _a.length; _i++) {
                            item = _a[_i];
                            batches = [];
                            for (_b = 0, _c = item.batch; _b < _c.length; _b++) {
                                v = _c[_b];
                                batch = {
                                    batchNo: v.batchNo,
                                    quantity: v.quantity,
                                };
                                batches.push(batch);
                            }
                            item.batches = batches;
                        }
                        returnData = __assign({}, reqData);
                        this.saveSalesOrderAfterOnlinePayment(reqData, queryRunner);
                        return [2 /*return*/, returnData];
                    case 6:
                        error_7 = _d.sent();
                        throw { message: error_7 };
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.convertToSalesOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, canConvert, colors, items, sizes, itemsInStock, itemString, reqData, customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salestableDAO.entity(data.salesId)];
                    case 1:
                        salesData = _a.sent();
                        canConvert = true;
                        colors = [];
                        items = [];
                        sizes = [];
                        salesData.salesLine.map(function (v) {
                            items.push("" + v.itemid), colors.push(v.configId), sizes.push(v.inventsizeid);
                        });
                        return [4 /*yield*/, this.rawQuery.checkItems(this.sessionInfo.inventlocationid, items, colors, sizes, data.salesId)];
                    case 2:
                        itemsInStock = _a.sent();
                        console.log("==========================", itemsInStock);
                        itemString = "";
                        salesData.salesLine.map(function (v) {
                            var index = itemsInStock.findIndex(function (value) {
                                return value.itemid.toLowerCase() == v.itemid.toLowerCase() &&
                                    value.configid.toLowerCase() == v.configId.toLowerCase() &&
                                    value.inventsizeid.toLowerCase() == v.inventsizeid.toLowerCase();
                            });
                            if (index >= 0) {
                                if (parseInt(v.salesQty) > parseInt(itemsInStock[index].qty)) {
                                    canConvert = canConvert == true ? false : false;
                                    itemString += v.itemid + ",";
                                }
                            }
                            else {
                                canConvert = canConvert == true ? false : false;
                                itemString += v.itemid + ",";
                            }
                        });
                        console.log(canConvert);
                        if (!canConvert) return [3 /*break*/, 6];
                        salesData.status = "CONVERTED";
                        return [4 /*yield*/, this.salestableDAO.save(salesData)];
                    case 3:
                        _a.sent();
                        salesData.interCompanyOriginalSalesId = salesData.salesId;
                        delete salesData.salesId;
                        reqData = __assign({}, salesData);
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(reqData.custAccount)];
                    case 4:
                        customer = _a.sent();
                        reqData.payment = customer.paymtermid;
                        reqData.transkind = "SALESORDER";
                        reqData.status = "CREATED";
                        reqData.message = "CONVERTED";
                        reqData.inventLocationId = this.sessionInfo.inventlocationid;
                        reqData.salesLine = salesData.salesLine;
                        return [4 /*yield*/, this.save(reqData)];
                    case 5:
                        data = _a.sent();
                        data.status = "CONVERTED";
                        return [2 /*return*/, data];
                    case 6: throw {
                        message: "CANNOT_CONVERT_TO_SALESORDER",
                    };
                }
            });
        });
    };
    SalesTableService.prototype.convertToPurchaseOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, reqData, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.salestableDAO.entity(data.salesId)];
                    case 1:
                        salesData = _b.sent();
                        //console.log(salesData);
                        salesData.status = "CONVERTED";
                        return [4 /*yield*/, this.salestableDAO.save(salesData)];
                    case 2:
                        _b.sent();
                        salesData.interCompanyOriginalSalesId = salesData.salesId;
                        delete salesData.salesId;
                        reqData = __assign({}, salesData);
                        reqData.transkind = "PURCHASEORDER";
                        reqData.message = "CONVERTED";
                        reqData.status = "CREATED";
                        _a = reqData.warehouse;
                        return [4 /*yield*/, this.sessionInfo.inventlocationid];
                    case 3:
                        _a.inventLocationId = _b.sent();
                        delete reqData.warehouse;
                        reqData.salesLine = salesData.salesLine;
                        return [4 /*yield*/, this.save(reqData)];
                    case 4:
                        data = _b.sent();
                        data.status = "CONVERTED";
                        return [2 /*return*/, data];
                }
            });
        });
    };
    SalesTableService.prototype.convertPurchaseOrderToSalesOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salesData, convertedData, canConvert, colors_1, items_1, sizes_1, itemString, reqData, custAccount, customer, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.salestableDAO.entity(data.salesId)];
                    case 1:
                        salesData = _a.sent();
                        //console.log(salesData);
                        salesData.status = "CONVERTED";
                        return [4 /*yield*/, this.rawQuery.salesTableInterCompanyOriginalData(data.salesId)];
                    case 2:
                        convertedData = _a.sent();
                        if (!(convertedData.length > 0)) return [3 /*break*/, 3];
                        throw { message: "ALREADY_CONVERTED", salesId: convertedData[0].salesid };
                    case 3:
                        canConvert = true;
                        colors_1 = [];
                        items_1 = [];
                        sizes_1 = [];
                        itemString = "";
                        salesData.salesLine.map(function (v) {
                            items_1.push(v.itemid), colors_1.push(v.configId), sizes_1.push(v.inventsizeid);
                        });
                        // let itemsInStock = await this.rawQuery.checkItems(this.sessionInfo.inventlocationid, items, colors, sizes);
                        // salesData.salesLine.map((v: any) => {
                        //   let index = itemsInStock.findIndex(
                        //     (value: any) =>
                        //       value.itemid.toLowerCase() == v.itemid.toLowerCase() &&
                        //       value.configid.toLowerCase() == v.configId.toLowerCase() &&
                        //       value.inventsizeid.toLowerCase() == v.inventsizeid.toLowerCase()
                        //   );
                        //   if (index >= 0) {
                        //     if (parseInt(v.salesQty) > parseInt(itemsInStock[index].qty)) {
                        //       canConvert = canConvert == true ? false : false;
                        //       itemString += `${v.itemid},`;
                        //     }
                        //   } else {
                        //     canConvert = canConvert == true ? false : false;
                        //     itemString += `${v.itemid},`;
                        //   }
                        // });
                        console.log(canConvert);
                        // if (canConvert) {
                        return [4 /*yield*/, this.salestableDAO.save(salesData)];
                    case 4:
                        // if (canConvert) {
                        _a.sent();
                        salesData.interCompanyOriginalSalesId = salesData.salesId;
                        delete salesData.salesId;
                        reqData = __assign({}, salesData);
                        reqData.transkind = "SALESORDER";
                        reqData.status = "CREATED";
                        reqData.inventLocationId = salesData.jazeeraWarehouse;
                        reqData.warehouse.inventLocationId = salesData.jazeeraWarehouse;
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(salesData.invoiceAccount)];
                    case 5:
                        custAccount = _a.sent();
                        if (!custAccount) return [3 /*break*/, 7];
                        customer = custAccount;
                        reqData.custAccount = custAccount.accountnum;
                        reqData.salesName = custAccount.name;
                        reqData.salesLine = salesData.salesLine;
                        reqData.payment = customer.paymtermid;
                        reqData.salesmanId = customer.salesmanid;
                        return [4 /*yield*/, this.save(reqData)];
                    case 6:
                        data = _a.sent();
                        console.log(reqData);
                        data.message = "CONVERTED";
                        return [2 /*return*/, data];
                    case 7: throw { message: "NO_VENDOR_FOR_CUSTOMER" };
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_8 = _a.sent();
                        throw { message: error_8 };
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.convertPurchaseReturnToReturnOrder = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var purchaseReturnData, purchaseOrderData, salesOrderData, batches, _i, batches_1, batch, reqData, salesLine, _loop_1, _a, salesLine_4, item, custAccount, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.salestableDAO.entity(data.salesId)];
                    case 1:
                        purchaseReturnData = _b.sent();
                        //console.log(purchaseReturnData);
                        purchaseReturnData.status = "CONVERTED";
                        return [4 /*yield*/, this.salestableDAO.save(purchaseReturnData)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.rawQuery.salesTableData(purchaseReturnData.interCompanyOriginalSalesId)];
                    case 3:
                        purchaseOrderData = _b.sent();
                        //console.log(purchaseOrderData);
                        purchaseOrderData = purchaseOrderData.length > 0 ? purchaseOrderData[0] : {};
                        if (!(purchaseOrderData == {})) return [3 /*break*/, 4];
                        throw { message: "TECHNICAL_ISSUE,_PLEASE_CONTACT_YOUR_TECHNICAL_TEAM" };
                    case 4: return [4 /*yield*/, this.rawQuery.salesTableInterCompanyOriginalData(purchaseOrderData.salesid, "SALESORDER")];
                    case 5:
                        salesOrderData = _b.sent();
                        salesOrderData = salesOrderData.length > 0 ? salesOrderData[0] : {};
                        purchaseReturnData.interCompanyOriginalSalesId = salesOrderData.salesid;
                        return [4 /*yield*/, this.inventTransDAO.findAll({
                                invoiceid: purchaseReturnData.salesId,
                            })];
                    case 6:
                        batches = _b.sent();
                        for (_i = 0, batches_1 = batches; _i < batches_1.length; _i++) {
                            batch = batches_1[_i];
                            delete batch.id;
                            batch.returnQuantity = Math.abs(batch.qty);
                            batch.transrefid = purchaseReturnData.interCompanyOriginalSalesId;
                        }
                        delete purchaseReturnData.salesId;
                        reqData = __assign({}, purchaseReturnData);
                        reqData.transkind = "RETURNORDER";
                        reqData.message = "CONVERTED";
                        reqData.status = "SAVED";
                        salesLine = purchaseReturnData.salesLine;
                        _loop_1 = function (item) {
                            //console.log(item);
                            var batch = batches.filter(function (v) { return v.itemid == item.itemid && v.inventsizeid == item.inventsizeid && v.configid == item.configId; });
                            //console.log(batch);
                            item.batches = batch;
                        };
                        //console.log(batches);
                        for (_a = 0, salesLine_4 = salesLine; _a < salesLine_4.length; _a++) {
                            item = salesLine_4[_a];
                            _loop_1(item);
                        }
                        reqData.inventLocationId = purchaseReturnData.jazeeraWarehouse;
                        reqData.warehouse.inventLocationId = purchaseReturnData.jazeeraWarehouse;
                        return [4 /*yield*/, this.rawQuery.get_vedor_related_custaccount(purchaseReturnData.custAccount)];
                    case 7:
                        custAccount = _b.sent();
                        //console.log(custAccount);
                        reqData.custAccount = custAccount;
                        reqData.salesLine = salesLine;
                        data.status = "CONVERTED";
                        return [2 /*return*/, data];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_9 = _b.sent();
                        throw { message: error_9 };
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.updateinventtransstatus = function (id, status, queryRunner) {
        if (status === void 0) { status = null; }
        if (queryRunner === void 0) { queryRunner = null; }
        return __awaiter(this, void 0, void 0, function () {
            var salesData, batches, _i, batches_2, item, returnData, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!queryRunner) return [3 /*break*/, 3];
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 11, 13, 15]);
                        return [4 /*yield*/, this.salestableDAO.entity(id)];
                    case 4:
                        salesData = _a.sent();
                        //console.log(salesData);
                        salesData.status = !status ? "SAVED" : status;
                        this.salestableDAO.save(salesData);
                        return [4 /*yield*/, this.inventTransDAO.findAll({ invoiceid: id })];
                    case 5:
                        batches = _a.sent();
                        _i = 0, batches_2 = batches;
                        _a.label = 6;
                    case 6:
                        if (!(_i < batches_2.length)) return [3 /*break*/, 9];
                        item = batches_2[_i];
                        item.reserveStatus = "UNRESERVED";
                        item.transactionClosed = false;
                        item.dateinvent = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(item, false, true, queryRunner)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 6];
                    case 9: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 10:
                        _a.sent();
                        returnData = {
                            id: id,
                            message: "UNRESERVED",
                            status: salesData.status,
                        };
                        //console.log(returnData);
                        return [2 /*return*/, returnData];
                    case 11:
                        error_10 = _a.sent();
                        console.log(error_10);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 12:
                        _a.sent();
                        throw error_10;
                    case 13: return [4 /*yield*/, queryRunner.release()];
                    case 14:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveQuotation = function (reqData, queryRunner) {
        if (queryRunner === void 0) { queryRunner = null; }
        return __awaiter(this, void 0, void 0, function () {
            var canCommitTransaction, salesLine, cond, customerRecords, customerRecord, defaultcustomer, salesTable, promiseList, _i, salesLine_5, item, taxItemGroup, designerServiceData, returnData, error_11;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canCommitTransaction = false;
                        if (!(queryRunner == null)) return [3 /*break*/, 3];
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        canCommitTransaction = true;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 14, 17, 20]);
                        salesLine = reqData.salesLine;
                        delete reqData.salesLine;
                        return [4 /*yield*/, this.validate(reqData, salesLine)];
                    case 4:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 13];
                        reqData.payment = reqData.transkind == "DESIGNERSERVICE" ? "CASH" : false;
                        reqData.status =
                            reqData.status == "CREATED" || reqData.status == "" || reqData.status == null ? "SAVED" : reqData.status;
                        reqData.salesType = reqData.salesType ? reqData.salesType : reqData.transkind == "TRANSFERORDER" ? 1 : null;
                        reqData.inventLocationId = this.sessionInfo.inventlocationid;
                        // let salesTable = await this.salestableDAO.save(reqData);
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        reqData.invoiceAccount = reqData.invoiceAccount ? reqData.invoiceAccount : reqData.custAccount;
                        return [4 /*yield*/, this.rawQuery.getCustomer(reqData.invoiceAccount, this.sessionInfo.defaultcustomerid)];
                    case 5:
                        customerRecords = _a.sent();
                        customerRecord = customerRecords.find(function (v) { return v.accountnum == reqData.invoiceAccount; });
                        defaultcustomer = customerRecords.find(function (v) { return v.accountnum == _this.sessionInfo.defaultcustomerid; });
                        customerRecord = customerRecord ? customerRecord : {};
                        defaultcustomer = defaultcustomer ? defaultcustomer : {};
                        reqData.salesmanId = customerRecord.salesmanid;
                        if (customerRecord.walkincustomer == true) {
                            reqData.salesmanId = defaultcustomer.salesmanid;
                            reqData.taxGroup = defaultcustomer.taxgroup;
                            reqData.priceGroupId = defaultcustomer.pricegroup;
                            reqData.custGroup = defaultcustomer.custgroup;
                            reqData.custAccount = defaultcustomer.accountnum;
                        }
                        else {
                            reqData.taxGroup = customerRecord.taxgroup;
                        }
                        reqData.linesCount = salesLine.length;
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData)];
                    case 6:
                        salesTable = _a.sent();
                        promiseList = [];
                        promiseList.push(this.salesLineDelete(reqData, queryRunner));
                        _i = 0, salesLine_5 = salesLine;
                        _a.label = 7;
                    case 7:
                        if (!(_i < salesLine_5.length)) return [3 /*break*/, 10];
                        item = salesLine_5[_i];
                        item.id = uuid();
                        item.salesId = reqData.salesId;
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.numberSequenceGroupId = this.seqNum;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        promiseList.push(this.salesLineDAO.save(item));
                        item.jazeeraWarehouse = reqData.jazeeraWarehouse;
                        item.inventLocationId = this.sessionInfo.inventlocationid;
                        item.taxGroup = reqData.taxGroup;
                        return [4 /*yield*/, this.rawQuery.getItemTaxGroup(item.itemid)];
                    case 8:
                        taxItemGroup = _a.sent();
                        item.taxItemGroup = taxItemGroup.taxitemgroupid;
                        item.lineAmount = parseFloat(item.salesprice) * parseFloat(item.salesQty);
                        _a.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 7];
                    case 10:
                        if (reqData.status == "PAID") {
                            if (reqData.transkind == "DESIGNERSERVICE") {
                                designerServiceData = {
                                    custphone: reqData.mobileNo,
                                    amount: reqData.netAmount,
                                    invoiceid: canCommitTransaction ? reqData.salesId : reqData.interCompanyOriginalSalesId,
                                    salesorderid: canCommitTransaction ? reqData.interCompanyOriginalSalesId : reqData.salesId,
                                    dataareaid: this.sessionInfo.dataareaid,
                                    recordtype: canCommitTransaction ? 1 : 0,
                                    settle: 0,
                                    selectedforsettle: 0,
                                    approvalstatus: reqData.approvalstatus,
                                    createdby: this.sessionInfo.userName,
                                    createddatetime: new Date(App_1.App.DateNow()),
                                    lastmodifiedby: this.sessionInfo.userName,
                                    lastmodifieddate: new Date(App_1.App.DateNow()),
                                    customer: {
                                        accountnum: reqData.invoiceAccount,
                                    },
                                };
                                // promiseList.push(this.designerServiceDAO.save(designerServiceData));
                                promiseList.push(queryRunner.manager.getRepository(Designerservice_1.Designerservice).save(designerServiceData));
                            }
                        }
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 11:
                        _a.sent();
                        console.log("=====================================================================================");
                        if (!canCommitTransaction) return [3 /*break*/, 13];
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 12:
                        _a.sent();
                        returnData = {
                            id: salesTable.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                        };
                        //console.log(returnData);
                        return [2 /*return*/, returnData];
                    case 13: return [3 /*break*/, 20];
                    case 14:
                        error_11 = _a.sent();
                        if (!canCommitTransaction) return [3 /*break*/, 16];
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 15:
                        _a.sent();
                        _a.label = 16;
                    case 16: throw error_11;
                    case 17:
                        if (!canCommitTransaction) return [3 /*break*/, 19];
                        return [4 /*yield*/, queryRunner.release()];
                    case 18:
                        _a.sent();
                        _a.label = 19;
                    case 19: return [7 /*endfinally*/];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.stockOnHandCheck = function (saleslineArray, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var canConvert_1, colors_2, items_2, sizes_2, itemString_1, groupSalesLines, newSalesline_1, itemsInStock_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(reqData.status == "PAID")) return [3 /*break*/, 2];
                        reqData.invoiceDate = new Date(App_1.App.DateNow());
                        canConvert_1 = true;
                        colors_2 = [];
                        items_2 = [];
                        sizes_2 = [];
                        itemString_1 = "";
                        groupSalesLines = this.groupBy(saleslineArray, function (item) {
                            return [item.itemid, item.configId, item.inventsizeid];
                        });
                        newSalesline_1 = [];
                        groupSalesLines.forEach(function (groupitem) {
                            var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.salesQty); }, 0);
                            groupitem[0].salesqty = Math.abs(qty);
                            newSalesline_1.push(__assign({}, groupitem[0]));
                        });
                        newSalesline_1.map(function (v) {
                            if (v.itemid && v.configId && v.inventsizeid) {
                                items_2.push(v.itemid), colors_2.push(v.configId), sizes_2.push(v.inventsizeid);
                            }
                            else {
                                throw { message: "CANNOT_CREATE_SALESORDER" };
                            }
                        });
                        return [4 /*yield*/, this.rawQuery.checkItems(this.sessionInfo.inventlocationid, items_2, colors_2, sizes_2, reqData.salesId)];
                    case 1:
                        itemsInStock_1 = _a.sent();
                        newSalesline_1.map(function (v) {
                            var index = itemsInStock_1.findIndex(function (value) {
                                return value.itemid.toLowerCase() == v.itemid.toLowerCase() &&
                                    value.configid.toLowerCase() == v.configId.toLowerCase() &&
                                    value.inventsizeid.toLowerCase() == v.inventsizeid.toLowerCase();
                            });
                            if (index >= 0) {
                                if (parseInt(v.salesqty) > parseInt(itemsInStock_1[index].qty)) {
                                    canConvert_1 = canConvert_1 == true ? false : false;
                                    itemString_1 += v.itemid + ",";
                                }
                            }
                            else {
                                canConvert_1 = canConvert_1 == true ? false : false;
                                itemString_1 += v.itemid + ",";
                            }
                        });
                        if (!canConvert_1) {
                            throw { message: "SOME_OF_THE_ITEMS_ARE_OUT_OF_STOCK" };
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.salesLineDelete = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var lineData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salesLineDAO.findAll({
                            salesId: reqData.salesId,
                        })];
                    case 1:
                        lineData = _a.sent();
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesLine_1.SalesLine).remove(lineData)];
                    case 2:
                        _a.sent();
                        console.log("================Deleteing all from remove=====================");
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.inventryTransUpdate = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var promiseList, batches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseList = [];
                        return [4 /*yield*/, this.inventTransDAO.findAll({
                                invoiceid: reqData.salesId,
                            })];
                    case 1:
                        batches = _a.sent();
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventTrans_1.Inventorytrans).remove(batches)];
                    case 2:
                        _a.sent();
                        console.log("================Deleteing all from remove=====================");
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.getTaxGroupforSaleslines = function (reqData, queryRunner, salesLines) {
        return __awaiter(this, void 0, void 0, function () {
            var filterItemsWithTaxGroups, itemIds, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filterItemsWithTaxGroups = salesLines.filter(function (line) {
                            return line.taxGroup != "VAT_GRP_5%";
                        });
                        console.log(filterItemsWithTaxGroups);
                        itemIds = filterItemsWithTaxGroups.map(function (line) { return line.itemid; });
                        if (!(itemIds.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rawQuery.getItemTaxGroupByItemIds(itemIds)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = [];
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    SalesTableService.prototype.salesLineItemOrder = function (item, reqData, queryRunner, salesLine) {
        return __awaiter(this, void 0, void 0, function () {
            var batches, _loop_2, this_1, _i, _a, batch, fiofoBatches, uniqueList, groupBatchesList, qty, _b, batches_3, batch;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        batches = [];
                        item.batch = [];
                        if (!(item.salesQty > 0)) return [3 /*break*/, 7];
                        item.salesId = reqData.salesId;
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.numberSequenceGroupId = this.seqNum;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.jazeeraWarehouse = reqData.jazeeraWarehouse;
                        item.status = reqData.status;
                        // if (item.taxGroup == "VAT_GRP_5%") {
                        //   item.taxItemGroup = "VAT_ITEM_5%";
                        // } else {
                        //   let taxItemGroup = await this.rawQuery.getItemTaxGroup(item.itemid);
                        //   item.taxItemGroup = taxItemGroup.taxitemgroupid;
                        // }
                        item.batch = [];
                        if (!(item.batches && item.batches.length > 0)) return [3 /*break*/, 5];
                        item.batches = item.batches.filter(function (v) { return Math.abs(v.quantity) > 0; });
                        _loop_2 = function (batch) {
                            var availability, similarLines, fiofoBatches;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(batch);
                                        return [4 /*yield*/, this_1.rawQuery.getbatchavailability({
                                                inventlocationid: this_1.sessionInfo.inventlocationid,
                                                itemid: item.itemid,
                                                configid: item.configId,
                                                inventsizeid: item.inventsizeid,
                                                batchno: batch.batchNo,
                                                invoiceid: reqData.salesId,
                                            })];
                                    case 1:
                                        availability = _a.sent();
                                        return [4 /*yield*/, salesLine.filter(function (d) {
                                                return d.itemid == item.itemid &&
                                                    d.configId == item.configId &&
                                                    d.inventsizeid == item.inventsizeid &&
                                                    d.batchesAdded == true;
                                            })];
                                    case 2:
                                        similarLines = _a.sent();
                                        availability = parseInt(availability);
                                        console.log(availability);
                                        similarLines.map(function (d) {
                                            console.log(d.batches);
                                            d.batches.map(function (b) {
                                                console.log(b.batchNo, batch.batchNo);
                                                if (b.batchNo == batch.batchNo) {
                                                    console.log(b.quantity);
                                                    availability -= parseInt(b.quantity);
                                                }
                                            });
                                        });
                                        console.log("==========================================", availability, batch.quantity);
                                        if (!(availability <= 0 || availability < Math.abs(batch.quantity))) return [3 /*break*/, 4];
                                        console.log("======================mission pass====================", availability);
                                        return [4 /*yield*/, this_1.dofifo(item, batch.quantity, reqData, salesLine)];
                                    case 3:
                                        fiofoBatches = _a.sent();
                                        batches = batches.concat(fiofoBatches);
                                        return [3 /*break*/, 5];
                                    case 4:
                                        batch.itemid = item.itemid;
                                        batch.transrefid = item.salesId;
                                        batch.invoiceid = item.salesId;
                                        batch.batchno = batch.batchNo;
                                        batch.configid = item.configId;
                                        batch.inventsizeid = item.inventsizeid;
                                        batch.custvendac = reqData.custAccount;
                                        batch.inventlocationid = this_1.sessionInfo.inventlocationid;
                                        batch.dataareaid = this_1.sessionInfo.dataareaid;
                                        batch.qty = -batch.quantity;
                                        batch.reserveStatus = reqData.status;
                                        batch.dataareaid = this_1.sessionInfo.dataareaid;
                                        batch.transactionClosed = reqData.status == "PAID" || reqData.status == "RESERVED" ? true : false;
                                        batch.salesLineId = item.id;
                                        batch.dateinvent = new Date(App_1.App.DateNow());
                                        batches.push(batch);
                                        _a.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = item.batches;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        batch = _a[_i];
                        return [5 /*yield**/, _loop_2(batch)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.dofifo(item, item.salesQty, reqData, salesLine)];
                    case 6:
                        fiofoBatches = _c.sent();
                        batches = batches.concat(fiofoBatches);
                        _c.label = 7;
                    case 7:
                        item.batchesAdded = true;
                        uniqueList = [];
                        groupBatchesList = this.groupBy(batches, function (d) {
                            return [d.itemid, d.batchno, d.configid, d.inventsizeid, d.quantity];
                        });
                        groupBatchesList.map(function (v) {
                            uniqueList.push(v[0]);
                        });
                        qty = uniqueList.reduce(function (res, i) { return res + parseInt(i.quantity); }, 0);
                        console.log("qty", qty, item.salesQty);
                        if (reqData.status == "PAID" || reqData.status == "RESERVED") {
                            if (parseInt(item.salesQty) != qty) {
                                throw {
                                    id: reqData.salesId,
                                    message: "inventory not available - " + item.itemid + " - " + item.configId + " - " + item.inventsizeid + " - please edit and try again",
                                };
                            }
                        }
                        _b = 0, batches_3 = batches;
                        _c.label = 8;
                    case 8:
                        if (!(_b < batches_3.length)) return [3 /*break*/, 11];
                        batch = batches_3[_b];
                        item.batch.push({
                            batchNo: batch.batchno,
                            quantity: batch.quantity,
                        });
                        batch.salesLineId = item.id;
                        this.updateInventoryService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(batch, true, true, queryRunner)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10:
                        _b++;
                        return [3 /*break*/, 8];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrderPaidPursase = function (reqData, condData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var batches, _i, batches_4, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batches = [];
                        return [4 /*yield*/, this.rawQuery.updateSalesTableWorkFlowStatus(reqData.interCompanyOriginalSalesId, "PAID")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.inventTransDAO.findAll({
                                invoiceid: reqData.salesId,
                            })];
                    case 2:
                        batches = _a.sent();
                        _i = 0, batches_4 = batches;
                        _a.label = 3;
                    case 3:
                        if (!(_i < batches_4.length)) return [3 /*break*/, 6];
                        v = batches_4[_i];
                        delete v.id;
                        v.invoiceid = reqData.interCompanyOriginalSalesId;
                        v.transrefid = reqData.salesId;
                        v.qty = Math.abs(v.qty);
                        v.dataareaid = this.sessionInfo.dataareaid;
                        v.inventlocationid = condData.inventlocationid;
                        this.updateInventoryService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(v, true, true, queryRunner)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrderUpdateVocharDiscount = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var promiseList, voucherData, query, voucher, usedVoucherQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseList = [];
                        if (!reqData.voucherDiscChecked) return [3 /*break*/, 2];
                        voucherData = {
                            salesId: reqData.salesId,
                            voucherNum: reqData.voucherNum,
                            custAccount: reqData.custAccount,
                        };
                        query = "\n      UPDATE discountvoucher\n      SET  salesid='" + voucherData.salesId + "',\n      used_numbers=used_numbers+1\n      WHERE voucher_num='" + voucherData.voucherNum + "';\n      ";
                        promiseList.push(queryRunner.query(query));
                        return [4 /*yield*/, this.rawQuery.getVoucherDetails(voucherData)];
                    case 1:
                        voucher = _a.sent();
                        voucher = voucher.length > 0 ? voucher[0] : null;
                        if (voucher) {
                            usedVoucherQuery = "\n      INSERT INTO public.voucher_used\n      (voucher_num, is_used, used_numbers, salesid, custaccount, updated_by)\n      VALUES('" + voucherData.voucherNum + "', true, " + (parseInt(voucher.used_numbers) + 1) + ", '" + voucherData.salesId + "', '" + reqData.custAccount + "', '" + this.sessionInfo.userName + "');\n      ";
                            promiseList.push(queryRunner.query(usedVoucherQuery));
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, Promise.all(promiseList)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesVisitorData = function (reqData, customerDetails, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var visitorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        visitorData = new VisitCustomer_1.VisitCustomer();
                        this.visitCustomerService.sessionInfo = this.sessionInfo;
                        visitorData.visitorName = reqData.salesName;
                        visitorData.purchased = "Yes";
                        visitorData.visitorMobileNumber = reqData.mobileNo;
                        visitorData.salesmanId = reqData.salesmanId;
                        visitorData.visitorType =
                            Props_1.Props.RCUSTTYPE[customerDetails.rcusttype] && Props_1.Props.RCUSTTYPE[customerDetails.rcusttype][1]
                                ? Props_1.Props.RCUSTTYPE[customerDetails.rcusttype][1]
                                : "Individual";
                        return [4 /*yield*/, this.visitCustomerService.save(visitorData, queryRunner)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveCustomerData = function (reqData, defaultCustomer, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var customerData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerData = new Custtable_1.Custtable();
                        customerData.accountnum = reqData.mobileNo;
                        customerData.name = reqData.salesName;
                        customerData.namealias = reqData.salesName;
                        customerData.phone = reqData.mobileNo;
                        customerData.paymtermid = defaultCustomer.paymtermid;
                        customerData.custgroup = defaultCustomer.custgroup;
                        customerData.citycode = this.sessionInfo.showroomCityCode;
                        customerData.districtcode = this.sessionInfo.showroomDistrictCode;
                        customerData.countryCode = this.sessionInfo.showroomCountryCode;
                        customerData.walkincustomer = true;
                        customerData.lastmodifieddate = new Date(App_1.App.DateNow());
                        customerData.lastmodifiedby = this.sessionInfo.userName;
                        customerData.dataareaId = this.sessionInfo.dataareaid;
                        return [4 /*yield*/, queryRunner.manager.getRepository(Custtable_1.Custtable).save(customerData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrderOverDue = function (reqData, userName, salesTable, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var paymTerDays, days, now, dueDate, overDue, overDueSaved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reqData.paymtermid) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rawQuery.getPaymTermDays(reqData.paymtermid)];
                    case 1:
                        paymTerDays = _a.sent();
                        if (!(paymTerDays.length > 0)) return [3 /*break*/, 3];
                        days = paymTerDays[0].numofdays;
                        now = new Date(App_1.App.DateNow());
                        dueDate = new Date(App_1.App.DateNow());
                        dueDate.setDate(dueDate.getDate() + days);
                        overDue = new Overdue_1.Overdue();
                        overDue.accountNum = reqData.custAccount;
                        overDue.payment = 0;
                        overDue.customerName = reqData.salesName;
                        overDue.invoiceAmount = reqData.netAmount;
                        overDue.invoicedate = now;
                        overDue.duedate = dueDate;
                        overDue.actualDueDate = dueDate;
                        overDue.createddatetime = now;
                        overDue.createdby = userName;
                        overDue.salesId = salesTable.salesId;
                        overDue.invoiceId = salesTable.salesId;
                        overDue.lastmodifiedby = userName;
                        overDue.lastModifiedDate = now;
                        this.overDueDAO = new OverDueDAO_1.OverDueDAO();
                        return [4 /*yield*/, queryRunner.manager.getRepository(Overdue_1.Overdue).save(overDue)];
                    case 2:
                        overDueSaved = _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4: throw "paytermid not found";
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrderDesignerService = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, item, desginerService, vatData, error_12;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        _i = 0, _a = reqData.designerServiceRedeemList;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        item = _a[_i];
                        return [4 /*yield*/, this.salestableDAO.entity(item.invoiceid)];
                    case 2:
                        desginerService = _b.sent();
                        desginerService.taxGroup = reqData.taxGroup;
                        return [4 /*yield*/, this.rawQuery.getCustomerTax(reqData.taxGroup)];
                    case 3:
                        vatData = _b.sent();
                        desginerService.sumTax = vatData ? vatData.vat : 15;
                        desginerService.netAmount = parseFloat(item.redeemAmount);
                        desginerService.amount = (parseFloat(item.redeemAmount) * 100) / (100 + parseFloat(desginerService.sumTax));
                        desginerService.vatamount = (desginerService.sumTax / 100) * desginerService.amount;
                        desginerService.interCompanyOriginalSalesId = item.invoiceid;
                        desginerService.salesGroup = reqData.salesId;
                        desginerService.status = "POSTED";
                        desginerService.salesType = 200;
                        desginerService.disc = 0;
                        desginerService.cashAmount = 0;
                        desginerService.transkind = "DESIGNERSERVICERETURN";
                        desginerService.salesLine[0].lineAmount = desginerService.amount;
                        desginerService.salesLine[0].vat = desginerService.sumTax;
                        desginerService.salesLine[0].vatamount = desginerService.vatamount;
                        desginerService.salesLine[0].salesprice = desginerService.amount;
                        desginerService.salesLine[0].lineNum = 1;
                        desginerService.salesLine[0].lineTotalDisc = 0;
                        delete desginerService.salesId;
                        delete desginerService.salesLine[0].salesId;
                        delete desginerService.salesLine[0].id;
                        return [4 /*yield*/, this.saveReturnOrder(desginerService, queryRunner)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_12 = _b.sent();
                        throw error_12;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveReturnOrderDesignerService = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var designerservice, designerServiceAmount, _loop_3, this_2, _i, designerservice_1, item, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.salestableDAO.search({
                                salesGroup: reqData.interCompanyOriginalSalesId,
                                transkind: "DESIGNERSERVICERETURN",
                            })];
                    case 1:
                        designerservice = _a.sent();
                        designerServiceAmount = reqData.designServiceRedeemAmount;
                        _loop_3 = function (item) {
                            var desinerServiceDetails, amount, leftReturnAmount;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(designerServiceAmount > 0)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this_2.rawQuery.getReturnedDesignerServiceList(reqData.interCompanyOriginalSalesId)];
                                    case 1:
                                        desinerServiceDetails = _a.sent();
                                        console.log(desinerServiceDetails);
                                        desinerServiceDetails = desinerServiceDetails.filter(function (v) {
                                            return v.recordtype == 0 &&
                                                v.salesorderid != item.salesId &&
                                                v.invoiceid == item.interCompanyOriginalSalesId &&
                                                parseFloat(v.amount) > 0;
                                        });
                                        console.log(desinerServiceDetails);
                                        amount = desinerServiceDetails.reduce(function (res, item) { return res + Math.abs(item.amount); }, 0);
                                        console.log("=========================netAmount===================", amount, item.netAmount);
                                        leftReturnAmount = parseFloat(item.netAmount) - amount;
                                        console.log(leftReturnAmount);
                                        if (!(leftReturnAmount > 0)) return [3 /*break*/, 3];
                                        if (designerServiceAmount >= leftReturnAmount) {
                                            item.netAmount = leftReturnAmount;
                                            designerServiceAmount -= item.netAmount;
                                        }
                                        else {
                                            item.netAmount = designerServiceAmount;
                                            designerServiceAmount -= item.netAmount;
                                        }
                                        // item.sumTax = reqData.sumTax;
                                        item.amount = (parseFloat(item.netAmount) * 100) / (100 + parseFloat(item.sumTax));
                                        item.vatamount = (item.sumTax / 100) * item.amount;
                                        item.transkind = "DESIGNERSERVICE";
                                        item.status = "SAVED";
                                        item.salesType = 200;
                                        item.disc = 0;
                                        item.cashAmount = 0;
                                        item.cardAmount = 0;
                                        item.salesLine[0].lineNum = 1;
                                        item.salesGroup = reqData.interCompanyOriginalSalesId;
                                        item.deliveryStreet = reqData.salesId;
                                        item.salesLine[0].lineAmount = item.amount;
                                        item.salesLine[0].vat = item.sumTax;
                                        item.salesLine[0].vatamount = item.vatamount;
                                        item.salesLine[0].salesprice = item.amount;
                                        item.salesLine[0].lineTotalDisc = 0;
                                        delete item.salesId;
                                        delete item.salesLine.id;
                                        delete item.salesLine.salesId;
                                        console.log("=========================amount===================", designerServiceAmount, item.netAmount);
                                        if (!(parseFloat(item.netAmount) > 0)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this_2.saveQuotation(item, queryRunner)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _i = 0, designerservice_1 = designerservice;
                        _a.label = 2;
                    case 2:
                        if (!(_i < designerservice_1.length)) return [3 /*break*/, 5];
                        item = designerservice_1[_i];
                        return [5 /*yield**/, _loop_3(item)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_13 = _a.sent();
                        throw error_13;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrderRedeem = function (reqData, queryRunner) {
        if (queryRunner === void 0) { queryRunner = null; }
        return __awaiter(this, void 0, void 0, function () {
            var redeemData, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        redeemData = {
                            TransactionId: reqData.salesId,
                            MobileNo: reqData.mobileNo && reqData.mobileNo.length == 9 ? "0" + reqData.mobileNo : reqData.mobileNo,
                            InvoiceNo: reqData.salesId,
                            InvoiceAmount: reqData.netAmount,
                            RedeemPoints: reqData.redeemPoints,
                            SyncStatus: 0,
                            InventLocationId: this.sessionInfo.inventlocationid,
                            LoyaltyStatus: 0,
                        };
                        if (!(reqData.mobileNo && reqData.mobileNo != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.redeemService.Redeem(redeemData)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_14 = _a.sent();
                        console.error(error_14);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrder = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, promiseList, customerRecord, salesLine_7, returnData, batchTobeSaved, salestatus, _a, saleslineArray, cond, customerRecords, customerRecord_1, defaultcustomer, mobileCustomer, salesTable_1, taxgroups, _loop_4, this_3, _i, salesLine_6, item, salesline, condData, customerDetails, pmobileno, userName, ptokenData, pmessage, pmail, imail, error_15;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("1----------------------------");
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 25, 27, 29]);
                        promiseList = [];
                        customerRecord = void 0;
                        salesLine_7 = reqData.salesLine;
                        returnData = void 0;
                        delete reqData.salesLine;
                        batchTobeSaved = [];
                        if (!(reqData && reqData.salesId)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rawQuery.checkSalesStatus(reqData.salesId)];
                    case 4:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _a = {};
                        _b.label = 6;
                    case 6:
                        salestatus = _a;
                        if (reqData.status != "PAID") {
                            reqData.voucherDiscChecked = false;
                            reqData.voucherNum = null;
                        }
                        if (reqData.status == "PAID" || reqData.status == "RESERVED") {
                            salesLine_7.map(function (v) {
                                if (v.batches && v.batches.length > 0) {
                                    var qty = v.batches.reduce(function (res, item) { return res + parseInt(item.quantity); }, 0);
                                    console.log("qty", qty, v.salesQty);
                                    if (v.salesQty != qty) {
                                        throw {
                                            message: "selected line quantities and selected batches quantities are not matching",
                                        };
                                    }
                                }
                                else {
                                    throw {
                                        message: "selected line quantities and selected batches quantities are not matching",
                                    };
                                }
                            });
                        }
                        if (!(reqData.status == "PAID" && salestatus.status != "RESERVED")) return [3 /*break*/, 8];
                        saleslineArray = JSON.parse(JSON.stringify(salesLine_7));
                        return [4 /*yield*/, this.stockOnHandCheck(saleslineArray, reqData)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        console.log("2----------------------------");
                        return [4 /*yield*/, this.validate(reqData, salesLine_7)];
                    case 9:
                        cond = _b.sent();
                        if (!(cond == "ALREADY_PAID")) return [3 /*break*/, 10];
                        returnData = {
                            id: reqData.salesId,
                            message: "ALREADY_PAID",
                            status: reqData.status,
                            url: reqData.url,
                        };
                        return [2 /*return*/, returnData];
                    case 10:
                        if (!(cond == true)) return [3 /*break*/, 24];
                        !reqData.warehouse ? (reqData.warehouse = {}) : (reqData.warehouse = reqData.warehouse);
                        reqData.warehouse.inventLocationId = this.sessionInfo.inventlocationid;
                        reqData.url = reqData.onlineAmount > 0 ? Props_1.Props.ECOMMERCE_PAYMENT_URL + reqData.salesId : null;
                        reqData.paymentType = "OFFLINE";
                        if (reqData.isCash) {
                            reqData.payment = "CASH";
                        }
                        reqData.status = reqData.status == "CREATED" || reqData.status == "UNRESERVED" ? "SAVED" : reqData.status;
                        // console.log(reqData.lastModifiedDate.toISOString());
                        reqData.invoiceAccount =
                            reqData.invoiceAccount || reqData.invoiceAccount != "" ? reqData.invoiceAccount : reqData.custAccount;
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(reqData.invoiceAccount, this.sessionInfo.defaultcustomerid, reqData.mobileNo)];
                    case 11:
                        customerRecords = _b.sent();
                        customerRecord_1 = customerRecords.find(function (v) { return v.accountnum == reqData.invoiceAccount; });
                        defaultcustomer = customerRecords.find(function (v) { return v.accountnum == _this.sessionInfo.defaultcustomerid; });
                        mobileCustomer = customerRecords.find(function (v) { return v.accountnum == reqData.mobileCustomer; });
                        customerRecord_1 = customerRecord_1 ? customerRecord_1 : {};
                        defaultcustomer = defaultcustomer ? defaultcustomer : {};
                        if (customerRecord_1.walkincustomer == true) {
                            reqData.taxGroup = defaultcustomer.taxgroup;
                        }
                        else {
                            reqData.taxGroup = customerRecord_1.taxgroup;
                        }
                        // let salesTable: any = await this.salestableDAO.save(reqData);
                        reqData.multilineDiscountGroupId = customerRecord_1.multilinedisc;
                        reqData.disc = reqData.disc ? reqData.disc : 0;
                        reqData.netAmount = parseFloat(reqData.amount) - parseFloat(reqData.disc) + parseFloat(reqData.vatamount);
                        reqData.linesCount = salesLine_7.length;
                        if (!mobileCustomer) {
                            reqData.invoiceAccount = reqData.mobileNo;
                        }
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData)];
                    case 12:
                        salesTable_1 = _b.sent();
                        // if (reqData.status == "SAVED" || reqData.status == "CONVERTED") {
                        //   this.rawQuery.salesTableInventlocation(reqData.inventLocationId, reqData.salesId);
                        // }
                        console.log("3----------------------------");
                        promiseList = [];
                        promiseList.push(this.salesLineDelete(reqData, queryRunner));
                        promiseList.push(this.inventryTransUpdate(reqData, queryRunner));
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 13:
                        _b.sent();
                        console.log("4----------------------------");
                        salesLine_7.forEach(function (element, index) {
                            salesLine_7[index].taxGroup = reqData.taxGroup;
                        });
                        return [4 /*yield*/, this.getTaxGroupforSaleslines(reqData, queryRunner, salesLine_7)];
                    case 14:
                        taxgroups = _b.sent();
                        console.log("*********************************************");
                        console.log(taxgroups);
                        console.log("*******************************************************");
                        _loop_4 = function (item) {
                            var taxItemGroup;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        item.linesCount = reqData.linesCount;
                                        item.id = reqData.paymentType == "ONLINE" ? item.id : uuid();
                                        item.taxGroup = reqData.taxGroup;
                                        item.lineAmount = parseFloat(item.salesprice) * parseFloat(item.salesQty);
                                        if (item.taxGroup == "VAT_GRP_5%") {
                                            item.taxItemGroup = "VAT_ITEM_5%";
                                        }
                                        else {
                                            taxItemGroup = taxgroups.find(function (taItem) { return taItem.itemid == item.itemid; });
                                            item.taxItemGroup = taxItemGroup.taxitemgroupid;
                                        }
                                        return [4 /*yield*/, this_3.salesLineItemOrder(item, reqData, queryRunner, salesLine_7)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_3 = this;
                        _i = 0, salesLine_6 = salesLine_7;
                        _b.label = 15;
                    case 15:
                        if (!(_i < salesLine_6.length)) return [3 /*break*/, 18];
                        item = salesLine_6[_i];
                        return [5 /*yield**/, _loop_4(item)];
                    case 16:
                        _b.sent();
                        _b.label = 17;
                    case 17:
                        _i++;
                        return [3 /*break*/, 15];
                    case 18: return [4 /*yield*/, queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(salesLine_7)];
                    case 19:
                        salesline = _b.sent();
                        promiseList = [];
                        if (!(reqData.status == "PAID")) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.rawQuery.salesTableData(reqData.interCompanyOriginalSalesId)];
                    case 20:
                        condData = _b.sent();
                        condData = condData.length >= 0 ? condData[0] : {};
                        //console.log(condData);
                        promiseList.push(this.saveSalesOrderUpdateVocharDiscount(reqData, queryRunner));
                        condData = condData ? condData : {};
                        if (condData.transkind == "PURCHASEORDER") {
                            promiseList.push(this.saveSalesOrderPaidPursase(reqData, condData, queryRunner));
                        }
                        customerDetails = customerRecord_1 ? customerRecord_1 : {};
                        if (reqData.mobileNo) {
                            pmobileno = function () { return __awaiter(_this, void 0, void 0, function () {
                                var message, sms;
                                return __generator(this, function (_a) {
                                    message = "  \u0631\u0636\u0627\u0624\u0643\u0645 \u0647\u0648 \u0647\u062F\u0641\u0646\u0627 \u062F\u0647\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u0632\u064A\u0631\u0629 \u062C\u0648\u062F\u0629 \u0648\u062C\u0645\u0627\u0644 \u0642\u064A\u0645\u0629 \u0645\u0634\u062A\u0631\u064A\u0627\u062A\u0643\u0645 \u0647\u064A " + reqData.netAmount.toFixed(2) + " ";
                                    sms = new Sms_1.Sms();
                                    return [2 /*return*/, sms.sendMessage("966", reqData.mobileNo, message)];
                                });
                            }); };
                            promiseList.push(pmobileno());
                        }
                        //console.log(reqData);
                        if (customerDetails.walkincustomer) {
                            promiseList.push(this.saveSalesVisitorData(reqData, customerDetails, queryRunner));
                        }
                        if (!mobileCustomer && reqData.mobileNo) {
                            promiseList.push(this.saveCustomerData(reqData, defaultcustomer, queryRunner));
                        }
                        userName = this.sessionInfo.userName;
                        if ((reqData.paymtermid != "CASH" || reqData.payment != "CASH") && reqData.isCash == false) {
                            reqData.paymtermid = reqData.paymtermid ? reqData.paymtermid : reqData.payment;
                            promiseList.push(this.saveSalesOrderOverDue(reqData, userName, salesTable_1, queryRunner));
                        }
                        // }
                        if (reqData.designServiceRedeemAmount > 0) {
                            promiseList.push(this.saveSalesOrderDesignerService(reqData, queryRunner));
                        }
                        _b.label = 21;
                    case 21:
                        console.log("6---------------------------- " + reqData.paymentType + reqData.onlineAmount);
                        if (reqData.onlineAmount > 0 && reqData.status != "PAID") {
                            ptokenData = function () { return __awaiter(_this, void 0, void 0, function () {
                                var tokenData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            tokenData = {
                                                orderId: reqData.salesId,
                                                customerId: reqData.custAccount,
                                                email: reqData.custEmail,
                                                authToken: reqData.authToken,
                                                updatedBy: this.sessionInfo.userName,
                                                updatedOn: new Date(App_1.App.DateNow()),
                                            };
                                            return [4 /*yield*/, this.saveSalesorderToken(tokenData, queryRunner)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); };
                            promiseList.push(ptokenData());
                            pmessage = function () { return __awaiter(_this, void 0, void 0, function () {
                                var message, sms;
                                return __generator(this, function (_a) {
                                    message = " Please click on the below link to complete payment of " + reqData.onlineAmount.toFixed(2) + " SAR \n " + reqData.url + " ";
                                    try {
                                        sms = new Sms_1.Sms();
                                        return [2 /*return*/, sms.sendMessage("966", reqData.mobileNo, message)];
                                    }
                                    catch (error) {
                                        Log_1.log.error(error);
                                    }
                                    return [2 /*return*/];
                                });
                            }); };
                            promiseList.push(pmessage());
                            pmail = function () { return __awaiter(_this, void 0, void 0, function () {
                                var _i, salesLine_8, item, template, error_16;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            salesTable_1.vatamount = salesTable_1.vatamount.toFixed(2);
                                            salesTable_1.lastModifiedDate = new Date(App_1.App.DateNow());
                                            for (_i = 0, salesLine_8 = salesLine_7; _i < salesLine_8.length; _i++) {
                                                item = salesLine_8[_i];
                                                if (reqData.status != "PAID") {
                                                    if (item.lineTotalDisc != null || item.lineTotalDisc != undefined) {
                                                        item.lineTotalDisc = item.lineTotalDisc.toFixed(2);
                                                        item.unitPrice = item.lineAmount / item.salesQty;
                                                        if (item.colorantprice != null || item.colorantprice != undefined) {
                                                            item.productPrice = item.unitPrice + item.colorantprice;
                                                            item.productPrice = parseFloat(item.productPrice).toFixed(2);
                                                            item.price = item.lineAmount + item.colorantprice * item.salesQty;
                                                            item.priceVat =
                                                                item.lineAmount + item.colorantprice * item.salesQty - item.lineTotalDisc + item.vatamount;
                                                            item.price = parseFloat(item.price).toFixed(2);
                                                            item.priceVat = parseFloat(item.priceVat).toFixed(2);
                                                        }
                                                    }
                                                }
                                            }
                                            console.log("Payment Link");
                                            template = reqData.lang == "en" ? "paymentgateway" : "paymentgateway-ar";
                                            salesTable_1.amount = salesTable_1.amount ? parseFloat(salesTable_1.amount) : 0;
                                            salesTable_1.vatamount = salesTable_1.vatamount ? parseFloat(salesTable_1.vatamount) : 0;
                                            salesTable_1.netAmount = salesTable_1.netAmount ? parseFloat(salesTable_1.netAmount) : 0;
                                            return [4 /*yield*/, App_1.App.SendMail(reqData.custEmail, "Payment Link", template, {
                                                    link: reqData.url,
                                                    amount: reqData.onlineAmount,
                                                    customer: customerRecord_1,
                                                    salesLine: salesLine_7,
                                                    salesTable: salesTable_1,
                                                })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                        case 2:
                                            error_16 = _a.sent();
                                            Log_1.log.error(error_16);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); };
                            promiseList.push(pmail());
                        }
                        if (reqData.status == "PAID" && reqData.paymentType == "ONLINE") {
                            imail = function () { return __awaiter(_this, void 0, void 0, function () {
                                var template, reportData, error_17;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            template = reqData.lang == "en" ? "email-invoice-en" : "email-invoice-ar";
                                            return [4 /*yield*/, this.allocateInvoiceReportData(reqData, salesLine_7)];
                                        case 1:
                                            reportData = _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            _a.trys.push([2, 4, , 5]);
                                            console.log(reportData);
                                            return [4 /*yield*/, App_1.App.SendMail(reqData.custEmail, "Invoice", template, reportData)];
                                        case 3: return [2 /*return*/, _a.sent()];
                                        case 4:
                                            error_17 = _a.sent();
                                            Log_1.log.error(error_17);
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); };
                            promiseList.push(imail());
                        }
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 22:
                        _b.sent();
                        // throw { message: "error" };
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 23:
                        // throw { message: "error" };
                        _b.sent();
                        console.log("7----------------------------");
                        reqData.salesLine = salesLine_7;
                        returnData = {
                            id: reqData.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                            url: reqData.url,
                        };
                        return [2 /*return*/, returnData];
                    case 24: return [3 /*break*/, 29];
                    case 25:
                        error_15 = _b.sent();
                        console.log(error_15);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 26:
                        _b.sent();
                        throw error_15;
                    case 27: return [4 /*yield*/, queryRunner.release()];
                    case 28:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 29: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.validateReturnOrder = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var prevReturnLines, returnLines, _loop_5, _i, returnLines_1, val, state_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rawQuery.getReturnLines(reqData.interCompanyOriginalSalesId)];
                    case 1:
                        prevReturnLines = _a.sent();
                        console.log(prevReturnLines);
                        returnLines = reqData.salesLine;
                        _loop_5 = function (val) {
                            if (val.salesQty > 0) {
                                console.log(val.batches);
                                var _loop_6 = function (v) {
                                    var lineData = prevReturnLines.find(function (d) {
                                        return d.itemid == val.itemid &&
                                            d.configId == val.configId &&
                                            d.inventsizeid == val.inventsizeid &&
                                            d.batchno == v.batchno;
                                    });
                                    console.log(lineData);
                                    if (lineData && parseInt(lineData.quantity) < 0) {
                                        console.log(Math.abs(lineData.quantity), v.returnQuantity);
                                        if (Math.abs(lineData.quantity) >= v.returnQuantity) {
                                            console.log(Math.abs(lineData.quantity), v.returnQuantity);
                                        }
                                        else {
                                            return { value: false };
                                        }
                                    }
                                    else {
                                        return { value: false };
                                    }
                                };
                                for (var _i = 0, _a = val.batches; _i < _a.length; _i++) {
                                    var v = _a[_i];
                                    var state_2 = _loop_6(v);
                                    if (typeof state_2 === "object")
                                        return state_2;
                                }
                            }
                        };
                        for (_i = 0, returnLines_1 = returnLines; _i < returnLines_1.length; _i++) {
                            val = returnLines_1[_i];
                            state_1 = _loop_5(val);
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SalesTableService.prototype.saveOrderShipment = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, salesLine, transactionClosed, salesData, checkStatus, checkToData, checkPrevData, cond, promiseList, _i, salesLine_9, item, returnData, error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 17, 19, 21]);
                        salesLine = reqData.salesLine;
                        delete reqData.salesLine;
                        reqData.interCompanyOriginalSalesId;
                        transactionClosed = false;
                        salesData = void 0;
                        checkStatus = false;
                        return [4 /*yield*/, this.db.query("select * from salestable where salesid= '" + reqData.interCompanyOriginalSalesId + "' ")];
                    case 4:
                        checkToData = _a.sent();
                        if (!(checkToData && checkToData.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.db.query("select * from salestable where intercompanyoriginalsalesid  = '" + reqData.interCompanyOriginalSalesId + "' and salesid!= '" + reqData.salesId + "' ")];
                    case 5:
                        checkPrevData = _a.sent();
                        console.log(checkPrevData);
                        if (checkPrevData && checkPrevData.length > 0) {
                            throw { message: "ALREADY_SHIPPED" };
                        }
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.salestableDAO.findOne({
                            salesId: reqData.interCompanyOriginalSalesId,
                        })];
                    case 7:
                        salesData = _a.sent();
                        //console.log(salesData);
                        if (salesData) {
                            salesData.status = reqData.status;
                            salesData.salesType = 2;
                            salesData.lastModifiedDate = new Date(App_1.App.DateNow());
                            // await this.salestableDAO.save(salesData);
                            queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(salesData);
                            reqData.salesType = 2;
                            reqData.isMovementIn = false;
                            reqData.status = reqData.status;
                            transactionClosed = true;
                        }
                        return [4 /*yield*/, this.validate(reqData, salesLine)];
                    case 8:
                        cond = _a.sent();
                        promiseList = [];
                        promiseList.push(this.salesLineDelete(reqData, queryRunner));
                        promiseList.push(this.inventryTransUpdate(reqData, queryRunner));
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 9:
                        _a.sent();
                        promiseList = [];
                        if (!(cond == true)) return [3 /*break*/, 16];
                        // promiseList.push(this.salestableDAO.save(reqData));
                        reqData.linesCount = salesLine.length;
                        promiseList.push(queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData));
                        salesLine = salesLine.filter(function (v) { return v.status == "SHIPPED"; });
                        console.log(salesLine);
                        _i = 0, salesLine_9 = salesLine;
                        _a.label = 10;
                    case 10:
                        if (!(_i < salesLine_9.length)) return [3 /*break*/, 13];
                        item = salesLine_9[_i];
                        delete item.id;
                        item.id = uuid();
                        item.salesId = reqData.salesId;
                        item.custAccount = reqData.custAccount;
                        item.createddatetime = moment().format();
                        item.createdBy = this.sessionInfo.userName;
                        item.numberSequenceGroupId = this.seqNum;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.jazeeraWarehouse = reqData.jazeeraWarehouse;
                        item.status = reqData.status;
                        // if (item.batches && item.batches.length > 0) {
                        //   //console.log(item.batches);
                        //   const qty = item.batches.reduce((res: number, b: any) => res + parseInt(b.quantity), 0);
                        //   if (qty == item.salesQty) {
                        //     for (let batches of item.batches) {
                        //       if (batches.quantity > 0) {
                        //         batches.itemid = item.itemid;
                        //         batches.transrefid = reqData.interCompanyOriginalSalesId
                        //           ? reqData.interCompanyOriginalSalesId
                        //           : reqData.salesId;
                        //         batches.invoiceid = reqData.salesId;
                        //         batches.qty = -parseInt(batches.quantity);
                        //         batches.batchno = batches.batchNo;
                        //         batches.configid = item.configId;
                        //         batches.inventsizeid = item.inventsizeid;
                        //         batches.inventlocationid = reqData.inventLocationId;
                        //         batches.dataareaid = reqData.dataareaid;
                        //         batches.reserveStatus = reqData.status;
                        //         batches.transactionClosed = false;
                        //         batches.reservationid = item.colorantId;
                        //         batches.custvendac = reqData.custAccount;
                        //         batches.dateinvent = moment().format();
                        //         batches.salesLineId = item.id;
                        //         item.batch.push({
                        //           batchNo: batches.batchNo,
                        //           quantity: batches.quantity,
                        //         });
                        //         this.updateInventoryService.sessionInfo = this.sessionInfo;
                        //         await this.updateInventoryService.updateInventtransTable(batches, false, true, queryRunner);
                        //       }
                        //     }
                        //   } else {
                        //     let fiofoBatches = await this.dofifo(item, item.salesQty, reqData, salesLine);
                        //     for (let inv of fiofoBatches) {
                        //       item.batch.push({
                        //         batchNo: inv.batchno,
                        //         quantity: Math.abs(inv.qty),
                        //       });
                        //       await this.updateInventoryService.updateInventtransTable(inv, false, true, queryRunner);
                        //     }
                        //   }
                        // } else {
                        //   let fiofoBatches = await this.dofifo(item, item.salesQty, reqData, salesLine);
                        //   for (let inv of fiofoBatches) {
                        //     item.batch.push({
                        //       batchNo: inv.batchno,
                        //       quantity: Math.abs(inv.qty),
                        //     });
                        //     await this.updateInventoryService.updateInventtransTable(inv, false, true, queryRunner);
                        //   }
                        // }
                        return [4 /*yield*/, this.salesLineItemOrder(item, reqData, queryRunner, salesLine)];
                    case 11:
                        // if (item.batches && item.batches.length > 0) {
                        //   //console.log(item.batches);
                        //   const qty = item.batches.reduce((res: number, b: any) => res + parseInt(b.quantity), 0);
                        //   if (qty == item.salesQty) {
                        //     for (let batches of item.batches) {
                        //       if (batches.quantity > 0) {
                        //         batches.itemid = item.itemid;
                        //         batches.transrefid = reqData.interCompanyOriginalSalesId
                        //           ? reqData.interCompanyOriginalSalesId
                        //           : reqData.salesId;
                        //         batches.invoiceid = reqData.salesId;
                        //         batches.qty = -parseInt(batches.quantity);
                        //         batches.batchno = batches.batchNo;
                        //         batches.configid = item.configId;
                        //         batches.inventsizeid = item.inventsizeid;
                        //         batches.inventlocationid = reqData.inventLocationId;
                        //         batches.dataareaid = reqData.dataareaid;
                        //         batches.reserveStatus = reqData.status;
                        //         batches.transactionClosed = false;
                        //         batches.reservationid = item.colorantId;
                        //         batches.custvendac = reqData.custAccount;
                        //         batches.dateinvent = moment().format();
                        //         batches.salesLineId = item.id;
                        //         item.batch.push({
                        //           batchNo: batches.batchNo,
                        //           quantity: batches.quantity,
                        //         });
                        //         this.updateInventoryService.sessionInfo = this.sessionInfo;
                        //         await this.updateInventoryService.updateInventtransTable(batches, false, true, queryRunner);
                        //       }
                        //     }
                        //   } else {
                        //     let fiofoBatches = await this.dofifo(item, item.salesQty, reqData, salesLine);
                        //     for (let inv of fiofoBatches) {
                        //       item.batch.push({
                        //         batchNo: inv.batchno,
                        //         quantity: Math.abs(inv.qty),
                        //       });
                        //       await this.updateInventoryService.updateInventtransTable(inv, false, true, queryRunner);
                        //     }
                        //   }
                        // } else {
                        //   let fiofoBatches = await this.dofifo(item, item.salesQty, reqData, salesLine);
                        //   for (let inv of fiofoBatches) {
                        //     item.batch.push({
                        //       batchNo: inv.batchno,
                        //       quantity: Math.abs(inv.qty),
                        //     });
                        //     await this.updateInventoryService.updateInventtransTable(inv, false, true, queryRunner);
                        //   }
                        // }
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 10];
                    case 13:
                        // promiseList.push(this.salesLineDAO.save(salesLine));
                        promiseList.push(queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(salesLine));
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 15:
                        _a.sent();
                        returnData = {
                            id: reqData.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                        };
                        // //console.log(returnData);
                        return [2 /*return*/, returnData];
                    case 16: return [3 /*break*/, 21];
                    case 17:
                        error_18 = _a.sent();
                        console.log(error_18);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 18:
                        _a.sent();
                        throw error_18;
                    case 19: return [4 /*yield*/, queryRunner.release()];
                    case 20:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveReturnOrder = function (reqData, queryRunner) {
        if (queryRunner === void 0) { queryRunner = null; }
        return __awaiter(this, void 0, void 0, function () {
            var canCommitTransaction, condition, salesLine, cond, customerRecord, defaultcustomer, desinerService, amount, designerServiceData, promiseList, _i, salesLine_10, item, taxItemGroup, _a, _b, batches, returnData, error_19;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        canCommitTransaction = false;
                        if (!(queryRunner == null)) return [3 /*break*/, 3];
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _c.sent();
                        canCommitTransaction = true;
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 31, 34, 37]);
                        condition = false;
                        if (!(reqData.transkind == "RETURNORDER")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.validateReturnOrder(reqData)];
                    case 4:
                        condition = _c.sent();
                        console.log(condition);
                        return [3 /*break*/, 6];
                    case 5:
                        condition = true;
                        _c.label = 6;
                    case 6:
                        if (!condition) return [3 /*break*/, 29];
                        console.log(reqData);
                        salesLine = reqData.salesLine;
                        delete reqData.salesLine;
                        return [4 /*yield*/, this.validate(reqData, salesLine)];
                    case 7:
                        cond = _c.sent();
                        if (!(cond == true)) return [3 /*break*/, 28];
                        console.log("======================================================================================", reqData.salesId);
                        reqData.linesCount = salesLine.length;
                        if (!(reqData.transkind == "DESIGNERSERVICERETURN")) return [3 /*break*/, 15];
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        reqData.invoiceAccount = reqData.invoiceAccount ? reqData.invoiceAccount : reqData.custAccount;
                        return [4 /*yield*/, this.rawQuery.getCustomer(reqData.invoiceAccount)];
                    case 8:
                        customerRecord = _c.sent();
                        reqData.salesmanId = customerRecord.salesmanid;
                        if (!(customerRecord.walkincustomer == true)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.rawQuery.getCustomer(this.sessionInfo.defaultcustomerid)];
                    case 9:
                        defaultcustomer = _c.sent();
                        reqData.salesmanId = defaultcustomer.salesmanid;
                        reqData.taxGroup = defaultcustomer.taxgroup;
                        reqData.priceGroupId = defaultcustomer.pricegroup;
                        reqData.custGroup = defaultcustomer.custgroup;
                        reqData.custAccount = defaultcustomer.accountnum;
                        return [3 /*break*/, 11];
                    case 10:
                        reqData.taxGroup = customerRecord.taxgroup;
                        _c.label = 11;
                    case 11:
                        if (!(reqData.status == "POSTED")) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.designerServiceDAO.search({
                                invoiceid: reqData.interCompanyOriginalSalesId,
                            })];
                    case 12:
                        desinerService = _c.sent();
                        console.log(desinerService, reqData.interCompanyOriginalSalesId);
                        amount = desinerService.reduce(function (res, item) { return res + parseFloat(item.amount); }, 0);
                        console.log("=========================amount===================", amount, reqData.netAmount);
                        if (!(parseFloat(amount.toFixed(2)) >= parseFloat(reqData.netAmount.toFixed(2)))) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.designerServiceDAO.findOne({
                                invoiceid: reqData.interCompanyOriginalSalesId,
                            })];
                    case 13:
                        designerServiceData = _c.sent();
                        delete designerServiceData.serviceid;
                        designerServiceData.recordtype = 0;
                        designerServiceData.amount = -reqData.netAmount;
                        designerServiceData.salesorderid = reqData.salesId;
                        designerServiceData.createddatetime = App_1.App.DateNow();
                        designerServiceData.lastmodifieddate = App_1.App.DateNow();
                        designerServiceData.lastmodifiedby = this.sessionInfo.userName;
                        // await this.designerServiceDAO.save(designerServiceData);
                        queryRunner.manager.getRepository(Designerservice_1.Designerservice).save(designerServiceData);
                        return [3 /*break*/, 15];
                    case 14: throw { status: 0, message: "CAN_NOT_CREATE_RETURN_ORDER_AMOUNT_ALREADY_USED" };
                    case 15:
                        promiseList = [];
                        // promiseList.push(this.salestableDAO.save(reqData));
                        // console.log(
                        //   reqData,
                        //   "=============================================================================================="
                        // );
                        promiseList.push(queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData));
                        promiseList.push(this.salesLineDelete(reqData, queryRunner));
                        _i = 0, salesLine_10 = salesLine;
                        _c.label = 16;
                    case 16:
                        if (!(_i < salesLine_10.length)) return [3 /*break*/, 23];
                        item = salesLine_10[_i];
                        item.batch = [];
                        if (!(item.salesQty >= 0)) return [3 /*break*/, 22];
                        delete item.id;
                        item.id = uuid();
                        item.salesId = reqData.salesId;
                        console.log("======================================================================================", item.salesId, reqData.salesId);
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.numberSequenceGroupId = this.seqNum;
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.jazeeraWarehouse = reqData.jazeeraWarehouse;
                        return [4 /*yield*/, this.rawQuery.getItemTaxGroup(item.itemid)];
                    case 17:
                        taxItemGroup = _c.sent();
                        item.taxItemGroup = taxItemGroup.taxitemgroupid;
                        item.status = reqData.status;
                        if (!(item.batches && item.batches.length > 0 && item.salesQty > 0)) return [3 /*break*/, 21];
                        _a = 0, _b = item.batches;
                        _c.label = 18;
                    case 18:
                        if (!(_a < _b.length)) return [3 /*break*/, 21];
                        batches = _b[_a];
                        if (!(batches.returnQuantity > 0)) return [3 /*break*/, 20];
                        batches.itemid = item.itemid;
                        batches.transrefid = reqData.interCompanyOriginalSalesId;
                        batches.invoiceid = item.salesId;
                        batches.qty =
                            reqData.transkind == "PURCHASERETURN" ? -batches.returnQuantity : batches.returnQuantity;
                        batches.batchno = batches.batchno;
                        batches.configid = item.configId;
                        batches.custvendac = reqData.custAccount;
                        batches.inventsizeid = item.inventsizeid;
                        batches.dataareaid = this.sessionInfo.dataareaid;
                        batches.inventlocationid = this.sessionInfo.inventlocationid;
                        batches.reserveStatus = reqData.transkind;
                        batches.transactionClosed = false;
                        batches.dateinvent = new Date(App_1.App.DateNow());
                        batches.salesLineId = item.id;
                        // await this.inventTransDAO.save(batches);
                        item.batch.push({
                            batchNo: batches.batchno,
                            quantity: batches.returnQuantity,
                        });
                        this.updateInventoryService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(batches, false, true, queryRunner)];
                    case 19:
                        _c.sent();
                        _c.label = 20;
                    case 20:
                        _a++;
                        return [3 /*break*/, 18];
                    case 21:
                        item.batches = [];
                        promiseList.push(queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(item));
                        _c.label = 22;
                    case 22:
                        _i++;
                        return [3 /*break*/, 16];
                    case 23: return [4 /*yield*/, Promise.all(promiseList)];
                    case 24:
                        _c.sent();
                        if (!canCommitTransaction) return [3 /*break*/, 28];
                        if (!(reqData.designServiceRedeemAmount > 0)) return [3 /*break*/, 26];
                        return [4 /*yield*/, this.saveReturnOrderDesignerService(reqData, queryRunner)];
                    case 25:
                        _c.sent();
                        _c.label = 26;
                    case 26: 
                    // throw { message: "error" };
                    return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 27:
                        // throw { message: "error" };
                        _c.sent();
                        reqData.salesLine = salesLine;
                        returnData = {
                            id: reqData.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                        };
                        //console.log(returnData);
                        console.log(reqData);
                        return [2 /*return*/, returnData];
                    case 28: return [3 /*break*/, 30];
                    case 29: throw { status: 0, message: "CAN_NOT_CREATE_RETURN_ORDER" };
                    case 30: return [3 /*break*/, 37];
                    case 31:
                        error_19 = _c.sent();
                        console.log(error_19);
                        if (!canCommitTransaction) return [3 /*break*/, 33];
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 32:
                        _c.sent();
                        _c.label = 33;
                    case 33: throw error_19;
                    case 34:
                        if (!canCommitTransaction) return [3 /*break*/, 36];
                        return [4 /*yield*/, queryRunner.release()];
                    case 35:
                        _c.sent();
                        _c.label = 36;
                    case 36: return [7 /*endfinally*/];
                    case 37: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveOrderReceive = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, salesLine, transactionClosed, salesData, checkStatus, promiseList, checkPrevData, transferData, cond, batches_5, _i, salesLine_11, item, _a, _b, batches_6, returnData, error_20;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 20, 22, 24]);
                        salesLine = reqData.salesLine;
                        delete reqData.salesLine;
                        reqData.interCompanyOriginalSalesId;
                        transactionClosed = false;
                        salesData = void 0;
                        checkStatus = false;
                        promiseList = [];
                        return [4 /*yield*/, this.db.query("select * from salestable where intercompanyoriginalsalesid  = '" + reqData.interCompanyOriginalSalesId + "' and salesid!= '" + reqData.salesId + "' ")];
                    case 4:
                        checkPrevData = _c.sent();
                        console.log(checkPrevData);
                        if (checkPrevData && checkPrevData.length > 0) {
                            throw { message: "ALREADY_RECEIVED" };
                        }
                        return [4 /*yield*/, this.salestableDAO.findOne({
                                salesId: reqData.interCompanyOriginalSalesId,
                            })];
                    case 5:
                        salesData = _c.sent();
                        if (!salesData) return [3 /*break*/, 7];
                        // salesData.status = "RECEIVED";
                        salesData.salesType = 3;
                        salesData.lastModifiedDate = new Date(App_1.App.DateNow());
                        // promiseList.push(this.salestableDAO.save(salesData));
                        promiseList.push(queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(salesData));
                        reqData.salesType = 3;
                        reqData.isMovementIn = true;
                        reqData.status = "RECEIVED";
                        transactionClosed = true;
                        return [4 /*yield*/, this.salestableDAO.findOne({
                                salesId: salesData.interCompanyOriginalSalesId,
                            })];
                    case 6:
                        transferData = _c.sent();
                        if (transferData) {
                            transferData.status = "RECEIVED";
                            transferData.lastModifiedDate = salesData.lastModifiedDate;
                            // promiseList.push(this.salestableDAO.save(transferData));
                            promiseList.push(queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(transferData));
                        }
                        _c.label = 7;
                    case 7: return [4 /*yield*/, this.validate(reqData, salesLine)];
                    case 8:
                        cond = _c.sent();
                        if (!(cond == true)) return [3 /*break*/, 19];
                        reqData.linesCount = salesLine.length;
                        promiseList.push(queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData));
                        // let salesTable = await this.salestableDAO.save(reqData);
                        salesLine = salesLine.filter(function (v) { return v.status == "RECEIVED"; });
                        return [4 /*yield*/, this.inventTransDAO.findAll({
                                invoiceid: reqData.interCompanyOriginalSalesId,
                                transactionClosed: true,
                            })];
                    case 9:
                        batches_5 = _c.sent();
                        if (batches_5.length > 0) {
                            salesLine.map(function (v) {
                                v.batches = batches_5.filter(function (b) {
                                    return b.configid == v.configId &&
                                        b.itemid == v.itemid &&
                                        b.inventsizeid == v.inventsizeid &&
                                        v.colorantId == b.reservationid;
                                });
                            });
                        }
                        _i = 0, salesLine_11 = salesLine;
                        _c.label = 10;
                    case 10:
                        if (!(_i < salesLine_11.length)) return [3 /*break*/, 16];
                        item = salesLine_11[_i];
                        delete item.id;
                        item.id = uuid();
                        item.salesId = reqData.salesId;
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.numberSequenceGroupId = this.seqNum;
                        item.jazeeraWarehouse = reqData.jazeeraWarehouse;
                        item.custAccount = reqData.custAccount;
                        item.status = reqData.status;
                        item.batch = [];
                        if (!(batches_5 && batches_5.length > 0)) return [3 /*break*/, 15];
                        _a = 0, _b = item.batches;
                        _c.label = 11;
                    case 11:
                        if (!(_a < _b.length)) return [3 /*break*/, 14];
                        batches_6 = _b[_a];
                        delete batches_6.id;
                        batches_6.itemid = item.itemid;
                        batches_6.transrefid = reqData.interCompanyOriginalSalesId;
                        batches_6.invoiceid = reqData.salesId;
                        batches_6.qty = Math.abs(batches_6.qty);
                        batches_6.batchno = batches_6.batchno;
                        batches_6.configid = item.configId;
                        batches_6.inventsizeid = item.inventsizeid;
                        batches_6.inventlocationid = reqData.inventLocationId;
                        batches_6.dataareaid = reqData.dataareaid;
                        batches_6.custvendac = reqData.custAccount;
                        batches_6.reserveStatus = reqData.status;
                        batches_6.reservationid = item.colorantId;
                        batches_6.transactionClosed = false;
                        batches_6.dateinvent = new Date(App_1.App.DateNow());
                        batches_6.salesLineId = item.id;
                        item.batch.push({
                            batchNo: batches_6.batchno,
                            quantity: batches_6.qty,
                        });
                        this.updateInventoryService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(batches_6, false, true, queryRunner)];
                    case 12:
                        _c.sent();
                        _c.label = 13;
                    case 13:
                        _a++;
                        return [3 /*break*/, 11];
                    case 14: return [3 /*break*/, 15];
                    case 15:
                        _i++;
                        return [3 /*break*/, 10];
                    case 16:
                        // promiseList.push(this.salesLineDAO.save(salesLine));
                        promiseList.push(queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(salesLine));
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 17:
                        _c.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 18:
                        _c.sent();
                        returnData = {
                            id: reqData.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                        };
                        // //console.log(returnData);
                        return [2 /*return*/, returnData];
                    case 19: return [3 /*break*/, 24];
                    case 20:
                        error_20 = _c.sent();
                        console.log(error_20);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 21:
                        _c.sent();
                        throw error_20;
                    case 22: return [4 /*yield*/, queryRunner.release()];
                    case 23:
                        _c.sent();
                        return [7 /*endfinally*/];
                    case 24: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveInventoryMovementOrder = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, salesLine, transactionClosed, salesData, checkStatus, promiseList, cond, _i, salesLine_12, item, _a, _b, batches, batches, _c, batches_7, batch, returnData, error_21;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 21, 23, 25]);
                        salesLine = reqData.salesLine;
                        delete reqData.salesLine;
                        reqData.interCompanyOriginalSalesId;
                        transactionClosed = false;
                        salesData = void 0;
                        checkStatus = false;
                        promiseList = [];
                        switch (reqData.transkind) {
                            case "PURCHASEORDER":
                                reqData.isMovementIn = true;
                                reqData.status = reqData.status ? reqData.status : "PURCHASEORDER";
                                transactionClosed = true;
                                break;
                            default:
                                reqData.interCompanyOriginalSalesId = reqData.salesId;
                        }
                        return [4 /*yield*/, this.validate(reqData, salesLine)];
                    case 4:
                        cond = _d.sent();
                        if (!(cond == true)) return [3 /*break*/, 20];
                        // promiseList.push(this.salestableDAO.save(reqData));
                        reqData.linesCount = salesLine.length;
                        promiseList.push(queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData));
                        if (reqData.status == "CONVERTED") {
                            promiseList.push(this.rawQuery.salesTableInventlocation(reqData.inventLocationId, reqData.salesId));
                        }
                        promiseList.push(this.salesLineDelete(reqData, queryRunner));
                        promiseList.push(this.inventryTransUpdate(reqData, queryRunner));
                        _i = 0, salesLine_12 = salesLine;
                        _d.label = 5;
                    case 5:
                        if (!(_i < salesLine_12.length)) return [3 /*break*/, 17];
                        item = salesLine_12[_i];
                        delete item.id;
                        item.id = uuid();
                        item.salesId = reqData.salesId;
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.createdBy = this.sessionInfo.userName;
                        item.jazeeraWarehouse = reqData.jazeeraWarehouse;
                        item.numberSequenceGroupId = this.seqNum;
                        item.batch = [];
                        item.status = reqData.status;
                        if (!(item.batches && item.batches.length > 0)) return [3 /*break*/, 10];
                        _a = 0, _b = item.batches;
                        _d.label = 6;
                    case 6:
                        if (!(_a < _b.length)) return [3 /*break*/, 9];
                        batches = _b[_a];
                        if (!(parseInt(batches.quantity) != 0)) return [3 /*break*/, 8];
                        batches.itemid = item.itemid;
                        batches.transrefid = reqData.interCompanyOriginalSalesId
                            ? reqData.interCompanyOriginalSalesId
                            : reqData.salesId;
                        batches.invoiceid = reqData.salesId;
                        batches.qty =
                            reqData.status == "PURCHASEORDER" ? parseInt(batches.quantity) : parseInt(batches.quantity);
                        batches.batchno = batches.batchNo;
                        batches.configid = item.configId;
                        batches.inventsizeid = item.inventsizeid;
                        batches.inventlocationid = this.sessionInfo.inventlocationid;
                        batches.dataareaid = this.sessionInfo.dataareaid;
                        batches.reserveStatus = reqData.transkind;
                        batches.transactionClosed = transactionClosed;
                        batches.dateinvent = new Date(App_1.App.DateNow());
                        batches.salesLineId = item.id;
                        //console.log(batches);
                        if (reqData.isMovementIn) {
                            // batches.inventbatch = {
                            //   inventBatchId: batches.batchNo,
                            //   itemId: item.itemid,
                            //   configId: item.configId,
                            //   description: batches.description,
                            //   dataAreaId: this.sessionInfo.dataareaid,
                            //   createdDateTime: new Date(),
                            //   dateinvent: new Date()
                            // };
                            // await this.inventbatchDAO.save(batches.inventbatch);
                        }
                        // await this.inventTransDAO.save(batches);
                        item.batch.push({
                            batchNo: batches.batchNo,
                            quantity: batches.quantity,
                        });
                        this.updateInventoryService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(batches, false, true, queryRunner)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _a++;
                        return [3 /*break*/, 6];
                    case 9: return [3 /*break*/, 15];
                    case 10: return [4 /*yield*/, this.inventTransDAO.findAll({
                            invoiceid: reqData.interCompanyOriginalSalesId,
                        })];
                    case 11:
                        batches = _d.sent();
                        _c = 0, batches_7 = batches;
                        _d.label = 12;
                    case 12:
                        if (!(_c < batches_7.length)) return [3 /*break*/, 15];
                        batch = batches_7[_c];
                        delete batch.id;
                        batch.transrefid = reqData.interCompanyOriginalSalesId;
                        batch.invoiceid = reqData.salesId;
                        batch.reserveStatus = reqData.transkind;
                        batch.transactionClosed = transactionClosed;
                        batch.inventlocationid = this.sessionInfo.inventlocationid;
                        batch.qty = reqData.isMovementIn ? Math.abs(batch.qty) : -Math.abs(batch.qty);
                        batch.dateinvent = new Date(App_1.App.DateNow());
                        // this.inventTransDAO.save(batch);
                        item.batch.push({
                            batchNo: batch.batchNo,
                            quantity: batch.quantity,
                        });
                        this.updateInventoryService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(batch, false, true, queryRunner)];
                    case 13:
                        _d.sent();
                        _d.label = 14;
                    case 14:
                        _c++;
                        return [3 /*break*/, 12];
                    case 15:
                        // promiseList.push(this.salesLineDAO.save(item));
                        promiseList.push(queryRunner.manager.getRepository(SalesLine_1.SalesLine).save(item));
                        _d.label = 16;
                    case 16:
                        _i++;
                        return [3 /*break*/, 5];
                    case 17: return [4 /*yield*/, Promise.all(promiseList)];
                    case 18:
                        _d.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 19:
                        _d.sent();
                        returnData = {
                            id: reqData.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                        };
                        if (reqData.transkind == "INVENTORYMOVEMENT" && reqData.movementType.id == 10) {
                            returnData.sendForApproval = false;
                        }
                        else {
                            returnData.sendForApproval = true;
                        }
                        // //console.log(returnData);
                        return [2 /*return*/, returnData];
                    case 20: return [3 /*break*/, 25];
                    case 21:
                        error_21 = _d.sent();
                        console.log(error_21);
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 22:
                        _d.sent();
                        throw error_21;
                    case 23: return [4 /*yield*/, queryRunner.release()];
                    case 24:
                        _d.sent();
                        return [7 /*endfinally*/];
                    case 25: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.sendForTransferOrderRequest = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var transferorder, error_22;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.salestableDAO.entity(reqData.salesId)];
                    case 1:
                        transferorder = _a.sent();
                        transferorder.lastModifiedDate = new Date(App_1.App.DateNow());
                        transferorder.status = reqData.status ? reqData.status : "REQUESTED";
                        return [4 /*yield*/, this.salestableDAO.save(transferorder)];
                    case 2:
                        transferorder = _a.sent();
                        return [4 /*yield*/, this.rawQuery.updateSalesLine(reqData.salesId, "REQUESTED")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                id: transferorder.salesId,
                                message: "REQUESTED",
                                status: transferorder.status,
                            }];
                    case 4:
                        error_22 = _a.sent();
                        throw error_22;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.rejectTransferOrder = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var transferorder, error_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.salestableDAO.entity(reqData.salesId)];
                    case 1:
                        transferorder = _a.sent();
                        transferorder.status = "REJECTED";
                        transferorder.lastModifiedDate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.salestableDAO.save(transferorder)];
                    case 2:
                        transferorder = _a.sent();
                        if (!(transferorder.transkind == "ORDERSHIPMENT")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.salestableDAO.save({
                                salesId: transferorder.interCompanyOriginalSalesId,
                                status: "REJECTED",
                            })];
                    case 3:
                        transferorder = _a.sent();
                        return [4 /*yield*/, this.rawQuery.updateSalesLine(transferorder.interCompanyOriginalSalesId, "REJECTED")];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.rawQuery.updateSalesLine(reqData.salesId, "REJECTED")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, {
                                id: transferorder.salesId,
                                message: "REJECTED",
                                status: transferorder.status,
                            }];
                    case 7:
                        error_23 = _a.sent();
                        throw error_23;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.dofifo = function (item, qty, reqData, salesLine) {
        return __awaiter(this, void 0, void 0, function () {
            var batches, inventory, similarLines, val_1, batchList, _loop_7, _i, inventory_1, batch, state_3, _a, batchList_1, batch;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        batches = [];
                        return [4 /*yield*/, this.rawQuery.inventoryOnHand({
                                inventlocationid: this.sessionInfo.inventlocationid,
                                itemId: item.itemid,
                                configid: item.configId,
                                inventsizeid: item.inventsizeid,
                            })];
                    case 1:
                        inventory = _b.sent();
                        similarLines = salesLine.filter(function (v) {
                            return v.itemId == item.itemId &&
                                v.configId == item.configId &&
                                v.inventsizeid == item.inventsizeid &&
                                v.batchesAdded == true;
                        });
                        val_1 = parseInt(qty);
                        batchList = [];
                        _loop_7 = function (batch) {
                            batch.availabilty = parseInt(batch.availabilty);
                            if (similarLines && similarLines.length > 0) {
                                // batchNo: batch.batchno,
                                // quantity: batch.quantity,
                                console.log(batch);
                                similarLines.map(function (v) {
                                    if (v.batches) {
                                        v.batches.map(function (b) {
                                            if (b.batchNo == batch.batchno) {
                                                batch.availabilty -= parseInt(b.quantity);
                                            }
                                        });
                                    }
                                });
                            }
                            // console.log(batch.availabilty);
                            if (val_1 > 0) {
                                if (parseInt(batch.availabilty) >= val_1) {
                                    batch.quantity = val_1;
                                    val_1 = 0;
                                    batchList.push(batch);
                                    return "break";
                                }
                                else {
                                    batch.quantity = parseInt(batch.availabilty);
                                    val_1 -= parseInt(batch.availabilty);
                                    batchList.push(batch);
                                }
                            }
                        };
                        for (_i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
                            batch = inventory_1[_i];
                            state_3 = _loop_7(batch);
                            if (state_3 === "break")
                                break;
                        }
                        for (_a = 0, batchList_1 = batchList; _a < batchList_1.length; _a++) {
                            batch = batchList_1[_a];
                            if (batch.quantity > 0) {
                                batch.itemid = item.itemid;
                                batch.transrefid = reqData.salesId;
                                batch.invoiceid = item.salesId;
                                batch.dataareaid = this.sessionInfo.dataareaid;
                                batch.custvendac = reqData.custAccount;
                                batch.inventlocationid = this.sessionInfo.inventlocationid;
                                batch.transactionClosed = reqData.status == "PAID" || reqData.status == "RESERVED" ? true : false;
                                batch.qty = -batch.quantity;
                                batch.reserveStatus = reqData.status;
                                batch.dateinvent = new Date(App_1.App.DateNow());
                                // this.inventTransDAO.save(batche);
                                batches.push(batch);
                                // await this.updateInventoryService.updateInventtransTable(batche, true);
                            }
                        }
                        return [4 /*yield*/, batches];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    SalesTableService.prototype.groupBy = function (array, f) {
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
    SalesTableService.prototype.saveSalesorderToken = function (data, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salesOrderTokensDAO.save(data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.saveSalesOrderAfterOnlinePayment = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var salesLine, reportData_1, salesTable, promiseList, _i, salesLine_13, item, pmobileno, customerDetails, userName, imail, returnData, error_24;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        salesLine = reqData.salesLine;
                        return [4 /*yield*/, this.allocateInvoiceReportData(reqData, salesLine)];
                    case 1:
                        reportData_1 = _a.sent();
                        delete reqData.salesLine;
                        reqData.paymentType = reqData.onlineAmount > 0 ? "ONLINE" : "OFFLINE";
                        return [4 /*yield*/, queryRunner.manager.getRepository(SalesTable_1.SalesTable).save(reqData)];
                    case 2:
                        salesTable = _a.sent();
                        promiseList = [];
                        promiseList.push(this.inventryTransUpdate(reqData, queryRunner));
                        for (_i = 0, salesLine_13 = salesLine; _i < salesLine_13.length; _i++) {
                            item = salesLine_13[_i];
                            console.log(item);
                            promiseList.push(this.salesLineItemOrder(item, reqData, queryRunner, salesLine));
                        }
                        promiseList.push(this.saveSalesOrderUpdateVocharDiscount(reqData, queryRunner));
                        if (reqData.mobileNo) {
                            pmobileno = function () { return __awaiter(_this, void 0, void 0, function () {
                                var message, sms;
                                return __generator(this, function (_a) {
                                    message = "  \u0631\u0636\u0627\u0624\u0643\u0645 \u0647\u0648 \u0647\u062F\u0641\u0646\u0627 \u062F\u0647\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u0632\u064A\u0631\u0629 \u062C\u0648\u062F\u0629 \u0648\u062C\u0645\u0627\u0644 \u0642\u064A\u0645\u0629 \u0645\u0634\u062A\u0631\u064A\u0627\u062A\u0643\u0645 \u0647\u064A " + reqData.netAmount + " ";
                                    sms = new Sms_1.Sms();
                                    return [2 /*return*/, sms.sendMessage("966", reqData.mobileNo, message)];
                                });
                            }); };
                            promiseList.push(pmobileno());
                        }
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(reqData.custAccount)];
                    case 3:
                        customerDetails = _a.sent();
                        if (customerDetails.walkincustomer) {
                            promiseList.push(this.saveSalesVisitorData(reqData, customerDetails, queryRunner));
                        }
                        if (reqData.designServiceRedeemAmount > 0) {
                            promiseList.push(this.saveSalesOrderDesignerService(reqData, queryRunner));
                        }
                        userName = this.sessionInfo.userName;
                        promiseList.push(this.saveSalesOrderRedeem(reqData, queryRunner));
                        imail = function () { return __awaiter(_this, void 0, void 0, function () {
                            var template;
                            return __generator(this, function (_a) {
                                template = reqData.lang == "en" ? "email-invoice-en" : "email-invoice-ar";
                                try {
                                    console.log(reportData_1);
                                    return [2 /*return*/, App_1.App.SendMail(reqData.custEmail, "Invoice", template, reportData_1)];
                                }
                                catch (error) {
                                    Log_1.log.error(error);
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        promiseList.push(imail());
                        return [4 /*yield*/, Promise.all(promiseList)];
                    case 4:
                        _a.sent();
                        reqData.salesLine = salesLine;
                        returnData = {
                            id: reqData.salesId,
                            message: "SAVED_SUCCESSFULLY",
                            status: reqData.status,
                            url: reqData.url,
                        };
                        console.log("7----------------------------");
                        queryRunner.commitTransaction();
                        return [2 /*return*/, returnData];
                    case 5:
                        error_24 = _a.sent();
                        // await queryRunner.rollbackTransaction();
                        throw error_24;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.allocateInvoiceReportData = function (reqData, salesLine) {
        return __awaiter(this, void 0, void 0, function () {
            var reports, sNo, _i, salesLine_14, item, _a, _b, batch, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        reqData.date = new Date(App_1.App.DateNow()).toLocaleDateString();
                        reqData.paymentType = reqData.lang == "en" ? "ONLINE" : "عبر الانترنت";
                        reports = {
                            salesTable: reqData,
                            salesLine: [],
                            quantity: 0,
                        };
                        sNo = 1;
                        _i = 0, salesLine_14 = salesLine;
                        _c.label = 1;
                    case 1:
                        if (!(_i < salesLine_14.length)) return [3 /*break*/, 6];
                        item = salesLine_14[_i];
                        reports.quantity += parseInt(item.salesQty);
                        _a = 0, _b = item.batch;
                        _c.label = 2;
                    case 2:
                        if (!(_a < _b.length)) return [3 /*break*/, 5];
                        batch = _b[_a];
                        data = {
                            productName: item.size.product.nameEn,
                            productNameAr: item.size.product.nameAr,
                            colorantId: item.colorantId,
                            configId: item.configId,
                            colorName: item.color.nameEnglish,
                            sizeName: item.size.nameEnglish,
                            inventsizeid: item.inventsizeid,
                            itemid: item.itemid,
                        };
                        data.sNo = sNo;
                        data.batchNo = batch.batchNo;
                        data.quantity = parseInt(batch.quantity);
                        data.vat = item.vat;
                        data.vatAmount = (parseFloat(item.vatamount) / parseFloat(item.salesQty)) * data.quantity;
                        data.lineTotalDisc = (parseFloat(item.lineTotalDisc) / parseFloat(item.salesQty)) * data.quantity;
                        data.price = parseFloat(item.salesprice);
                        data.productPrice = data.price * data.quantity;
                        data.colorantPrice = parseFloat(item.colorantprice) * data.quantity;
                        data.lineAmountBeforeVat = data.productPrice + data.colorantPrice - data.lineTotalDisc;
                        data.lineAmount = data.lineAmountBeforeVat + data.vatAmount;
                        data.vatAmount = data.vatAmount
                            ? Math.round(parseFloat((data.vatAmount * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.lineTotalDisc = data.lineTotalDisc
                            ? Math.round(parseFloat((data.lineTotalDisc * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.price = data.price
                            ? Math.round(parseFloat((data.price * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.productPrice = data.productPrice
                            ? Math.round(parseFloat((data.productPrice * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.colorantPrice = data.colorantPrice
                            ? Math.round(parseFloat((data.colorantPrice * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.productPrice = data.productPrice
                            ? Math.round(parseFloat((data.productPrice * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.lineAmountBeforeVat = data.lineAmountBeforeVat
                            ? Math.round(parseFloat((data.lineAmountBeforeVat * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        data.lineAmount = data.lineAmount
                            ? Math.round(parseFloat((data.lineAmount * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2)
                            : 0;
                        // console.log(data);
                        return [4 /*yield*/, reports.salesLine.push(data)];
                    case 3:
                        // console.log(data);
                        _c.sent();
                        sNo += 1;
                        _c.label = 4;
                    case 4:
                        _a++;
                        return [3 /*break*/, 2];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [4 /*yield*/, reports];
                    case 7: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    SalesTableService.prototype.calItem = function (item) {
        item.salesprice = item.salesprice ? parseFloat(item.salesprice) : 0;
        item.salesQty = item.salesQty ? parseFloat(item.salesQty) : 0;
        item.lineAmount = item.lineAmount ? parseFloat(item.lineAmount) : 0;
        item.remainSalesPhysical = item.remainSalesPhysical ? parseFloat(item.remainSalesPhysical) : 0;
        item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
        item.colorantprice = item.colorantprice ? parseFloat(item.colorantprice) : 0;
        item.vatamount = item.vatamount ? parseFloat(item.vatamount) : 0;
        item.qtyOrdered = item.qtyOrdered ? parseFloat(item.qtyOrdered) : 0;
        item.voucherdiscpercent = item.voucherdiscpercent ? parseFloat(item.voucherdiscpercent) : 0;
        item.voucherdiscamt = item.voucherdiscamt ? parseFloat(item.voucherdiscamt) : 0;
        item.enddiscamt = item.enddiscamt ? parseFloat(item.enddiscamt) : 0;
        item.endDisc = item.endDisc ? parseFloat(item.endDisc) : 0;
        item.multilnPercent = item.multilnPercent ? parseFloat(item.multilnPercent) : 0;
        item.multilndisc = item.multilndisc ? parseFloat(item.multilndisc) : 0;
        item.linediscpercent = item.linediscpercent ? parseFloat(item.linediscpercent) : 0;
        item.linediscamt = item.linediscamt ? parseFloat(item.linediscamt) : 0;
        item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
        item.promotiondisc = item.promotiondisc ? parseFloat(item.promotiondisc) : 0;
        item.instantdiscamt = item.instantdiscamt ? parseFloat(item.instantdiscamt) : 0;
        item.instantDisc = item.instantDisc ? parseFloat(item.instantDisc) : 0;
        item.vat = item.vat ? parseFloat(item.vat) : 0;
    };
    SalesTableService.prototype.calData = function (data) {
        data.amount = data.amount ? parseFloat(data.amount) : 0;
        data.sumTax = data.sumTax ? parseFloat(data.sumTax) : 0;
        data.disc = data.disc ? parseFloat(data.disc) : 0;
        data.netAmount = data.netAmount ? parseFloat(data.netAmount) : 0;
        data.vatamount = parseFloat(data.vatamount);
        data.voucherdiscpercent = data.voucherdiscpercent ? parseFloat(data.voucherdiscpercent) : 0;
        data.redeemAmount = data.redeemAmount ? parseFloat(data.redeemAmount) : 0;
        data.voucherdiscamt = data.voucherdiscamt ? parseFloat(data.voucherdiscamt) : 0;
        data.redeempts = data.redeempts ? parseFloat(data.redeempts) : 0;
    };
    SalesTableService.prototype.searchPainters = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data_1, paintersId_1, query1, painters_1, error_25;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log(item);
                        if (!item.inventlocationid) return [3 /*break*/, 3];
                        query = " select st.salesid ,st.salesname,st.painter,\n        ct.namealias as \"customerNameEn\",ct.name as \"customerNameAr\",\n        st.netamount as amount,st.lastmodifieddate\n        from salestable  st \n        inner join custtable ct on\n        ct.accountnum =st.invoiceaccount \n        where st.transkind ='SALESORDER'\n        and st.status  in ('PAID','PRINTED')\n                       and st.inventlocationid ='" + item.inventlocationid + "'\n                       and  COALESCE(st.painter, '') != '' \n                       order by st.lastmodifieddate desc;;\n        ";
                        return [4 /*yield*/, this.salestableDAO.getDAO().query(query)];
                    case 1:
                        data_1 = _a.sent();
                        paintersId_1 = [];
                        data_1.forEach(function (item) {
                            if (item.painter != null && item.painter && item.painter.toString().trim().length > 0) {
                                paintersId_1.push(item.painter);
                            }
                        });
                        paintersId_1 = Array.from(new Set(paintersId_1));
                        query1 = "select ct1.accountnum as \"painterCode\",ct1.\"name\" as \"painterAr\",\n         ct1.namealias as \"painterEn\" \n         from custtable ct1\n         ";
                        if (paintersId_1.length > 0) {
                            query1 += "where ct1.accountnum  in (" + paintersId_1
                                .map(function (painterID) {
                                return "'" + painterID + "'";
                            })
                                .join(",") + ");";
                        }
                        return [4 /*yield*/, this.salestableDAO.getDAO().query(query1)];
                    case 2:
                        painters_1 = _a.sent();
                        data_1.forEach(function (item, index) {
                            var painter = painters_1.find(function (painterObj) {
                                return painterObj.painterCode == item.painter;
                            });
                            if (painter) {
                                data_1[index] = Object.assign({}, data_1[index], painter);
                            }
                        });
                        return [2 /*return*/, data_1];
                    case 3: throw { message: Props_1.Props.INVALID_DATA };
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_25 = _a.sent();
                        throw error_25;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SalesTableService.prototype.map_return_for_designer_service = function (data, line) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return SalesTableService;
}());
exports.SalesTableService = SalesTableService;
