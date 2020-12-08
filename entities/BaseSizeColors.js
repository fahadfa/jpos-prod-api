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
var BaseSizes_1 = require("../entities/BaseSizes");
var Colors_1 = require("../entities/Colors");
var BaseSizeColors = /** @class */ (function () {
    function BaseSizeColors() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], BaseSizeColors.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "price" }),
        __metadata("design:type", Number)
    ], BaseSizeColors.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({ name: "product_id" }),
        __metadata("design:type", Number)
    ], BaseSizeColors.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], BaseSizeColors.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], BaseSizeColors.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], BaseSizeColors.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "color_id" }),
        typeorm_1.ManyToOne(function (type) { return Colors_1.Colors; }),
        __metadata("design:type", Colors_1.Colors)
    ], BaseSizeColors.prototype, "colors", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "base_size_id" }),
        typeorm_1.ManyToOne(function (type) { return BaseSizes_1.BaseSizes; }),
        __metadata("design:type", BaseSizes_1.BaseSizes)
    ], BaseSizeColors.prototype, "baseSizes", void 0);
    BaseSizeColors = __decorate([
        typeorm_1.Entity("base_size_colors")
    ], BaseSizeColors);
    return BaseSizeColors;
}());
exports.BaseSizeColors = BaseSizeColors;
