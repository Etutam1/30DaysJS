const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// 1.Find a union b

const union = new Set([...a,...b])
console.log("union:", union)

// 2.Find a intersection b

const intersection = new Set(a.filter(n=>new Set(b).has(n)))
console.log("intersection:", intersection)

// 3.Find a with b

const diff = new Set(a.filter(n=> !(new Set(b).has(n))))
console.log("diff:", diff)

