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
var SelectedLines = /** @class */ (function () {
    function SelectedLines() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], SelectedLines.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "lines", type: "json" }),
        __metadata("design:type", Object)
    ], SelectedLines.prototype, "lines", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", Date)
    ], SelectedLines.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], SelectedLines.prototype, "updatedOn", void 0);
    SelectedLines = __decorate([
        typeorm_1.Entity("selected_lines")
    ], SelectedLines);
    return SelectedLines;
}());
exports.SelectedLines = SelectedLines;
