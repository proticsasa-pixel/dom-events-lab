// PSEUDOCODE
// multiply, substract, add, divide numbers
// 2 numbers we captured and saved are +, - * \
// display the results
// display on screen
// clear screen before new value
// display numbers
// calculation of the operation
// clear the vars when done
// when operator is clicked, the first value should be saved to use later
// when op is clicked, save the next number in another var
// C button should clear, the memory/state/variables of the app
// reset the state of the app, go back to what it was before an op
// display should show 0

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables/state --------------------------------*/
// Calc var
// display car
// number
// result
// number 2 // ?
// operator
let display = "0";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
/*------------------------ Cached Element References ------------------------*/
// buttonElements
// display
// operators
// equal
// clear

const buttonElements = document.querySelectorAll(".button");
const displayElement = document.querySelector(".display");
const operatorElements = document.querySelectorAll(".operator");
const equalElement = document.querySelector(".equals");
const clearElement = document.querySelector(".clear");
/*----------------------------- Event Listeners -----------------------------*/
// any of these could have event listeners
buttonElements.forEach((buttonEl) => {
  buttonEl.addEventListener("click", handleNumber);
});
operatorElements.forEach((operatorEl) => {
  operatorEl.addEventListener("click", handleOperator);
});

// displayElement.addEventListener("click", () => {});
equalElement.addEventListener("click", handleCalculation);
clearElement.addEventListener("click", handleClear);
/*-------------------------------- Functions --------------------------------*/
// handleClear
// handleCalculation
// handlenOperator
// handleNumber
// handleDisplay

function handleNumber(event) {
  if (!event.target.classList.contains("number")) return;
  if (firstNumber !== "" && secondNumber !== "" && result !== "") return;

  if (firstNumber !== "" && operator !== "") {
    const number = event.target.textContent;
    secondNumber = secondNumber + number;
    displayElement.textContent = displayElement.textContent + number;
  } else {
    const number = event.target.textContent;
    firstNumber = firstNumber + number;
    displayElement.textContent = firstNumber;
  }
}

function handleOperator(event) {
  if (!event.target.classList.contains("operator")) return;
  if (operator !== "") return;

  operator = event.target.textContent;
  displayElement.textContent = displayElement.textContent + ` ${operator} `;
}

function handleClear(event) {
  console.dir(event.target);
  if (!event.target.classList.contains("clear")) return;
  console.dir(event.target);

  displayElement.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
}
function handleCalculation(event) {
  if (!event.target.classList.contains("equals")) return;
  if (result !== "") return;

  if (operator === "+") result = Number(firstNumber) + Number(secondNumber);
  else if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  } else if (operator === "*") {
    result = Number(firstNumber) * Number(secondNumber);
  } else if (operator === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  }

  displayElement.textContent = `${displayElement.textContent} = ${result}`;
}