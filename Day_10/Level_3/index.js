require("module-alias/register");
const countries = require("@arrays/countries_data");
const moment = require("moment/moment");

// 1.How many languages are there in the countries object file.

let langs = 
  countries.reduce((acc, c) => {
    c.languages.forEach((l) => {
      acc.push(l);
    });
    return acc;
  }, [])

console.log("langs count:", new Set(langs).size);

// 2.*** Use the countries data to find the 10 most spoken languages:

const mostSpokenLang = function (limit) {

  let count = []
  for (const lang of new Set(langs)) {
    count.push({lang:lang, count:langs.filter(l=>l == lang).length})
  }

  return count.sort((a,b)=> b.count - a.count).filter((c,i)=> i < limit)
}

// console.log(mostSpokenLang(10))


