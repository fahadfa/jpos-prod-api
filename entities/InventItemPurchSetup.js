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
var InventItemPurchSetup = /** @class */ (function () {
    function InventItemPurchSetup() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "recid" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], InventItemPurchSetup.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid" }),
        __metadata("design:type", String)
    ], InventItemPurchSetup.prototype, "inventdimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid_default" }),
        __metadata("design:type", String)
    ], InventItemPurchSetup.prototype, "inventdimidDefault", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatory_invent_site" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "mandatoryInventSite", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatory_invent_location" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "mandatoryInventLocation", void 0);
    __decorate([
        typeorm_1.Column({ name: "multipleqty" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "multipleqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "lowestqty" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "lowestqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "highestqty" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "highestqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "standardqty" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "standardqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "leadtime" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "leadtime", void 0);
    __decorate([
        typeorm_1.Column({ name: "calenrdays" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "calenrdays", void 0);
    __decorate([
        typeorm_1.Column({ name: "stopped" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "stopped", void 0);
    __decorate([
        typeorm_1.Column({ name: "override" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "override", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], InventItemPurchSetup.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "partition" }),
        __metadata("design:type", Number)
    ], InventItemPurchSetup.prototype, "partition", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], InventItemPurchSetup.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], InventItemPurchSetup.prototype, "updatedOn", void 0);
    InventItemPurchSetup = __decorate([
        typeorm_1.Entity("invent_item_purch_setup")
    ], InventItemPurchSetup);
    return InventItemPurchSetup;
}());
exports.InventItemPurchSetup = InventItemPurchSetup;
