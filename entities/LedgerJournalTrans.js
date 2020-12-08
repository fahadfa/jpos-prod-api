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
var GeneralJournal_1 = require("../entities/GeneralJournal");
var LedgerJournalTrans = /** @class */ (function () {
    function LedgerJournalTrans() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "journalnum" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "journalNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "linenum" }),
        __metadata("design:type", Number)
    ], LedgerJournalTrans.prototype, "lineNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "accounttype" }),
        __metadata("design:type", Number)
    ], LedgerJournalTrans.prototype, "accountType", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountnum" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "accountNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "company" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "company", void 0);
    __decorate([
        typeorm_1.Column({ name: "txt" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "txt", void 0);
    __decorate([
        typeorm_1.Column({ name: "amountcurdebit", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], LedgerJournalTrans.prototype, "amountCurDebit", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "amountcurcredit", precision: 18, scale: 2 }),
        __metadata("design:type", Number)
    ], LedgerJournalTrans.prototype, "amountCurCredit", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymentnotes" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "paymentNotes", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], LedgerJournalTrans.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], LedgerJournalTrans.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], LedgerJournalTrans.prototype, "modifiedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifiedby" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "modifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], LedgerJournalTrans.prototype, "createDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], LedgerJournalTrans.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "namearabic" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "nameArabic", void 0);
    __decorate([
        typeorm_1.Column({ name: "transdate" }),
        __metadata("design:type", Date)
    ], LedgerJournalTrans.prototype, "transdDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "region", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension2_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "department", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension3_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "costcenter", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension4_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "employee", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension5_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "project", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension6_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "salesman", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension7_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "brand", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension8_" }),
        __metadata("design:type", String)
    ], LedgerJournalTrans.prototype, "productline", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "journalnum" }),
        typeorm_1.ManyToOne(function (type) { return GeneralJournal_1.GeneralJournal; }),
        __metadata("design:type", GeneralJournal_1.GeneralJournal)
    ], LedgerJournalTrans.prototype, "generalJournal", void 0);
    LedgerJournalTrans = __decorate([
        typeorm_1.Entity("ledgerjournaltrans")
    ], LedgerJournalTrans);
    return LedgerJournalTrans;
}());
exports.LedgerJournalTrans = LedgerJournalTrans;
