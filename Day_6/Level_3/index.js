// 1.Copy countries array(Avoid mutation)
const countries = require("../../arrays/countries");
const webTechs = require("../../arrays/web_techs");

function e1() {
    let newArray = countries.slice()
    let newArray2 = [...countries]
    
    console.debug(newArray,'\t',newArray2)
}
// e1()

// 2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

function e2(){

    let sortedCountries = countries.slice()
    console.log(sortedCountries)
}
// e2()

// 3.Sort the webTechs array 

function e3(){
    console.debug('Log before sort: ',webTechs)
    webTechs.sort()
    console.debug('Log after sort: ',webTechs)
}
// e3()

// 4.Extract all the countries contain the word 'land' from the countries array and print it as array

function e4() {
    
    console.debug(countries)

    let extracted = countries.filter((c,i)=>{
        if(c.match(/land/gi)){
            countries.splice(i,1)
            return c;
        }
    })
     
    console.debug('Countries after extraction: ',countries)
    console.debug('Extracted countries including \'land\':', extracted)
    

    
}
// e4()

// 5.Reverse the countries array and lowerize each country and stored it as an array


function e5() {

    let reversed = countries.slice().reverse().map((coun,idx,arr)=>{
        return coun.toLowerCase()
    })
    
    console.log(countries)
    console.log(reversed)
}
// e5()

