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
var FiscalYear = /** @class */ (function () {
    function FiscalYear() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], FiscalYear.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "yearno" }),
        __metadata("design:type", Number)
    ], FiscalYear.prototype, "yearNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], FiscalYear.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "closing" }),
        __metadata("design:type", Number)
    ], FiscalYear.prototype, "closing", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], FiscalYear.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], FiscalYear.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], FiscalYear.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], FiscalYear.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], FiscalYear.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], FiscalYear.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "endingdate" }),
        __metadata("design:type", Date)
    ], FiscalYear.prototype, "endingDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "startdate" }),
        __metadata("design:type", Date)
    ], FiscalYear.prototype, "startDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], FiscalYear.prototype, "lastModifiedDate", void 0);
    FiscalYear = __decorate([
        typeorm_1.Entity("fiscalyear")
    ], FiscalYear);
    return FiscalYear;
}());
exports.FiscalYear = FiscalYear;
