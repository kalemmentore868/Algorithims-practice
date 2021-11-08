const prompt = require("prompt-sync")();

const loanAmount = parseInt(prompt("Please enter Loan Amount "));
const annualInterestRate = parseInt(
  prompt("Please enter Annual Interest Rate % ")
);
const loanTerm = parseInt(prompt("Please enter Loan Term(years) "));
// const monthlyPayments = prompt("Please enter Loan Amount ");

const numberOfPayments = loanTerm * 12;
const monthlyInterest = annualInterestRate / 100 / 12;
const sum = monthlyInterest + 1;
console.log(sum);
const sumPower = Math.pow(sum, -numberOfPayments);
console.log(sumPower);
const toDivide = 1 - sumPower;
const monthlyInterestOnLoan = monthlyInterest * loanAmount;
const monthlyInstallment = monthlyInterestOnLoan / toDivide;

console.log(`Your monthly installment is $${monthlyInstallment.toFixed(2)}`);
