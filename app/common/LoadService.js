"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Props_1 = require("../../constants/Props");
var RawQuery_1 = require("./RawQuery");
var MenuGroupDAO_1 = require("../repos/MenuGroupDAO");
var App_1 = require("../../utils/App");
var LoadService = /** @class */ (function () {
    function LoadService() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.menuGroupRepository = new MenuGroupDAO_1.MenuGroupDAO();
    }
    LoadService.prototype.historicalCustomer = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select distinct on (c.accountnum) \n      c.accountnum,c.phone,c.name as name, \n      c.namealias  from custtable c \n      where (c.phone ILike '%" + param.key + "%' or c.accountnum  ILike '%" + param.key + "%')\n      and c.walkincustomer is true \n      order by c.accountnum  desc limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.customer = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("customer search");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        param.additionalcustomer = this.sessionInfo.additionalcustomer
                            ? this.sessionInfo.additionalcustomer
                                .split(",")
                                .map(function (d) { return "'" + d + "'"; })
                                .join(",")
                            : null;
                        param.customergroup = this.sessionInfo.customergroup
                            ? this.sessionInfo.customergroup
                                .split(",")
                                .map(function (d) { return "'" + d + "'"; })
                                .join(",")
                            : null;
                        param.sabiccustomers = this.sessionInfo.sabiccustomers
                            ? this.sessionInfo.sabiccustomers
                                .trim()
                                .split(",")
                                .map(function (d) { return "'" + d + "'"; })
                                .join(",")
                            : null;
                        query = "select distinct on (c.accountnum) \n            c.accountnum, \n            c.name as name, \n            c.namealias, \n            c.address, \n            (CASE \n              WHEN c.phone='null' THEN NULL\n              ELSE c.phone\n          END\n           )as phone,\n            c.districtcode,\n            c.citycode, \n            c.rcusttype, \n            c.pricegroup,\n            c.inventlocation,\n            c.walkincustomer,\n            c.custgroup,\n            c.cashdisc,\n            c.salesgroup,\n            c.currency,\n            c.vendaccount,\n            c.vatnum,\n            c.countryregionid,\n            c.inventlocation,\n            c.email,\n            c.blocked,\n            c.taxgroup,\n            c.paymmode,\n            c.paymtermid,\n            c.creditmax,\n            c.bankaccount,\n            c.invoiceaddress,\n            c.city,\n            c.custtype,\n            CAST(td.taxvalue AS INTEGER) as tax,\n            c.walkincustomer,\n            c.dimension as regionid,\n            c.dimension2_ as departmentid,\n            c.dimension3_ as costcenterid,\n            c.dimension4_ as employeeid,\n            c.dimension5_ as projectid,\n            (CASE \n              WHEN c.dimension6_!='' THEN concat(c.dimension6_,' - ', d.description)\n              ELSE '" + (this.sessionInfo.salesmanid.length > 0 ? this.sessionInfo.salesmanid[0].salesman : null) + "'\n          END\n           ) as salesman,\n           (CASE \n            WHEN c.dimension6_!='' THEN c.dimension6_\n            ELSE '" + (this.sessionInfo.salesmanid.length > 0 ? this.sessionInfo.salesmanid[0].salesmanid : null) + "'\n        END\n         ) as salesmanid,\n           c.dimension7_ as brandid,\n           c.dimension8_ as productlineid\n           from custtable c\n           left join dimensions d on c.dimension6_ = d.num\n           left join taxgroupdata tg on tg.taxgroup = c.taxgroup\n           left join taxdata td on td.taxcode = tg.taxcode ";
                        if (param.key == "customer") {
                            query += "where (concat(c.name, '$' ,c.namealias , '$' , c.accountnum, '$', c.phone) ILike '%" + param.param + "%') and lower(c.dataareaid)=lower('" + this.sessionInfo.dataareaid + "') ";
                            // query += `where (c.name ILike '%${param.param}%' or c.namealias ILike '%${param.param}%' or c.accountnum ILike '%${param.param}%' or c.phone ILike '%${param.param}%') and lower(c.dataareaid)=lower('${this.sessionInfo.dataareaid}') `;
                        }
                        else if (param.key == "painter") {
                            query += "where (concat(c.name, '$' ,c.namealias , '$' , c.accountnum, '$', c.phone) ILike '%" + param.param + "%') and lower(c.dataareaid)=lower('" + this.sessionInfo.dataareaid + "') and c.rcusttype = 2";
                            // query += `where (c.name ILike '%${param.param}%' or c.namealias ILike '%${param.param}%'  or c.accountnum ILike '%${param.param}%' or c.phone ILike '%${param.param}%') and lower(c.dataareaid)=lower('${this.sessionInfo.dataareaid}') and c.rcusttype = 2`;
                        }
                        else if (param.key == "mobile") {
                            query += "where c.phone ILike '%" + param.param + "%'";
                            // } else {
                            //     query += `where dataareaid='${this.sessionInfo.dataareaid}' `;
                        }
                        if (param.type == "DESIGNERSERVICE") {
                            query += " and (c.paymtermid = 'CASH' or c.walkincustomer = true) ";
                        }
                        if (param.custgroup || param.additionalcustomer || param.sabiccustomers) {
                            if (param.type == "LEDGER") {
                                query += "and c.walkincustomer != true and ( 1=1 ";
                            }
                            else {
                                query += "and ( c.walkincustomer = true  ";
                            }
                            if (param.customergroup) {
                                query += " or c.custgroup in (" + param.customergroup + ") ";
                            }
                            if (param.additionalcustomer) {
                                query += " or c.accountnum in (" + param.additionalcustomer + ") ";
                            }
                            if (param.sabiccustomers) {
                                query += " or c.accountnum in (" + param.sabiccustomers + ") ";
                            }
                            query += " ) ";
                        }
                        else {
                            if (param.type == "LEDGER") {
                                query += " and (c.walkincustomer != true) ";
                            }
                            else {
                                query += " or c.walkincustomer = true ";
                            }
                        }
                        query += "  and c.deleted = false and lower(c.dataareaid)='" + this.sessionInfo.dataareaid.toLowerCase() + "' " + (param.type == "DESIGNERSERVICE" ? " and c.accountnum!='" + this.sessionInfo.defaultcustomerid + "'" : "") + " order by accountnum DESC limit 15";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.getCustomer = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(param.param)];
                    case 1:
                        customer = _a.sent();
                        return [2 /*return*/, [customer]];
                }
            });
        });
    };
    LoadService.prototype.visitor = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = " select \n        visitorid as \"visitorId\",\n        visitorsequencenumber as \"visitorSequenceNumber\",\n        dateofvisit as \"dateOfVisit\",\n        salesmanname as \"salesmanName\",\n        salesmanid as \"salesmanId\",\n        regionnumber as \"regionNumber\",\n        showroomid as \"showroomId\",\n        usergroupid as \"userGroupId\",\n        visitormobilenumber as \"visitorMobileNumber\",\n        visitorname as \"visitorName\",\n        purchased as \"purchased\",\n        visitortype as \"visitorType\",\n        reasonfornotpurchase as \"description\",\n        dataareaid as \"dataareaid\"\n         from visitcustomer where visitorsequencenumber Ilike '%" + param.key + "%' and dataareaid='" + this.sessionInfo.dataareaid + "' limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_salesQuotation = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "SALESQUOTATION";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_designerService = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "DESIGNERSERVICE";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_salesOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind1 = "SALESORDER";
                        param.transkind2 = "RESERVED";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.searchHistoricalSalesOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.search_salesTableForHistorical(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_salesOrderForReturnOrderPage = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "SALESORDER";
                        param.status = "PAID','POSTED', 'PRINTED";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_returnOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "RETURNORDER";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_designerServiceReturn = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "DESIGNERSERVICERETURN";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_inventoryMovement = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "INVENTORYMOVEMENT";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_transferOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "TRANSFERORDER";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_pendingTransferOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "TRANSFERORDER";
                        param.status = "REQUESTED";
                        query = "Select salestable.salesid as salesid, salestable.salesname as salesname, inventlocationid as inventlocationid\n                 from salestable where  salestable.custaccount='" + this.sessionInfo.inventlocationid + "' and status = 'REQUESTED' and salesid ILike '%" + param.key + "%' ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_shipmentOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "ORDERSHIPMENT";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_recieveOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "ORDERRECIEVE";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_purchaseQuotation = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "PURCHASEREQUEST";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_purchaseOrder = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "PURCHASEORDER";
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_purchaseOrderForReturnOrderPage = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "PURCHASEORDER";
                        param.status = "PAID";
                        param.cond = true;
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_purchaseReturn = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param.transkind = "PURCHASERETURN";
                        param.cond = true;
                        return [4 /*yield*/, this.search_salesTable(param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.search_salesTable = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "Select salestable.salesid as salesid, salestable.salesname as salesname, \n                        \n                        " + (param.transkind == "PURCHASEORDER" || param.transkind == "PURCHASERETURN"
                            ? " vendortable.name as name, vendortable.namealias as namealias"
                            : " custtable.name as name, custtable.namealias as namealias") + "\n                        from salestable \n                        " + (param.transkind == "PURCHASEORDER" || param.transkind == "PURCHASERETURN"
                            ? "  left join vendortable on vendortable.accountnum = salestable.custaccount"
                            : "  left join custtable on custtable.accountnum = salestable.custaccount") + "\n                       \n                        where (salestable.inventlocationid='" + this.sessionInfo.inventlocationid + "' or\n                        salestable.custaccount='" + this.sessionInfo.inventlocationid + "' " + (!param.cond == true ? "or salestable.jazeerawarehouse='" + this.sessionInfo.inventlocationid + "'" : "") + ")\n                        and (salestable.salesid  ILike '%" + param.key + "%' or salestable.salesname  ILike '%" + param.key + "%' or\n                         " + (param.transkind == "PURCHASEORDER" || param.transkind == "PURCHASERETURN"
                            ? "vendortable.name"
                            : "custtable.name") + " ILike '%" + param.key + "%' or  " + (param.transkind == "PURCHASEORDER" || param.transkind == "PURCHASERETURN"
                            ? "vendortable.namealias"
                            : "custtable.namealias") + "  ILike '%" + param.key + "%') ";
                        if (param.transkind1 && param.transkind2) {
                            query += "and (salestable.transkind='" + param.transkind1 + "' or salestable.transkind='" + param.transkind2 + "')  ";
                        }
                        else if (param.transkind) {
                            query += "and salestable.transkind='" + param.transkind + "'";
                        }
                        if (param.status) {
                            query += "and salestable.status in ('" + param.status + "') ";
                        }
                        if (param.transkind == "DESIGNERSERVICERETURN" || param.transkind == "DESIGNERSERVICERETURN") {
                            query += " and salestable.salestype is NULL ";
                        }
                        query += "ORDER BY salestable.createddatetime DESC LIMIT 15";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.search_salesTableForHistorical = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "Select salestable.salesid as salesid, salestable.salesname as salesname,                         \n      c.name as name, c.namealias as namealias\n     from salestable \n       left join custtable as c on c.accountnum = salestable.custaccount                       \n     where salestable.dataareaid='ajp' and\n      (LOWER(salestable.salesid) ILike '%" + param.key.toLowerCase() + "%' or LOWER(c.name) ILike '%" + param.key.toLowerCase() + "%' or  LOWER(c.namealias)  ILike '%" + param.key.toLowerCase() + "%') and \n      (salestable.transkind in('DESIGNERSERVICE','ORDERRECEIVE','ORDERSHIPMENT','RETURNORDER','SALESORDER','TRANSFERORDER','INVENTORYMOVEMENT','DESIGNERSERVICERETURN') )\n      and salestable.status IN ('PRINTED','POSTED')\n      and  salestable.inventlocationid = '" + this.sessionInfo.inventlocationid + "'\n      ORDER BY salestable.createddatetime  desc limit 15";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.search_custpaymmode = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select * from custpaymmodetable";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.search_paymterm = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select * from paymterm";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.countries = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select concat(id, ':', nameeng) as countryen, concat(id, ':', name) as countryar,  id as code, name as namear, nameeng as nameen from country";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.cities = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select concat(citycode, ':', cityname) as cityen, concat(citycode, ':', citynamearb) as cityar ,cityname as nameen, citynamearb as namear, citycode as citycode from citymast";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_8 = _a.sent();
                        throw error_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.districts = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select concat(districtcode, ':', districtname) as districten, concat(districtcode, ':', districtnamearb) as districtar, districtname as nameen, districtnamearb as namear, districtcode, citycode from districtmast";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_9 = _a.sent();
                        throw error_9;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.salesman = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select concat(num,' - ', description) as salesman, num as salesmanid\n      from dimensions where dimensioncode IN (102)";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_10 = _a.sent();
                        throw error_10;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.salesmanList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, salesmanQuery, reqData, ids, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesmanQuery = "select salesmanid from usergroupconfig where id = '" + this.sessionInfo.usergroupconfigid + "'";
                        return [4 /*yield*/, this.db.query(salesmanQuery)];
                    case 1:
                        reqData = _a.sent();
                        reqData = reqData.length > 0 ? reqData[0].salesmanid : null;
                        if (!(reqData != null)) return [3 /*break*/, 3];
                        ids = reqData
                            .split(",")
                            .map(function (d) { return "'" + d + "'"; })
                            .join(",");
                        query = "select concat(num,' - ', description) as salesman, num as salesmanid\n    from dimensions where num in(" + ids + ")";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    LoadService.prototype.salesmaneditablecustomers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, salesmanQuery, reqData, ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesmanQuery = "select salesman_editable_customers as customers from usergroupconfig where id = '" + this.sessionInfo.usergroupconfigid + "'";
                        return [4 /*yield*/, this.db.query(salesmanQuery)];
                    case 1:
                        reqData = _a.sent();
                        reqData = reqData.length > 0 ? reqData[0].customers : null;
                        if (reqData != null) {
                            ids = reqData.split(",");
                            return [2 /*return*/, ids];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.locationsalesman = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select name as \"name\",\n                description as \"nameAlias\",\n                dimensioncode as  dimensioncode,\n                num as salesmanid\n                from dimensions where num in  (select salesmanid from usergroupconfig where inventlocationid = '" + this.sessionInfo.inventlocationid + "')";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_11 = _a.sent();
                        throw error_11;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.currency = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select currencycode as currencycode from currency";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data];
                    case 2:
                        error_12 = _a.sent();
                        throw error_12;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.custtype = function () {
        var data = [
            {
                custtype: 1,
                custypenameen: "Individual",
                custtypenamear: "أفراد",
            },
            {
                custtype: 2,
                custypenameen: "Painters",
                custtypenamear: "دهان",
            },
            {
                custtype: 3,
                custypenameen: "Paints Contractor",
                custtypenamear: "دهان مقاول - مؤسسات",
            },
            {
                custtype: 4,
                custypenameen: "Interior Designer",
                custtypenamear: "مصمم داخلي",
            },
            {
                custtype: 5,
                custypenameen: "Decoration Shops",
                custtypenamear: "محلات الديكور",
            },
            {
                custtype: 6,
                custypenameen: "Family",
                custtypenamear: "عوائل",
            },
            {
                custtype: 7,
                custypenameen: "Real Estate",
                custtypenamear: "العقاريون",
            },
            {
                custtype: 8,
                custypenameen: "Tile Workers",
                custtypenamear: "مبلطين",
            },
            {
                custtype: 9,
                custypenameen: "ISOLATION",
                custtypenamear: "عوازل",
            },
        ];
        return data;
    };
    LoadService.prototype.movementName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select journalnameid as \"movementName\" from usergroupconfig where id='" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : { movementName: "" }];
                }
            });
        });
    };
    LoadService.prototype.movementType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select * from movementtype";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.jazeerawarehouses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var warehouseQuery, regionalWarehouses, inQueryStr, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr = "";
                        if (!(regionalWarehouses.length > 0)) return [3 /*break*/, 5];
                        if (!regionalWarehouses[0].regionalwarehouse) return [3 /*break*/, 3];
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr += "'" + item + "',";
                        });
                        inQueryStr += "'" + this.sessionInfo.inventlocationid + "'";
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid in (" + inQueryStr + ") order by namealias";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3: return [2 /*return*/, []];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.reportwarehouses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var warehouseQuery, regionalWarehouses, inQueryStr, query, data, resData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouseQuery = "select report_warehouses as regionalwarehouse from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr = "";
                        if (!(regionalWarehouses.length > 0)) return [3 /*break*/, 5];
                        if (!regionalWarehouses[0].regionalwarehouse) return [3 /*break*/, 3];
                        inQueryStr = regionalWarehouses[0].regionalwarehouse
                            .split(",")
                            .map(function (d) { return "'" + d + "'"; })
                            .join(",");
                        inQueryStr += ",'" + this.sessionInfo.inventlocationid + "'";
                        console.log(inQueryStr);
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid in (" + inQueryStr + ") order by namealias";
                        data = [];
                        if (regionalWarehouses[0].regionalwarehouse.split(",").includes("ALL")) {
                            data = [
                                {
                                    inventlocationid: "ALL",
                                    namealias: "All",
                                    name: "الكل",
                                },
                            ];
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        resData = _a.sent();
                        return [2 /*return*/, data.concat(resData)];
                    case 3: return [2 /*return*/, []];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.warehouses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var warehouseQuery, regionalWarehouses, inQueryStr, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouseQuery = "select warehouse from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr = "";
                        if (!(regionalWarehouses.length > 0)) return [3 /*break*/, 5];
                        if (!regionalWarehouses[0].warehouse) return [3 /*break*/, 3];
                        regionalWarehouses[0].warehouse.split(",").map(function (item) {
                            inQueryStr += "'" + item + "',";
                        });
                        inQueryStr += "'" + this.sessionInfo.inventlocationid + "'";
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid in (" + inQueryStr + ")";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3: return [2 /*return*/, []];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.agentwarehouses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var warehouseQuery, jazeeraWarehouses, inQueryStr_1, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouseQuery = "select agentwarehouses from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        jazeeraWarehouses = _a.sent();
                        if (!(jazeeraWarehouses.length > 0)) return [3 /*break*/, 5];
                        if (!jazeeraWarehouses[0].agentwarehouses) return [3 /*break*/, 3];
                        inQueryStr_1 = "";
                        jazeeraWarehouses[0].agentwarehouses.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ")";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3: return [2 /*return*/, []];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid ='" + param.key + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data ? data[0] : {}];
                }
            });
        });
    };
    LoadService.prototype.workflowconditionsforreturnorder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n            returnorderapprovalrequired , \n            returnorderrmapprovalrequired,\n            returnorderraapprovalrequired, \n            projectcustomer, return_order_days as \"returnOrderDays\",\n            agentcustomer from usergroupconfig\n            where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data ? data[0] : {}];
                }
            });
        });
    };
    LoadService.prototype.usergroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select groupid, groupname from usergroup where deleted != true or deleted is NULL";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.vendors = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var vendorsQuery, vendorslist, inQueryStr, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vendorsQuery = "select vendors from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(vendorsQuery)];
                    case 1:
                        vendorslist = _a.sent();
                        console.log(vendorslist);
                        inQueryStr = "";
                        if (!(vendorslist.length > 0)) return [3 /*break*/, 5];
                        if (!vendorslist[0].vendors) return [3 /*break*/, 3];
                        vendorslist[0].vendors.split(",").map(function (item) {
                            inQueryStr += "'" + item + "',";
                        });
                        query = "select accountnum, \n                                    name,\n                                    namealias,\n                                    address,\n                                    phone,\n                                    vendgroup,\n                                    inventlocation,\n                                    currency\n                                    from vendortable where accountnum in (" + inQueryStr.substr(0, inQueryStr.length - 1) + ") ";
                        if (param.key) {
                            query += " and (accountnum ILIKE '%" + param.key + "%' or name ILIKE '%" + param.key + "%' or namealias ILIKE '%" + param.key + "%') ";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3: return [2 /*return*/, []];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.showrooms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, warehouseQuery, regionalWarehouses, inQueryStr_2, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        console.log(regionalWarehouses);
                        if (!(regionalWarehouses.length > 0)) return [3 /*break*/, 5];
                        if (!regionalWarehouses[0].regionalwarehouse) return [3 /*break*/, 3];
                        inQueryStr_2 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_2 += "'" + item + "',";
                        });
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid in (" + inQueryStr_2.substr(0, inQueryStr_2.length - 1) + ")";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        data = [];
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        data = [];
                        _a.label = 6;
                    case 6:
                        result = [
                            {
                                inventlocationid: "ALL",
                                name: "الكل",
                                namealias: "All",
                            },
                        ];
                        data.sort(function (a, b) {
                            var nameA = a.name;
                            var nameB = b.name;
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        });
                        return [2 /*return*/, result.concat(data)];
                }
            });
        });
    };
    LoadService.prototype.products = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct\n        b.itemid as \"itemid\",\n        b.namealias as \"nameEn\",\n        b.itemname as nameAr\n        from  inventtable b\n        where b.itemid Ilike '%" + param.param + "%' or b.namealias Ilike '%" + param.param + "%' or b.itemname Ilike '%" + param.param + "%' limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    LoadService.prototype.colors = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct\n        c.name as \"nameEn\", \n        c.name as \"nameAr\",\n        c.configid as configid,\n        c.hexcode as \"hex\"\n        from configtable c where (c.configid Ilike '%" + param.param + "%' or c.name Ilike '%" + param.param + "%' or c.name Ilike '%" + param.param + "%') and itemid = '" + param.itemid + "' limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.sizes = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct\n        s.description as \"nameEn\", \n        s.name as \"nameAr\",\n        s.inventsizeid as inventsizeid\n        from inventsize s where (s.inventsizeid Ilike '%" + param.param + "%' or s.description Ilike '%" + param.param + "%' or s.name Ilike '%" + param.param + "%' )and itemid = '" + param.itemid + "' limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.batches = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct\n        i.inventbatchid as \"batchNo\", \n        i.itemid as \"itemId\"\n        from inventbatch i \n         where  i.inventbatchid Ilike '%" + param.param + "%' and itemid = '" + param.itemid + "' limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.dimensions = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                query = "select \n            description as \"nameArabic\",\n            name as \"NameEn\",\n            num as num,\n            dimensioncode as \"DimensionCode\",\n            closed\n            from dimensions\n             where dimensioncode=" + Props_1.Props.DIMENSION_CODE[param.key];
                return [2 /*return*/, this.db.query(query)];
            });
        });
    };
    LoadService.prototype.accountType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accountType;
            return __generator(this, function (_a) {
                accountType = [
                    {
                        accountType: 0,
                        accountTypeName: "Profit And Loss",
                        accountTypeNameAr: "الربح والخسارة",
                    },
                    {
                        accountType: 1,
                        accountTypeName: "Revenue",
                        accountTypeNameAr: "إيرادات",
                    },
                    {
                        accountType: 2,
                        accountTypeName: "Cost",
                        accountTypeNameAr: "كلفة",
                    },
                    {
                        accountType: 3,
                        accountTypeName: "Balance",
                        accountTypeNameAr: "توازن",
                    },
                    {
                        accountType: 4,
                        accountTypeName: "Asset",
                        accountTypeNameAr: "الأصل",
                    },
                    {
                        accountType: 5,
                        accountTypeName: "Liability",
                        accountTypeNameAr: "مسؤولية",
                    },
                    {
                        accountType: 6,
                        accountTypeName: "Header",
                        accountTypeNameAr: "العنوان",
                    },
                    {
                        accountType: 9,
                        accountTypeName: "Total",
                        accountTypeNameAr: "مجموع",
                    },
                    {
                        accountType: 10,
                        accountTypeName: "Group Total",
                        accountTypeNameAr: "إجمالي المجموعة",
                    },
                ];
                return [2 /*return*/, accountType];
            });
        });
    };
    LoadService.prototype.dimentionOptions = function () {
        var options = [
            {
                value: 0,
                text: "Optional",
                textAr: "اختياري",
            },
            {
                value: 1,
                text: "ToBeFilledIn",
                textAr: "المراد شغلها في",
            },
            {
                value: 2,
                text: "List",
                textAr: "قائمة",
            },
            {
                value: 3,
                text: "Fixed",
                textAr: "ثابت",
            },
        ];
        return options;
    };
    LoadService.prototype.chartOfAccounts = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        accountnum as \"accountNum\",\n        accountname as \"accountName\",\n        accountpltype as accounttype,\n        dimension as \"region\",\n        dimension2_ as \"department\",\n        dimension3_ as \"costcenter\",\n        dimension4_ as \"employee\",\n        dimension5_ as \"project\",\n        dimension6_ as \"salesman\",\n        dimension7_ as \"brand\",\n        dimension8_ as \"productline\",\n        mandatorydimension as \"mandatoryRegion\",\n        mandatorydimension2_ as \"mandatorydDepartment\",\n        mandatorydimension3_ as \"mandatoryCostcenter\",\n        mandatorydimension4_ as \"mandatoryEmployee\",\n        mandatorydimension5_ as \"mandatoryProject\",\n        mandatorydimension6_ as \"mandatorySalesman\",\n        mandatorydimension7_ as \"mandatoryBrand\",\n        mandatorydimension8_ as \"mandatoryproductLine\"\n        from accountstable where\n        (accountnum ILIKE '%" + param.key + "%' or accountname ILIKE '%" + param.key + "%') and \n        dataareaid = '" + this.sessionInfo.dataareaid + "' and closed=0 and locked=0 and accountpltype in (0, 1,2,4,5) limit 15";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.propertytype = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [
                        {
                            id: 0,
                            name: "Fixed Asset",
                            nameArabic: "أصل ثابت",
                        },
                        {
                            id: 1,
                            name: "Continue Property",
                            nameArabic: "تواصل الملكية",
                        },
                        {
                            id: 2,
                            name: "Other",
                            nameArabic: "آخر",
                        },
                    ]];
            });
        });
    };
    LoadService.prototype.assettype = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [
                        {
                            id: 0,
                            name: "Tangible",
                            nameArabic: "ملموس",
                        },
                        {
                            id: 1,
                            name: "Intangible",
                            nameArabic: "غير الملموسة",
                        },
                        {
                            id: 2,
                            name: "Financial",
                            nameArabic: "الأمور المالية",
                        },
                        {
                            id: 3,
                            name: "Land and Building",
                            nameArabic: "الأرض والبناء",
                        },
                        {
                            id: 4,
                            name: "Goodwill",
                            nameArabic: "نية حسنة",
                        },
                        {
                            id: 5,
                            name: "Other",
                            nameArabic: "آخر",
                        },
                    ]];
            });
        });
    };
    LoadService.prototype.numbersequence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n      select recid as id,\n      numbersequence as numbersequence,\n      format as format,\n      dataareaid as dataareaid\n      from numbersequencetable where inventlocationid in ('" + this.sessionInfo.inventlocationid + "')\n      ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.assetcondition = function () {
        return [
            {
                value: "USABLE",
                text: "Usable",
            },
            {
                value: "NOTUSABLE",
                text: "Not Usable",
            },
            {
                value: "SOLD",
                text: "Sold",
            },
            {
                value: "WRITEOFF",
                text: "WriteOff",
            },
        ];
    };
    LoadService.prototype.periodfreequency = function () {
        return [
            {
                value: 12,
                text: "Monthly",
                textAr: "شهريا",
            },
            {
                value: 3,
                text: "Quarterly",
                textAr: "ربعي",
            },
            {
                value: 2,
                text: "Half Yearly",
                textAr: "منتصف المدة",
            },
            {
                value: 1,
                text: "Yearly",
                textAr: "سنوي",
            },
        ];
    };
    LoadService.prototype.years = function () {
        var data = [];
        var currentYear = new Date().getFullYear();
        for (var i = 0; i < 99; i++) {
            data.push({
                yearNo: currentYear,
            });
            currentYear += 1;
        }
        return data;
    };
    LoadService.prototype.months = function () {
        var data = [
            {
                month: "January",
                value: 1,
            },
            {
                month: "February",
                value: 2,
            },
            {
                month: "March",
                value: 3,
            },
            {
                month: "April",
                value: 4,
            },
            {
                month: "May",
                value: 5,
            },
            {
                month: "June",
                value: 6,
            },
            {
                month: "July",
                value: 7,
            },
            {
                month: "August",
                value: 8,
            },
            {
                month: "Sepetember",
                value: 9,
            },
            {
                month: "October",
                value: 10,
            },
            {
                month: "November",
                value: 12,
            },
            {
                month: "December",
                value: 13,
            },
        ];
        return data;
    };
    LoadService.prototype.JournalName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select journalnameid as \"JournalName\" from usergroupconfig where id='" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data[0].JournalName.split(",") : [];
                        result = [];
                        data.forEach(function (ele) {
                            result.push({
                                name: ele,
                            });
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    LoadService.prototype.assetgroup = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select groupid as \"assetGroup\", name as name, namealias as \"nameAlias\" from \n        fixedassetgroup where groupid ILIKE '%" + param.key + "%' or name ILIKE '%" + param.key + "%' or namealias ILIKE '%" + param.key + "%'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.checkfordiscounts = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, promotionalDiscountQuery, buyOneGetOneDiscountQuery, data, freebieItems, freebieItemsArray_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(param.custaccount)];
                    case 1:
                        customer = _a.sent();
                        // let defaultcustomerid: any = await this.rawQuery.getCustomer(this.sessionInfo.defaultcustomerid);
                        param.custtype = customer.custtype;
                        console.log(param.custtype);
                        promotionalDiscountQuery = "select\n                                                    dataareaid, \n                                                    inventlocationid, \n                                                    itemid,\n                                                    inventsizeid,\n                                                    configid,\n                                                    multiple_qty as \"multipleQty\", \n                                                    free_qty as \"freeQty\", \n                                                    price_disc_item_code as \"priceDiscItemCode\", \n                                                    price_disc_account_relation as \"priceDiscAccountRelation\"\n                                                    from sales_promotion_items where \n                                                    inventlocationid = '" + this.sessionInfo.inventlocationid + "'\n                                                    and (price_disc_account_relation = '" + param.custaccount + "' \n                                                    or price_disc_account_relation='" + param.custtype + "' or price_disc_item_code=2)\n                                                    and itemid = '" + param.itemid + "' and deleted=false";
                        buyOneGetOneDiscountQuery = "select\n                                                    dataareaid, \n                                                    inventlocationid, \n                                                    itemid,\n                                                    inventsizeid,\n                                                    configid,\n                                                    multiple_qty as \"multipleQty\", \n                                                    free_qty as \"freeQty\", \n                                                    price_disc_item_code as \"priceDiscItemCode\", \n                                                    price_disc_account_relation as \"priceDiscAccountRelation\"\n                                                    from sales_promotion_items_equal where \n                                                    inventlocationid = '" + this.sessionInfo.inventlocationid + "'\n                                                    and (price_disc_account_relation = '" + param.custaccount + "' \n                                                    or price_disc_account_relation='" + param.custtype + "' or price_disc_item_code=2)\n                                                    and itemid = '" + param.itemid + "' and deleted=false";
                        return [4 /*yield*/, this.db.query(buyOneGetOneDiscountQuery)];
                    case 2:
                        data = _a.sent();
                        if (!(data.length > 0)) return [3 /*break*/, 4];
                        data = data[0];
                        data.discountType = "BUY_ONE_GET_ONE";
                        return [4 /*yield*/, this.db.query("select itemid from inventtable where itemgroupid in (select itemgroupid from inventtable where itemid='" + param.itemid + "')")];
                    case 3:
                        freebieItems = _a.sent();
                        freebieItemsArray_1 = [];
                        freebieItems.map(function (v) {
                            freebieItemsArray_1.push(v.itemid);
                        });
                        data.freebieItems = freebieItemsArray_1;
                        return [2 /*return*/, data];
                    case 4: return [4 /*yield*/, this.db.query(promotionalDiscountQuery)];
                    case 5:
                        data = _a.sent();
                        if (data.length > 0) {
                            data = data[0];
                            data.discountType = "PROMOTIONAL_DISCOUNT";
                            data.freebieItems = [param.itemid];
                            return [2 /*return*/, data];
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/, {}];
                }
            });
        });
    };
    LoadService.prototype.itemslist = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select id, name_en as \"nameEn\", name_ar as \"nameAr\", code as \"baseCode\" from bases where code ILIKE '%" + param.key + "%' or name_en ILIKE '%" + param.key + "%' or name_ar ILIKE '%" + param.key + "%'  limit 20";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.sizeslist = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select id, name_en as \"nameEn\", name_ar as \"nameAr\", code as \"sizeCode\" from sizes  where code ILIKE '%" + param.key + "%' or name_en ILIKE '%" + param.key + "%' or name_ar ILIKE '%" + param.key + "%' limit 20";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.colorslist = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select id, name_en as \"nameEn\", name_ar as \"nameAr\", code as \"colorCode\", hex as \"hexCode\" from colors where code ILIKE '%" + param.key + "%' or name_en ILIKE '%" + param.key + "%' or name_ar ILIKE '%" + param.key + "%'  limit 20";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.batcheslist = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct inventbatchid as batchno, itemid as itemid, configid as configid from inventbatch where inventbatchid ILIKE '%" + param.batchno + "%' and configid = '" + param.configid + "' and itemid = '" + param.itemid + "' limit 10";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data.push({
                            batchno: "-",
                            itemid: "-",
                            configid: "-",
                        });
                        return [2 /*return*/, data];
                }
            });
        });
    };
    LoadService.prototype.validatebatchno = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct inventbatchid as batchno, itemid as itemid, configid as configid from inventbatch where inventbatchid = '" + param.batchno + "' and configid = '" + param.configid + "' and itemid = '" + param.itemid + "' limit 10";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 || param.batchno == "-" ? true : false];
                }
            });
        });
    };
    LoadService.prototype.checkInstantDiscount = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var customer, defaultcustomerid, data, excludeItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rawQuery.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.rawQuery.getCustomer(param.key)];
                    case 1:
                        customer = _a.sent();
                        console.log(customer.walkincustomer);
                        return [4 /*yield*/, this.rawQuery.getCustomer(this.sessionInfo.defaultcustomerid)];
                    case 2:
                        defaultcustomerid = _a.sent();
                        param.key = customer.walkincustomer ? defaultcustomerid.accountnum : param.key;
                        return [4 /*yield*/, this.rawQuery.checkInstantDiscount(param.key)];
                    case 3:
                        data = _a.sent();
                        return [4 /*yield*/, this.db.query("select istantdiscountexclude from usergroupconfig where id = '" + this.sessionInfo.usergroupconfigid + "'")];
                    case 4:
                        excludeItems = _a.sent();
                        console.log(excludeItems);
                        excludeItems = excludeItems[0].istantdiscountexclude ? excludeItems[0].istantdiscountexclude.split(",") : [];
                        data = data.length > 0 ? { cond: true, amount: parseInt(data[0].minamount) } : { cond: false, amount: 0 };
                        data.excludeItems = excludeItems;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    LoadService.prototype.getHSNData = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var offset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!param.key)
                            return [2 /*return*/, "key is required!"];
                        offset = param.param ? param.param : 0;
                        return [4 /*yield*/, this.db.query("select c.configid from configtable c where c.itemid = 'HSN-00001' \n        and c.configid ilike '%" + param.key + "%' \n        group by configid limit 15 offset " + offset)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.checkIsBase = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!param.key)
                            return [2 /*return*/, "key is required!"];
                        return [4 /*yield*/, this.db.query("select itemid, citbaseproduct from inventtable where itemid = '" + param.key + "'")];
                    case 1:
                        data = _a.sent();
                        if (data.length > 0) {
                            if (data[0].itemid != data[0].citbaseproduct) {
                                return [2 /*return*/, true];
                            }
                            else {
                                return [2 /*return*/, false];
                            }
                        }
                        else {
                            throw { message: "INVALID ID" };
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_13 = _a.sent();
                        return [2 /*return*/, error_13];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.checkForColorantOption = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var data, product, isBase, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.db.query("select nocolorantcheckgroup, blocklistedbasecolor, special_products_for_colorant_option as specialproductsforcolorantoption from usergroupconfig where id = '" + this.sessionInfo.usergroupconfigid + "'")];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data[0] : {};
                        data.nocolorantcheckgroup = data.nocolorantcheckgroup ? data.nocolorantcheckgroup.split(",") : [];
                        data.blocklistedbasecolor = data.blocklistedbasecolor ? data.blocklistedbasecolor.split(",") : [];
                        data.specialproductsforcolorantoption = data.specialproductsforcolorantoption
                            ? data.specialproductsforcolorantoption.split(",")
                            : [];
                        if (!param.key) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.db.query("select * from inventtable where itemid = '" + param.key + "' limit 1")];
                    case 2:
                        product = _a.sent();
                        product = product.length > 0 ? product[0] : {};
                        console.log(product.citbaseproduct, product.itemid);
                        isBase = true;
                        if (product.citbaseproduct == product.itemid) {
                            isBase = false;
                        }
                        console.log(isBase);
                        isBase =
                            data.nocolorantcheckgroup.includes(product.itemgroupid) ||
                                data.blocklistedbasecolor.includes(product.citgroupid)
                                ? false
                                : isBase;
                        console.log(isBase);
                        if (data.specialproductsforcolorantoption.includes(product.itemid)) {
                            isBase = true;
                        }
                        console.log(isBase);
                        data.isBase = isBase;
                        _a.label = 3;
                    case 3: return [2 /*return*/, data];
                    case 4:
                        error_14 = _a.sent();
                        return [2 /*return*/, error_14];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.instantDiscountExcludeItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select istantdiscountexclude from usergroupconfig where id = '" + this.sessionInfo.usergroupconfigid + "'")];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        data = data[0].istantdiscountexclude ? data[0].istantdiscountexclude.split(",") : [];
                        return [2 /*return*/, data];
                }
            });
        });
    };
    LoadService.prototype.checkForOrderReceive = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var shipOrderData, receiveOrderData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select salesid, custaccount, transkind, inventlocationid from salestable where salesid = '" + param.key + "'")];
                    case 1:
                        shipOrderData = _a.sent();
                        shipOrderData = shipOrderData.length > 0 ? shipOrderData[0] : null;
                        console.log(this.sessionInfo.inventlocationid);
                        if (!(shipOrderData.transkind != "TRANSFERORDER" && shipOrderData.transkind != "ORDERRECEIVE")) return [3 /*break*/, 5];
                        if (!(shipOrderData && shipOrderData.custaccount == this.sessionInfo.inventlocationid)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.db.query("select salesid, custaccount,transkind, inventlocationid from salestable where intercompanyoriginalsalesid = '" + param.key + "'")];
                    case 2:
                        receiveOrderData = _a.sent();
                        return [2 /*return*/, receiveOrderData.length > 0 ? false : true];
                    case 3: return [2 /*return*/, false];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.checkfordesignerservicereturn = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var receiveOrderData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select salesid, custaccount,transkind, inventlocationid from salestable where intercompanyoriginalsalesid = '" + param.key + "' and transkind = 'DESIGNERSERVICERETURN'")];
                    case 1:
                        receiveOrderData = _a.sent();
                        return [2 /*return*/, receiveOrderData.length > 0 ? false : true];
                }
            });
        });
    };
    LoadService.prototype.bankaccounts = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(param);
                        query = "select accountid as \"accountId\", ledgeraccount as \"ledgerAccount\", currencycode as \"currenyCode\", name as \"nameAr\", accountnum as \"accountNum\" \n      from bankaccounttable\n      where ( accountid ILIKE '%" + param.key + "%' or  name ILIKE '%" + param.key + "%' )";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadService.prototype.menu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var menuList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuGroupRepository.search({
                            group: { groupid: this.sessionInfo.groupid },
                            active: true,
                            isMobile: true,
                        })];
                    case 1:
                        menuList = _a.sent();
                        return [4 /*yield*/, this.unflatten(menuList)];
                    case 2:
                        menuList = _a.sent();
                        return [2 /*return*/, menuList];
                }
            });
        });
    };
    LoadService.prototype.unflatten = function (arr) {
        var newData = [];
        var _loop_1 = function (item) {
            if (!item.menu.parentId) {
                var children = arr.filter(function (v) { return v.menu.parentId == item.menu.id; });
                item.children = children;
                newData.push(item);
            }
        };
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            _loop_1(item);
        }
        return newData;
    };
    LoadService.prototype.isexportexcel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select is_export_excel as \"isExportExcel\" from usergroupconfig where id = '" + this.sessionInfo.usergroupconfigid + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data[0] : {};
                        return [2 /*return*/, data.isExportExcel ? true : false];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoadService.prototype.banklist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = [
                    {
                        name: "bank1",
                    },
                    {
                        name: "bank2",
                    },
                    {
                        name: "bank3",
                    },
                    {
                        name: "bank4",
                    },
                ];
                return [2 /*return*/, data];
            });
        });
    };
    LoadService.prototype.gettax = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select CAST(td.taxvalue AS INTEGER) as tax from custtable c\n    left join taxgroupdata tg on tg.taxgroup = c.taxgroup\n    left join taxdata td on td.taxcode = tg.taxcode where c.accountnum = '" + this.sessionInfo.defaultcustomerid + "' ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0].tax : 15];
                }
            });
        });
    };
    LoadService.prototype.validategiftvoucher = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, voucherData, voucheritems, data_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select * from discountvoucher where voucher_num = '" + param.key + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        voucherData = _a.sent();
                        if (!(voucherData.length > 0)) return [3 /*break*/, 7];
                        voucherData = voucherData[0];
                        if (!(voucherData.is_enabled == 1)) return [3 /*break*/, 2];
                        throw { message: "INVALID_VOUCHER", status: 0 };
                    case 2:
                        if (!(voucherData.allowed_numbers <= voucherData.used_numbers)) return [3 /*break*/, 3];
                        throw { message: "ALREADY_USED", status: 0 };
                    case 3:
                        if (!(new Date(voucherData.expiry_date) < new Date(App_1.App.DateNow()))) return [3 /*break*/, 4];
                        throw { message: "VOUCHER_EXPIRED", status: 0 };
                    case 4:
                        query = "select * from voucherdiscountitems where voucher_type = '" + voucherData.voucher_type + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 5:
                        voucheritems = _a.sent();
                        data_1 = {};
                        data_1.freebieItems = [];
                        voucheritems.map(function (v) {
                            data_1.freebieItems.push(v.itemid);
                        });
                        return [2 /*return*/, data_1];
                    case 6: return [3 /*break*/, 8];
                    case 7: throw { message: "INVALID_VOUCHER", status: 0 };
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return LoadService;
}());
exports.LoadService = LoadService;
