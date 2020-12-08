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
var Pricedisctable = /** @class */ (function () {
    function Pricedisctable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "agreement" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "agreement", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemcode" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "itemcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountcode" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "accountcode", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemrelation" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "itemrelation", void 0);
    __decorate([
        typeorm_1.Column({ name: "accountrelation" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "accountrelation", void 0);
    __decorate([
        typeorm_1.Column({ name: "quantityamount" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "quantityamount", void 0);
    __decorate([
        typeorm_1.Column({ name: "fromdate" }),
        __metadata("design:type", Date)
    ], Pricedisctable.prototype, "fromdae", void 0);
    __decorate([
        typeorm_1.Column({ name: "todate" }),
        __metadata("design:type", Date)
    ], Pricedisctable.prototype, "todate", void 0);
    __decorate([
        typeorm_1.Column({ name: "amount" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column({ name: "currency" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "currency", void 0);
    __decorate([
        typeorm_1.Column({ name: "prcent1" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "percent1", void 0);
    __decorate([
        typeorm_1.Column({ name: "percent2" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "percent2", void 0);
    __decorate([
        typeorm_1.Column({ name: "deliverytime" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "delivery", void 0);
    __decorate([
        typeorm_1.Column({ name: "searchagain" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "searchagain", void 0);
    __decorate([
        typeorm_1.Column({ name: "priceunit" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "priceunit", void 0);
    __decorate([
        typeorm_1.Column({ name: "relation" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "relation", void 0);
    __decorate([
        typeorm_1.Column({ name: "unitid" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "unitid", void 0);
    __decorate([
        typeorm_1.Column({ name: "markup" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "markup", void 0);
    __decorate([
        typeorm_1.Column({ name: "allocatemarkup" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "allocatemarkup", void 0);
    __decorate([
        typeorm_1.Column({ name: "module" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "module", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "inventdimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "calenderdays" }),
        __metadata("design:type", Number)
    ], Pricedisctable.prototype, "calenderdays", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], Pricedisctable.prototype, "modifieddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Pricedisctable.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "tinventsizeid" }),
        __metadata("design:type", String)
    ], Pricedisctable.prototype, "inventsizeid", void 0);
    Pricedisctable = __decorate([
        typeorm_1.Entity("productdisctable")
    ], Pricedisctable);
    return Pricedisctable;
}());
exports.Pricedisctable = Pricedisctable;
