const prompt = require('prompt-sync')();

// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function e1(){

getSide().then(b=>
  getSide().then(h=>
    calculateArea(b, h)
  )
);
}


function getSide(){
  return new Promise((resolve, reject)=>{
    try{
      resolve(prompt('Enter the side(i.e. 20.0):'))
    }catch(err){
      reject(err)
    }
  })
}



function parseNumber(number){
  return new Promise((resolve, reject)=>{
    try{
      resolve(Number(number))
    }catch(err){
      reject(err)
    }
  })
}


async function calculateArea(base, height){

  base = await parseNumber(base);
  console.log(base)
  height= await parseNumber(height);
  console.log(height)

  alert(`The area of our triangle is ${base * height /2}`)
}

// e1();
function calculatePerimeter(sides){
  return sides.reduce((p,c)=> p + c)
}

// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
async function e2(){
  sides = []
   let a= await getSide();
   sides.push(Number(a))
   let b= await getSide();
   sides.push(Number(b))
   let c= await getSide();
   sides.push(Number(c))

   alert(`The Perimeter of your triangle is ${calculatePerimeter(sides)}`)

  }
  // e2()

  // 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
  async function e3(){
    const PI = Math.PI
    let r;
    do{
       r =  Number(prompt('What is the radius?: '))
    }while( isNaN(r) || r < 0)
    
    let area = PI * r *r
    let circ = 2 * PI * r
    console.log(`The area of your cicle is ${area.toFixed(2)}, and the circumference is ${circ.toFixed(2)}`)
}
  
  // e3();
  // 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
  function e8(){
    const e = '1x2+6x+9'
    const a = Number(e.split('+')[0].charAt(0))
    const b = Number(e.split('+')[1].charAt(0))
    const c = Number(e.split('+')[2].charAt(0))
    const x1 = -b + Math.sqrt(b**2-4*a*c)/2*a
    const x2 = -b - Math.sqrt(b**2-4*a*c)/2*a

    const y1 = a*x1**2 + b*x1 + c
    const y2 = a*x2**2 + b*x2 + c
    
    console.log(`x values if y is 0:\n -x1: ${x1}\n -x2: ${x2}\ny values:\n -y1: ${y1}\n -y2: ${y2}`)

  }
  // e8();

  // 9.Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
function e9(){
  let h;
  let rate;
  do{
    h = prompt('Enter hours: ')
  }while(isNaN(h) || h < 0  )
  
  do{
    rate = prompt('Enter rate per hour: ')
  }while(isNaN(rate) || rate < 0)
  
    console.log(`Your weekly earning is ${h*rate}`)
}
// e9();
// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.
function e10(){
  let name;
  do{
    name = prompt('Enter your name: ')
  }while(name == null || name.length == 0 || typeof name != 'string')

  if(name.length > 7){
    console.log('Your name is long')
  }else{
    console.log('Your name is short')
  }
}
// e10()

// 11.Compare your first name length and your family name length and you should get this output.
function e11(){
  let first;
  let last;
  let result;
  do{
    first = prompt('Enter your first name: ')
  }while(first == null || first.length == 0 || typeof first != 'string');

  do{
    last = prompt('Enter your last name: ')
  }while(last == null || last.length == 0 || typeof last != 'string');

  if(first.length > last.length){
    result = 'longer'
  } else{
    result = 'shorter'
  }
  console.log(`Your first name ${first}, is ${result} than your last name ${last}`)
}
// e11()
// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

function e12(){
  let myAge;
  let yourAge;
  do{
    myAge = Number(prompt('Enter your age: '))
  }while(myAge == null || myAge.length == 0 || typeof myAge == 'string')

  do{
    yourAge = Number(prompt('Enter his age: '))
  }while(yourAge == null || yourAge.length == 0 || typeof yourAge == 'string')
  
   
  console.log(`I am ${Math.abs(myAge - yourAge)} years ${myAge > yourAge ? 'older' : 'younger'} than you.`)
}
// e12();
// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
function e13(){
  let birth;
  do{
    birth = Number(prompt('Enter your birth year: '))
  }while(isNaN(birth) || birth > new Date().getFullYear() )
  
  let age = new Date().getFullYear() - birth
  console.log(`You are ${age}, ${age >= 18 ? 'You are old enough to drive' : 'You will be allowed to drive after ' +`${18-age}`+' years.'}`)
}
// e13();

// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
function e14(){

  let years;
  
  do{
    years=  Number(prompt('Enter the number of years you lived: '))
  }while(isNaN(years) || years < 0)
  
  let birthSecs = (new Date().setFullYear(new Date().getFullYear() - years)) / 1000
  let nowSecs = (new Date().setFullYear(new Date().getFullYear())) / 1000

  console.log(`You lived ${(nowSecs - birthSecs).toFixed(2)} seconds`)
}
// e14()

// 15.Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
function formatDate(date, format){
      
  switch(format){
    case 'YYYY-MM-DD HH:mm':
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    case 'DD-MM-YYYY HH:mm':
      return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    case 'DD/MM/YYYY HH:mm':
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    default:
      throw new Error('Invalid format');
  }
}

function e15(){
  try{
    console.log('1.',formatDate(new Date(), 'YYYY-MM-DD HH:mm'))
    console.log('2.',formatDate(new Date(), 'DD-MM-YYYY HH:mm'))
    console.log('3.',formatDate(new Date(), 'DD/MM/YYYY HH:mm'))
  }catch(e){
    console.log(e)
  }
 
}
// e15()

