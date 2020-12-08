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
var InventTransDAO_1 = require("../repos/InventTransDAO");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var typeorm_2 = require("typeorm");
var PurchaseReturnReport = /** @class */ (function () {
    function PurchaseReturnReport() {
        this.db = typeorm_1.getManager();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
    }
    PurchaseReturnReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, data, batches, result, new_data_1, batches_2, _i, batches_1, item, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 12, 14, 16]);
                        return [4 /*yield*/, this.query_to_data(params)];
                    case 4:
                        data = _a.sent();
                        data[0].originalPrinted = data[0].originalPrinted == null ? false : data[0].originalPrinted;
                        data[0].vatAmount = Math.round(parseFloat((data[0].vatAmount * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                        data[0].ReturnDate = new Date(data[0].ReturnDate).toLocaleDateString();
                        if (data[0].originalPrinted) {
                            data[0].isCopy = true;
                        }
                        else {
                            data[0].isCopy = false;
                        }
                        return [4 /*yield*/, this.batches_query_to_data(params)];
                    case 5:
                        batches = _a.sent();
                        result = this.groupBy(batches, function (item) {
                            return [item.itemid, item.batchno, item.configid, item.inventsizeid];
                        });
                        new_data_1 = [];
                        result.forEach(function (groupitem) {
                            var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.qty); }, 0);
                            if (qty > 0) {
                                groupitem[0].qty = Math.abs(qty);
                                groupitem[0].returnQuantity = 0;
                                new_data_1.push(__assign({}, groupitem[0]));
                            }
                        });
                        // let i = 1;
                        // new_data.forEach((element: any) => {
                        //     element.sNo = i;
                        //     i++;
                        // });
                        data[0].batches = new_data_1;
                        this.rawQuery.updateSalesTable(params.salesId.toUpperCase(), "POSTED");
                        this.db.query(" update inventtrans set transactionclosed = true where invoiceid='" + params.salesId + "'");
                        if (!!data.isCopy) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.inventTransDAO.findAll({ invoiceid: params.salesId })];
                    case 6:
                        batches_2 = _a.sent();
                        _i = 0, batches_1 = batches_2;
                        _a.label = 7;
                    case 7:
                        if (!(_i < batches_1.length)) return [3 /*break*/, 10];
                        item = batches_1[_i];
                        item.transactionClosed = true;
                        // this.inventTransDAO.save(item);
                        return [4 /*yield*/, this.updateInventoryService.updateInventtransTable(item, false, true, queryRunner)];
                    case 8:
                        // this.inventTransDAO.save(item);
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 7];
                    case 10: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/, data[0]];
                    case 12:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 13:
                        _a.sent();
                        throw error_1;
                    case 14: return [4 /*yield*/, queryRunner.release()];
                    case 15:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    PurchaseReturnReport.prototype.groupBy = function (array, f) {
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
    PurchaseReturnReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                renderData = result;
                file = params.lang == "en" ? "pr-en" : "pr-ar";
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
    PurchaseReturnReport.prototype.query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n                distinct\n                s.salesid as \"salesId\",\n                s.inventlocationid as \"fromWareHouse\",\n                s.custaccount as \"custaccount\",\n                s.createddatetime as \"ReturnDate\",\n                s.lastmodifieddate as \"lastModifiedDate\",\n                s.status as status,\n                als.en as \"statusEn\",\n                als.ar as \"statusAr\",\n                alt.en as \"transkindEn\",\n                alt.ar as \"transkindAr\",\n                s.disc as discount,\n                v.name as name,\n                v.namealias as \"nameAlias\",\n                v.phone as phone,\n                s.amount as \"netAmount\",\n                s.netamount as \"grossAmount\",\n                s.vatamount as \"vatAmount\",\n                s.originalprinted as \"originalPrinted\",\n                s.createdby as \"createdBy\",\n                s.intercompanyoriginalsalesid as \"purchaseOrderId\",\n                w.name as \"wareHouseNameAr\",\n                w.namealias as \"wareHouseNameEn\"\n                from salestable s\n                left join inventlocation w on w.inventlocationid=s.inventlocationid\n                left join vendortable v on v.accountnum=s.custaccount\n                left join app_lang als on als.id = s.status\n                left join app_lang alt on alt.id = s.transkind\n            where s.transkind = 'PURCHASERETURN' and s.salesid = '" + params.salesId + "' limit 1\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PurchaseReturnReport.prototype.batches_query_to_data = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var batchesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batchesQuery = "select \n            ROW_NUMBER()  OVER (ORDER BY  invoiceid) As \"sNo\",\n            i.itemid as itemid,\n            bs.namealias as nameEn,\n            bs.itemname as nameAr,\n            to_char(ABS(i.qty), 'FM999,999,999,999D') as qty,\n            i.configid as configid,\n            i.inventsizeid as inventsizeid,\n            i.invoiceid as invoiceid,\n            i.transrefid as transrefid,\n            s.description as sizenameen,\n            s.name as sizenamear,\n            i.batchno as batchno,\n            b.expdate as batchExpDate,\n            cast((select salesprice from salesline sl where sl.salesid=i.invoiceid and sl.itemid = i.itemid and sl.configid=i.configid and sl.inventsizeid=i.inventsizeid) as decimal(10,2)) as price,\n            cast((select lineamount from salesline sl where sl.salesid=i.invoiceid and sl.itemid = i.itemid and sl.configid=i.configid and sl.inventsizeid=i.inventsizeid) as decimal(10,2)) as \"lineAmount\",\n            cast((select vatamount from salesline sl where sl.salesid=i.invoiceid and sl.itemid = i.itemid and sl.configid=i.configid and sl.inventsizeid=i.inventsizeid) as decimal(10,2)) as \"vatAmount\"\n        from inventtrans  i\n        left join inventbatch b on i.batchno = b.inventbatchid\n        left join inventtable bs on i.itemid = bs.itemid\n        left join inventsize s on s.inventsizeid = i.inventsizeid and s.itemid = i.itemid\n        where  ((reserve_status!='UNRESERVED' AND reserve_status != 'SAVED') or reserve_status is null)  and i.invoiceid = '" + params.salesId + "'";
                        return [4 /*yield*/, this.db.query(batchesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PurchaseReturnReport;
}());
exports.PurchaseReturnReport = PurchaseReturnReport;
