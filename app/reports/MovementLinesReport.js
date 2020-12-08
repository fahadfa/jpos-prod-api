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
var SalesTableService_1 = require("../services/SalesTableService");
var RawQuery_1 = require("../common/RawQuery");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var WorkflowService_1 = require("../services/WorkflowService");
var MovementLinesReport = /** @class */ (function () {
    function MovementLinesReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.workflowService = new WorkflowService_1.WorkflowService();
    }
    MovementLinesReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("===================================", params);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        data.map(function (item) {
                            item.Quantity = parseInt(item.Quantity);
                            item.createddatetime = App_1.App.convertUTCDateToLocalDate(new Date(item.createddatetime), parseInt(params.timeZoneOffSet));
                        });
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MovementLinesReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                // console.log(result.salesLine[0].product.nameEnglish);
                renderData = {
                    data: result,
                    fromDate: params.fromDate,
                    toDate: params.toDate,
                    wareHouseId: params.inventlocationid,
                    status: params.status,
                    printDate: App_1.App.convertUTCDateToLocalDate(new Date(App_1.App.DateNow()), parseInt(params.timeZoneOffSet))
                        .replace(/T/, " ") // replace T with a space
                        .replace(/\..+/, ""),
                };
                console.log(params.lang);
                file = "";
                if (params.type == "excel") {
                    file = params.lang == "en" ? "mol-en-excel" : "mol-ar-excel";
                }
                else {
                    file = params.lang == "en" ? "mol-en-report" : "mol-ar-report";
                }
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
    MovementLinesReport.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    MovementLinesReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            distinct\n            sl.salesid as \"salesId\",\n            sl.itemid,\n            i.itemname as \"ItemNameAr\",\n            i.namealias as \"ItemNameEn\", \n            sl.configid,\n            sl.inventsizeid,\n            sl.salesqty \"Quantity\",\n            s.custaccount,\n            s.status,\n            al.en as \"statusEn\",\n            al.ar as \"statusAr\",\n            s.dimension6_ as salesman,\n            s.createddatetime,\n            sl.inventlocationid,\n            d.\"name\" as \"salesmanEn\",\n            d.description as \"salesmanAr\",\n            m.movementtype as \"movementtypeEn\",\n            m.movementarabic as \"movementtypeAr\",\n            w.namealias as wnamealias,\n            w.name as wname\n            from salesline sl\n            inner join salestable s on s.salesid = sl.salesid \n            inner join movementtype m on m.id = s.movement_type_id\n            left join app_lang al on al.id = s.status\n            left join inventtable i on i.itemid = sl.itemid \n            left join dimensions d on d.num = s.dimension6_ \n            left join inventlocation w on w.inventlocationid = sl.inventlocationid\n            where s.transkind in ('INVENTORYMOVEMENT')\n            and s.lastmodifieddate >= '" + params.fromDate + "' ::date\n            AND  s.lastmodifieddate < ('" + params.toDate + "' ::date + '1 day'::interval) \n            ";
                        if (!(params.inventlocationid && params.inventlocationid == "ALL")) return [3 /*break*/, 2];
                        warehouseQuery = "select regionalwarehouse from usergroupconfig where inventlocationid= '" + params.key + "' limit 1";
                        return [4 /*yield*/, this.db.query(warehouseQuery)];
                    case 1:
                        regionalWarehouses = _a.sent();
                        inQueryStr_1 = "";
                        regionalWarehouses[0].regionalwarehouse.split(",").map(function (item) {
                            inQueryStr_1 += "'" + item + "',";
                        });
                        inQueryStr_1 += "'" + params.key + "',";
                        query += " and s.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        if (params.inventlocationid) {
                            query += " and s.inventlocationid='" + params.inventlocationid + "' ";
                        }
                        _a.label = 3;
                    case 3:
                        if (params.movementType) {
                            query += " and s.movement_type_id = '" + params.movementType + "' ";
                        }
                        if (params.status && params.status != "ALL") {
                            query += " and s.status in ('" + params.status + "') ";
                        }
                        if (params.accountnum) {
                            query += " and (s.custaccount = '" + params.accountnum + "' or s.mobileno ='" + params.accountnum + "' or s.invoiceaccount='" + params.accountnum + "') ";
                        }
                        if (params.salesmanid) {
                            query += " and (s.dimension6_ = '" + params.salesmanid + "') ";
                        }
                        query += " order by s.createddatetime ASC ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MovementLinesReport;
}());
exports.MovementLinesReport = MovementLinesReport;
