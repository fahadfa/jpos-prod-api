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
var Menu = /** @class */ (function () {
    function Menu() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], Menu.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name" }),
        __metadata("design:type", String)
    ], Menu.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], Menu.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "link" }),
        __metadata("design:type", String)
    ], Menu.prototype, "link", void 0);
    __decorate([
        typeorm_1.Column({ name: "icon" }),
        __metadata("design:type", String)
    ], Menu.prototype, "icon", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], Menu.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "parent_id" }),
        __metadata("design:type", Number)
    ], Menu.prototype, "parentId", void 0);
    __decorate([
        typeorm_1.Column({ name: "priority" }),
        __metadata("design:type", Number)
    ], Menu.prototype, "priority", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_mobile" }),
        __metadata("design:type", Boolean)
    ], Menu.prototype, "isMobile", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], Menu.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_date" }),
        __metadata("design:type", Date)
    ], Menu.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], Menu.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_date" }),
        __metadata("design:type", Date)
    ], Menu.prototype, "updatedDate", void 0);
    Menu = __decorate([
        typeorm_1.Entity("menu")
    ], Menu);
    return Menu;
}());
exports.Menu = Menu;
