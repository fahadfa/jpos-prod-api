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
var Sms_1 = require("../../utils/Sms");
var Props_1 = require("../../constants/Props");
var PhoneVerification_1 = require("../../entities/PhoneVerification");
var PhoneVerificationDAO_1 = require("../repos/PhoneVerificationDAO");
var PhoneVerificationService = /** @class */ (function () {
    function PhoneVerificationService() {
        this.phoneVerificationDAO = new PhoneVerificationDAO_1.PhoneVerificationDAO();
        this.sms = new Sms_1.Sms();
    }
    PhoneVerificationService.prototype.entity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.phoneVerificationDAO.entity(id)];
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
    PhoneVerificationService.prototype.search = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.phoneVerificationDAO.search(item)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, App_1.App.unflatten(data)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PhoneVerificationService.prototype.save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, data, returnData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(item)];
                    case 1:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.phoneVerificationDAO.save(item)];
                    case 2:
                        data = _a.sent();
                        returnData = { id: data.id, message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 3: throw { status: 0, message: "INVALID_DATA" };
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    PhoneVerificationService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, result, returnData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.phoneVerificationDAO.entity(id)];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw { status: 0, message: "RECORD_NOT_FOUND" };
                        }
                        data.lastmodifiedBy = this.sessionInfo.id;
                        return [4 /*yield*/, this.phoneVerificationDAO.delete(data)];
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
    PhoneVerificationService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var previousItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        previousItem = null;
                        if (!(!item.id || item.id.toString() == "" || item.id.toString() == "0")) return [3 /*break*/, 1];
                        item.id = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.phoneVerificationDAO.entity(item.id)];
                    case 2:
                        previousItem = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!item.id) {
                            item.createdDateTime = new Date(App_1.App.DateNow());
                        }
                        else {
                            if (item.lastModifiedDate &&
                                previousItem.lastModifiedDate.toISOString() != new Date(item.lastModifiedDate).toISOString()) {
                                return [2 /*return*/, "updated"];
                            }
                        }
                        item.lastModifiedDate = new Date(App_1.App.DateNow());
                        item.lastmodifiedBy = this.sessionInfo.userName;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    PhoneVerificationService.prototype.sendOtp = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var phoneVerification, data, message, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        phoneVerification = new PhoneVerification_1.PhoneVerification();
                        phoneVerification.phoneNumber = item.phoneNumber;
                        phoneVerification.otpSent = App_1.App.generateOTP(4);
                        phoneVerification.customerId = item.customerId;
                        phoneVerification.dataareaid = this.sessionInfo.dataareaid;
                        phoneVerification.createdBy = this.sessionInfo.userName;
                        phoneVerification.createdDateTime = new Date(App_1.App.DateNow());
                        phoneVerification.countryCode = item.countryCode ? item.countryCode : 966;
                        phoneVerification.otpExpiryTime = new Date(App_1.App.DateNow());
                        phoneVerification.otpExpiryTime = new Date(phoneVerification.otpExpiryTime.getTime() + 10 * 60 * 1000);
                        return [4 /*yield*/, this.save(phoneVerification)];
                    case 1:
                        data = _a.sent();
                        message = "Your OTP is ";
                        return [4 /*yield*/, this.sms.sendMessage(phoneVerification.countryCode, phoneVerification.phoneNumber, message + phoneVerification.otpSent)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { id: data.id, message: "OTP Sent" }];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PhoneVerificationService.prototype.sendOtpToEmail = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var phoneVerification, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        phoneVerification = new PhoneVerification_1.PhoneVerification();
                        phoneVerification.phoneNumber = item.phoneNumber;
                        phoneVerification.email = item.phoneNumber;
                        phoneVerification.otpSent = App_1.App.generateOTP(4);
                        phoneVerification.customerId = item.customerId;
                        phoneVerification.dataareaid = this.sessionInfo.dataareaid;
                        phoneVerification.createdBy = this.sessionInfo.userName;
                        phoneVerification.createdDateTime = new Date(App_1.App.DateNow());
                        phoneVerification.countryCode = item.countryCode ? item.countryCode : 966;
                        phoneVerification.otpExpiryTime = new Date(App_1.App.DateNow());
                        phoneVerification.otpExpiryTime = new Date(phoneVerification.otpExpiryTime.getTime() + 10 * 60 * 1000);
                        return [4 /*yield*/, this.save(phoneVerification)];
                    case 1:
                        data = _a.sent();
                        // let message = `Your OTP is `;
                        return [4 /*yield*/, App_1.App.SendMail(phoneVerification.email, "OTP for Verification", "otpsent", phoneVerification)
                            // await this.sms.sendMessage(
                            //   phoneVerification.countryCode,
                            //   phoneVerification.phoneNumber,
                            //   message + phoneVerification.otpSent
                            // );
                        ];
                    case 2:
                        // let message = `Your OTP is `;
                        _a.sent();
                        // await this.sms.sendMessage(
                        //   phoneVerification.countryCode,
                        //   phoneVerification.phoneNumber,
                        //   message + phoneVerification.otpSent
                        // );
                        return [2 /*return*/, { id: data.id, message: "OTP Sent" }];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PhoneVerificationService.prototype.sendOtpToGroup = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var query, groupPhoneNums, sendMsgPromisesList_1, saveList_1, otp_1, otpexpire_1, data, ids, error_7;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!item.groupid) {
                            throw { status: 0, message: "Provide GroupId" };
                        }
                        query = "select ui.phone from user_info ui where ui.groupid ='" + item.groupid + "';";
                        return [4 /*yield*/, this.phoneVerificationDAO.executeQuery(query)];
                    case 1:
                        groupPhoneNums = _a.sent();
                        sendMsgPromisesList_1 = [];
                        saveList_1 = [];
                        otp_1 = App_1.App.generateOTP(4);
                        otpexpire_1 = new Date(App_1.App.DateNow());
                        groupPhoneNums.forEach(function (uiitem) {
                            var phoneVerification = new PhoneVerification_1.PhoneVerification();
                            phoneVerification.phoneNumber = uiitem.phone;
                            phoneVerification.otpSent = otp_1;
                            phoneVerification.customerId = item.groupid;
                            phoneVerification.dataareaid = _this.sessionInfo.dataareaid;
                            phoneVerification.createdBy = _this.sessionInfo.userName;
                            phoneVerification.createdDateTime = new Date(App_1.App.DateNow());
                            phoneVerification.countryCode = item.countryCode ? item.countryCode : 966;
                            phoneVerification.otpExpiryTime = new Date(otpexpire_1.getTime() + 10 * 60 * 1000);
                            saveList_1.push(phoneVerification);
                            sendMsgPromisesList_1.push(_this.sms.sendMessage(phoneVerification.countryCode, phoneVerification.phoneNumber, phoneVerification.otpSent));
                        });
                        return [4 /*yield*/, this.phoneVerificationDAO.saveAll(saveList_1)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, Promise.all(sendMsgPromisesList_1)];
                    case 3:
                        _a.sent();
                        ids = data.reduce(function (a, b) { return a.id + "," + b.id; });
                        return [2 /*return*/, { id: ids, message: "OTP Sent" }];
                    case 4:
                        error_7 = _a.sent();
                        throw error_7;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PhoneVerificationService.prototype.verfiyOtp = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var phoneVerification, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.phoneVerificationDAO.findOne({
                                phoneNumber: item.phoneNumber,
                                customerId: item.customerId,
                            })];
                    case 1:
                        phoneVerification = _a.sent();
                        if (!phoneVerification) return [3 /*break*/, 7];
                        if (!(phoneVerification.otpSent == item.otp)) return [3 /*break*/, 5];
                        if (!(phoneVerification.otpExpiryTime.getTime() > new Date(App_1.App.DateNow()).getTime())) return [3 /*break*/, 3];
                        phoneVerification.verificationStatus = "Verified";
                        return [4 /*yield*/, this.save(phoneVerification)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { message: "VERIFIED", status: true }];
                    case 3: throw Props_1.Props.OTP_EXPIRED;
                    case 4: return [3 /*break*/, 6];
                    case 5: throw { status: 0, message: "INVALID_OTP" };
                    case 6: return [3 /*break*/, 8];
                    case 7: throw { status: 0, message: "INVALID_MOBILE_NUMBER" };
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_8 = _a.sent();
                        throw error_8;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return PhoneVerificationService;
}());
exports.PhoneVerificationService = PhoneVerificationService;
