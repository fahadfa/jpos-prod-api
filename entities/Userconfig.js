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
var Userconfig = /** @class */ (function () {
    function Userconfig() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "inventlocationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "currencycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesorderformat" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "salesorderformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "sequencegroup" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "sequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Userconfig.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], Userconfig.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.Column({ name: "userid" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "userid", void 0);
    __decorate([
        typeorm_1.Column({ name: "proximitycheck" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "proximitycheck", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], Userconfig.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], Userconfig.prototype, "deleteddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Number)
    ], Userconfig.prototype, "role", void 0);
    Userconfig = __decorate([
        typeorm_1.Entity("userconfig")
    ], Userconfig);
    return Userconfig;
}());
exports.Userconfig = Userconfig;
