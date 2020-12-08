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
var App_1 = require("../../utils/App");
var Props_1 = require("../../constants/Props");
var CusttableService_1 = require("../services/CusttableService");
var OverDueService_1 = require("../services/OverDueService");
var RawQuery_1 = require("../common/RawQuery");
var CusttableController = /** @class */ (function () {
    function CusttableController() {
        this.componentName = "Customers";
        this.router = express_1.Router();
        this.service = new CusttableService_1.CusttableService();
        this.overDueService = new OverDueService_1.OverDueService();
        this.rawQuery = new RawQuery_1.RawQuery();
    }
    CusttableController.prototype.moduleName = function () {
        return this.constructor.name;
    };
    CusttableController.prototype.getRouter = function () {
        var _this = this;
        this.router.get("/:id/creditlimitavailable", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var params, id, availableLimit, foo, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        this.service.sessionInfo = request.body.sessionInfo;
                        App_1.App.PrintLog(this.moduleName(), "Entity", this.service.sessionInfo);
                        return [4 /*yield*/, App_1.App.ValildateUserAccess(this.service.sessionInfo, this.moduleName(), Props_1.Props.ACCESS_READ)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        params = request.params;
                        id = params.id;
                        return [4 /*yield*/, this.service.getAvailableCreditLimit(id)];
                    case 2:
                        availableLimit = _a.sent();
                        return [4 /*yield*/, this.rawQuery.getPaymTermDays("W45")];
                    case 3:
                        foo = _a.sent();
                        console.log(foo);
                        response.json({ availableLimit: availableLimit });
                        return [3 /*break*/, 5];
                    case 4: throw this.service.sessionInfo ? this.service.sessionInfo : { message: Props_1.Props.TOKEN_MESSAGE };
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        console.log(error_1);
                        response.send({ status: 0, error: error_1 });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
        this.router.get("/:id", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, params, id, params_1, result_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 12, , 13]);
                        reqData = void 0;
                        result = null;
                        this.service.sessionInfo = request.body.sessionInfo;
                        App_1.App.PrintLog(this.moduleName(), "Entity", this.service.sessionInfo);
                        params = request.params;
                        id = params.id;
                        reqData = request.params ? id : null;
                        console.log(this.service.sessionInfo);
                        return [4 /*yield*/, App_1.App.ValildateUserAccess(this.service.sessionInfo, this.moduleName(), Props_1.Props.ACCESS_READ)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 10];
                        if (!(reqData == "paginate")) return [3 /*break*/, 3];
                        params_1 = request.query;
                        if (!params_1.skip) {
                            params_1.skip = 1;
                        }
                        if (!params_1.take) {
                            params_1.take = 10;
                        }
                        return [4 /*yield*/, this.service.paginate(params_1)];
                    case 2:
                        result_1 = _a.sent();
                        if (result_1.data.length > 0) {
                            response.json({ totalCount: result_1.count, data: result_1.data });
                        }
                        else {
                            response.json({ totalCount: 0, data: result_1.data });
                        }
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(reqData == "defaultcustomer")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.service.entity(request.body.sessionInfo.defaultcustomerid)];
                    case 4:
                        result = _a.sent();
                        result.accountnum = null;
                        result.name = null;
                        result.address = null;
                        result.phone = null;
                        // result.currency = null;
                        result.rcusttype = null;
                        result.contactpersonid = null;
                        result.custcountry = null;
                        result.city = null;
                        result.street = null;
                        result.districtcode = null;
                        result.citycode = null;
                        result.county = null;
                        result.namealias = null;
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(reqData == "getdefaultcustomer")) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.service.entity(request.body.sessionInfo.defaultcustomerid)];
                    case 6:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.service.entity(reqData)];
                    case 8:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10: throw this.service.sessionInfo ? this.service.sessionInfo : { message: Props_1.Props.TOKEN_MESSAGE };
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        error_2 = _a.sent();
                        console.log(error_2);
                        response.send({ status: 0, error: error_2 });
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        }); });
        this.router.get("/", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        reqData = void 0;
                        result = null;
                        this.service.sessionInfo = request.body.sessionInfo;
                        App_1.App.PrintLog(this.moduleName(), "Search", this.service.sessionInfo);
                        reqData = request.query ? request.query : {};
                        return [4 /*yield*/, App_1.App.ValildateUserAccess(this.service.sessionInfo, this.moduleName(), Props_1.Props.ACCESS_READ)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.search(reqData)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw this.service.sessionInfo ? this.service.sessionInfo : { message: Props_1.Props.TOKEN_MESSAGE };
                    case 4:
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        console.log(error_3);
                        response.send({ status: 0, error: error_3 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        this.router.post("/paginate/customerdetails", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var params, result, id, reqData, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        params = request.params;
                        // const id: any = request.params.id;
                        this.service.sessionInfo = request.body.sessionInfo;
                        result = null;
                        id = params.id;
                        id = request.params ? id : null;
                        reqData = request.body ? request.body.data : {};
                        App_1.App.PrintLog(this.constructor.name, "Search", this.service.sessionInfo);
                        return [4 /*yield*/, App_1.App.ValildateUserAccess(this.service.sessionInfo, this.componentName, Props_1.Props.ACCESS_READ)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.mobile_paginate(reqData)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw this.service.sessionInfo ? this.service.sessionInfo : { message: Props_1.Props.TOKEN_MESSAGE };
                    case 4:
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        console.log(error_4);
                        response.send({ status: 0, error: error_4 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        this.router.put("/", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        reqData = void 0;
                        result = null;
                        this.service.sessionInfo = request.body.sessionInfo;
                        App_1.App.PrintLog(this.moduleName(), "Save", this.service.sessionInfo);
                        reqData = request.body ? request.body.data : {};
                        return [4 /*yield*/, App_1.App.ValildateUserAccess(this.service.sessionInfo, this.moduleName(), Props_1.Props.ACCESS_WRITE)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.save(reqData)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw this.service.sessionInfo ? this.service.sessionInfo : { message: Props_1.Props.TOKEN_MESSAGE };
                    case 4:
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 6];
                    case 5:
                        error_5 = _a.sent();
                        console.log(error_5);
                        response.send({ status: 0, error: error_5 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        this.router.delete("/:id", function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var reqData, result, params, id, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        reqData = void 0;
                        result = null;
                        this.service.sessionInfo = request.body.sessionInfo;
                        App_1.App.PrintLog(this.moduleName(), "Entity", this.service.sessionInfo);
                        params = request.params;
                        id = params.id;
                        reqData = request.params ? id : null;
                        console.log(this.service.sessionInfo);
                        return [4 /*yield*/, App_1.App.ValildateUserAccess(this.service.sessionInfo, this.moduleName(), Props_1.Props.ACCESS_READ)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.service.delete(reqData)];
                    case 2:
                        result = _a.sent();
                        response.send({ status: 1, data: result });
                        return [3 /*break*/, 4];
                    case 3: throw this.service.sessionInfo ? this.service.sessionInfo : { message: Props_1.Props.TOKEN_MESSAGE };
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_6 = _a.sent();
                        console.log(error_6);
                        response.send({ status: 0, error: error_6 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        return this.router;
    };
    return CusttableController;
}());
exports.CusttableController = CusttableController;
