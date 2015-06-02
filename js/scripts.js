function BankAccount(balance, userName, accountNickname) {
  this.balance = balance;
  this.userName = userName;
  this.accountNickname = accountNickname;
}

BankAccount.prototype.withdrawal = function(amount) {
  return this.balance = this.balance - amount;
}

BankAccount.prototype.deposit = function(amount) {
  return this.balance = this.balance + amount;
}

BankAccount.prototype.changeNickname = function(newName) {
  return this.accountNickname = newName;
}
