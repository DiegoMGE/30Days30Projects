const screen = document.getElementById("screen-output");
const buttons = document.querySelectorAll("button");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");

let calculation = [];
let result;

function calculate(button) {
  const value = button.textContent;

  if (value === "AC") {
    calculation = [];
    screen.textContent = ".";
  } else if (value === "=") {
    screen.textContent = eval(result);
  } else {
    calculation.push(value);
    result = calculation.join("");
    screen.textContent = result;
  }
}

// function appendNumber(number) {
//   if (number === "." && currentOperand.includes(".")) {
//     return (currentOperand = currentOperand.toString() + number.toString());
//   }
// }

// function updateScreen() {
//   screen.innerText;
// }

// function clear() {
//   screen = "";
// }

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate(button);
    updateScreen();
  });
});

// pendiente.forEach((button) => {
//   button.addEventListener("click", () => {
//     calculate(button);
//     updateScreen();
//   });
// });

// equalsButton.addEventListener("click", (button) => {
//   calculate();
//   updateScreen();
// });

// clearButton.addEventListener("click", (button) => {
//   clear();
//   updateScreen();
// });

// deleteButton.addEventListener("click", (button) => {
//   // delete();
//   updateScreen();
// });
