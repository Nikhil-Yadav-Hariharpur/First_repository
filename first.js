const Account_holder="nikhil";
console.log(Account_holder);
let bank_balance=748478;
console.log(bank_balance);

const name="Rohit";
console.log(name);
function payment(Deposite){
    bank_balance+=Deposite;
    return bank_balance;
}
function withdraw(withdraw){
    bank_balance-=withdraw;
    return bank_balance;
}
