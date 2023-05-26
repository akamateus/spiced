console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const dark = document.querySelector('[data-js="dark-mode-button"]');
const light = document.querySelector('[data-js="light-mode-button"]');
const toggle = document.querySelector('[data-js="toggle-button"]');

dark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

light.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
