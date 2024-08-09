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
