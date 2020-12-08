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
var Usergroup_1 = require("../entities/Usergroup");
var Usergroupconfig_1 = require("../entities/Usergroupconfig");
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "user_name" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "userName", void 0);
    __decorate([
        typeorm_1.Column({ name: "password" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ name: "description" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ name: "email" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ name: "role" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ name: "securitytoken" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "securitytoken", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], UserInfo.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], UserInfo.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.Column({ name: "organization_id" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "organizationId", void 0);
    __decorate([
        typeorm_1.Column({ name: "phone" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column({ name: "groupid" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "groupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "resetkey" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "resetkey", void 0);
    __decorate([
        typeorm_1.Column({ name: "resetdate" }),
        __metadata("design:type", Date)
    ], UserInfo.prototype, "resetdate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], UserInfo.prototype, "deleteddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], UserInfo.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "full_name" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "fullName", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "groupid" }),
        typeorm_1.ManyToOne(function (type) { return Usergroupconfig_1.Usergroupconfig; }),
        __metadata("design:type", Usergroupconfig_1.Usergroupconfig)
    ], UserInfo.prototype, "userGroupConfig", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "groupid" }),
        typeorm_1.ManyToOne(function (type) { return Usergroup_1.Usergroup; }),
        __metadata("design:type", Usergroup_1.Usergroup)
    ], UserInfo.prototype, "userGroup", void 0);
    UserInfo = __decorate([
        typeorm_1.Entity("user_info")
    ], UserInfo);
    return UserInfo;
}());
exports.UserInfo = UserInfo;
