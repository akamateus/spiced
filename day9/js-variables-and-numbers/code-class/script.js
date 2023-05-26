console.log("I am here");

console.log("Let's do math");

const myNumber = 4;
let otherNumber = 20;
let result;
const subtractNumber = 2;

console.log("----------------------------");
console.log("Init values");
console.log("myNumber: ", myNumber);
console.log("otherNumber: ", otherNumber);
console.log("subtractNumber: ", subtractNumber);

console.log("result: ", result);

// ADD
result = myNumber + otherNumber;
console.log("The result of Adding", myNumber, "+", otherNumber, "is", result);

// Let add 1
otherNumber = otherNumber + 1;
console.log("otherNumber +1 :", otherNumber);

otherNumber++;
console.log("otherNumber ++ :", otherNumber);

otherNumber += 1;
console.log("otherNumber +=1 :", otherNumber);

//Subtract 1
otherNumber = otherNumber - 1;
console.log("otherNumber -1 :", otherNumber);

otherNumber--;
console.log("otherNumber -- :", otherNumber);

otherNumber -= 1;
console.log("otherNumber -=1 :", otherNumber);

//Subtract
otherNumber = otherNumber - subtractNumber;
console.log("otherNumber -", subtractNumber, " :", otherNumber);

otherNumber -= subtractNumber;
console.log("otherNumber -=", subtractNumber, " :", otherNumber);

// Multiply

otherNumber = myNumber * subtractNumber;
console.log("otherNumber *", subtractNumber, " :", otherNumber);

otherNumber *= subtractNumber;
console.log("otherNumber *=", subtractNumber, " :", otherNumber);

// Divided
otherNumber = 7;
result = otherNumber / subtractNumber;

// Remainder -> is useful to see if a number is even or odd
result = otherNumber % subtractNumber;

// Potentiates
result = subtractNumber ** subtractNumber;

console.log("----------------------------");
console.log("End Values");
console.log("myNumber: ", myNumber); //4
console.log("otherNumber: ", otherNumber);
console.log("subtractNumber: ", subtractNumber); //2
console.log("result: ", result);
