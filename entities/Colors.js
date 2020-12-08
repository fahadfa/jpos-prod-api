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
var Colors = /** @class */ (function () {
    function Colors() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Colors.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Colors.prototype, "nameArabic", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], Colors.prototype, "nameEnglish", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], Colors.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "hex" }),
        __metadata("design:type", String)
    ], Colors.prototype, "hexCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted_at" }),
        __metadata("design:type", Date)
    ], Colors.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Colors.prototype, "active", void 0);
    Colors = __decorate([
        typeorm_1.Entity("colors")
    ], Colors);
    return Colors;
}());
exports.Colors = Colors;
