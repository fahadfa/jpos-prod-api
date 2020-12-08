"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log_1 = require("./utils/Log");
var SyncService_1 = require("./sync/SyncService");
var CallSync = function () {
    var syncService;
    try {
        syncService = new SyncService_1.SyncService("M");
    }
    catch (err) {
        Log_1.ulog.error("SyncService M Error: ");
        Log_1.ulog.error(err);
    }
};
CallSync();
