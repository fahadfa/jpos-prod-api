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
var FixedAssetGroup_1 = require("./FixedAssetGroup");
var FixedAssetTable = /** @class */ (function () {
    function FixedAssetTable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "assetid" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "assetId", void 0);
    __decorate([
        typeorm_1.Column({ name: "assetgroup" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "assetGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "location" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({ name: "documents" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "documents", void 0);
    __decorate([
        typeorm_1.Column({ name: "serialnum" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "serialNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "insurancepolicynum" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "insurancePolicyNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "make" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "make", void 0);
    __decorate([
        typeorm_1.Column({ name: "model" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "model", void 0);
    __decorate([
        typeorm_1.Column({ name: "guaranteedate" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "guaranteeDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "mainassetid" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "mainassetId", void 0);
    __decorate([
        typeorm_1.Column({ name: "responsible" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "responsible", void 0);
    __decorate([
        typeorm_1.Column({ name: "assettype" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "assetType", void 0);
    __decorate([
        typeorm_1.Column({ name: "quantity" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column({ name: "barcode" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "barCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "unitofmeasure" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "unitOfMeasure", void 0);
    __decorate([
        typeorm_1.Column({ name: "insurancedate1" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "insuranceDate1", void 0);
    __decorate([
        typeorm_1.Column({ name: "insurancedate2" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "insuranceDate2", void 0);
    __decorate([
        typeorm_1.Column({ name: "sortingid" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "sortingId", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxcountyno" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "taxCountyNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "subventionno" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "subVentionNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "subventiontaxfreeno" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "subVentionTaxFreeNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "assessmentno" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "assessmentNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "assessmenttaxno" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "assessmentTaxNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "acquisitionvalueno" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "acquisitionValueNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "valueat19840101no" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "valueAt19840101No", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnoninvestmentsno" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "returnOnInvestmentsNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "sortingid2" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "sortingId2", void 0);
    __decorate([
        typeorm_1.Column({ name: "sortingid3" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "sortingId3", void 0);
    __decorate([
        typeorm_1.Column({ name: "namealias" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "namealias", void 0);
    __decorate([
        typeorm_1.Column({ name: "techinfo1" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "techInfo1", void 0);
    __decorate([
        typeorm_1.Column({ name: "techinfo2" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "techInfo2", void 0);
    __decorate([
        typeorm_1.Column({ name: "techinfo3" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "techInfo3", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmaintenance" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "lastMaintenance", void 0);
    __decorate([
        typeorm_1.Column({ name: "nextmaintenance" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "nextMaintenance", void 0);
    __decorate([
        typeorm_1.Column({ name: "maintenanceinfo1" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "maintenanceInfo1", void 0);
    __decorate([
        typeorm_1.Column({ name: "maintenanceinfo2" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "maintenanceInfo2", void 0);
    __decorate([
        typeorm_1.Column({ name: "maintenanceinfo3" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "maintenanceInfo3", void 0);
    __decorate([
        typeorm_1.Column({ name: "physicalinventory" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "physicalInventory", void 0);
    __decorate([
        typeorm_1.Column({ name: "reference" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "reference", void 0);
    __decorate([
        typeorm_1.Column({ name: "es" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "es", void 0);
    __decorate([
        typeorm_1.Column({ name: "unitcost" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "unitCost", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchlinerecid" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "purchLineRecid", void 0);
    __decorate([
        typeorm_1.Column({ name: "majortype" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "majorType", void 0);
    __decorate([
        typeorm_1.Column({ name: "parcelid" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "parcelId", void 0);
    __decorate([
        typeorm_1.Column({ name: "propertytype" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "propertyType", void 0);
    __decorate([
        typeorm_1.Column({ name: "gisreferencenumber" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "gisReferenceNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "locationmemo" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "locationMemo", void 0);
    __decorate([
        typeorm_1.Column({ name: "roomnumber" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "roomNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "contactname" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "contactName", void 0);
    __decorate([
        typeorm_1.Column({ name: "modelyear" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "modelYear", void 0);
    __decorate([
        typeorm_1.Column({ name: "disposalrestriction" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "disposalRestriction", void 0);
    __decorate([
        typeorm_1.Column({ name: "lease" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "lease", void 0);
    __decorate([
        typeorm_1.Column({ name: "titleholder" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "titleHolder", void 0);
    __decorate([
        typeorm_1.Column({ name: "insurancevendor" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "insuranceVendor", void 0);
    __decorate([
        typeorm_1.Column({ name: "insuranceagent" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "insuranceAgent", void 0);
    __decorate([
        typeorm_1.Column({ name: "policyexpiration" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "policyExpiration", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastfactorupdatedate" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "lastFactorUpdateDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "insuredatmarketvalue" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "insureDatMarketValue", void 0);
    __decorate([
        typeorm_1.Column({ name: "condition" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "condition", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "modifiedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "del_modifiedtime" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "delModifiedTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifiedby" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "modifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "del_createdtime" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "delCreatedTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "region", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension2_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "department", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension3_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "costcenter", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension4_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "employee", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension5_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "project", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension6_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "salesman", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension7_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "brand", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension8_" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "productline", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "deletedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "deletedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], FixedAssetTable.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], FixedAssetTable.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "reponsible" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "reponsible", void 0);
    __decorate([
        typeorm_1.Column({ name: "insuranceplicynum" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "insurancePlicyNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "latitude" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column({ name: "longitude" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column({ name: "citycode" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "cityCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "districtcode" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "districtCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "deliveryaddress" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "deliveryAddress", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialdataareaid" }),
        __metadata("design:type", String)
    ], FixedAssetTable.prototype, "financialDataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "insuredvalue" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "insuredValue", void 0);
    __decorate([
        typeorm_1.Column({ name: "assetreplacecost" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "assetReplaceCost", void 0);
    __decorate([
        typeorm_1.Column({ name: "policyamount" }),
        __metadata("design:type", Number)
    ], FixedAssetTable.prototype, "policyAmount", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "assetgroup" }),
        typeorm_1.ManyToOne(function (type) { return FixedAssetGroup_1.FixedAssetGroup; }),
        __metadata("design:type", FixedAssetGroup_1.FixedAssetGroup)
    ], FixedAssetTable.prototype, "fixedAssetGroup", void 0);
    FixedAssetTable = __decorate([
        typeorm_1.Entity("fixedassettable")
    ], FixedAssetTable);
    return FixedAssetTable;
}());
exports.FixedAssetTable = FixedAssetTable;
