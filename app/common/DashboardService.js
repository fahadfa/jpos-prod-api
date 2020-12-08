"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var DashboardService = /** @class */ (function () {
    function DashboardService() {
        this.db = typeorm_1.getManager();
    }
    return DashboardService;
}());
exports.DashboardService = DashboardService;
