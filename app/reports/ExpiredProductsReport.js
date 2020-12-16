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
var ExpiredProductsReport = /** @class */ (function () {
    function ExpiredProductsReport() {
        this.db = typeorm_1.getManager();
    }
    ExpiredProductsReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query_to_data(params)];
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
    ExpiredProductsReport.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation";
                        if (param.toUpperCase() !== "ALL") {
                            query += " where inventlocationid ='" + param + "' limit 1";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data ? data[0] : {}];
                }
            });
        });
    };
    ExpiredProductsReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var warehouse, renderData, query, data, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.warehouseName(params.inventlocationid)];
                    case 1:
                        warehouse = _a.sent();
                        console.log(warehouse);
                        console.log(params);
                        renderData = {
                            printDate: new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, ""),
                            date: params.date,
                            // inventlocationid: params.inventlocationid,
                            user: params.user,
                        };
                        if (!(params.inventlocationid === "ALL")) return [3 /*break*/, 3];
                        query = "select * from app_lang ap where ap.id = '" + params.inventlocationid + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        data = data.length > 0 ? data[0] : {};
                        renderData.inventlocationid = params.lang == "en" ? data.en : data.ar;
                        _a.label = 3;
                    case 3:
                        // console.log(result.salesLine[0].product.nameEnglish);
                        renderData.warehouseNameEn = warehouse.namealias;
                        renderData.warehouseNameAr = warehouse.name;
                        console.log(renderData);
                        renderData.data = result;
                        if (params.type == "excel") {
                            file = params.lang == "en" ? "expiredproducts-excel" : "expiredproducts-excel-ar";
                        }
                        else {
                            file = params.lang == "en" ? "expiredproducts-report" : "expiredproducts-report-ar";
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
    ExpiredProductsReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    select \n    i.itemid as itemid, \n    i.configid as configid, \n    to_char(sum(qtyin), 'FM999,999,999.') as \"qtyIn\", \n    to_char(sum(qtyout), 'FM999,999,999.') as \"qtyOut\", \n    to_char((sum(qtyin)+sum(qtyout)), 'FM999,999,999.') as balance,\n    i.inventsizeid as inventsizeid,\n    sizenameen as \"sizeNameEn\",\n    sizenamear as \"sizeNameAr\",\n    nameen as \"nameEn\",\n    namear as \"nameAr\",\n    wareHouseNameAr as \"wareHouseNameAr\",\n    wareHouseNameEn as \"wareHouseNameEn\",\n    locationNameAr as \"locationNameAr\",\n    locationNameEn as \"locationNameEn\",\n    to_char(i.datestatus, 'yyyy-MM-dd') as \"lastModifiedDate\",\n    i.batchno as batchno,\n    to_char(i.expdate, 'yyyy-MM-dd') as \"expDate\",\n    DATE_PART('day',  to_char(i.expdate, 'yyyy-MM-dd')::timestamp - now()::timestamp) as \"expDays\" from (\n    select \n    i.itemid as itemid,\n    coalesce(case when i.qty > 0 then sum(i.qty) end, 0) as qtyin,\n    coalesce(case when i.qty < 0 then sum(i.qty) end, 0) as qtyout,\n    i.configid as configid,\n    i.inventsizeid as inventsizeid,\n    i.batchno as batchno,\n    s.description as sizenameen,\n    s.\"name\" as sizenamear,\n    bs.namealias as nameEn,\n    bs.itemname as nameAr,\n    w.name as wareHouseNameAr,\n    w.namealias as wareHouseNameEn,\n    w.name as locationNameAr,\n    w.namealias as locationNameEn,\n    i.datestatus as datestatus,\n    b.expdate as expdate\n    from inventtrans  i\n    left join inventbatch b on i.batchno = b.inventbatchid\n    left join inventtable bs on i.itemid = bs.itemid\n    left join inventsize s on s.inventsizeid = i.inventsizeid and s.itemid = i.itemid\n    left join inventlocation w on w.inventlocationid=i.inventlocationid\n    where ((reserve_status!='UNRESERVED' AND reserve_status != 'SAVED') or reserve_status is null) and\n    b.expdate <= ('" + params.date + "' ::date + '1 day'::interval) and i.transactionclosed = true ";
                        if (!(params.inventlocationid == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where inventlocationid= '" + params.key + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr_1 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        inQueryStr_1 += "'" + params.inventlocationid + "',";
                        query += " and i.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " and i.inventlocationid='" + params.inventlocationid + "' ";
                        _a.label = 3;
                    case 3:
                        query += " group by i.itemid, i.qty,\n    i.inventsizeid, i.configid,  i.batchno, b.expdate, s.name, s.description, bs.namealias, bs.itemname, i.datestatus, w.name, w.namealias\n    order by b.expdate ASC ) as i \n    \n      group by i.itemid, \n    i.inventsizeid, i.configid,  i.batchno, sizenameen, sizenamear, nameEn,nameAr, i.datestatus, wareHouseNameAr, wareHouseNameEn, locationNameAr, locationNameEn, i.expdate\n    order by i.expdate ASC";
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ExpiredProductsReport;
}());
exports.ExpiredProductsReport = ExpiredProductsReport;
