const prompt = require("prompt-sync")();

const length = prompt("Please enter Length ");
const width = prompt("Please enter Width ");

const area = length * width;
const perimeter = 2 * length + 2 * width;

console.log(`Area: ${area}, Perimeter: ${perimeter}`);
