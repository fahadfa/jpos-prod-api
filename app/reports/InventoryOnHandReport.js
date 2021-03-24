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
var App_1 = require("../../utils/App");
var RawQuery_1 = require("../common/RawQuery");
var InventoryOnHandReport = /** @class */ (function () {
    function InventoryOnHandReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    InventoryOnHandReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var selfStore, data, ecomdata, i, sum, totalAvailability, _i, data_1, item, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selfStore = params.inventlocationid == this.sessionInfo.inventlocationid;
                        data = [];
                        if (!(selfStore || params.inventlocationid == "ALL")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.query_to_data(params, this.sessionInfo.inventlocationid)];
                    case 1:
                        data = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(!selfStore || params.inventlocationid == "ALL")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.query_to_ecom_data(params)];
                    case 3:
                        ecomdata = _a.sent();
                        data = data.concat(ecomdata);
                        _a.label = 4;
                    case 4:
                        i = 1;
                        sum = 0;
                        totalAvailability = 0;
                        data = data.filter(function (item) { return Number.parseFloat(item.totalAvailable) >= 0; });
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            item = data_1[_i];
                            item.sNo = i;
                            i += 1;
                            item.batchCheck = params.batchCheck;
                            item.physicalAvailable = parseInt(item.physicalAvailable);
                            item.reservedQuantity = parseInt(item.reservedQuantity);
                            item.totalAvailable = parseInt(item.totalAvailable);
                            sum += Number.parseFloat(item.physicalAvailable);
                            totalAvailability += Number.parseFloat(item.totalAvailable);
                        }
                        result = {
                            printDate: new Date().toLocaleString(),
                            data: data,
                            sum: sum,
                            totalAvailability: totalAvailability,
                            batchCheck: params.batchCheck ? params.batchCheck : false,
                            user: params.user,
                        };
                        return [2 /*return*/, result];
                }
            });
        });
    };
    InventoryOnHandReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, title, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(params);
                        renderData = result;
                        (renderData.printDate = new Date(params.printDate)
                            .toISOString()
                            .replace(/T/, " ") // replace T with a space
                            .replace(/\..+/, "")),
                            console.log(params.lang);
                        return [4 /*yield*/, this.rawQuery.getAppLangName("ONHAND_INVENTORY")];
                    case 1:
                        title = _a.sent();
                        if (title) {
                            renderData.title = title;
                            console.table(title);
                        }
                        if (params.type == "excel") {
                            file = params.lang == "en" ? "onhandinventory-excel" : "onhandinventory-excel-ar";
                        }
                        else {
                            file = params.lang == "en" ? "onhandinventory-report" : "onhandinventory-report-ar";
                        }
                        // console.log(renderData)
                        try {
                            return [2 /*return*/, App_1.App.HtmlRender(file, renderData)];
                        }
                        catch (error) {
                            throw error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InventoryOnHandReport.prototype.query_to_data = function (params, inventlocationid) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "";
                        query = "\n    select distinct on (itemid,configid,inventsizeid " + (params.batchCheck ? ", batchno " : "") + ")\n    UPPER(i.itemid) as itemid,\n    bs.namealias as nameen,\n    bs.itemname as namear,\n    UPPER(i.configid) as configid,\n    UPPER(i.inventsizeid) as inventsizeid,\n    " + (params.batchCheck
                            ? "UPPER(i.batchno) as batchno,\n    to_char(b.expdate, 'yyyy-MM-dd') as batchexpdate,"
                            : "") + "\n    sz.description as \"sizenameen\",\n    sz.\"name\" as \"sizenamear\",\n    sum(qty) as availabilty,\n    abs(sum(case\n      when reserve_status ='RESERVED' then qty\n      else 0\n      end\n      )) as reservedquantity,\n    w.name as warehousenamear, \n    w.namealias as warehousenameen\n    from inventtrans i\n    left join inventbatch b on i.batchno = b.inventbatchid and i.itemid = b.itemid and lower(i.configid) = lower(b.configid) \n    inner join inventtable bs on i.itemid = bs.itemid\n    left join inventsize sz on lower(sz.inventsizeid) = lower(i.inventsizeid) and sz.itemid = i.itemid\n    inner join configtable c on c.itemid = i.itemid and lower(c.configid) = lower(i.configid)\n    inner join inventlocation w on w.inventlocationid=i.inventlocationid\n    ";
                        // if (params.key == "ALL") {
                        //   const warehouseQuery = `select regionalwarehouse from usergroupconfig where id= '${this.sessionInfo.usergroupconfigid}' limit 1`;
                        //   let regionalWarehouses = await this.db.query(warehouseQuery);
                        //   console.log(regionalWarehouses);
                        //   let inQueryStr = "";
                        //   regionalWarehouses[0].regionalwarehouse.split(",").map((item: string) => {
                        //     inQueryStr += "'" + item + "',";
                        //   });
                        //   inQueryStr += "'" + params.inventlocationid + "',";
                        //   query += ` where i.inventlocationid in (${inQueryStr.substr(0, inQueryStr.length - 1)}) `;
                        // } else {
                        query += " where i.inventlocationid='" + inventlocationid + "'  ";
                        // }
                        if (params.itemId) {
                            query = query + (" and LOWER(i.itemid) = LOWER('" + params.itemId + "')");
                        }
                        if (params.configId) {
                            query = query + (" and LOWER(i.configid)=LOWER('" + params.configId + "')");
                        }
                        if (params.inventsizeid) {
                            query = query + (" and LOWER(i.inventsizeid)=LOWER('" + params.inventsizeid + "')");
                        }
                        if (params.batchno && params.batchCheck) {
                            query = query + (" and LOWER(i.batchno)=LOWER('" + params.batchno + "') ");
                        }
                        query += " and transactionclosed  = true and i.itemid not like 'HSN-%' group by UPPER(i.itemid), UPPER(i.configid), UPPER(i.inventsizeid), i.inventlocationid,\n      bs.namealias, bs.itemname, w.name, w.namealias,  sz.description, sz.\"name\" " + (params.batchCheck ? ", UPPER(i.batchno), b.expdate" : "") + " ";
                        // if (params.withZero) {
                        //   query += ` (a.availabilty + a.reservedquantity) >= 0 `;
                        // } else {
                        //   query += ` (a.availabilty + a.reservedquantity) > 0 `;
                        // }
                        // query += ` order by a.itemid `;
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        result.map(function (v) {
                            v.totalAvailable = parseInt(v.availabilty) + parseInt(v.reservedquantity);
                            v.physicalAvailable = v.availabilty;
                            v.reservedQuantity = parseInt(v.reservedquantity);
                        });
                        if (params.withZero) {
                            return [2 /*return*/, result.filter(function (v) { return v.totalAvailable >= 0; })];
                        }
                        else {
                            return [2 /*return*/, result.filter(function (v) { return v.totalAvailable > 0; })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InventoryOnHandReport.prototype.query_to_ecom_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, warehouseQuery, reportWarehouses, warehouses;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select \n    oi.product_code as itemid , oi.color_code as configid,oi.size_code as inventsizeid,oi.erp_code,\n    oi.quantity as \"physicalAvailable\",\n    0 as \"reservedQuantity\",\n    oi.quantity as \"totalAvailable\",\n    it.namealias as nameen,it.itemname as namear,\n    sz.description as \"sizenameen\",\n    sz.\"name\" as \"sizenamear\",\n    w.name as warehousenamear, \n    w.namealias as warehousenameen\n    from onhand_inventory oi \n    left join inventtable it on it.itemid =oi.product_code \n    left join configtable c on c.itemid = oi.product_code and lower(c.configid) = lower(oi.color_code)\n    left join inventsize sz on lower(sz.inventsizeid) = lower(oi.size_code ) \n    and sz.itemid = oi.product_code \n    left join inventlocation w on w.inventlocationid=oi.erp_code  \n    ";
                        if (!(params.inventlocationid == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select report_warehouses as reportwarehouse from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        reportWarehouses = _a.sent();
                        warehouses = reportWarehouses[0].reportwarehouse.split(",").filter(function (item) {
                            return item !== _this.sessionInfo.inventlocationid;
                        });
                        query += " where oi.erp_code in (" + warehouses.map(function (item) { return "'" + item + "'"; }).join(",") + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " where oi.erp_code='" + params.inventlocationid + "'  ";
                        _a.label = 3;
                    case 3:
                        if (params.itemId) {
                            query = query + (" and LOWER(oi.product_code) = LOWER('" + params.itemId + "')");
                        }
                        if (params.configId) {
                            query = query + (" and LOWER(oi.color_code)=LOWER('" + params.configId + "')");
                        }
                        if (params.inventsizeid) {
                            query = query + (" and LOWER(oi.size_code)=LOWER('" + params.inventsizeid + "')");
                        }
                        if (params.withZero) {
                            query += " and oi.quantity >= 0 ";
                        }
                        else {
                            query += " and oi.quantity > 0 ";
                        }
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InventoryOnHandReport;
}());
exports.InventoryOnHandReport = InventoryOnHandReport;
