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
var Inventtable = /** @class */ (function () {
    function Inventtable() {
    }
    Inventtable_1 = Inventtable;
    var Inventtable_1;
    __decorate([
        typeorm_1.Column({ name: "id" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "id", void 0);
    __decorate([
        typeorm_1.PrimaryColumn({ name: "itemid" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemgroupid" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "itemGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemname" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemtype" }),
        __metadata("design:type", Number)
    ], Inventtable.prototype, "itemtype", void 0);
    __decorate([
        typeorm_1.Column({ name: "namealias" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "int_ext" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "intExt", void 0);
    __decorate([
        typeorm_1.Column({ name: "citgroupid" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "citGroupId", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "citbaseproduct" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "citbaseproduct", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Inventtable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], Inventtable.prototype, "recid", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "citbaseproduct" }),
        typeorm_1.ManyToOne(function (type) { return Inventtable_1; }),
        __metadata("design:type", Inventtable)
    ], Inventtable.prototype, "product", void 0);
    Inventtable = Inventtable_1 = __decorate([
        typeorm_1.Entity("inventtable")
    ], Inventtable);
    return Inventtable;
}());
exports.Inventtable = Inventtable;
