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

    $("#select-account").append('<option value=\"' + newAccount.accountNickname + '\">' + newAccount.accountNickname + '</option>');

    $("#account-nickname").text(newAccount.accountNickname);
    $("#balance").text(newAccount.balance);

    $(".sign-up").hide();
    $("#user-portal").show();
    $(".account-details").show();

    $("#users-name").text(", " + newAccount.userName);

  });

  $("form#deposit-withdraw-form").submit(function(event) {
    event.preventDefault();
    var inputtedWithdrawAmount = parseInt($("input#input-withdraw").val());
    var inputtedDepositAmount = parseInt($("input#input-deposit").val());
    if (isNaN(inputtedWithdrawAmount)) {
      inputtedWithdrawAmount = 0;
    };

    if (isNaN(inputtedDepositAmount)) {
      inputtedDepositAmount = 0;
    };
    newAccount.withdrawal(inputtedWithdrawAmount)
    newAccount.deposit(inputtedDepositAmount)

    $("#balance").text('')
    $("#balance").text(newAccount.balance)
  });

  $(".entry").click(function() {
    $(".entry").hide();
    $("#mainsite").fadeIn("slow");
    $(".sign-up").fadeIn("slow");
  });

  $("#select-new-account").click(function() {
    $("#existing-account").hide()
    $("#new-account").slideDown("slow");
  });

  $("#select-existing-account").click(function() {
    $("#new-account").hide();
    $("#existing-account").slideDown("slow");
  });

  $("#return-home").click(function(){
    $(".account-details").hide();
    $("#user-portal").hide();
    $("#new-account").hide();
    $("#existing-account").hide()
    $("#users-name").text("");
    $("#mainsite").show();
    $(".header").fadeIn("slow");
    $(".sign-up").fadeIn("slow");
  });
});
