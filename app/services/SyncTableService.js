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
var App_1 = require("../../utils/App");
var Props_1 = require("../../constants/Props");
var SyncTableRepository_1 = require("./../repos/SyncTableRepository");
var SyncTableService = /** @class */ (function () {
    function SyncTableService() {
        this.syncTableRepository = new SyncTableRepository_1.SyncTableRepository();
    }
    SyncTableService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.syncTableRepository.entity(id)];
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
    SyncTableService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.syncTableRepository.search(item)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SyncTableService.prototype.save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, syncTableData, returnData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(item)];
                    case 1:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.syncTableRepository.save(item)];
                    case 2:
                        syncTableData = _a.sent();
                        returnData = { id: item.id, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 3:
                        if (cond == "updated") {
                            throw { status: 0, message: Props_1.Props.MISS_MATCH_MESSAGE };
                        }
                        else if (cond == "name") {
                            throw { status: 0, message: "RECORD_ALREADY_EXISTS" };
                        }
                        else {
                            throw { status: 0, message: "INVALID_DATA" };
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SyncTableService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result, returnData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.syncTableRepository.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw { message: "RECORD_NOT_FOUND" };
                        }
                        data.updatedBy = this.sessionInfo.id;
                        return [4 /*yield*/, this.syncTableRepository.delete(data)];
                    case 2:
                        result = _a.sent();
                        returnData = { id: id, message: "REMOVED" };
                        return [2 /*return*/, returnData];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SyncTableService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousItem, uid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        previousItem = null;
                        if (!(!item.id || item.id.toString() == "" || item.id.toString() == "0")) return [3 /*break*/, 1];
                        item.id = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.syncTableRepository.entity(item.id)];
                    case 2:
                        previousItem = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!item.id) {
                            uid = App_1.App.UniqueNumber();
                            item.id = uid;
                        }
                        else {
                            if (item.updatedOn && previousItem.updatedOn.toISOString() != new Date(item.updatedOn).toISOString()) {
                                return [2 /*return*/, "updated"];
                            }
                        }
                        item.updatedBy = this.sessionInfo.id;
                        item.updatedOn = new Date(App_1.App.DateNow());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return SyncTableService;
}());
exports.SyncTableService = SyncTableService;
