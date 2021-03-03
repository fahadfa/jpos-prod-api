"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Props_1 = require("../../constants/Props");
var moment = require("moment");
var SalesAmountByProductReport = /** @class */ (function () {
    function SalesAmountByProductReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    /**
     * data structure.
     {
        headers: {},
        data:[
          {
            salesgroup: {},
            salesdata: []
          }
        ]
      }
     * @param params
     */
    SalesAmountByProductReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var result_1, data, sNo_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (params && (!params.itemid && (params.configid || params.inventsizeid))) {
                            throw { message: Props_1.Props.SELECT_ITEM_ID };
                        }
                        result_1 = params;
                        return [4 /*yield*/, this.salesData(params)];
                    case 1:
                        data = _a.sent();
                        sNo_1 = 1;
                        result_1.total = 0;
                        data.map(function (i) {
                            i.sNo = sNo_1++;
                            result_1.total += parseFloat(i.lineAmount);
                        });
                        result_1.data = data;
                        return [2 /*return*/, result_1];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SalesAmountByProductReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var oldData, lines, commonparams, title, renderData, grandTotal, output, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldData = result;
                        lines = result.data;
                        delete result.data;
                        commonparams = result;
                        commonparams.printDate = new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, "");
                        return [4 /*yield*/, this.rawQuery.getAppLangName("SALES_AMOUNT_BY_PRODUCT")];
                    case 1:
                        title = _a.sent();
                        if (title) {
                            commonparams.title = title;
                        }
                        ;
                        renderData = [];
                        grandTotal = 0;
                        return [4 /*yield*/, this.chunkArray(lines, 10)];
                    case 2:
                        lines = _a.sent();
                        lines.forEach(function (element) {
                            var data = __assign({}, commonparams);
                            data.linesTotal = 0;
                            data.data = element;
                            element.forEach(function (element) {
                                data.linesTotal += parseFloat(element.lineAmount);
                            });
                            grandTotal += data.linesTotal;
                            renderData.push(data);
                        });
                        output = { grandTotal: grandTotal, data: renderData };
                        console.log(output);
                        file = params.lang == "en" ? "salesamountbyproduct-en" : "salesamountbyproduct-ar";
                        try {
                            return [2 /*return*/, App_1.App.HtmlRender(file, output)];
                        }
                        catch (error) {
                            throw error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SalesAmountByProductReport.prototype.chunkArray = function (myArray, chunk_size) {
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
    SalesAmountByProductReport.prototype.salesData = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var fDate, tDate, fromDate, toDate, sql, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fDate = new Date(params.fromDate);
                        fDate.setHours(0, 0, 0);
                        tDate = new Date(params.toDate);
                        tDate.setHours(0, 0, 0);
                        fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                        sql = "\n    select s.itemid, b.itemname as prodnamear, b.namealias as prodnameen,\n    s.configid , c.name as colNameAr,c.name as colNameEn,\n    s.inventsizeid , size.description as sizeNameEn,size.name as sizeNameAr,\n    to_char (sum(s.lineamount)::float, 'FM999999990.00') as \"lineAmount\"\n    from salestable st left join\n    salesline s on st.salesid =s.salesid \n    left join inventtable b on s.itemid=b.itemid\n                    left join inventsize size on size.itemid =s.itemid and size.inventsizeid = s.inventsizeid\n                    left join configtable c on c.configid = s.configid and c.itemid = s.itemid\n    where st.transkind ='SALESORDER' \n    and st.lastmodifieddate between '" + fromDate + "'::timestamp and ('" + toDate + "'::timestamp + '1 day'::interval)\n    ";
                        if (params.itemid) {
                            sql = sql + ("  and s.itemid ='" + params.itemid + "'");
                        }
                        if (params.configid) {
                            sql = sql + (" and s.configid ='" + params.configid + "' ");
                        }
                        if (params.inventsizeid) {
                            sql = sql + ("  and s.inventsizeid ='" + params.inventsizeid + "' ");
                        }
                        if (params.inventlocationid) {
                            sql = sql + ("and st.inventlocationid = '" + params.inventlocationid + "'");
                        }
                        sql = sql + " group by s.itemid,s.configid ,s.inventsizeid,b.itemname, b.namealias,c.name,size.description,size.\"name\" \n    order by s.itemid,s.configid ,s.inventsizeid ;  ";
                        console.log(sql);
                        return [4 /*yield*/, this.db.query(sql)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    return SalesAmountByProductReport;
}());
exports.SalesAmountByProductReport = SalesAmountByProductReport;
