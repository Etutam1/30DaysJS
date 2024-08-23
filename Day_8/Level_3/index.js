// 1.Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and
// it has totalIncome, totalExpense, accountInfo,addIncome, addExpense
// and accountBalance methods. Incomes is a set of incomes and its description
// and expenses is a set of incomes and its description.
require("module-alias/register");
const { users, products } = require("@arrays/users_products");
const prompt = require("prompt-sync")();
const moment = require("moment");
const { title } = require("case");

const personalAccount = {
  firstName: "Matias",
  lastName: "Pereira",
  incomes: [],
  expenses: [],
  totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  },
  accountInfo() {
    return `Account holder: ${this.firstName} ${
      this.lastName
    }\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
  },
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

// personalAccount.addIncome('Salary', 3000);
// personalAccount.addIncome('Freelance work', 1500);
// personalAccount.addExpense('Rent', 1000);
// personalAccount.addExpense('Groceries', 300);

// console.table(personalAccount.incomes);
// console.log(personalAccount.incomes);

// 2.Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

function signUp() {
  const emailReg = new RegExp(
    "^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$",
    "i"
  );
  let email = "";
  do {
    email = prompt("Enter your email adress: ");
  } while (email.trim().length == 0 || !emailReg.test(email));

  if (checkExistentUser(email)) {
    let answer = prompt("Do you want to sign in?(Y/N): ");
    if (answer.toLowerCase() == "y" || answer.toLowerCase() == "yes") {
      return signIn(email);
    } else {
      console.warn("Bye!");
    }
  } else {
    return createNewUser(email);
  }
}

function checkExistentUser(email) {
  for (let u of users) {
    if (u.email == email) {
      console.warn("You already have an account");
      return true;
    }
  }
  return false;
}

function createNewUser(email) {
  const newUser = {};
  newUser.email = email;

  do {
    newUser.username = prompt("Enter your username: ");
  } while (newUser.username.trim().length == 0);

  do {
    newUser.password = prompt("Enter your password: ");
  } while (isNaN(newUser.password) || newUser.password.trim().length < 6);
  newUser._id = generateRandomId();
  newUser.createdAt = moment.utc().format("DD-MM-YYYY HH:mm A");
  newUser.isLoggedIn = true;
  console.warn(` You have created your account successfully`);

  return newUser;
}

function signIn(email) {
  let pass = "";
  checkUserPass(email);
  do {
    pass = prompt("Enter your password: ");
    if (!checkUserPass(email, pass)) console.warn("Wrong password");
  } while ((pass && pass.trim().length == 0) || !checkUserPass(email, pass));

  let loggedUser = getUser(email);
  loggedUser.isLoggedIn = true;
  return loggedUser;
}

function checkUserPass(email, pass) {
  for (const u of users) {
    if (u.email == email) {
      return u.password == pass;
    }
  }
  return false;
}

function getUser(email) {
  for (const u of users) {
    if (u.email == email) return u;
  }
}

function generateRandomId() {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let id = "";
  do {
    id = id.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
  } while (id.length < 6);

  return id;
}

function showMenu(userId) {
    console.log('\n\t\tMENU\n\t\t------');
    
  console.log("1.Rate product");
  console.log("2.Like product");
  if (checkLikes(userId)) {
    console.log("3.Unlike Product");
  }
  console.log("4.Check product average rating");
  console.log("5.Exit");
}

function showProducts() {
  for (const p of products) {
    console.log("\n\t\tPRODUCT\n\t\t------");
    for (const [key, value] of Object.entries(p)) {
      if (key != "_id") {
        console.log(`\t${title(key)}: `);
      }

      switch (key) {
        case "name":
          console.log(`\t\t ${value}`);
          break;
        case "description":
          console.log(`\t\t ${value}`);
          break;
        case "price":
          console.log(`\t\t ${value}`);
          break;
        case "ratings":
          if (value.length > 0) {
            for (const i of value) {
              console.log(`\t\t-${getUsername(i.userId)}: ${i.rate}`);
            }
          } else {
            console.log("\t\tThere is no ratings");
          }
          break;
        case "likes":
          if (value.length > 0) {
            for (const userId of value) {
              console.log(`\t\t-${getUsername(userId)}`);
            }
          } else {
            console.log("\t\tThere is no likes");
          }
          break;
      }
    }
  }
}

function getUsername(userId) {
  for (const u of users) {
    if (u._id == userId) {
      return u.username;
    }
  }
}

function likeProduct(uId, product){
    if(product){
        if (!product.likes.includes(uId)) {
            product.likes.push(uId)
        }else{
            console.log('You already liked this product')
        } 
    }
}

function unlikeProduct(uId, product){
    if (product) {
        product.likes = product.likes.filter(id=>id !=uId)
    }
    console.log('Unlike done')
}

function checkLikes(userId) {
  for (const p of products) {
    if (p.likes.includes(userId)) {
      return true;
    }
  }
  return false;
}

function rateProduct(uId, product) {
  let uRate = "";
  do {
    uRate = prompt("Enter the rate: ");
  } while (uRate.length == 0 || isNaN(Number(uRate)));

  if (product) {
    product.ratings.push({ userId: uId, rate: Number(uRate) });
  }
}

function selectProduct() {
  let productName = "";
  do {
    productName = prompt("Enter the product name:");
  } while (productName.length == 0 || !getProductByName(productName));
  return productName;
}

function getProductByName(name) {
  return products.filter((p) => p.name == name)[0];
}

function productAverageRating(product) {
  let avg =
    product.ratings.reduce((acc, r) => acc + r.rate, 0) /
    product.ratings.length;
  console.log(
    `The ${product.description} has an average rating of ${avg.toFixed(
      2
    )} points`
  );
}

function selectOption(uId) {
  let opt = null;
  do {
    opt = Number(prompt("Select your option: "));
  } while (isNaN(opt) || (opt < 0 && opt > 5));

  if (opt && opt != 5) {
    let product = getProductByName(selectProduct());
    switch (opt) {
      case 1:
        rateProduct(uId, product);
        showProducts()
        break;
      case 2:
        likeProduct(uId, product)
        showProducts()
        break;
      case 3:
        if(checkLikes(uId)){
            unlikeProduct(uId, product)
            showProducts()
        }else{
            console.log('You dont have registered likes');     
        }
        break;
      case 4:
        productAverageRating(product);
        break;
    }
  }
  return opt
}

function main() {
  let u = signUp();

  if (u) {
    console.warn(`Welcome ${getUsername(u._id)}!`);
    showProducts();
    let opt = null
    do{
       showMenu(u.id);
       opt = selectOption(u._id);   
    }while(opt != 5)
   
    console.log('Bye!');
    
  }
}

main();


