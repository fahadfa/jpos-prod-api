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
var HistoryUsergroupconfig = /** @class */ (function () {
    function HistoryUsergroupconfig() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "history_id" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "historyId", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "inventlocationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "currencycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesorderformat" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "salesorderformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "proximitycheck" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "proximitycheck", void 0);
    __decorate([
        typeorm_1.Column({ name: "defaultcustomerid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "defaultcustomerid", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], HistoryUsergroupconfig.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "packingslipformat" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "packinfslipformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "packingslipsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "packingslipsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceformat" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "invoiceformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoicesequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "invoicesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "reservationformat" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "reservationformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "reservationsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "reservationsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderformt" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "returnorderformt", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnordersequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "returnordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "quotationformat" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "quotationformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "quotationsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "quotationsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "warehouse" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "warehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "regionalwarehouse" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "regionalwarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "factorywarehouse" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "factorywarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesordersequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "salesordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "stockrequestsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "stockrequestsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "ordershipmentsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "ordershipmentsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "orderreceivesequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "orderreceivesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchase_return_sequence_group" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "purchaseReturnSequenceGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "additionalcustomer" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "additionalcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "sabic_customers" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "sabiccustomers", void 0);
    __decorate([
        typeorm_1.Column({ name: "isstorewarehouse" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "istorewarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "customergroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "customergroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "blocklistedbasecolor" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "blocklistedbasecolor", void 0);
    __decorate([
        typeorm_1.Column({ name: "nocolorantcheckgroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "nocolorantcheckgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscolorantrequired" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "iscolorantrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnitemblocked" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "returnitemblocked", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscityrequired" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "iscityrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "isvehiclerequired" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "isvehiclerequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobilevan" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "mobilevan", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroomemail" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "showroomemail", void 0);
    __decorate([
        typeorm_1.Column({ name: "telephone" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "telephone", void 0);
    __decorate([
        typeorm_1.Column({ name: "fax" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "fax", void 0);
    __decorate([
        typeorm_1.Column({ name: "istantdiscountexclude" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "istantdiscountexclude", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroomcountrycode" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "showroomcountrycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "customercreationaccess" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "customercreationaccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscustomersalesmaneditable" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "iscustomersalesmaneditable", void 0);
    __decorate([
        typeorm_1.Column({ name: "regionid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "regionId", void 0);
    __decorate([
        typeorm_1.Column({ name: "departmentid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "departmentid", void 0);
    __decorate([
        typeorm_1.Column({ name: "costcenterid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "costCenterId", void 0);
    __decorate([
        typeorm_1.Column({ name: "employeeid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "employeeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "projectid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "projectid", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesmanid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "salesmanid", void 0);
    __decorate([
        typeorm_1.Column({ name: "brandid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "brandid", void 0);
    __decorate([
        typeorm_1.Column({ name: "productlineid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "productlineid", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "deleteddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "defaultcustomer" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "defaultcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "sequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "sequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], HistoryUsergroupconfig.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.Column({ name: "journalnameid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "journalnameid", void 0);
    __decorate([
        typeorm_1.Column({ name: "movementsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "movementsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "movementsequenceformat" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "movementsequenceformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "rmsigningauthority" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "rmsigningauthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "rasigningauthority" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "rasigningauthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "designer_signing_authority" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "designerSigningAuthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "transferordersequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "transferordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchaserequestsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "purchaserequestsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchaseordersequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "purchaseordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchasepackingslipgroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "purchasepackingslipgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchaseinvoicegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "purchaseinvoicegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderapprovalrequired" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "returnorderapprovalrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderapproval" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "returnorderapproval", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventoryclosesequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "inventoryclosesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesforecastsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "salesforecastsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderrmapprovalrequired" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "returnorderrmapprovalrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderraapprovalrequired" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "returnorderraapprovalrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "projectcustomer" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "projectcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "agentcustomer" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "agentcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "fixedassestgroupsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "fixedassestgroupsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "agentwarehouses" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "agentwarehouses", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendors" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "vendors", void 0);
    __decorate([
        typeorm_1.Column({ name: "legeraccountsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "legeraccountsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "workflowcustomers" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "workflowcustomers", void 0);
    __decorate([
        typeorm_1.Column({ name: "workflowsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "workflowsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "generaljournalsequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "generaljournalsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialcompanycode" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "financialcompanycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "fiscalyearclosesequencegroup" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "fiscalyearclosesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "partnercode" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "partnercode", void 0);
    __decorate([
        typeorm_1.Column({ name: "ledgeraccount" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "ledgeraccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "usergroupid" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "groupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "special_products_for_colorant_option" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "specialproductsforcolorantoption", void 0);
    __decorate([
        typeorm_1.Column({ name: "report_warehouses" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "reportwarehouses", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_export_excel" }),
        __metadata("design:type", Boolean)
    ], HistoryUsergroupconfig.prototype, "isExportExcel", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesman_editable_customers" }),
        __metadata("design:type", String)
    ], HistoryUsergroupconfig.prototype, "salesmanEditableCustomers", void 0);
    HistoryUsergroupconfig = __decorate([
        typeorm_1.Entity("history_usergroupconfig")
    ], HistoryUsergroupconfig);
    return HistoryUsergroupconfig;
}());
exports.HistoryUsergroupconfig = HistoryUsergroupconfig;
