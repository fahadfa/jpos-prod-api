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
var ItemBalanceReport = /** @class */ (function () {
    function ItemBalanceReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    ItemBalanceReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, i, resData, saleslist, _loop_1, _i, data_1, item, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.data_from_db(params)];
                    case 1:
                        data = _a.sent();
                        i = 1;
                        resData = [];
                        saleslist = { salesgroup: {}, salesdata: [] };
                        _loop_1 = function (item) {
                            item.sNo = i;
                            item.availability = parseInt(item.availability);
                            item.qtyIn = parseInt(item.qtyIn);
                            item.qtyOut = parseInt(item.qtyOut);
                            i += 1;
                            saleslist = resData.find(function (ele) { return ele.salesgroup.itemid == item.itemid; });
                            if (saleslist) {
                                saleslist.salesdata.push(item);
                            }
                            else {
                                saleslist = { salesgroup: {}, salesdata: [] };
                                saleslist.salesgroup.itemid = item.itemid;
                                saleslist.salesgroup.nameEn = item.nameEn;
                                saleslist.salesgroup.nameAr = item.nameAr;
                                saleslist.salesdata.push(item);
                                resData.push(saleslist);
                            }
                        };
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            item = data_1[_i];
                            _loop_1(item);
                        }
                        result = {
                            // printDate: new Date().toLocaleString(),
                            data: resData,
                            user: params.user,
                        };
                        return [2 /*return*/, result];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ItemBalanceReport.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid ='" + param + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    ItemBalanceReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, title, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log(result.salesLine[0].product.nameEnglish);
                        renderData = result;
                        renderData.fromDate = params.fromDate;
                        renderData.toDate = params.toDate;
                        renderData.inventlocationid = params.inventlocationid;
                        renderData.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                        return [4 /*yield*/, this.rawQuery.getAppLangName("ITEM_BALANCE_REPORT")];
                    case 1:
                        title = _a.sent();
                        if (title) {
                            result.title = title;
                            console.table(title);
                        }
                        if (params.type == "excel") {
                            file = params.lang == "en" ? "itembalance-excel" : "itembalance-excel-ar";
                        }
                        else {
                            file = params.lang == "en" ? "itembalance-report" : "itembalance-report-ar";
                        }
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
    ItemBalanceReport.prototype.data_from_db = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, query, warehouseQuery, regionalWarehouses, inQueryStr_1, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet);
                        query = "\n    select \n    ib.itemid, ib.configid, ib.inventsizeid, ib.batchno, ib.inventlocationid, \n    sum(qty_in) as \"qtyIn\",\n    sum(qty_out) as \"qtyOut\",\n    (select\n      SUM(j.qty) \n      from inventtrans j where j.itemid = ib.itemid and \n      lower(j.configid) = lower(ib.configid) and \n      lower(j.inventsizeid) = lower(ib.inventsizeid) and \n      j.batchno = ib.batchno and \n      j.inventlocationid = ib.inventlocationid\n      and j.transactionclosed = true\n      and j.dateinvent <= '" + params.toDate + "' :: date + '1 day'::interval\n      group by j.itemid,  j.configid, j.inventsizeid, j.batchno, j.inventlocationid\n      ) as availability,\n      bs.namealias as \"nameEn\",\n      bs.itemname as \"nameAr\",\n      w.name as \"WareHouseNameAr\", \n      w.namealias as \"WareHouseNameEn\",\n      sz.description as \"sizeNameEn\",\n      sz.name as \"sizeNameAr\",\n      ib.location,\n       to_char(b.expdate, 'yyyy-MM-dd') as batchexpdate\n    from (\n      select\n      distinct on (i.id, i.invoiceid, UPPER(i.itemid), UPPER(i.configid), UPPER(i.inventsizeid), i.batchno, i.qty, i.sales_line_id)\n      UPPER(i.itemid) as itemid,\n      UPPER(i.configid) as configid,\n      UPPER(i.inventsizeid) as inventsizeid,\n      UPPER(i.batchno) as batchno,\n      case when qty>0 then abs(qty) else 0 end as qty_in,\n      case when qty<0 then abs(qty) else 0 end as qty_out,\n      i.inventlocationid as inventlocationid,\n      i.location as location\n  from inventtrans  i\n      where i.dateinvent >= '" + fromDate + "' ::timestamp\n      AND  i.dateinvent < ('" + toDate + "' ::timestamp + '1 day'::interval) and i.itemid not like 'HSN-%'";
                        if (!(params.key == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where inventlocationid= '" + params.inventlocationid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr_1 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        inQueryStr_1 += "'" + params.inventlocationid + "',";
                        query += " and i.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") and (transactionclosed = true) ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " and i.inventlocationid='" + params.inventlocationid + "' and (transactionclosed = true) ";
                        _a.label = 3;
                    case 3:
                        if (params.itemId) {
                            query = query + (" and i.itemid = '" + params.itemId + "'");
                        }
                        if (params.configId) {
                            query = query + (" and lower(i.configid)=lower('" + params.configId + "')");
                        }
                        if (params.inventsizeid) {
                            query = query + (" and lower(i.inventsizeid)=lower('" + params.inventsizeid + "')");
                        }
                        if (params.batchno) {
                            query = query + (" and i.batchno='" + params.batchno + "'");
                        }
                        query = query + " and i.reserve_status!='RESERVED' ";
                        query =
                            query +
                                "  ) as ib \n      inner join inventlocation w on w.inventlocationid=ib.inventlocationid\n      left join inventbatch b on ib.batchno = b.inventbatchid  and ib.itemid = b.itemid and ib.configid = b.configid \n      left join inventtable bs on ib.itemid = bs.itemid\n      left join inventsize sz on sz.inventsizeid = ib.inventsizeid and sz.itemid = ib.itemid\n      GROUP BY\n      ib.itemid,  ib.configid, \n      ib.inventsizeid, ib.batchno, b.expdate, bs.namealias, \n      bs.itemname, sz.name, sz.description, \n      ib.inventlocationid, w.name, w.namealias, ib.location order by ib.itemid\n                   ";
                        console.log(query);
                        return [4 /*yield*/, this.db.query(query)];
                    case 4:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return ItemBalanceReport;
}());
exports.ItemBalanceReport = ItemBalanceReport;
