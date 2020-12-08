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
var FixedAssetGroup = /** @class */ (function () {
    function FixedAssetGroup() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "groupid" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "groupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "autonumber" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "autoNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "autonumbersequence" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "autoNumberSequence", void 0);
    __decorate([
        typeorm_1.Column({ name: "barcodenumbersequence" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "barCodeNumberSequence", void 0);
    __decorate([
        typeorm_1.Column({ name: "autonumberbarcode" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "autoNumberBarCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "assettype" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "assetType", void 0);
    __decorate([
        typeorm_1.Column({ name: "majortype" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "majorType", void 0);
    __decorate([
        typeorm_1.Column({ name: "propertytype" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "propertyType", void 0);
    __decorate([
        typeorm_1.Column({ name: "gislayerid" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "gislayerId", void 0);
    __decorate([
        typeorm_1.Column({ name: "location" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "deletedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], FixedAssetGroup.prototype, "deletedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], FixedAssetGroup.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], FixedAssetGroup.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], FixedAssetGroup.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "namealias" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "nameAlias", void 0);
    __decorate([
        typeorm_1.Column({ name: "servicelife" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "serviceLife", void 0);
    __decorate([
        typeorm_1.Column({ name: "depricationperiod" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "depricationPeriod", void 0);
    __decorate([
        typeorm_1.Column({ name: "deprication" }),
        __metadata("design:type", Boolean)
    ], FixedAssetGroup.prototype, "deprication", void 0);
    __decorate([
        typeorm_1.Column({ name: "periodfrequency" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "periodFrequency", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], FixedAssetGroup.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "capitalizationthreshold" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "capitalizationThreshold", void 0);
    __decorate([
        typeorm_1.Column({ name: "replacementcostfactor" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "replacementCostFactor", void 0);
    __decorate([
        typeorm_1.Column({ name: "insuredvaluefactor" }),
        __metadata("design:type", Number)
    ], FixedAssetGroup.prototype, "insuredValueFactor", void 0);
    FixedAssetGroup = __decorate([
        typeorm_1.Entity("fixedassetgroup")
    ], FixedAssetGroup);
    return FixedAssetGroup;
}());
exports.FixedAssetGroup = FixedAssetGroup;
