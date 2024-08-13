// 1.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

const solveQuadratic = (a,b,c)=>{


    let sol1 = (-b + Math.sqrt(b**2-4*a*c))/2*a
    let sol2 = (-b - Math.sqrt(b**2 - 4*a*c))/2*a

    return sol1 == sol2 ? {sol1} : {sol1, sol2}
   
    
}

// console.log(solveQuadratic(1, 4, 4)) 

// 2.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = function(){
    let now = new Date()
    return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')} `
}

// console.log(showDateTime())


// 3.Declare a function name swapValues. This function swaps value of x to y

const swapValues = (x, y)=>{

    let aux = x
    x = y
    y = aux
    
    return `{${x},${y}}`
}

//  console.log(swapValues(4,5))



// 10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = n =>{

    let sum = 0
    for (let index = 0; index <= n; index++) {
        sum  += index 
    }
    return sum
}

// console.log(sumOfNumbers(100))

// 11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = n =>{

    let sum = 0;
    for (let index = 0; index <= n; index++) {
        sum += index%2 == 1 ? index : 0
    }
    return sum
}

// console.log(sumOfOdds(100))

// 12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = n =>{

    let sum = 0

    for (let index = 0; index <= n; index++) {
         sum += index % 2 == 0 ? index : 0 
        
    }
    return sum
}

// console.log(sumOfEven(100))

// 13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = n =>{
    let eCount = 0;
    let oCount = 0;

    for (let index = 0; index <= n; index++) {
        
        index % 2 == 1 ? oCount++ : eCount++
        
    }

    console.log(`The number of odds are ${oCount}`)
    console.log(`The number of evens are ${eCount}`)
}

// evensAndOdds(100)


// 14.Write a function which takes any number of arguments and return the sum of the arguments

const sumNums = function(){
    let sum = 0
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index]
    }

    console.log(sum)

}

// sumNums(0,1,2,3)


// 15.Writ a function which generates a randomUserIp.

const randomUserIp = ()=>{

    let ip = []

    do {
        ip.push(Math.floor(Math.random() * 256))
    }while(ip.length < 4)

    console.log(ip.join('.'))
}

// randomUserIp();

// 16.Write a function which generates a randomMacAddress

function randomMacAddress(){
    const chars = '0123456789ABCDEF'
    let mac = []

    do{
        let pair = []

        do {
            let char = chars[Math.floor(Math.random() * chars.length)]
            pair.push(char)
        } while (pair.length < 2);
       
        mac.push(pair)
       
    }while (mac.length < 6) 
    
    for (let index = 0; index < mac.length; index++) {
        mac[index] = mac[index].join('')
    }
    
    console.log(mac.join(':'))
}

// randomMacAddress()


