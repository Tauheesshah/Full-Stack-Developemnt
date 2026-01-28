let amounts= process.argv[2];

class BankAccount{
    #balance;
    #pin;

    constructor(accountHolder){
        this.accountHolder=accountHolder;
        this.#balance=0;
        this.#pin='1234'
    }

    //public method visible to users
    deposite(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited ${amount}`)
        }else{
            console.log('Invalid Deposite ammount')
        }
    }

    //public method visible to users
    withdraw(amount){
        if(amount <= this.#balance){
            this.#balance -= amount;
            console.log(`withdrawn ${amount}`)
        }else{
            console.log('Insufficient balance')
        }
    }

    //public method to show limited details

    checkBalance(userPin){
        if(userPin == this.#pin){
            return `Curent balance :${this.#balance}`
        }else{
            console.log(`pin galat hai ${userPin}`)
        }
    }
}

const account = new BankAccount('Tauheed')
account.deposite(amounts);
account.withdraw(400)
let checkBal=account.checkBalance(1234)
console.log(checkBal)