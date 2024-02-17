const display = document.querySelector(".display");
let calculationCompleted = false;

const displayValue = (input) => {
  if (calculationCompleted == true) {
    clearDisplay();
    calculationCompleted = false;
  }
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
    calculationCompleted = true;
  } catch (error) {
    display.value = "Error";
  }
};
