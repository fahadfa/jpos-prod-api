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
var Overdue = /** @class */ (function () {
    function Overdue() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "overdueid" }),
        __metadata("design:type", Number)
    ], Overdue.prototype, "overdueId", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesid" }),
        __metadata("design:type", String)
    ], Overdue.prototype, "salesId", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountnum" }),
        __metadata("design:type", String)
    ], Overdue.prototype, "accountNum", void 0);
    __decorate([
        typeorm_1.Column({ name: "customername" }),
        __metadata("design:type", String)
    ], Overdue.prototype, "customerName", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceid" }),
        __metadata("design:type", String)
    ], Overdue.prototype, "invoiceId", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceamount" }),
        __metadata("design:type", Number)
    ], Overdue.prototype, "invoiceAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoicedate" }),
        __metadata("design:type", Date)
    ], Overdue.prototype, "invoicedate", void 0);
    __decorate([
        typeorm_1.Column({ name: "duedate" }),
        __metadata("design:type", Date)
    ], Overdue.prototype, "duedate", void 0);
    __decorate([
        typeorm_1.Column({ name: "payment" }),
        __metadata("design:type", Number)
    ], Overdue.prototype, "payment", void 0);
    __decorate([
        typeorm_1.Column({ name: "actualduedate" }),
        __metadata("design:type", Date)
    ], Overdue.prototype, "actualDueDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], Overdue.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Overdue.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], Overdue.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], Overdue.prototype, "lastModifiedDate", void 0);
    Overdue = __decorate([
        typeorm_1.Entity("overdue")
    ], Overdue);
    return Overdue;
}());
exports.Overdue = Overdue;
