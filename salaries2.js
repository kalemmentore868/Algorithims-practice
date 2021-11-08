const prompt = require("prompt-sync")();

const weeklySalary = parseInt(prompt("Please enter salary "));

const monthlySales = parseInt(prompt("Please enter monthly sales "));

const netSalary = weeklySalary / 40;

const grossSalary = ((monthlySales * 0.2) / 4 + weeklySalary) / 40;

console.log(`Net Salary: ${netSalary}, Gross Salary: ${grossSalary}`);
