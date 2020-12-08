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
var Pricedisctableextra = /** @class */ (function () {
    function Pricedisctableextra() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "inventdimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "amount" }),
        __metadata("design:type", Number)
    ], Pricedisctableextra.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemrelation" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "itemrelation", void 0);
    __decorate([
        typeorm_1.Column({ name: "configid" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "configid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventsizeid" }),
        __metadata("design:type", String)
    ], Pricedisctableextra.prototype, "inventsizeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], Pricedisctableextra.prototype, "modifieddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Pricedisctableextra.prototype, "createddatetime", void 0);
    Pricedisctableextra = __decorate([
        typeorm_1.Entity("pricdisctableextra")
    ], Pricedisctableextra);
    return Pricedisctableextra;
}());
exports.Pricedisctableextra = Pricedisctableextra;
