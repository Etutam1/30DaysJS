
const prompt = require('prompt-sync')();
const { title, capital } = require('case');

// 1.Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

function e1(){
    let score;
    let grade;
    do{
        score = Number(prompt('Enter your score: '));
    }while(isNaN(score) || score < 0 || score > 100);

    if (score <= 49) {
        grade = 'F';
    } else if (score <= 59) {
        grade = 'D';
    } else if (score <= 69) {
        grade = 'C';
    } else if (score <= 89) {
        grade = 'B';
    } else if (score <= 100) {
        grade = 'A';
    }


    console.log(`For your score: ${score} you got a ${grade}`);
}
// e1();

// 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function e2(){
    let selection;
    let seasons = {
        Autumn: ['September', 'October','November'],
        Winter: ['December', 'January','February'],
        Spring:['March', 'April', 'May'],
        Summer:['June', 'July', 'August']
    }
    do{
        selection = prompt('Enter a month by his name: ');
    }while(!isNaN(selection) || selection.length == 0);

    selection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();

    let season;
    for(let [key, months] of Object.entries(seasons) ){
        if(months.includes(selection)){
            season = key
            break;
        }
    }
    
    console.log(season ? `${selection} is a month of ${season} season`: 'El mes no existe');
}

// e2();

// 3.Check if a day is weekend day or a working day. Your script will take day as an input.

function e3() {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let selection;

    do {
        selection = prompt('What is the day today?: ');
        selection = title(selection.toLowerCase())
    } while (!isNaN(selection) || selection.length == 0 || !days.includes(selection));
   
    let result;

    if (days.indexOf(selection) < days.indexOf('Saturday')) {
        result = 'working day'
    } else {
        result = 'weekend'
    }

    console.log(`${selection} is a ${result}`)
}
// e3()
