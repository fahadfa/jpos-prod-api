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
var SyncServiceHelper_1 = require("./sync/SyncServiceHelper");
var App_1 = require("./utils/App");
var syslogstr = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
var cmd = require("node-cmd");
var cron = require("node-cron");
var execSync = require("child_process").execSync;
var SysService = /** @class */ (function () {
    function SysService() {
    }
    SysService.ResetService = function (log) {
        return __awaiter(this, void 0, void 0, function () {
            var cmdData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cmdData = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, SysService.CmdService("sc query  jpos-offline", log)];
                    case 2:
                        cmdData = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        log.error(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        if (!(cmdData && cmdData.includes("STOPPED"))) return [3 /*break*/, 7];
                        return [4 /*yield*/, SysService.CmdService("net start jpos-offline", log)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, SysService.CmdService("net stop jpos-alt", log)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, SysService.CmdService("net start jpos-alt", log)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, SysService.CmdService("net stop jpos-offline", log)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    SysService.CmdService = function (cmdCall, log) {
        return __awaiter(this, void 0, void 0, function () {
            var retValue, code;
            return __generator(this, function (_a) {
                retValue = null;
                log.warn(syslogstr);
                try {
                    log.warn(cmdCall);
                    code = execSync(cmdCall);
                    if (code) {
                        retValue = code.toString();
                        log.warn(retValue);
                        console.log(retValue);
                    }
                    else {
                        throw "!!!!!  cmd not execute  !!!!!";
                    }
                }
                catch (err) {
                    retValue = null;
                    log.warn(err);
                    throw err;
                }
                finally {
                    log.warn(syslogstr);
                }
                return [2 /*return*/, Promise.resolve(retValue)];
            });
        });
    };
    SysService.SelectedMacAddress = function (storeid, log) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log.info(syslogstr);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.StoreSource(storeid, log)];
                    case 2:
                        data = _b.sent();
                        if (!data) return [3 /*break*/, 6];
                        if (!(data.mac_address == "own")) return [3 /*break*/, 5];
                        _a = data;
                        return [4 /*yield*/, App_1.App.getMacAddress()];
                    case 3:
                        _a.mac_address = _b.sent();
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.UpdateCall("MAC", log, data.mac_address)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/, Promise.resolve(data.mac_address)];
                    case 6: return [2 /*return*/, Promise.resolve(null)];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        err_2 = _b.sent();
                        log.warn(err_2);
                        return [2 /*return*/, Promise.resolve(null)];
                    case 9:
                        log.info(syslogstr);
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    SysService.UpdateVersion = function (log) {
        return __awaiter(this, void 0, void 0, function () {
            var fs, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        fs = require("fs");
                        data = fs.readFileSync("./package.json", "utf8");
                        data = JSON.parse(data);
                        log.info("Version: " + data.version);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.UpdateCall("VERSION", log, data.version)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        log.error("Error on updating version");
                        log.error(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SysService;
}());
exports.SysService = SysService;
