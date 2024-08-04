//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const countries = require("../countries");
const techs = require("../web_techs");

// 2.First remove all the punctuations and change the string to array and count the number of words in the array

function e2() {
  let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

  let words = text.match(new RegExp("[a-zA-Z]+", "gi"));
  console.log(words);
  console.log(words.length);
}
// e2()

// 3.In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
function e3() {
  const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

  shoppingCart.unshift("Meat");
  shoppingCart.push("Sugar");
  shoppingCart.splice(shoppingCart.lastIndexOf("Honey"), 1);
  shoppingCart.splice(shoppingCart.lastIndexOf("Tea"), 1, "Green Tea");

  console.log(shoppingCart);
}
// e3()

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

function e4() {
  countries.includes("Ethiopia")
    ? console.log("ETHIOPIA")
    : countries.push("Ethiopia");
}
// e4()

// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

function e5() {
  techs.includes("Sass")
    ? console.log("Sass is a CSS preprocess")
    : techs.push("Sass");
  console.log(techs);
}
// e5()

// 6.Concatenate the following two variables and store it in a fullStack variable.

function e6() {
  const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
  const backEnd = ["Node", "Express", "MongoDB"];

  let fullStack = frontEnd.concat(backEnd);
  console.log(fullStack);
}

// e6()
