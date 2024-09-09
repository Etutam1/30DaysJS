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


newValue = {
  dayIn: '2024-09-10',
  hourIn: '09:00',
  dayOut:'',
  hourOut: '',
  checkin: this.dayIn + ' ' + this.hourIn,
  checkout: this.dayOut + ' ' + this.hourOut
}
function ValidInputValues(newValue){
        
        if( !moment(newValue.dayIn, 'YYYY-MM-DD', true).isValid() || !moment(newValue.hourIn, 'HH:mm',true).isValid()){
          console.log('COMPRUEBA HORA DE ENTRADA');
          return false
        }

        if (newValue.dayOut && newValue.hourOut) {
          if(!moment(newValue.dayOut,'YYYY-MM-DD', true).isValid() || !moment(newValue.hourOut, 'HH:mm', true).isValid()){
            console.log('fecha checkout no válida');
            return false
          }
        }
        console.log('true');
        
        return true    
}


ValidInputValues(newValue)
