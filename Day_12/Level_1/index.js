require('module-alias/register');

// 1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

function calculateIncome(){
    const text = 'He earns 4000 euro from salary per month, 10000 euro anual bonus, 5500 euro online courses per month'
    let total = 0
    let salaries = text.split(',').map(s=>{
        let [salary] = s.match(/\d+/g)
        let type = s.match(/month|anual/)[0]
        return {amount: Number(salary), type}
    })
    

    salaries.forEach(sal=>{
        if (sal.type == 'month') {
            total += (sal.amount * 12)
        }else{
            total+= sal.amount
        }
    })
    return total
}

// console.log("total income:", calculateIncome())

// 2.The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

function findDistance(){
    const text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
    
    const nums = text.match(/-?\d+/g).map(Number);
   
    return Math.max(...nums) - Math.min(...nums)
    
}
// console.log("findDistance:", findDistance())

// 3.Write a pattern which identify if a string is a valid JavaScript variable

function isValidVariable(variable){
    if(variable && typeof variable  == 'string'){
        const validRegex = /^[a-zA-Z_][\w_]*$/
        return validRegex.test(variable)
    }
    return false
}


console.log("isValidVariable:", isValidVariable('0'))
