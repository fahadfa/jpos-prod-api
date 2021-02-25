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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var App_1 = require("../../utils/App");
var SalesTableService_1 = require("../services/SalesTableService");
var RawQuery_1 = require("../common/RawQuery");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
var WorkflowService_1 = require("../services/WorkflowService");
var typeorm_2 = require("typeorm");
var uuid_1 = __importDefault(require("uuid"));
var UnSyncedTransactions_1 = require("../../entities/UnSyncedTransactions");
var MovementReport = /** @class */ (function () {
    function MovementReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.workflowService = new WorkflowService_1.WorkflowService();
    }
    MovementReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, id, unSyncedData_1, status_1, data_1, salesLine, linesCount, date, query, salesLineQuery, voucherData, query_1, inventtransQuery, inventtransHsnQuery, lineids, inventtransids, error_1;
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
                        _a.trys.push([3, 17, 19, 21]);
                        id = params.salesId;
                        unSyncedData_1 = [];
                        return [4 /*yield*/, this.query_to_data(id)];
                    case 4:
                        data_1 = _a.sent();
                        data_1 = data_1.length > 0 ? data_1[0] : {};
                        data_1.originalPrinted = data_1.originalPrinted ? data_1.originalPrinted : false;
                        return [4 /*yield*/, this.salesline_query_to_data(id)];
                    case 5:
                        salesLine = _a.sent();
                        salesLine.map(function (v) {
                            v.salesQty = parseInt(v.salesQty);
                        });
                        // salesLine = salesLine.length > 0 ? salesLine : [];
                        data_1.salesLine = salesLine;
                        data_1.quantity = 0;
                        data_1.salesLine.map(function (v) {
                            data_1.quantity += parseInt(v.salesQty);
                        });
                        if (!(data_1.status != "POSTED")) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.db.query(" select count(1) as apptype from salesline where salesid in ('" + params.salesId + "')")];
                    case 6:
                        linesCount = _a.sent();
                        linesCount = linesCount.length > 0 ? linesCount[0].apptype : 0;
                        date = new Date().toISOString();
                        query = "UPDATE salestable SET originalprinted = '" + true + "', status = 'POSTED', apptype=" + linesCount + " ";
                        if (date) {
                            query += ",lastmodifieddate = '" + date + "' ";
                        }
                        query += " WHERE salesid = '" + params.salesId.toUpperCase() + "'";
                        return [4 /*yield*/, queryRunner.query(query)];
                    case 7:
                        _a.sent();
                        salesLineQuery = " UPDATE salesline SET \n        status = 'POSTED',\n        lastmodifieddate = '" + date + "' \n        WHERE salesid = '" + params.salesId + "' ";
                        queryRunner.query(salesLineQuery);
                        if (!data_1.voucherDiscChecked) return [3 /*break*/, 9];
                        voucherData = {
                            salesId: data_1.salesId,
                            voucherNum: data_1.voucherNum,
                            custAccount: data_1.invoiceAccount,
                        };
                        query_1 = "\n          UPDATE discountvoucher\n          SET  salesid='" + voucherData.salesId + "',\n          is_used=0, \n          used_numbers=used_numbers+1\n          WHERE voucher_num='" + voucherData.voucherNum + "';\n          ";
                        return [4 /*yield*/, queryRunner.query(query_1)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        inventtransQuery = "UPDATE inventtrans SET transactionclosed = " + true + ", reserve_status = 'POSTED' ";
                        if (date) {
                            inventtransQuery += ",dateinvent = '" + date + "' ";
                        }
                        inventtransQuery += " WHERE invoiceid = '" + params.salesId.toUpperCase() + "' and itemid!='HSN-00001'";
                        return [4 /*yield*/, queryRunner.query(inventtransQuery)];
                    case 10:
                        _a.sent();
                        inventtransHsnQuery = "UPDATE inventtrans SET transactionclosed = " + false + ", reserve_status = 'POSTED' ";
                        if (date) {
                            inventtransHsnQuery += ",dateinvent = '" + date + "' ";
                        }
                        inventtransHsnQuery += " WHERE invoiceid = '" + params.salesId.toUpperCase() + "' and itemid='HSN-00001'";
                        return [4 /*yield*/, queryRunner.query(inventtransHsnQuery)];
                    case 11:
                        _a.sent();
                        unSyncedData_1.push({
                            id: uuid_1.default(),
                            transactionId: params.salesId,
                            transactionTable: "salestable",
                            updatedOn: new Date(),
                        });
                        return [4 /*yield*/, this.db.query("select id from salesline where salesid = '" + params.salesId + "'")];
                    case 12:
                        lineids = _a.sent();
                        return [4 /*yield*/, this.db.query("select id from inventtrans where invoiceid = '" + params.salesId + "'")];
                    case 13:
                        inventtransids = _a.sent();
                        lineids.map(function (v) {
                            unSyncedData_1.push({
                                id: uuid_1.default(),
                                transactionId: v.id,
                                transactionTable: "salesline",
                                updatedOn: new Date(),
                            });
                        });
                        inventtransids.map(function (v) {
                            unSyncedData_1.push({
                                id: uuid_1.default(),
                                transactionId: v.id,
                                transactionTable: "inventtrans",
                                updatedOn: new Date(),
                            });
                        });
                        return [4 /*yield*/, queryRunner.manager.getRepository(UnSyncedTransactions_1.UnSyncedTransactions).save(unSyncedData_1)];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 16:
                        _a.sent();
                        return [2 /*return*/, data_1];
                    case 17:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 18:
                        _a.sent();
                        throw error_1;
                    case 19: return [4 /*yield*/, queryRunner.release()];
                    case 20:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    MovementReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                // console.log(result.salesLine[0].product.nameEnglish);
                renderData = result;
                console.log(params.lang);
                file = params.lang == "en" ? "mo-en" : "mo-ar";
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
    MovementReport.prototype.groupBy = function (array, f) {
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
    MovementReport.prototype.query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            st.salesid as \"salesId\",\n            st.custaccount as \"custAccount\",\n            st.status as status,\n            st.transkind as transkind,\n            als.en as \"statusEn\",\n            als.ar as \"statusAr\",\n            alt.en as \"transkindEn\",\n            alt.ar as \"transkindAr\",\n            st.vatamount as vatamount,\n            st.netamount as \"netAmount\",\n            st.disc as disc,\n            st.salesname as \"salesName\",\n            st.is_movement_in as \"isMovementIn\",\n            st.createdby as createdby,\n            st.amount as amount,\n            to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n            st.originalprinted as \"originalPrinted\",\n            st.inventlocationid as \"inventLocationId\",\n            st.description as notes,\n            w.namealias as wnamealias,\n            w.name as wname,\n            st.voucherdiscchecked as \"voucherDiscChecked\",\n            st.vouchernum as \"voucherNum\",\n            st.invoiceaccount as \"invoiceAccount\",\n            mt.movementtype as \"movementType\",\n            mt.movementarabic as \"movementTypeAr\"\n            from salestable st \n            left join inventlocation w on w.inventlocationid = st.inventlocationid\n            left join movementtype mt on mt.id = st.movement_type_id\n            left join app_lang als on als.id = st.status\n            left join app_lang alt on alt.id = st.transkind\n            where salesid='" + id + "'\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MovementReport.prototype.salesline_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n    select\n    distinct\n    ROW_NUMBER()  OVER (ORDER BY  ln.salesid) As \"sNo\",\n    ln.salesid,\n    ln.itemid,\n    ln.batchno,\n    ln.configid,\n    ln.inventsizeid,\n    ln.salesqty as \"salesQty\",\n    to_char(ln.salesprice, 'FFM999999999990.00') as salesprice,\n    to_char(ln.vatamount, 'FFM999999999990.00') as \"vatAmount\",\n    to_char(ln.linetotaldisc, 'FFM999999999990.00') as \"lineTotalDisc\",\n    to_char(ln.colorantprice, 'FFM999999999990.00') as colorantprice,\n    to_char(((ln.salesqty * (ln.salesprice + ln.colorantprice)) \n    + (ln.salesqty * ln.vatamount) - (ln.salesqty * ln.linetotaldisc)) \n    ,'FFM999999999990.00') as \"lineAmount\",\n    ln.prodnamear as \"prodNameAr\",\n    ln.prodnameen as \"prodNameEn\",\n    ln.colNameAr as \"colNameAr\",\n    ln.colNameEn as \"colNameEn\",\n    ln.sizeNameEn as \"sizeNameEn\",\n    ln.sizeNameAr as \"sizeNameAr\",\n    ln.colorantid as colorant\n    from\n    (\n        select\n        distinct on (i.id, i.invoiceid, i.itemid, i.configid, i.inventsizeid, i.batchno, i.qty, i.sales_line_id)\n        i.invoiceid as salesid,\n        i.batchno,\n        i.itemid,\n        i.configid,\n        i.inventsizeid,\n        st.status as status,\n        i.qty as salesqty,\n        b.itemname as prodnamear,\n        b.namealias as prodnameen,\n        coalesce(sl.salesprice, 0)  as salesprice,\n        coalesce(sl.vatamount, 0)  as vatamount,\n        coalesce(sl.linetotaldisc, 0) as linetotaldisc,\n        coalesce(sl.colorantprice,0) as colorantprice,\n        c.name as colNameAr,\n        c.name as colNameEn,\n        s.description as sizeNameEn,\n        s.name as sizeNameAr,\n        sl.colorantid as  colorantid,\n        sl.linenum\n        from inventtrans i\n        left join salestable st on st.salesid = i.invoiceid\n        left join salesline sl on sl.id = i.sales_line_id\n        left join inventtable b on i.itemid=b.itemid\n        left join inventsize s on s.itemid = i.itemid and i.inventsizeid = s.inventsizeid\n        left join configtable c on c.configid = i.configid and c.itemid = i.itemid\n    where invoiceid='" + id + "'\n    ) as ln\n    ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MovementReport;
}());
exports.MovementReport = MovementReport;
