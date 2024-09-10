const users = [
{
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

// 1.Iterate through the users array and get all the keys of the object using destructuring

function getUserKeys(){
    for (const user of users) {
        return Object.keys(user)
    }
}
// console.log(getUserKeys());

// 2.Find the persons who have less than two skills

function getSkillessUsers(limit){

  return users.filter(u=>{
      return u.skills.length < limit
    }).map(u=> u.name)
}

// console.log(getSkillessUsers(3));



