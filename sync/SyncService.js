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
var SyncDMLService_1 = require("./SyncDMLService");
var SyncDDLService_1 = require("./SyncDDLService");
var Log_1 = require("../utils/Log");
var SyncServiceHelper_1 = require("./SyncServiceHelper");
var SysService_1 = require("../SysService");
var dns = require("dns").promises;
var cron = require("node-cron");
var cmd = require("node-cmd");
var SyncService = /** @class */ (function () {
    function SyncService(type) {
        switch (type) {
            case "D":
                this.log = Log_1.sdlog;
                break;
            case "M":
                this.log = Log_1.smlog;
                break;
            case "T":
                this.log = Log_1.stlog;
                break;
            case "1":
                this.log = Log_1.s1log;
                break;
            case "2":
                this.log = Log_1.s2log;
                break;
            case "F":
                this.log = Log_1.sflog;
                break;
            default:
                break;
        }
        this.syncDMLService = new SyncDMLService_1.SyncDMLService(this.log);
        this.init(type);
        // this.log.log("debug", `&&&&&&&&&&&&&&&&&&&&&& ENV_STORE_ID : ${process.env.ENV_STORE_ID} &&&&&&&&&&&&&&&&&&&&&&`);
        // if (process.env.ENV_STORE_ID) {
        //   this.log.log("info", ">>>>>>>>>>>>>>>>> INIT <<<<<<<<<<<<<<<<<<<");
        //   this.init();
        // }
    }
    SyncService.prototype.init = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (type) {
                    case "D":
                        this.define();
                        break;
                    case "M":
                        this.master();
                        break;
                    case "T":
                        this.trans();
                        break;
                    case "1":
                        this.priority1();
                        break;
                    case "2":
                        this.priority2();
                        break;
                    case "F":
                        this.fallback();
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.define = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.syncDDLService = new SyncDDLService_1.SyncDDLService(this.log);
                cron.schedule("0 0 0 * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.UpdateCall("RESET", this.log)];
                            case 1:
                                _a.sent();
                                this.log.warn("MID NIGHT RESET SERVER");
                                return [4 /*yield*/, SysService_1.SysService.ResetService(this.log)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                cron.schedule("*/1 * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 6, , 9]);
                                this.log.debug("(((((((((( SYNC START DEFINE))))))))))");
                                return [4 /*yield*/, this.checkInternet()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.syncDDLService.execute()];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.syncDMLService.deleteExecute()];
                            case 3:
                                _a.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                this.log.warn(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                                _a.label = 5;
                            case 5:
                                this.log.debug("(((((((((( SYNC CLOSE DEFINE ))))))))))");
                                return [3 /*break*/, 9];
                            case 6:
                                error_1 = _a.sent();
                                this.log.error("--------- CRON DEFINE ERROR ---------");
                                this.log.error(error_1);
                                this.log.error("--------- CRON DEFINE ERROR ---------");
                                if (!(typeof error_1 == "string" && error_1 == "RESET")) return [3 /*break*/, 8];
                                this.log.warn("HARD RESET SERVER");
                                return [4 /*yield*/, SysService_1.SysService.ResetService(this.log)];
                            case 7:
                                _a.sent();
                                _a.label = 8;
                            case 8: return [3 /*break*/, 9];
                            case 9: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.master = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isMasterProceed;
            var _this = this;
            return __generator(this, function (_a) {
                isMasterProceed = true;
                cron.schedule("*/19 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 7, , 8]);
                                if (!(isMasterProceed == true)) return [3 /*break*/, 5];
                                isMasterProceed = false;
                                this.log.debug("(((((((((( SYNC START MASTER))))))))))");
                                return [4 /*yield*/, this.checkInternet()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.syncDMLService.execute("M")];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                this.log.warn(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                                _a.label = 4;
                            case 4:
                                this.log.debug("(((((((((( SYNC CLOSE MASTER ))))))))))");
                                isMasterProceed = true;
                                return [3 /*break*/, 6];
                            case 5:
                                this.log.warn("Master still processing ...................................");
                                _a.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_2 = _a.sent();
                                isMasterProceed = true;
                                this.log.error("--------- CRON MASTER ERROR ---------");
                                this.log.error(error_2);
                                this.log.error("--------- CRON MASTER ERROR ---------");
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.trans = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isTranscationProceed;
            var _this = this;
            return __generator(this, function (_a) {
                isTranscationProceed = true;
                cron.schedule("*/17 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 7, , 8]);
                                if (!(isTranscationProceed == true)) return [3 /*break*/, 5];
                                isTranscationProceed = false;
                                this.log.debug("(((((((((( SYNC START TRANS ))))))))))");
                                return [4 /*yield*/, this.checkInternet()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.syncDMLService.execute("T")];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                this.log.warn(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                                _a.label = 4;
                            case 4:
                                this.log.debug("(((((((((( SYNC CLOSE TRANS ))))))))))");
                                isTranscationProceed = true;
                                return [3 /*break*/, 6];
                            case 5:
                                this.log.warn("TRANSACTION still processing ...................................");
                                _a.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_3 = _a.sent();
                                isTranscationProceed = true;
                                this.log.error("--------- CRON TRANSACTION ERROR ---------");
                                this.log.error(error_3);
                                this.log.error("--------- CRON TRANSACTION ERROR ---------");
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.priority1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isPriorityProceed, toggleSync;
            var _this = this;
            return __generator(this, function (_a) {
                isPriorityProceed = true;
                toggleSync = "T";
                cron.schedule("*/11 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 7, , 8]);
                                toggleSync = toggleSync == "M" ? "T" : "M";
                                if (!(isPriorityProceed == true)) return [3 /*break*/, 5];
                                isPriorityProceed = false;
                                this.log.debug("(((((((((( SYNC START PRIORITY ))))))))))");
                                return [4 /*yield*/, this.checkInternet()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.syncDMLService.execute(toggleSync, 1)];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                this.log.warn(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                                _a.label = 4;
                            case 4:
                                this.log.debug("(((((((((( SYNC CLOSE PRIORITY ))))))))))");
                                isPriorityProceed = true;
                                return [3 /*break*/, 6];
                            case 5:
                                this.log.warn("PRIORITY still processing ...................................");
                                _a.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_4 = _a.sent();
                                isPriorityProceed = true;
                                this.log.error("--------- CRON PRIORITY ERROR ---------");
                                this.log.error(error_4);
                                this.log.error("--------- CRON PRIORITY ERROR ---------");
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.priority2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isPriorityProceed, toggleSync;
            var _this = this;
            return __generator(this, function (_a) {
                isPriorityProceed = true;
                toggleSync = "T";
                cron.schedule("*/13 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    var error_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 7, , 8]);
                                toggleSync = toggleSync == "M" ? "T" : "M";
                                if (!(isPriorityProceed == true)) return [3 /*break*/, 5];
                                isPriorityProceed = false;
                                this.log.debug("(((((((((( SYNC START PRIORITY 2 ))))))))))");
                                return [4 /*yield*/, this.checkInternet()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.syncDMLService.execute(toggleSync, 2)];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                this.log.warn(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                                _a.label = 4;
                            case 4:
                                this.log.debug("(((((((((( SYNC CLOSE PRIORITY 2 ))))))))))");
                                isPriorityProceed = true;
                                return [3 /*break*/, 6];
                            case 5:
                                this.log.warn("PRIORITY 2 still processing ...................................");
                                _a.label = 6;
                            case 6: return [3 /*break*/, 8];
                            case 7:
                                error_5 = _a.sent();
                                isPriorityProceed = true;
                                this.log.error("--------- CRON PRIORITY 2 ERROR ---------");
                                this.log.error(error_5);
                                this.log.error("--------- CRON PRIORITY 2 ERROR ---------");
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.fallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isFallBackProceed;
            var _this = this;
            return __generator(this, function (_a) {
                isFallBackProceed = true;
                cron.schedule("*/23 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
                    var dataList, _i, dataList_1, data, error_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 12, , 13]);
                                if (!(isFallBackProceed == true)) return [3 /*break*/, 10];
                                isFallBackProceed = false;
                                this.log.debug("(((((((((( SYNC FALLBACK START))))))))))");
                                return [4 /*yield*/, this.checkInternet()];
                            case 1:
                                if (!_a.sent()) return [3 /*break*/, 8];
                                return [4 /*yield*/, this.syncDMLService.fallBackData()];
                            case 2:
                                dataList = _a.sent();
                                _i = 0, dataList_1 = dataList;
                                _a.label = 3;
                            case 3:
                                if (!(_i < dataList_1.length)) return [3 /*break*/, 7];
                                data = dataList_1[_i];
                                if (!(data && data.id)) return [3 /*break*/, 6];
                                return [4 /*yield*/, this.syncDMLService.execute("M", 0, data)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, this.syncDMLService.fallBackDataUpdate(data.id)];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6:
                                _i++;
                                return [3 /*break*/, 3];
                            case 7: return [3 /*break*/, 9];
                            case 8:
                                this.log.warn(">>>>>>>>>>>>>>>>> No Internet connection <<<<<<<<<<<<<<<<<<<<");
                                _a.label = 9;
                            case 9:
                                this.log.debug("(((((((((( SYNC CLOSE FALLBACK ))))))))))");
                                isFallBackProceed = true;
                                return [3 /*break*/, 11];
                            case 10:
                                this.log.warn("FALLBACK still processing ...................................");
                                _a.label = 11;
                            case 11: return [3 /*break*/, 13];
                            case 12:
                                error_6 = _a.sent();
                                isFallBackProceed = true;
                                this.log.error("--------- CRON FALLBACK ERROR ---------");
                                this.log.error(error_6);
                                this.log.error("--------- CRON FALLBACK ERROR ---------");
                                return [3 /*break*/, 13];
                            case 13: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SyncService.prototype.checkInternet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, dns
                        .lookup("google.com")
                        .then(function () { return true; })
                        .catch(function () { return false; })];
            });
        });
    };
    SyncService.CmdService = function (cmdObj, log) {
        return __awaiter(this, void 0, void 0, function () {
            var cmdData, _i, cmdData_1, ele;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log.warn(JSON.stringify(cmdObj, null, 2));
                        cmdData = cmdObj.cmd ? cmdObj.cmd : null;
                        if (!cmdData) return [3 /*break*/, 12];
                        if (!(typeof cmdData == "string")) return [3 /*break*/, 5];
                        if (!(cmdData && cmdData.includes("npm"))) return [3 /*break*/, 4];
                        return [4 /*yield*/, SysService_1.SysService.CmdService(cmdData, log)];
                    case 1:
                        _a.sent();
                        log.warn("cmd: " + cmdData);
                        return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.UpdateCall("JSON", log)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, SysService_1.SysService.ResetService(log)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 12];
                    case 5:
                        if (!Array.isArray(cmdData)) return [3 /*break*/, 12];
                        _i = 0, cmdData_1 = cmdData;
                        _a.label = 6;
                    case 6:
                        if (!(_i < cmdData_1.length)) return [3 /*break*/, 9];
                        ele = cmdData_1[_i];
                        if (!(ele && ele.includes("npm"))) return [3 /*break*/, 8];
                        return [4 /*yield*/, SysService_1.SysService.CmdService(ele, log)];
                    case 7:
                        _a.sent();
                        log.warn("cmd: " + ele);
                        _a.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 6];
                    case 9: return [4 /*yield*/, SyncServiceHelper_1.SyncServiceHelper.UpdateCall("JSON", log)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, SysService_1.SysService.ResetService(log)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return SyncService;
}());
exports.SyncService = SyncService;
