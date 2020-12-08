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
var InventoryOnHandReport = /** @class */ (function () {
    function InventoryOnHandReport() {
        this.db = typeorm_1.getManager();
    }
    InventoryOnHandReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, i, sum, totalAvailability, _i, data_1, item, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
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
            var renderData, file;
            return __generator(this, function (_a) {
                console.log(params);
                renderData = result;
                (renderData.printDate = new Date(params.printDate)
                    .toISOString()
                    .replace(/T/, " ") // replace T with a space
                    .replace(/\..+/, "")),
                    console.log(params.lang);
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
            });
        });
    };
    InventoryOnHandReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "";
                        query = "\n    select \n    a.itemid,\n    a.configid,\n    a.inventsizeid,\n    " + (params.batchCheck
                            ? "a.batchno as batchno,\n           a.batchexpdate,"
                            : "") + "\n    a.availabilty as \"physicalAvailable\",\n    a.reservedquantity as \"reservedQuantity\",\n    (a.availabilty + a.reservedquantity) as \"totalAvailable\",\n    a.nameen as nameEn,\n    a.namear as nameAr,\n    a.sizenameen as \"sizeNameEn\",\n    a.sizenamear as \"sizeNameAr\",\n    a.warehouseNameEn,\n    a.WareHouseNameAr \n    from\n    (select \n    UPPER(i.itemid) as itemid,\n    bs.namealias as nameen,\n    bs.itemname as namear,\n    UPPER(i.configid) as configid,\n    UPPER(i.inventsizeid) as inventsizeid,\n    " + (params.batchCheck
                            ? "UPPER(i.batchno) as batchno,\n    to_char(b.expdate, 'yyyy-MM-dd') as batchexpdate,"
                            : "") + "\n    sz.description as \"sizenameen\",\n    sz.\"name\" as \"sizenamear\",\n    sum(qty) as availabilty,\n    abs(sum(case\n      when reserve_status ='RESERVED' then qty\n      else 0\n      end\n      )) as reservedquantity,\n    w.name as warehousenamear, \n    w.namealias as warehousenameen\n    from inventtrans i\n    left join inventbatch b on i.batchno = b.inventbatchid and i.itemid = b.itemid\n    inner join inventtable bs on i.itemid = bs.itemid\n    left join inventsize sz on lower(sz.inventsizeid) = lower(i.inventsizeid) and sz.itemid = i.itemid\n    inner join configtable c on c.itemid = i.itemid and lower(c.configid) = lower(i.configid)\n    inner join inventlocation w on w.inventlocationid=i.inventlocationid\n    ";
                        if (!(params.key == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where id= '" + this.sessionInfo.usergroupconfigid + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        console.log(regionalWarehouses);
                        inQueryStr_1 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        inQueryStr_1 += "'" + params.inventlocationid + "',";
                        query += " where i.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " where i.inventlocationid='" + params.key + "'  ";
                        _a.label = 3;
                    case 3:
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
                        query += " and transactionclosed  = true group by UPPER(i.itemid), UPPER(i.configid), UPPER(i.inventsizeid), i.inventlocationid,\n      bs.namealias, bs.itemname, w.name, w.namealias,  sz.description, sz.\"name\" " + (params.batchCheck ? ", UPPER(i.batchno), b.expdate" : "") + " ) as a where  ";
                        if (params.withZero) {
                            query += " (a.availabilty + a.reservedquantity) >= 0 ";
                        }
                        else {
                            query += " (a.availabilty + a.reservedquantity) > 0 ";
                        }
                        query += " order by a.itemid ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InventoryOnHandReport;
}());
exports.InventoryOnHandReport = InventoryOnHandReport;
