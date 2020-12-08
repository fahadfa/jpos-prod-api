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
var Sizes = /** @class */ (function () {
    function Sizes() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Sizes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], Sizes.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Sizes.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], Sizes.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "unit" }),
        __metadata("design:type", String)
    ], Sizes.prototype, "unit", void 0);
    __decorate([
        typeorm_1.Column({ name: "volume" }),
        __metadata("design:type", String)
    ], Sizes.prototype, "volume", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], Sizes.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], Sizes.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], Sizes.prototype, "deletedAt", void 0);
    Sizes = __decorate([
        typeorm_1.Entity("sizes")
    ], Sizes);
    return Sizes;
}());
exports.Sizes = Sizes;
