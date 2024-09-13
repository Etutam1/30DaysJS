// 1.Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

function mostFrequentWords(limit) {
    let text = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    text = text.replace(/[^\w\s]/g, '')
    console.log("mostFrequentWords ~ text:", text)

    return Object.values(text.split(" ").reduce((acc,curr)=>{
        if (!acc[curr]){
            acc[curr] = {word: curr, count: 1}
        }else{
            acc[curr].count += 1
        }
        return acc
    },[])).sort((a,b)=> b.count - a.count).filter((v,i,a)=> i < (limit ? limit : a.length)).map(el=> el.word).toString()
    
    
}
const limit = 5
console.log(`most ${limit} Frequent Words:`, mostFrequentWords(limit))