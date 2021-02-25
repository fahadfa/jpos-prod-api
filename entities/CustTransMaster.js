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
var CustTransMaster = /** @class */ (function () {
    function CustTransMaster() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "invoice" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "invoice", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucher" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "voucher", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountnum" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "accountnum", void 0);
    __decorate([
        typeorm_1.Column({ name: "transdate" }),
        __metadata("design:type", Date)
    ], CustTransMaster.prototype, "transdate", void 0);
    __decorate([
        typeorm_1.Column({ name: "txt" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "txt", void 0);
    __decorate([
        typeorm_1.Column({ name: "amountmst" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "amountmst", void 0);
    __decorate([
        typeorm_1.Column({ name: "balance" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "balance", void 0);
    __decorate([
        typeorm_1.Column({ name: "duedate" }),
        __metadata("design:type", Date)
    ], CustTransMaster.prototype, "duedate", void 0);
    __decorate([
        typeorm_1.Column({ name: "payment" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "payment", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "currencycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "transtype" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "transtype", void 0);
    __decorate([
        typeorm_1.Column({ name: "approved" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "approved", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymmode" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "paymmode", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymreference" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "paymreference", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymmethod" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "paymmethod", void 0);
    __decorate([
        typeorm_1.Column({ name: "cashpayment" }),
        __metadata("design:type", Number)
    ], CustTransMaster.prototype, "cashpayment", void 0);
    __decorate([
        typeorm_1.Column({ name: "orderaccount" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "orderaccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "cashdisccode" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "cashdisccode", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymspec" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "paymspec", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymid" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "paymid", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymschedid" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "paymschedid", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], CustTransMaster.prototype, "modifieddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifiedby" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "modifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], CustTransMaster.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", String)
    ], CustTransMaster.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "syncdatetime" }),
        __metadata("design:type", Date)
    ], CustTransMaster.prototype, "syncdatetime", void 0);
    CustTransMaster = __decorate([
        typeorm_1.Entity("cust_trans")
    ], CustTransMaster);
    return CustTransMaster;
}());
exports.CustTransMaster = CustTransMaster;
