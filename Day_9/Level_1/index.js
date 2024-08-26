require('module-alias/register')
const countries = require('@arrays/countries_data');
const { products } = require('../../arrays/users_products');
const smallProducts = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const smallCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// 6. Use map to create a new array by changing each country to uppercase in the countries array.

// const uppercaseCountries = countries.map( c => c.name.toUpperCase())
// console.table(uppercaseCountries)

// 7.Use map to create a new array by changing each country to uppercase in the countries array.
// const countriesWithLength = countries.map(c => {return {...c,
//    length: c.name.length
// }})
// console.log(countriesWithLength)


// 8.Use map to create a new array by changing each number to square in the numbers array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const squareNumbers = numbers.map(n => n**2)
// console.log(squareNumbers)

// 9. Use map to change to each name to uppercase in the names array
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.map(n=> n.toUpperCase()))


// 11.Use filter to filter out countries containing land.

// const landCountries = countries.filter( c=> c.name.includes('land'))
// console.log(landCountries)

// 12.Use filter to filter out countries having six character.

// console.log(countries.filter(c=> c.name.length == 6));

// 13. Use filter to filter out countries containing six letters and more in the country array.

// console.log(countries.filter(c=> c.name.length >= 6));

// 14.Use filter to filter out country start with 'E';
// console.log(countries.filter(c=> c.name.charAt(0) =='E'));

// 15.Use filter to filter out only prices with values.

// console.log(smallProducts.filter(p=> p.price && p.price != ' '));

// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr){
    return arr.filter(i=> typeof i == 'string')
}

// 17.Use reduce to sum all the numbers in the numbers array.
// const numSum = numbers.reduce((acc, curr)=> acc + curr, 0)
// console.log(numSum);

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries


// console.log(smallCountries.reduce((acc,curr, index)=>{ 
//     if (index === smallCountries.length - 1) {
//         return acc + 'and ' + curr;
//     }
//     return acc + curr + ', ';
// }, ''), 'are north European countries');


// 20.Use some to check if some names' length greater than seven in names array
// console.log(names.some(n=>n.length > 7))

// 21.Use every to check if all the countries contain the word land

// console.log(smallCountries.every(c=> c.includes('land')))

// 23.Use find to find the first country containing only six letters in the countries array

// console.log(smallCountries.find(c=> c.length == 6));

// 24.Use findIndex to find the position of the first country containing only six letters in the countries array
// console.log('Index: ', smallCountries.findIndex(c=> c.length == 6));

// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// const pos = smallCountries.findIndex(c=> c == 'Norway')
// console.log(pos != -1 ? `position: ${pos}` : 'It does not exists');

// 26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// const pos = smallCountries.findIndex(c=> c == 'Russia')
// console.log(pos !=-1 ? `position: ${pos}` : 'It does not exists');


