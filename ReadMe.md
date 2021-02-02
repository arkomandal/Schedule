1. Put two dates
2. check the day of the week for 1st date. say 2020-01-01 is 1st wednesday
3. get date of 1st wednesday for 2nd param

example:

```js
const day_of_month = require('day_of_month');

day_of_month.getNewDay('2021-01-31', '2021-04').then(day => {
    console.log(day); //should return 2021-4-25
});
```

Since 2021-01-31 was last sunday and we are enquiring about last sunday of 2021-04 it returned 2021-04-25
