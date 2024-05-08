#!/usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.47,
    PKR: 280,
};
let user_Answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = Currency[user_Answer.from];
let toAmount = Currency[user_Answer.to];
let amount = user_Answer.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
