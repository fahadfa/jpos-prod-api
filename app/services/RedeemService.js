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
var Props_1 = require("../../constants/Props");
var PhoneVerificationService_1 = require("../services/PhoneVerificationService");
var RedeemService = /** @class */ (function () {
    function RedeemService() {
        this.axios = require("axios");
        this.url = "https://api-qa.jazeerapaints.com/api";
        this.otpStore = new Map();
        this.otp_token = "WTRNVnBLa3Q5UE5tTy9MczVtRWY0QT09";
        this.phoneVerificationService = new PhoneVerificationService_1.PhoneVerificationService();
    }
    RedeemService.prototype.getCustomerPoints = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log(token);
                        url = "http://pos.al-jazeerapaints.com:200/api/CustomerPoints?mobileNum=" + params.mobile + "&inventLocationId=" + params.inventLocationId;
                        console.log(url);
                        this.axios.defaults.headers["Token"] = token;
                        console.log(this.axios.defaults.headers);
                        return [4 /*yield*/, this.axios.get(url)];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data.data];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RedeemService.prototype.getCustomerSlabs = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log(token);
                        url = "http://pos.al-jazeerapaints.com:200/api/CustomerSlabs?mobileNum=" + params.mobile;
                        console.log(url);
                        this.axios.defaults.headers["Token"] = token;
                        console.log(this.axios.defaults.headers);
                        return [4 /*yield*/, this.axios.get(url)];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data.data];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //0550590391
    RedeemService.prototype.getOtp = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var reqData, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // let token = await this.getToken();
                        // console.log(token);
                        // let url = `https://api.jazeerapaints.com/api/gen_otp?phone=${params.mobile}`;
                        // let url = `${this.url}/gen_otp`;
                        // console.log(url);
                        // this.axios.defaults.headers["Token"] = token;
                        // console.log(this.axios.defaults.headers);
                        // let data = await this.axios.get(url + `?phone=${params.mobile}`);
                        // console.log(data);
                        // this.otpStore.set(params.mobile, { token: data.data.otp_token, validate: false });
                        // return data.data;
                        this.phoneVerificationService.sessionInfo = this.sessionInfo;
                        reqData = { phoneNumber: params.mobile, customerId: "REDEEM_SERVICE" };
                        return [4 /*yield*/, this.phoneVerificationService.sendOtp(reqData)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { otp_token: "WTRNVnBLa3Q5UE5tTy9MczVtRWY0QT09", status: 1, message: data.message }];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RedeemService.prototype.validateOtp = function (reqdata) {
        return __awaiter(this, void 0, void 0, function () {
            var reqData, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // let token = await this.getToken();
                        // console.log(this.otpStore.get(reqdata.mobile));
                        // let otp_token: any = this.otpStore.get(reqdata.mobile).token;
                        // let otp: any = reqdata.otp;
                        // console.log(reqdata);
                        // let url = `${this.url}/check_otp`;
                        // console.log(url);
                        // this.axios.defaults.headers["Token"] = token;
                        // // console.log(this.axios.defaults.headers);
                        // let data = await this.axios.post(url, { phone: reqdata.mobile, otp: otp, otp_token: otp_token });
                        // console.log(data.data);
                        // return data.data;
                        this.phoneVerificationService.sessionInfo = this.sessionInfo;
                        reqData = { customerId: "REDEEM_SERVICE", phoneNumber: reqdata.mobile, otp: reqdata.otp };
                        console.log(reqData);
                        return [4 /*yield*/, this.phoneVerificationService.verfiyOtp(reqData)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { message: "VERIFIED", status: true }];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RedeemService.prototype.getActiveSlabs = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log(token);
                        url = "http://pos.al-jazeerapaints.com:200/api/ActiveSlabs";
                        console.log(url);
                        this.axios.defaults.headers["Token"] = token;
                        console.log(this.axios.defaults.headers);
                        return [4 /*yield*/, this.axios.get(url)];
                    case 2:
                        data = _a.sent();
                        console.log(Object.keys(data));
                        console.log();
                        return [2 /*return*/, data.data];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RedeemService.prototype.Redeem = function (reqData) {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        token = _a.sent();
                        console.log(token);
                        url = "http://pos.al-jazeerapaints.com:200/api/Redeem";
                        console.log(url);
                        this.axios.defaults.headers["Token"] = token;
                        console.log(this.axios.defaults.headers);
                        return [4 /*yield*/, this.axios.post(url, reqData)];
                    case 2:
                        data = _a.sent();
                        console.log(Object.keys(data));
                        console.log();
                        return [2 /*return*/, data.data];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RedeemService.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, url, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        token = void 0;
                        url = Props_1.Props.REDEEM_URL + "?clientId=" + Props_1.Props.REDEEM_CLIENT_ID + "&clientSecret=" + Props_1.Props.REDEEM_CLIENT_SECRET;
                        console.log(url);
                        return [4 /*yield*/, this.axios.post(url)];
                    case 1:
                        data = _a.sent();
                        token = data.headers.token;
                        return [2 /*return*/, token];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RedeemService;
}());
exports.RedeemService = RedeemService;
