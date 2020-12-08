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
var ColorsDAO_1 = require("../repos/ColorsDAO");
var ColorsService = /** @class */ (function () {
    function ColorsService() {
        this.colorsDAO = new ColorsDAO_1.ColorsDAO();
    }
    ColorsService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.colorsDAO.entity(id)];
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
    ColorsService.prototype.save = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, colors, returnData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.validate(reqData)
                            // console.log(data)
                        ];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.colorsDAO.save(reqData)];
                    case 2:
                        colors = _a.sent();
                        returnData = { message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ColorsService.prototype.validate = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var colors, newData, _loop_1, _i, reqData_1, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.colorsDAO.search({})];
                    case 1:
                        colors = _a.sent();
                        newData = [];
                        _loop_1 = function (d) {
                            var color;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, colors.filter(function (v) { return (v.code == d.code); })];
                                    case 1:
                                        color = _a.sent();
                                        if (color.length > 0) {
                                            d.id = color[0].id;
                                            d.insertedAt = color[0].insertedAt;
                                        }
                                        else {
                                            d.insertedAt = new Date();
                                        }
                                        d.updatedAt = new Date();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, reqData_1 = reqData;
                        _a.label = 2;
                    case 2:
                        if (!(_i < reqData_1.length)) return [3 /*break*/, 5];
                        d = reqData_1[_i];
                        return [5 /*yield**/, _loop_1(d)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, reqData];
                }
            });
        });
    };
    ColorsService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.colorsDAO.search(item)];
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
    return ColorsService;
}());
exports.ColorsService = ColorsService;
