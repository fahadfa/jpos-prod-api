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
var NumberSequenceTable = /** @class */ (function () {
    function NumberSequenceTable() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: "id" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "numbersequence" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "numberSequence", void 0);
    __decorate([
        typeorm_1.Column({ name: "txt" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "txt", void 0);
    __decorate([
        typeorm_1.Column({ name: "latestcleandatetime" }),
        __metadata("design:type", Date)
    ], NumberSequenceTable.prototype, "latestCleanDateTime", void 0);
    __decorate([
        typeorm_1.Column({ name: "latestcleandatetimetzid" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "latestcleandatetimetzid", void 0);
    __decorate([
        typeorm_1.Column({ name: "lowest" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "lowest", void 0);
    __decorate([
        typeorm_1.Column({ name: "highest" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "highest", void 0);
    __decorate([
        typeorm_1.Column({ name: "nextrec" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "nextrec", void 0);
    __decorate([
        typeorm_1.Column({ name: "blocked" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "blocked", void 0);
    __decorate([
        typeorm_1.Column({ name: "format" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "format", void 0);
    __decorate([
        typeorm_1.Column({ name: "continuous" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "continuous", void 0);
    __decorate([
        typeorm_1.Column({ name: "cyclic" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "cyclic", void 0);
    __decorate([
        typeorm_1.Column({ name: "cleanataccess" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "cleanataccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "inuse" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "inuse", void 0);
    __decorate([
        typeorm_1.Column({ name: "noincrement" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "noIncrement", void 0);
    __decorate([
        typeorm_1.Column({ name: "cleaninterval" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "cleanInterval", void 0);
    __decorate([
        typeorm_1.Column({ name: "allowchangeup" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "allowChangeUp", void 0);
    __decorate([
        typeorm_1.Column({ name: "allowchangedown" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "allowChangedDown", void 0);
    __decorate([
        typeorm_1.Column({ name: "manual" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "manual", void 0);
    __decorate([
        typeorm_1.Column({ name: "fetchaheadqty" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "fetchaheadqty", void 0);
    __decorate([
        typeorm_1.Column({ name: "fetchahead" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "fetchahead", void 0);
    __decorate([
        typeorm_1.Column({ name: "modifiedtransactionid" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "modifiedTransactionId", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "recversion" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "recversion", void 0);
    __decorate([
        typeorm_1.Column({ name: "recid" }),
        __metadata("design:type", Number)
    ], NumberSequenceTable.prototype, "recid", void 0);
    __decorate([
        typeorm_1.Column({ name: "transkind" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "transkind", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], NumberSequenceTable.prototype, "inventlocationid", void 0);
    NumberSequenceTable = __decorate([
        typeorm_1.Entity("numbersequencetable")
    ], NumberSequenceTable);
    return NumberSequenceTable;
}());
exports.NumberSequenceTable = NumberSequenceTable;
