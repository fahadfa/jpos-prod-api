"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
var config = require("./Config");
var EventEmitter = require("events");
var pool;
pg.types.setTypeParser(1114, function (stringValue) {
    return stringValue.replace(" ", "T");
});
var event;
exports.WatcherInit = function () {
    event = new EventEmitter();
    pool = new pg.Pool({
        connectionString: "postgres://" + config.dbOptions.username + ":" + config.dbOptions.password + "@" + config.dbOptions.host + ":" + config.dbOptions.port + "/" + config.dbOptions.database,
    });
    pool.connect(function (err, client) {
        if (err) {
            console.log(err);
        }
        if (client != null) {
            client.on("notification", function (msg) {
                dbEmitter(msg.payload);
            });
            client.query("LISTEN notify_table");
        }
    });
};
exports.DBEvent = function () {
    return event;
};
var dbEmitter = function (payload) {
    console.log("WATCHER", payload);
    var data = JSON.parse(payload);
    exports.DBEvent().emit(data.name, data.record);
};
