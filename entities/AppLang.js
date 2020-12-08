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
var AppLang = /** @class */ (function () {
    function AppLang() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], AppLang.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "en" }),
        __metadata("design:type", String)
    ], AppLang.prototype, "en", void 0);
    __decorate([
        typeorm_1.Column({ name: "ar" }),
        __metadata("design:type", String)
    ], AppLang.prototype, "ar", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], AppLang.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], AppLang.prototype, "updatedOn", void 0);
    AppLang = __decorate([
        typeorm_1.Entity("app_lang")
    ], AppLang);
    return AppLang;
}());
exports.AppLang = AppLang;
