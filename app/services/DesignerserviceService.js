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
var DesignerserviceRepository_1 = require("../repos/DesignerserviceRepository");
var RawQuery_1 = require("../common/RawQuery");
var DesignerserviceService = /** @class */ (function () {
    function DesignerserviceService() {
        this.designerserviceRepository = new DesignerserviceRepository_1.DesignerserviceRepository();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    DesignerserviceService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.designerserviceRepository.entity(id)];
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
    DesignerserviceService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.designerserviceRepository.search(item)];
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
    DesignerserviceService.prototype.designerServiceList = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!item.accountnum) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rawQuery.getDesignerServiceList(item.accountnum, item.mobileNo)];
                    case 1:
                        data = _a.sent();
                        data.map(function (v) {
                            v.balanceAmount = parseFloat(v.balanceAmount);
                            v.designerserviceAmount = parseFloat(v.designerserviceAmount);
                            v.usedAmount = parseFloat(v.usedAmount);
                        });
                        return [2 /*return*/, data];
                    case 2: throw { message: "PLEASE_PROVIDE_ID" };
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DesignerserviceService.prototype.save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var designerserviceData, returnData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.designerserviceRepository.save(item)];
                    case 1:
                        designerserviceData = _a.sent();
                        returnData = { id: item.serviceid, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DesignerserviceService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result, returnData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.designerserviceRepository.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw { message: "DATA_NOT_FOUND" };
                        }
                        return [4 /*yield*/, this.designerserviceRepository.delete(data)];
                    case 2:
                        result = _a.sent();
                        returnData = { id: id, message: "REMOVED" };
                        return [2 /*return*/, returnData];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DesignerserviceService;
}());
exports.DesignerserviceService = DesignerserviceService;
