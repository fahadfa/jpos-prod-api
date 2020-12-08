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
var MovementType = /** @class */ (function () {
    function MovementType() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", Number)
    ], MovementType.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "movementtype" }),
        __metadata("design:type", String)
    ], MovementType.prototype, "movementType", void 0);
    __decorate([
        typeorm_1.Column({ name: "offsetaccount" }),
        __metadata("design:type", String)
    ], MovementType.prototype, "offsetaccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], MovementType.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "movementarabic" }),
        __metadata("design:type", String)
    ], MovementType.prototype, "movementArabic", void 0);
    __decorate([
        typeorm_1.Column({ name: "inuse" }),
        __metadata("design:type", String)
    ], MovementType.prototype, "inuse", void 0);
    MovementType = __decorate([
        typeorm_1.Entity("movementtype")
    ], MovementType);
    return MovementType;
}());
exports.MovementType = MovementType;
