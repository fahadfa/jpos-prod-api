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
var ColorantReport = /** @class */ (function () {
    function ColorantReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    ColorantReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, totalQuantity_1, totalAmount_1, renderData_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        totalQuantity_1 = 0;
                        totalAmount_1 = 0;
                        data.forEach(function (v) {
                            totalQuantity_1 += v.quantity ? parseInt(v.quantity) : 0;
                            totalAmount_1 += v.totalAmount ? parseInt(v.totalAmount) : 0;
                        });
                        renderData_1 = {
                            printDate: new Date().toISOString().slice(0, 10),
                            fromDate: params.fromDate,
                            toDate: params.toDate,
                            totalQuantity: totalQuantity_1,
                            totalAmount: totalAmount_1,
                            user: params.user,
                        };
                        renderData_1.totalQuantity = 0;
                        renderData_1.totalAmount = 0;
                        data.map(function (v) {
                            if (v.transkind == "RETURNORDER") {
                                v.quantity = -parseInt(v.quantity);
                                v.totalAmount = -parseFloat(v.totalAmount);
                            }
                            renderData_1.totalQuantity += parseInt(v.quantity);
                            renderData_1.totalAmount += parseFloat(v.totalAmount);
                        });
                        renderData_1.totalAmount = renderData_1.totalAmount.toFixed(2);
                        renderData_1.data = data;
                        return [2 /*return*/, renderData_1];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ColorantReport.prototype.warehouseName = function (param) {
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
    ColorantReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var warehouse, title, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.warehouseName(params.inventlocationid)];
                    case 1:
                        warehouse = _a.sent();
                        result.warehouseNameEn = warehouse.namealias;
                        result.warehouseNameAr = warehouse.name;
                        result.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                        return [4 /*yield*/, this.rawQuery.getAppLangName("COLORANT_REPORT")];
                    case 2:
                        title = _a.sent();
                        if (title) {
                            result.title = title;
                            console.table(title);
                        }
                        if (params.type == "excel") {
                            file = params.lang == "en" ? "colorant-excel" : "colorant-excel-ar";
                        }
                        else {
                            file = params.lang == "en" ? "colorant-report" : "colorant-report-ar";
                        }
                        try {
                            return [2 /*return*/, App_1.App.HtmlRender(file, result)];
                        }
                        catch (error) {
                            throw error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ColorantReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        query = "\n    select \n        distinct\n        sl.salesid as \"salesId\",\n        sl.itemid as itemid,\n        sl.colorantid as colorant,\n        sl.colorantprice  as price,\n        to_char(sl.salesprice,  'FM999999999.00') as \"salesPrice\",\n        to_char(sl.salesqty, 'FM999999990') as quantity,\n        to_char((sl.salesqty * sl.colorantprice), 'FM999999990.00') as \"totalAmount\",\n        sl.inventsizeid as inventsizeid,\n        sz.description as \"sizeNameEn\",\n        sz.\"name\" as \"sizeNameAr\",\n        w.name as \"wareHouseNameAr\",\n        w.namealias as \"wareHouseNameEn\",\n        st.transkind as transkind\n        from salesline sl\n        left join inventlocation w on w.inventlocationid=sl.inventlocationid\n        left join inventsize sz on sz.inventsizeid = sl.inventsizeid and sz.itemid = sl.itemid \n        left join salestable st on st.salesid = sl.salesid\n        where sl.createddatetime >= '" + fromDate + "' ::timestamp\n        and  sl.createddatetime < ('" + toDate + "' ::timestamp + '1 day'::interval)\n        and st.transkind not in ('SALESQUOTATION', 'TRANSFERORDER') and st.status in ('POSTED', 'PAID', 'PRINTED') AND sl.colorantprice > 0\n   ";
                        if (params.inventlocationid != "ALL") {
                            query += "  and sl.inventlocationid = '" + params.inventlocationid + "' ";
                        }
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
                        query += " and sl.inventlocationid in (" + inQueryStr_1.substr(0, inQueryStr_1.length - 1) + ") ";
                        return [3 /*break*/, 3];
                    case 2:
                        query += " and sl.inventlocationid='" + params.inventlocationid + "' ";
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ColorantReport;
}());
exports.ColorantReport = ColorantReport;
