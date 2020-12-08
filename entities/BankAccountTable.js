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
var BankAccountTable = /** @class */ (function () {
    function BankAccountTable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "accountid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "accountId", void 0);
    __decorate([
        typeorm_1.Column({ name: "ledgeraccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "ledgerAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankgroupid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "currencyCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "address" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ name: "zipcode" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "zipcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "county" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "county", void 0);
    __decorate([
        typeorm_1.Column({ name: "countryregionid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "countryRegionId", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountnum" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "accountnum", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankdestinationname" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankDestinationName", void 0);
    __decorate([
        typeorm_1.Column({ name: "companygroupaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "companyGroupAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankcompanystatementname" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankCompanyStatementName", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankcin" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankCin", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankinterbankclearingcode_be" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "bankinterBankClearingCodeBe", void 0);
    __decorate([
        typeorm_1.Column({ name: "registrationnum" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "registrationNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "phone" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({ name: "telefax" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "teleFax", void 0);
    __decorate([
        typeorm_1.Column({ name: "divisionpaymid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "divisionPaymId", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "state" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatoryuser" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "mandatoryUser", void 0);
    __decorate([
        typeorm_1.Column({ name: "url" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column({ name: "telex" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "telex", void 0);
    __decorate([
        typeorm_1.Column({ name: "cellularphone" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "cellularPhone", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankaccountvalidationmethod" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "bankAccountValidationMethod", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankmulticurrency" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "bankMultiCurrency", void 0);
    __decorate([
        typeorm_1.Column({ name: "banksortcode" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankSortCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "disccreditmaxmst" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "discCreditMaxMst", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankclearingcode" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankClearingCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankcontractaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankContractAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "girocontract" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "giroContract", void 0);
    __decorate([
        typeorm_1.Column({ name: "girocontractaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "giroContractAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "feecontractaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "feeContractAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "companypaymid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "companyPaymId", void 0);
    __decorate([
        typeorm_1.Column({ name: "custpaymfeepost" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "custPaymFeePost", void 0);
    __decorate([
        typeorm_1.Column({ name: "custpaymfeeaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "custPaymFeeAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "contactperson" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "contactPerson", void 0);
    __decorate([
        typeorm_1.Column({ name: "debitdirectid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "debitDirectId", void 0);
    __decorate([
        typeorm_1.Column({ name: "swiftno" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "swiftNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "discdelaynoticedays" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "discDelayNoticeDays", void 0);
    __decorate([
        typeorm_1.Column({ name: "banksuffix" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankSuffix", void 0);
    __decorate([
        typeorm_1.Column({ name: "banktransfercode" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankTransferCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "city" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({ name: "street" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "street", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymmankeepifremovedfrombatch" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "paymManKeepIfRemovedFromBatch", void 0);
    __decorate([
        typeorm_1.Column({ name: "pager" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "pager", void 0);
    __decorate([
        typeorm_1.Column({ name: "sms" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "sms", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankcodetype" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "bankCodeType", void 0);
    __decorate([
        typeorm_1.Column({ name: "iban" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "iban", void 0);
    __decorate([
        typeorm_1.Column({ name: "ledgerjournalnameid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "ledgerJournalNameId", void 0);
    __decorate([
        typeorm_1.Column({ name: "remitcollectionamount" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "remitCollectionAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "remitdiscountamount" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "remitDiscountAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "remitcollectionaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "remitCollectionAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "remitdiscountaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "remitDiscountAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceremitamount" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "invoiceRemitAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceremitaccount" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "invoiceRemitAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "includebankbarcode_fi" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "includeBankBarCodeFi", void 0);
    __decorate([
        typeorm_1.Column({ name: "printgiro_fi" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "printGiroFi", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], BankAccountTable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], BankAccountTable.prototype, "recid", void 0);
    BankAccountTable = __decorate([
        typeorm_1.Entity("bankaccounttable")
    ], BankAccountTable);
    return BankAccountTable;
}());
exports.BankAccountTable = BankAccountTable;
