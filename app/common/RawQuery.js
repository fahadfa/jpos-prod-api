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
var moment = require("moment");
var RawQuery = /** @class */ (function () {
    function RawQuery() {
        this.db = typeorm_1.getManager();
    }
    RawQuery.ConstData = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getManager().query("select data from app_const_data where code='" + code + "' ")];
                    case 1:
                        data = _a.sent();
                        if (data && data[0] && data[0].data) {
                            return [2 /*return*/, data[0].data];
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.getCustomerOverDue = function (accountNum) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT overdue.invoiceamount FROM \"overdue\" WHERE overdue.accountnum = '" + accountNum + "' AND overdue.payment = 0";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getPaymTermDays = function (paymTermId) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT paymterm.numofdays FROM \"paymterm\" WHERE paymterm.paymtermid like '%" + paymTermId + "%'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getCustomer = function (accountNum1, accountnum2, accountnum3) {
        if (accountnum2 === void 0) { accountnum2 = null; }
        if (accountnum3 === void 0) { accountnum3 = null; }
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        c.accountnum, \n        c.name, \n        c.namealias, \n        c.address, \n        c.phone, \n        c.rcusttype, \n        c.pricegroup,\n        c.inventlocation,\n        c.dataareaid,\n        c.walkincustomer,\n        c.custgroup,\n        c.districtcode,\n        c.citycode,\n        c.cashdisc,\n        c.paymtermid,\n        c.salesgroup,\n        c.creditmax,\n        c.currency,\n        c.vendaccount,\n        c.multilinedisc,\n        c.vatnum,\n        c.countryregionid,\n        c.inventlocation,\n        c.email,\n        c.url,\n        c.blocked,\n        c.taxgroup,\n        c.paymmode,\n        c.bankaccount,\n        c.namealias,\n        c.invoiceaddress,\n        c.incltax,\n        c.numbersequencegroup,\n        c.city,\n        c.custclassificationid,\n        c.identificationnumber,\n        c.modifieddatetime,\n        c.createddatetime,\n        c.dimension6_ as salesmanid,\n        c.dataareaid,\n        c.recversion,\n        c.recid,\n        c.custtype,\n        c.walkincustomer,\n        c.lastmodifiedby,\n        c.lastmodifieddate,\n        c.createdby,\n        c.zipcode,\n         (CASE \n              WHEN c.dimension6_!='' THEN concat(d.num,' - ', d.description)\n              ELSE '" + (this.sessionInfo && this.sessionInfo.salesmanid.length > 0
                            ? this.sessionInfo.salesmanid[0].salesman
                            : null) + "'\n          END\n           ) as salesman,\n           (CASE \n            WHEN c.dimension6_!='' THEN concat(d.num)\n            ELSE '" + (this.sessionInfo && this.sessionInfo.salesmanid.length > 0
                            ? this.sessionInfo.salesmanid[0].salesmanid
                            : null) + "'\n        END\n         ) as salesmanid\n       from custtable c\n       left join dimensions d on c.dimension6_ = d.num\n       where accountnum in ('" + accountNum1 + "' ";
                        if (accountnum2) {
                            query += ", '" + accountnum2 + "'";
                        }
                        if (accountnum3) {
                            query += ", '" + accountnum3 + "'";
                        }
                        query += ") ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        if (accountnum2) {
                            return [2 /*return*/, data];
                        }
                        else {
                            return [2 /*return*/, data.length > 0 ? data[0] : {}];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.getCustomerTaxGroup = function (accountNum) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        accountnum, \n        taxgroup\n       from custtable where accountnum='" + accountNum + "' LIMIT 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.customers_count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n            count(*)\n           from custtable where deleted = false";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.getNumberSequence = function (transkind, inventlocationid) {
        if (inventlocationid === void 0) { inventlocationid = null; }
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        numbersequence,\n        LPAD(nextrec::text, 5, '0') as nextrec, \n        format, lastmodifieddate    \n        from numbersequencetable where transkind='" + transkind + "' and  inventlocationid = '" + inventlocationid + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        // console.log(data);
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.updateNumberSequence = function (numberSequence, value) {
        return __awaiter(this, void 0, void 0, function () {
            var date, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date().toISOString();
                        query = "UPDATE numbersequencetable\n        SET nextrec = " + (parseInt(value) + 1) + ",\n        lastmodifieddate = '" + date + "' ";
                        query += " WHERE numbersequence = '" + numberSequence + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        console.log("number sequence updated");
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.updateSalesTable = function (salesId, status, date, apptype) {
        if (date === void 0) { date = null; }
        if (apptype === void 0) { apptype = null; }
        return __awaiter(this, void 0, void 0, function () {
            var query, saleslineQuery, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "UPDATE salestable\n        SET originalprinted = true,\n        status = '" + status + "' ";
                        if (date) {
                            query += "\n      , lastmodifieddate = '" + date + "' ";
                        }
                        query += apptype ? ", apptype = " + apptype + " " : " ";
                        query += " WHERE salesid = '" + salesId + "' or salesgroup = '" + salesId + "' or deliverystreet = '" + salesId + "' ";
                        saleslineQuery = "UPDATE salesline SET status = '" + status + "'  ";
                        if (date) {
                            saleslineQuery += "\n      ,lastmodifieddate = '" + date + "' ";
                        }
                        saleslineQuery += " WHERE salesid = '" + salesId + "' ";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.db.query(saleslineQuery)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.updateDocumentStatus = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "UPDATE salestable\n        SET documentstatus = '" + true + "'\n        WHERE salesid = '" + salesId + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getInventTrans = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, warehouse, wareHouseNamear_1, wareHouseNameEn_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        query = "\n            select a.itemid, a.nameen, a.namear, a.configid, a.inventsizeid, a.batchno, a.batchexpdate,  \n            a.sizeNameEn as \"sizeNameEn\", a.sizeNameAr as \"sizeNameAr\", \n            a.availabilty as \"availabilty\",\n            coalesce(a.reservedquantity, 0) as \"reservedQuantity\", \n            (coalesce(a.reservedquantity, 0)+ a.availabilty) as \"totalAvailable\"\n            from(\n            select\n            i.itemid as itemid,\n            bs.name_en as nameEn,\n            bs.name_ar as nameAr,\n            cast(SUM(i.qty) as decimal(10,2)) as availabilty,\n            i.configid as configid,\n            i.inventsizeid as inventsizeid,\n            i.batchno as batchno,\n            to_char(b.expdate, 'yyyy-MM-dd') as batchexpdate,\n            sz.name_en as sizeNameEn,\n            sz.name_ar as sizeNameAr,\n            abs(sum(case\n              when reserve_status ='RESERVED' then qty\n              else 0\n              end\n              )) as reservedquantity\n            from inventtrans as i\n            left join inventbatch b on i.batchno = b.inventbatchid\n            left join bases bs on i.itemid = bs.code\n            left join sizes sz on sz.code = i.inventsizeid\n            left join salestable st on st.salesid = i.transrefid\n            where i.inventlocationid='" + reqData.inventlocationid + "' and transactionclosed = true";
                        if (reqData.itemId) {
                            query = query + (" and i.itemid = '" + reqData.itemId + "'");
                            if (reqData.configid) {
                                query = query + (" and i.configid='" + reqData.configid + "'");
                            }
                            if (reqData.inventsizeid) {
                                query = query + (" and i.inventsizeid='" + reqData.inventsizeid + "'");
                            }
                            if (reqData.salesid) {
                                query = query + (" and i.invoiceid='" + reqData.salesid + "'");
                            }
                            if (reqData.returnorderid) {
                                query = query + (" and i.transrefid='" + reqData.returnorderid + "'");
                            }
                        }
                        query =
                            query +
                                " GROUP BY\n                i.itemid, i.configid, i.inventsizeid, i.batchno, b.expdate, bs.name_en, bs.name_ar, sz.name_en, sz.name_ar) as a";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.getWareHouseDetails(reqData.inventlocationid)];
                    case 2:
                        warehouse = _a.sent();
                        wareHouseNamear_1 = warehouse && warehouse.length > 0 ? warehouse[0].name : "";
                        wareHouseNameEn_1 = warehouse && warehouse.length > 0 ? warehouse[0].namealias : "";
                        data.forEach(function (z) {
                            z.nameEn = wareHouseNameEn_1;
                            z.nameAr = wareHouseNamear_1;
                        });
                        console.log(reqData);
                        return [2 /*return*/, data];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.checkInventoryForColors = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var basequery, baseCode, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        basequery = "select b.code as code from bases b where b.id = '" + reqData.baseId + "'";
                        return [4 /*yield*/, this.db.query(basequery)];
                    case 1:
                        baseCode = _a.sent();
                        query = "select distinct bsc.color_id as id, c.code, b.code from base_size_colors bsc \n        inner join colors c on c.id = bsc.color_id \n        inner join base_sizes bs on bs.id = bsc.base_size_id\n        inner join bases b on b.id = bs.base_id\n        where b.id = '" + reqData.baseId + "' and c.code in \n        (select distinct i.configid from inventory_onhand i \n            where i.inventlocationid='" + reqData.inventlocationid + "' and i.itemid = '" + baseCode[0].code + "'\n            group by i.configid having sum(i.qty_in-i.qty_out) > 0)";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.inventoryOnHand = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    select distinct on (itemid, configid, inventsizeid , batchno)\n        UPPER(i.itemid) as itemid,\n        bs.namealias as nameen,\n        bs.itemname as namear,\n        UPPER(i.configid) as configid,\n        UPPER(i.inventsizeid) as inventsizeid,\n        UPPER(i.batchno) as \"batchNo\",\n        UPPER(i.batchno) as batchno,\n        to_char((CASE \n          WHEN UPPER(i.batchno) = '-' THEN now()\n          WHEN UPPER(i.batchno) = '--' THEN now()\n          ELSE b.expdate\n          END\n        ),'yyyy-MM-dd') as batchexpdate,\n        sz.description as \"sizeNameEn\",\n        sz.\"name\" as \"sizeNameAr\",\n        sum(qty) as availabilty,\n        sum(qty) as \"physicalAvailable\",\n        (sum(qty)+(sum(case\n          when reserve_status ='RESERVED' then qty\n          else 0\n          end\n          ))) as \"totalAvailable\",\n        abs(sum(case\n          when reserve_status ='RESERVED' then qty\n          else 0\n          end\n          )) as reservedquantity,\n        abs(sum(case\n          when reserve_status ='RESERVED' then qty\n          else 0\n          end\n          )) as \"reservedQuantity\"\n        from inventtrans i\n        left join inventbatch b on i.batchno = b.inventbatchid and i.itemid = b.itemid and lower(i.configid) = lower(b.configid) \n        inner join inventtable bs on i.itemid = bs.itemid\n        left join inventsize sz on lower(sz.inventsizeid) = lower(i.inventsizeid) and sz.itemid = i.itemid\n        where transactionclosed  = true and inventlocationid = '" + reqData.inventlocationid + "' and i.itemid not like 'HSN-%'\n        ";
                        if (reqData.itemId) {
                            query = query + (" and LOWER(i.itemid) = LOWER('" + reqData.itemId + "')");
                            if (reqData.configid) {
                                query = query + (" and LOWER(i.configid)=LOWER('" + reqData.configid + "')");
                            }
                            if (reqData.inventsizeid) {
                                query = query + (" and LOWER(i.inventsizeid)=LOWER('" + reqData.inventsizeid + "')");
                            }
                            if (reqData.salesId) {
                                query = query + (" and LOWER(i.invoiceid)!=LOWER('" + reqData.salesId + "')");
                            }
                        }
                        query += " group by UPPER(i.itemid), UPPER(i.configid), UPPER(i.inventsizeid), UPPER(i.batchno),  i.inventlocationid,\n  bs.namealias, bs.itemname, b.expdate, sz.description, sz.\"name\" having (sum(qty)+(sum(case\n    when reserve_status ='RESERVED' then qty\n    else 0\n    end\n    ))) >0\n    ";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        result = _a.sent();
                        // result.map((v:any)=>{
                        //   v.totalAvailable = parseInt(v.availabilty) + parseInt(v.reservedquantity)
                        //   v.physicalAvailable = parseInt(v.availabilty)
                        //   v.reservedQuantity = parseInt(v.reservedquantity)
                        // })
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RawQuery.prototype.sales_inventoryOnHand = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n        select distinct on (itemid, configid, inventsizeid , batchno)\n        UPPER(i.itemid) as itemid,\n        bs.namealias as nameen,\n        bs.itemname as namear,\n        UPPER(i.configid) as configid,\n        UPPER(i.inventsizeid) as inventsizeid,\n        UPPER(i.batchno) as \"batchNo\",\n        UPPER(i.batchno) as batchno,\n        to_char((CASE \n          WHEN UPPER(i.batchno) = '-' THEN now()\n          WHEN UPPER(i.batchno) = '--' THEN now()\n          ELSE b.expdate\n          END\n        ),'yyyy-MM-dd') as batchexpdate,\n        UPPER(i.inventsizeid) as \"sizeNameEn\",\n        UPPER(i.inventsizeid) as \"sizeNameAr\",\n        i.inventlocationid,\n        sum(qty) as availabilty,\n        sum(qty) as \"physicalAvailable\",\n        abs(sum(case\n          when reserve_status ='RESERVED' then qty\n          else 0\n          end\n          )) as \"reservedQuantity\"\n        from inventtrans i\n        left join inventbatch b on i.batchno = b.inventbatchid and i.itemid = b.itemid and lower(i.configid) = lower(b.configid) \n        inner join inventtable bs on i.itemid = bs.itemid\n        where i.transactionclosed  = true and i.inventlocationid = '" + reqData.inventlocationid + "' and i.itemid not like 'HSN-%'\n        ";
                        if (reqData.itemId) {
                            query = query + (" and UPPER(i.itemid) = UPPER('" + reqData.itemId + "')");
                            if (reqData.configid) {
                                query = query + (" and UPPER(i.configid)=UPPER('" + reqData.configid + "')");
                            }
                            if (reqData.inventsizeid) {
                                query = query + (" and UPPER(i.inventsizeid)=UPPER('" + reqData.inventsizeid + "')");
                            }
                            if (reqData.salesId) {
                                query = query + (" and UPPER(i.invoiceid)!=UPPER('" + reqData.salesId + "')");
                            }
                        }
                        query += " group by UPPER(i.itemid), UPPER(i.configid), UPPER(i.inventsizeid), UPPER(i.batchno),  i.inventlocationid,\n  bs.namealias, bs.itemname, b.expdate  having sum(qty) > 0\n    ";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        result = _a.sent();
                        result.map(function (v) {
                            v.totalAvailable = parseInt(v.availabilty) + parseInt(v.reservedQuantity);
                        });
                        return [2 /*return*/, result.filter(function (v) { return v.totalAvailable > 0; })];
                }
            });
        });
    };
    RawQuery.prototype.inventoryOnHandForColorant = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                result = [
                    {
                        itemid: reqData.itemId,
                        configid: reqData.configid,
                        inventsizeid: reqData.inventsizeid,
                        batchNo: "-",
                        batchno: "-",
                        availabilty: 999999,
                        reservedQuantity: 0,
                        totalAvailable: 999999,
                        batchexpdate: "-",
                    },
                ];
                return [2 /*return*/, result];
            });
        });
    };
    RawQuery.prototype.getWareHouseDetails = function (wareHouseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.db.query("select name, namealias from inventlocation where inventlocationid = '" + wareHouseId + "'")];
            });
        });
    };
    RawQuery.prototype.getSelectedBatches = function (reqData, transactionclosed) {
        if (transactionclosed === void 0) { transactionclosed = false; }
        return __awaiter(this, void 0, void 0, function () {
            var salesData, query, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        console.log(reqData);
                        return [4 /*yield*/, this.db.query("select status, transkind, inventlocationid from salestable where salesid='" + reqData.salesid + "'")];
                    case 1:
                        salesData = _a.sent();
                        salesData = salesData.length > 0 ? salesData[0] : {};
                        if ((salesData.status == "APPROVEDBYRM" ||
                            salesData.status == "REJECTEDBYRA" ||
                            salesData.status == "REJECTEDBYRM" ||
                            salesData.status == "APPROVEDBYRA" ||
                            salesData.status == "PENDINGRMAPPROVAL" ||
                            salesData.status == "PENDINGDSNRAPPROVAL") &&
                            salesData.transkind == "SALESORDER") {
                            transactionclosed = false;
                            reqData.inventlocationid = salesData.inventlocationid;
                        }
                        else if (salesData.transkind == "PURCHASEORDER") {
                            transactionclosed = true;
                        }
                        query = void 0;
                        // ;
                        // ;
                        if (salesData.transkind == "DESIGNERSERVICERETURN") {
                            query = "\n                select \n                sl.itemid as itemid,\n                sl.salesid as invoiceid,\n                CAST(sl.salesqty as  INTEGER) as qty,\n                sl.configid as configid,\n                sl.inventsizeid as inventsizeid,\n                dp.name_en as nameEn,\n                dp.name_ar as nameAr\n                from salesline sl \n                left join designer_products dp on dp.code = sl.itemid\n                where salesid= '" + reqData.salesid + "'\n                ";
                        }
                        else {
                            query = "\n                select\n                distinct on (i.id, sl.link_id)\n                i.itemid as itemid,\n                bs.namealias as nameEn,\n                bs.itemname as nameAr,\n                CAST(i.qty AS INTEGER) as qty,\n                i.configid as configid,\n                i.inventsizeid as inventsizeid,\n                i.invoiceid as invoiceid,\n                i.transrefid as transrefid,\n                s.\"name\" as sizenameen,\n                st.invoicedate as \"invoiceDate\",\n                s.description as sizenamear,\n                i.batchno as batchno,\n                i.batchno as \"batchNo\",\n                to_char((CASE \n                  WHEN i.batchno = '-' THEN now()\n                  WHEN i.batchno = '--' THEN now()\n                  ELSE b.expdate\n                  END\n                ),'yyyy-MM-dd') as batchExpDate,\n                i.sales_line_id as \"salesLineId\",\n                sl.is_item_free  as \"isItemFree\",\n                sl.link_id as \"linkId\",\n                sl.colorantid as \"colorantId\",\n                c.hexcode as hexcode\n            from inventtrans  i\n            inner join salestable st on st.salesid = i.invoiceid\n            left join salesline sl on sl.id = i.sales_line_id \n            left join inventbatch b on i.batchno = b.inventbatchid and b.itemid = i.itemid and b.configid = i.configid\n            left join inventtable bs on i.itemid = bs.itemid\n            left join inventsize s on s.inventsizeid = i.inventsizeid and s.itemid = i.itemid\n            left join configtable c on c.configid = i.configid and c.itemid = i.itemid\n             ";
                            if (reqData.salesid) {
                                if (reqData.type == "RETURNORDER" ||
                                    reqData.type == "INVENTORYMOVEMENT" ||
                                    reqData.type == "PURCHASERETURN") {
                                    query += "where i.invoiceid = '" + reqData.salesid + "'";
                                    // if (reqData.type == "PURCHASERETURN"){
                                    //     query+= ` and i.inventlocationid = '${reqData.inventlocationid}' `
                                    // }
                                }
                                else if (reqData.type == "PURCHASEORDER") {
                                    query += "where (i.invoiceid = '" + reqData.salesid + "' or i.transrefid = '" + reqData.salesid + "') and transactionclosed=" + transactionclosed + " ";
                                }
                                else if (reqData.type == "SALESORDER") {
                                    query += "where  i.transrefid = '" + reqData.salesid + "'  and reserve_status != 'REJECTED'";
                                }
                                else {
                                    query += "where  i.transrefid = '" + reqData.salesid + "' and transactionclosed=" + transactionclosed + " ";
                                }
                                query += " order by sl.link_id ";
                                // query +=
                                //     reqData.type == "RETURNORDER" || reqData.type == "INVENTORYMOVEMENT" || reqData.type == "PURCHASEORDER"
                                //         ? ` and i.invoiceid = '${reqData.salesid}'`
                                //         : ` and i.transrefid = '${reqData.salesid}' and transactionclosed=true`;
                            }
                            else {
                                throw "Sales Order Id Required";
                            }
                        }
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        // console.log(reqData);
                        return [2 /*return*/, data];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.getReturnLines = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    select transrefid, itemid, sum(qty) as quantity, configid as \"configId\", inventsizeid, batchno from inventtrans \n    where transrefid = '" + data + "' and reserve_status !='REJECTED'\n    group by itemid, configid, inventsizeid, batchno, transrefid\n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.updateInventTrans = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "insert into inventtrans(itemid, qty, transrefid, invoiceid, configid, inventsizeid, batchno,  inventlocationid, reserve_status) \n        values ('" + data.itemid + "', '" + data.qty + "', '" + data.transrefid + "', '" + data.invoiceid + "', '" + data.configid + "', '" + data.inventsizeid + "', '" + data.batchno + "', '" + data.inventlocationid + "', '" + data.reserveStatus + "')";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getProductIds = function (dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct b.id as id from base_size_colors bsc  left join base_sizes bs on ( bsc.base_size_id = bs.id)\n        left join bases b on (b.id = bs.base_id)";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        data.forEach(function (element) {
                            new_data.push(element.id);
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getStockInHandArray = function (inventlocationid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT distinct\n                            id\n                        FROM\n                            bases\n                        WHERE\n                            code IN (\n                                select \n                                i.itemid as itemid\n                            from inventory_onhand  i \n                            inner join colors c on i.configid = c.code\n                            inner join bases b on i.itemid = b.code\n                            inner join base_sizes bs on b.id = bs.base_id\n                            inner join sizes s on s.id = bs.size_id\n                            inner join base_size_colors bsc on (bsc.color_id = c.id and bsc.base_size_id=bs.id)\n                            where i.inventlocationid='" + inventlocationid + "' GROUP BY\n                            i.itemid\n                            having SUM(i.qty_in-i.qty_out-i.qty_reserved)>0\n                        );";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        data.forEach(function (element) {
                            new_data.push(element.id);
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getIitemIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct i.itemid from inventtable i\n               inner join configtable c on c.itemid = i.itemid\n               inner join inventsize sz on sz.itemid = i.itemid";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.itemid;
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getItemsInStock = function (inventlocationid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n              select distinct i.itemid from inventtable i\n               inner join configtable c on c.itemid = i.itemid\n               inner join inventsize sz on sz.itemid = i.itemid\n               inner join inventtrans ioh on ioh.itemid = i.itemid\n               where ioh.inventlocationid='" + inventlocationid + "'  and transactionclosed = true GROUP BY\n               i.itemid\n               having SUM(qty)>0 ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.itemid;
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getColorCodes = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct c.configid from configtable c\n               inner join inventtable i on i.itemid = c.itemid where c.itemid = '" + param.itemid + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.configid;
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getColorCodesInStock = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select configid from \n                  (select c.configid from configtable c\n                  inner join inventtrans ioh on ioh.itemid = c.itemid and lower(c.configid) = lower(ioh.configid)\n                  where ioh.inventlocationid='" + param.inventlocationid + "' and ioh.itemid = '" + param.itemid + "' and transactionclosed = true  GROUP BY\n                  c.configid \n                  having SUM(ioh.qty)>0)  as i \n               ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.configid;
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getColorantCodesInStock = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n                  select c.configid from configtable c\n                  where  c.itemid = '" + param.itemid + "'\n               ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.configid;
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getSizeCodes = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select distinct lower(sz.inventsizeid) as inventsizeid from inventsize sz\n               inner join inventtable i on i.itemid = sz.itemid\n               inner join configtable c on c.itemid = sz.itemid\n                where sz.itemid = '" + param.itemid + "' and c.configid = '" + param.configid + "' ";
                        if (param.itemid == "HSN-00001") {
                            query += " and sz.inventsizeid = 'GROUP' ";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.inventsizeid;
                        });
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getSizeCodesInStock = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, new_data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = " select distinct lower(io.inventsizeid) as inventsizeid from inventtrans io\n                  where io.inventlocationid='" + param.inventlocationid + "' and io.itemid = '" + param.itemid + "' and lower(io.configid) = lower('" + param.configid + "')\n                  and transactionclosed = true ";
                        if (param.salesId) {
                            query += " and io.invoiceid !=  '" + param.salesId + "' ";
                        }
                        query += " group by  io.inventsizeid having SUM(qty)>0  ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        new_data = [];
                        new_data = data.map(function (element) {
                            return element.inventsizeid;
                        });
                        console.log(new_data);
                        return [2 /*return*/, new_data];
                }
            });
        });
    };
    RawQuery.prototype.getHighPrice = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n        select  amount \n        from pricdisctableextra where \n        itemid ='" + data.itemid + "' and \n        inventsizeid='" + data.inventsizeid + "' \n        and configid='" + data.configid + "' and \n        itemrelation ='" + data.pricegroup + "' limit 1\n        ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getCustomerSpecificPrice = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n        select amount as price, tinventsizeid as inventsizeid, configid, itemrelation as itemid\n        from pricedisctable \n        where (itemcode = 0) and (accountcode = 1 or accountcode = 0) \n        and currency = '" + data.currency + "' and \n        itemrelation = '" + data.itemid + "' and (configid='" + data.configid + "')  and \n        accountrelation = '" + data.custaccount + "' and tinventsizeid = '" + data.inventsizeid + "'\n        ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.sizePrices = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select amount as price, tinventsizeid as inventsizeid, configid, itemrelation as itemid\n            from pricedisctable \n            where (itemcode = 0) and (accountcode = 1 or accountcode = 0) \n            and currency = '" + data.currency + "' and \n            itemrelation = '" + data.itemid + "' and (configid='" + data.configid + "') and \n            accountrelation = '" + data.pricegroup + "' and tinventsizeid = '" + data.inventsizeid + "'\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.allSizePrices = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select amount as price, tinventsizeid as inventsizeid, configid, itemrelation as itemid, accountrelation as accountrelation\n            from pricedisctable \n            where relation = 4 and (itemcode = 0) and accountcode in (1,0) \n            and currency = '" + data.currency + "' and \n            lower(itemrelation) = lower('" + data.itemid + "') and (lower(configid)=lower('" + data.configid + "')) and \n            lower(accountrelation) IN (lower('" + data.pricegroup + "'), lower('" + data.custaccount + "') \n            ) and lower(tinventsizeid) in (" + data.inventsizeids + ")\n            ";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getNormalPrice = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n        select  amount \n        from pricedisctable \n        where (itemcode = 0) and (accountcode = 1 or accountcode = 0) \n        and currency = '" + data.currency + "' and itemrelation = '" + data.itemid + "' and (configid='" + data.configid + "')\n        and tinventsizeid = '" + data.inventsizeid + "' and \n        (accountrelation = '" + data.pricegroup + "' or  accountrelation = '" + data.custaccount + "') limit 1\n        ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.checkInstantDiscount = function (custaccount) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        * from custtotaldiscount where dataareaid ='ajp' and custaccount = '" + custaccount + "' order by minamount";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.instantDiscountExcludeItems = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select istantdiscountexclude from usergroupconfig where id = '" + id + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getDiscounts = function (accountnum, orderType) {
        if (orderType === void 0) { orderType = null; }
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (orderType && orderType == "purchase") {
                            query = "select \n        accountnum, name, vendgroup as custgroup, \n        pricegroup, enddisc, linedisc, multilinedisc from vendortable where accountnum='" + accountnum + "' limit 1";
                        }
                        else {
                            query = "select \n            accountnum, name, custgroup, \n            pricegroup, enddisc, linedisc, multilinedisc from custtable where accountnum='" + accountnum + "' limit 1";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getTotalDiscPercentage = function (accountrelation, currency, dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select percent1 from pricedisctable where module=1 and \n        itemcode=2 and accountcode = 1 and dataareaid='" + dataareaid + "' and \n        accountrelation='" + accountrelation + "' ";
                        currency = currency ? currency : "SAR";
                        query += " and currency = '" + currency + "' ";
                        query += " limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data[0].percent1 : 0;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getLineDiscPercentage = function (accountrelation, currency, dataareaid, custaccount) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select itemcode, accountcode, itemrelation, percent1 from pricedisctable where module=1 and \n        itemcode in (0,1) and accountcode in(0,1,2)  and dataareaid='" + dataareaid + "' and \n        (accountrelation='" + accountrelation + "' or accountrelation='" + custaccount + "' )";
                        currency = currency ? currency : "SAR";
                        query += " and currency = '" + currency + "' ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.checkItemIncludeForDiscount = function (disctype, itemid, dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, dummyData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select " + disctype + " \n        from inventtablemodule where dataareaid='" + dataareaid + "' and moduletype=2 and itemid='" + itemid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        dummyData = {};
                        dummyData.disctype = 0;
                        data = data.length > 0 ? data[0] : dummyData;
                        console.log(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getMultiDiscRanges = function (accountrelation, currency, dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT itemrelation, ACCOUNTRELATION, quantityamountfrom, quantityamountto,\n       CURRENCY,PERCENT1 FROM \n       PRICEDISCTABLE WHERE MODULE = 1 AND \n       ITEMCODE = 1 AND ACCOUNTCODE = 1 AND relation = 6 and \n       ACCOUNTRELATION = '" + accountrelation + "' AND DATAAREAID = '" + dataareaid + "' AND CURRENCY='" + currency + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    // async getVoucherDiscounts(code: string, dataareaid: string) {
    //   let query = `
    //       select
    //       id as id,
    //       code as code,
    //       name as name,
    //       is_multiple as ismultiple,
    //       voucher_type as vouchertype,
    //       relation_type as relationtype,
    //       relation as relation,
    //       percentage as percentage,
    //       discount_amount as discountamount,
    //       amount_used_till_date as amountused,
    //       min_amount as minamount,
    //       max_amount as maxamount,
    //       min_quantity as minquantity,
    //       max_quantity as maxquantity,
    //       start_date as startdate,
    //       end_date enddate,
    //       quota as quota,
    //       max_quota as maxquota,
    //       currency_type as currency,
    //       Communication_channel as communicationchannel
    //       from voucher where code = '${code}' and dataareaid ='${dataareaid}' limit 1
    //       `;
    //   let data: any = await this.db.query(query);
    //   return data.length > 0 ? data[0] : null;
    // }
    RawQuery.prototype.getVoucherDiscounts = function (code, dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT \n                  id, \n                  dataareaid, \n                  salesid, \n                  custaccount, \n                  is_used, \n                  is_enabled,\n                  voucher_num, \n                  voucher_type, \n                  discount_percent, \n                  allowed_numbers, \n                  used_numbers, \n                  expiry_date,\n                  voucher_rules as \"voucherRules\"\n                  FROM public.discountvoucher\n                  WHERE voucher_num='" + code + "' and dataareaid = '" + dataareaid + "' limit 1;\n                 ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.getVoucherDiscountItems = function (voucherType, itemidArray) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT \n                id, \n                dataareaid, \n                recversion, \n                recid, \n                itemid, \n                from_date, \n                to_date, \n                discount_percent,\n                voucher_type\n                FROM voucherdiscountitems\n                WHERE voucher_type='" + voucherType + "' and itemid in(" + itemidArray + ");\n                ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.updateVoucherDiscounts = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                query = "\n                UPDATE discountvoucher\n                SET  salesid='" + data.salesId + "', \n                custaccount='" + data.custAccount + "', \n                is_used=0, \n                used_numbers=used_numbers+1\n                WHERE voucher_num='" + data.voucherNum + "';\n                ";
                this.db.query(query);
                return [2 /*return*/];
            });
        });
    };
    RawQuery.prototype.getVoucherDetails = function (voucher) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n                select * from discountvoucher\n                WHERE voucher_num='" + voucher.voucherNum + "';\n                ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.groupProducIds = function (groupid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select itemid from inventtable where itemgroupid='" + groupid + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data : [];
                        data = data.map(function (item) { return item.itemid; });
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getSalesOrderRelatedReturnOrderIds = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select salesid from salestable where intercompanyoriginalsalesid='" + salesId + "' and status = 'POSTED'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        data = data.length > 0 ? data : [];
                        data = data.map(function (item) { return item.salesid; });
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.warehouse = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid = '" + id + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.workflowstatus = function (salesid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n            statusid as status, selected_lines as \"salesTable\" from workflow\n            where orderid= '" + salesid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.workflowconditions = function (usergroupconfigid, inventlocationid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n            returnorderapprovalrequired  as \"approvalRequired\", \n            returnorderrmapprovalrequired as \"rmApprovalRequired\",\n            returnorderraapprovalrequired \"raApprovalRequired\", \n            projectcustomer, return_order_days as \"returnOrderDays\",\n            agentcustomer from  usergroupconfig\n            where usergroupid= '" + usergroupconfigid + "' and inventlocationid='" + inventlocationid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.getRmAndRa = function (usergroupid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select rmsigningauthority as rm, rasigningauthority as ra, designer_signing_authority as designer_signing_authority, sales_coordinator_signing_authority as salescoordinator\n        from usergroupconfig where usergroupid = '" + usergroupid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.getbatchavailability = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select\n        sum(i.qty) as availabilty\n        from inventtrans  i\n        where i.inventlocationid='" + data.inventlocationid + "'\n        and i.itemid = '" + data.itemid + "' and UPPER(i.configid)=UPPER('" + data.configid + "') and \n        UPPER(i.inventsizeid)=UPPER('" + data.inventsizeid + "') and i.batchno = '" + data.batchno + "' and transactionclosed = true \n        ";
                        if (data.invoiceid) {
                            query += " and i.invoiceid != '" + data.invoiceid + "' ";
                        }
                        query += " GROUP BY i.itemid,  UPPER(i.configid), UPPER(i.inventsizeid), i.batchno ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, result.length > 0 ? (result[0].availabilty < 0 ? 0 : result[0].availabilty) : 0];
                }
            });
        });
    };
    RawQuery.prototype.get_vedor_related_custaccount = function (accountnum) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select custaccount from vendortable where accountnum = '" + accountnum + "'\n        ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, result.length > 0 ? result[0].custaccount : null];
                }
            });
        });
    };
    RawQuery.prototype.getDesignerServiceList = function (customerid, mobileno) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n                select distinct d.invoiceid, d.customerid, \n                cast(coalesce(d.balanceamount, 0) as Decimal(10,2)) as \"balanceAmount\", \n                cast((coalesce(d.designerserviceamount, 0) - coalesce(d.balanceamount, 0)) as Decimal(10,2)) as \"usedAmount\", \n                cast(coalesce(d.designerserviceamount, 0) as Decimal(10,2)) as \"designerserviceAmount\",\n                lastmodifieddate\n                from \n                (\n                select \n                a.invoiceid, \n                a.customerid,\n                a.custphone,\n                s.lastmodifieddate,\n                (select ABS(sum(b.amount)) from designerservice b where b.invoiceid=a.invoiceid and b.customerid = a.customerid and b.custphone= a.custphone group by b.invoiceid, b.customerid, b.custphone ) \n                as balanceamount,\n                (select ABS(sum(e.amount)) from designerservice e where e.amount > 0 and e.recordtype = 1 and e.invoiceid=a.invoiceid and e.customerid = a.customerid and e.custphone = a.custphone group by e.invoiceid, e.customerid, e.custphone)\n                as designerserviceamount\n                from designerservice a \n                inner join salestable s on s.salesid = a.invoiceid \n                where a.customerid = '" + customerid + "' and a.custphone = '" + mobileno + "'\n                )  as d where d.balanceamount > 0 order by lastmodifieddate\n                    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getReturnedDesignerServiceList = function (salesgroup) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n      select distinct\n      a.invoiceid,\n      a.salesorderid,\n      a.customerid,\n      a.custphone,\n      a.amount,\n      a.recordtype,\n      s.salesgroup\n      from designerservice a \n      inner join salestable s on s.salesid = a.salesorderid\n      where a.amount > 0 and s.salesgroup = '" + salesgroup + "'\n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getDiscountBlockItems = function (custgroup, accountnum, inventlocationid) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select itemid from ajp_block_discounts where \n        inventlocationid='" + inventlocationid + "' and \n        (price_disc_account_relation ='" + custgroup + "' or price_disc_account_relation='" + accountnum + "')";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getAramkoTahkomDiscounts = function (custaccount, dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n        dataareaid, int_ext as \"intExt\", \n        sales_discount as \"salesDiscount\", \n        customer_id as \"customerId\" \n        from interior_exterior where customer_id='" + custaccount + "' and dataareaid='" + dataareaid + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getBuyOneGetOneDiscountItems = function (items, inventlocationid, custaccount, custtype) {
        return __awaiter(this, void 0, void 0, function () {
            var buyOneGetOneDiscountQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buyOneGetOneDiscountQuery = "select\n                                                    dataareaid, \n                                                    inventlocationid, \n                                                    itemid,\n                                                    inventsizeid,\n                                                    configid,\n                                                    multiple_qty as \"multipleQty\", \n                                                    free_qty as \"freeQty\", \n                                                    price_disc_item_code as \"priceDiscItemCode\", \n                                                    price_disc_account_relation as \"priceDiscAccountRelation\"\n                                                    from sales_promotion_items_equal where \n                                                    inventlocationid = '" + inventlocationid + "'\n                                                    and (price_disc_account_relation = '" + custaccount + "' \n                                                    or price_disc_account_relation='" + custtype + "' or price_disc_item_code=2)\n                                                    and itemid in (" + items + ") and deleted=false";
                        return [4 /*yield*/, this.db.query(buyOneGetOneDiscountQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getPromotionalDiscountItems = function (items, inventlocationid, custaccount, custtype) {
        return __awaiter(this, void 0, void 0, function () {
            var promotionalDiscountQuery;
            return __generator(this, function (_a) {
                promotionalDiscountQuery = "select\n                                                    dataareaid, \n                                                    inventlocationid, \n                                                    itemid,\n                                                    inventsizeid,\n                                                    configid,\n                                                    multiple_qty as \"multipleQty\", \n                                                    free_qty as \"freeQty\", \n                                                    price_disc_item_code as \"priceDiscItemCode\", \n                                                    price_disc_account_relation as \"priceDiscAccountRelation\"\n                                                    from sales_promotion_items where \n                                                    inventlocationid = '" + inventlocationid + "'\n                                                    and (price_disc_account_relation = '" + custaccount + "' \n                                                    or price_disc_account_relation='" + custtype + "' or price_disc_item_code=2)\n                                                    and itemid in (" + items + ") and deleted=false";
                return [2 /*return*/, this.db.query(promotionalDiscountQuery)];
            });
        });
    };
    RawQuery.prototype.getSalesDisocuntItems = function (items, inventlocationid, custaccount, custtype) {
        return __awaiter(this, void 0, void 0, function () {
            var SpecialDisocuntQuery, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        SpecialDisocuntQuery = "select\n                                                    dataareaid, \n                                                    inventlocationid, \n                                                    itemid,\n                                                    inventsizeid,\n                                                    configid,\n                                                    discount_type as \"discountType\", \n                                                    discount as \"discount\", \n                                                    price_disc_item_code as \"priceDiscItemCode\", \n                                                    price_disc_account_relation as \"priceDiscAccountRelation\"\n                                                    from sales_discounts_on_products where \n                                                    inventlocationid = '" + inventlocationid + "'\n                                                    and (price_disc_account_relation = '" + custaccount + "' \n                                                    or price_disc_account_relation='" + custtype + "' or price_disc_item_code=2)\n                                                    and itemid in (" + items + ") and is_active = true";
                        return [4 /*yield*/, this.db.query(SpecialDisocuntQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.checkDiscounts = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            var discQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        discQuery = "select itemid, enddisc, linedisc, multilinedisc\n        from inventtablemodule where dataareaid='ajp' and moduletype=2 and itemid in (" + items + ")";
                        return [4 /*yield*/, this.db.query(discQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.updateFiscalYearClose = function (yearNo, date) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "update fiscalyear set closing = 1 where yearno= " + yearNo + " and endingdate = '" + date[2] + "-" + date[1] + "-" + date[0] + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.financialYearCloseCondition = function (dataareaid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select journalnum, balance from (select \n            journalnum, \n            cast((sum(amountcurdebit)-sum(amountcurcredit)) as integer ) as balance\n            from ledgerjournaltrans\n            trans where dataareaid='" + dataareaid + "' group by journalnum) as i where balance <> 0;";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result && result.length > 0 ? true : false];
                }
            });
        });
    };
    RawQuery.prototype.getCustomerCreditMax = function (accountNum) {
        return __awaiter(this, void 0, void 0, function () {
            var custDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select creditmax from custtable where accountnum = '" + accountNum + "'")];
                    case 1:
                        custDetails = _a.sent();
                        custDetails = custDetails.length >= 1 ? custDetails[0] : {};
                        return [2 /*return*/, custDetails];
                }
            });
        });
    };
    RawQuery.prototype.getNumberSeq = function (seq) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select \n                numbersequence\n                from numbersequencetable where numbersequence='" + seq + "'")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.updateSalesTableWorkFlowStatus = function (salesId, status) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("update salestable set status = '" + status + "', lastmodifieddate = '" + new Date().toISOString() + "' where salesid='" + salesId + "'")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.updateSalesLine = function (salesId, status) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("update salesline set status = '" + status + "', lastmodifieddate = '" + new Date().toISOString() + "' where salesid='" + salesId + "'")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getBaseSizeBatchesList = function (invoiceid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("\n        select itemid,batchno as \"batchNo\", configid, inventsizeid, CAST(ABS(qty) as INTEGER) as quantity, sales_line_id as saleslineid from inventtrans where invoiceid = '" + invoiceid + "'\n    ")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.salesTableInterCompanyOriginalData = function (salesId, transkind) {
        if (transkind === void 0) { transkind = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select * from salestable \n        where intercompanyoriginalsalesid = '" + salesId + "' " + (transkind ? "and transkind = '" + transkind + "'" : ""))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.salesTableData = function (salesId, transkind) {
        if (transkind === void 0) { transkind = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select * from salestable \n        where salesid = '" + salesId + "' " + (transkind ? "and transkind = '" + transkind + "'" : ""))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.checkDesignerServiceUsed = function (invoiceid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select SUM(amount) as amount from designerservice \n        where invoiceid = '" + invoiceid + " group by invoiceid")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.salesTableInventlocation = function (inventLocationId, salesId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("update salestable set inventlocationid='" + inventLocationId + "' where salesid='" + salesId + "'")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getColorid = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select id from colors where code = '" + code + "'")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.getItemTaxGroup = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select taxitemgroupid from inventtablemodule where itemid = '" + code + "' and moduletype=2 limit 1")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.getItemTaxGroupByItemIds = function (taxgroup) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select it.taxitemgroup from taxgroupdata tg\n      inner join taxonitem it on tg.taxcode = it.taxcode \n      where tg.taxgroup = '" + taxgroup + "'")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0].taxitemgroup : null];
                }
            });
        });
    };
    RawQuery.prototype.getsizeid = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select id from sizes where code = '" + code + "'")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.getbaseid = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select id from bases where code = '" + code + "'")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.getbasesizeid = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query("select id from base_sizes where base_id = '" + reqData.baseId + "' and size_id = '" + reqData.sizeId + "'")];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.CheckUserInfo = function (userInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!userInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, typeorm_1.getManager().query("select groupid, status from user_info where user_name='" + userInfo.userName + "'")];
                    case 1:
                        data = _a.sent();
                        data = data ? data[0] : {};
                        console.log(data);
                        console.log("userInfo: " + userInfo.userName, " groupid location:" + data.inventlocationid, " inventlocationid: " + userInfo.inventlocationid);
                        if (data.groupid == userInfo.groupid) {
                            if (process && process.env && process.env.ENV_STORE_ID) {
                                if (userInfo.inventlocationid == process.env.ENV_STORE_ID) {
                                    return [2 /*return*/, true];
                                }
                                else {
                                    return [2 /*return*/, false];
                                }
                            }
                            if (data.status == "ACTIVE") {
                                return [2 /*return*/, true];
                            }
                            else {
                                return [2 /*return*/, "INACTIVE"];
                            }
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, true];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.deleteBalances = function (inventlocationid, fromCsv) {
        if (fromCsv === void 0) { fromCsv = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(fromCsv == true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.db.query("delete from inventtrans where inventlocationid = '" + inventlocationid + "' and invoiceid in ('OPEN_BALANCE') ")];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.db.query("delete from inventtrans where inventlocationid = '" + inventlocationid + "'")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.db.query("delete from salesline where inventlocationid = '" + inventlocationid + "'")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.db.query("delete from salestable where inventlocationid = '" + inventlocationid + "'")];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.checkItems = function (inventlocationid, itemsList, colorsList, sizesList, salesId) {
        if (salesId === void 0) { salesId = null; }
        return __awaiter(this, void 0, void 0, function () {
            var items, sizes, colors, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = itemsList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        sizes = sizesList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        colors = colorsList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        query = "select itemid, lower(configid) as configid, lower(inventsizeid) as inventsizeid,  sum(qty) as qty from inventtrans  \n    where lower(itemid) in (" + items + ")\n    and lower(configid) in (" + colors + ")\n    and lower(inventsizeid) in (" + sizes + ")\n    and inventlocationid = '" + inventlocationid + "' and transactionclosed = true ";
                        if (salesId) {
                            query += " and invoiceid != '" + salesId + "' ";
                        }
                        query += "group by itemid, lower(configid), lower(inventsizeid) ";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.checkBatchAvailability = function (inventlocationid, itemsList, colorsList, sizesList, batchList) {
        return __awaiter(this, void 0, void 0, function () {
            var items, sizes, colors, batches, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = itemsList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        sizes = sizesList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        colors = colorsList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        batches = batchList.map(function (d) { return "lower('" + d + "')"; }).join(",");
                        query = "select itemid, configid, inventsizeid, batchno,  sum(qty) as qty from inventtrans  \n    where lower(itemid) in (" + items + ")\n    and lower(configid) in (" + colors + ")\n    and lower(inventsizeid) in (" + sizes + ")\n    and lower(batchno) in (" + batches + ")\n    and inventlocationid = '" + inventlocationid + "' and transactionclosed = true\n    group by itemid, configid, inventsizeid, batchno";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getSalesToken = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select auth_token as \"authToken\" from salesorder_tokens where order_id = '" + id + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.checkSalesStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select status from salestable where salesid = '" + id + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    RawQuery.prototype.salesmanList = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, ids, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = reqData
                            .split(",")
                            .map(function (d) { return "'" + d + "'"; })
                            .join(",");
                        query = "select concat(num,' - ', description) as salesman, num as salesmanid\n    from dimensions where num in(" + ids + ")";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.salesman = function (salesmanId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select concat(num,' - ', description) as salesman\n    from dimensions where num = '" + salesmanId + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0].salesman : null];
                }
            });
        });
    };
    RawQuery.prototype.updateSynctable = function (inventlocationid) {
        if (inventlocationid === void 0) { inventlocationid = null; }
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "update sync_table set updated_on = '1900-01-01' \n    where map_table ='usergroupconfig' ";
                        if (inventlocationid) {
                            query += " and group_on = '" + inventlocationid + "'";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RawQuery.prototype.getCustomerTax = function (taxcode) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select tg.taxcode, t.taxvalue as vat\n                  from taxgroupdata tg \n                  inner join taxdata t on tg.taxcode =t.taxcode where tg.taxgroup = '" + taxcode + "'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.offlineSystems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select distinct id from sync_source where type != 'ONLINE'";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.resolve([])];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.getDesignerProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    select \n    distinct\n     id,\n    'HSN-00004' as code,\n     name_ar as \"nameAr\",\n     name_en as \"nameEn\",\n     price as price,\n     vat as vat,\n     dataareaid as dataareaid,\n     '--' as configid,\n     name_en as inventsizeid\n     from designer_products order by price\n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    RawQuery.prototype.getPrevReturnOrderAmount = function (salesId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n                sum(coalesce(amount,0)) as \"amount\", \n                sum(coalesce(netamount,0)) as \"netAmount\", \n                sum(coalesce(vatamount,0)) as \"vatamount\",\n                sum(coalesce(disc,0)) as \"disc\",  \n                sum(coalesce(cash_amount,0)) as \"cashAmount\", \n                sum(coalesce(redeemptsamt,0)) as \"redeemAmount\",\n                sum(coalesce(design_service_redeem_amount,0)) as \"designServiceRedeemAmount\",\n                sum(coalesce(card_amount,0)) as \"cardAmount\"\n                from salestable s where intercompanyoriginalsalesid = '" + salesId + "'\n                group by intercompanyoriginalsalesid ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.getVendorCustomerAccount = function (accountnum) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    select \n    accountnum, name, vendgroup as custgroup, custaccount,\n    pricegroup, enddisc, linedisc, multilinedisc from vendortable where accountnum='" + accountnum + "' limit 1\n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0].custaccount : null];
                }
            });
        });
    };
    RawQuery.prototype.desiner_product_name = function (itemid) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.query(" select name_en from designer_products where code = '" + itemid + "'")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0].name_en : "-"];
                }
            });
        });
    };
    RawQuery.prototype.getAppLangName = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var ids, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids = key
                            .split(",")
                            .map(function (a) { return "'" + a + "'"; })
                            .join(",");
                        return [4 /*yield*/, this.db.query("select al.en,al.ar from app_lang al \n    where al.id  in(" + ids + ")")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : null];
                }
            });
        });
    };
    RawQuery.prototype.getUserswithGroupid = function (groupid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select distinct ui.email from usergroupconfig ugc \n      left join user_info ui on ui.groupid = ugc.usergroupid\n      where \n      ugc.usergroupid ='" + groupid + "' and\n      ui.status ILIKE '%active%'\n      group by ui.email;";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.resolve([])];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RawQuery.prototype.getUserswithInventLocation = function (inventlocation) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "select distinct ui.email from usergroupconfig ugc \n      left join user_info ui on ui.groupid = ugc.usergroupid\n      where \n      ugc.inventlocationid ='" + inventlocation + "' and\n      ui.status ILIKE '%active%'\n      group by ui.email;";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.resolve([])];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RawQuery;
}());
exports.RawQuery = RawQuery;
Object.seal(RawQuery);
