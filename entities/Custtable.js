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
var Custgroup_1 = require("../entities/Custgroup");
var Custtable = /** @class */ (function () {
    function Custtable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "accountnum" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "accountnum", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "address" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "phone" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({ name: "cashdisc" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "cashdisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceaccount" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "invoiceaccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "custgroup" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "custgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymtermid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "paymtermid", void 0);
    __decorate([
        typeorm_1.Column({ name: "currency" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "currency", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesgroup" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "salesgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "blocked" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "blocked", void 0);
    __decorate([
        typeorm_1.Column({ name: "onetimecustomer" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "onetimecustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountstatement" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "accountstatement", void 0);
    __decorate([
        typeorm_1.Column({ name: "creditmax" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "creditmax", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatorycreditlimit" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "mandatorycreditlimit", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendaccount" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "vendaccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "vatnum" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "vatnum", void 0);
    __decorate([
        typeorm_1.Column({ name: "pricegroup" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "pricegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "countryregionid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "countryregionid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocation" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "inventlocation", void 0);
    __decorate([
        typeorm_1.Column({ name: "markupgroup" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "markupgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "clearingperiod" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "clearingperiod", void 0);
    __decorate([
        typeorm_1.Column({ name: "zipcode" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "zipcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "state" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column({ name: "custcountry" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "custcountry", void 0);
    __decorate([
        typeorm_1.Column({ name: "statisticsgroup" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "statisticsgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "url" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "cellularphone" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "cellularphone", void 0);
    __decorate([
        typeorm_1.Column({ name: "phonelocal" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "phonelocal", void 0);
    __decorate([
        typeorm_1.Column({ name: "creditrating" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "creditrating", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxgroup" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "taxgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymmode" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "paymmode", void 0);
    __decorate([
        typeorm_1.Column({ name: "bankaccount" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "bankaccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymsched" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "paymsched", void 0);
    __decorate([
        typeorm_1.Column({ name: "namealias" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "namealias", void 0);
    __decorate([
        typeorm_1.Column({ name: "contactpersonid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "contactpersonid", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceaddress" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "invoiceaddress", void 0);
    __decorate([
        typeorm_1.Column({ name: "salespoolid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "salespoolid", void 0);
    __decorate([
        typeorm_1.Column({ name: "incltax" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "incltax", void 0);
    __decorate([
        typeorm_1.Column({ name: "custitemgroupid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "custitemgroupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "languageid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "languageid", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymdayid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "paymdayid", void 0);
    __decorate([
        typeorm_1.Column({ name: "taxlicensenum" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "taxlicensenum", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymspec" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "paymspec", void 0);
    __decorate([
        typeorm_1.Column({ name: "city" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column({ name: "street" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "street", void 0);
    __decorate([
        typeorm_1.Column({ name: "pager" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "pager", void 0);
    __decorate([
        typeorm_1.Column({ name: "sms" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "sms", void 0);
    __decorate([
        typeorm_1.Column({ name: "maincontactid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "maincontactid", void 0);
    __decorate([
        typeorm_1.Column({ name: "identificationnumber" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "identificationnumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "partyid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "partyid", void 0);
    __decorate([
        typeorm_1.Column({ name: "partytype" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "partytype", void 0);
    __decorate([
        typeorm_1.Column({ name: "partycountry" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "partycountry", void 0);
    __decorate([
        typeorm_1.Column({ name: "partystate" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "partystate", void 0);
    __decorate([
        typeorm_1.Column({ name: "orgid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "orgid", void 0);
    __decorate([
        typeorm_1.Column({ name: "paymidtype" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "paymidtype", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Custtable.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "dataareaId", void 0);
    __decorate([
        typeorm_1.Column({ name: "custtype" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "custtype", void 0);
    __decorate([
        typeorm_1.Column({ name: "citycode" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "citycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "districtcode" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "districtcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "latitude" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column({ name: "longitude" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.Column({ name: "rcusttype" }),
        __metadata("design:type", Number)
    ], Custtable.prototype, "rcusttype", void 0);
    __decorate([
        typeorm_1.Column({ name: "county" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "county", void 0);
    __decorate([
        typeorm_1.Column({ name: "walkincustomer" }),
        __metadata("design:type", Boolean)
    ], Custtable.prototype, "walkincustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], Custtable.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], Custtable.prototype, "deleteddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], Custtable.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "multilinedisc" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "multilinedisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "linedisc" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "linedisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "enddisc" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "enddisc", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "regionid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension2_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "departmentid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension3_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "costcenterid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension4_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "employeeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension5_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "projectid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension6_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "salesmanid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension7_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "brandid", void 0);
    __decorate([
        typeorm_1.Column({ name: "dimension8_" }),
        __metadata("design:type", String)
    ], Custtable.prototype, "productlineid", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "custgroup" }),
        typeorm_1.ManyToOne(function (type) { return Custgroup_1.Custgroup; }),
        __metadata("design:type", Custgroup_1.Custgroup)
    ], Custtable.prototype, "Custgroup", void 0);
    Custtable = __decorate([
        typeorm_1.Entity("custtable")
    ], Custtable);
    return Custtable;
}());
exports.Custtable = Custtable;
