"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Log_1 = require("../../utils/Log");
var CrpytoData_1 = require("../../utils/CrpytoData");
var KeyService = /** @class */ (function () {
    function KeyService() {
    }
    KeyService.prototype.key = function (reqData) {
        try {
            var key = CrpytoData_1.atob(reqData.key);
            var data = CrpytoData_1.encrypt(key);
            fs.writeFile(__dirname + "/../../../id_rsa", JSON.stringify(data), function (err) {
                if (err) {
                    Log_1.log.error(err);
                }
                else {
                    Log_1.log.info("Successfully wrote file");
                }
            });
            return { message: "Success" };
        }
        catch (error) {
            return { message: "Not Success", error: error };
        }
    };
    return KeyService;
}());
exports.KeyService = KeyService;
