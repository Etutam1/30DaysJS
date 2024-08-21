// 1.Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties and 
// it has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
// and accountBalance methods. Incomes is a set of incomes and its description 
// and expenses is a set of incomes and its description.


const personalAccount = {

    firstName: 'Matias',
    lastName: 'Pereira',
    incomes: [],
    expenses: [],
    totalIncome(){
        return this.incomes.reduce((acc,income) => acc + income.amount, 0)
    },
    totalExpense(){
        return this.expenses.reduce((acc,expense) => acc + expense.amount, 0)
    },
    accountInfo(){
        return `Account holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
    },
    addIncome(description, amount){
        this.incomes.push({description,amount})
    },
    addExpense(description, amount){
        this.expenses.push({description,amount})
    },
    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }

}

// personalAccount.addIncome('Salary', 3000);
// personalAccount.addIncome('Freelance work', 1500);
// personalAccount.addExpense('Rent', 1000);
// personalAccount.addExpense('Groceries', 300);

// console.table(personalAccount.incomes);
// console.log(personalAccount.incomes);


// 2.Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application