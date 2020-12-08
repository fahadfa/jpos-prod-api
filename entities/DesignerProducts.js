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
var DesignerProducts = /** @class */ (function () {
    function DesignerProducts() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_en" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "nameEn", void 0);
    __decorate([
        typeorm_1.Column({ name: "name_ar" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "nameAr", void 0);
    __decorate([
        typeorm_1.Column({ name: "code" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ name: "price" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({ name: "vat" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "vat", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_by" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_by" }),
        __metadata("design:type", String)
    ], DesignerProducts.prototype, "updatedBy", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_on" }),
        __metadata("design:type", Date)
    ], DesignerProducts.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.Column({ name: "updated_on" }),
        __metadata("design:type", Date)
    ], DesignerProducts.prototype, "updatedOn", void 0);
    DesignerProducts = __decorate([
        typeorm_1.Entity("designer_products")
    ], DesignerProducts);
    return DesignerProducts;
}());
exports.DesignerProducts = DesignerProducts;
