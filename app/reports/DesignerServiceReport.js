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
var Designerservice_1 = require("../../entities/Designerservice");
var DesignerserviceRepository_1 = require("../repos/DesignerserviceRepository");
var UnSyncedTransactions_1 = require("../../entities/UnSyncedTransactions");
var uuid_1 = __importDefault(require("uuid"));
var DesignerServiceReport = /** @class */ (function () {
    function DesignerServiceReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
        this.designerServiceDAO = new DesignerserviceRepository_1.DesignerserviceRepository();
    }
    DesignerServiceReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, id, unSyncedData_1, status_1, data_1, date, linesCount, status_2, statusQuery, saleslineStatusQuery, lineids, inventtransids, desinerService, amount, designerServiceData, salesLine, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_1.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 15, 17, 19]);
                        id = params.salesId;
                        unSyncedData_1 = [];
                        return [4 /*yield*/, this.salestable_query_to_data(id)];
                    case 4:
                        data_1 = _a.sent();
                        data_1 = data_1.length >= 1 ? data_1[0] : {};
                        data_1.originalPrinted = data_1.originalPrinted ? data_1.originalPrinted : false;
                        if (!(data_1.originalPrinted == false && (data_1.status != "PAID" || data_1.status != "POSTED"))) return [3 /*break*/, 12];
                        date = new Date().toISOString();
                        return [4 /*yield*/, this.db.query(" select count(1) as apptype from salesline where salesid in ('" + params.salesId + "')")];
                    case 5:
                        linesCount = _a.sent();
                        linesCount = linesCount.length > 0 ? linesCount[0].apptype : 0;
                        status_2 = data_1.transkind == "DESIGNERSERSERVICE" ? "PAID" : "POSTED";
                        statusQuery = "UPDATE salestable SET \n                          originalprinted = 'true',\n                          apptype = " + linesCount + ",\n                          status = '" + status_2 + "',\n                          lastmodifieddate = '" + date + "' \n                          WHERE salesid = '" + params.salesId + "' ";
                        saleslineStatusQuery = "UPDATE salesline SET\n                          status = '" + status_2 + "',\n                          lastmodifieddate = '" + date + "' \n                          WHERE salesid = '" + params.salesId + "' ";
                        unSyncedData_1.push({
                            id: uuid_1.default(),
                            transactionId: params.salesId,
                            transactionTable: "salestable",
                            updatedOn: new Date(),
                        });
                        return [4 /*yield*/, this.db.query("select id from salesline where salesid = '" + params.salesId + "'")];
                    case 6:
                        lineids = _a.sent();
                        return [4 /*yield*/, this.db.query("select id from inventtrans where invoiceid = '" + params.salesId + "'")];
                    case 7:
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
                    case 8:
                        _a.sent();
                        queryRunner.query(statusQuery);
                        queryRunner.query(saleslineStatusQuery);
                        if (!(data_1.transkind == "DESIGNERSERVICERETURN")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.designerServiceDAO.search({
                                invoiceid: data_1.interCompanyOriginalSalesId,
                            })];
                    case 9:
                        desinerService = _a.sent();
                        console.log(desinerService, data_1.interCompanyOriginalSalesId);
                        amount = desinerService.reduce(function (res, item) { return res + parseFloat(item.amount); }, 0);
                        console.log("=========================amount===================", amount, data_1.netAmount);
                        if (!(amount >= data_1.netAmount)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.designerServiceDAO.findOne({
                                invoiceid: data_1.interCompanyOriginalSalesId,
                            })];
                    case 10:
                        designerServiceData = _a.sent();
                        delete designerServiceData.serviceid;
                        designerServiceData.recordtype = 0;
                        designerServiceData.amount = -data_1.netAmount;
                        designerServiceData.salesorderid = data_1.salesId;
                        designerServiceData.invoiceid = data_1.interCompanyOriginalSalesId;
                        designerServiceData.createddatetime = App_1.App.DateNow();
                        designerServiceData.lastmodifieddate = App_1.App.DateNow();
                        designerServiceData.lastmodifiedby = data_1.lastModifiedBy;
                        // await this.designerServiceDAO.save(designerServiceData);
                        queryRunner.manager.getRepository(Designerservice_1.Designerservice).save(designerServiceData);
                        return [3 /*break*/, 12];
                    case 11: throw { message: "CANNOT_PRINT_ORDER" };
                    case 12: return [4 /*yield*/, this.salesline_query_to_data(id)];
                    case 13:
                        salesLine = _a.sent();
                        // salesLine = salesLine.length > 0 ? salesLine : [];
                        data_1.salesLine = salesLine;
                        data_1.quantity = 0;
                        data_1.salesLine.map(function (v) {
                            data_1.quantity += parseInt(v.salesQty);
                        });
                        data_1.vat = data_1.salesLine.length > 0 ? parseInt(data_1.salesLine[0].vat) : "-";
                        console.log(data_1);
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 14:
                        _a.sent();
                        return [2 /*return*/, data_1];
                    case 15:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 16:
                        _a.sent();
                        throw error_1;
                    case 17: return [4 /*yield*/, queryRunner.release()];
                    case 18:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    DesignerServiceReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, title, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderData = result;
                        return [4 /*yield*/, this.rawQuery.getAppLangName("DESIGNER_SERVICE_REPORT")];
                    case 1:
                        title = _a.sent();
                        if (title) {
                            renderData.title = title;
                            console.table(title);
                        }
                        file = params.lang == "en" ? "designer-service-en" : "designer-service-ar";
                        renderData.user = params.user ? params.user : "";
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
    DesignerServiceReport.prototype.salestable_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    select \n    st.salesid as \"salesId\",\n    st.invoiceaccount as \"custAccount\",\n    st.intercompanyoriginalsalesid as \"interCompanyOriginalSalesId\",\n    st.status as status,\n    als.en as \"statusEn\",\n    als.ar as \"statusAr\",\n    alt.en as \"transkindEn\",\n    alt.ar as \"transkindAr\",\n    st.transkind as transkind,\n    to_char(st.vatamount, 'FM999999999990.00')  as vatamount,\n    to_char(st.netamount, 'FM999999999990.00')  as \"netAmount\",\n    to_char(coalesce(st.disc, 0), 'FM999999999990.00')  as disc,\n    to_char(st.amount , 'FM999999999990.00') as amount,\n    st.salesname as cname,\n    st.salesname as \"cnamealias\",\n    st.mobileno as \"cphone\",\n    to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n    st.originalprinted as \"originalPrinted\",\n    st.inventlocationid as \"inventLocationId\",\n    st.lastmodifiedby as \"lastModifiedBy\",\n    w.namealias as wnamealias,\n    w.name as wname,\n    coalesce(st.deliveryaddress, ' ') || (' ') || coalesce(st.citycode, ' ') || (' ') || coalesce(st.districtcode, ' ') || (' ') || coalesce(st.country_code, ' ') as deliveryaddress,\n    d.\"name\" as salesman,\n    to_char(st.deliverydate, 'DD-MM-YYYY') as \"deliveryDate\"\n    from salestable st \n    left join inventlocation w on w.inventlocationid = st.inventlocationid\n    left join custtable c on c.accountnum = st.invoiceaccount\n    left join dimensions d on d.num = st.dimension6_\n    left join app_lang als on als.id = st.status\n    left join app_lang alt on alt.id = st.transkind\n    where salesid='" + id + "'\n    ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DesignerServiceReport.prototype.salesline_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n            select\n            ROW_NUMBER()  OVER (ORDER BY  ln.salesid) As \"sNo\",\n            ln.itemid as itemid,\n            cast(ln.salesqty as INTEGER) as \"salesQty\",\n            ln.configid as configid,\n            to_char(ln.salesprice , 'FM999,999,999,990D00') as salesprice,\n            to_char(ln.linetotaldisc , 'FM999,999,999,990D00') as \"lineTotalDisc\",\n            to_char(ln.vat , 'FM999,999,999,990D00') as vat,\n            to_char(ln.vatamount, 'FM999,999,990d00') as \"vatAmount\",\n            to_char(ln.salesprice- ln.linetotaldisc +ln.vatamount, 'FM999,999,999,990D00') as \"lineAmount\",\n            to_char(ln.salesprice- ln.linetotaldisc, 'FM999,999,999,990D00') as \"lineAmountBeforeVat\",\n            ln.inventsizeid as inventsizeid\n            from salesline ln\n            left join designer_products dp on dp.code = ln.itemid\n            where ln.salesid='" + id + "'\n            ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return DesignerServiceReport;
}());
exports.DesignerServiceReport = DesignerServiceReport;
