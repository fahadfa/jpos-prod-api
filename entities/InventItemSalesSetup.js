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
var InventItemSalesSetup = /** @class */ (function () {
    function InventItemSalesSetup() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "recid" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], InventItemSalesSetup.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid" }),
        __metadata("design:type", String)
    ], InventItemSalesSetup.prototype, "inventdimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid_default" }),
        __metadata("design:type", String)
    ], InventItemSalesSetup.prototype, "inventdimidDefault", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatory_invent_site" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "mandatoryInventSite", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatory_invent_location" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "mandatoryInventLocation", void 0);
    __decorate([
        typeorm_1.Column({ name: "multipleqty" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "multipleqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "lowestqty" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "lowestqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "highestqty" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "highestqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "leadtime" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "leadtime", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_incl_planned_orders" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "atpInclPlannedOrders", void 0);
    __decorate([
        typeorm_1.Column({ name: "stopped" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "stopped", void 0);
    __decorate([
        typeorm_1.Column({ name: "override" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "override", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_timefence" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "atpTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "delivery_date_control_type" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "deliveryDateControlType", void 0);
    __decorate([
        typeorm_1.Column({ name: "overide_sales_leadtime" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "overideSalesLeadtime", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_apply_supply_timefence" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "atpApplySupplyTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_apply_demand_and_timefence" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "atpApplyDemandAndTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_backward_demand_timefence" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "atpBackwardDemandTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_backward_supply_timefence" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "atpBackwardSupplyTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], InventItemSalesSetup.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "partition" }),
        __metadata("design:type", Number)
    ], InventItemSalesSetup.prototype, "partition", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], InventItemSalesSetup.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], InventItemSalesSetup.prototype, "updatedOn", void 0);
    InventItemSalesSetup = __decorate([
        typeorm_1.Entity("invent_item_sales_setup")
    ], InventItemSalesSetup);
    return InventItemSalesSetup;
}());
exports.InventItemSalesSetup = InventItemSalesSetup;
