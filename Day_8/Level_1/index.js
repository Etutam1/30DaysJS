// 1.Create an empty object called dog
const dog = {};

// 2.Print the the dog object on the console4
// console.log(dog)

// 3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = "Pistacho";
dog.legs = 4;
dog.color = "brown";
dog.age = 1;
dog.bark = function () {
  return "woof woof";
};

//  4.Get name, legs, color, age and bark value from the dog object
Object.values(dog).forEach((value) => {
  if (typeof value === "function") {
    console.log(value());
  } else {
    console.log(value);
  }
});

5.