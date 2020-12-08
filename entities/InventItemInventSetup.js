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
var InventItemInventSetup = /** @class */ (function () {
    function InventItemInventSetup() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "recid" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], InventItemInventSetup.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid" }),
        __metadata("design:type", String)
    ], InventItemInventSetup.prototype, "inventdimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventdimid_default" }),
        __metadata("design:type", String)
    ], InventItemInventSetup.prototype, "inventdimidDefault", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatory_invent_site" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "mandatoryInventSite", void 0);
    __decorate([
        typeorm_1.Column({ name: "mandatory_invent_location" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "mandatoryInventLocation", void 0);
    __decorate([
        typeorm_1.Column({ name: "lowestqty" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "lowestqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "highestqty" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "highestqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "standardqty" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "standardqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "leadtime" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "leadtime", void 0);
    __decorate([
        typeorm_1.Column({ name: "multipleqty" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "multipleqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "calenrdays" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "calenrdays", void 0);
    __decorate([
        typeorm_1.Column({ name: "stopped" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "stopped", void 0);
    __decorate([
        typeorm_1.Column({ name: "override" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "override", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_incl_planned_orders" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "atpInclPlannedOrders", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_timefence" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "atpTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "delivery_date_control_type" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "deliveryDateControlType", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_backward_supply_timefence" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "atpBackwardSupplyTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_backward_demand_timefence" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "atpBackwardDemandTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_apply_demand_timefence" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "atpApplyDemandTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "atp_apply_suppliy_timefence" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "atpApplySuppliyTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], InventItemInventSetup.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "partition" }),
        __metadata("design:type", Number)
    ], InventItemInventSetup.prototype, "partition", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], InventItemInventSetup.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], InventItemInventSetup.prototype, "updatedOn", void 0);
    InventItemInventSetup = __decorate([
        typeorm_1.Entity("invent_item_invent_setup")
    ], InventItemInventSetup);
    return InventItemInventSetup;
}());
exports.InventItemInventSetup = InventItemInventSetup;
