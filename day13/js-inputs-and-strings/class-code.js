const greeting = "hello";
console.log("greeting,", greeting);

const firstName = "Khaled";
console.log("name,", firstName);

const text = greeting + " " + firstName;
console.log("text:", text);

/* Template literals*/
const text1 = `${greeting} ${firstName}`;
console.log("text1:", text1);

const firstLetter = "k";
console.log(
  `Does ${firstName} start with ${firstLetter}? Answer: ${firstName
    .toUpperCase()
    .startsWith(firstLetter.toUpperCase())}}`
);

const nameToUppercase = firstName.toUpperCase();
console.log(`My name is ${nameToUppercase}`);

let lastName = "Sultan";

if (lastName) {
  console.log("with lasName");
  console.log(`${greeting} ${firstName} ${lastName}`);
} else {
  console.log(`${greeting} ${firstName}`);
}

let textPrint = "";

lastName
? (textPrint = `${greeting} ${} ${}`)
: