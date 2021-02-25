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
var Usergroupconfig = /** @class */ (function () {
    function Usergroupconfig() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ name: "id" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventlocationid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "inventlocationid", void 0);
    __decorate([
        typeorm_1.Column({ name: "currencycode" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "currencycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesorderformat" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "salesorderformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "proximitycheck" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "proximitycheck", void 0);
    __decorate([
        typeorm_1.Column({ name: "defaultcustomerid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "defaultcustomerid", void 0);
    __decorate([
        typeorm_1.Column({ name: "createdby" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "createdby", void 0);
    __decorate([
        typeorm_1.Column({ name: "createddatetime" }),
        __metadata("design:type", Date)
    ], Usergroupconfig.prototype, "createddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifiedby" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "lastmodifiedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "packingslipformat" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "packinfslipformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "packingslipsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "packingslipsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoiceformat" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "invoiceformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "invoicesequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "invoicesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "reservationformat" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "reservationformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "reservationsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "reservationsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderformt" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "returnorderformt", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnordersequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "returnordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "quotationformat" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "quotationformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "quotationsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "quotationsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "warehouse" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "warehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "regionalwarehouse" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "regionalwarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "factorywarehouse" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "factorywarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "dataareaid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "dataareaid", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesordersequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "salesordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "stockrequestsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "stockrequestsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "ordershipmentsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "ordershipmentsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "orderreceivesequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "orderreceivesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchase_return_sequence_group" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "purchaseReturnSequenceGroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "additionalcustomer" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "additionalcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "sabic_customers" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "sabiccustomers", void 0);
    __decorate([
        typeorm_1.Column({ name: "isstorewarehouse" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "istorewarehouse", void 0);
    __decorate([
        typeorm_1.Column({ name: "customergroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "customergroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "blocklistedbasecolor" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "blocklistedbasecolor", void 0);
    __decorate([
        typeorm_1.Column({ name: "nocolorantcheckgroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "nocolorantcheckgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscolorantrequired" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "iscolorantrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnitemblocked" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "returnitemblocked", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscityrequired" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "iscityrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "isvehiclerequired" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "isvehiclerequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "mobilevan" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "mobilevan", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroomemail" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "showroomemail", void 0);
    __decorate([
        typeorm_1.Column({ name: "telephone" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "telephone", void 0);
    __decorate([
        typeorm_1.Column({ name: "fax" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "fax", void 0);
    __decorate([
        typeorm_1.Column({ name: "istantdiscountexclude" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "istantdiscountexclude", void 0);
    __decorate([
        typeorm_1.Column({ name: "customercreationaccess" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "customercreationaccess", void 0);
    __decorate([
        typeorm_1.Column({ name: "iscustomersalesmaneditable" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "iscustomersalesmaneditable", void 0);
    __decorate([
        typeorm_1.Column({ name: "regionid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "regionId", void 0);
    __decorate([
        typeorm_1.Column({ name: "departmentid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "departmentid", void 0);
    __decorate([
        typeorm_1.Column({ name: "costcenterid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "costCenterId", void 0);
    __decorate([
        typeorm_1.Column({ name: "employeeid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "employeeid", void 0);
    __decorate([
        typeorm_1.Column({ name: "projectid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "projectid", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesmanid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "salesmanid", void 0);
    __decorate([
        typeorm_1.Column({ name: "brandid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "brandid", void 0);
    __decorate([
        typeorm_1.Column({ name: "productlineid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "productlineid", void 0);
    __decorate([
        typeorm_1.Column({ name: "deletedby" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "deletedby", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleteddatetime" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "deleteddatetime", void 0);
    __decorate([
        typeorm_1.Column({ name: "deleted" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "deleted", void 0);
    __decorate([
        typeorm_1.Column({ name: "defaultcustomer" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "defaultcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "sequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "sequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "lastmodifieddate" }),
        __metadata("design:type", Date)
    ], Usergroupconfig.prototype, "lastmodifieddate", void 0);
    __decorate([
        typeorm_1.Column({ name: "journalnameid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "journalnameid", void 0);
    __decorate([
        typeorm_1.Column({ name: "movementsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "movementsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "movementsequenceformat" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "movementsequenceformat", void 0);
    __decorate([
        typeorm_1.Column({ name: "rmsigningauthority" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "rmsigningauthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "rasigningauthority" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "rasigningauthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "designer_signing_authority" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "designerSigningAuthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "transferordersequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "transferordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchaserequestsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "purchaserequestsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchaseordersequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "purchaseordersequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchasepackingslipgroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "purchasepackingslipgroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "purchaseinvoicegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "purchaseinvoicegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderapprovalrequired" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "returnorderapprovalrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderapproval" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "returnorderapproval", void 0);
    __decorate([
        typeorm_1.Column({ name: "inventoryclosesequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "inventoryclosesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesforecastsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "salesforecastsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderrmapprovalrequired" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "returnorderrmapprovalrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "returnorderraapprovalrequired" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "returnorderraapprovalrequired", void 0);
    __decorate([
        typeorm_1.Column({ name: "projectcustomer" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "projectcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "agentcustomer" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "agentcustomer", void 0);
    __decorate([
        typeorm_1.Column({ name: "fixedassestgroupsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "fixedassestgroupsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "agentwarehouses" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "agentwarehouses", void 0);
    __decorate([
        typeorm_1.Column({ name: "vendors" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "vendors", void 0);
    __decorate([
        typeorm_1.Column({ name: "legeraccountsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "legeraccountsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "workflowcustomers" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "workflowcustomers", void 0);
    __decorate([
        typeorm_1.Column({ name: "workflowsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "workflowsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "generaljournalsequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "generaljournalsequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "financialcompanycode" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "financialcompanycode", void 0);
    __decorate([
        typeorm_1.Column({ name: "fiscalyearclosesequencegroup" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "fiscalyearclosesequencegroup", void 0);
    __decorate([
        typeorm_1.Column({ name: "partnercode" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "partnercode", void 0);
    __decorate([
        typeorm_1.Column({ name: "ledgeraccount" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "ledgeraccount", void 0);
    __decorate([
        typeorm_1.Column({ name: "usergroupid" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "groupid", void 0);
    __decorate([
        typeorm_1.Column({ name: "special_products_for_colorant_option" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "specialproductsforcolorantoption", void 0);
    __decorate([
        typeorm_1.Column({ name: "report_warehouses" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "reportwarehouses", void 0);
    __decorate([
        typeorm_1.Column({ name: "is_export_excel" }),
        __metadata("design:type", Boolean)
    ], Usergroupconfig.prototype, "isExportExcel", void 0);
    __decorate([
        typeorm_1.Column({ name: "salesman_editable_customers" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "salesmanEditableCustomers", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroomcountrycode" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "showroomCountryCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroom_city_code" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "showroomCityCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "showroom_district_code" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "showroomDistrictCode", void 0);
    __decorate([
        typeorm_1.Column({ name: "sales_coordinator_signing_authority" }),
        __metadata("design:type", String)
    ], Usergroupconfig.prototype, "salesCoordinatorSigningAuthority", void 0);
    __decorate([
        typeorm_1.Column({ name: "return_order_days" }),
        __metadata("design:type", Number)
    ], Usergroupconfig.prototype, "returnOrderDays", void 0);
    Usergroupconfig = __decorate([
        typeorm_1.Entity("usergroupconfig")
    ], Usergroupconfig);
    return Usergroupconfig;
}());
exports.Usergroupconfig = Usergroupconfig;
