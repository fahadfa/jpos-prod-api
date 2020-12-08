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
var HistoryUsergroup = /** @class */ (function () {
    function HistoryUsergroup() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "history_id" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "historyId", void 0);
    __decorate([
        typeorm_1.Column({ name: "groupid" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "groupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "groupname" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "groupname", void 0);
    __decorate([
        typeorm_1.Column({ name: "status" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({ name: "usercount" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "usercount", void 0);
    __decorate([
        typeorm_1.Column({ name: "comment" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "comment", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], HistoryUsergroup.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], HistoryUsergroup.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", Date)
    ], HistoryUsergroup.prototype, "deleteddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroup.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "permissiondata" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "permissiondata", void 0);
    __decorate([
        typeorm_1.Column({ name: "role" }),
        __metadata("design:type", String)
    ], HistoryUsergroup.prototype, "role", void 0);
    HistoryUsergroup = __decorate([
        typeorm_1.Entity("histroy_usergroup")
    ], HistoryUsergroup);
    return HistoryUsergroup;
}());
exports.HistoryUsergroup = HistoryUsergroup;
