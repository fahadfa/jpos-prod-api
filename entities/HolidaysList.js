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
var HolidaysList = /** @class */ (function () {
    function HolidaysList() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "day_name" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "dayName", void 0);
    __decorate([
        typeorm_1.Column({ name: "day_no" }),
        __metadata("design:type", Number)
    ], HolidaysList.prototype, "dayNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "date" }),
        __metadata("design:type", Date)
    ], HolidaysList.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column({ name: "type" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: "reason" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "reason", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], HolidaysList.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_code" }),
        __metadata("design:type", String)
    ], HolidaysList.prototype, "storeCode", void 0);
    HolidaysList = __decorate([
        typeorm_1.Entity("holidays_list")
    ], HolidaysList);
    return HolidaysList;
}());
exports.HolidaysList = HolidaysList;
