const prompt = require("prompt-sync")();

const weeklySalary = prompt("Please enter weekly salary ");
const netSalary = weeklySalary / 40;
const grossSalary = (weeklySalary - weeklySalary * 0.25) / 40;

console.log(`Net Salary: $${netSalary}/hr, Gross Salary: $${grossSalary}/hr`);
