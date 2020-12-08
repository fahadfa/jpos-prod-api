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
var SalesTargets = /** @class */ (function () {
    function SalesTargets() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], SalesTargets.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_code" }),
        __metadata("design:type", String)
    ], SalesTargets.prototype, "storeCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "year" }),
        __metadata("design:type", String)
    ], SalesTargets.prototype, "year", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_1" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month1", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_2" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month2", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_3" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month3", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_4" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month4", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_5" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month5", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_6" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month6", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_7" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month7", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_8" }),
        __metadata("design:type", String)
    ], SalesTargets.prototype, "month8", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_9" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month9", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_10" }),
        __metadata("design:type", String)
    ], SalesTargets.prototype, "month10", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_11" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month11", void 0);
    __decorate([
        typeorm_1.Column({ name: "month_12" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "month12", void 0);
    __decorate([
        typeorm_1.Column({ name: "year_target" }),
        __metadata("design:type", Number)
    ], SalesTargets.prototype, "yearTarget", void 0);
    __decorate([
        typeorm_1.Column({ name: "updatedby" }),
        __metadata("design:type", String)
    ], SalesTargets.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updatedon" }),
        __metadata("design:type", Date)
    ], SalesTargets.prototype, "updatedOn", void 0);
    SalesTargets = __decorate([
        typeorm_1.Entity("sales_targets")
    ], SalesTargets);
    return SalesTargets;
}());
exports.SalesTargets = SalesTargets;
