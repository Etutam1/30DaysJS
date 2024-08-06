// 1.Write a loop that makes the following pattern using console.log():

function e1() {
  let symbol = "#";

  for (let index = 1; index < 8; index++) {
    console.log(symbol.repeat(index));
  }
}
// e1()

// 2.Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
function e2() {
  for (let index = 0; index < 11; index++) {
    console.log(`${index} x ${index} = ${index * index}`);
  }
}
// e2()

// 3.Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
function e3() {
  console.log("i\ti^2\ti^3");
  for (let i = 0; i < 11; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`);
  }
}
// e3()

// 4.Use for loop to iterate from 0 to 100 and print only even numbers

function e4() {
  for (let index = 0; index < 101; index++) {
    if (index % 2 == 0) {
      console.log(index);
    }
  }
}
// e4()

// 5.Use for loop to iterate from 0 to 100 and print only odd numbers

function e5() {
  for (let index = 0; index < 101; index++) {
    if (index % 2 == 1) {
      console.log(index);
    }
  }
}
// e5()

// 6.Use for loop to iterate from 0 to 100 and print the sum of all numbers.

function e6() {
  let sum = 0;
  for (let index = 0; index < 101; index++) {
    sum += index;
  }
  console.log(sum);
}

// e6()
// 7.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
function e7() {
  sum = [];
  let evenSum = 0;
  let oddSum = 0;
  for (let index = 0; index < 101; index++) {
    if (index % 2 == 0) {
      evenSum += index;
    } else {
      oddSum += index;
    }
  }
  sum.push(evenSum);
  sum.push(oddSum);
  console.log(sum);
}
// e7();

// 8.Develop a small script which generate array of 5 random numbers

function e8() {
  let array = [];

  for (let index = 0; index < 5; index++) {
    array.push(Math.random() * 100);
  }
  console.log(array);
}
// e8()

// 9.Develop a small script which generate array of 5 random numbers and the numbers must be unique

function e9() {
  let array = [];
  while (array.length < 5) {
    let num = Math.floor(Math.random() * 100);
    if (!array.includes(num)) {
      array.push(num);
    }
  }
  console.log(array);
}
// e9();

// 10.Develop a small script which generate a six characters random id:

function e10() {
  let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = '';
  let num;
  do {
    num = Math.floor(Math.random() * chars.length);
    if (!id.includes(chars.charAt(num))) {
      id = id.concat(chars.charAt(num));
    }
  } while (id.length < 6);

  console.debug(id)
}
// e10();


