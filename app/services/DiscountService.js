"use strict";
/** @format */
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
var CusttableDAO_1 = require("../repos/CusttableDAO");
var typeorm_1 = require("typeorm");
var App_1 = require("../../utils/App");
var uuid = require("uuid");
var DiscountService = /** @class */ (function () {
    function DiscountService() {
        this.rawQuery = new RawQuery_1.RawQuery();
        this.custtableDAO = new CusttableDAO_1.CusttableDAO();
        this.db = typeorm_1.getManager();
    }
    DiscountService.prototype.getDiscount = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var result, checkCustomer, discountBlockItems, vendorCustomerAccount, defaultCustomer, _a, promotionalItems_1, vatData, discountBlockItemsArray_1, sabicCustomers, INTERIOR_AND_EXTERIOR, aramkoTahkomDiscounts, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 23, , 24]);
                        result = void 0;
                        checkCustomer = void 0;
                        discountBlockItems = void 0;
                        vendorCustomerAccount = void 0;
                        reqData.customerId = reqData.custaccount;
                        reqData.grossTotal = 0;
                        reqData.instantDiscGrossTotal = 0;
                        reqData.inventLocationId = this.sessionInfo.inventlocationid;
                        reqData.instantDiscountExcludeItems = [];
                        return [4 /*yield*/, this.custtableDAO.entity(this.sessionInfo.defaultcustomerid)];
                    case 1:
                        defaultCustomer = _b.sent();
                        if (!reqData.instantDiscountChecked) return [3 /*break*/, 3];
                        _a = reqData;
                        return [4 /*yield*/, this.rawQuery.instantDiscountExcludeItems(this.sessionInfo.usergroupconfigid)];
                    case 2:
                        _a.instantDiscountExcludeItems = _b.sent();
                        reqData.instantDiscountExcludeItems = reqData.instantDiscountExcludeItems[0].istantdiscountexclude
                            ? reqData.instantDiscountExcludeItems[0].istantdiscountexclude.split(",")
                            : [];
                        _b.label = 3;
                    case 3:
                        promotionalItems_1 = reqData.selectedItems
                            .filter(function (v) { return v.isItemFree == true; })
                            .map(function (d) {
                            return d.linkId;
                        });
                        // console.log("=====================", promotionalItems);
                        reqData.selectedItems.map(function (v) {
                            v.lineNum = reqData.selectedItems.indexOf(v);
                            reqData.grossTotal += parseFloat(v.price) * parseFloat(v.quantity);
                            // console.log(v.isParent, v.isItemFree)
                            if (reqData.instantDiscountExcludeItems.includes(v.itemid) ||
                                reqData.instantDiscountExcludeItems.includes(v.product.itemGroupId || v.product.intExt != 4) ||
                                promotionalItems_1.includes(v.linkId)) {
                            }
                            else {
                                reqData.instantDiscGrossTotal += parseFloat(v.price) * parseFloat(v.quantity);
                            }
                        });
                        if (reqData.orderType == "purchase") {
                            vendorCustomerAccount = defaultCustomer;
                            reqData.custaccount = vendorCustomerAccount.accountnum;
                            reqData.inventLocationId = reqData.jazeeraWarehouse;
                        }
                        if (!!reqData.custaccount) return [3 /*break*/, 4];
                        checkCustomer = defaultCustomer;
                        reqData.currency = checkCustomer.currency;
                        reqData.custaccount = checkCustomer.accountnum;
                        reqData.taxgroup = checkCustomer.taxgroup;
                        reqData.walkincustomer = checkCustomer.walkincustomer;
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.custtableDAO.entity(reqData.custaccount)];
                    case 5:
                        checkCustomer = _b.sent();
                        reqData.custaccount =
                            checkCustomer && checkCustomer.walkincustomer == true
                                ? this.sessionInfo.defaultcustomerid
                                : reqData.custaccount;
                        reqData.walkincustomer = checkCustomer.walkincustomer;
                        if (!checkCustomer) {
                            throw { message: "INVALID_CUSTOMER_CODE" };
                        }
                        _b.label = 6;
                    case 6:
                        if (!checkCustomer) {
                            throw { message: "INVALID_CUSTOMER_CODE" };
                        }
                        reqData.cashdisc = checkCustomer.cashdisc;
                        reqData.paymtermid = checkCustomer.paymtermid;
                        reqData.custtype = checkCustomer.walkincustomer ? defaultCustomer.custtype : checkCustomer.custtype;
                        reqData.custgroup = checkCustomer.custgroup;
                        reqData.mobile = checkCustomer.phone;
                        vatData = void 0;
                        if (!(reqData.walkincustomer == true)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.rawQuery.getCustomerTax(defaultCustomer.taxgroup)];
                    case 7:
                        vatData = _b.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this.rawQuery.getCustomerTax(checkCustomer.taxgroup)];
                    case 9:
                        vatData = _b.sent();
                        _b.label = 10;
                    case 10:
                        // console.log("=====================", vatData);
                        reqData.vat = vatData ? vatData.vat : 15;
                        reqData.vat = parseFloat(reqData.vat);
                        return [4 /*yield*/, this.rawQuery.getDiscountBlockItems(checkCustomer.custgroup, checkCustomer.accountnum, reqData.inventLocationId)];
                    case 11:
                        discountBlockItems = _b.sent();
                        discountBlockItemsArray_1 = [];
                        discountBlockItems.map(function (v) {
                            discountBlockItemsArray_1.push(v.itemid);
                        });
                        return [4 /*yield*/, this.sessionInfo.sabiccustomers];
                    case 12:
                        sabicCustomers = _b.sent();
                        if (sabicCustomers) {
                            if (sabicCustomers.split(",").includes(reqData.custaccount)) {
                                sabicCustomers = true;
                            }
                            else {
                                sabicCustomers = false;
                            }
                        }
                        INTERIOR_AND_EXTERIOR = false;
                        return [4 /*yield*/, this.rawQuery.getAramkoTahkomDiscounts(reqData.custaccount, this.sessionInfo.dataareaid)];
                    case 13:
                        aramkoTahkomDiscounts = _b.sent();
                        if (aramkoTahkomDiscounts.length > 0) {
                            INTERIOR_AND_EXTERIOR = true;
                        }
                        return [4 /*yield*/, this.allocateData(reqData)];
                    case 14:
                        _b.sent();
                        if (!(reqData.selectedItems && reqData.selectedItems.length > 0)) return [3 /*break*/, 21];
                        if (!sabicCustomers) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.sabicCustomersDiscount(reqData, discountBlockItemsArray_1)];
                    case 15:
                        result = _b.sent();
                        return [3 /*break*/, 20];
                    case 16:
                        if (!INTERIOR_AND_EXTERIOR) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.aramkoTahkomDiscount(reqData, aramkoTahkomDiscounts, discountBlockItemsArray_1)];
                    case 17:
                        result = _b.sent();
                        return [3 /*break*/, 20];
                    case 18: return [4 /*yield*/, this.calDiscount(reqData, discountBlockItemsArray_1)];
                    case 19:
                        result = _b.sent();
                        _b.label = 20;
                    case 20: return [3 /*break*/, 22];
                    case 21:
                        result = reqData;
                        _b.label = 22;
                    case 22: return [2 /*return*/, result];
                    case 23:
                        error_1 = _b.sent();
                        throw error_1;
                    case 24: return [2 /*return*/];
                }
            });
        });
    };
    DiscountService.prototype.calDiscount = function (reqData, discountBlockItemsArray) {
        return __awaiter(this, void 0, void 0, function () {
            var getDiscountsList, checkDiscounts, promotionalDiscountItems, buyOneGetOneDiscountItems, salesDiscountItems, discounts, isTotalDiscount, isMultiLineDiscount, totalPercentage, linePercentageData, multilineDiscRanges, multilineQuantity, multiLineItemCode, multlineDiscItems, total, totalBeforeVat, grossTotal, vouchers, isValidVoucher, isVoucherApplied, voucherDiscountedItems, message, instantDiscountRanges, isInstantDiscount, instantDiscountExcludeItems, isCashDisc, voucherType, voucherAmount, inQueryStr_1, voucherDiscountedItem, _loop_1, this_1, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getDiscountsList(reqData)];
                    case 1:
                        getDiscountsList = _b.sent();
                        checkDiscounts = getDiscountsList.checkDiscounts;
                        promotionalDiscountItems = getDiscountsList.promotionalDiscountItems;
                        buyOneGetOneDiscountItems = getDiscountsList.buyOneGetOneDiscountItems;
                        salesDiscountItems = getDiscountsList.salesDiscountItems;
                        discounts = getDiscountsList.discounts;
                        reqData.discount = 0;
                        reqData.voucherdiscamt = 0;
                        isTotalDiscount = discounts[0].enddisc && discounts[0].enddisc != "" ? true : false;
                        isMultiLineDiscount = discounts[0].multilinedisc && discounts[0].multilinedisc != "" ? true : false;
                        return [4 /*yield*/, this.rawQuery.getTotalDiscPercentage(discounts[0].enddisc, reqData.currency, this.sessionInfo.dataareaid)];
                    case 2:
                        totalPercentage = _b.sent();
                        return [4 /*yield*/, this.rawQuery.getLineDiscPercentage(discounts[0].linedisc, reqData.currency, this.sessionInfo.dataareaid, reqData.custaccount)];
                    case 3:
                        linePercentageData = _b.sent();
                        if (linePercentageData && linePercentageData.length > 0) {
                            reqData.selectedItems.forEach(function (element) {
                                var linePercentage = linePercentageData.find(function (v) { return v.itemrelation == element.itemid || v.itemrelation == discounts[0].linedisc; });
                                linePercentage = linePercentage ? linePercentage.percent1 : 0;
                                if (linePercentage > 0) {
                                    reqData.instantDiscGrossTotal -= parseFloat(element.price) * parseFloat(element.quantity);
                                }
                            });
                        }
                        return [4 /*yield*/, this.rawQuery.getMultiDiscRanges(discounts[0].multilinedisc, reqData.currency, this.sessionInfo.dataareaid)];
                    case 4:
                        multilineDiscRanges = _b.sent();
                        multilineQuantity = 0;
                        multiLineItemCode = multilineDiscRanges.map(function (v) {
                            return v.itemrelation;
                        });
                        multlineDiscItems = checkDiscounts.filter(function (v) { return multiLineItemCode.includes(v.multilinedisc); });
                        multlineDiscItems = multlineDiscItems.map(function (v) {
                            return v.itemid;
                        });
                        reqData.selectedItems.map(function (v) {
                            if (multlineDiscItems.includes(v.itemid)) {
                                multilineQuantity += parseInt(v.quantity);
                            }
                        });
                        total = 0;
                        totalBeforeVat = 0;
                        grossTotal = 0;
                        isValidVoucher = false;
                        isVoucherApplied = false;
                        voucherDiscountedItems = [];
                        instantDiscountRanges = [];
                        isInstantDiscount = false;
                        isCashDisc = false;
                        voucherType = "percentage";
                        voucherAmount = 0;
                        if (reqData.paymtermid != "CASH" &&
                            reqData.paymtermid != "" &&
                            reqData.isCash == true &&
                            reqData.cashdisc != null &&
                            reqData.cashdisc.trim() != "") {
                            isTotalDiscount = true;
                            isCashDisc = true;
                            totalPercentage = "5%";
                        }
                        else if (reqData.paymtermid != "CASH" && reqData.paymtermid != "" && reqData.isCash == false) {
                            isTotalDiscount = false;
                            isCashDisc = false;
                            totalPercentage = 0;
                        }
                        if (!reqData.instantDiscountChecked) return [3 /*break*/, 8];
                        if (!reqData.walkincustomer) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rawQuery.checkInstantDiscount(this.sessionInfo.defaultcustomerid)];
                    case 5:
                        instantDiscountRanges = _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rawQuery.checkInstantDiscount(reqData.custaccount)];
                    case 7:
                        instantDiscountRanges = _b.sent();
                        _b.label = 8;
                    case 8:
                        if (!reqData.voucherDiscountChecked) return [3 /*break*/, 12];
                        if (!reqData.code) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.rawQuery.getVoucherDiscounts(reqData.code, this.sessionInfo.dataareaid)];
                    case 9:
                        vouchers = _b.sent();
                        if (!vouchers) return [3 /*break*/, 11];
                        if (vouchers.voucherRules) {
                            // console.log("========", vouchers.voucherRules);
                            voucherType = vouchers.voucherRules.discountType;
                            voucherAmount = parseFloat(vouchers.voucherRules.discountAmount);
                        }
                        if (vouchers.voucher_type == "JUNE_SALES_VOUCHER_DISCOUNT") {
                            reqData.isOTPRequired = true;
                        }
                        else {
                            reqData.isOTPRequired = false;
                        }
                        inQueryStr_1 = "";
                        reqData.selectedItems.map(function (v) {
                            inQueryStr_1 += "'" + v.itemid + "',";
                        });
                        return [4 /*yield*/, this.rawQuery.getVoucherDiscountItems(vouchers.voucher_type, inQueryStr_1.substr(0, inQueryStr_1.length - 1))];
                    case 10:
                        voucherDiscountedItem = _b.sent();
                        voucherDiscountedItems = [];
                        voucherDiscountedItem.map(function (v) {
                            voucherDiscountedItems.push(v.itemid);
                        });
                        if (vouchers.is_enabled == 1 ||
                            vouchers.allowed_numbers <= vouchers.used_numbers ||
                            new Date(vouchers.expiry_date) < new Date(App_1.App.DateNow())) {
                            if (vouchers.is_enabled == 1) {
                                isValidVoucher = false;
                                message = "INVALID_VOUCHER";
                            }
                            else if (vouchers.allowed_numbers <= vouchers.used_numbers) {
                                isValidVoucher = false;
                                message = "ALREADY_USED";
                            }
                            else if (new Date(vouchers.expiry_date) < new Date(App_1.App.DateNow())) {
                                isValidVoucher = false;
                                message = "VOUCHER_EXPIRED";
                            }
                        }
                        else {
                            if (vouchers.custaccount == "" || !vouchers.custaccount) {
                                isValidVoucher = true;
                            }
                            else {
                                if (vouchers.custaccount == reqData.customerId ||
                                    reqData.custtype.toString() == vouchers.custaccount.toString() ||
                                    reqData.mobile == vouchers.custaccount ||
                                    vouchers.custaccount.includes(reqData.customerId) ||
                                    reqData.customerId.includes(vouchers.custaccount)) {
                                    isValidVoucher = true;
                                }
                                else {
                                    isValidVoucher = false;
                                }
                            }
                        }
                        return [3 /*break*/, 12];
                    case 11:
                        message = "INVALID_VOUCHER";
                        _b.label = 12;
                    case 12:
                        reqData.selectedItems.sort(function (a, b) {
                            if (a.quantity > b.quantity)
                                return -1;
                            if (a.quantity < b.quantity)
                                return 1;
                            return 0;
                        });
                        _loop_1 = function (item) {
                            var isLineDiscount, linedisc, linePercentage, isNoDiscount, isValidVoucherItem, instantDiscountPercent, isSalesDiscount, _i, instantDiscountRanges_1, data, multilinefilter, salesDiscount, condition, appliedDiscounts, freeQty, freeItem, promotionalDiscountAmount, buy_one_get_one, promotionalDiscountDetails, isPromotionDiscount, isBuyOneGetOneDiscount, buyOneGetOneDiscountDetails, selectedQuantity, parentQuantity, freeItems, _a, _b, _c, j, i, freeItems, _d, _e, _f, j, i, itemDiscount;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        isLineDiscount = discounts[0].linedisc && discounts[0].linedisc != "" ? true : false;
                                        linedisc = checkDiscounts.find(function (v) { return v.itemid == item.itemid; });
                                        linePercentage = linePercentageData.find(function (v) { return v.itemrelation == item.itemid || v.itemrelation == linedisc.linedisc; });
                                        linePercentage = linePercentage ? linePercentage.percent1 : 0;
                                        if (isLineDiscount && linePercentage <= 0) {
                                            isLineDiscount = false;
                                        }
                                        else if (linePercentage > 0) {
                                            isLineDiscount = true;
                                        }
                                        isNoDiscount = false;
                                        isValidVoucherItem = isValidVoucher;
                                        instantDiscountPercent = 0;
                                        isSalesDiscount = false;
                                        if (instantDiscountRanges.length > 0) {
                                            isInstantDiscount = true;
                                            instantDiscountExcludeItems = reqData.instantDiscountExcludeItems;
                                            for (_i = 0, instantDiscountRanges_1 = instantDiscountRanges; _i < instantDiscountRanges_1.length; _i++) {
                                                data = instantDiscountRanges_1[_i];
                                                if (reqData.instantDiscGrossTotal >= parseFloat(data.minamount) &&
                                                    reqData.instantDiscGrossTotal <= parseFloat(data.maxamount)) {
                                                    instantDiscountPercent = data.discpercent;
                                                    break;
                                                }
                                            }
                                        }
                                        console.log("instantDiscountPercent:", instantDiscountPercent, reqData.instantDiscGrossTotal);
                                        isMultiLineDiscount = multilineDiscRanges.length > 0 ? true : false;
                                        if (isMultiLineDiscount) {
                                            multilinefilter = checkDiscounts.filter(function (v) { return v.multilinedisc == multilineDiscRanges[0].itemrelation && v.itemid == item.itemid; });
                                            isMultiLineDiscount = multilinefilter.length > 0 ? true : false;
                                        }
                                        salesDiscount = salesDiscountItems.filter(function (v) { return v.itemid == item.itemid; });
                                        salesDiscount = salesDiscount.length > 0 ? salesDiscount[0] : null;
                                        isSalesDiscount = salesDiscount ? true : false;
                                        if (reqData.voucherDiscountChecked && isValidVoucher) {
                                            isValidVoucherItem = vouchers.voucher_type == "ALL_ITEMS" ? true : voucherDiscountedItems.includes(item.itemid);
                                            if (!isValidVoucherItem) {
                                                message = "voucher is not valid for selected products";
                                            }
                                        }
                                        condition = "!item.isItemFree";
                                        condition = eval(condition);
                                        item.lineTotalDisc = item.lineTotalDisc ? item.lineTotalDisc : 0;
                                        if (!condition) return [3 /*break*/, 41];
                                        appliedDiscounts = [];
                                        freeQty = 0;
                                        freeItem = void 0;
                                        promotionalDiscountAmount = 0;
                                        buy_one_get_one = 0;
                                        promotionalDiscountDetails = promotionalDiscountItems.filter(function (v) { return v.itemid == item.itemid; });
                                        isPromotionDiscount = false;
                                        isBuyOneGetOneDiscount = false;
                                        buyOneGetOneDiscountDetails = void 0;
                                        // if ((!reqData.voucherDiscountChecked || isValidVoucherItem == false) && !reqData.instantDiscountChecked) {
                                        promotionalDiscountDetails = promotionalDiscountDetails.length > 0 ? promotionalDiscountDetails[0] : null;
                                        console.log(promotionalDiscountDetails);
                                        if (promotionalDiscountDetails &&
                                            promotionalDiscountDetails.inventsizeid.trim() != "" &&
                                            promotionalDiscountDetails.inventsizeid != null) {
                                            if (promotionalDiscountDetails.inventsizeid != item.inventsizeid) {
                                                promotionalDiscountDetails = null;
                                                item.checkFreeItem = false;
                                            }
                                        }
                                        selectedQuantity = reqData.selectedItems
                                            .filter(function (v) { return v.itemid == item.itemid && v.inventsizeid == item.inventsizeid; })
                                            .reduce(function (res, item) { return res + parseInt(item.quantity); }, 0);
                                        parentQuantity = Math.max.apply(Math, reqData.selectedItems
                                            .filter(function (v) { return v.linkId == item.linkId && v.isItemFree == false; })
                                            .map(function (o) { return parseInt(o.quantity); }, 0));
                                        parentQuantity = parentQuantity == -Infinity ? 0 : parentQuantity;
                                        if (!(promotionalDiscountDetails && item.isParent && parseInt(item.quantity) == parentQuantity)) return [3 /*break*/, 9];
                                        if (!(promotionalDiscountDetails.multipleQty && selectedQuantity >= promotionalDiscountDetails.multipleQty)) return [3 /*break*/, 8];
                                        isPromotionDiscount = true;
                                        freeItems = reqData.selectedItems.filter(function (v) { return v.linkId == item.linkId && v.isItemFree == true; });
                                        _a = [];
                                        for (_b in freeItems)
                                            _a.push(_b);
                                        _c = 0;
                                        _g.label = 1;
                                    case 1:
                                        if (!(_c < _a.length)) return [3 /*break*/, 7];
                                        j = _a[_c];
                                        i = reqData.selectedItems.indexOf(freeItems[j]);
                                        reqData.selectedItems[i].appliedDiscounts = [];
                                        promotionalDiscountAmount +=
                                            parseFloat(reqData.selectedItems[i].price) * parseFloat(reqData.selectedItems[i].quantity);
                                        if (!(isCashDisc || isTotalDiscount)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this_1.totalDiscount(reqData.selectedItems[i], reqData, checkDiscounts, totalPercentage)];
                                    case 2:
                                        _g.sent();
                                        if (reqData.selectedItems[i].enddiscamt > 0) {
                                            reqData.selectedItems[i].appliedDiscounts.push({
                                                discountType: "TOTAL_DISCOUNT",
                                                percentage: parseFloat(reqData.selectedItems[i].endDisc),
                                                discountAmount: parseFloat(reqData.selectedItems[i].enddiscamt),
                                                cond: [],
                                            });
                                        }
                                        promotionalDiscountAmount -= reqData.selectedItems[i].enddiscamt;
                                        return [3 /*break*/, 5];
                                    case 3: return [4 /*yield*/, this_1.totalDiscount(reqData.selectedItems[i], reqData, checkDiscounts, 0)];
                                    case 4:
                                        _g.sent();
                                        _g.label = 5;
                                    case 5:
                                        reqData.selectedItems[i].lineamountafterdiscount = parseFloat(reqData.selectedItems[i].priceAfterdiscount);
                                        reqData.selectedItems[i].vat = reqData.vat;
                                        reqData.selectedItems[i].vatamount =
                                            parseFloat(reqData.selectedItems[i].priceAfterdiscount) * (reqData.selectedItems[i].vat / 100);
                                        reqData.selectedItems[i].priceAfterVat =
                                            parseFloat(reqData.selectedItems[i].priceAfterdiscount) +
                                                parseFloat(reqData.selectedItems[i].vatamount);
                                        reqData.selectedItems[i].lineamount =
                                            parseFloat(reqData.selectedItems[i].priceAfterdiscount) +
                                                parseFloat(reqData.selectedItems[i].vatamount);
                                        total += reqData.selectedItems[i].priceAfterVat;
                                        totalBeforeVat += reqData.selectedItems[i].lineamountafterdiscount;
                                        grossTotal +=
                                            (parseFloat(reqData.selectedItems[i].price) + parseFloat(reqData.selectedItems[i].colorantprice)) *
                                                parseInt(reqData.selectedItems[i].quantity);
                                        _g.label = 6;
                                    case 6:
                                        _c++;
                                        return [3 /*break*/, 1];
                                    case 7:
                                        freeQty =
                                            Math.floor(item.quantity / promotionalDiscountDetails.multipleQty) * promotionalDiscountDetails.freeQty;
                                        _g.label = 8;
                                    case 8: return [3 /*break*/, 10];
                                    case 9:
                                        if (promotionalDiscountDetails && item.isParent && parseInt(item.quantity) != parentQuantity) {
                                            item.isParent = false;
                                        }
                                        _g.label = 10;
                                    case 10:
                                        if (promotionalDiscountAmount > 0) {
                                            isPromotionDiscount = true;
                                            reqData.selectedItems.map(function (v) {
                                                if (v.linkId == item.linkId) {
                                                    v.isPromotionDiscountApplied = true;
                                                }
                                            });
                                        }
                                        else {
                                            isPromotionDiscount = false;
                                        }
                                        buyOneGetOneDiscountDetails = buyOneGetOneDiscountItems.filter(function (v) { return v.itemid == item.itemid; });
                                        buyOneGetOneDiscountDetails = buyOneGetOneDiscountDetails.length > 0 ? buyOneGetOneDiscountDetails[0] : null;
                                        if (buyOneGetOneDiscountDetails) {
                                            if (buyOneGetOneDiscountDetails.multipleQty && item.quantity >= buyOneGetOneDiscountDetails.multipleQty) {
                                                isBuyOneGetOneDiscount = true;
                                            }
                                        }
                                        if (!discountBlockItemsArray.includes(item.itemid)) return [3 /*break*/, 12];
                                        isNoDiscount = true;
                                        return [4 /*yield*/, this_1.noDiscount(item, reqData)];
                                    case 11:
                                        _g.sent();
                                        total += item.priceAfterVat * parseInt(item.quantity);
                                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        _g.label = 12;
                                    case 12:
                                        if (!isBuyOneGetOneDiscount) return [3 /*break*/, 19];
                                        freeItems = reqData.selectedItems.filter(function (v) { return v.linkId == item.linkId && v.isItemFree == true; });
                                        _d = [];
                                        for (_e in freeItems)
                                            _d.push(_e);
                                        _f = 0;
                                        _g.label = 13;
                                    case 13:
                                        if (!(_f < _d.length)) return [3 /*break*/, 18];
                                        j = _d[_f];
                                        i = reqData.selectedItems.indexOf(freeItems[j]);
                                        reqData.selectedItems[i].appliedDiscounts = [];
                                        itemDiscount = parseFloat(reqData.selectedItems[i].price) / 2;
                                        buy_one_get_one += parseFloat(itemDiscount) * parseInt(reqData.selectedItems[i].quantity);
                                        reqData.selectedItems[i].buyOneGetOneDiscount =
                                            parseFloat(itemDiscount) * parseInt(reqData.selectedItems[i].quantity);
                                        if (!(isCashDisc || isTotalDiscount)) return [3 /*break*/, 15];
                                        return [4 /*yield*/, this_1.totalDiscount(reqData.selectedItems[i], reqData, checkDiscounts, totalPercentage)];
                                    case 14:
                                        _g.sent();
                                        if (reqData.selectedItems[i].enddiscamt > 0) {
                                            reqData.selectedItems[i].appliedDiscounts.push({
                                                discountType: "TOTAL_DISCOUNT",
                                                percentage: parseFloat(reqData.selectedItems[i].endDisc),
                                                discountAmount: parseFloat(reqData.selectedItems[i].enddiscamt),
                                                cond: [],
                                            });
                                        }
                                        reqData.selectedItems[i].buyOneGetOneDiscount -= parseFloat(reqData.selectedItems[i].enddiscamt) / 2;
                                        buy_one_get_one -= parseFloat(reqData.selectedItems[i].enddiscamt) / 2;
                                        _g.label = 15;
                                    case 15: return [4 /*yield*/, this_1.buyOneGetOneDiscount(reqData.selectedItems[i], reqData)];
                                    case 16:
                                        _g.sent();
                                        reqData.selectedItems[i].appliedDiscounts.push({
                                            discountType: "BUY_ONE_GET_ONE_DISCOUNT",
                                            discountAmount: parseFloat(reqData.selectedItems[i].buyOneGetOneDiscount),
                                            cond: [
                                                {
                                                    multipleQty: buyOneGetOneDiscountDetails.multipleQty,
                                                    freeQty: buyOneGetOneDiscountDetails.freeQty,
                                                },
                                            ],
                                        });
                                        reqData.selectedItems[i].lineamountafterdiscount = parseFloat(reqData.selectedItems[i].priceAfterdiscount);
                                        reqData.selectedItems[i].vat = reqData.vat;
                                        reqData.selectedItems[i].vatamount =
                                            parseFloat(reqData.selectedItems[i].priceAfterdiscount) * (reqData.selectedItems[i].vat / 100);
                                        reqData.selectedItems[i].priceAfterVat =
                                            parseFloat(reqData.selectedItems[i].priceAfterdiscount) + parseFloat(reqData.selectedItems[i].vatamount);
                                        total += item.priceAfterVat;
                                        totalBeforeVat += reqData.selectedItems[i].lineamountafterdiscount;
                                        grossTotal +=
                                            (parseFloat(reqData.selectedItems[i].price) + parseFloat(reqData.selectedItems[i].colorantprice)) *
                                                parseInt(reqData.selectedItems[i].quantity);
                                        _g.label = 17;
                                    case 17:
                                        _f++;
                                        return [3 /*break*/, 13];
                                    case 18:
                                        if (buy_one_get_one > 0) {
                                            isBuyOneGetOneDiscount = true;
                                        }
                                        else {
                                            isBuyOneGetOneDiscount = false;
                                        }
                                        _g.label = 19;
                                    case 19:
                                        if (!!isNoDiscount) return [3 /*break*/, 40];
                                        // if (isValidVoucher) {
                                        //   if (vouchers) {
                                        //     if (vouchers.voucher_type == "ALL_ITEMS") {
                                        //       isValidVoucher = true;
                                        //     } else {
                                        //       isValidVoucher = voucherDiscountedItems.includes(item.itemid);
                                        //     }
                                        //   }
                                        // }
                                        if (isInstantDiscount && !isNoDiscount && !isPromotionDiscount && !isBuyOneGetOneDiscount) {
                                            if (instantDiscountExcludeItems.includes(item.itemid) ||
                                                instantDiscountExcludeItems.includes(item.product.itemGroupId || item.product.intExt != 4)) {
                                                isInstantDiscount = false;
                                            }
                                            else {
                                                isInstantDiscount = true;
                                            }
                                        }
                                        if (!isValidVoucherItem) return [3 /*break*/, 21];
                                        isVoucherApplied = true;
                                        //parseFloat(item.price) * item.quantity * (parseFloat(voucher.discount_percent) / 100)
                                        if (voucherType == "amount") {
                                            vouchers.voucherAmount = voucherAmount;
                                            vouchers.voucherType = voucherType;
                                            // console.log(vouchers);
                                        }
                                        return [4 /*yield*/, this_1.calVoucherDiscount(item, reqData, vouchers)];
                                    case 20:
                                        _g.sent();
                                        if (item.voucherdiscamt > 0) {
                                            appliedDiscounts.push({
                                                discountType: "VOUCHER_DISCOUNT",
                                                percentage: parseFloat(item.voucherdisc),
                                                discountAmount: parseFloat(item.voucherdiscamt),
                                            });
                                        }
                                        total += item.priceAfterVat;
                                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        return [3 /*break*/, 39];
                                    case 21:
                                        if (!(isLineDiscount && !isNoDiscount)) return [3 /*break*/, 25];
                                        return [4 /*yield*/, this_1.lineDiscount(item, reqData, checkDiscounts, linePercentage)];
                                    case 22:
                                        _g.sent();
                                        if (item.linediscamt > 0) {
                                            appliedDiscounts.push({
                                                discountType: "LINE_DISCOUNT",
                                                percentage: parseFloat(item.linediscpercent),
                                                discountAmount: parseFloat(item.linediscamt),
                                                cond: [],
                                            });
                                        }
                                        if (!(isTotalDiscount && !isNoDiscount)) return [3 /*break*/, 24];
                                        return [4 /*yield*/, this_1.totalDiscount(item, reqData, checkDiscounts, totalPercentage)];
                                    case 23:
                                        _g.sent();
                                        if (item.enddiscamt > 0) {
                                            appliedDiscounts.push({
                                                discountType: "TOTAL_DISCOUNT",
                                                percentage: item.endDisc,
                                                discountAmount: item.enddiscamt,
                                                cond: [],
                                            });
                                        }
                                        _g.label = 24;
                                    case 24:
                                        item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                                        item.vat = reqData.vat;
                                        item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                                        item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                                        total += item.priceAfterVat;
                                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        return [3 /*break*/, 39];
                                    case 25:
                                        if (!(isInstantDiscount &&
                                            !isNoDiscount &&
                                            !isLineDiscount &&
                                            !isPromotionDiscount &&
                                            !isBuyOneGetOneDiscount &&
                                            !item.isPromotionDiscountApplied)) return [3 /*break*/, 27];
                                        return [4 /*yield*/, this_1.calInstantDiscount(reqData, item, instantDiscountPercent)];
                                    case 26:
                                        _g.sent();
                                        if (item.instantdiscamt > 0) {
                                            appliedDiscounts.push({
                                                discountType: "INSTANT_DISCOUNT",
                                                percentage: parseFloat(item.instantDisc),
                                                discountAmount: parseFloat(item.instantdiscamt),
                                                cond: instantDiscountRanges,
                                            });
                                        }
                                        total += item.priceAfterVat;
                                        totalBeforeVat += item.lineamountafterdiscount;
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        return [3 /*break*/, 39];
                                    case 27:
                                        if (!(!isLineDiscount &&
                                            !isTotalDiscount &&
                                            !isMultiLineDiscount &&
                                            !isPromotionDiscount &&
                                            !isBuyOneGetOneDiscount)) return [3 /*break*/, 29];
                                        return [4 /*yield*/, this_1.noDiscount(item, reqData)];
                                    case 28:
                                        _g.sent();
                                        total += item.priceAfterVat;
                                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        return [3 /*break*/, 39];
                                    case 29:
                                        if (!(isTotalDiscount && !isNoDiscount)) return [3 /*break*/, 31];
                                        return [4 /*yield*/, this_1.totalDiscount(item, reqData, checkDiscounts, totalPercentage)];
                                    case 30:
                                        _g.sent();
                                        if (item.enddiscamt > 0) {
                                            appliedDiscounts.push({
                                                discountType: "TOTAL_DISCOUNT",
                                                percentage: item.endDisc,
                                                discountAmount: item.enddiscamt,
                                                cond: [],
                                            });
                                        }
                                        _g.label = 31;
                                    case 31:
                                        if (!(isMultiLineDiscount && !isNoDiscount)) return [3 /*break*/, 34];
                                        return [4 /*yield*/, this_1.getMultiLinePercent(item, multilineDiscRanges, checkDiscounts, discounts[0].multilinedisc, multilineQuantity)];
                                    case 32:
                                        _g.sent();
                                        return [4 /*yield*/, this_1.multiLineDiscount(item, reqData)];
                                    case 33:
                                        _g.sent();
                                        if (item.multilnPercent > 0) {
                                            appliedDiscounts.push({
                                                discountType: "MULTI_LINE_DISCOUNT",
                                                discountAmount: parseFloat(item.multilndisc),
                                                percentage: parseFloat(item.multilnPercent),
                                                cond: multilineDiscRanges,
                                            });
                                        }
                                        item.multilndisc;
                                        item.multilnPercent;
                                        _g.label = 34;
                                    case 34:
                                        if (!(isPromotionDiscount && !isNoDiscount)) return [3 /*break*/, 36];
                                        if (!(promotionalDiscountAmount > 0)) return [3 /*break*/, 36];
                                        item.promotionalDiscount = promotionalDiscountAmount;
                                        item.supplMultipleQty = promotionalDiscountDetails.multipleQty;
                                        item.supplFreeQty = promotionalDiscountDetails.freeQty;
                                        return [4 /*yield*/, this_1.promotionalDiscount(item, reqData)];
                                    case 35:
                                        _g.sent();
                                        appliedDiscounts.push({
                                            discountType: "PROMOTIONAL_DISCOUNT",
                                            discountAmount: parseFloat(item.promotionalDiscount),
                                            cond: [
                                                {
                                                    multipleQty: promotionalDiscountDetails.multipleQty,
                                                    freeQty: promotionalDiscountDetails.freeQty,
                                                },
                                            ],
                                        });
                                        _g.label = 36;
                                    case 36:
                                        if (!(isBuyOneGetOneDiscount && !isNoDiscount)) return [3 /*break*/, 38];
                                        item.buyOneGetOneDiscount = buy_one_get_one;
                                        return [4 /*yield*/, this_1.buyOneGetOneDiscount(item, reqData)];
                                    case 37:
                                        _g.sent();
                                        appliedDiscounts.push({
                                            discountType: "BUY_ONE_GET_ONE_DISCOUNT",
                                            discountAmount: buy_one_get_one,
                                            cond: [
                                                {
                                                    multipleQty: buyOneGetOneDiscountDetails.multipleQty,
                                                    freeQty: buyOneGetOneDiscountDetails.freeQty,
                                                },
                                            ],
                                        });
                                        _g.label = 38;
                                    case 38:
                                        item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                                        item.vat = reqData.vat;
                                        console.log(item.priceAfterdiscount);
                                        item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                                        item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                                        total += item.priceAfterVat;
                                        totalBeforeVat += item.lineamountafterdiscount;
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        _g.label = 39;
                                    case 39:
                                        item.netAmount = item.priceAfterVat;
                                        _g.label = 40;
                                    case 40:
                                        appliedDiscounts.map(function (v) {
                                            v.percentage = v.percentage ? parseFloat(v.percentage) : v.percentage;
                                        });
                                        item.appliedDiscounts = appliedDiscounts;
                                        console.log("===========================", item.itemid, ":", item.vat, item.vatamount, item.priceAfterdiscount);
                                        _g.label = 41;
                                    case 41: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = reqData.selectedItems;
                        _b.label = 13;
                    case 13:
                        if (!(_i < _a.length)) return [3 /*break*/, 16];
                        item = _a[_i];
                        return [5 /*yield**/, _loop_1(item)];
                    case 14:
                        _b.sent();
                        _b.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 13];
                    case 16:
                        reqData.total = total;
                        reqData.grossTotal = grossTotal;
                        reqData.totalBeforeVat = totalBeforeVat;
                        reqData.isVoucherApplied = isVoucherApplied;
                        if (isVoucherApplied) {
                            reqData.message = "You Saved " + reqData.voucherdiscamt.toFixed(2) + " from this Voucher";
                        }
                        else {
                            if (message) {
                                reqData.message = message;
                            }
                            else {
                                reqData.message = "voucher not applied";
                            }
                            if (reqData.isOTORequired) {
                                reqData.isOTORequired = false;
                            }
                        }
                        return [4 /*yield*/, this.calData(reqData)];
                    case 17:
                        _b.sent();
                        reqData.selectedItems.sort(function (a, b) {
                            if (a.lineNum < b.lineNum)
                                return -1;
                            if (a.lineNum > b.lineNum)
                                return 1;
                            return 0;
                        });
                        return [2 /*return*/, reqData];
                }
            });
        });
    };
    DiscountService.prototype.totalDiscount = function (item, reqData, checkDiscounts, totalPercentage) {
        return __awaiter(this, void 0, void 0, function () {
            var enddisc, dummyData;
            return __generator(this, function (_a) {
                console.log("totalDiscount");
                enddisc = checkDiscounts.filter(function (v) { return v.itemid == item.itemid; });
                dummyData = {};
                dummyData.enddisc = "";
                enddisc = enddisc.length > 0 ? enddisc[0] : dummyData;
                if (enddisc.enddisc == "1") {
                    totalPercentage = totalPercentage;
                }
                else {
                    totalPercentage = 0;
                }
                item.endDisc = parseFloat(totalPercentage);
                item.enddiscamt =
                    (parseFloat(item.price) + parseFloat(item.colorantprice)) *
                        parseInt(item.quantity) *
                        (parseFloat(totalPercentage) / 100);
                item.priceAfterdiscount = item.priceAfterdiscount
                    ? parseFloat(item.priceAfterdiscount) - parseFloat(item.enddiscamt)
                    : (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity - parseFloat(item.enddiscamt);
                item.lineTotalDisc = item.lineTotalDisc ? item.lineTotalDisc : 0;
                item.lineTotalDisc += item.enddiscamt;
                reqData.discount += item.enddiscamt;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.lineDiscount = function (item, reqData, checkDiscounts, linePercentage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("lineDiscount");
                // console.log(linedisc);
                // let dummyData: any = {};
                // dummyData.linedisc = "";
                // linedisc = linedisc ? linedisc : dummyData;
                // console.log(linePercentage);
                // // if (linedisc && linedisc.linedisc && linedisc.linedisc != "") {
                // linePercentage = linePercentage.find(
                //   (v: any) => v.itemrelation == item.itemid || v.itemrelation == linedisc.linedisc
                // );
                // linePercentage = linePercentage ? linePercentage.percent1 : 0;
                // } else {
                //   linePercentage = 0;
                // }
                console.log(linePercentage);
                item.linediscpercent = parseFloat(linePercentage);
                item.linediscamt = parseFloat(item.price) * parseInt(item.quantity) * (parseFloat(linePercentage) / 100);
                console.log(item.priceAfterdiscount);
                item.priceAfterdiscount = parseFloat(item.priceAfterdiscount)
                    ? parseFloat(item.priceAfterdiscount) - parseFloat(item.linediscamt)
                    : (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity - parseFloat(item.linediscamt);
                console.log(item.priceAfterdiscount);
                item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                item.lineTotalDisc = item.lineTotalDisc ? item.lineTotalDisc : 0;
                item.lineTotalDisc += parseFloat(item.linediscamt);
                reqData.discount += parseFloat(item.linediscamt);
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.multiLineDiscount = function (line, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var productPrice;
            return __generator(this, function (_a) {
                console.log("multiLineDiscount");
                line.multilnPercent = line.multilnPercent ? parseFloat(line.multilnPercent) : 0;
                line.multilndisc = parseFloat(line.price) * parseInt(line.quantity) * (parseFloat(line.multilnPercent) / 100);
                productPrice = (parseFloat(line.price) + parseFloat(line.colorantprice)) * line.quantity;
                line.priceAfterdiscount = line.priceAfterdiscount
                    ? parseFloat(line.priceAfterdiscount) - parseFloat(line.multilndisc)
                    : productPrice - parseFloat(line.multilndisc);
                line.lineTotalDisc = line.lineTotalDisc ? line.lineTotalDisc : 0;
                line.lineTotalDisc += line.multilndisc;
                reqData.discount += line.multilndisc;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.buyOneGetOneDiscount = function (item, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("buyOneGetOneDiscount");
                item.priceAfterdiscount = parseFloat(item.priceAfterdiscount)
                    ? parseFloat(item.priceAfterdiscount) - parseFloat(item.buyOneGetOneDiscount)
                    : (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity -
                        parseFloat(item.buyOneGetOneDiscount);
                item.lineTotalDisc = item.lineTotalDisc ? item.lineTotalDisc : 0;
                item.lineTotalDisc += parseFloat(item.buyOneGetOneDiscount);
                reqData.discount += item.buyOneGetOneDiscount;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.promotionalDiscount = function (item, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("promotionalDiscount");
                item.priceAfterdiscount = parseFloat(item.priceAfterdiscount)
                    ? parseFloat(item.priceAfterdiscount) - item.promotionalDiscount
                    : (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity - item.promotionalDiscount;
                item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                item.lineTotalDisc = item.lineTotalDisc ? item.lineTotalDisc : 0;
                item.lineTotalDisc += parseFloat(item.promotionalDiscount);
                reqData.discount += item.promotionalDiscount;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.aramkoTahkomDiscount = function (reqData, aramkoTahkomDiscounts, discountBlockItemsArray) {
        return __awaiter(this, void 0, void 0, function () {
            var total, totalBeforeVat, grossTotal, totalPercentage, inQueryStr, itemTypes, _loop_2, this_2, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        total = 0;
                        totalBeforeVat = 0;
                        grossTotal = 0;
                        totalPercentage = 0;
                        reqData.discount = reqData.discount ? reqData.discount : 0;
                        inQueryStr = "";
                        reqData.selectedItems.forEach(function (v) {
                            inQueryStr += "'" + v.itemid + "',";
                        });
                        inQueryStr = inQueryStr.length > 1 ? inQueryStr.substr(0, inQueryStr.length - 1) : inQueryStr;
                        return [4 /*yield*/, this.db.query("select itemid, int_ext as \"intExt\" from inventtable where itemid in (" + inQueryStr + ")")];
                    case 1:
                        itemTypes = _b.sent();
                        _loop_2 = function (item) {
                            var itemtype, filteredItem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        itemtype = itemTypes.filter(function (v) { return v.itemid == item.itemid; });
                                        itemtype = itemtype.length > 0 ? itemtype[0] : {};
                                        filteredItem = aramkoTahkomDiscounts.filter(function (v) { return v.intExt == itemtype.intExt; });
                                        filteredItem = filteredItem.length > 0 ? filteredItem[0] : {};
                                        totalPercentage = filteredItem.salesDiscount ? filteredItem.salesDiscount : 0;
                                        if (!discountBlockItemsArray.includes(item.itemid)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this_2.noDiscount(item, reqData)];
                                    case 1:
                                        _a.sent();
                                        total += item.priceAfterVat * parseInt(item.quantity);
                                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        item.aramkoTahkomDiscount = parseFloat(item.price) * item.quantity * (parseFloat(totalPercentage) / 100);
                                        item.priceAfterdiscount =
                                            (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity -
                                                parseFloat(item.aramkoTahkomDiscount);
                                        item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                                        item.vat = reqData.vat;
                                        item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                                        item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                                        item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
                                        item.lineTotalDisc = item.aramkoTahkomDiscount;
                                        total += item.priceAfterVat;
                                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * parseInt(item.quantity);
                                        reqData.discount += item.aramkoTahkomDiscount;
                                        item.netAmount = item.priceAfterVat;
                                        item.appliedDiscounts = [
                                            {
                                                discountType: "INTERIOR_AND_EXTERIOR",
                                                percentage: parseFloat(totalPercentage),
                                                discountAmount: parseFloat(item.aramkoTahkomDiscount),
                                            },
                                        ];
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _i = 0, _a = reqData.selectedItems;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        item = _a[_i];
                        return [5 /*yield**/, _loop_2(item)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        reqData.total = total;
                        reqData.grossTotal = grossTotal;
                        reqData.totalBeforeVat = totalBeforeVat;
                        reqData.isVoucherApplied = false;
                        reqData.message = "For Aramko And Thahakom Customers Other Discounts Will Not Apply";
                        return [4 /*yield*/, this.calData(reqData)];
                    case 6:
                        _b.sent();
                        return [2 /*return*/, reqData];
                }
            });
        });
    };
    DiscountService.prototype.calVoucherDiscount = function (item, reqData, voucher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("calVoucherDiscount");
                if (voucher.voucherType == "amount") {
                    voucher.discount_percent = (parseFloat(item.price) * parseInt(item.quantity)) / parseFloat(reqData.grossTotal);
                    item.voucherdisc = parseFloat(voucher.discount_percent);
                    item.voucherdiscamt = voucher.voucherAmount * parseFloat(voucher.discount_percent);
                }
                else {
                    item.voucherdisc = parseFloat(voucher.discount_percent);
                    item.voucherdiscamt = parseFloat(item.price) * item.quantity * (parseFloat(voucher.discount_percent) / 100);
                }
                console.log(item.voucherdiscamt);
                item.priceAfterdiscount =
                    (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity - parseFloat(item.voucherdiscamt);
                item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                item.vat = reqData.vat;
                item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
                item.lineTotalDisc += item.voucherdiscamt;
                reqData.discount += item.voucherdiscamt;
                reqData.voucherdiscamt += item.voucherdiscamt;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.calSalesDiscount = function (item, reqData, salesDiscount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("calSalesDiscount");
                item.salesdisc = parseFloat(salesDiscount.discount);
                item.salesdiscamt = parseFloat(item.price) * item.quantity * (parseFloat(salesDiscount.discount) / 100);
                item.priceAfterdiscount = item.priceAfterdiscount
                    ? item.priceAfterdiscount - parseFloat(item.salesdiscamt)
                    : (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity - parseFloat(item.salesdiscamt);
                console.log(item.priceAfterdiscount);
                item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
                item.lineTotalDisc += item.salesdiscamt;
                reqData.discount += item.salesdiscamt;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.calInstantDiscount = function (reqData, item, discount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("calInstantDiscount");
                item.instantDisc = discount;
                item.instantdiscamt = parseFloat(item.price) * item.quantity * (discount / 100);
                item.priceAfterdiscount =
                    (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity - parseFloat(item.instantdiscamt);
                item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                item.vat = reqData.vat;
                item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
                item.lineTotalDisc += item.instantdiscamt;
                reqData.discount += item.instantdiscamt;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.sabicCustomersDiscount = function (reqData, discountBlockItemsArray) {
        return __awaiter(this, void 0, void 0, function () {
            var total, totalBeforeVat, grossTotal, totalPercentage, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        total = 0;
                        totalBeforeVat = 0;
                        grossTotal = 0;
                        totalPercentage = 10;
                        reqData.discount = reqData.discount ? reqData.discount : 0;
                        _i = 0, _a = reqData.selectedItems;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        item = _a[_i];
                        if (!discountBlockItemsArray.includes(item.itemid)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.noDiscount(item, reqData)];
                    case 2:
                        _b.sent();
                        total += item.priceAfterVat;
                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity;
                        return [3 /*break*/, 4];
                    case 3:
                        item.sabicCustomerDiscount = parseFloat(item.price) * item.quantity * (parseFloat(totalPercentage) / 100);
                        item.priceAfterdiscount =
                            (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity -
                                parseFloat(item.sabicCustomerDiscount);
                        item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                        item.vat = reqData.vat;
                        item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                        item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                        item.lineTotalDisc = item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
                        item.lineTotalDisc = item.sabicCustomerDiscount;
                        total += item.priceAfterVat;
                        totalBeforeVat += parseFloat(item.lineamountafterdiscount);
                        grossTotal += (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity;
                        reqData.discount += item.sabicCustomerDiscount;
                        item.netAmount = item.priceAfterVat;
                        item.appliedDiscounts = [
                            {
                                discountType: "SABIC_CUSTOMER_DISCOUNT",
                                percentage: parseFloat(totalPercentage),
                                discountAmount: parseFloat(item.sabicCustomerDiscount),
                            },
                        ];
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        reqData.total = total;
                        reqData.grossTotal = grossTotal;
                        reqData.totalBeforeVat = totalBeforeVat;
                        reqData.isVoucherApplied = false;
                        reqData.message = "For Sabic Customers Other Discounts Will Not Apply";
                        return [4 /*yield*/, this.calData(reqData)];
                    case 6:
                        _b.sent();
                        return [2 /*return*/, reqData];
                }
            });
        });
    };
    DiscountService.prototype.noDiscount = function (item, reqData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("++++++++++++++++noDiscount+++++++++++++++++");
                item.priceAfterdiscount = (parseFloat(item.price) + parseFloat(item.colorantprice)) * item.quantity;
                item.lineamountafterdiscount = parseFloat(item.priceAfterdiscount);
                item.vat = reqData.vat;
                item.vatamount = parseFloat(item.priceAfterdiscount) * (item.vat / 100);
                item.priceAfterVat = parseFloat(item.priceAfterdiscount) + parseFloat(item.vatamount);
                item.lineTotalDisc += item.lineTotalDisc ? parseFloat(item.lineTotalDisc) : 0;
                reqData.discount += 0;
                return [2 /*return*/];
            });
        });
    };
    DiscountService.prototype.getDiscountsList = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var inQueryStr, checkDiscounts, promotionalDiscountItems, buyOneGetOneDiscountItems, discounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inQueryStr = "";
                        reqData.selectedItems.map(function (v) {
                            inQueryStr += "'" + v.itemid + "',";
                        });
                        return [4 /*yield*/, this.rawQuery.checkDiscounts(inQueryStr.substr(0, inQueryStr.length - 1))];
                    case 1:
                        checkDiscounts = _a.sent();
                        return [4 /*yield*/, this.rawQuery.getPromotionalDiscountItems(inQueryStr.substr(0, inQueryStr.length - 1), reqData.inventLocationId, reqData.custaccount, reqData.custtype)];
                    case 2:
                        promotionalDiscountItems = _a.sent();
                        return [4 /*yield*/, this.rawQuery.getBuyOneGetOneDiscountItems(inQueryStr.substr(0, inQueryStr.length - 1), reqData.inventLocationId, reqData.custaccount, reqData.custtype)];
                    case 3:
                        buyOneGetOneDiscountItems = _a.sent();
                        return [4 /*yield*/, this.rawQuery.getDiscounts(reqData.custaccount)];
                    case 4:
                        discounts = _a.sent();
                        return [4 /*yield*/, {
                                checkDiscounts: checkDiscounts,
                                promotionalDiscountItems: promotionalDiscountItems,
                                discounts: discounts,
                                buyOneGetOneDiscountItems: buyOneGetOneDiscountItems,
                                salesDiscountItems: [],
                            }];
                    case 5: 
                    // let salesDiscountItems: any = await this.rawQuery.getSalesDisocuntItems(
                    //   inQueryStr.substr(0, inQueryStr.length - 1),
                    //   reqData.inventLocationId,
                    //   reqData.custaccount,
                    //   reqData.custtype
                    // );
                    // console.log(salesDiscountItems);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.prototype.getMultiLinePercent = function (line, multilineDiscRanges, checkDiscounts, multiLineDisc, quantity) {
        var percent = 0;
        for (var _i = 0, multilineDiscRanges_1 = multilineDiscRanges; _i < multilineDiscRanges_1.length; _i++) {
            var element = multilineDiscRanges_1[_i];
            percent = parseFloat(element.percent1);
            if (quantity >= parseFloat(element.quantityamountfrom) &&
                (quantity < parseFloat(element.quantityamountto) || parseFloat(element.quantityamountto) == 0)) {
                line.multilnPercent = percent;
                line.multilineDiscRanges = multilineDiscRanges;
            }
        }
    };
    DiscountService.prototype.takeTwoDecimalValues = function (value) {
        return parseFloat(value.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    };
    DiscountService.prototype.calData = function (reqData) {
        reqData.vatamount = 0;
        reqData.vat = parseFloat(reqData.vat);
        for (var _i = 0, _a = reqData.selectedItems; _i < _a.length; _i++) {
            var ele = _a[_i];
            console.log(ele.lineTotalDisc);
            ele.lineamount =
                (ele.price + ele.colorantprice) * parseInt(ele.quantity) +
                    parseFloat(ele.lineTotalDisc) -
                    parseFloat(ele.vatamount);
            ele.vatamount = parseFloat(ele.vatamount);
            ele.vat = parseFloat(ele.vat);
            ele.lineTotalDisc = parseFloat(ele.lineTotalDisc);
            ele.lineamount = parseFloat(ele.lineamount);
            ele.netAmount = parseFloat(ele.netAmount);
            reqData.vatamount += parseFloat(ele.vatamount);
        }
        reqData.vatamount = reqData.vatamount;
        reqData.discount = reqData.discount;
        reqData.totalBeforeVat = reqData.totalBeforeVat;
        reqData.total = reqData.total;
        reqData.grossTotal = reqData.grossTotal;
    };
    DiscountService.prototype.allocateData = function (reqData) {
        reqData.selectedItems.forEach(function (ele) {
            delete ele.instantDisc;
            delete ele.instantdiscamt;
            delete ele.vat;
            delete ele.vatamount;
            delete ele.priceAfterVat;
            delete ele.lineTotalDisc;
            delete ele.priceAfterdiscount;
            delete ele.multilndisc;
            delete ele.multilnPercent;
            delete ele.lineamountafterdiscount;
            delete ele.endDisc;
            delete ele.enddiscamt;
            delete ele.linediscpercent;
            delete ele.linediscamt;
            delete ele.lineTotalDisc;
            delete ele.sabicCustomerDiscount;
            delete ele.appliedDiscounts;
        });
    };
    DiscountService.prototype.groupBy = function (array, f) {
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
    return DiscountService;
}());
exports.DiscountService = DiscountService;
