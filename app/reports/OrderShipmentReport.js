"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var App_1 = require("../../utils/App");
var SalesTableService_1 = require("../services/SalesTableService");
var RawQuery_1 = require("../common/RawQuery");
var InventTransDAO_1 = require("../repos/InventTransDAO");
var UpdateInventoryService_1 = require("../services/UpdateInventoryService");
//var QRCode = require("qrcode");
var SvgToDataURL = require("svg-to-dataurl");
var QRCode = require("qrcode-svg");
var typeorm_2 = require("typeorm");
var OrderShipmentReport = /** @class */ (function () {
    function OrderShipmentReport() {
        this.db = typeorm_1.getManager();
        this.salesTableService = new SalesTableService_1.SalesTableService();
        this.rawQuery = new RawQuery_1.RawQuery();
        this.inventTransDAO = new InventTransDAO_1.InventorytransDAO();
        this.updateInventoryService = new UpdateInventoryService_1.UpdateInventoryService();
    }
    OrderShipmentReport.prototype.execute = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, id, status_1, data_1, salesLine, list, chunkArray, saleslineCopy, cond, date, query, salesLineQuery, inventtransQuery, newSalesline, sNo_1, quantity, _loop_1, this_1, _i, list_1, val, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = typeorm_2.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 17, 19, 21]);
                        console.log("OrderShipmentReport===================");
                        id = params.salesId;
                        return [4 /*yield*/, this.query_to_data(id)];
                    case 4:
                        data_1 = _a.sent();
                        // console.log("----------------", data);
                        data_1 = data_1.length >= 1 ? data_1[0] : {};
                        data_1.originalPrinted = data_1.originalPrinted ? data_1.originalPrinted : false;
                        return [4 /*yield*/, this.salesline_query_to_data(id)];
                    case 5:
                        salesLine = _a.sent();
                        list = [];
                        return [4 /*yield*/, this.chunkArray(salesLine, 10)];
                    case 6:
                        chunkArray = _a.sent();
                        // console.log(chunkArray);
                        list = list.concat(chunkArray);
                        if (!(data_1.status != "POSTED")) return [3 /*break*/, 11];
                        saleslineCopy = JSON.parse(JSON.stringify(salesLine));
                        return [4 /*yield*/, this.stockOnHandCheck(saleslineCopy, data_1.inventLocationId, id)];
                    case 7:
                        cond = _a.sent();
                        if (!cond) return [3 /*break*/, 10];
                        date = new Date().toISOString();
                        query = "UPDATE salestable SET originalprinted = '" + true + "', status = 'POSTED'";
                        if (date) {
                            query += ",lastmodifieddate = '" + date + "' ";
                        }
                        query += " WHERE salesid = '" + params.salesId.toUpperCase() + "'";
                        return [4 /*yield*/, queryRunner.query(query)];
                    case 8:
                        _a.sent();
                        salesLineQuery = " UPDATE salesline SET \n                                status = 'POSTED',\n                                lastmodifieddate = '" + date + "' \n                                WHERE salesid = '" + params.salesId + "' ";
                        queryRunner.query(salesLineQuery);
                        inventtransQuery = "UPDATE inventtrans SET transactionclosed = " + true + ", reserve_status = 'POSTED' ";
                        if (date) {
                            inventtransQuery += ",dateinvent = '" + date + "' ";
                        }
                        inventtransQuery += " WHERE invoiceid = '" + params.salesId.toUpperCase() + "' and itemid!='HSN-00001'";
                        return [4 /*yield*/, queryRunner.query(inventtransQuery)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10: throw { message: "SOME_OF_THE_ITEMS_ARE_OUT_OF_STOCK" };
                    case 11: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 12:
                        _a.sent();
                        newSalesline = [];
                        sNo_1 = 1;
                        quantity = 0;
                        _loop_1 = function (val) {
                            var lines, qrString, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        lines = {
                                            salesId: data_1.salesId,
                                            quantity: 0,
                                            custAccount: data_1.custAccount,
                                            status: data_1.status,
                                            transkind: data_1.transkind,
                                            createddatetime: data_1.createddatetime,
                                            originalPrinted: data_1.originalPrinted,
                                            inventLocationId: data_1.inventLocationId,
                                            fwnamealias: data_1.fwnamealias,
                                            fwname: data_1.fwname,
                                            twnamealias: data_1.twnamealias,
                                            twname: data_1.twname,
                                            interCompanyOriginalSalesId: data_1.interCompanyOriginalSalesId,
                                            page: 1,
                                            notes: data_1.notes,
                                            totalPages: list.length,
                                            lines: [],
                                        };
                                        val.map(function (v) {
                                            v.salesQty = parseInt(v.salesQty);
                                            lines.quantity += parseInt(v.salesQty);
                                            v.sNo = sNo_1;
                                            lines.lines.push(v);
                                            sNo_1 += 1;
                                        });
                                        lines.page = list.indexOf(val) + 1;
                                        lines.quantity = lines.quantity + quantity;
                                        quantity = lines.quantity;
                                        return [4 /*yield*/, this_1.dataToQrString(lines)];
                                    case 1:
                                        qrString = _b.sent();
                                        // console.log(qrString);
                                        _a = lines;
                                        return [4 /*yield*/, this_1.genrateQRCode(qrString)];
                                    case 2:
                                        // console.log(qrString);
                                        _a.qr = _b.sent();
                                        lines.qrSting = qrString;
                                        newSalesline.push(lines);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, list_1 = list;
                        _a.label = 13;
                    case 13:
                        if (!(_i < list_1.length)) return [3 /*break*/, 16];
                        val = list_1[_i];
                        return [5 /*yield**/, _loop_1(val)];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 13];
                    case 16:
                        // console.log("#####", newSalesline, "######");
                        data_1.salesLine = newSalesline;
                        data_1.quantity = 0;
                        salesLine.map(function (v) {
                            v.quantity = parseInt(v.quantity);
                            data_1.quantity += parseInt(v.quantity);
                        });
                        // console.log(App.DateNow(), new Date(App.DateNow()), new Date().toISOString());
                        // console.log("---------", data);
                        // let qrString = await this.dataToQrString(data);
                        // console.log(qrString);
                        //data.qr = await QRCode.toDataURL("{name: 'naveen'}");
                        return [2 /*return*/, data_1];
                    case 17:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 18:
                        _a.sent();
                        throw error_1;
                    case 19: return [4 /*yield*/, queryRunner.release()];
                    case 20:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    OrderShipmentReport.prototype.genrateQRCode = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var dataurl, QRSVG, dataFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataurl = null;
                        return [4 /*yield*/, new QRCode({
                                content: data,
                                padding: 4,
                                width: 180,
                                height: 180,
                                color: "#000000",
                                background: "#ffffff",
                                ecl: "M",
                            })];
                    case 1:
                        QRSVG = _a.sent();
                        dataFile = QRSVG.svg();
                        //console.log(QRSVG.svg());
                        // const Base64File = require("js-base64-file");
                        // const image = new Base64File();
                        // dataurl = image.loadSync("sample.svg");
                        // let dataFile = fs.readFileSync("sample.svg", { encoding: "utf8", flag: "r" });
                        // console.log("dataFile", dataFile);
                        dataurl = SvgToDataURL(dataFile);
                        // console.log(dataurl);
                        return [2 /*return*/, dataurl];
                }
            });
        });
    };
    OrderShipmentReport.prototype.warehouseName = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select inventlocationid, name, namealias from inventlocation where inventlocationid ='" + param + "' limit 1";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data.length > 0 ? data[0] : {}];
                }
            });
        });
    };
    OrderShipmentReport.prototype.report = function (result, params) {
        return __awaiter(this, void 0, void 0, function () {
            var renderData, file;
            return __generator(this, function (_a) {
                // console.log(result.salesLine[0].product.nameEnglish);
                renderData = result;
                renderData.printDate = App_1.App.convertUTCDateToLocalDate(new Date(App_1.App.DateNow()), parseInt(params.timeZoneOffSet));
                file = params.lang == "en" ? "os-en" : "os-ar";
                // try {
                return [2 /*return*/, App_1.App.HtmlRender(file, renderData)];
            });
        });
    };
    OrderShipmentReport.prototype.query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n            select \n            st.salesid as \"salesId\",\n            st.custaccount as \"custAccount\",\n            st.status as status,\n            st.transkind as transkind,\n            st.vatamount as vatamount,\n            st.netamount as \"netAmount\",\n            st.disc as disc,\n            st.description as notes,\n            amount as amount,\n            to_char(st.createddatetime, 'DD-MM-YYYY') as createddatetime,\n            st.originalprinted as \"originalPrinted\",\n            st.inventlocationid as \"inventLocationId\",\n            fw.namealias as fwnamealias,\n            fw.name as fwname,\n            tw.namealias as twnamealias,\n            tw.name as twname,\n            st.intercompanyoriginalsalesId as \"interCompanyOriginalSalesId\"\n            from salestable st \n            left join inventlocation fw on fw.inventlocationid = st.inventlocationid\n            left join inventlocation tw on tw.inventlocationid = st.custaccount\n            where salesid='" + id + "'\n            ";
                        return [4 /*yield*/, this.db.query(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderShipmentReport.prototype.salesline_query_to_data = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var salesQuery;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        salesQuery = "\n    select\n    ln.salesid,\n    ln.itemid,\n    ln.batchno,\n    ln.configid,\n    ln.inventsizeid,\n    ln.status,\n    ln.colorantid,\n    ln.salesqty as \"salesQty\",\n    ln.prodnamear as \"prodNameAr\",\n    ln.prodnameen as \"prodNameEn\",\n    ln.colNameAr as \"colNameAr\",\n    ln.colNameEn as \"colNameEn\",\n    ln.sizeNameEn as \"sizeNameEn\",\n    ln.sizeNameAr as \"sizeNameAr\"\n    from\n    (\n        select\n        distinct on (i.id, i.invoiceid, i.itemid, i.configid, sl.colorantid, i.inventsizeid, i.batchno, i.qty, i.sales_line_id)\n        i.invoiceid as salesid,\n        i.batchno,\n        i.itemid,\n        i.configid,\n        i.inventsizeid,\n        st.status as status,\n        ABS(i.qty) as salesqty,\n        b.itemname as prodnamear,\n        b.namealias as prodnameen,\n        c.name as colNameAr,\n        c.name as colNameEn,\n        s.description as sizeNameEn,\n        s.name as sizeNameAr,\n        sl.colorantid as  colorantid,\n        sl.linenum\n        from inventtrans i\n        left join salestable st on st.salesid = i.invoiceid\n        left join salesline sl on sl.id = i.sales_line_id\n        left join inventtable b on i.itemid=b.itemid\n        left join inventsize s on s.itemid = i.itemid and i.inventsizeid = s.inventsizeid\n        left join configtable c on c.configid = i.configid and c.itemid = i.itemid\n    where invoiceid='" + id + "' \n    ) as ln order by ln.linenum DESC\n    ";
                        return [4 /*yield*/, this.db.query(salesQuery)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderShipmentReport.prototype.dataToQrString = function (data) {
        console.log(data);
        var header = data.page +
            "%" +
            data.totalPages +
            "$" +
            data.salesId +
            "^" +
            data.inventLocationId +
            "^" +
            data.custAccount +
            "|";
        var lines = "";
        for (var _i = 0, _a = data.lines; _i < _a.length; _i++) {
            var item = _a[_i];
            if (lines.length != 0) {
                lines += "*";
            }
            var line = item.itemid +
                "+" +
                item.configid +
                "+" +
                item.inventsizeid +
                "+" +
                item.batchno +
                "+" +
                item.salesQty +
                "+" +
                0 +
                "+" +
                0 +
                "+" +
                0;
            if (item.colorantid) {
                line +=
                    "*" +
                        "HSN-00001" +
                        "+" +
                        item.colorantid +
                        "+" +
                        "GROUP" +
                        "+" +
                        "-" +
                        "+" +
                        item.salesQty +
                        "+" +
                        0 +
                        "+" +
                        0 +
                        "+" +
                        0;
            }
            lines += line;
        }
        return header + lines;
    };
    OrderShipmentReport.prototype.chunkArray = function (myArray, chunk_size) {
        return __awaiter(this, void 0, void 0, function () {
            var index, arrayLength, tempArray, myChunk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        arrayLength = myArray.length;
                        tempArray = [];
                        for (index = 0; index < arrayLength; index += chunk_size) {
                            myChunk = myArray.slice(index, index + chunk_size);
                            // Do something if you want with the group
                            tempArray.push(myChunk);
                        }
                        return [4 /*yield*/, tempArray];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderShipmentReport.prototype.stockOnHandCheck = function (salesLine, inventlocationid, salesid) {
        return __awaiter(this, void 0, void 0, function () {
            var canConvert, colors, items, sizes, groupSalesLines, newSalesline, itemsInStock;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canConvert = true;
                        colors = [];
                        items = [];
                        sizes = [];
                        groupSalesLines = this.groupBy(salesLine, function (item) {
                            return [item.itemid, item.configid, item.inventsizeid, item.batchno];
                        });
                        newSalesline = [];
                        groupSalesLines.forEach(function (groupitem) {
                            var qty = groupitem.reduce(function (res, item) { return res + parseInt(item.salesQty); }, 0);
                            groupitem[0].salesQty = Math.abs(qty);
                            newSalesline.push(__assign({}, groupitem[0]));
                        });
                        newSalesline.map(function (v) {
                            if (v.itemid && v.configid && v.inventsizeid) {
                                items.push(v.itemid), colors.push(v.configid), sizes.push(v.inventsizeid);
                            }
                            else {
                                return false;
                            }
                        });
                        return [4 /*yield*/, this.rawQuery.checkItems(inventlocationid, items, colors, sizes, salesid)];
                    case 1:
                        itemsInStock = _a.sent();
                        newSalesline.map(function (v) {
                            var index = itemsInStock.findIndex(function (value) {
                                return value.itemid.toLowerCase() == v.itemid.toLowerCase() &&
                                    value.configid.toLowerCase() == v.configid.toLowerCase() &&
                                    value.inventsizeid.toLowerCase() == v.inventsizeid.toLowerCase();
                            });
                            if (index >= 0 && v.itemid != "HSN-00001") {
                                if (parseInt(v.salesQty) > parseInt(itemsInStock[index].qty)) {
                                    canConvert = canConvert == true ? false : false;
                                }
                            }
                            else {
                                if (v.itemid != "HSN-00001") {
                                    canConvert = canConvert == true ? false : false;
                                }
                            }
                        });
                        if (!canConvert) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, canConvert];
                }
            });
        });
    };
    OrderShipmentReport.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    return OrderShipmentReport;
}());
exports.OrderShipmentReport = OrderShipmentReport;
