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
var Inventbatch = /** @class */ (function () {
    function Inventbatch() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "inventbatchid" }),
        __metadata("design:type", String)
    ], Inventbatch.prototype, "inventBatchId", void 0);
    __decorate([
        typeorm_1.Column({ name: "itemid" }),
        __metadata("design:type", String)
    ], Inventbatch.prototype, "itemId", void 0);
    __decorate([
        typeorm_1.Column({ name: "expdate" }),
        __metadata("design:type", Date)
    ], Inventbatch.prototype, "expDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "proddate" }),
        __metadata("design:type", Date)
    ], Inventbatch.prototype, "prodDate", void 0);
    __decorate([
        typeorm_1.Column({ name: "description" }),
        __metadata("design:type", String)
    ], Inventbatch.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Inventbatch.prototype, "dataAreaId", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], Inventbatch.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], Inventbatch.prototype, "recId", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifieddatetime" }),
        __metadata("design:type", Date)
    ], Inventbatch.prototype, "modifiedDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Inventbatch.prototype, "createdDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "configid" }),
        __metadata("design:type", String)
    ], Inventbatch.prototype, "configId", void 0);
    Inventbatch = __decorate([
        typeorm_1.Entity("inventbatch")
    ], Inventbatch);
    return Inventbatch;
}());
exports.Inventbatch = Inventbatch;
