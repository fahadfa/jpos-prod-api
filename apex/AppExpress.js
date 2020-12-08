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
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var ApiDocs_1 = require("./ApiDocs");
var AppController_1 = require("./AppController");
var App_1 = require("../utils/App");
var Log_1 = require("../utils/Log");
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var AppExpress = /** @class */ (function () {
    function AppExpress() {
        this.addSessionInfo = function (req) {
            Log_1.log.info("-----------------------------------------------------");
            var sessionInfo = App_1.App.DecodeJWT(req.headers["authorization"]);
            Log_1.log.info("sessionInfo: ", sessionInfo);
            Log_1.log.info("-----------------------------------------------------");
            if (!req.body) {
                req.body = {};
            }
            if (sessionInfo) {
                req.body.sessionInfo = sessionInfo.identity;
            }
        };
        this.express = express_1.default();
        this.express.use(body_parser_1.json({ limit: "150mb" }));
        this.express.use(express_fileupload_1.default());
        // this.express.use(bodyParser.json({limit: '150mb'}))
        this.errorHandle();
        this.chunkDataHandle();
        this.mountRoutes();
    }
    AppExpress.prototype.mountRoutes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var router, apiDocs, appController, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        router = express_1.default.Router();
                        router.get("/", function (req, res) {
                            res.json({
                                message: "Hello World! Website Applications",
                            });
                        });
                        this.express.use("/", router);
                        apiDocs = new ApiDocs_1.APIDocs();
                        this.express.use("/apidocs", apiDocs.getRouter());
                        appController = new AppController_1.AppController();
                        _b = (_a = this.express).use;
                        _c = ["/api"];
                        return [4 /*yield*/, appController.getRouter()];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    AppExpress.prototype.chunkDataHandle = function () {
        var _this = this;
        this.express.all("*", function (req, res, next) {
            Log_1.log.info("----------------> req.url: " + req.url);
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
            res.setHeader("Access-Control-Allow-Headers", "accept, Content-Type, Authorization");
            if (req.headers["content-type"] &&
                req.headers["content-type"].indexOf("application/x-www-form-urlencoded") > -1) {
                _this.parsePost(req, function (data) {
                    if (data && data != "") {
                        req.body = data;
                    }
                    _this.addSessionInfo(req);
                    next();
                });
            }
            else {
                _this.addSessionInfo(req);
                next();
            }
        });
    };
    AppExpress.prototype.parsePost = function (req, callback) {
        var data = "";
        req.on("data", function (chunk) {
            data += chunk;
        });
        req.on("end", function () {
            if (data != "") {
                data = JSON.parse(data);
            }
            callback(data);
        });
    };
    AppExpress.prototype.errorHandle = function () {
        this.express.use(function (err, request, response, next) {
            //response.status(err.status || 500);
            response.json({
                status: 0,
                error: {
                    code: err.status,
                    message: "Server side error",
                },
            });
        });
    };
    AppExpress.prototype.getServer = function () {
        return require("http").Server(this.express);
    };
    return AppExpress;
}());
exports.default = AppExpress;
