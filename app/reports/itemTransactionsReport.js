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
var itemTransactionsReport = /** @class */ (function () {
    function itemTransactionsReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    itemTransactionsReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, result, renderData, warehouse, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data_1 = _a.sent();
                        result = this.groupBy(data_1, function (item) {
                            return [item.itemid];
                        });
                        data_1 = [];
                        result.map(function (val) {
                            var obj = {};
                            obj.itemid = val[0].itemid;
                            obj.itemNameEn = val[0].itemNameEn;
                            obj.itemNameAr = val[0].itemNameAr;
                            obj.data = [];
                            obj.totalQtyIn = 0;
                            obj.totalQtyOut = 0;
                            val.map(function (v) {
                                v.qtyIn = parseInt(v.qtyIn);
                                v.qtyOut = parseInt(v.qtyOut);
                                v.balance = v.qtyIn - v.qtyOut;
                                obj.totalQtyIn += v.qtyIn;
                                obj.totalQtyOut += v.qtyOut;
                                obj.data.push(v);
                            });
                            obj.totalBalance = obj.totalQtyIn - obj.totalQtyOut;
                            data_1.push(obj);
                        });
                        renderData = {
                            printDate: new Date().toLocaleString(),
                            fromDate: params.fromDate,
                            toDate: params.toDate,
                            status: params.status,
                            transType: params.transType,
                            batchno: params.batchno ? params.batchno : "ALL",
                            product: params.product ? params.product : "ALL",
                            color: params.color ? params.color : "ALL",
                            inventsizeid: params.inventsizeid ? params.inventsizeid : "ALL",
                            user: params.user,
                        };
                        return [4 /*yield*/, this.warehouseName(params.inventlocationid)];
                    case 2:
                        warehouse = _a.sent();
                        renderData.wareHouseNameAr = warehouse.name;
                        renderData.wareHouseNameEn = warehouse.namealias;
                        renderData.data = data_1;
                        return [2 /*return*/, renderData];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    itemTransactionsReport.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid ='" + param + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data ? data[0] : {}];
                }
            });
        });
    };
    itemTransactionsReport.prototype.groupBy = function (array, f) {
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
    itemTransactionsReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var title, file, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rawQuery.getAppLangName("ITEM_TRANSACTION_REPORT")];
                    case 1:
                        title = _a.sent();
                        if (title) {
                            result.title = title;
                            console.table(title);
                        }
                        if (params.type == "excel") {
                            file = params.lang == "en" ? "itemtransactions-excel" : "itemtransactions-excel-ar";
                        }
                        else {
                            file = params.lang == "en" ? "itemtransactions-report" : "itemtransactions-report-ar";
                        }
                        result.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                        if (!(result.batchno == "ALL" ||
                            result.product === "ALL" ||
                            result.color === "ALL" ||
                            result.inventsizeid === "ALL")) return [3 /*break*/, 3];
                        query = "select * from app_lang ap where ap.id = 'ALL' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        data = data.length > 0 ? data[0] : {};
                        if (result.batchno == "ALL") {
                            result.batchno = params.lang == "en" ? data.en : data.ar;
                        }
                        if (result.product == "ALL") {
                            result.product = params.lang == "en" ? data.en : data.ar;
                        }
                        if (result.color == "ALL") {
                            result.color = params.lang == "en" ? data.en : data.ar;
                        }
                        if (result.inventsizeid == "ALL") {
                            result.inventsizeid = params.lang == "en" ? data.en : data.ar;
                        }
                        _a.label = 3;
                    case 3:
                        console.table(result);
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
    itemTransactionsReport.prototype.chunkArray = function (myArray, chunk_size) {
        return __awaiter(this, void 0, void 0, function () {
            var index, arrayLength, tempArray, myChunk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        arrayLength = myArray.length;
                        tempArray = [];
                        for (index = 0; index < arrayLength; index += chunk_size) {
                            myChunk = myArray.slice(index, index + chunk_size);
                            // Do something if you want with the group
                            tempArray.push(myChunk);
                        }
                        return [4 /*yield*/, tempArray];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    itemTransactionsReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, query, warehouseQuery, regionalWarehouses, inQueryStr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet);
                        query = "\n    select \n    distinct on (j.invoiceid, j.itemid, j.configid, j.inventsizeid, j.batchno, j.date)\n    j.invoiceid,\n    j.transtype,\n    j.statusen as \"statusEn\",\n    j.statusar as \"statusAr\",\n    j.transkinden as \"transkindEn\",\n    j.transkindar as \"transkindAr\",\n    j.date as date,\n    j.configid,\n    j.itemid,\n    j.inventsizeid,\n    j.batchno,\n    sum(j.qtyin) as \"qtyIn\",\n    sum(j.qtyout) as \"qtyOut\",\n    j.inventlocationid,\n    j.warehousenamear as \"wareHouseNameAr\",\n    j.warehousenameen as \"wareHouseNameEn\",\n    j.itemnamear as \"itemNameAr\",\n    j.itemnameen as \"itemNameEn\",\n    j.sizenameen as \"sizeNameEn\",\n    j.sizenamear as \"sizeNameAr\"\n    from\n       (\n         select \n        i.invoiceid,\n        st.transkind as transtype,\n        als.en as statusen,\n        als.ar as statusar,\n        alt.en as transkinden,\n        alt.ar as transkindar,\n        to_char(i.dateinvent, 'YYYY-MM-DD') as date,\n        sz.description as sizenameen,\n        sz.\"name\"  as sizenamear,\n        i.configid,\n        i.itemid,\n        i.inventsizeid,\n        i.batchno,\n        case when qty>0 then abs(qty) else 0 end as qtyin,\n        case when qty<0 then abs(qty) else 0 end as qtyout,\n        i.inventlocationid as inventlocationid,\n        w.name as warehousenamear,\n        w.namealias as warehousenameen,\n        p.itemname as itemnamear,\n        p.namealias as itemnameen\n        from inventtrans i \n        left join inventsize sz on sz.inventsizeid  = i.inventsizeid and sz.itemid = i.itemid\n        left join inventlocation w on w.inventlocationid=i.inventlocationid\n        left join salestable st on st.salesid = i.invoiceid\n        left join inventtable p on p.itemid = i.itemid\n        left join app_lang als on als.id = st.status\n        left join app_lang alt on alt.id = st.transkind\n        where dateinvent >= '" + fromDate + "' ::timestamp and \n        dateinvent < ('" + toDate + "' ::timestamp + '1 day'::interval) and transactionclosed = true and i.itemid not like 'HSN-%' ";
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
                        if (params.color) {
                            query += " and  i.configid = '" + params.color + "' ";
                        }
                        if (params.product) {
                            query += " and  i.itemid = '" + params.product + "' ";
                        }
                        if (params.transType && params.transType != "ALL") {
                            query += " and  st.transkind = '" + params.transType + "' ";
                        }
                        if (params.batchno) {
                            query += " and  i.batchno = '" + params.batchno + "' ";
                        }
                        if (params.inventsizeid) {
                            query += " and  i.inventsizeid = '" + params.inventsizeid + "' ";
                        }
                        query = query + " and i.reserve_status!='RESERVED' ";
                        query += " ) as j group by \n    j.invoiceid,\n    j.transtype,\n    j.statusen,\n    j.statusar,\n    j.transkinden,\n    j.transkindar,\n    j.date,\n    j.configid,\n    j.itemid,\n    j.inventsizeid,\n    j.batchno,\n    j.inventlocationid,\n    j.warehousenamear,\n    j.wareHousenameen,\n    j.itemnamear,\n    j.itemnameen,\n    j.sizenameen,\n    j.sizenamear\n    order by j.date, j.itemid, j.invoiceid\n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return itemTransactionsReport;
}());
exports.itemTransactionsReport = itemTransactionsReport;
