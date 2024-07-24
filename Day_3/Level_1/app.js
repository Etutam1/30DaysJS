// 4.Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

// Ejemplo 1: Número no cero

function e4(){
  const example1 = 42;
  console.log(Boolean(example1)); // true
  
  // Ejemplo 2: Cadena no vacía
  const example2 = "Hello, World!";
  console.log(Boolean(example2)); // true
  
  // Ejemplo 3: Objeto vacío
  const example3 = {};
  console.log(Boolean(example3)); // true
  
  
  // Ejemplo 1: El número 0
  const falsyExample1 = 0;
  console.log(Boolean(falsyExample1)); // false
  
  // Ejemplo 2: Cadena vacía
//   const falsyExample2 = "";
//   console.log(Boolean(falsyExample2)); // false
  
  // Ejemplo 3: Valor nulo
  const falsyExample3 = null;
  console.log(Boolean(falsyExample3)); // false
}

// e4();
// 7.Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const now = new Date();
console.log('What is the year today?')
console.log(`It is year ${now.getFullYear()}`)

console.log(' What is the month today as a number?')
console.log(`We are in ${now.getMonth()}`)


console.log(`What is the date today?`)
console.log(`It is ${now}`)


console.log('What is the day today as a number?')
console.log(`It is ${now.getDate()}`)

console.log('What is the hours now?')
console.log(`Current hour: ${now.getHours()}`)
console.log(`What is the minutes now?`)
console.log(`Current minutes ${now.getMinutes()}`)

console.log('Find out the numbers of seconds elapsed from January 1, 1970 to now')
console.log(`Since January 1, 1970 has been passed ${now.getTime()} ms`)