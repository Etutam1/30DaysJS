const prompt = require('prompt-sync')();

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
function e3(){
    let a = 1;
    let b = 2;
    
    return (a > b) ? console.log('a is greater than b') : ((a == b) ? console.log('a and b are equal') : console.log('a is less than b'))
}

// e3()

// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
function e4(){

    let num;

    do{
        num = prompt('Enter your number: ');
    }while(isNaN(num) || num < 0);

    console.log(num % 2 == 1 ? `${num} is odd`:`${num} is even` )
}
// e4();

