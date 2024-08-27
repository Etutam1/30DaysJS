require("module-alias/register");
const countries = require("@arrays/countries_data");

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

console.table(sortByProp(sortByProp(sortByProp(countries, "name"), "capital"), "population"));

// 2.*** Find the 10 most spoken languages:
// {
//     name: 'Thailand',
//     capital: 'Bangkok',
//     languages: ['Thai'],
//     population: 65327652,
//     flag: 'https://restcountries.eu/data/tha.svg',
//     currency: 'Thai baht'
//   }

const mostSpokenCountries= ((arr, limit)=>{
    let languages = undefined
    return Object.values(arr.reduce((acc,c)=>{
        language = c.languages
        language.forEach(lang => {
            if (!acc[lang]) {
                acc[lang] = {language: lang, count: 1}
            }else{
                acc[lang].count += 1
            }
        });
        return acc;
    }, {})).sort((a,b)=> b.count - a.count).filter((el,i)=> i < limit)
})(countries, 1)

console.log(`The most spoken language is ${mostSpokenCountries && mostSpokenCountries.length ? mostSpokenCountries[0].language: undefined}`);

