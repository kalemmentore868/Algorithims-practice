const prompt = require("prompt-sync")();

const name = prompt("Please enter name ");
console.log(`Welcome to our show, ${name}`);

const age = parseInt(prompt("Please enter age "));
const lies = age - 5;
console.log(`Hmmm, you don't look a day over ${lies}`);

const address = prompt("Please enter address ");
console.log(`Oh I've heard ${address} is a lovely place`);
