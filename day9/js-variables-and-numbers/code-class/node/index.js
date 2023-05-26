//This was use before 2015
var oldUse = "Try not to use";

//We use this from 2015
let newVariableChange = "I can change";
const myValueWillNotChange = "You are stuck with me!";

console.log("My oldUse: ", oldUse);
console.log("newVariableChange: ", newVariableChange);
console.log("myValueWillNotChange: ", myValueWillNotChange);

newVariableChange = 8;
// This give me and error.
// myValueWillNotChange = 'I am trying';

console.log("--------------------------");
console.log("After trying to change values");
console.log("newVariableChange: ", newVariableChange);
console.log("myValueWillNotChange: ", myValueWillNotChange);
console.log("--------------------------");

/* --------------------------------
            DATA TYPES
----------------------------------*/

console.log("Data Types");

//boolean.
const myBoolean = true;
console.log("My Boolean: ", myBoolean);

//String
const myString = "This is a string";
console.log("Mt String: ", myString);

//Number
const myNumber = 20;
console.log("My Number: ", myNumber);

//BigInt
const myBigNumber = 3000n;
console.log("My BigInt: ", myBigNumber);

// null
const myNull = null;
console.log("My null: ", myNull);

//Array
const myArray = ["Element 1", 2, "Element 3", 4, false];
console.log("My Array: ", myArray);

// Object
const myObject = {
  cohortName: "Celery",
  amountStudent: 18,
  knowJs: true,
};
console.log("My Object: ", myObject);

//Undefine
let myUndefine;
console.log("My undefine: ", myUndefine);
