console.clear();

const form = document.querySelector('[data-js="form"]');

/*
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target);

  const formElements = event.target.elements;
  //   console.log(formElements.firstName);
  //   console.log(formElements.firstName.value);
  //   console.log(event.target);
});
*/
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});

console.log{
  `the age-badness-sum of ${event.target} ${}`

}

