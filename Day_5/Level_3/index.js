// 1.The following is an array of 10 students ages: const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method

function e1() {
  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 24, 24, 17];
  //   let middle;
  //   let median;
  let sum;
  let range;
  let min = Math.min(...ages);
  let max = Math.max(...ages);
  // ages.sort();

  //   console.log(
  //     `The minimun age is ${min}, also de max age is ${max}`
  //   );

  //   if (ages.length % 2 == 0) {
  //     middle = ages.length / 2 - 1;
  //     median = ages.splice(middle, 2);
  //   } else {
  //     middle = Math.floor(ages.length / 2);
  //     median = ages.splice(middle, 1);
  //   }

  //   console.log(`The median age is ${median}`);
  sum = ages.reduce((a, c) => {
    return a + c;
  }, 0);
  const avg = sum / ages.length;
  console.log(`The avg. age is ${avg}`);
  //   range = ages.pop() - ages.shift();
  let minDiff = min - avg
  let maxDiff = max - avg
  // console.log(`The range of ages is ${range}`)

  if (Math.abs(minDiff) > Math.abs(maxDiff)) {
    console.log(`Min difference (${minDiff.toFixed(2)}) is greater than max difference (${maxDiff.toFixed(2)})`);
} else if (Math.abs(minDiff) < Math.abs(maxDiff)) {
    console.log(`Max difference (${maxDiff.toFixed(2)}) is greater than min difference (${minDiff.toFixed(2)})`);
} else {
    console.log(`Min difference (${minDiff.toFixed(2)}) is equal to max difference (${maxDiff.toFixed(2)})`);
}

}
// e1();
