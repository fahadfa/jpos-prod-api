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
var Configtable = /** @class */ (function () {
    function Configtable() {
    }
    __decorate([
        typeorm_1.Column({ name: "id" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "nameArabic", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "nameEnglish", void 0);
    __decorate([
        typeorm_1.PrimaryColumn({ name: "configid" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "hexcode" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "hexCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Configtable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], Configtable.prototype, "recid", void 0);
    Configtable = __decorate([
        typeorm_1.Entity("configtable")
    ], Configtable);
    return Configtable;
}());
exports.Configtable = Configtable;
