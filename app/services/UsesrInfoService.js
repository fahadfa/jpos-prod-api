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
var UserInfo_1 = require("../../entities/UserInfo");
var UserinfoDAO_1 = require("../repos/UserinfoDAO");
var Props_1 = require("../../constants/Props");
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("../common/RawQuery");
var HistoryUsesrInfoService_1 = require("../services/HistoryUsesrInfoService");
var uuid = require("uuid");
var UsesrInfoService = /** @class */ (function () {
    function UsesrInfoService() {
        this.db = typeorm_1.getManager();
        this.userinfoDAO = new UserinfoDAO_1.UserinfoDAO();
        this.userInfo = new UserInfo_1.UserInfo();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.historyUsesrInfoService = new HistoryUsesrInfoService_1.HistoryUsesrInfoService();
    }
    UsesrInfoService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.userinfoDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.userinfoDAO.findOne({ id: id })];
                    case 2:
                        data = _a.sent();
                        data.Custgroup = {};
                        _a.label = 3;
                    case 3:
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
    UsesrInfoService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, groupid_1, attachedToGroup_1, notAttachedToGroup_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        data = void 0;
                        if (!item.groupid) return [3 /*break*/, 2];
                        groupid_1 = item.groupid;
                        delete item.groupid;
                        return [4 /*yield*/, this.userinfoDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (item) {
                            delete item.password;
                        });
                        attachedToGroup_1 = [];
                        notAttachedToGroup_1 = [];
                        data.forEach(function (element) {
                            delete element.password;
                            if (element.groupid == groupid_1) {
                                attachedToGroup_1.push(element);
                            }
                            else {
                                notAttachedToGroup_1.push(element);
                            }
                        });
                        data = { UsersAttachedToGroup: attachedToGroup_1, UsersNotAttachedToGroup: notAttachedToGroup_1 };
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.userinfoDAO.search(item)];
                    case 3:
                        data = _a.sent();
                        data.map(function (item) {
                            delete item.password;
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/, data];
                    case 5:
                        error_2 = _a.sent();
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UsesrInfoService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, user, returnData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 1:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 4];
                        reqData.lastmodifieddate = new Date(App_1.App.DateNow());
                        reqData.lastmodifiedby = this.sessionInfo.userName;
                        reqData.userGroup = { groupid: reqData.groupid };
                        this.historyUsesrInfoService.sessionInfo = this.sessionInfo;
                        return [4 /*yield*/, this.userinfoDAO.save(reqData)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, this.historyUsesrInfoService.save(reqData)];
                    case 3:
                        _a.sent();
                        returnData = { id: reqData.id, password: reqData.normalPassword, message: Props_1.Props.SAVED_SUCCESSFULLY };
                        return [2 /*return*/, returnData];
                    case 4:
                        if (cond == "userName") {
                            throw { status: 0, message: "RECORD_ALREADY_EXISTS" };
                        }
                        else {
                            throw { status: 0, message: "INVALID_DATA" };
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UsesrInfoService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousData, mdata, prevData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!item.id || item.id == "" || item.id == "0")) return [3 /*break*/, 1];
                        item.id = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.userinfoDAO.entity(item.id)];
                    case 2:
                        previousData = _a.sent();
                        _a.label = 3;
                    case 3:
                        item.lastmodifiedby = this.sessionInfo.userName;
                        return [4 /*yield*/, this.userinfoDAO.findAll({ userName: item.userName })];
                    case 4:
                        mdata = _a.sent();
                        if (!!item.id) return [3 /*break*/, 8];
                        if (!(mdata.length > 0)) return [3 /*break*/, 5];
                        return [2 /*return*/, "userName"];
                    case 5:
                        item.id = uuid();
                        item.deleted = false;
                        item.normalPassword = Math.random().toString(36).substring(7);
                        item.password = App_1.App.HashSync(item.normalPassword);
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.createdby = this.sessionInfo.userName;
                        return [4 /*yield*/, App_1.App.SendMail(item.email, "Jaz Sales account activation for '" + item.userName, "User", {
                                name: item.userName,
                                password: item.normalPassword,
                            })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        if (previousData) {
                            prevData = mdata.filter(function (v) { return v.id !== previousData.id; });
                            if (prevData.length > 0) {
                                return [2 /*return*/, "userName"];
                            }
                            else {
                                return [2 /*return*/, true];
                            }
                        }
                        _a.label = 9;
                    case 9: return [2 /*return*/, true];
                }
            });
        });
    };
    UsesrInfoService.prototype.changePassword = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.userinfoDAO.entity(this.sessionInfo.id)];
                    case 1:
                        user = _a.sent();
                        if (!(reqData.oldPassword && App_1.App.HashCompareSync(reqData.oldPassword, user.password))) return [3 /*break*/, 3];
                        user.userGroupConfig = user.userGroupConfig == null ? {} : user.userGroupConfig;
                        user.userGroup = user.userGroup == null ? {} : user.userGroup;
                        user.password = App_1.App.HashSync(reqData.newPassword);
                        user.lastmodifieddate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.userinfoDAO.save(user)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw { status: 0, message: "INVALID_PASSWORD" };
                    case 4: return [2 /*return*/, { id: user.id, message: "PASSWORD_UPDATED", status: 1 }];
                    case 5:
                        error_4 = _a.sent();
                        throw error_4;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UsesrInfoService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userinfoDAO.entity(id)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.userinfoDAO.delete(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { id: user.id, message: Props_1.Props.REMOVED_SUCCESSFULLY }];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UsesrInfoService;
}());
exports.UsesrInfoService = UsesrInfoService;
