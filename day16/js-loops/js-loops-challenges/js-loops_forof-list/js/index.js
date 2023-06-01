console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (const languages of programmingLanguages) {
  console.log(languages);

  const li = document.createElement("li");
  ol.appendChild(li);

  li.append(languages);
}
// --^-- write/change code here --S^--
