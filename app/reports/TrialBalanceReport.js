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
var TrialBalanceReport = /** @class */ (function () {
    function TrialBalanceReport() {
        this.db = typeorm_1.getManager();
    }
    TrialBalanceReport.prototype.execute = function (params) {
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
    TrialBalanceReport.prototype.warehouseName = function (param) {
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
    TrialBalanceReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                renderData = {
                    printDate: new Date(params.printDate).toISOString().replace(/T/, " ").replace(/\..+/, ""),
                    fromDate: params.fromDate,
                    toDate: params.toDate,
                    status: params.status,
                    user: params.user,
                };
                // console.log(result.salesLine[0].product.nameEnglish);
                renderData.data = result;
                console.log(renderData);
                if (params.type == "excel") {
                    file = params.lang == "en" ? "trialbalance-excel" : "trialbalance-excel-ar";
                }
                else {
                    file = params.lang == "en" ? "trialbalance-report" : "trialbalance-report-ar";
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
    TrialBalanceReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            i.accountnum as \"accountNum\",\n            i.namear as \"nameAr\",\n            i.nameen as \"nameEn\",\n            i.openingbal as \"openingBal\",\n            to_char(i.debit, 'FM999999990.00') as debit,\n            to_char(i.credit, 'FM999999990.00') as credit,\n            to_char(i.closingbal, 'FM999999990.00') as \"closingBal\" from(\n            SELECT * FROM (SELECT a.accountnum AS \"accountnum\", \n                a.accountnamealias AS \"nameen\", \n                a.accountname AS \"namear\", \n                0.00 as \"openingbal\",\n                coalesce((SELECT sum(amountcurdebit) FROM ledgerjournaltrans\n                WHERE to_char(lj.transdate, 'yyyy-MM-dd') >= '" + params.fromDate + "' \n                AND to_char(lj.transdate, 'yyyy-MM-dd') <= '" + params.toDate + "'), 0) AS debit,\n                coalesce((SELECT sum(amountcurcredit) FROM ledgerjournaltrans \n                WHERE to_char(lj.transdate, 'yyyy-MM-dd') >= '" + params.fromDate + "' \n                AND to_char(lj.transdate, 'yyyy-MM-dd') <= '" + params.toDate + "'), 0) AS credit,\n                coalesce((SELECT sum(coalesce((SELECT sum(amountcurdebit) FROM ledgerjournaltrans \n                WHERE to_char(lj.transdate, 'yyyy-MM-dd') >= '" + params.fromDate + "' AND\n                to_char(lj.transdate, 'yyyy-MM-dd') <= '" + params.toDate + "'), 0)-coalesce((SELECT sum(amountcurcredit)FROM ledgerjournaltrans \n                WHERE to_char(lj.transdate, 'yyyy-MM-dd') >= '" + params.fromDate + "'\n                AND to_char(lj.transdate, 'yyyy-MM-dd') <= '" + params.toDate + "'), 0))), 0) AS \"closingbal\"\n                FROM ledgerjournaltrans lj, accountstable a\n                WHERE a.accountpltype=1 AND a.accountnum=lj.accountnum\n            GROUP BY a.accountnum, a.accountnamealias, a.accountname, lj.transdate) t\n                WHERE debit <> 0 OR credit <>0 OR closingbal <>0\n                ) as i";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TrialBalanceReport;
}());
exports.TrialBalanceReport = TrialBalanceReport;
