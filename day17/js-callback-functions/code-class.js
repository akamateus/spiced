function showLowerCase(text) {
  const result = text.toLowerCase();
  console.log(result);
}

function showUpperCase(text) {
  const result = text.toUpperCase();
  console.log(result);
}

// Higher order function
function showText(transformFunction) {
  transformFunction("hello EVERYONE, enjoy THIS DAy");
}

showText(showUpperCase);
showText(showLowerCase);
showText((text) => {
  console.log(text + text);
});

// Will throw an exception:
// showText(55);
