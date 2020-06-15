const getDayOfMonth = require('./lib/getDayOfMonth').getDayOfMonth;

exports.getNewDay = (date_1, date_2) => {
    return getDayOfMonth(date_1, date_2);
}