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
var InventoryOnhand = /** @class */ (function () {
    function InventoryOnhand() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "configid" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "configid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventsizeid" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "inventsizeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "batchno" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "batchno", void 0);
    __decorate([
        typeorm_1.Column({ name: "qty_in" }),
        __metadata("design:type", Number)
    ], InventoryOnhand.prototype, "qtyIn", void 0);
    __decorate([
        typeorm_1.Column({ name: "qty_out" }),
        __metadata("design:type", Number)
    ], InventoryOnhand.prototype, "qtyOut", void 0);
    __decorate([
        typeorm_1.Column({ name: "qty_reserved" }),
        __metadata("design:type", Number)
    ], InventoryOnhand.prototype, "qtyReserved", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "inventlocationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], InventoryOnhand.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], InventoryOnhand.prototype, "updatedBy", void 0);
    InventoryOnhand = __decorate([
        typeorm_1.Entity("inventory_onhand")
    ], InventoryOnhand);
    return InventoryOnhand;
}());
exports.InventoryOnhand = InventoryOnhand;
