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
      throw new Error('El array debe contener solo números')
    }
    sum += item
  }
  console.log(sum)
}

// sumOfArrayItems(['a',2,3,6])

