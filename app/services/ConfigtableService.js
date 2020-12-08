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
var ConfigtableDAO_1 = require("../repos/ConfigtableDAO");
var RawQuery_1 = require("../common/RawQuery");
var ConfigtableService = /** @class */ (function () {
    function ConfigtableService() {
        this.configtableDAO = new ConfigtableDAO_1.ConfigtableDAO();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    ConfigtableService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.configtableDAO.entity(id)];
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
    ConfigtableService.prototype.search = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, items, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        data = void 0;
                        if (!reqData.itemid) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rawQuery.getColorCodes(reqData)];
                    case 1:
                        items = _a.sent();
                        if (!(items.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.configtableDAO.search(reqData, items)];
                    case 2:
                        data = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        data = [];
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5: throw "itemid Required";
                    case 6: return [2 /*return*/, data];
                    case 7:
                        error_2 = _a.sent();
                        throw error_2;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ConfigtableService.prototype.searchSalesOrderColors = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var Items, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!params.itemid) return [3 /*break*/, 4];
                        // var t0 = new Date().getTime();
                        params.inventlocationid = this.sessionInfo.inventlocationid;
                        return [4 /*yield*/, this.rawQuery.getColorCodesInStock(params)];
                    case 1:
                        Items = _a.sent();
                        data = [];
                        if (!(Items.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.configtableDAO.search(params, Items)];
                    case 2:
                        data = _a.sent();
                        console.log(data.length);
                        _a.label = 3;
                    case 3: 
                    // var t1 = new Date().getTime();
                    // console.log("took " + (t1 - t0) / 1000 + " milliseconds.");
                    return [2 /*return*/, data];
                    case 4: throw "itemid Required";
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        throw error_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return ConfigtableService;
}());
exports.ConfigtableService = ConfigtableService;
