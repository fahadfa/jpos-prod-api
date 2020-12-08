"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// setx/export ENV_JPOS={ "dbHost":"localhost","dbPort":"5432","dbUser":"test_user","dbPassword":"test1234","dbDatabase":"test_db"  }
exports.dbOptions = {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Mpos1234",
    database: "mpos_db",
    logging: true,
    synchronize: false,
    entities: [__dirname + "/../entities/**/*{.ts,.js}"],
};
// =============== QA STAGING DATABASE ==================
exports.stageDbOptions = {
    name: "stage",
    type: "postgres",
    host: "xxxx",
    port: 5432,
    username: "xxxx",
    password: "xxxx",
    database: "xxxx",
};
exports.mailOptions = {
    host: "smtp.gmail.com",
    port: 465,
    user: "jpos@jazeerapaints.com",
    pass: "J2123@2123",
};
exports.setEnvConfig = function () {
    var envData = process.env.ENV_JPOS;
    console.log(envData);
    if (envData) {
        envData = JSON.parse(envData);
        if (envData.dbHost) {
            exports.dbOptions.host = envData.dbHost;
            exports.dbOptions.port = envData.dbPort;
            exports.dbOptions.username = envData.dbUser;
            exports.dbOptions.password = envData.dbPassword;
            exports.dbOptions.database = envData.dbDatabase;
        }
        if (envData.mailHost) {
            exports.mailOptions.host = envData.mailHost;
            exports.mailOptions.port = envData.mailPort;
            exports.mailOptions.user = envData.mailUser;
            exports.mailOptions.pass = envData.mailPassword;
        }
    }
    console.log(envData);
    exports.setStagingConfig();
};
var CrpytoData_1 = require("./CrpytoData");
var fs_1 = require("fs");
exports.setStagingConfig = function () {
    try {
        var data = fs_1.readFileSync(__dirname + "/../id_rsa", "utf-8");
        console.log("readFileSync Data:", data);
        var decodeData = CrpytoData_1.decrypt(JSON.parse(data));
        data = JSON.parse(decodeData);
        if (data) {
            exports.stageDbOptions.host = data.host;
            exports.stageDbOptions.port = data.port;
            exports.stageDbOptions.username = data.username;
            exports.stageDbOptions.database = data.database;
            exports.stageDbOptions.password = data.password;
            console.log(" \n\n Production DB set succesfully .... \n\n ");
        }
    }
    catch (error) {
        console.error(error);
    }
};

