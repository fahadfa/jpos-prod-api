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
var LedgerTrans = /** @class */ (function () {
    function LedgerTrans() {
        this.isFiscalYearClosureAccount = false;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], LedgerTrans.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountnum" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "accountNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "transdate" }),
        __metadata("design:type", Date)
    ], LedgerTrans.prototype, "transDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "txt" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "txt", void 0);
    __decorate([
        typeorm_1.Column({ name: "amountmst" }),
        __metadata("design:type", Number)
    ], LedgerTrans.prototype, "amountMst", void 0);
    __decorate([
        typeorm_1.Column({ name: "closing" }),
        __metadata("design:type", Number)
    ], LedgerTrans.prototype, "closing", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "journalnum" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "journalNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], LedgerTrans.prototype, "modifiedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifiedby" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "modifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], LedgerTrans.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountpltype" }),
        __metadata("design:type", Number)
    ], LedgerTrans.prototype, "accountpltype", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], LedgerTrans.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], LedgerTrans.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "isfiscalyearclosureaccount" }),
        __metadata("design:type", Boolean)
    ], LedgerTrans.prototype, "isFiscalYearClosureAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "region", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension2_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "department", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension3_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "costcenter", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension4_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "employee", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension5_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "project", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension6_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "salesman", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension7_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "brand", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension8_" }),
        __metadata("design:type", String)
    ], LedgerTrans.prototype, "productline", void 0);
    LedgerTrans = __decorate([
        typeorm_1.Entity("ledgertrans")
    ], LedgerTrans);
    return LedgerTrans;
}());
exports.LedgerTrans = LedgerTrans;
