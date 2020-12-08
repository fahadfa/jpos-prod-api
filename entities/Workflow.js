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
var Inventlocation_1 = require("./Inventlocation");
var SalesTable_1 = require("./SalesTable");
var SelectedLines_1 = require("./SelectedLines");
var Workflow = /** @class */ (function () {
    function Workflow() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "ordertype" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "orderType", void 0);
    __decorate([
        typeorm_1.Column({ name: "orderid" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "orderId", void 0);
    __decorate([
        typeorm_1.Column({ name: "statusid" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "statusId", void 0);
    __decorate([
        typeorm_1.Column({ name: "pendingwith" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "pendingWith", void 0);
    __decorate([
        typeorm_1.Column({ name: "accesskey" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "accessKey", void 0);
    __decorate([
        typeorm_1.Column({ name: "ordername" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "orderName", void 0);
    __decorate([
        typeorm_1.Column({ name: "partyid" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "partyId", void 0);
    __decorate([
        typeorm_1.Column({ name: "partyname" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "partyName", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "inventLocationId", void 0);
    __decorate([
        typeorm_1.Column({ name: "statusmessage" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "statusMessage", void 0);
    __decorate([
        typeorm_1.Column({ name: "statusmessagearabic" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "statusMessageArabic", void 0);
    __decorate([
        typeorm_1.Column({ name: "ordercreatedby" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "orderCreatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "ordercreateddatetime" }),
        __metadata("design:type", Date)
    ], Workflow.prototype, "orderCreatedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "orderlastmodifiedby" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "orderLastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "orderlastmodifieddate" }),
        __metadata("design:type", Date)
    ], Workflow.prototype, "orderLastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Workflow.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "lastModifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], Workflow.prototype, "lastModifiedDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "usergroupid" }),
        __metadata("design:type", String)
    ], Workflow.prototype, "usergroupid", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "id" }),
        typeorm_1.ManyToOne(function (type) { return SelectedLines_1.SelectedLines; }),
        __metadata("design:type", SelectedLines_1.SelectedLines)
    ], Workflow.prototype, "selectedLines", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "inventlocationid" }),
        typeorm_1.ManyToOne(function (type) { return Inventlocation_1.Inventlocation; }),
        __metadata("design:type", Inventlocation_1.Inventlocation)
    ], Workflow.prototype, "Inventlocation", void 0);
    __decorate([
        typeorm_1.JoinColumn({ name: "orderid" }),
        typeorm_1.ManyToOne(function (type) { return SalesTable_1.SalesTable; }),
        __metadata("design:type", SalesTable_1.SalesTable)
    ], Workflow.prototype, "SalesTable", void 0);
    Workflow = __decorate([
        typeorm_1.Entity("workflow")
    ], Workflow);
    return Workflow;
}());
exports.Workflow = Workflow;
