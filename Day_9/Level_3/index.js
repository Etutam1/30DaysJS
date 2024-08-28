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
  ages: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],
  count: function(){
    return this.ages.length
  },
  sum: function(){
    return this.ages.reduce((acc,a)=>{
      return acc + a
    }, 0)
  },
  min: function(){
    return Math.min(...this.ages)
  },
  max: function () {
    return Math.max(...this.ages)
  },
  
  mean: function () {
    return (this.sum() / this.count())
  },

  mode: function () {
    let modes = Object.values(this.ages.reduce((acc, a)=>{
      if (!acc[a]) {
        acc[a] = {mode: a, count: 1}
      } else{
        acc[a].count += 1
      }
      return acc
    }, {})).sort((a,b)=> b.count - a.count)

    return modes.filter(m => m.count == modes[0].count)
  }, 

  range: function(){
    return this.max() - this.min()
  },

  median: function () {
    let sorted = this.ages.sort((a,b)=> a - b)
    let idx = Math.floor(sorted.length/2)

    if (sorted.length % 2 == 0) {
      return (sorted[idx-1] + sorted[idx])/2
    } else {
      return sorted[idx]
    } 
  }
  
}

console.log(statistics.median());


// Medidas de Tendencia Central
// Media (Mean):

// La media es el promedio de los valores de la muestra. Se calcula sumando todos los valores y dividiendo el resultado por la cantidad total de valores en la muestra.
// Mediana (Median):

// La mediana es el valor central de una muestra ordenada. Si el número de valores es impar, la mediana es el valor del medio. Si el número es par, la mediana es el promedio de los dos valores centrales.
// Moda (Mode):

// La moda es el valor que aparece con mayor frecuencia en la muestra. Puede haber más de una moda si varios valores tienen la misma frecuencia máxima.
// Medidas de Variabilidad
// Rango (Range):

// El rango es la diferencia entre el valor máximo y el valor mínimo de la muestra. Mide la dispersión total de los datos.
// Varianza (Variance):

// La varianza mide la dispersión de los valores respecto a la media. Se calcula promediando los cuadrados de las diferencias entre cada valor y la media de la muestra.
// Desviación Estándar (Standard Deviation):

// La desviación estándar es la raíz cuadrada de la varianza. Mide cuánto se desvían, en promedio, los valores de la media. Es una medida de la dispersión más interpretativa que la varianza.
// Otros Estadísticos
// Mínimo (Min):

// El valor mínimo es el valor más pequeño en la muestra.
// Máximo (Max):

// El valor máximo es el valor más grande en la muestra.
// Cuenta (Count):

// La cuenta es simplemente el número total de valores en la muestra.
// Percentil (Percentile):

// Un percentil indica el valor por debajo del cual se encuentra un cierto porcentaje de observaciones en la muestra. Por ejemplo, el percentil 25 es el valor debajo del cual se encuentra el 25% de las observaciones.
// Distribución de Frecuencia (Frequency Distribution):

// La distribución de frecuencia es una tabla que muestra cuántas veces aparece cada valor (o rango de valores) en la muestra. Es útil para comprender la distribución general de los datos.