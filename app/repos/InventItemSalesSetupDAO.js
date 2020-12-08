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
var InventItemSalesSetup_1 = require("../../entities/InventItemSalesSetup");
var typeorm_1 = require("typeorm");
var InventItemSalesSetupDAO = /** @class */ (function () {
    function InventItemSalesSetupDAO() {
        this.dao = typeorm_1.getRepository(InventItemSalesSetup_1.InventItemSalesSetup);
    }
    InventItemSalesSetupDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventItemSalesSetupDAO.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventItemSalesSetupDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.remove([data])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventItemSalesSetupDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne({
                            where: data,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InventItemSalesSetupDAO.prototype.find = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select sl.producten,sl.productar,\n      sl.configid,sl.configid  as color,sl.stock ,sl.inventsizeid, \n      sl.amount,iiss.*,sl.amount\n      from invent_item_sales_setup iiss \n      inner join \n      (select coalesce(sum((sl.lineamount - sl.linetotaldisc * sl.salesqty) + (sl.colorantprice * sl.salesqty) + sl.vatamount ) ,0) as amount,sl.itemid,sl.configid ,sl.inventsizeid,sl.batchno,ih.stock,\n      it.itemname as productar,it.namealias as producten from salestable st\n      inner join salesline sl on st.salesid =sl.salesid \n      inner join\n      (select io.itemid ,io.configid ,io.inventsizeid,io.batchno ,sum(io.qty_in-io.qty_out) as stock from inventory_onhand io \n      group by io.itemid ,io.configid,io.batchno ,io.inventsizeid ) as ih on ih.itemid =sl.itemid \n      and ih.configid=sl.configid and ih.batchno=sl.batchno and ih.inventsizeid=sl.inventsizeid \n      inner join inventtable it on it.itemid = sl.itemid \n      where st.transkind ='SALESORDER'";
                        data.leadtime ? query += "and sl.lastmodifieddate >= (now()::date - '" + data.leadtime + " day'::interval)" : '';
                        query += "and ih.stock >=0\n      group by sl.itemid,sl.configid,sl.inventsizeid,sl.batchno,ih.stock,it.itemname,it.namealias \n      order by sl.itemid)\n      as sl on sl.itemid=iiss.itemid ;";
                        return [4 /*yield*/, this.dao.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InventItemSalesSetupDAO;
}());
exports.InventItemSalesSetupDAO = InventItemSalesSetupDAO;
