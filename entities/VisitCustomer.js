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
var VisitCustomer = /** @class */ (function () {
    function VisitCustomer() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "visitorid" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "visitorId", void 0);
    __decorate([
        typeorm_1.Column({ name: "visitorsequencenumber" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "visitorSequenceNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "dateofvisit" }),
        __metadata("design:type", Date)
    ], VisitCustomer.prototype, "dateOfVisit", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesmanname" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "salesmanName", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesmanid" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "salesmanId", void 0);
    __decorate([
        typeorm_1.Column({ name: "regionnumber" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "regionNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroomid" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "showroomId", void 0);
    __decorate([
        typeorm_1.Column({ name: "usergroupid" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "userGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "visitormobilenumber" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "visitorMobileNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "visitorname" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "visitorName", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchased" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "purchased", void 0);
    __decorate([
        typeorm_1.Column({ name: "visitortype" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "visitorType", void 0);
    __decorate([
        typeorm_1.Column({ name: "reasonfornotpurchase" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], VisitCustomer.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], VisitCustomer.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], VisitCustomer.prototype, "lastModifiedDate", void 0);
    VisitCustomer = __decorate([
        typeorm_1.Entity("visitcustomer")
    ], VisitCustomer);
    return VisitCustomer;
}());
exports.VisitCustomer = VisitCustomer;
