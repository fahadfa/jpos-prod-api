"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var file = __dirname + "/../assets/store.json";
exports.StoreInIt = function () {
    console.log("StoreInIt: " + file);
    var isExist = fs_1.existsSync(file) && exports.readFile() != "{}";
    if (!isExist) {
        fs_1.closeSync(fs_1.openSync(file, "w"));
        exports.writeFile(JSON.stringify({ syncdate: "1900-01-01T01:01:01" }));
    }
};
//main();
exports.writeFile = function (data) {
    if (data) {
        fs_1.writeFileSync(file, data, "utf8");
    }
};
exports.readFile = function () {
    var data = fs_1.readFileSync(file, "utf8");
    if (data && data.trim() != "" && data.includes("T")) {
        return data;
    }
    else {
        return "{}";
    }
};
exports.getItem = function (key, source) {
    console.log("store.getItem", key, source);
    if (key) {
        var data = exports.readFile();
        return JSON.parse(data)[key];
    }
    else {
        return { syncdate: "1900-01-01T01:01:01" };
    }
};
exports.setItem = function (key, value, source) {
    if (key) {
        console.log("store.setItem", key, value, source);
        var data = exports.readFile();
        if (data)
            data = JSON.parse(data);
        if (value && value.trim() != "") {
            data[key] = value;
            data = JSON.stringify(data);
            exports.writeFile(data);
        }
    }
};
