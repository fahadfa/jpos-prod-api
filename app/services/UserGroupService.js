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
var UsergroupDAO_1 = require("../repos/UsergroupDAO");
var typeorm_1 = require("typeorm");
var RawQuery_1 = require("../common/RawQuery");
var UsergroupconfigDAO_1 = require("../repos/UsergroupconfigDAO");
var UsergroupConfigService_1 = require("./UsergroupConfigService");
var HistoryUsergroupConfigService_1 = require("./HistoryUsergroupConfigService");
var HistoryUserGroupService_1 = require("./HistoryUserGroupService");
var uuid = require("uuid");
var UserGroupService = /** @class */ (function () {
    function UserGroupService() {
        this.db = typeorm_1.getManager();
        this.usergroupDAO = new UsergroupDAO_1.UsergroupDAO();
        this.userInfo = new UserInfo_1.UserInfo();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.userGroupConfigService = new UsergroupConfigService_1.UsergroupConfigService();
        this.historyUserGroupConfigService = new HistoryUsergroupConfigService_1.HistoryUsergroupConfigService();
        this.historyUserGroupService = new HistoryUserGroupService_1.HistoryUserGroupService();
        this.userGroupConfigDAO = new UsergroupconfigDAO_1.UsergroupconfigDAO();
        this.userGroupConfigService.sessionInfo = this.sessionInfo;
    }
    UserGroupService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.usergroupDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!!data) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.usergroupDAO.findOne({ groupid: id })];
                    case 2:
                        data = _a.sent();
                        data.Custgroup = {};
                        _a.label = 3;
                    case 3:
                        if (data) {
                            data.permissiondata = JSON.parse(data.permissiondata);
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
    UserGroupService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usergroupDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        data.map(function (item) {
                            delete item.password;
                            item.permissiondata = JSON.parse(item.permissiondata);
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
    UserGroupService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, user, returnData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(reqData)];
                    case 1:
                        cond = _a.sent();
                        reqData.permissiondata = JSON.stringify(reqData.permissiondata);
                        if (!(cond == true)) return [3 /*break*/, 4];
                        reqData.lastmodifieddate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.usergroupDAO.save(reqData)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, this.historyUserGroupService.save(reqData)];
                    case 3:
                        _a.sent();
                        returnData = { id: reqData.groupid, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 4:
                        if (cond == "groupname") {
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
    UserGroupService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var userGroupData, previousData, userGroupPreviousData, mdata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userGroupData = {};
                        previousData = null;
                        if (!(!item.groupid || item.groupid == "" || item.groupid == "0")) return [3 /*break*/, 1];
                        item.groupid = null;
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.usergroupDAO.entity(item.groupid)];
                    case 2:
                        previousData = _a.sent();
                        userGroupPreviousData = this.userGroupConfigDAO.findAll({ groupid: item.groupid });
                        if (!(userGroupPreviousData.length == 0)) return [3 /*break*/, 4];
                        userGroupData.groupid = item.groupid;
                        userGroupData.lastmodifiedby = this.sessionInfo.userName;
                        userGroupData.lastmodifieddate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.userGroupConfigDAO.save(userGroupData)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        item.lastmodifiedby = this.sessionInfo.userName;
                        item.lastmodifieddate = new Date(App_1.App.DateNow());
                        return [4 /*yield*/, this.usergroupDAO.findAll({ groupname: item.groupname })];
                    case 5:
                        mdata = _a.sent();
                        if (!!item.groupid) return [3 /*break*/, 10];
                        if (!(mdata.length > 0)) return [3 /*break*/, 6];
                        return [2 /*return*/, "groupname"];
                    case 6:
                        item.groupid = uuid();
                        item.deleted = false;
                        item.createddatetime = new Date(App_1.App.DateNow());
                        item.createdby = this.sessionInfo.userName;
                        userGroupData.groupid = item.groupid;
                        userGroupData.lastmodifiedby = this.sessionInfo.userName;
                        return [4 /*yield*/, this.userGroupConfigDAO.save(userGroupData)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.historyUserGroupConfigService.save(userGroupData)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (item.groupname != previousData.groupname) {
                            if (mdata.length > 0) {
                                return [2 /*return*/, "groupname"];
                            }
                        }
                        _a.label = 11;
                    case 11: return [2 /*return*/, true];
                }
            });
        });
    };
    UserGroupService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userGroup, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.usergroupDAO.entity(id)];
                    case 1:
                        userGroup = _a.sent();
                        if (!userGroup) return [3 /*break*/, 2];
                        userGroup.deleted = true;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.usergroupDAO.findOne({ groupid: id })];
                    case 3:
                        userGroup = _a.sent();
                        userGroup.deleted = true;
                        _a.label = 4;
                    case 4:
                        userGroup.deletedby = this.sessionInfo.yserName;
                        return [4 /*yield*/, this.usergroupDAO.save(userGroup)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { id: userGroup.groupid, message: "REMOVED" }];
                    case 6:
                        error_4 = _a.sent();
                        throw error_4;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return UserGroupService;
}());
exports.UserGroupService = UserGroupService;
