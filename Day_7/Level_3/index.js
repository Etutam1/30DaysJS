
const prompt = require ('prompt-sync')();

// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

const userIdGeneratedByUser = function(){


    let charLen;
    let numIds;

    do{
        charLen = prompt('Indica la longitud de id: ')
    }while (isNaN(charLen) || charLen < 0) 
        
    do {
        numIds = prompt('Indica la cantidad de Ids a generar: ')
    } while (isNaN(numIds) || numIds < 0);

    let chars = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    let charsIdx;

    for (let index = 0; index < numIds; index++) {
        let id = ''
        let char = ''
        do {
            charsIdx = Math.floor(Math.random() * chars.length)
            char = chars.charAt(charsIdx)
            id = id.concat( typeof char == 'string' && charsIdx%2 == 0 ? char.toLowerCase() : char)
        } while (id.length < charLen);
        
        console.log(id)
    }
}

// userIdGeneratedByUser()






