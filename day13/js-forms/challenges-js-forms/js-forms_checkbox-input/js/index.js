console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (document.getElementById("tos").checked) {
    return alert("Form submitted");
  } else {
    return alert("The agreement checkbox needs to be checked.");
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

// console.log(event.target.elements.tos.checked);
// const tos = event.target.elements.tos.checked;
