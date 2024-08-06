const prompt = require("prompt-sync")();
const countries = require("../countries");

// 1.Develop a small script which generate any number of characters random id:

function e1() {
  let pass = "";
  let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let len;
  let randomIdx;
  do {
    len = parseInt(prompt("Define your random pass length: "));
  } while (isNaN(len) || len < 0);

  do {
    randomIdx = Math.floor(Math.random() * chars.length);
    if (!pass.includes(chars.charAt(randomIdx))) {
      pass = pass.concat(chars.charAt(randomIdx));
    }
  } while (pass.length < len);

  console.debug(pass);
}
// e1()

// 2.Write a script which generates a random hexadecimal number.

function e2() {
  let len = 6;
  let pass = "";
  let chars = "0123456789ABCDEFabcdef";
  let randomIdx;

  do {
    randomIdx = Math.floor(Math.random() * chars.length);
    if (!pass.includes(chars.charAt(randomIdx))) {
      pass = pass.concat(chars.charAt(randomIdx));
    }
  } while (pass.length < len);

  pass = "#".concat(pass);

  console.debug(pass);
}
// e2()

// 3.Write a script which generates a random rgb color number.

function e3() {
  let len = 3;
  let rgbValues = [];
  let color;

  do {
    color = Math.floor(Math.random() * 256);
    if (!rgbValues.includes(color)) {
      rgbValues.push(color);
    }
  } while (rgbValues.length < 3);

  console.debug(`rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`);
}
// e3();

// 4.Using the above countries array, create the following new array.

function e4() {
  console.debug("BEFORE: ", countries);
  for (let index = 0; index < countries.length; index++) {
    countries[index] = countries[index].toUpperCase();
  }
  console.debug("AFTER: ", countries);
}
// e4();

// 5.Using the above countries array, create an array for countries length'.
function e5() {
  let lengths = [];

  for (let c of countries) {
    lengths.push(c.length);
  }

  console.debug(lengths);
}
// e5()

// 6.Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

function e6() {
  console.debug("BEFORE: ", countries);

  for (let index = 0; index < countries.length; index++) {
    let array = [
      countries[index],
      countries[index].slice(0, 3).toUpperCase(),
      countries[index].length,
    ];
    countries[index] = array;
  }

  console.debug("AFTER: ", countries);
}
// e6()

// 7.In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

function e7() {
  let land = [];
  let noLand = [];
  for (const c of countries) {
    if (c.includes("land")) {
      land.push(c);
    } else {
      noLand.push(c);
    }
  }

  if (land.length == 0) {
    console.debug("All these countries are without land: ", noLand);
  } else {
    console.debug(land);
  }
}
// e7()

// 8.In above countries array, check if there is a country or countries end with a substring 'ia'.
// If there are countries end with, print it as array. If there is no country containing the word 'ai',
//  print 'These are countries ends without ia'.

function e8() {
  let ia = [];
  let noIa = [];

  for (const element of countries) {
    if (element.endsWith("ia")) {
      ia.push(element);
    } else {
      noIa.push(element);
    }
  }

  if (ia.length === 0) {
    console.debug("These are countries ends without ia: ", noIa);
  } else {
    console.debug(ia);
  }
}
// e8()

// 9.Using the above countries array, find the country containing the biggest number of characters.

function e9() {
  let biggest = "";

  for (const c of countries) {
    if (c.length > biggest.length) {
      biggest = c;
    }
  }

  console.debug(biggest);
}

// e9()

// 10.Using the above countries array, find the country containing only 5 characters.

function e10() {
  let five = [];

  for (const c of countries) {
    if (c.length === 5) {
      five.push(c);
    }
  }

  console.debug(`Countries containing 5 chars: `, five);
}
// e10()

// 13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack [["HTML", 4], ["Express", 7],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

function e13() {
  const mernArray = [
    ["HTML", 4],
    ["Express", 7],
    ["JavaScript", 10],
    ["React", 5],
    ["Redux", 5],
    ["Node", 4],
    ["MongoDB", 7],
  ];

  let acronym = [];
  let result = [];

  for (let index = 0; index < mernArray.length; index++) {
    let tech = mernArray[index][0];
    if (
      tech == "MongoDB" ||
      tech == "Express" ||
      tech == "React" ||
      tech == "Node"
    ) {
      acronym.push(tech.charAt(0));
    }
  }

  for (let index = 0; index < acronym.length; index++) {
    let element = acronym[index];
    if (element == "M") {
      result[0] = element;
    } else if (element == "E") {
      result[1] = element;
    } else if (element == "R") {
      result[2] = element;
    } else {
      result[3] = element;
    }
  }
  console.log(result.join(""));
}
// e13();

// 14.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

function e14() {
  const fruits = ["banana", "orange", "mango", "lemon"];
  const reversedFruits = [];

  for (let i = fruits.length - 1; i >= 0; i--) {
    reversedFruits.push(fruits[i]);
  }

  console.log(reversedFruits); // Output: ['lemon', 'mango', 'orange', 'banana']
}
// e14()