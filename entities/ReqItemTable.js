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
var ReqItemTable = /** @class */ (function () {
    function ReqItemTable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "recid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "itemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "convinvent_dimid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "convinventDimid", void 0);
    __decorate([
        typeorm_1.Column({ name: "time_fence_fields_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "timeFenceFieldsActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "covrule" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "covrule", void 0);
    __decorate([
        typeorm_1.Column({ name: "min_inventon_hand" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "minInventonHand", void 0);
    __decorate([
        typeorm_1.Column({ name: "max_inventon_hand" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "maxInventonHand", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time_purchase" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "leadTimePurchase", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time_production" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "leadTimeProduction", void 0);
    __decorate([
        typeorm_1.Column({ name: "authorization_time_fence" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "authorizationTimeFence", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "vendid", void 0);
    __decorate([
        typeorm_1.Column({ name: "min_safety_keyid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "minSafetyKeyid", void 0);
    __decorate([
        typeorm_1.Column({ name: "min_satisfy" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "minSatisfy", void 0);
    __decorate([
        typeorm_1.Column({ name: "req_groupid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "reqGroupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "req_po_type" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "reqPoType", void 0);
    __decorate([
        typeorm_1.Column({ name: "max_positive_days" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "maxPositiveDays", void 0);
    __decorate([
        typeorm_1.Column({ name: "max_negative_days" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "maxNegativeDays", void 0);
    __decorate([
        typeorm_1.Column({ name: "cov_time_efence" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "covTimeEfence", void 0);
    __decorate([
        typeorm_1.Column({ name: "max_safety_keyid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "maxSafetyKeyid", void 0);
    __decorate([
        typeorm_1.Column({ name: "invent_locationid_req_main" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "inventLocationidReqMain", void 0);
    __decorate([
        typeorm_1.Column({ name: "min_safety_pperiod" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "minSafetyPperiod", void 0);
    __decorate([
        typeorm_1.Column({ name: "calendar_days_production" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "calendarDaysProduction", void 0);
    __decorate([
        typeorm_1.Column({ name: "calendar_days_purchase" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "calendarDaysPurchase", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time_transfer" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "leadTimeTransfer", void 0);
    __decorate([
        typeorm_1.Column({ name: "calendar_days_transfer" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "calendarDaysTransfer", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time_transfer_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "leadTimeTransferActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time_production_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "leadTimeProductionActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "lead_time_purchase_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "leadTimePurchaseActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "cov_fields_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "covFieldsActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "req_po_type_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "reqPoTypeActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "item_cov_fields_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "itemCovFieldsActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "locking_timefence" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "lockingTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "explosion_timefence" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "explosionTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "capacity_timefence" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "capacityTimefence", void 0);
    __decorate([
        typeorm_1.Column({ name: "pmf_planning_itemid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "pmfPlanningItemid", void 0);
    __decorate([
        typeorm_1.Column({ name: "pmf_plan_priority_current" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "pmfPlanPriorityCurrent", void 0);
    __decorate([
        typeorm_1.Column({ name: "pmf_plan_priority_date_changed" }),
        __metadata("design:type", Date)
    ], ReqItemTable.prototype, "pmfPlanPriorityDateChanged", void 0);
    __decorate([
        typeorm_1.Column({ name: "pmf_plan_priority_default" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "pmfPlanPriorityDefault", void 0);
    __decorate([
        typeorm_1.Column({ name: "time_fence_back_requisition" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "timeFenceBackRequisition", void 0);
    __decorate([
        typeorm_1.Column({ name: "on_hand_active" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "onHandActive", void 0);
    __decorate([
        typeorm_1.Column({ name: "on_hand_consumption_strategy" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "onHandConsumptionStrategy", void 0);
    __decorate([
        typeorm_1.Column({ name: "data_areaid" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "dataAreaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "rec_version" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "recVersion", void 0);
    __decorate([
        typeorm_1.Column({ name: "partition" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "partition", void 0);
    __decorate([
        typeorm_1.Column({ name: "dt_max_region_stock" }),
        __metadata("design:type", Number)
    ], ReqItemTable.prototype, "dtMaxRegionStock", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], ReqItemTable.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], ReqItemTable.prototype, "updatedBy", void 0);
    ReqItemTable = __decorate([
        typeorm_1.Entity("req_item_table")
    ], ReqItemTable);
    return ReqItemTable;
}());
exports.ReqItemTable = ReqItemTable;
