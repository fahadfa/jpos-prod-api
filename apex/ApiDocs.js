"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var swaggerJSDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var fs_1 = require("fs");
var path = require("path");
var APIDocs = /** @class */ (function () {
    function APIDocs() {
        this.router = express_1.Router();
        this.config = null;
    }
    APIDocs.prototype.getRouter = function () {
        var options = {
            customCss: ".swagger-ui .topbar { display: none }  .info{ display: none}"
        };
        var swaggerSpec = this.apiDocsConfig();
        this.router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
        return this.router;
    };
    APIDocs.prototype.getHost = function (req, needProtype) {
        return "" + (needProtype ? "http://" : "") + req.headers.host;
    };
    APIDocs.prototype.apiDocsConfig = function (host) {
        var apiList = APIDocs.getAllRoutes(path.join(__dirname, "./../assets/spec"), []);
        var spec = swaggerJSDoc({
            swaggerDefinition: {
                info: {
                    title: "Spec",
                    version: "1.0.0"
                },
                host: host,
                //Prefix as dledursc
                basePath: "/api/",
                produces: ["application/json"],
                consumes: ["application/x-www-form-urlencoded", "application/json"],
                securityDefinitions: {
                    jwt: {
                        type: "apiKey",
                        name: "Authorization",
                        in: "header"
                    }
                },
                security: [{ jwt: [] }]
            },
            apis: apiList
        });
        return spec;
    };
    APIDocs.getAllRoutes = function (dir, filelist) {
        var _files = fs_1.readdirSync(dir);
        filelist = filelist || [];
        _files.map(function (file) {
            // filter out .map and hidden files
            if (file.search(".map") < 0 && file.search(/^\./) < 0) {
                if (fs_1.statSync(path.join(dir, file)).isDirectory()) {
                    filelist = APIDocs.getAllRoutes(path.join(dir, file), filelist);
                }
                else {
                    if (file.search(".yaml") > 0) {
                        filelist.push(path.join(dir, file));
                    }
                }
            }
        });
        return filelist;
    };
    return APIDocs;
}());
exports.APIDocs = APIDocs;
