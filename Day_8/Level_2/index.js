require('module-alias/register');
const users = require('@arrays/users')
const countries = require('@arrays/countries_data')

// 1.Find the person who has many skills in the users object.
function getSkillestUser(users){

    let sortedUsers = Object.entries(users).sort(([, a], [, b]) => b.skills.length - a.skills.length);
    let mostSkilledUser = sortedUsers[0]
    console.log(`The most skilled user is ${mostSkilledUser[0]}, having knowledge in ${mostSkilledUser[1].skills.length} skills`);

}

// getSkillestUser(users)

// 2.Count logged in users, count users having greater than equal to 50 points from the following object.

function countUsers(users){

    let usersLogged = Object.values(users).filter(u=>u.isLoggedIn);
    let moreThan50ptsUsers = Object.values(users).filter(u=>u.points >= 50);

    return {usersLogged, moreThan50ptsUsers}
}

// const{usersLogged, moreThan50ptsUsers} = countUsers(users)

// console.log(`There are ${usersLogged.length} logged users and ${moreThan50ptsUsers.length} having more or 50 points`)


// 3.Find people who are MERN stack developer from the users object

function getMernUsers(users){

   let mernUsers = Object.values(users).filter( u =>{

    if(u.skills.includes('MongoDB') &&u.skills.includes('Express') &&u.skills.includes('React') &&u.skills.includes('Node') )
        return u;
   })

   return mernUsers.length > 0 ? mernUsers : null
}

// console.log('MERN users: ', getMernUsers(users))

// 4.Set your name in the users object without modifying the original users object

function newUser(users){
    users['Matias'] = {
        email: 'matias@matias.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 28,
    isLoggedIn: true,
    points: 69
    }
}

// newUser(users);
// console.log(users)

// 5.Get all keys or properties of users object

function getAllKeys(users){
    let userNames = []

    for (const username in users) {
       userNames.push(username)
    }
    return userNames;
}

// console.log(getAllKeys(users))

// 6.Get all the values of users object
function getAllValues(users){
    return Object.values(users)
}

// console.log(getAllValues(users))

// 7.Use the countries object to print a country name, capital, populations and languages.

function printCountriesProperties(countries){
    let cont = 0
    countries.forEach(c => {
        console.log(`${++cont}.`,c.name, c.capital, c.population )
    });
}

// printCountriesProperties(countries)
