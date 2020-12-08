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
var Sizes_1 = require("../entities/Sizes");
var Bases_1 = require("./Bases");
var BaseSizes = /** @class */ (function () {
    function BaseSizes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], BaseSizes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], BaseSizes.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], BaseSizes.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], BaseSizes.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "base_id" }),
        typeorm_1.ManyToOne(function (type) { return Bases_1.Bases; }),
        __metadata("design:type", Bases_1.Bases)
    ], BaseSizes.prototype, "base", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "size_id" }),
        typeorm_1.ManyToOne(function (type) { return Sizes_1.Sizes; }),
        __metadata("design:type", Sizes_1.Sizes)
    ], BaseSizes.prototype, "sizes", void 0);
    BaseSizes = __decorate([
        typeorm_1.Entity("base_sizes")
    ], BaseSizes);
    return BaseSizes;
}());
exports.BaseSizes = BaseSizes;
