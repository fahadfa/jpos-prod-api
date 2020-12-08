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
var HistoryUserInfo_1 = require("../../entities/HistoryUserInfo");
var HistoryUsergroupconfigDAO_1 = require("../repos/HistoryUsergroupconfigDAO");
var HistoryUsergroupDAO_1 = require("../repos/HistoryUsergroupDAO");
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("../common/RawQuery");
var uuid = require("uuid");
var HistoryUsergroupConfigService = /** @class */ (function () {
    function HistoryUsergroupConfigService() {
        this.db = typeorm_1.getManager();
        this.usergroupconfigDAO = new HistoryUsergroupconfigDAO_1.HistoryUsergroupconfigDAO();
        this.usergroupDAO = new HistoryUsergroupDAO_1.HistoryUsergroupDAO();
        this.userInfo = new HistoryUserInfo_1.HistoryUserInfo();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    HistoryUsergroupConfigService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.usergroupconfigDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.usergroupconfigDAO.findOne({ groupid: id })];
                    case 2:
                        data = _a.sent();
                        data ? (data.Custgroup = {}) : (data = {});
                        _a.label = 3;
                    case 3:
                        // let count = this.rawQuery.customers_count();
                        console.log(data);
                        if (data) {
                            return [2 /*return*/, data];
                        }
                        else {
                            return [2 /*return*/, {}];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HistoryUsergroupConfigService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usergroupconfigDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (item) {
                            delete item.password;
                        });
                        return [2 /*return*/, data];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoryUsergroupConfigService.prototype.findOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usergroupconfigDAO.findOneEntity()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HistoryUsergroupConfigService.prototype.saveAll = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var returnData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.usergroupconfigDAO.saveAll(data)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.rawQuery.updateSynctable()];
                    case 2:
                        _a.sent();
                        returnData = { message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HistoryUsergroupConfigService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, data, returnData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 1:
                        cond = _a.sent();
                        console.log(cond);
                        if (!(cond == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.usergroupconfigDAO.save(reqData)];
                    case 2:
                        data = _a.sent();
                        returnData = { id: reqData.id, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 3: throw { message: "INVALID_DATA" };
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_5 = _a.sent();
                        throw error_5;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HistoryUsergroupConfigService.prototype.update_user_group = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var group;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usergroupDAO.entity(data.groupid)];
                    case 1:
                        group = _a.sent();
                        group.lastmodifieddate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.usergroupDAO.save(group)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoryUsergroupConfigService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                item.historyId = uuid();
                return [2 /*return*/, true];
            });
        });
    };
    HistoryUsergroupConfigService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var usergroupconfig, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.usergroupconfigDAO.entity(id)];
                    case 1:
                        usergroupconfig = _a.sent();
                        if (!usergroupconfig) return [3 /*break*/, 2];
                        usergroupconfig.deleted = true;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.usergroupconfigDAO.findOne({ id: id })];
                    case 3:
                        usergroupconfig = _a.sent();
                        usergroupconfig.deleted = true;
                        _a.label = 4;
                    case 4:
                        usergroupconfig.deletedby = this.sessionInfo.userName;
                        return [4 /*yield*/, this.usergroupconfigDAO.save(usergroupconfig)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { id: usergroupconfig.groupid, message: "REMOVED" }];
                    case 6:
                        error_6 = _a.sent();
                        throw error_6;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return HistoryUsergroupConfigService;
}());
exports.HistoryUsergroupConfigService = HistoryUsergroupConfigService;
