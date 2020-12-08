"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-business-days");
// import moment from 'moment';
// import localization from 'moment/locale/fr';
var Calender = /** @class */ (function () {
    function Calender() {
        moment.locale("ar_SA");
        moment.updateLocale("en", {
            workingWeekdays: [1, 2, 3, 4, 5, 6]
        });
        // moment.updateLocale("ar_SA", {
        //   workingWeekdays: [0, 1, 2, 3, 4]
        // });
    }
    Calender.prototype.setWorkingDays = function (locale, workingWeekdays, holidays) {
        var obj = {};
        obj.workingWeekdays = workingWeekdays;
        if (holidays) {
            obj.holidays = holidays,
                obj.holidayFormat = 'YYYY-MM-DD';
        }
        moment.updateLocale(locale, obj);
    };
    Calender.prototype.setHolidaysList = function (locale, holidays) {
        moment.updateLocale(locale, {
            holidays: holidays,
            holidayFormat: 'YYYY-MM-DD'
        });
    };
    Calender.prototype.getMomentDateForHolidays = function (date) {
        return moment(date, "MM/DD");
    };
    Calender.prototype.getMomentDate = function (date) {
        return moment(date, "YYYY-MM-DD hh:mm;ss");
    };
    Calender.prototype.getWorkingDays = function (date1, date2) {
        return this.getMomentDate(date1).businessDiff(this.getMomentDate(date2));
    };
    Calender.prototype.getCurrentMonthWorkingDays = function (date) {
        date = new Date(date);
        var startDate = moment(date).startOf("month");
        var endDate = moment(date).endOf("month");
        return this.getWorkingDays(startDate, endDate);
    };
    Calender.prototype.getCurrentYearWorkingDays = function (date) {
        date = new Date(date);
        var startDate = moment(date).startOf("year");
        var endDate = moment(date).endOf("year");
        return this.getWorkingDays(startDate, endDate);
    };
    Calender.prototype.getCurrentDate = function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() - 1;
        var startDate = new Date(y, m, 1);
        var endDate = new Date(y, m + 1, 0);
        return moment(startDate).format("YYYY-MM-DD");
    };
    Calender.prototype.getFormateDate = function (date) {
        return moment(date).format("YYYY-MM-DD");
    };
    Calender.prototype.isBusinessDay = function (date) {
        return moment(date, "YYYY-MM-DD").isBusinessDay();
    };
    Calender.prototype.getPreviousDate = function (date) {
        console.log(moment(new Date()).month());
        return moment(date)
            .subtract(1, "days")
            .format("YYYY-MM-DD");
    };
    Calender.prototype.getPreviousWorkingDay = function (date) {
        return moment(date)
            .prevBusinessDay()
            .format("YYYY-MM-DD");
    };
    Calender.prototype.getWeek = function (date) {
        return moment(date, "YYYY/MM/DD").week();
    };
    Calender.prototype.getWeekMonth = function (date) {
        return (moment(date, "YYYY/MM/DD").week() -
            moment(date)
                .startOf("month")
                .week() +
            1);
    };
    Calender.prototype.getMonth = function (date) {
        return moment(date, "YYYY/MM/DD").month();
    };
    Calender.prototype.getYear = function (date) {
        return moment(date, "YYYY/MM/DD").year();
    };
    Calender.prototype.getCurrentDaysOnly = function (date, type) {
        var today = moment(date);
        var from_date = moment(today).startOf(type);
        var to_date = moment(today).endOf(type);
        return { from: from_date.format("YYYY-MM-DD"), to: to_date.format("YYYY-MM-DD") };
    };
    Calender.prototype.getPreviousDaysOnly = function (date, type) {
        var today = moment().subtract(1, type + "s");
        var from_date = moment(today).startOf(type);
        var to_date = moment(today).endOf(type);
        return { from: from_date.format("YYYY-MM-DD"), to: to_date.format("YYYY-MM-DD") };
    };
    Calender.prototype.getCurrentWeekDates = function () {
        return this.getWeekDatesFromDate(moment());
    };
    Calender.prototype.getPreviousWeekDates = function () {
        return this.getWeekDatesFromDate(moment().subtract(1, "weeks"));
    };
    Calender.prototype.getCurrentMonthDates = function () {
        return this.getMonthDatesFromDate(moment());
    };
    Calender.prototype.getCurrentYearDates = function () {
        return this.getYearDatesFromDate(moment());
    };
    Calender.prototype.getPreviousMonthDates = function () {
        return this.getMonthDatesFromDate(moment().subtract(1, "months"));
    };
    Calender.prototype.getPreviousYearDates = function () {
        return this.getMonthDatesFromDate(moment().subtract(1, "year"));
    };
    Calender.prototype.getWeekDatesFromDate = function (date) {
        return this.getDateFromTo(date, "week");
    };
    Calender.prototype.getMonthDatesFromDate = function (date) {
        return this.getDateFromTo(date, "month");
    };
    Calender.prototype.getYearDatesFromDate = function (date) {
        return this.getDateFromTo(date, "year");
    };
    Calender.prototype.getDateFromTo = function (date, type) {
        var today = moment(date);
        var from_date = moment(today).startOf(type);
        var to_date = moment(today).endOf(type);
        var fromMonth = this.getMonth(from_date);
        var toMonth = this.getMonth(to_date);
        var fromMonthDaysDiff = fromMonth != toMonth ? from_date.daysInMonth() - from_date.date() : 0;
        var fromMonthDaySeg = moment(from_date).add(fromMonthDaysDiff, "days");
        var toMonthDaySeg = fromMonth != toMonth ? moment(fromMonthDaySeg).add(1, "days") : moment(to_date);
        var workingDays = fromMonth != toMonth ? this.getWorkingDays(from_date, fromMonthDaySeg) : this.getWorkingDays(from_date, to_date);
        var workingDaysSeg = fromMonth != toMonth ? this.getWorkingDays(fromMonthDaySeg, to_date) : 0;
        return {
            fromDate: from_date.format("YYYY-MM-DD"),
            today: today.format("YYYY-MM-DD"),
            toDate: to_date.format("YYYY-MM-DD"),
            fromWeek: this.getWeekMonth(from_date),
            toWeek: this.getWeekMonth(to_date),
            fromMonth: fromMonth,
            toMonth: toMonth,
            fromYear: this.getYear(from_date),
            toYear: this.getYear(to_date),
            fromMonthDays: from_date.daysInMonth(),
            toMonthDays: to_date.daysInMonth(),
            fromMonthDaysDiff: fromMonth != toMonth ? fromMonthDaysDiff + 1 : fromMonthDaysDiff,
            toMonthDaysDiff: fromMonth != toMonth ? 7 - fromMonthDaysDiff - 1 : 7 - fromMonthDaysDiff,
            fromMonthDaySeg: fromMonthDaySeg.format("YYYY-MM-DD"),
            toMonthDaySeg: toMonthDaySeg.format("YYYY-MM-DD"),
            workingDays: workingDays,
            workingDaysSeg: workingDaysSeg
        };
    };
    return Calender;
}());
exports.Calender = Calender;
