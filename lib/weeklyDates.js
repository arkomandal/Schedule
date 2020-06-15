const getDates = require('./getDates').getDates;

//this function returns an array of some objects each holds weekly dates
exports.weeklyDates = (dateString) => {
    try {
        let date = new Date(dateString);
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let diff = Math.round((lastDay - firstDay) / (1000 * 60 * 60 * 24)) + 1;
        let dates = getDates(firstDay, lastDay);
        let arr = [];
        for (let i = 0; i < diff;) {
            let week = [];
            let value = dates[i].getDay();
            for (let j = i == 0 ? value : 0; j <= 6 && i < diff; j++, i++) {
                week.push({
                    [dates[i].getDate()]: dates[i].getDay()
                });
            }
            let weekObj = [];
            weekObj = Object.assign.apply(Object, week);
            arr.push(weekObj);
        }
        return arr;
    } catch (err) {
        throw err;
    }
}