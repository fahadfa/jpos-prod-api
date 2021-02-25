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
var InventTransDAO_1 = require("../repos/InventTransDAO");
var InventoryOnhandDAO_1 = require("../repos/InventoryOnhandDAO");
var InventoryOnhand_1 = require("../../entities/InventoryOnhand");
var App_1 = require("../../utils/App");
var InventTrans_1 = require("../../entities/InventTrans");
var UpdateInventoryService = /** @class */ (function () {
    function UpdateInventoryService() {
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.inventoryOnhandDAO = new InventoryOnhandDAO_1.InventoryOnhandDAO();
    }
    UpdateInventoryService.prototype.updateInventtransTable = function (reqData, update, status, queryRunner) {
        if (update === void 0) { update = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.manager.getRepository(InventTrans_1.Inventorytrans).save(reqData)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateInventoryService.prototype.updateInventoryOnhandTable = function (reqData, update, queryRunner) {
        if (update === void 0) { update = false; }
        return __awaiter(this, void 0, void 0, function () {
            var inventoryOnHandData, inventoryOnHandData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reqData.transactionClosed) return [3 /*break*/, 17];
                        return [4 /*yield*/, this.inventoryOnhandDAO.findOne({
                                itemid: reqData.itemid,
                                inventsizeid: reqData.inventsizeid,
                                configid: reqData.configid,
                                batchno: reqData.batchno,
                                dataareaid: reqData.dataareaid,
                                inventlocationid: reqData.inventlocationid,
                            })];
                    case 1:
                        inventoryOnHandData = _a.sent();
                        if (!inventoryOnHandData) return [3 /*break*/, 14];
                        if (!(reqData.reserveStatus == "RESERVED")) return [3 /*break*/, 4];
                        if (!update) return [3 /*break*/, 3];
                        inventoryOnHandData.qtyReserved = parseInt(inventoryOnHandData.qtyReserved) + Math.abs(reqData.qty);
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 2:
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 13];
                    case 4:
                        if (!(reqData.reserveStatus == "PAID")) return [3 /*break*/, 9];
                        if (!update) return [3 /*break*/, 8];
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        if (!(parseInt(reqData.qty) < 0)) return [3 /*break*/, 6];
                        inventoryOnHandData.qtyOut = parseInt(inventoryOnHandData.qtyOut) + Math.abs(reqData.qty);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        if (!(parseInt(reqData.qty) > 0)) return [3 /*break*/, 8];
                        inventoryOnHandData.qtyIn = parseInt(inventoryOnHandData.qtyIn) + Math.abs(reqData.qty);
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 7:
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        if (!(parseInt(reqData.qty) < 0)) return [3 /*break*/, 11];
                        inventoryOnHandData.qtyOut = parseInt(inventoryOnHandData.qtyOut) + Math.abs(reqData.qty);
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 10:
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 11:
                        if (!(parseInt(reqData.qty) > 0)) return [3 /*break*/, 13];
                        inventoryOnHandData.qtyIn = parseInt(inventoryOnHandData.qtyIn) + Math.abs(reqData.qty);
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 12:
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        _a.sent();
                        _a.label = 13;
                    case 13: return [3 /*break*/, 16];
                    case 14:
                        inventoryOnHandData = new InventoryOnhand_1.InventoryOnhand();
                        inventoryOnHandData.itemid = reqData.itemid;
                        inventoryOnHandData.configid = reqData.configid;
                        inventoryOnHandData.inventsizeid = reqData.inventsizeid;
                        inventoryOnHandData.batchno = reqData.batchno;
                        inventoryOnHandData.dataareaid = reqData.dataareaid;
                        inventoryOnHandData.inventlocationid = reqData.inventlocationid;
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        if (parseInt(reqData.qty) < 0) {
                            inventoryOnHandData.qtyOut = Math.abs(reqData.qty);
                        }
                        else if (parseInt(reqData.qty) > 0) {
                            inventoryOnHandData.qtyIn = Math.abs(reqData.qty);
                        }
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 15:
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        _a.sent();
                        _a.label = 16;
                    case 16: return [3 /*break*/, 20];
                    case 17:
                        if (!(reqData.reserveStatus == "UNRESERVED")) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.inventoryOnhandDAO.findOne({
                                itemid: reqData.itemid,
                                inventsizeid: reqData.inventsizeid,
                                configid: reqData.configid,
                                batchno: reqData.batchno,
                                dataareaid: reqData.dataareaid,
                                inventlocationid: reqData.inventlocationid,
                            })];
                    case 18:
                        inventoryOnHandData = _a.sent();
                        inventoryOnHandData.qtyReserved = parseInt(inventoryOnHandData.qtyReserved) - Math.abs(reqData.qty);
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 19:
                        // await this.inventoryOnhandDAO.save(inventoryOnHandData);
                        _a.sent();
                        _a.label = 20;
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    UpdateInventoryService.prototype.updateUnReserveQty = function (reqData, queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var inventoryOnHandData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.inventoryOnhandDAO.findOne({
                            itemid: reqData.itemid,
                            inventsizeid: reqData.inventsizeid,
                            configid: reqData.configid,
                            batchno: reqData.batchno,
                            dataareaid: reqData.dataareaid,
                            inventlocationid: reqData.inventlocationid,
                            qty: Math.abs(reqData.qty),
                        })];
                    case 1:
                        inventoryOnHandData = _a.sent();
                        if (!inventoryOnHandData) return [3 /*break*/, 3];
                        inventoryOnHandData.qtyReserved =
                            inventoryOnHandData.qtyReserved > Math.abs(reqData.qty)
                                ? inventoryOnHandData.qtyReserved - Math.abs(reqData.qty)
                                : 0;
                        inventoryOnHandData.updatedOn = new Date(App_1.App.DateNow());
                        inventoryOnHandData.updatedBy = this.sessionInfo ? this.sessionInfo.userName : "SYSTEM";
                        return [4 /*yield*/, queryRunner.manager.getRepository(InventoryOnhand_1.InventoryOnhand).save(inventoryOnHandData)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UpdateInventoryService;
}());
exports.UpdateInventoryService = UpdateInventoryService;
