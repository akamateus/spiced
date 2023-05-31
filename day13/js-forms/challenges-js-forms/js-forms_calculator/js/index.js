console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numA = Number(event.target.elements.numberA.value);
  const numB = Number(event.target.elements.numberB.value);
  const formElements = event.target.elements;
  let result;

  // --v-- write your code here --v--
  if (event.target.operator.value == "addition") {
    if (formElements.addition.value) {
      result = add(numA, numB);
    }
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
