class BankAccount {
  static bankName = "Bank Of Russia";

  constructor (account, sum = 0){
    this.accountNumber = account;
    this.balance = sum;
  }

  introduce() {
    console.log(`Ваш № аккаунта: ${this.accountNumber}, баланс: ${this.balance}`);
  }

  deposit = (amount) => {
    this.balance += amount;
    console.log(`${amount} пополнено номер счета ${this.accountNumber}. Новый баланс ${this.balance}`);
  }

  withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount;
    console.log(`${amount} снятие номер счета ${this.accountNumber}. Новый баланс ${this.balance}`);
    } else {
      console.log(`Нет денег для снятия суммы ${amount}`);

    }
    
  }
}

const account1 = new BankAccount("1234567890", 1000000);

account1.deposit(1000);
account1.withdraw(51000);
account1.withdraw(951000);
