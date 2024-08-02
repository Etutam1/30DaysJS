const { capital, upper, lower } = require("case");
const prompt = require("prompt-sync")();
// 1.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

function e1() {
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    " Oracle",
    "Amazon",
  ];

  itCompanies.forEach((e) => {
    console.log(e);
    console.log(upper(e));
  });

  console.log(itCompanies.toString(), "are big IT companies");
}

// e1()

// 2.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function e2() {
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    " Oracle",
    "Amazon",
  ];

  do {
    selection = capital(
      prompt("Enter the company to search for: ").toLowerCase()
    );
  } while (!isNaN(selection) || selection.length == 0);

  console.log(
    itCompanies.indexOf(selection) != -1
      ? `${selection} is included`
      : `${selection} is not found`
  );
}

// e2()
// 3.Filter out companies which have more than one 'o' without the filter method
function e3() {
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    " Oracle",
    "Amazon",
  ];

  const reg = new RegExp("o+", "gi");

  itCompanies.forEach((c) => {
    if (c.match(reg)) {
      itCompanies.shift();
    }
  });

  console.log(itCompanies);
}
// e3();

// 4.Slice out the first 3 companies from the arra
function e4() {
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    " Oracle",
    "Amazon",
  ];
  itCompanies.splice(0, 3);
  console.log(itCompanies);
}
// e4();

// 5.Slice out the last 3 companies from the array
function e5() {
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    " Oracle",
    "Amazon",
  ];

  itCompanies.splice(itCompanies.lastIndexOf("IBM"), 3);
  console.log(itCompanies);
}
// e5()
// 6.Slice out the middle IT company or companies from the array
function e6() {
  let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    " Oracle",
    "Amazon",
  ];
  let middleIndex = Math.floor(itCompanies.length / 2);
  itCompanies.splice(middleIndex, 1);
  console.log(itCompanies);
}
// e6();
