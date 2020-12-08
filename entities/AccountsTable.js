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
var AccountsTable = /** @class */ (function () {
    function AccountsTable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "accountnum" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "accountNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountname" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "accountName", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountpltype" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "accountType", void 0);
    __decorate([
        typeorm_1.Column({ name: "offsetaccount" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "offsetAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "ledgerclosing" }),
        __metadata("design:type", Boolean)
    ], AccountsTable.prototype, "ledgerClosing", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxgroup" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "taxGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "blockedinjournal" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "blockedInJournal", void 0);
    __decorate([
        typeorm_1.Column({ name: "debcredproposal" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "debcredProposal", void 0);
    __decorate([
        typeorm_1.Column({ name: "srucode" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "sruCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "conversionprinciple" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "conversionPrinciple", void 0);
    __decorate([
        typeorm_1.Column({ name: "openingaccount" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "openingAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "companygroupaccount" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "companyGroupAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimspec" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "dimSpec", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxcode" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "taxCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorytaxcode" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryTaxCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorycurrency" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryCurrency", void 0);
    __decorate([
        typeorm_1.Column({ name: "autoallocate" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "autoalLocate", void 0);
    __decorate([
        typeorm_1.Column({ name: "posting" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "posting", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatoryposting" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryPosting", void 0);
    __decorate([
        typeorm_1.Column({ name: "user_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "user_", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatoryuser" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryUser", void 0);
    __decorate([
        typeorm_1.Column({ name: "debcredcheck" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "debcredCheck", void 0);
    __decorate([
        typeorm_1.Column({ name: "reversesign" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "reverseSign", void 0);
    __decorate([
        typeorm_1.Column({ name: "column_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "column_", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxdirection" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "taxDirection", void 0);
    __decorate([
        typeorm_1.Column({ name: "linesub" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "lineSub", void 0);
    __decorate([
        typeorm_1.Column({ name: "lineexceed" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "lineExceed", void 0);
    __decorate([
        typeorm_1.Column({ name: "underlinenumerals" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "underLinenumerals", void 0);
    __decorate([
        typeorm_1.Column({ name: "underlinetxt" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "underLineTxt", void 0);
    __decorate([
        typeorm_1.Column({ name: "italic" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "italic", void 0);
    __decorate([
        typeorm_1.Column({ name: "boldtypeface" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "boldTypeFace", void 0);
    __decorate([
        typeorm_1.Column({ name: "exchadjusted" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "exchAdjusted", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountnamealias" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "accountNameAlias", void 0);
    __decorate([
        typeorm_1.Column({ name: "closed" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "closed", void 0);
    __decorate([
        typeorm_1.Column({ name: "debcredbalancedemand" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "debCredBalanceDemand", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxfree" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "taxFree", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxitemgroup" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "taxItemGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "monetary" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "monetary", void 0);
    __decorate([
        typeorm_1.Column({ name: "totalbyperiod_fr" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "totalByPeriodFr", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountcategoryref" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "accountCategoryRef", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorypaymreference" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryPaymReference", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "recVersion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "recId", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], AccountsTable.prototype, "modifiedDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "deletedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], AccountsTable.prototype, "deletedDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], AccountsTable.prototype, "createdDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], AccountsTable.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], AccountsTable.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "balance" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "balance", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "locked" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "locked", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "region", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension2_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "department", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension3_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "costcenter", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension4_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "employee", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension5_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "project", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension6_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "salesman", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension7_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "brand", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension8_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "productline", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryRegion", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension2_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatorydDepartment", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension3_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryCostcenter", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension4_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryEmployee", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension5_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryProject", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension6_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatorySalesman", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension7_" }),
        __metadata("design:type", Number)
    ], AccountsTable.prototype, "mandatoryBrand", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorydimension8_" }),
        __metadata("design:type", String)
    ], AccountsTable.prototype, "mandatoryproductLine", void 0);
    AccountsTable = __decorate([
        typeorm_1.Entity("accountstable")
    ], AccountsTable);
    return AccountsTable;
}());
exports.AccountsTable = AccountsTable;
