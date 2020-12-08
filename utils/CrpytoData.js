"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptoData = require("crypto");
var algorithm = "aes-256-ctr";
var secretKey = "9OVH6sdmpNWjRRIqCc7rdxs01lwH9999";
var iv = cryptoData.randomBytes(16);
exports.encrypt = function (text) {
    var cipher = cryptoData.createCipheriv(algorithm, secretKey, iv);
    var encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return {
        iv: iv.toString("hex"),
        content: encrypted.toString("hex"),
    };
};
exports.decrypt = function (hash) {
    var decipher = cryptoData.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, "hex"));
    var decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, "hex")), decipher.final()]);
    return decrpyted.toString();
};
exports.btoa = function (str) {
    return Buffer.from(str).toString("base64");
};
exports.atob = function (str) {
    return Buffer.from(str, "base64").toString();
};
