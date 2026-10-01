/*
Addition, Subtraction, Multiplication and Division Functions
An array containing history of all calculations
Every calculation is an object with keys: operator, operands and result
*/
//To enable input from terminal
const prompt = require("prompt-sync")()

//All Functions are defined here
function validNumberChecker(userInput){
    userInput = Number(userInput)
    if (Number.isNaN(userInput)){
        return false
    }
    return true
}

function addition(firstOperand, secondOperand){
    return firstOperand + secondOperand
}

function subtraction(firstOperand, secondOperand){
    return firstOperand - secondOperand
}

function multiplication(firstOperand, secondOperand){
    return firstOperand * secondOperand
}

function division(firstOperand, secondOperand){
    if (secondOperand == 0){
        //Dividing by zero error handling
        console.log("Error. Can't divide by ZERO!")
        return "Error"
    }
    return firstOperand / secondOperand
}

function pushToHistory(operator, firstOperand, secondOperand, result){
    const operands = [firstOperand, secondOperand]
    const calculation = {operator: operator, operands: operands, result: result}
    calculatorHistory.push(calculation)
}

function showHistory(){
    if (calculatorHistory.length === 0){
        console.log("No History Yet. Try again later.")
    }else{
        console.log("Here is your Calculator History!")
        calculatorHistory.forEach(printCalculation)
        function printCalculation(calculation){
            const c = calculation
            console.log(`${c.operands[0]} ${c.operator} ${c.operands[1]} = ${c.result}`)
        }
    }
}

const calculatorHistory = []

console.log("Hi. Welcome to the Calculatooooooor!")

while (true){
    const operator = prompt(`\nWhat's your operator? + or - or * or /. Enter 'H' for history or 'Q' to quit: `).toUpperCase()
    //Invalid operator input handling
    switch (operator) {
        case 'H':
            showHistory()
            continue
            break;
    
        case 'Q':
            console.log(`Thank you for using Calculatooooooor.\nGoodbye.`)
            process.exit(0)
            break;
    
        default:
            if (!['+', '-', '*', '/'].includes(operator)){
                console.log("Invalid operand entered. Try again!")
                continue
            }
            break;
    }

    let firstOperand = prompt("Please input the first number: ")
    let secondOperand = prompt("Please input the second number: ")
    
    let result
    
    //Invalid operands input handling
    if (!validNumberChecker(firstOperand)){        
        console.log(`"${firstOperand}" is not a valid number! Start again`)
        continue
    }
    if (!validNumberChecker(secondOperand)){
        console.log(`"${secondOperand}" is not a valid number! Start again`)
        continue
    }
    

    switch (operator) {
        case '+':
            result = addition(firstOperand, secondOperand)
            break;
    
        case '-':
            result = subtraction(firstOperand, secondOperand)
            break;
    
        case '*':
            result = multiplication(firstOperand, secondOperand)
            break;
    
        case '/':
            result = division(firstOperand, secondOperand)
            if (result === "Error"){
                continue
            }
            break;    
        default:
            break;
    }

    console.log(`The result is: ${result}`)
    pushToHistory(operator, firstOperand, secondOperand, result)
}