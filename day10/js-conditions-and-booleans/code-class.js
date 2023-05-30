let value;
value = false;
value = true;
value = 0;
value = 1;
value = -30;
value = "";
value = "Hello";
value = null;

if (value) {
  console.log("Value is Truthy. \t Value: ", value);
} else {
  console.log("Value is Falsy. \t Value: ", value);
}

const max = 10;
// let number = Math.random() * 4;
// number = Math.floor(number);
let number = Math.floor(Math.random() * 10);
console.log("number: ", number);

if (number > 5) {
  number--;
} else {
  number++;
}

console.log("After if Number is: ", number);

// Ternary operator
// condition ? expressionIfTrue : expressionIfFalse
number > 5 ? number-- : number++;

const animal = "Monkey";
let emoji;
if (animal === "Dog") {
  emoji = "🐶";
} else if (animal === "Tiger") {
  emoji = "🐯";
} else if (animal === "Elephant") {
  emoji = "🐘";
} else if (animal === "Cat") {
  emoji = "🐱";
} else if (animal === "Monkey") {
  emoji = "🐒";
} else {
  emoji = "❓";
}

console.log("Animal is ", animal, "\t Emoji is: ", emoji);

// Switch statement
switch (animal) {
  case "Dog":
    emoji = "🐶";
    break;
  case "Tiger":
    emoji = "🐯";
    break;
  case "Elephant":
    emoji = "🐘";
    break;
  case "Cat":
    emoji = "🐱";
    break;
  case "Monkey":
    emoji = "🐒";
    break;
  default:
    emoji = "❓";
    break;
}

// -------------------------------------------------------------------------

let data;
data = "hello";
switch (typeof data) {
  case "object":
    // since null, array and object are alltogether
    // considered objects we need to do some more checks within the object case.
    if (data === null) {
      console.log("this is null");
    } else if (Array.isArray(data)) {
      console.log("this is an array");
    } else {
      console.log("this is an object");
    }
    break;
  case "string":
    console.log("this is a string");
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("this is a NOT a number");
    } else {
      console.log("this is a number");
    }
    break;
  case "boolean":
    console.log("this is a boolean");
    break;
  case "bigint":
    console.log("this is a bigint");
    break;
  case "function":
    console.log("this is a function");
    break;
  case "undefined":
    console.log("this is a function");
    break;
  default:
    console.log("no idea what this is");
}
