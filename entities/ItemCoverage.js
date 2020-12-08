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
var ItemCoverage = /** @class */ (function () {
    function ItemCoverage() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "recid" }),
        __metadata("design:type", Number)
    ], ItemCoverage.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "min_qty" }),
        __metadata("design:type", Number)
    ], ItemCoverage.prototype, "minQty", void 0);
    __decorate([
        typeorm_1.Column({ name: "max_qty" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "maxQty", void 0);
    __decorate([
        typeorm_1.Column({ name: "main_ware_house" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "mainWareHouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "invent_dimid" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "inventDimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "configid" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "configid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventsizeid" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "inventsizeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "inventlocationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ItemCoverage.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], ItemCoverage.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time" }),
        __metadata("design:type", Number)
    ], ItemCoverage.prototype, "leadTime", void 0);
    ItemCoverage = __decorate([
        typeorm_1.Entity("item_coverage")
    ], ItemCoverage);
    return ItemCoverage;
}());
exports.ItemCoverage = ItemCoverage;
