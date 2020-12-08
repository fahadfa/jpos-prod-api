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
var WorkDays = /** @class */ (function () {
    function WorkDays() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id", type: "uuid" }),
        __metadata("design:type", String)
    ], WorkDays.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "day_name" }),
        __metadata("design:type", String)
    ], WorkDays.prototype, "dayName", void 0);
    __decorate([
        typeorm_1.Column({ name: "day_no" }),
        __metadata("design:type", Number)
    ], WorkDays.prototype, "dayNo", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_working_day" }),
        __metadata("design:type", Boolean)
    ], WorkDays.prototype, "isWorkingDay", void 0);
    __decorate([
        typeorm_1.Column({ name: "year" }),
        __metadata("design:type", String)
    ], WorkDays.prototype, "year", void 0);
    __decorate([
        typeorm_1.Column({ name: "store_code" }),
        __metadata("design:type", String)
    ], WorkDays.prototype, "storeCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "date" }),
        __metadata("design:type", Date)
    ], WorkDays.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], WorkDays.prototype, "dataAreaId", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], WorkDays.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], WorkDays.prototype, "updatedOn", void 0);
    WorkDays = __decorate([
        typeorm_1.Entity("workdays")
    ], WorkDays);
    return WorkDays;
}());
exports.WorkDays = WorkDays;
var WeekdayNames;
(function (WeekdayNames) {
    WeekdayNames["SUNDAY"] = "SUNDAY";
    WeekdayNames["MONDAY"] = "MONDAY";
    WeekdayNames["TUESDAY"] = "TUESDAY";
    WeekdayNames["WEDNESDAY"] = "WEDNESDAY";
    WeekdayNames["THURSDAY"] = "THURSDAY";
    WeekdayNames["FRIDAY"] = "FRIDAY";
    WeekdayNames["SATURDAY"] = "SATURDAY";
})(WeekdayNames = exports.WeekdayNames || (exports.WeekdayNames = {}));
var WeekdayNumber;
(function (WeekdayNumber) {
    WeekdayNumber[WeekdayNumber["SUNDAY"] = 0] = "SUNDAY";
    WeekdayNumber[WeekdayNumber["MONDAY"] = 1] = "MONDAY";
    WeekdayNumber[WeekdayNumber["TUESDAY"] = 2] = "TUESDAY";
    WeekdayNumber[WeekdayNumber["WEDNESDAY"] = 3] = "WEDNESDAY";
    WeekdayNumber[WeekdayNumber["THURSDAY"] = 4] = "THURSDAY";
    WeekdayNumber[WeekdayNumber["FRIDAY"] = 5] = "FRIDAY";
    WeekdayNumber[WeekdayNumber["SATURDAY"] = 6] = "SATURDAY";
})(WeekdayNumber = exports.WeekdayNumber || (exports.WeekdayNumber = {}));
