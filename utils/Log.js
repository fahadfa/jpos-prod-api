"use strict";
// import { createLogger, format, transports } from "winston";
Object.defineProperty(exports, "__esModule", { value: true });
// import { logOptions, logSyncOptions, logUpdateOptions } from "./Config";
// export const log = createLogger({
//   exitOnError: false,
//   format: format.combine(
//     format.timestamp({
//       format: "YYYY-MM-DDTHH:mm:ss"
//     }),
//     format.simple()
//   ),
//   transports: [new transports.File(logOptions.file), new transports.Console(logOptions.console)]
// });
// export const slog = createLogger({
//   exitOnError: false,
//   format: format.combine(
//     format.timestamp({
//       format: "YYYY-MM-DDTHH:mm:ss"
//     }),
//     format.simple()
//   ),
//   transports: [new transports.File(logSyncOptions.file), new transports.Console(logSyncOptions.console)]
// });
// export const ulog = createLogger({
//   exitOnError: false,
//   format: format.combine(
//     format.timestamp({
//       format: "YYYY-MM-DDTHH:mm:ss"
//     }),
//     format.simple()
//   ),
//   transports: [new transports.File(logUpdateOptions.file), new transports.Console(logUpdateOptions.console)]
// });
// export const log = require("log4js");
// export const slog = require("log4js");
// export const ulog = require("log4js");
// log.configure({
//   appenders: [{ type: "file", filename: __dirname + "/../../logs/jpos.log", maxLogSize: 20480, backups: 10 }]
// });
// slog.configure({
//   appenders: [{ type: "file", filename: __dirname + "/../../logs/jpos.log", maxLogSize: 20480, backups: 10 }]
// });
// ulog.configure({
//   appenders: [{ type: "file", filename: __dirname + "/../../logs/jpos.log", maxLogSize: 20480, backups: 10 }]
// });
// import* as log4js from "log4js";
// log4js.loadAppender("file");
// log4js.addAppender(log4js.appenders.file(__dirname + "/../../logs/jpos.log"), "log");
// log4js.addAppender(log4js.appenders.file(__dirname + "/../../logs/sync.log"), "slog");
// log4js.addAppender(log4js.appenders.file(__dirname + "/../../logs/update.log"), "ulog");
// export const log = log4js.getLogger("log");
// export const slog = log4js.getLogger("slog");
// export const ulog = log4js.getLogger("ulog");
var log4js_1 = require("log4js");
log4js_1.configure({
    appenders: {
        app: {
            type: "multiFile",
            base: __dirname + "/../../logs/jpos/",
            property: "type",
            extension: ".log",
            maxLogSize: 1000000,
            backups: 1,
        },
        out: { type: "stdout", layout: { type: "dummy" } },
        emergencies: {
            type: "file",
            filename: __dirname + "/../../logs/jpos/error.log",
            maxLogSize: 10000000,
            backups: 10,
        },
        error: {
            type: "logLevelFilter",
            appender: "emergencies",
            level: "error",
        },
    },
    categories: {
        default: { appenders: ["app", "out", "error"], level: "debug" },
    },
});
exports.log = log4js_1.getLogger("app");
exports.log.addContext("type", "app");
exports.sdlog = log4js_1.getLogger("sync");
exports.sdlog.addContext("type", "syncd");
exports.smlog = log4js_1.getLogger("sync");
exports.smlog.addContext("type", "syncm");
exports.stlog = log4js_1.getLogger("sync");
exports.stlog.addContext("type", "synct");
exports.s1log = log4js_1.getLogger("sync");
exports.s1log.addContext("type", "sync1");
exports.s2log = log4js_1.getLogger("sync");
exports.s2log.addContext("type", "sync2");
exports.sflog = log4js_1.getLogger("sync");
exports.sflog.addContext("type", "syncf");
exports.ulog = log4js_1.getLogger("update");
exports.ulog.addContext("type", "update");
exports.hlog = log4js_1.getLogger("health");
exports.hlog.addContext("type", "health");
exports.saleslog = log4js_1.getLogger("sales");
exports.saleslog.addContext("type", "sales");
// export const log = getLogger();
// export const slog = getLogger();
// export const ulog = getLogger();
