// calculator
const display = document.querySelector(".display");

const displayValue = (input) => {
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
