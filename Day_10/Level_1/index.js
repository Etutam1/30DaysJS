// 1.create an empty set
let mySet = new Set();

// 2.Create a set containing 0 to 10 using loop

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of nums) {
  mySet.add(num);
}
// 3.Remove an element from a set

mySet.delete(5);
// 4.Clear a set

mySet.clear();

//  5.Create a set of 5 string elements from array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
let languagesSet = new Set(languages);


// 6.Create a map of countries and number of characters of a country
const countries = ["Finland", "Sweden", "Norway"];
const countriesMap = new Map(countries.map(c=>[c,c.length]))
console.log("countriesMap:", countriesMap)


