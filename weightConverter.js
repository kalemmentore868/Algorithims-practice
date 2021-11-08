const prompt = require("prompt-sync")();

const name = prompt("Please enter name ");
const weightInKgs = parseInt(prompt("Please enter weight in Kgs "));

const weightInLbs = weightInKgs * 2.2;

console.log(`${name}, your weight is ${weightInLbs}lbs`);
