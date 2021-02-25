"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var jwt = __importStar(require("jsonwebtoken"));
var Handlebars = __importStar(require("handlebars"));
var nodemailer_1 = require("nodemailer");
var Config = __importStar(require("./Config"));
var Log_1 = require("./Log");
var bcryptjs_1 = require("bcryptjs");
var RawQuery_1 = require("../app/common/RawQuery");
var Props_1 = require("../constants/Props");
var dns = require("dns").promises;
var App = /** @class */ (function () {
    function App() {
    }
    App.UniqueCode = function () {
        var time = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) { }
            time = new Date().getTime();
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    };
    App.UniqueNumber = function () {
        var time = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) { }
            time = new Date().getTime();
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    };
    App.convertUTCDateToLocalDate = function (date, timezoneoffset) {
        var dateString = "";
        // console.log(date.getTimezoneOffset(), timezoneoffset)
        // console.log(date.getTimezoneOffset() + "" !== timezoneoffset)
        // if (date.getTimezoneOffset() + "" !== timezoneoffset) {
        if (timezoneoffset) {
            var diffseconds = timezoneoffset * 60;
            var hours = parseInt(diffseconds / 3600 + "");
            var minutes = (diffseconds / 60) % 60;
            var seconds = diffseconds % 60;
            var yearOrg = date.getFullYear();
            var dateOrg = date.getDate();
            var hoursOrg = date.getHours();
            var minutesOrg = date.getMinutes();
            var secondsOrg = date.getSeconds();
            date.setDate(dateOrg);
            date.setYear(yearOrg);
            date.setHours(hoursOrg - hours);
            date.setMinutes(minutesOrg - minutes);
            date.setSeconds(secondsOrg - seconds);
        }
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        month < "10" ? (month = "0" + month) : null;
        day < "10" ? (day = "0" + day) : null;
        hr < "10" ? (hr = "0" + hr) : null;
        min < "10" ? (min = "0" + min) : null;
        sec < "10" ? (sec = "0" + sec) : null;
        dateString += date.getFullYear() + "/" + month + "/" + day + " " + hr + ":" + min + ":" + sec;
        // console.log("dateString===========>", dateString)
        return dateString;
    };
    App.uuidv4 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    App.UniqueID = function (name, type) {
        var str = "";
        if (type) {
            str = type + "_" + name;
        }
        else {
            str = name + "_" + App.UniqueNumber();
        }
        str = str.replace(App.NON_ALPHA_NUMARIC, "_");
        str = str.substr(0, 128);
        return str.toUpperCase();
    };
    App.DateNow = function () {
        var d1 = new Date();
        var d3 = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds(), d1.getUTCMilliseconds());
        return d3.toISOString();
    };
    App.Send = function (req, res, promise) {
        var respObj = {};
        promise
            .then(function (data) {
            respObj.status = 1;
            respObj.data = data;
            res.jsonp(respObj);
        })
            .catch(function (err) {
            Log_1.log.info(err);
            respObj.status = 0;
            respObj.error = err;
            res.jsonp(respObj);
        });
    };
    App.HtmlRender = function (fileName, data) {
        var source = path.join(__dirname, "/../assets/templates/" + fileName + ".html");
        // log.info("Html Source: " + source);
        source = fs.readFileSync(source, "utf8");
        var template = Handlebars.compile(source);
        data = JSON.parse(JSON.stringify(data));
        var result = template(data);
        // log.info(result);
        return result;
    };
    // public static Print(template: any, res: any, promise: any) {
    //   promise
    //     .then((data: any) => {
    //       template = path.join(
    //         __dirname,
    //         "/../../docs/templates/" + template + ".html"
    //       );
    //       template = fs.readFileSync(template, "utf8");
    //       data = JSON.parse(JSON.stringify(data));
    //       //log.info(data.data);
    //       jsreport
    //         .render({
    //           template: {
    //             engine: "handlebars",
    //             content: template,
    //             recipe: "html"
    //           },
    //           data: data.data
    //         })
    //         .then((out: any) => {
    //           log.info(out.stream);
    //           out.stream.pipe(res);
    //         })
    //         .catch((err: any) => {
    //           var respObj: any = {};
    //           log.info(err);
    //           respObj.status = 0;
    //           respObj.error = err;
    //           res.jsonp(respObj);
    //         });
    //     })
    //     .catch((err: any) => {
    //       var respObj: any = {};
    //       log.info(err);
    //       respObj.status = 0;
    //       respObj.error = err;
    //       res.jsonp(respObj);
    //     });
    // }
    App.EncodeJWT = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RawQuery_1.RawQuery.ConstData("TOKEN")];
                    case 1:
                        token = _a.sent();
                        Props_1.Props._TOKEN = token.token;
                        Props_1.Props.EXPIRE_TIME = token.expiresAt;
                        return [2 /*return*/, jwt.sign(data, Props_1.Props._TOKEN, { expiresIn: Props_1.Props.EXPIRE_TIME })];
                }
            });
        });
    };
    App.DecodeJWT = function (token) {
        if (token && token != null && token != "null") {
            try {
                token = token.includes(" ") ? token.replace("jwt ", "").replace("JWT ", "") : token;
                var userInfo_1 = jwt.verify(token, Props_1.Props._TOKEN);
                return userInfo_1;
            }
            catch (err) {
                Log_1.log.error("--------- token error ------------->");
                Log_1.log.error(err);
                Log_1.log.error("<--------- token error -------------");
                return err;
            }
        }
        else {
            return null;
        }
    };
    App.generateOTP = function (otpLength) {
        var digits = "0123456789";
        // var otpLength = 6;
        var otp = "";
        for (var i = 1; i <= otpLength; i++) {
            var index = Math.floor(Math.random() * digits.length);
            otp = otp + digits[index];
        }
        return otp;
    };
    App.CreateEmailAccount = function () {
        return nodemailer_1.createTransport({
            host: Config.mailOptions.host,
            port: Config.mailOptions.port,
            secure: true,
            requireTLS: true,
            auth: {
                user: Config.mailOptions.user,
                pass: Config.mailOptions.pass,
            },
        });
    };
    App.ValildateUserAccess = function (data, component, access) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid, error_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Log_1.log.info(data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 10, , 11]);
                        if (!data) return [3 /*break*/, 8];
                        if (!(data.name && data.message && data.name.lowercase().indexOf("error") > -1)) return [3 /*break*/, 2];
                        return [2 /*return*/, false];
                    case 2:
                        isValid = false;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, RawQuery_1.RawQuery.CheckUserInfo(data)];
                    case 4:
                        isValid = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        throw error_1;
                    case 6:
                        if (isValid == true) {
                            return [2 /*return*/, true];
                        }
                        else if (isValid == "INACTIVE") {
                            throw { message: "ACCOUNT_DEACTIVATED_PLEASE_CONTACT_ADMIN" };
                        }
                        else {
                            throw { message: "USER_NOT_RELATED_TO_THIS_STORE" };
                        }
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8: return [2 /*return*/, false];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_1 = _a.sent();
                        Log_1.log.info(e_1);
                        throw e_1;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    App.DaysBack = function (date, backValue, isDays) {
        if (isDays === void 0) { isDays = true; }
        date = new Date(date);
        if (isDays) {
            date.setDate(date.getDate() - backValue);
        }
        else {
            date.setMilliseconds(date.getMilliseconds() - backValue);
        }
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
        return date;
    };
    App.DaysDiff = function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        var diff = (t2 - t1) / (24 * 3600 * 1000);
        return parseInt(diff);
    };
    App.SyncMinDiff = function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
        var diff = (t2 - t1) / (3600 * 1000);
        console.log(diff);
        return parseInt(diff);
    };
    App.PrintLog = function (routerName, routerType, sessionInfo) {
        Log_1.log.info(new Date().toISOString() + " : " + routerName + " :  " + routerType + " : " + JSON.stringify(sessionInfo));
    };
    App.HashSync = function (data) {
        return bcryptjs_1.hashSync(data, 8);
    };
    App.HashCompareSync = function (param1, param2) {
        return bcryptjs_1.compareSync(param1, param2);
    };
    App.ArrayJoin = function (items, attr) {
        var attrs = [];
        console.log(items);
        items.forEach(function (element) {
            attrs.push(element[attr]);
        });
        return attrs.join(",");
    };
    App.SendMail = function (to, subject, htmlPage, renderData) {
        return __awaiter(this, void 0, void 0, function () {
            var transporter, Options;
            return __generator(this, function (_a) {
                transporter = App.CreateEmailAccount();
                Options = {
                    from: Config.mailOptions.user,
                    to: to,
                    subject: subject,
                    html: App.HtmlRender(htmlPage, {
                        data: renderData,
                    }),
                };
                return [2 /*return*/, new Promise(function (reslove, reject) {
                        transporter.sendMail(Options, function (err, info) {
                            console.log(info);
                            if (err) {
                                reject(err);
                            }
                            reslove({
                                message: "Mail sent successfully",
                            });
                        });
                    })];
            });
        });
    };
    App.unflatten = function (arr) {
        var tree = [];
        var mappedArr = {};
        var arrElem;
        var mappedElem;
        // First map the nodes of the array to an object -> create a hash table.
        for (var i = 0, len = arr.length; i < len; i++) {
            arrElem = arr[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]["children"] = [];
        }
        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                // If the element is not at the root level, add it to its parent array of children.
                if (mappedElem.parentId) {
                    mappedArr[mappedElem["parentId"]]["children"].push(mappedElem);
                }
                // If the element is at the root level, add it to first level elements array.
                else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    };
    App.Sleep = function (millseconds) {
        App.SystemSleep(millseconds);
    };
    App.checkInternet = function () {
        return dns
            .lookup("google.com")
            .then(function () { return true; })
            .catch(function () { return false; });
    };
    App.getMacAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                try {
                    address = require("address");
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            address(function (err, addrs) {
                                if (addrs && addrs.mac) {
                                    console.log(addrs.ip, addrs.ipv6, addrs.mac);
                                    // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
                                    resolve(addrs.mac);
                                }
                                else {
                                    resolve("Not Found Mac Address");
                                }
                            });
                        })];
                }
                catch (err) {
                    return [2 /*return*/, Promise.resolve("Not Found Mac Address")];
                }
                return [2 /*return*/];
            });
        });
    };
    App.getItemNamesInSalesLines = function (salesLines, dao) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIds, itemNames_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemIds = salesLines.map(function (line) { return line.itemid; });
                        if (!(itemIds.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, dao.findByItemIds(itemIds)];
                    case 1:
                        itemNames_1 = _a.sent();
                        salesLines.forEach(function (line, index) {
                            var name = itemNames_1.find(function (item) { return item.code == line.itemid; });
                            if (name) {
                                salesLines[index] = __assign({}, salesLines[index], name);
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    App.uniqueId = 0;
    App.TOKEN_MESSAGE = "Please enter the token.";
    App.SAVED_SUCCESSFULLY = "Saved Successfully.";
    App.REMOVED_SUCCESSFULLY = "Removed Successfully.";
    App.INVALID_DATA = "Please enter valid data.";
    App.NON_ALPHA_NUMARIC = /[^\w\s]/g;
    App.SystemSleep = require("system-sleep");
    return App;
}());
exports.App = App;
