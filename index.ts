#! usr/bin/env node

import inquirer from "inquirer";

const Currency: any = {
  USD: 1,
  PKR: 280,
  GPB: 0.76,
  EUR: 0.96,
  INR: 74.56,
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices: ["USD", "PKR", "GBP", "EUR", "INR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "PKR", "GBP", "EUR", "INR"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromAmount = Currency[userAnswer.from];
let toAmount = Currency[userAnswer.to];

let amount = userAnswer.amount;

let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
