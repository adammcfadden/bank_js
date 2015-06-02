describe('BankAccount', function() {
  var testBankAccount = new BankAccount (500, "Erin", "Party Funds")
  it("will create a BankAccount with the given specifications", function(){
    expect(testBankAccount.balance).to.equal(500);
    expect(testBankAccount.userName).to.equal("Erin");
    expect(testBankAccount.accountNickname).to.equal("Party Funds");
  });

  it("will let the user withdrawal money from their account", function() {
    expect(testBankAccount.withdrawal(100)).to.equal(400);
    expect(testBankAccount.balance).to.equal(400);
  });

  it("will let the user deposit money into their account", function() {
    testBankAccount = new BankAccount (500, "Erin", "Party Funds");
    expect(testBankAccount.deposit(100)).to.equal(600);
    expect(testBankAccount.balance).to.equal(600);
  });

  it("will let the user change their accountNickname", function() {
    expect(testBankAcount.changeNickname("Climbing Gear Fund")).to.equal("Climbing Gear Fund");
  });
});
