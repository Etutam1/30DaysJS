const prompt = require("prompt-sync")();
const countries = require("../../arrays/countries");
// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

const userIdGeneratedByUser = function () {
  let charLen;
  let numIds;

  do {
    charLen = prompt("Indica la longitud de id: ");
  } while (isNaN(charLen) || charLen < 0);

  do {
    numIds = prompt("Indica la cantidad de Ids a generar: ");
  } while (isNaN(numIds) || numIds < 0);

  let chars = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let charsIdx;

  for (let index = 0; index < numIds; index++) {
    let id = "";
    let char = "";
    do {
      charsIdx = Math.floor(Math.random() * chars.length);
      char = chars.charAt(charsIdx);
      id = id.concat(
        typeof char == "string" && charsIdx % 2 == 0 ? char.toLowerCase() : char
      );
    } while (id.length < charLen);

    console.log(id);
  }
};

// userIdGeneratedByUser()

// 2.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

const suffleArray = function (array) {
  if (!Array.isArray(array)) {
    return TypeError(`El parametro debe ser un array`);
  }

  let aux = array.slice();

  for (let i = aux.length - 1; i > 0; i--) {
    const idx = Math.floor(Math.random() * (i + 1));
    [aux[i], aux[idx]] = [aux[idx], aux[i]];
  }
  return aux;
};

// console.log(countries)
// console.log(suffleArray(countries))

const factorial = (n) => {

  if (n < 0) {
    return undefined;
  } else if (n == 1 || n == 0) {
    return 1;
  } 

  let result = n;

  do {
    n--;
    result *= n;
  } while (n > 1);

  return result;
};

// console.log(factorial(10));

// 3.Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(param) {
  console.log(param.trim() === '' ? `\'${param}\' is empty` : `\'${param}\' is not empty`)
}

// 4.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(array) {
  let sum = 0
  for (const item of array) {
    if (isNaN(item)){
      throw new Error('array must contain only numeric values')
    }
    sum += item
  }
  console.log(sum)
}

// sumOfArrayItems(['a',2,3,6])

// 5.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(array) {

  let sum = 0

  for (const element of array) {
    if (isNaN(element)) {
      throw new Error('Array must contain only numeric values')
    }
    sum += element
  }

  return sum/array.length
}

// console.log(average([1,2,3,4,5,6]))

// 6.Write a function called isPrime, which checks if a number is prime number.

function isPrime(n) {
  
  if (n <=1) {
    return false
  }else if (n == 2) {
    return true
  }else if (n%2 ==0) {
    return false 
  }

  for (let index = 3; index <= Math.sqrt(n); index+=2) {
    if (n % index== 0) {
      return false
    }
    
  }
  return true
}

// console.log(isPrime(17))

// 7.Write a function which checks if all the items of the array are the same data type.

function sameType(arr) {
  
  return arr.every(i=> typeof i === typeof arr[0])
}

// console.log(sameType([1,2,'a']))

// 8.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(v) {
  
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(v)
}
// let variable = '{}v'
// console.log(isValidVariable(variable) ? `${variable} is valid` : `${variable} is not valid`)

// 9.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function sevenRandomNumbers() {
  let set = new Set()

    do{
      set.add(Math.floor(Math.random() * 10))
    }while(set.size < 7 )
  return set
  
}

console.log(sevenRandomNumbers())