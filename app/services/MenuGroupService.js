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
var MenuGroupDAO_1 = require("../repos/MenuGroupDAO");
var MenuService_1 = require("./MenuService");
var MenuDAO_1 = require("../repos/MenuDAO");
var MenuGroupService = /** @class */ (function () {
    function MenuGroupService() {
        this.menuGroupRepository = new MenuGroupDAO_1.MenuGroupDAO();
        this.menuService = new MenuService_1.MenuService();
        this.menuRepository = new MenuDAO_1.MenuDAO();
    }
    MenuGroupService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.menuGroupRepository.entity(id)];
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
    MenuGroupService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, menu, newData, _loop_1, _i, menu_1, element, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        item.group = {
                            groupid: item.groupId,
                        };
                        return [4 /*yield*/, this.menuGroupRepository.permissionData(item)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.menuRepository.search({ active: true })];
                    case 2:
                        menu = _a.sent();
                        newData = [];
                        _loop_1 = function (element) {
                            delete element.active;
                            var index = data.findIndex(function (value) { return value.menuId == element.id; });
                            if (index == -1) {
                                var newMenu = {
                                    menuId: element.id,
                                    name: element.name,
                                    nameAr: element.nameAr,
                                    link: element.link,
                                    parentId: element.parentId,
                                };
                                newData.push(Object.assign({}, { active: false, writeAccess: false, deleteAccess: false }, newMenu, {
                                    groupid: item.groupId,
                                }));
                            }
                        };
                        for (_i = 0, menu_1 = menu; _i < menu_1.length; _i++) {
                            element = menu_1[_i];
                            _loop_1(element);
                        }
                        newData = data.concat(newData);
                        return [4 /*yield*/, this.unflatten(newData)];
                    case 3:
                        newData = _a.sent();
                        return [2 /*return*/, newData];
                    case 4:
                        error_2 = _a.sent();
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MenuGroupService.prototype.unflatten = function (arr) {
        var newData = [];
        var _loop_2 = function (item) {
            if (!item.parentId) {
                var children = arr.filter(function (v) { return v.parentId == item.menuId; });
                item.children = children;
                newData.push(item);
            }
        };
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            _loop_2(item);
        }
        return newData;
    };
    MenuGroupService.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newData, _i, data_1, item, saveData_1, menuGroupData, returnData, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        newData = [];
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            item = data_1[_i];
                            newData.push(item);
                            newData.push.apply(newData, item.children);
                            // newData = newData.concat(item.children);
                        }
                        saveData_1 = [];
                        newData.forEach(function (element) {
                            var menugroup = {
                                id: element.id,
                                updatedBy: _this.sessionInfo.userName,
                                writeAccess: element.writeAccess,
                                deleteAccess: element.deleteAccess,
                                active: element.active,
                                menu: {
                                    id: element.menuId,
                                },
                                group: {
                                    groupid: element.groupid,
                                },
                            };
                            menugroup.updatedDate = new Date(App_1.App.DateNow());
                            if (!element.id) {
                                menugroup.createdBy = new Date(App_1.App.DateNow());
                            }
                            delete element.children;
                            saveData_1.push(menugroup);
                        });
                        return [4 /*yield*/, this.menuGroupRepository.save(saveData_1)];
                    case 1:
                        menuGroupData = _a.sent();
                        returnData = { message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MenuGroupService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result, returnData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.menuGroupRepository.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw { status: 0, message: "RECORD_NOT_FOUND" };
                        }
                        data.updatedBy = this.sessionInfo.id;
                        return [4 /*yield*/, this.menuGroupRepository.delete(data)];
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
    MenuGroupService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        previousItem = null;
                        if (!(!item.id || item.id.toString() == "" || item.id.toString() == "0")) return [3 /*break*/, 1];
                        item.id = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.menuGroupRepository.entity(item.id)];
                    case 2:
                        previousItem = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!item.id) {
                        }
                        else {
                        }
                        item.updatedBy = this.sessionInfo.id;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return MenuGroupService;
}());
exports.MenuGroupService = MenuGroupService;
