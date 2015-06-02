function BankAccount(userName, accountNickname, balance) {
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

$(document).ready(function() {
  $("form#new-account-form").submit(function(event) {
    event.preventDefault();

    var inputtedUserName = $("input#input-user-name").val();
    var inputtedAccountNickname = $("input#input-account-nickname").val();
    var inputtedBalance = parseInt($("input#input-balance").val());

    newAccount = new BankAccount(inputtedUserName, inputtedAccountNickname, inputtedBalance)

    $("#account-nickname").text(newAccount.accountNickname)
    $("#balance").text(newAccount.balance)

  });

  $("form#deposit-withdraw-form").submit(function(event) {
    event.preventDefault();
    var inputtedWithdrawAmount = parseInt($("input#input-withdraw").val());
    var inputtedDepositAmount = parseInt($("input#input-deposit").val());


    newAccount.withdrawal(inputtedWithdrawAmount)
    newAccount.deposit(inputtedDepositAmount)

    $("#balance").text('')
    $("#balance").text(newAccount.balance)
  });
});
