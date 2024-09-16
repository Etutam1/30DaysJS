// 1.Create a class called PersonAccount. It has firstname, lastname, incomes, 
// expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, 
// addExpense and accountBalance methods. Incomes is a set of incomes and its
// description and expenses is also a set of expenses and its description.

class PersonAccount {

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = new Set()
        this.expenses = new Set()
    }

    totalIncome(){
        return Array.from(this.incomes).reduce((acc,curr)=>{
            return acc + curr.value
        },0)
    }

    totalExpense(){
        return Array.from(this.expenses).reduce((acc,curr)=>{
            return acc + curr.value
        },0)
    }

    accountInfo(){
        console.log(`Name:${this.firstName} \n
            Last Name: ${this.lastName}
            Balance: ${this.acountBalance()}`)
    }
    
    addIncome(inc){
        this.incomes.add(inc)
    }

    addExpense(exp){
        this.expenses.add(exp)
    }

    acountBalance(){
        return this.totalIncome() - this.totalExpense()
    }
}

const acc = new PersonAccount('Matias', 'Pereira Gutierrez')

acc.addExpense({desc:'Viaje', value:500})
acc.addExpense({desc:'Piso', value:350})
acc.addExpense({desc:'Super', value:150})

acc.addIncome({desc:'Saldo', value:1100})

acc.accountInfo()