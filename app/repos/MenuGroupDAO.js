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
var typeorm_1 = require("typeorm");
var MenuGroup_1 = require("../../entities/MenuGroup");
var MenuGroupDAO = /** @class */ (function () {
    function MenuGroupDAO() {
        this.dao = typeorm_1.getRepository(MenuGroup_1.MenuGroup);
        this.db = typeorm_1.getManager();
    }
    MenuGroupDAO.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var cond;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cond = "menu.active=true ";
                        if (data.isMobile) {
                            cond += " and menu.is_mobile = true";
                        }
                        return [4 /*yield*/, this.dao
                                .createQueryBuilder("menuGroup")
                                .innerJoin("menuGroup.group", "group")
                                .innerJoinAndSelect("menuGroup.menu", "menu")
                                .addSelect("group.groupid")
                                .addSelect("group.role")
                                .orderBy("priority", "ASC")
                                .where(data)
                                .andWhere(cond)
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MenuGroupDAO.prototype.permissionData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                query = "SELECT \"menuGroup\".\"id\" AS \"id\", \n        \"menuGroup\".\"write_access\" AS \"writeAccess\", \n        \"menuGroup\".\"delete_access\" AS \"deleteAccess\", \n        \"menuGroup\".\"created_by\" AS \"createdBy\", \n        \"menuGroup\".\"created_date\" AS \"createdDate\", \n        \"menuGroup\".\"updated_by\" AS \"updatedBy\", \n        \"menuGroup\".\"updated_date\" AS \"updatedDate\",\n        \"menuGroup\".\"active\" AS \"active\",\n        \"group\".\"groupid\" AS \"groupid\",\n        \"menu\".\"id\" AS \"menuId\", \n        \"menu\".\"name\" AS \"name\", \n        \"menu\".\"name_ar\" AS \"nameAr\", \n        \"menu\".\"link\" AS \"link\", \n        \"menu\".\"icon\" AS \"icon\", \n        \"menu\".\"parent_id\" AS \"parentId\" \n        FROM \"menu_group\" \"menuGroup\" \n        INNER JOIN \"usergroup\" \"group\" ON \"group\".\"groupid\"=\"menuGroup\".\"group_id\"  \n        INNER JOIN \"menu\" \"menu\" ON \"menu\".\"id\"=\"menuGroup\".\"menu_id\" \n        WHERE \"menuGroup\".\"group_id\" = '" + data.groupId + "' and menu.active=true ORDER BY menu.priority ASC";
                return [2 /*return*/, this.db.query(query)];
            });
        });
    };
    MenuGroupDAO.prototype.save = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MenuGroupDAO.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(id, {
                            join: {
                                alias: "menuGroup",
                                innerJoinAndSelect: {
                                    group: "menuGroup.group",
                                    menu: "menuGroup.menu",
                                },
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MenuGroupDAO.prototype.delete = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.active = !data.active;
                        return [4 /*yield*/, this.dao.save(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MenuGroupDAO.prototype.findOne = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dao.findOne(data, {
                            join: {
                                alias: "menuGroup",
                                innerJoinAndSelect: {
                                    group: "menuGroup.group",
                                    menu: "menuGroup.menu",
                                },
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MenuGroupDAO;
}());
exports.MenuGroupDAO = MenuGroupDAO;
Object.seal(MenuGroupDAO);
