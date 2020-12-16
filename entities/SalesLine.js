"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var SalesTable_1 = require("../entities/SalesTable");
var Inventtable_1 = require("./Inventtable");
var Configtable_1 = require("./Configtable");
var InventSize_1 = require("./InventSize");
var InventTrans_1 = require("./InventTrans");
var SalesLine = /** @class */ (function () {
    function SalesLine() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "salesId", void 0);
    __decorate([
        typeorm_1.Column({ name: "linenum" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "lineNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesprice" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "salesprice", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesqty" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "salesQty", void 0);
    __decorate([
        typeorm_1.Column({ name: "lineamount" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "lineAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesunit" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "salesUnit", void 0);
    __decorate([
        typeorm_1.Column({ name: "priceunit" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "netAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "qtyordered" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "qtyOrdered", void 0);
    __decorate([
        typeorm_1.Column({ name: "remainsalesphysical" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "remainSalesPhysical", void 0);
    __decorate([
        typeorm_1.Column({ name: "remainsalesfinancial" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "remainSalesFinancial", void 0);
    __decorate([
        typeorm_1.Column({ name: "receiptdateconfirmed" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "receiptDateConfirmed", void 0);
    __decorate([
        typeorm_1.Column({ name: "shippingdaterequested" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "shippingDateRequested", void 0);
    __decorate([
        typeorm_1.Column({ name: "shippingdateconfirmed" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "shippingDateConfirmed", void 0);
    __decorate([
        typeorm_1.Column({ name: "confirmeddlv" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "confirmedDlv", void 0);
    __decorate([
        typeorm_1.Column({ name: "salestype" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "salesType", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "custgroup" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "custGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "custaccount" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "custAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventsizeid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "inventsizeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "configid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "configId", void 0);
    __decorate([
        typeorm_1.Column({ name: "numbersequencegroupid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "numberSequenceGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "inventLocationId", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventtransid" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "inventTransid", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesdelivernow" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "salesDeliverNow", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesstatus" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "salesStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "location" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({ name: "batchno" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "batchNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "instantdisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "instantDisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "instantdiscamt" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "instantdiscamt", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherdisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "voucherDisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "redeemdisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "redeeDisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "promotiondisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "promotiondisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "linetotaldisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "lineTotalDisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "linesalestax" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "lineSalesTax", void 0);
    __decorate([
        typeorm_1.Column({ name: "netamttax" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "netAmtTax", void 0);
    __decorate([
        typeorm_1.Column({ name: "linesalestaxpercent" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "lineSalesTaxPercent", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxgroup" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "taxGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxitemgroup" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "taxItemGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "linediscamt" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "linediscamt", void 0);
    __decorate([
        typeorm_1.Column({ name: "linediscpercent" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "linediscpercent", void 0);
    __decorate([
        typeorm_1.Column({ name: "customdiscamt" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "customDiscAmt", void 0);
    __decorate([
        typeorm_1.Column({ name: "supplmultipleqty" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "supplMultipleQty", void 0);
    __decorate([
        typeorm_1.Column({ name: "supplfreeqty" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "supplFreeQty", void 0);
    __decorate([
        typeorm_1.Column({ name: "multilndisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "multilndisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "multilnpercent" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "multilnPercent", void 0);
    __decorate([
        typeorm_1.Column({ name: "enddisc" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "endDisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "enddiscamt" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "enddiscamt", void 0);
    __decorate([
        typeorm_1.Column({ name: "linesalestaxperent" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "linesalestaxperent", void 0);
    __decorate([
        typeorm_1.Column({ name: "hexcode" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "hexCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "colorantid" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "colorantId", void 0);
    __decorate([
        typeorm_1.Column({ name: "colorantprice" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "colorantprice", void 0);
    __decorate([
        typeorm_1.Column({ name: "baseproduct" }),
        __metadata("design:type", Boolean)
    ], SalesLine.prototype, "baseProduct", void 0);
    __decorate([
        typeorm_1.Column({ name: "totalreturnedquantity" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "totalReturnedQuantity", void 0);
    __decorate([
        typeorm_1.Column({ name: "totalsettledamount" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "totalSettledAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "coloranthexcode" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "coloranthexcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "coloractive" }),
        __metadata("design:type", Boolean)
    ], SalesLine.prototype, "coloractive", void 0);
    __decorate([
        typeorm_1.Column({ name: "colorantactive" }),
        __metadata("design:type", Boolean)
    ], SalesLine.prototype, "colorantactive", void 0);
    __decorate([
        typeorm_1.Column({ name: "customprice" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "linesCount", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "lastModifieBby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], SalesLine.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "vatamount" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "vatamount", void 0);
    __decorate([
        typeorm_1.Column({ name: "vat" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "vat", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherdiscamt" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "voucherdiscamt", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherdiscpercent" }),
        __metadata("design:type", Number)
    ], SalesLine.prototype, "voucherdiscpercent", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_item_free" }),
        __metadata("design:type", Boolean)
    ], SalesLine.prototype, "isItemFree", void 0);
    __decorate([
        typeorm_1.Column({ name: "link_id" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "linkId", void 0);
    __decorate([
        typeorm_1.Column({ name: "batches", type: "json" }),
        __metadata("design:type", Object)
    ], SalesLine.prototype, "batch", void 0);
    __decorate([
        typeorm_1.Column({ name: "applied_discounts", type: "json" }),
        __metadata("design:type", Object)
    ], SalesLine.prototype, "appliedDiscounts", void 0);
    __decorate([
        typeorm_1.Column({ name: "jazeerawarehouse" }),
        __metadata("design:type", String)
    ], SalesLine.prototype, "jazeeraWarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_parent" }),
        __metadata("design:type", Boolean)
    ], SalesLine.prototype, "isParent", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "itemid" }),
        typeorm_1.ManyToOne(function (type) { return Inventtable_1.Inventtable; }),
        __metadata("design:type", Inventtable_1.Inventtable)
    ], SalesLine.prototype, "product", void 0);
    __decorate([
        typeorm_1.JoinColumn([
            { name: "configid", referencedColumnName: "code" },
            { name: "itemid", referencedColumnName: "itemid" },
        ]),
        typeorm_1.ManyToOne(function (type) { return Configtable_1.Configtable; }),
        __metadata("design:type", Configtable_1.Configtable)
    ], SalesLine.prototype, "color", void 0);
    __decorate([
        typeorm_1.JoinColumn([
            { name: "inventsizeid", referencedColumnName: "code" },
            { name: "itemid", referencedColumnName: "itemid" },
        ]),
        typeorm_1.ManyToOne(function (type) { return InventSize_1.Inventsize; }),
        __metadata("design:type", InventSize_1.Inventsize)
    ], SalesLine.prototype, "size", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "salesid" }),
        typeorm_1.ManyToOne(function (type) { return SalesTable_1.SalesTable; }),
        __metadata("design:type", SalesTable_1.SalesTable)
    ], SalesLine.prototype, "salestable", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "id" }),
        typeorm_1.OneToMany(function (type) { return InventTrans_1.Inventorytrans; }, function (inventtrans) { return inventtrans.salesLine; }),
        __metadata("design:type", Array)
    ], SalesLine.prototype, "inventtrans", void 0);
    SalesLine = __decorate([
        typeorm_1.Entity("salesline")
    ], SalesLine);
    return SalesLine;
}());
exports.SalesLine = SalesLine;
