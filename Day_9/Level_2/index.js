require('module-alias/register')
const countries = require('@arrays/countries_data');
const {countries2} = require('@arrays/countries');
const smallProducts = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// 1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// const sum = smallProducts.filter(p=>{
//     if (p.price && p.price != ' ') {
//         return p.price
//     }
// }).map(p=> p.price).reduce((acc, p)=> acc + p, 0)

// console.log(sum);

// 2.Find the sum of price of products using only reduce(callback))
// const reduceSum = smallProducts.reduce((acc, curr)=> { 
//     if(curr.price && curr.price != ' '){
//         return acc + curr.price
//     }else{
//         return acc
//     }
// }, 0)

// console.log(reduceSum);

// 3.Declare a function called categorizeCountries which returns an array of countries 
// which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(pattern){
    
    return countries.filter(c=> c.name.toLowerCase().includes(pattern))
}

// console.log(categorizeCountries('stan'));


// 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

function countriesLetters(){

    const letterCountMap = countries2.reduce((acc, c) => {
        const firstLetter = c.name.charAt(0);
        if (!acc[firstLetter]) {
            acc[firstLetter] = { times: 1 };
        } else {
            acc[firstLetter].times += 1;
        }
        return acc;
    }, {});
    
    console.log(letterCountMap);
    
}

countriesLetters()
