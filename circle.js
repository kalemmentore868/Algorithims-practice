const prompt = require("prompt-sync")();
const PI = 3.14;

const diameter = parseInt(prompt("Please enter diameter "));

const area = PI * (diameter / 2) ** 2;
const circumference = PI * diameter;

console.log(`Area: ${area}, Circumference: ${circumference}`);
