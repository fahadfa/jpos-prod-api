"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var SalesTargets_1 = require("../../entities/SalesTargets");
var SalesTargetsDAO = /** @class */ (function () {
    function SalesTargetsDAO() {
        this.dao = typeorm_1.getRepository(SalesTargets_1.SalesTargets);
    }
    SalesTargetsDAO.prototype.getDAO = function () {
        return this.dao;
    };
    return SalesTargetsDAO;
}());
exports.SalesTargetsDAO = SalesTargetsDAO;
