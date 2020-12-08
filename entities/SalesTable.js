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
var Inventlocation_1 = require("./Inventlocation");
var MovemenntType_1 = require("./MovemenntType");
var SalesLine_1 = require("./SalesLine");
var SalesTable = /** @class */ (function () {
    function SalesTable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "salesid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "salesId", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesname" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "salesName", void 0);
    __decorate([
        typeorm_1.Column({ name: "reservation" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "reservation", void 0);
    __decorate([
        typeorm_1.Column({ name: "custaccount" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "custAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceaccount" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "invoiceAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "deliverydate" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "deliveryDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deliveryaddress" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "deliveryAddress", void 0);
    __decorate([
        typeorm_1.Column({ name: "documentstatus" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "documentStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "recId", void 0);
    __decorate([
        typeorm_1.Column({ name: "languageid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "lang", void 0);
    __decorate([
        typeorm_1.Column({ name: "payment" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "payment", void 0);
    __decorate([
        typeorm_1.Column({ name: "custgroup" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "custGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "pricegroupid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "priceGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "shippingdaterequested" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "shippingDateRequested", void 0);
    __decorate([
        typeorm_1.Column({ name: "deliverystreet" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "deliveryStreet", void 0);
    __decorate([
        typeorm_1.Column({ name: "salestype" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "salesType", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesstatus" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "salesStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "numbersequencegroup" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "numberSequenceGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "cashdisc" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "cashDisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "intercompanyoriginalsalesid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "interCompanyOriginalSalesId", void 0);
    __decorate([
        typeorm_1.Column({ name: "freightsliptype" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "freightsliptype", void 0);
    __decorate([
        typeorm_1.Column({ name: "salestaker" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "salesTaker", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesgroup" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "salesGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "url" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchorderformnum" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "purchOrderFormNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "shippingdateconfirmed" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "shippingDateConfirmed", void 0);
    __decorate([
        typeorm_1.Column({ name: "deadline" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "deadline", void 0);
    __decorate([
        typeorm_1.Column({ name: "fixedduedate" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "fixedDueDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "receiptdateconfirmed" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "receiptDateConfirmed", void 0);
    __decorate([
        typeorm_1.Column({ name: "returndeadline" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "returnDeadLine", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "customerref" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "customerRef", void 0);
    __decorate([
        typeorm_1.Column({ name: "syncstatus" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "syncStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "amount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column({ name: "disc" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "disc", void 0);
    __decorate([
        typeorm_1.Column({ name: "netamount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "netAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "citycode" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "cityCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "districtcode" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "districtCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "latitude" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column({ name: "longitude" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column({ name: "forcustomer" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "forCustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "vehiclecode" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "vehicleCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "vouchernum" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "voucherNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "painter" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "painter", void 0);
    __decorate([
        typeorm_1.Column({ name: "ajpenddisc" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "ajpenddisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxgroup" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "taxGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "sumtax" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "sumTax", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobileno" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "mobileNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "inventLocationId", void 0);
    __decorate([
        typeorm_1.Column({ name: "region" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "region", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension2_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension2_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension3_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension3_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension4_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension4_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension5_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension5_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension6_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "salesmanId", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension7_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension7_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension8_" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "dimension8_", void 0);
    __decorate([
        typeorm_1.Column({ name: "instantdiscchecked" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "instantDiscChecked", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherdiscchecked" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "voucherDiscChecked", void 0);
    __decorate([
        typeorm_1.Column({ name: "vatamount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "vatamount", void 0);
    __decorate([
        typeorm_1.Column({ name: "pricediscgroupid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "priceDiscGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoicedate" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "invoiceDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoicecreatedby" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "invoiceCreatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "multilinediscountgroupid" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "multilineDiscountGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "deletedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], SalesTable.prototype, "deletedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "originalprinted" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "originalPrinted", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscash" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "isCash", void 0);
    __decorate([
        typeorm_1.Column({ name: "approvers" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "approvers", void 0);
    __decorate([
        typeorm_1.Column({ name: "isredeemable" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "isRedeemable", void 0);
    __decorate([
        typeorm_1.Column({ name: "transkind" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "transkind", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ name: "deliverytype" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "deliverytype", void 0);
    __decorate([
        typeorm_1.Column({ name: "redeempts" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "redeemPoints", void 0);
    __decorate([
        typeorm_1.Column({ name: "redeemptsamt" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "redeemAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherdiscamt" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "voucherdiscamt", void 0);
    __decorate([
        typeorm_1.Column({ name: "zipcode" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "zipcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "design_service_redeem_amount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "designServiceRedeemAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherdiscpercent" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "voucherdiscpercent", void 0);
    __decorate([
        typeorm_1.Column({ name: "vouchertype" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "vouchertype", void 0);
    __decorate([
        typeorm_1.Column({ name: "description" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_movement_in" }),
        __metadata("design:type", Boolean)
    ], SalesTable.prototype, "isMovementIn", void 0);
    __decorate([
        typeorm_1.Column({ name: "jazeerawarehouse" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "jazeeraWarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "card_amount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "cardAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "cash_amount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "cashAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "online_amount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "onlineAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "cust_email" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "custEmail", void 0);
    __decorate([
        typeorm_1.Column({ name: "shipping_amount" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "shippingAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "payment_type" }),
        __metadata("design:type", String)
    ], SalesTable.prototype, "paymentType", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return SalesLine_1.SalesLine; }, function (salesLine) { return salesLine.salestable; }),
        __metadata("design:type", Array)
    ], SalesTable.prototype, "salesLine", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "inventlocationid" }),
        typeorm_1.ManyToOne(function (type) { return Inventlocation_1.Inventlocation; }),
        __metadata("design:type", Inventlocation_1.Inventlocation)
    ], SalesTable.prototype, "warehouse", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "movement_type_id" }),
        typeorm_1.ManyToOne(function (type) { return MovemenntType_1.MovementType; }),
        __metadata("design:type", MovemenntType_1.MovementType)
    ], SalesTable.prototype, "movementType", void 0);
    __decorate([
        typeorm_1.Column({ name: "info", type: "json" }),
        __metadata("design:type", Object)
    ], SalesTable.prototype, "info", void 0);
    __decorate([
        typeorm_1.Column({ name: "apptype" }),
        __metadata("design:type", Number)
    ], SalesTable.prototype, "linesCount", void 0);
    SalesTable = __decorate([
        typeorm_1.Entity("salestable")
    ], SalesTable);
    return SalesTable;
}());
exports.SalesTable = SalesTable;
