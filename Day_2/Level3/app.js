// 1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

function wordCounter(sentence, word) {
  const regex = new RegExp(word, "gi");
  let result = sentence.match(regex);
  console.log(
    `In the sentence \'${sentence}\' have ${result.length} times \'${word}\' word`
  );
}

function e1() {
  let str =
    "Love is the best thing in this world. Some found their love and some are still looking for their love.";
  wordCounter(str, "love");
}

// e1();

// 2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction
function e2() {
  let str =
    "You cannot end a sentence with because because because is a conjunction";
  wordCounter(str, "because");
}

// e2();

//3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
function e3() {
  const sentence =
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

  let clear = sentence.replace(/[^a-zA-Z0-9\s\t]/gi, "");
  let words = clear.split(" ");
  let word = "";
  let higherLength = 0;
  words.forEach((w) => {
    let length = words.filter((wd) => w == wd).length;

    if (length > higherLength) {
      higherLength = length;
      word = w;
    }
  });

  console.log(`The most frequent word is ${word}`);
}
e3();

//4.Calculate the total annual income of the person by extracting the numbers from the following text.
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

function e4() {
  let sentence =
    "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

  let split = sentence.split(",");
  let total = 0;
  split.forEach((s) => {
    let matchs = s.match(/\d+/gi);
    if (matchs) {
      let number = Number(matchs[0]);
      if (s.includes("month")) {
        total += number * 12;
      } else {
        total += number;
      }
    }
  });

  console.log(`The anual income is ${total} €`);
}

e4();
