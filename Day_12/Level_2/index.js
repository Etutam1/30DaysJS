// 1.  Write a function called tenMostFrequentWords which get the ten most frequent word from a string?  

function mostFrequentWord(){
    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    let words = paragraph.split(' ')

    return Object.values(words.reduce((acc,curr)=>{
        if(!acc[curr]){
            acc[curr] = {word: curr, count: 1}
        }else{
            acc[curr].count += 1
        }
        return acc
    },[])).sort((a,b)=> b.count - a.count).find((v,i)=> i == 0).word
}

// console.log(`The most frequent word is \'${mostFrequentWord()}\'`)


