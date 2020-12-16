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
var CashBankReceiptsReport = /** @class */ (function () {
    function CashBankReceiptsReport() {
        this.db = typeorm_1.getManager();
    }
    CashBankReceiptsReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data, resData, query, type, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            v.amount = parseFloat(v.amount);
                        });
                        resData = {};
                        query = "select en, ar from app_lang ";
                        if (params.receiptType == 'cash') {
                            query += " where id = 'CASH_COLLECTION_REPORT' ";
                        }
                        else if (params.receiptType == 'bank') {
                            query += " where id = 'BANK_COLLECTION_REPORT' ";
                        }
                        else {
                            query += " where id = 'RECEIPTS_COLLECTION_REPORT' ";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        type = _a.sent();
                        type = type && type.length > 0 ? type[0] : {};
                        resData.typeEn = type.en;
                        resData.typeAr = type.ar;
                        resData.data = data;
                        return [2 /*return*/, resData];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CashBankReceiptsReport.prototype.warehouseName = function (param) {
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
    CashBankReceiptsReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                result.printDate = new Date().toLocaleString();
                result.fromDate = params.fromDate;
                result.toDate = params.toDate;
                result.user = params.user;
                // renderData.total = 0;
                (result.printDate = new Date(params.printDate)
                    .toISOString()
                    .replace(/T/, " ") // replace T with a space
                    .replace(/\..+/, "")),
                    console.log(params.lang);
                console.log(result);
                if (params.type == "excel") {
                    file = params.lang == "en" ? "cash-bank-excel" : "cash-bank-excel-ar";
                }
                else {
                    file = params.lang == "en" ? "cash-bank-report" : "cash-bank-report-ar";
                }
                try {
                    return [2 /*return*/, App_1.App.HtmlRender(file, result)];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    CashBankReceiptsReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query, fDate, tDate, fromDate, toDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = " \n      select \n      jt.journalnum as journalnum,\n      jt.accountnum as custaccount,\n      concat(jt.accountnum, ' : ',  jt.namearabic) as customer,\n      j.description as remarks,\n      to_char(j.lastmodifieddate, 'DD-MM-YYYY') as date,\n      to_char(jt.amountcurcredit , 'FM999999999990.00') as amount,\n      j.log as type,\n      al.en as \"typeEn\",\n      al.ar as \"typeAr\",\n      j.name as \"warehouse\",\n      w.name as \"wareHouseNameAr\",\n      w.namealias as \"wareHouseNameEn\"\n      from ledgerjournaltrans jt \n      inner join ledgerjournaltable j on j.journalnum = jt.journalnum\n      left join inventlocation w on w.inventlocationid=j.name\n      left join app_lang al on al.id = j.log\n      where jt.accounttype = 1\n    ";
                        if (params.fromDate && params.toDate) {
                            fDate = new Date(params.fromDate);
                            fDate.setHours(0, 0, 0);
                            tDate = new Date(params.toDate);
                            tDate.setHours(0, 0, 0);
                            fromDate = App_1.App.convertUTCDateToLocalDate(fDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                            toDate = App_1.App.convertUTCDateToLocalDate(tDate, params.timeZoneOffSet ? params.timeZoneOffSet : 0);
                            query += "and j.lastmodifieddate >= '" + fromDate + "' ::timestamp\n      AND  j.lastmodifieddate < ('" + toDate + "' ::timestamp + '1 day'::interval) ";
                        }
                        if (params.receiptType && params.receiptType != "ALL") {
                            query += " and j.log = '" + params.receiptType + "' ";
                        }
                        if (params.inventlocationid && params.inventlocationid != "ALL") {
                            query += " and j.name = '" + params.inventlocationid + "' ";
                        }
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CashBankReceiptsReport;
}());
exports.CashBankReceiptsReport = CashBankReceiptsReport;
