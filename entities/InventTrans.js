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
var Inventbatch_1 = require("../entities/Inventbatch");
var SalesLine_1 = require("../entities/SalesLine");
var Inventorytrans = /** @class */ (function () {
    function Inventorytrans() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "statusissue" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "statusissue", void 0);
    __decorate([
        typeorm_1.Column({ name: "datephysical" }),
        __metadata("design:type", Date)
    ], Inventorytrans.prototype, "datephysical", void 0);
    __decorate([
        typeorm_1.Column({ name: "qty" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "qty", void 0);
    __decorate([
        typeorm_1.Column({ name: "transtype" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "transtype", void 0);
    __decorate([
        typeorm_1.Column({ name: "transrefid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "transrefid", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "invoiceid", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucher" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "voucher", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventtransidtransfer" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "inventtransidtransfer", void 0);
    __decorate([
        typeorm_1.Column({ name: "dateexpected" }),
        __metadata("design:type", Date)
    ], Inventorytrans.prototype, "dateexpected", void 0);
    __decorate([
        typeorm_1.Column({ name: "datefinancial" }),
        __metadata("design:type", Date)
    ], Inventorytrans.prototype, "datefinancial", void 0);
    __decorate([
        typeorm_1.Column({ name: "costamountphysical" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "costamountphysical", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventtransid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "inventtransid", void 0);
    __decorate([
        typeorm_1.Column({ name: "statusreceipt" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "statusreceipt", void 0);
    __decorate([
        typeorm_1.Column({ name: "packingslipreturned" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "packingslipreturned", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoicereturned" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "invoicereturned", void 0);
    __decorate([
        typeorm_1.Column({ name: "packingslipid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "packingslipid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dateinvent" }),
        __metadata("design:type", Date)
    ], Inventorytrans.prototype, "dateinvent", void 0);
    __decorate([
        typeorm_1.Column({ name: "custvendac" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "custvendac", void 0);
    __decorate([
        typeorm_1.Column({ name: "dateclosed" }),
        __metadata("design:type", Date)
    ], Inventorytrans.prototype, "dateclosed", void 0);
    __decorate([
        typeorm_1.Column({ name: "datestatus" }),
        __metadata("design:type", Date)
    ], Inventorytrans.prototype, "datestatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], Inventorytrans.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventsizeid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "inventsizeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "configid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "configid", void 0);
    __decorate([
        typeorm_1.Column({ name: "location" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({ name: "reservationid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "reservationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "inventlocationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "transactionclosed" }),
        __metadata("design:type", Boolean)
    ], Inventorytrans.prototype, "transactionClosed", void 0);
    __decorate([
        typeorm_1.Column({ name: "batchno" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "batchno", void 0);
    __decorate([
        typeorm_1.Column({ name: "reserve_status" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "reserveStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "sales_line_id" }),
        __metadata("design:type", String)
    ], Inventorytrans.prototype, "salesLineId", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "batchno" }),
        typeorm_1.ManyToOne(function (type) { return Inventbatch_1.Inventbatch; }),
        __metadata("design:type", Inventbatch_1.Inventbatch)
    ], Inventorytrans.prototype, "inventbatch", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "sales_line_id" }),
        typeorm_1.ManyToOne(function (type) { return SalesLine_1.SalesLine; }),
        __metadata("design:type", SalesLine_1.SalesLine)
    ], Inventorytrans.prototype, "salesLine", void 0);
    Inventorytrans = __decorate([
        typeorm_1.Entity("inventtrans")
    ], Inventorytrans);
    return Inventorytrans;
}());
exports.Inventorytrans = Inventorytrans;
