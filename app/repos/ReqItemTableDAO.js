"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReqItemTable_1 = require("../../entities/ReqItemTable");
var typeorm_1 = require("typeorm");
var ReqItemTableDAO = /** @class */ (function () {
    function ReqItemTableDAO() {
        this.dao = typeorm_1.getRepository(ReqItemTable_1.ReqItemTable);
    }
    ReqItemTableDAO.prototype.getRepository = function () {
        return this.dao;
    };
    return ReqItemTableDAO;
}());
exports.ReqItemTableDAO = ReqItemTableDAO;
