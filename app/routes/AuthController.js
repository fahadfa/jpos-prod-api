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
var express_1 = require("express");
var AuthService_1 = require("../services/AuthService");
var Log_1 = require("../../utils/Log");
var AuthController = /** @class */ (function () {
    function AuthController() {
        this.router = express_1.Router();
        this.authService = new AuthService_1.AuthService();
    }
    AuthController.prototype.checkProceed = function (request) { };
    AuthController.prototype.getRouter = function () {
        var _this = this;
        this.router.get("/forgotpassword", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        reqData = void 0;
                        result = null;
                        reqData = request.query ? request.query : {};
                        return [4 /*yield*/, this.authService.forgotPassword(reqData)];
                    case 1:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        response.send({ status: 0, error: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.put("/resetpassword", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        reqData = request.body.data;
                        result = null;
                        return [4 /*yield*/, this.authService.resetPassword(reqData)];
                    case 1:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        response.send({ status: 0, error: error_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        this.router.post("/token", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        reqData = request.body.data;
                        result = null;
                        return [4 /*yield*/, this.authService.refreshToken(reqData)];
                    case 1:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        response.send({ status: 0, error: error_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        //signin Controller
        this.router.post("/", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, sessionInfo, result;
            return __generator(this, function (_a) {
                Log_1.log.info("signin Controller ");
                reqData = request.body;
                sessionInfo = {};
                result = null;
                if (reqData) {
                    this.authService.sessionInfo = sessionInfo;
                    result = this.authService.signin(reqData);
                }
                else {
                    result = { message: "Invalid Data" };
                }
                //App.Send(request, response, result);
                result.then(function (data) {
                    Log_1.log.info("signin Controller response");
                    response.send(data);
                });
                result.catch(function (error) {
                    Log_1.log.info("signin Controller error");
                    response.send({ status: 0, error: error });
                });
                return [2 /*return*/];
            });
        }); });
        return this.router;
    };
    return AuthController;
}());
exports.AuthController = AuthController;
