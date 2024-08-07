// 1.Declare a function fullName and it print out your full name.

function fullname(name, surnames) {
  console.log(`${name} ${surnames}`);
}

// fullname('Matias', 'Pereira Gutierrez')

// 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const area = (width, length) => width * length;

// console.log(area(2,3))

// 7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const circleArea = (radius) => Math.PI * radius ** 2;

// console.log(circleArea(10))

// 11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weight = (mass) => mass * 9.81;
// console.debug(weight(78000))

// 13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to
//  broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const calculteBMI = ()=>{

    const p1 = {
        name: "Maria",
        weight: 60,
        height: 1.63,
      };
      
      const p2 = {
        name: "Macarena",
        weight: 50,
        height: 1.77,
      };
      
      const p3 = {
        name: "Matias",
        weight: 70,
        height: 1.75,
      };
      
      const p4 = {
        name: "Latas",
        weight: 95,
        height: 1.8,
      }
      
      function BMI() {
        for (const p of arguments) {
          p.bmi = parseFloat(p.weight / p.height ** 2).toFixed(2);
          showResults(p);
        }
      }
      
      function showResults() {
        let result;
        if (arguments[0] < 18.5) {
          result = "Underweigth";
        } else if (arguments[0].bmi < 25) {
          result = "Normal";
        } else if (arguments[0].bmi < 30) {
          result = "Overweight";
        } else {
          result = "Obese";
        }
        console.log(arguments[0].name, `BMI at ${arguments[0].bmi} is ${result}`); 
    }

    BMI(p1,p2,p3,p4)
      
}

// calculteBMI()

// 14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = m =>{

const seasons = {
    Otoño: ['Septiembre', 'Octubre', 'Noviembre'],
    Primavera: ['Marzo', 'Abril', 'Mayo'],
    Verano: ['Junio', 'Julio', 'Agosto'],
    Invierno: ['Diciembre', 'Enero', 'Febrero']
}

let season = (function(){
    for(const [season, months] of Object.entries(seasons)){
        if (months.includes(arguments[0])) {
            return season
        }
    }
})(m)

console.log(`The month of ${m} belongs to ${season} season`)
}

// checkSeason()


// 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const checkMax= (...args)=>{

    let maximun = (function(){

        let max = 0
    
        for (const arg of args) {
            if (arg > max) {
                max = arg
            }
        };
    
        return max;
    
    })();

    return maximun
}


// console.log(checkMax(1,2,3))






