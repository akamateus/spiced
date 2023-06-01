console.clear();

console.log("hello");

/* --------------------------------------- */
console.log("-----------------------------");
console.log("1. while");

/* 1. The while loop */
let str = "a";
while (str.length < 8) {
  // statement
  console.log(str);
  str = str + "a";
}
let counter = 1;
while (counter < 7) {
  console.log(counter);
  counter++;
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("2. for");

/* 2. The for loop */
const beatles = ["john", "paul", "george", "ringo"];

// log the second element of the array
for (let i = 0; i < beatles.length; i++) {
  console.log(beatles[i][0]);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("3.for...in");

/* 3. The for..in loop */
// used for objects
const user = {
  name: "Alex",
  age: 28,
  email: "alex@mail.com",
};
for (let key in user) {
  console.log(user[key]);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("4. for...of");

/* 4. The for..of loop */
// used for arrays
const fruits = ["apple", "banana", "melon"];

for (let fruit of fruits) {
  console.log(fruit);
}
