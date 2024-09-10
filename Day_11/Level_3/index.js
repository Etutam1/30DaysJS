require("module-alias/register");
const countries = require("@arrays/countries_data");
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const st = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// 1.Destructure the countries object print name, capital, population and languages of all countries
function getCountriesAtribs() {
  for (const { name, capital, population, languages } of countries) {
    console.log(name, capital, population, languages);
  }
}
// getCountriesAtribs()

// 2.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name,
// skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

// const [name, skills, [, , jsScore, reactScore]] = student;

// 3.Write a function called convertArrayToObject which can convert the array to a structure object.

function convertArrayToObject(array = [...students]) {
  return array.map((st) => {
    const [name, skills, scores] = st;
    return { name, skills, scores };
  });
}

// console.log(convertArrayToObject(students))

// 4.Copy the st object to newStudent without mutating the original object. In the new object add the following ?

let newStudent = {
  ...st,
  skills: {
    frontEnd: [...st.skills.frontEnd, { skill: "BootStrap", level: 8 }],
    backEnd: [...st.skills.backEnd, { skill: "Express", level: 9 }],
    dataBase: [...st.skills.dataBase, { skill: "SQL", level: 8 }],
    dataScience: [...st.skills.dataScience, "SQL"],
  },
};

console.info(newStudent);
