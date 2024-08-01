const prompt = require('prompt-sync')();
const {title} = require('case')
const moment = require('moment');

// 1.Write a program which tells the number of days in a month.

function e1(){
    const months = moment.months();
    
    let month;
    
    do {
        month = prompt('Enter a month: ');
        month = title(month.toLowerCase());
    } while (!months.includes(month));

    let m = moment().month(month)

    console.log(`${month} has ${m.daysInMonth()} days`)
}
e1()