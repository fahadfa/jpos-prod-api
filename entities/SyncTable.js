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
var SyncSource_1 = require("./SyncSource");
var SyncTable = /** @class */ (function () {
    function SyncTable() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "source_table" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "sourceTable", void 0);
    __decorate([
        typeorm_1.Column({ name: "target_table" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "targetTable", void 0);
    __decorate([
        typeorm_1.Column({ name: "source_pk" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "sourcePk", void 0);
    __decorate([
        typeorm_1.Column({ name: "target_pk" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "targetPk", void 0);
    __decorate([
        typeorm_1.Column({ name: "sync_column" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "syncColumn", void 0);
    __decorate([
        typeorm_1.Column({ name: "cond" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "cond", void 0);
    __decorate([
        typeorm_1.Column({ name: "last_update" }),
        __metadata("design:type", Date)
    ], SyncTable.prototype, "lastUpdate", void 0);
    __decorate([
        typeorm_1.Column({ name: "active" }),
        __metadata("design:type", Boolean)
    ], SyncTable.prototype, "active", void 0);
    __decorate([
        typeorm_1.Column({ name: "priority" }),
        __metadata("design:type", Number)
    ], SyncTable.prototype, "priority", void 0);
    __decorate([
        typeorm_1.Column({ name: "group_on" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "groupOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], SyncTable.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SyncTable.prototype, "updatedOn", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "source_id" }),
        typeorm_1.ManyToOne(function (type) { return SyncSource_1.SyncSource; }),
        __metadata("design:type", SyncSource_1.SyncSource)
    ], SyncTable.prototype, "source", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "target_id" }),
        typeorm_1.ManyToOne(function (type) { return SyncSource_1.SyncSource; }),
        __metadata("design:type", SyncSource_1.SyncSource)
    ], SyncTable.prototype, "target", void 0);
    SyncTable = __decorate([
        typeorm_1.Entity("sync_table")
    ], SyncTable);
    return SyncTable;
}());
exports.SyncTable = SyncTable;
