console.log("We are in Numbers JS");

let myNumber = 20;
let otherNumber = "70";
let result;

console.log("----------------------------");
console.log("Init values");
console.log("myNumber: ", myNumber);
console.log("otherNumber: ", otherNumber);
console.log("result: ", result);

console.log("Type of", otherNumber, "is: ", typeof otherNumber);
console.log("Type of", myNumber, "is: ", typeof myNumber);

// Add
result = myNumber + parseInt(otherNumber);
// result = myNumber + otherNumber;

console.log("Add result: ", result);

// Subtract
result = myNumber - otherNumber;
console.log("Subtract result: ", result);
