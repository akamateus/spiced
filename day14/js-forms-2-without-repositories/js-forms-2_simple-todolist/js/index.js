console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headline = document.getElementById("headline");
const task = document.getElementById("task");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Headline: ", headline.value);
  console.log(`Task: ${task.value}`);
  e.target.reset();
  e.target.elements.headline.focus();
});
