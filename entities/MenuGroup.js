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
var Usergroup_1 = require("./Usergroup");
var Menu_1 = require("./Menu");
var MenuGroup = /** @class */ (function () {
    function MenuGroup() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], MenuGroup.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], MenuGroup.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "write_access" }),
        __metadata("design:type", Boolean)
    ], MenuGroup.prototype, "writeAccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "delete_access" }),
        __metadata("design:type", Boolean)
    ], MenuGroup.prototype, "deleteAccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], MenuGroup.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_date" }),
        __metadata("design:type", Date)
    ], MenuGroup.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], MenuGroup.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_date" }),
        __metadata("design:type", Date)
    ], MenuGroup.prototype, "updatedDate", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "group_id" }),
        typeorm_1.ManyToOne(function (type) { return Usergroup_1.Usergroup; }),
        __metadata("design:type", Usergroup_1.Usergroup)
    ], MenuGroup.prototype, "group", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "menu_id" }),
        typeorm_1.ManyToOne(function (type) { return Menu_1.Menu; }),
        __metadata("design:type", Menu_1.Menu)
    ], MenuGroup.prototype, "menu", void 0);
    MenuGroup = __decorate([
        typeorm_1.Entity("menu_group")
    ], MenuGroup);
    return MenuGroup;
}());
exports.MenuGroup = MenuGroup;
