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
var LedgerJournalTrans_1 = require("./LedgerJournalTrans");
var GeneralJournal = /** @class */ (function () {
    function GeneralJournal() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "journalnum" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "journalNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "voucherseries" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "voucherSeries", void 0);
    __decorate([
        typeorm_1.Column({ name: "log" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "log", void 0);
    __decorate([
        typeorm_1.Column({ name: "journaltype" }),
        __metadata("design:type", Number)
    ], GeneralJournal.prototype, "journalType", void 0);
    __decorate([
        typeorm_1.Column({ name: "journalname" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "journalName", void 0);
    __decorate([
        typeorm_1.Column({ name: "posted" }),
        __metadata("design:type", Number)
    ], GeneralJournal.prototype, "posted", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "posteddatetime" }),
        __metadata("design:type", Date)
    ], GeneralJournal.prototype, "postedDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], GeneralJournal.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], GeneralJournal.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "cashdate" }),
        __metadata("design:type", Date)
    ], GeneralJournal.prototype, "cashdate", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], GeneralJournal.prototype, "modifiedDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifiedby" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "modifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "syncstatus" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "syncStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], GeneralJournal.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], GeneralJournal.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], GeneralJournal.prototype, "deletedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "postedby" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "postedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], GeneralJournal.prototype, "createdDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "description" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "custaccount" }),
        __metadata("design:type", String)
    ], GeneralJournal.prototype, "custaccount", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return LedgerJournalTrans_1.LedgerJournalTrans; }, function (legerJournalTras) { return legerJournalTras.generalJournal; }),
        __metadata("design:type", Array)
    ], GeneralJournal.prototype, "legerJournalTras", void 0);
    GeneralJournal = __decorate([
        typeorm_1.Entity("ledgerjournaltable")
    ], GeneralJournal);
    return GeneralJournal;
}());
exports.GeneralJournal = GeneralJournal;
