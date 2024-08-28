require("module-alias/register");
const countries = require("@arrays/countries_data");
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


// 1.Use the countries information, in the data folder. Sort countries by name, by capital, by population

function sortByProp(arr, prop) {
  if (arr && arr.length && arr[0].hasOwnProperty(prop)) {
    return arr.sort((a, b) => {
      if (typeof a[prop] == "number") {
        return b[prop] - a[prop];
      }
      return a[prop] - b[prop];
    });
  }
}

// console.table(sortByProp(sortByProp(sortByProp(countries, "name"), "capital"), "population"));

// 2.*** Find the 10 most spoken languages:
// {
//     name: 'Thailand',
//     capital: 'Bangkok',
//     languages: ['Thai'],
//     population: 65327652,
//     flag: 'https://restcountries.eu/data/tha.svg',
//     currency: 'Thai baht'
//   }

// const mostSpokenCountries= ((arr, limit)=>{
//     let languages = undefined
//     return Object.values(arr.reduce((acc,c)=>{
//         language = c.languages
//         language.forEach(lang => {
//             if (!acc[lang]) {
//                 acc[lang] = {language: lang, count: 1}
//             }else{
//                 acc[lang].count += 1
//             }
//         });
//         return acc;
//     }, {})).sort((a,b)=> b.count - a.count).filter((el,i)=> i < limit)
// })(countries, 10)

// console.log(`The most spoken language is ${mostSpokenCountries && mostSpokenCountries.length ? mostSpokenCountries[0].language: undefined}`);

// 3. Use countries_data.js file create a function which create the ten most populated countries
// {
//     name: 'Thailand',
//     capital: 'Bangkok',
//     languages: ['Thai'],
//     population: 65327652,
//     flag: 'https://restcountries.eu/data/tha.svg',
//     currency: 'Thai baht'
//   }

const mostPopulatedCountries = function (arr, limit) {

  return arr.map(el=> {return {country: el.name, population: el.population}}).sort((a,b)=> b.population - a.population).filter((el,i)=> i < limit)
}
 
// console.log(mostPopulatedCountries(countries, 10))


const statistics = {
  ages: ages,
  

}

