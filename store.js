const prompt = require("prompt-sync")();

const price = parseInt(prompt("Please enter item price "));
// const quantity = parseInt(prompt("Please enter item number "));
const discountPercent = parseInt(prompt("Please enter discount % "));
// const title = prompt("Please enter item title")

const discount = price * (discountPercent / 100);
const payment = price - discount;

console.log(`Price: ${price}, Discount: ${discount}, Payment: ${payment}`);
