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
var Files = /** @class */ (function () {
    function Files() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Files.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Files.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "type" }),
        __metadata("design:type", String)
    ], Files.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: "size" }),
        __metadata("design:type", Number)
    ], Files.prototype, "size", void 0);
    __decorate([
        typeorm_1.Column({ name: "key" }),
        __metadata("design:type", String)
    ], Files.prototype, "key", void 0);
    __decorate([
        typeorm_1.Column({ name: "state" }),
        __metadata("design:type", String)
    ], Files.prototype, "state", void 0);
    __decorate([
        typeorm_1.Column({ name: "inserted_at" }),
        __metadata("design:type", Date)
    ], Files.prototype, "insertedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_at" }),
        __metadata("design:type", Date)
    ], Files.prototype, "updatedAt", void 0);
    Files = __decorate([
        typeorm_1.Entity("files")
    ], Files);
    return Files;
}());
exports.Files = Files;
