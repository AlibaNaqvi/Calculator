#!/usr/bin/env node   
//SHABANG 
// Importing the 'inquirer' package for user input
import inquirer from "inquirer";
// Function to perform the calculator operation
const performOperation = async () => {
    // Prompting the user for input
    const input = await inquirer.prompt([
        {
            message: "Enter First Number",
            type: "number",
            name: "numberFirst"
        },
        {
            message: "Enter Second Number",
            type: "number",
            name: "numberSecond"
        },
        {
            message: "Select an operator",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtract", "Multiplication", "Division", "Percentage"]
        }
    ]);
    // Using switch-case to perform the appropriate operation based on user input
    switch (input.operator) {
        case "Addition":
            console.log("Addition of first number and second number is:", input.numberFirst + input.numberSecond);
            break;
        case "Subtract":
            console.log("Subtract of first number and second number is:", input.numberFirst - input.numberSecond);
            break;
        case "Multiplication":
            console.log("Multiplication of first number and second number is:", input.numberFirst * input.numberSecond);
            break;
        case "Division":
            console.log("Division of first number and second number is:", input.numberFirst / input.numberSecond);
            break;
        case "Percentage":
            console.log("Percentage of first number and second number is:", (input.numberFirst / input.numberSecond) * 100);
            break;
        default:
            console.log("Invalid operator selected.");
    }
};
// Calling the function to perform the operation
performOperation();
