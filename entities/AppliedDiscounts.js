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
var SalesLine_1 = require("./SalesLine");
var AppliedDiscounts = /** @class */ (function () {
    function AppliedDiscounts() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], AppliedDiscounts.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "discount_type" }),
        __metadata("design:type", String)
    ], AppliedDiscounts.prototype, "discountType", void 0);
    __decorate([
        typeorm_1.Column({ name: "percentage" }),
        __metadata("design:type", Number)
    ], AppliedDiscounts.prototype, "percentage", void 0);
    __decorate([
        typeorm_1.Column({ name: "discount_amount" }),
        __metadata("design:type", Number)
    ], AppliedDiscounts.prototype, "discountAmount", void 0);
    __decorate([
        typeorm_1.Column({ name: "cond", type: "json" }),
        __metadata("design:type", Object)
    ], AppliedDiscounts.prototype, "cond", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], AppliedDiscounts.prototype, "updated_on", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "salesline_id" }),
        typeorm_1.ManyToOne(function (type) { return SalesLine_1.SalesLine; }),
        __metadata("design:type", SalesLine_1.SalesLine)
    ], AppliedDiscounts.prototype, "salesLine", void 0);
    AppliedDiscounts = __decorate([
        typeorm_1.Entity("applied_discounts")
    ], AppliedDiscounts);
    return AppliedDiscounts;
}());
exports.AppliedDiscounts = AppliedDiscounts;
