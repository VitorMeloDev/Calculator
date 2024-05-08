// Get elements
const display = document.querySelector("#displayInput");
const buttonEqual = document.querySelector(".equal");
const buttonDot = document.querySelector(".dot");
const buttonsNum = document.querySelectorAll(".num");
const buttonsOperators = document.querySelectorAll(".operator");

let currentOperation = "";
let operator = null;
let previousValue = "";
let calculating = false;

// Functions
function updateDisplay(){
    display.value = currentOperation;
}

function inputNumber(event){
    if(calculating){
        currentOperation = event.target.textContent;
        calculating = false;
    }else{
        currentOperation += event.target.textContent;
    }
    updateDisplay();
}

function dotInput(){
    if(currentOperation.indexOf(".") === -1){
        currentOperation += ".";
        updateDisplay();
    }
}

function operatorInput(event){
    if(currentOperation !== ""){
        if(!calculating){
            if(operator !== null){
                calculate();
            }
            previousValue = currentOperation;
            currentOperation = "";
        }
        operator = event.target.textContent;
    }
}

function calculate(){

    let result;
    const value1 = parseFloat(currentOperation);
    const value2 = parseFloat(previousValue);

    switch (operator) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
    }

    currentOperation = String(result);
    previousValue = currentOperation;
    calculating = true;
    updateDisplay();
}

// Eventos
buttonDot.addEventListener("click", dotInput);
buttonsNum.forEach((button) => button.addEventListener("click", inputNumber));
buttonsOperators.forEach((button) => button.addEventListener("click", operatorInput));
buttonEqual.addEventListener("click", calculate);
