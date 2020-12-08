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
var Custtable_1 = require("./Custtable");
var Designerservice = /** @class */ (function () {
    function Designerservice() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "serviceid" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "serviceid", void 0);
    __decorate([
        typeorm_1.Column({ name: "custphone" }),
        __metadata("design:type", String)
    ], Designerservice.prototype, "custphone", void 0);
    __decorate([
        typeorm_1.Column({ name: "amount" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceid" }),
        __metadata("design:type", String)
    ], Designerservice.prototype, "invoiceid", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesorderid" }),
        __metadata("design:type", String)
    ], Designerservice.prototype, "salesorderid", void 0);
    __decorate([
        typeorm_1.Column({ name: "syncstatus" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "syncstatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Designerservice.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recordtype" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "recordtype", void 0);
    __decorate([
        typeorm_1.Column({ name: "settle" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "settle", void 0);
    __decorate([
        typeorm_1.Column({ name: "selectedforsettle" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "selectedforsettle", void 0);
    __decorate([
        typeorm_1.Column({ name: "approvalstatus" }),
        __metadata("design:type", Number)
    ], Designerservice.prototype, "approvalstatus", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], Designerservice.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Designerservice.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], Designerservice.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], Designerservice.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "customerid" }),
        typeorm_1.ManyToOne(function (type) { return Custtable_1.Custtable; }),
        __metadata("design:type", Custtable_1.Custtable)
    ], Designerservice.prototype, "customer", void 0);
    Designerservice = __decorate([
        typeorm_1.Entity("designerservice")
    ], Designerservice);
    return Designerservice;
}());
exports.Designerservice = Designerservice;
