"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("./utils/Log");
var SyncService_1 = require("./sync/SyncService");
var CallSync = function () {
    var syncService;
    try {
        syncService = new SyncService_1.SyncService("D");
    }
    catch (err) {
        Log_1.ulog.error("SyncService D Error: ");
        Log_1.ulog.error(err);
    }
};
CallSync();
