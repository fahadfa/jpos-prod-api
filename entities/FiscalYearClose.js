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
var FiscalYearClose = /** @class */ (function () {
    function FiscalYearClose() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], FiscalYearClose.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "closingid" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "closingId", void 0);
    __decorate([
        typeorm_1.Column({ name: "txt" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "txt", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", Number)
    ], FiscalYearClose.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], FiscalYearClose.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], FiscalYearClose.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "posteddatetime" }),
        __metadata("design:type", Date)
    ], FiscalYearClose.prototype, "postedDatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "postedby" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "postedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], FiscalYearClose.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], FiscalYearClose.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], FiscalYearClose.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "yearno" }),
        __metadata("design:type", Number)
    ], FiscalYearClose.prototype, "yearNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "endingdate" }),
        __metadata("design:type", Date)
    ], FiscalYearClose.prototype, "endingDate", void 0);
    FiscalYearClose = __decorate([
        typeorm_1.Entity("fiscalyearclose")
    ], FiscalYearClose);
    return FiscalYearClose;
}());
exports.FiscalYearClose = FiscalYearClose;
