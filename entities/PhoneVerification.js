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
var PhoneVerification = /** @class */ (function () {
    function PhoneVerification() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "phonenumber" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "phoneNumber", void 0);
    __decorate([
        typeorm_1.Column({ name: "country_code" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "countryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "otpsent" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "otpSent", void 0);
    __decorate([
        typeorm_1.Column({ name: "otpexpirytime" }),
        __metadata("design:type", Date)
    ], PhoneVerification.prototype, "otpExpiryTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "verificationstatus" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "verificationStatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "customerid" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "customerId", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], PhoneVerification.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], PhoneVerification.prototype, "lastmodifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], PhoneVerification.prototype, "lastModifiedDate", void 0);
    PhoneVerification = __decorate([
        typeorm_1.Entity("phoneverification")
    ], PhoneVerification);
    return PhoneVerification;
}());
exports.PhoneVerification = PhoneVerification;
