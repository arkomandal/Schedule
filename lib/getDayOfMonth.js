//this function return day of date_1 for finding it in date_2
const weeklyDates = require('./weeklyDates').weeklyDates;

exports.getDayOfMonth = async (date_1, date_2) => {
    try {
        //working with 1st date
        let date = new Date(date_1);
        let weekDay = date.getDay();
        let arr = weeklyDates(date);
        let pos = null;
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            Object.keys(obj).forEach((key) => {
                if (key == date.getDate()) {
                    pos = i;
                }
            })
        }
        let weekNumber = null;
        if (pos != null)
            weekNumber = pos;
        else
            weekNumber = null;


        //working with 2nd date
        let dateNew = new Date(date_2);
        let arrNew = weeklyDates(dateNew);
        let objNew = arrNew[weekNumber];
        if (objNew == null) {
            if (weekNumber == 0) objNew = arrNew[weekNumber + 1];
            else if (weekNumber == 5) objNew = arrNew[weekNumber - 1];
        }
        let dayNew = null;
        Object.keys(objNew).forEach((key) => {
            if (objNew[key] == weekDay) {
                dayNew = key;
            }
        });


        if (dayNew == null) {
            if (weekNumber == 3 || weekNumber == 4 || weekNumber == 5)
                objNew = arrNew[weekNumber - 1];
            else if (weekNumber == 0 || weekNumber == 1)
                objNew = arrNew[weekNumber + 1];
        }
        Object.keys(objNew).forEach((key) => {
            if (objNew[key] == weekDay) {
                dayNew = key;
            }
        });


        let monthNew = dateNew.getMonth() + 1;
        let yearNew = dateNew.getFullYear();
        let newlyCreatedDate = null;
        if (dayNew != null)
            newlyCreatedDate = yearNew + '-' + monthNew + '-' + dayNew;
        else
            newlyCreatedDate = null;
        return newlyCreatedDate;
    } catch (err) {
        throw err;
    }
}