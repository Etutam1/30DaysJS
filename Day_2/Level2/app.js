// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let number = '10'
if (typeof('10') != 10){
    number = Number(number)
}
console.log(`${number} is type: ${typeof number}`)

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let f = parseFloat('9.8')
if(f != 10){
    f = Math.ceil(f)
}
console.log(f)

// 5.Check if 'on' is found in both python and jargon
let p = 'python'
let j = 'jargon'

if(p.includes('on') && j.includes('on')){
    console.log(`${p} and ${j} inclundes \'on\'`)
}

// 6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let s = 'I hope this course is not full of jargon'

if (s.includes(j)){
    console.log(`${s} includes \'${j}\'`)
}

// 7.Generate a random number between 0 and 100 inclusively.
let n= Math.floor(Math.random() *101)
console.log(n)

// 8.Generate a random number between 50 and 100 inclusively.
let rand= Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(rand)

// 9.Generate a random number between 0 and 255 inclusively.
let m= Math.floor(Math.random() *256)
console.log(m)

// 10.Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
let randIdx= Math.floor(Math.random() * (js.length))

console.log(js.charAt(randIdx))

// 11.Use console.log() and escape characters to print the following pattern.
let pattern ="1 1 1 1 1 \
2 1 2 4 8 \
3 1 3 9 27 \
4 1 4 16 64 \
5 1 5 25 125\
"
console.log("1\t1\t1\t1\t1")
console.log("2\t1\t2\t4\t8")
console.log("3\t1\t3\t9\t27")
console.log("4\t1\t4\t16\t64")
console.log("5\t1\t5\t25\t125")


// 12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let bcs = 'You cannot end a sentence with because because because is a conjunction'

const toCut= 'because because because'
let cutted=bcs.substr(bcs.lastIndexOf(toCut), toCut.length)
console.log(cutted)



