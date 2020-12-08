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
var Inventlocation = /** @class */ (function () {
    function Inventlocation() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "inventLocationId", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "namealias" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "nameAlias", void 0);
    __decorate([
        typeorm_1.Column({ name: "manual" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "manual", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmslocationiddefaultreceipt" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "wmsLocationIdDefaultReceipt", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmslocationiddefaultissue" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "recoawmsLocationIdDefaultIssuetTimeAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationidreqmain" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "inventLocationIdReqMain", void 0);
    __decorate([
        typeorm_1.Column({ name: "reqrefill" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "reqRefill", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationtype" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "inventLocationType", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationidquarantine" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "inventLocationIdQuarantine", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationlevel" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "inventLocationLevel", void 0);
    __decorate([
        typeorm_1.Column({ name: "reqcalendarid" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "reqCalendarId", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmsaislenameactive" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "wmsaisleNameActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmsracknameactive" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "wmsrackNameActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmsrackformat" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "wmsrackformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmslevelformat" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "wmsLevelFormat", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmspositionnameactive" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "wmsPositionNameActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "wmspositionformat" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "wmsPositionFormat", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationidtransit" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "inventLocationIdTransit", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendaccount" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "vendAccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "branchnumber" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "branchNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventsiteid" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "inventSiteId", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dataAreaId", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "recVersion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "recId", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], Inventlocation.prototype, "modifiedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Inventlocation.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "telphone" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "telphone", void 0);
    __decorate([
        typeorm_1.Column({ name: "selectformps" }),
        __metadata("design:type", Number)
    ], Inventlocation.prototype, "selectFormps", void 0);
    __decorate([
        typeorm_1.Column({ name: "wip" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "wip", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions2_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions2_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions3_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions3_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions4_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions4_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions5_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions5_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions6_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions6_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions7_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions7_", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimensions8_" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "dimensions8_", void 0);
    __decorate([
        typeorm_1.Column({ name: "journalnameid" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "journalnameId", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", String)
    ], Inventlocation.prototype, "status", void 0);
    Inventlocation = __decorate([
        typeorm_1.Entity("inventlocation")
    ], Inventlocation);
    return Inventlocation;
}());
exports.Inventlocation = Inventlocation;
