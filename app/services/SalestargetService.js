"use strict";
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
var SalesTableDAO_1 = require("../repos/SalesTableDAO");
var SalesTargetsDAO_1 = require("../repos/SalesTargetsDAO");
var Props_1 = require("../../constants/Props");
var Calendar_1 = require("../../utils/Calendar");
var SalesStatus_1 = require("../../utils/SalesStatus");
var App_1 = require("../../utils/App");
var SalesLineDAO_1 = require("../repos/SalesLineDAO");
var InventtableDAO_1 = require("../repos/InventtableDAO");
var InventoryOnhandDAO_1 = require("../repos/InventoryOnhandDAO");
var WorkDaysDAO_1 = require("../repos/WorkDaysDAO");
var HolidaysListDAO_1 = require("../repos/HolidaysListDAO");
var SalestargetService = /** @class */ (function () {
    function SalestargetService() {
        this.sessionInfo = { id: "SYSTEM", vid: "OWN" };
        this.salestableRepository = new SalesTableDAO_1.SalesTableDAO().getDAO();
        this.salestagetRepository = new SalesTargetsDAO_1.SalesTargetsDAO().getDAO();
        this.saleslineRepository = new SalesLineDAO_1.SalesLineDAO();
        this.inventtableRepository = new InventtableDAO_1.InventtableDAO();
        this.onHandInventoryRepository = new InventoryOnhandDAO_1.InventoryOnhandDAO();
        this.workDaysDAO = new WorkDaysDAO_1.WorkDaysDAO();
        this.holidaysListDAO = new HolidaysListDAO_1.HolidaysListDAO();
        this.calender = new Calendar_1.Calender();
    }
    SalestargetService.prototype.save = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var cond, pricediscgroupData, returnData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.validate(item)];
                    case 1:
                        cond = _a.sent();
                        if (!(cond == true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.salestagetRepository.save(item)];
                    case 2:
                        pricediscgroupData = _a.sent();
                        returnData = { message: "SAVED_SUCCESSFULLY" };
                        return [2 /*return*/, returnData];
                    case 3: throw { status: 0, message: "INVALID_DATA" };
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SalestargetService.prototype.search = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var workWeeks, dayNos, holidays, holidaysList, day, week, month, year, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.workDaysDAO.search({
                                storeCode: data.inventlocationid,
                                year: new Date(App_1.App.DateNow()).getFullYear(),
                            })];
                    case 1:
                        workWeeks = _a.sent();
                        dayNos = workWeeks.map(function (item) {
                            return item.dayNo;
                        });
                        return [4 /*yield*/, this.holidaysListDAO.searchNot({
                                type: "WEEkend",
                            })];
                    case 2:
                        holidays = _a.sent();
                        holidaysList = holidays.map(function (item) {
                            return _this.calender.getMomentDate(new Date(item.date)).format("YYYY-MM-DD");
                        });
                        this.calender.setWorkingDays("ar_SA", dayNos, holidaysList);
                        this.calender.setWorkingDays("en", dayNos, holidaysList);
                        this.calender.setHolidaysList("ar_SA", holidaysList);
                        this.calender.setHolidaysList("en", holidaysList);
                        return [4 /*yield*/, this.getDayTargetStatus(data)];
                    case 3:
                        day = _a.sent();
                        return [4 /*yield*/, this.getWeekTargetStatus(data)];
                    case 4:
                        week = _a.sent();
                        return [4 /*yield*/, this.getMonthTargetStatus(data)];
                    case 5:
                        month = _a.sent();
                        return [4 /*yield*/, this.getYearTargetStatus(data)];
                    case 6:
                        year = _a.sent();
                        return [2 /*return*/, {
                                day: day,
                                week: week,
                                month: month,
                                year: year,
                            }];
                    case 7:
                        error_2 = _a.sent();
                        throw error_2;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SalestargetService.prototype.getWorkingWeekdays = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    SalestargetService.prototype.searchTop20 = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var dates, previousdates, products_1, ids, previousproducts_1, _a, productNames_1, _b, result, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 10, , 11]);
                        if (!(data.unittime && data.inventlocationid)) return [3 /*break*/, 9];
                        dates = this.getDatesFromUnitTime(data.unittime);
                        previousdates = this.getDatesFromUnitTime(data.unittime, true);
                        if (!(dates.from && dates.to)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.saleslineRepository.findTop20FromToDate(data.inventlocationid, dates.from, dates.to)];
                    case 1:
                        products_1 = _c.sent();
                        ids = products_1.length > 0
                            ? products_1.map(function (product) {
                                return product.itemid;
                            })
                            : [];
                        if (!(ids.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saleslineRepository.findTop20FromToDateWithItemIds(data.inventlocationid, previousdates.from, previousdates.to, ids)];
                    case 2:
                        _a = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = [];
                        _c.label = 4;
                    case 4:
                        previousproducts_1 = _a;
                        products_1 = products_1.map(function (item, index) {
                            var productNameObj = previousproducts_1.find(function (privoiusProduct) {
                                return item.itemid == privoiusProduct.itemid;
                            });
                            return productNameObj ? Object.assign({}, products_1[index], productNameObj) : products_1[index];
                        });
                        products_1 = products_1.map(function (item) {
                            if (!item.hasOwnProperty("previousamount")) {
                                item["previousamount"] = 0;
                            }
                            return item;
                        });
                        if (!(ids.length > 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.inventtableRepository.findByIds(ids)];
                    case 5:
                        _b = _c.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _b = [];
                        _c.label = 7;
                    case 7:
                        productNames_1 = _b;
                        result = products_1.map(function (item, index) {
                            var productNameObj = productNames_1.find(function (productName) {
                                return item.itemid == productName.code;
                            });
                            return productNameObj ? Object.assign({}, products_1[index], productNameObj) : products_1[index];
                        });
                        return [2 /*return*/, result];
                    case 8: throw { status: 0, message: "INVALID_DATA" };
                    case 9: throw { status: 0, message: "INVALID_DATA" };
                    case 10:
                        error_3 = _c.sent();
                        throw error_3;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    SalestargetService.prototype.seachCriticalItems = function (data) {
        try {
            return this.onHandInventoryRepository.findCriticalItems(data);
        }
        catch (e) { }
    };
    SalestargetService.prototype.getDatesFromUnitTime = function (unitTime, isPrevious) {
        var dates = {};
        if (isPrevious) {
            if (Props_1.Props.DAY.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getPreviousDaysOnly(new Date(), Props_1.Props.DAY.toLowerCase());
            }
            if (Props_1.Props.WEEK.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getPreviousDaysOnly(new Date(), Props_1.Props.WEEK.toLowerCase());
            }
            if (Props_1.Props.MONTH.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getPreviousDaysOnly(new Date(), Props_1.Props.MONTH.toLowerCase());
            }
            if (Props_1.Props.YEAR.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getPreviousDaysOnly(new Date(), Props_1.Props.YEAR.toLowerCase());
            }
        }
        else {
            if (Props_1.Props.DAY.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getCurrentDaysOnly(new Date(), Props_1.Props.DAY.toLowerCase());
            }
            if (Props_1.Props.WEEK.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getCurrentDaysOnly(new Date(), Props_1.Props.WEEK.toLowerCase());
            }
            if (Props_1.Props.MONTH.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getCurrentDaysOnly(new Date(), Props_1.Props.MONTH.toLowerCase());
            }
            if (Props_1.Props.YEAR.toLowerCase() == unitTime.toLowerCase()) {
                dates = this.calender.getCurrentDaysOnly(new Date(), Props_1.Props.YEAR.toLowerCase());
            }
        }
        return dates;
    };
    SalestargetService.prototype.getDayTargetStatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, previousDate, currentDateMonth, previusDateMonth, currentDateYear, prevoiusDateYear, currentDateMonthWorkingDays, previousDateMonthWorkingDays, currentMonthTaget, previousMonthTaget, currentDayTarget, previousDayTarget, todaySales, yesterdaySale, currentPercentage, previousPercentageDecimal, previousPercentage, salesStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = this.calender.getFormateDate(new Date(App_1.App.DateNow()));
                        previousDate = this.calender.getPreviousDate(new Date(App_1.App.DateNow()));
                        currentDateMonth = this.calender.getMonth(currentDate);
                        previusDateMonth = this.calender.getMonth(previousDate);
                        currentDateYear = this.calender.getYear(currentDate);
                        prevoiusDateYear = this.calender.getYear(previousDate);
                        currentDateMonthWorkingDays = this.calender.getCurrentMonthWorkingDays(currentDate);
                        previousDateMonthWorkingDays = this.calender.getCurrentMonthWorkingDays(previousDate);
                        return [4 /*yield*/, this.getCurrentMonthTargetAmount(data.inventlocationid, currentDateYear, currentDateMonth)];
                    case 1:
                        currentMonthTaget = _a.sent();
                        return [4 /*yield*/, this.getCurrentMonthTargetAmount(data.inventlocationid, prevoiusDateYear, previusDateMonth)];
                    case 2:
                        previousMonthTaget = _a.sent();
                        currentDayTarget = this.calender.isBusinessDay(new Date(App_1.App.DateNow()))
                            ? this.getTargetAmont(currentMonthTaget, currentDateMonthWorkingDays)
                            : 0;
                        previousDayTarget = this.calender.isBusinessDay(previousDate)
                            ? this.getTargetAmont(previousMonthTaget, previousDateMonthWorkingDays)
                            : 0;
                        return [4 /*yield*/, this.getCurrentDaySales(data, { lastmodifieddate: currentDate })];
                    case 3:
                        todaySales = _a.sent();
                        return [4 /*yield*/, this.getCurrentDaySales(data, { lastmodifieddate: previousDate })];
                    case 4:
                        yesterdaySale = _a.sent();
                        currentPercentage = currentDayTarget ? ((todaySales - currentDayTarget) / currentDayTarget) * 100 : 0;
                        previousPercentageDecimal = todaySales == 0 ? Infinity : ((yesterdaySale - todaySales) / todaySales) * 100;
                        previousPercentage = previousPercentageDecimal == Infinity ? 100 : previousPercentageDecimal;
                        salesStatus = new SalesStatus_1.SalesStatus();
                        salesStatus.currentSale = todaySales;
                        salesStatus.previousSale = yesterdaySale;
                        salesStatus.currentSalesPercent = currentPercentage ? currentPercentage : 0;
                        salesStatus.previousSalesPercent = previousPercentage ? previousPercentage : 0;
                        salesStatus.previousSalesPercentStatus = salesStatus.previousSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercentStatus = salesStatus.currentSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercent = Math.abs(salesStatus.currentSalesPercent);
                        salesStatus.previousSalesPercent = Math.abs(salesStatus.previousSalesPercent);
                        salesStatus.currentTarget = currentDayTarget;
                        return [2 /*return*/, salesStatus];
                }
            });
        });
    };
    SalestargetService.prototype.getWeekTargetStatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var currentWeekDates, previousWeekDates, currentTargetAmount, previousTargetAmount, currentWeekSales, previousWeekSales, currentpercentage, previousPercentage, salesStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentWeekDates = this.calender.getCurrentWeekDates();
                        previousWeekDates = this.calender.getPreviousWeekDates();
                        return [4 /*yield*/, this.getTargetAmountsBasedOnDates(data, currentWeekDates)];
                    case 1:
                        currentTargetAmount = _a.sent();
                        return [4 /*yield*/, this.getTargetAmountsBasedOnDates(data, previousWeekDates)];
                    case 2:
                        previousTargetAmount = _a.sent();
                        return [4 /*yield*/, this.getSalesFromToDate(data, currentWeekDates)];
                    case 3:
                        currentWeekSales = _a.sent();
                        return [4 /*yield*/, this.getSalesFromToDate(data, previousWeekDates)];
                    case 4:
                        previousWeekSales = _a.sent();
                        currentpercentage = currentTargetAmount
                            ? ((currentWeekSales - currentTargetAmount) / currentTargetAmount) * 100
                            : 0;
                        previousPercentage = currentWeekSales ? ((previousWeekSales - currentWeekSales) / currentWeekSales) * 100 : 0;
                        salesStatus = new SalesStatus_1.SalesStatus();
                        salesStatus.currentSale = currentWeekSales;
                        salesStatus.previousSale = previousWeekSales;
                        salesStatus.currentSalesPercent = currentpercentage ? currentpercentage : 0;
                        salesStatus.previousSalesPercent = previousPercentage ? previousPercentage : 0;
                        salesStatus.previousSalesPercentStatus = salesStatus.previousSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercentStatus = salesStatus.currentSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercent = Math.abs(salesStatus.currentSalesPercent);
                        salesStatus.previousSalesPercent = Math.abs(salesStatus.previousSalesPercent);
                        salesStatus.currentTarget = currentTargetAmount;
                        return [2 /*return*/, salesStatus];
                }
            });
        });
    };
    SalestargetService.prototype.getMonthTargetStatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var currentMonthDates, previousMonthDates, currentMonthSales, previousMonthSales, currentTargetAmount, previousTargetAmount, currentPercentage, previousPercentage, salesStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentMonthDates = this.calender.getCurrentMonthDates();
                        previousMonthDates = this.calender.getPreviousMonthDates();
                        return [4 /*yield*/, this.getSalesFromToDate(data, currentMonthDates)];
                    case 1:
                        currentMonthSales = _a.sent();
                        return [4 /*yield*/, this.getSalesFromToDate(data, previousMonthDates)];
                    case 2:
                        previousMonthSales = _a.sent();
                        return [4 /*yield*/, this.getTargetAmountsBasedOnDates(data, currentMonthDates)];
                    case 3:
                        currentTargetAmount = _a.sent();
                        return [4 /*yield*/, this.getTargetAmountsBasedOnDates(data, previousMonthDates)];
                    case 4:
                        previousTargetAmount = _a.sent();
                        currentPercentage = currentTargetAmount
                            ? ((currentMonthSales - currentTargetAmount) / currentTargetAmount) * 100
                            : 0;
                        previousPercentage = currentMonthSales
                            ? ((previousMonthSales - currentMonthSales) / currentMonthSales) * 100
                            : 0;
                        salesStatus = new SalesStatus_1.SalesStatus();
                        salesStatus.currentSale = currentMonthSales;
                        salesStatus.previousSale = previousMonthSales;
                        salesStatus.currentSalesPercent = currentPercentage ? currentPercentage : 0;
                        salesStatus.previousSalesPercent = previousPercentage ? previousPercentage : 0;
                        salesStatus.previousSalesPercentStatus = salesStatus.previousSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercentStatus = salesStatus.currentSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercent = Math.abs(salesStatus.currentSalesPercent);
                        salesStatus.previousSalesPercent = Math.abs(salesStatus.previousSalesPercent);
                        salesStatus.currentTarget = currentTargetAmount;
                        return [2 /*return*/, salesStatus];
                }
            });
        });
    };
    SalestargetService.prototype.getYearTargetStatus = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var currentMonthDates, previousMonthDates, currentMonthSales, previousMonthSales, currentTargetAmount, previousTargetAmount, currentPercentage, previousPercentage, salesStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentMonthDates = this.calender.getCurrentYearDates();
                        previousMonthDates = this.calender.getPreviousYearDates();
                        return [4 /*yield*/, this.getSalesFromToDate(data, currentMonthDates)];
                    case 1:
                        currentMonthSales = _a.sent();
                        return [4 /*yield*/, this.getSalesFromToDate(data, previousMonthDates)];
                    case 2:
                        previousMonthSales = _a.sent();
                        return [4 /*yield*/, this.getTargetAmountsBasedOnDates(data, currentMonthDates, true)];
                    case 3:
                        currentTargetAmount = _a.sent();
                        return [4 /*yield*/, this.getTargetAmountsBasedOnDates(data, previousMonthDates, true)];
                    case 4:
                        previousTargetAmount = _a.sent();
                        currentPercentage = currentTargetAmount
                            ? ((currentMonthSales - currentTargetAmount) / currentTargetAmount) * 100
                            : 0;
                        previousPercentage = currentMonthSales
                            ? ((previousMonthSales - currentMonthSales) / currentMonthSales) * 100
                            : 0;
                        salesStatus = new SalesStatus_1.SalesStatus();
                        salesStatus.currentSale = currentMonthSales;
                        salesStatus.previousSale = previousMonthSales;
                        salesStatus.currentSalesPercent = currentPercentage ? currentPercentage : 0;
                        salesStatus.previousSalesPercent = previousPercentage ? previousPercentage : 0;
                        salesStatus.previousSalesPercentStatus = salesStatus.previousSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercentStatus = salesStatus.currentSalesPercent >= 0 ? "up" : "down";
                        salesStatus.currentSalesPercent = Math.abs(salesStatus.currentSalesPercent);
                        salesStatus.previousSalesPercent = Math.abs(salesStatus.previousSalesPercent);
                        salesStatus.currentTarget = currentTargetAmount;
                        return [2 /*return*/, salesStatus];
                }
            });
        });
    };
    SalestargetService.prototype.getTargetAmont = function (amount, days) {
        amount = amount / days;
        return amount ? amount : 0;
    };
    SalestargetService.prototype.getTargetAmountsBasedOnDates = function (data, dates, onlyYear) {
        return __awaiter(this, void 0, void 0, function () {
            var currentDateMonthWorkingDays, currentMonthTaget, currentMonthTagetSegmentedTarget, currentDateMonthSegmentedWorkingDays, currentDayTarget, currentTarget, currentDayTargetSegmented, currentSegmentedTarget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDateMonthWorkingDays = !onlyYear
                            ? this.calender.getCurrentMonthWorkingDays(dates.fromDate)
                            : this.calender.getCurrentYearWorkingDays(dates.fromDate);
                        return [4 /*yield*/, this.getCurrentMonthTargetAmount(data.inventlocationid, dates.fromYear, !onlyYear ? dates.fromMonth : null)];
                    case 1:
                        currentMonthTaget = _a.sent();
                        currentMonthTagetSegmentedTarget = 0;
                        currentDateMonthSegmentedWorkingDays = 0;
                        currentDayTarget = this.getTargetAmont(currentMonthTaget, currentDateMonthWorkingDays);
                        currentTarget = !onlyYear
                            ? currentDayTarget * dates.workingDays
                            : currentDayTarget * currentDateMonthWorkingDays;
                        if (!(!onlyYear && dates.fromMonth != dates.toMonth)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCurrentMonthTargetAmount(data.inventlocationid, dates.toYear, !onlyYear ? dates.toMonth : null)];
                    case 2:
                        currentMonthTagetSegmentedTarget = _a.sent();
                        currentDateMonthSegmentedWorkingDays = this.calender.getCurrentMonthWorkingDays(dates.toDate);
                        currentDayTargetSegmented = this.getTargetAmont(currentMonthTagetSegmentedTarget, currentDateMonthSegmentedWorkingDays);
                        currentSegmentedTarget = currentDayTargetSegmented * dates.workingDaysSeg;
                        currentTarget += currentSegmentedTarget;
                        _a.label = 3;
                    case 3: return [2 /*return*/, currentTarget];
                }
            });
        });
    };
    SalestargetService.prototype.validate = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, sum, i, key;
            return __generator(this, function (_a) {
                if (!item.id || item.id.toString() == "" || item.id.toString() == "0") {
                    item.id = null;
                }
                if (!item.id) {
                    uid = App_1.App.uuidv4();
                    item.id = uid;
                }
                sum = 0;
                for (i = 1; i <= 12; i++) {
                    key = "month" + i;
                    if (!item[key] || item[key].toString() == "" || item[key].toString() == "0") {
                        return [2 /*return*/, false];
                    }
                    sum += item[key];
                }
                item.yearTarget = sum;
                item.updatedOn = new Date(App_1.App.DateNow());
                return [2 /*return*/, true];
            });
        });
    };
    SalestargetService.prototype.getCurrentMonthTargetAmount = function (inventlocationid, year, month) {
        return __awaiter(this, void 0, void 0, function () {
            var targetItem, target;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salestagetRepository.findOne({
                            where: {
                                year: year,
                                storeCode: inventlocationid,
                            },
                        })];
                    case 1:
                        targetItem = _a.sent();
                        target = 0;
                        if (targetItem && month) {
                            target = targetItem["month" + (month + 1)];
                        }
                        else if (targetItem && targetItem.hasOwnProperty("yearTarget") && targetItem["yearTarget"]) {
                            target = targetItem.yearTarget;
                        }
                        return [2 /*return*/, target];
                }
            });
        });
    };
    SalestargetService.prototype.getCurrentDaySales = function (data, date) {
        return __awaiter(this, void 0, void 0, function () {
            var sumObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salestableRepository
                            .createQueryBuilder("salestable")
                            .select("SUM(salestable.netamount :: float)", "sum")
                            // .andWhere("salestable.transkind IN (:...transkind)", { transkind: ["SALESORDER"] })
                            .andWhere("salestable.transkind IN (:...transkind)", { transkind: ["SALESORDER", "DESIGNERSERVICE"] })
                            .andWhere("salestable.status IN (:...status)", { status: ["PAID", "POSTED", "PRINTED"] })
                            .andWhere("salestable.lastmodifieddate ::date = :lastmodifieddate", date)
                            .andWhere("salestable.inventlocationid = :inventlocationid", data)
                            .getRawOne()];
                    case 1:
                        sumObj = _a.sent();
                        return [2 /*return*/, sumObj.sum ? sumObj.sum : 0];
                }
            });
        });
    };
    SalestargetService.prototype.getSalesFromToDate = function (data, dates) {
        return __awaiter(this, void 0, void 0, function () {
            var sumObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.salestableRepository
                            .createQueryBuilder("salestable")
                            .select("SUM(salestable.netamount :: float)", "sum")
                            // .andWhere("salestable.transkind IN (:...transkind)", { transkind: ["SALESORDER"] })
                            .andWhere("salestable.transkind IN (:...transkind)", { transkind: ["SALESORDER", "DESIGNERSERVICE"] })
                            .andWhere("salestable.status IN (:...status)", { status: ["PAID", "POSTED", "PRINTED"] })
                            .andWhere("salestable.inventlocationid = :inventlocationid", data)
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            qb.where("salestable.lastmodifieddate::date >= :fromDate", {
                                fromDate: dates.fromDate,
                            }).andWhere("salestable.lastmodifieddate::date <= :today", { today: dates.today });
                        }))
                            .getRawOne()];
                    case 1:
                        sumObj = _a.sent();
                        return [2 /*return*/, sumObj.sum ? sumObj.sum : 0];
                }
            });
        });
    };
    return SalestargetService;
}());
exports.SalestargetService = SalestargetService;
