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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var node_cache_1 = __importDefault(require("node-cache"));
var BasesDAO_1 = require("../repos/BasesDAO");
var CacheService = /** @class */ (function () {
    function CacheService() {
        //this.nodeCache = new NodeCache({ checkperiod: 300, useClones: false });
        this.db = typeorm_1.getManager();
        this.basesDAO = new BasesDAO_1.BasesDAO();
        // this.init();
    }
    CacheService.prototype.Cache = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(value && value != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, CacheService.NodeCache.set(key, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 2:
                        data = CacheService.NodeCache.get(key);
                        return [2 /*return*/, Promise.resolve(data)];
                }
            });
        });
    };
    CacheService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("|||||||| CACHE INIT ||||||||||");
                        return [4 /*yield*/, this.app_lang("Reload")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.numbersequences("Reload")];
                    case 2:
                        _a.sent();
                        //    this.file_data(null);
                        return [2 /*return*/, Promise.resolve({ message: "All cache refresh." })];
                }
            });
        });
    };
    CacheService.prototype.app_lang = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheData, length_1, query, data, returnData_1, obj, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        param == "Reload";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.Cache("app_lang")];
                    case 2:
                        cacheData = _a.sent();
                        length_1 = cacheData ? cacheData.length : -1;
                        if (param == "Reload") {
                            this.Cache("app_lang", []);
                            length_1 = -1;
                        }
                        if (!(length_1 == -1)) return [3 /*break*/, 4];
                        query = "select id, en, ar from app_lang order by id asc";
                        return [4 /*yield*/, this.db.query(query)];
                    case 3:
                        data = _a.sent();
                        returnData_1 = {};
                        obj = void 0;
                        data.forEach(function (element) {
                            returnData_1[element.id] = { en: element.en, ar: element.ar };
                        });
                        this.Cache("app_lang", returnData_1);
                        _a.label = 4;
                    case 4: return [2 /*return*/, this.Cache("app_lang")];
                    case 5:
                        error_1 = _a.sent();
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CacheService.prototype.numbersequences = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheData, length_2, query, data, returnData_2, obj, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.Cache("numbersequences")];
                    case 1:
                        cacheData = _a.sent();
                        length_2 = cacheData ? cacheData.length : -1;
                        if (param == "Reload") {
                            this.Cache("numbersequences", []);
                            length_2 = -1;
                        }
                        if (!(length_2 == -1)) return [3 /*break*/, 3];
                        query = "select nextrec, transkind, inventlocationid, numbersequence from numbersequencetable";
                        return [4 /*yield*/, this.db.query(query)];
                    case 2:
                        data = _a.sent();
                        returnData_2 = {};
                        obj = void 0;
                        data.forEach(function (element) {
                            returnData_2[element.numbersequence] = element;
                        });
                        // console.log(returnData)
                        this.Cache("numbersequences", returnData_2);
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.Cache("numbersequences")];
                    case 4:
                        error_2 = _a.sent();
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CacheService.customerData = null;
    CacheService.NodeCache = new node_cache_1.default({ checkperiod: 300, useClones: false });
    return CacheService;
}());
exports.CacheService = CacheService;
