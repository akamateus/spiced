/* Destructuring Assignment --- Objects */
const tree = {
  name: "red maple",
  age: 1500,
  scientificName: "Acer rubrum",
};

// const name = tree.name
// const name = tree["name"];
const { name: colloquialName, age, scientificName } = tree;
// console.log("colloquialName, age, scientificName: ", colloquialName, age, scientificName);

const logTree = (
  { name: colloquialName, age },
  message = "What a beautiful tree"
) => {
  console.log(`The ${colloquialName} tree is ${age} years. ${message}`);
};
// const message = "It has a beautiful crown";
// logTree(tree);

// function add(a, b) {
//     if (typeof b == "undefined") {
//         b = 0;
//     }
//     return a + b;
// }
// function add(a, b = 0) {
//     return a + b;
// }
// console.log(add(5));

const { name, ...rest } = tree;
console.log("name: ", name);
console.log("rest: ", rest);

const oldTree = { ...tree, age: 2000, height: 40 };
console.log("oldTree: ", oldTree);

/* Destructuring Assignment --- Arrays */
const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale"];
const [a, , c, d, e] = animals;
console.log(a, c, d, e);

// const [a, b, ...otherAnimals] = animals;
// console.log(a, b);
// console.log("otherAnimals", otherAnimals);

// const newAnimal = ["Turtle", "Hedgehog"];
const newAnimal = "Turtle";
const allAnimals = [...animals, ...newAnimal];
console.log("allAnimals: ", allAnimals);

let arr = [10, 20, 30];
// let a = arr[0];
let [, muffin, cupcake] = arr;
console.log(muffin, cupcake);

const newArr = [1, 2, 3, ...arr, 40, 50];
console.log(newArr);

const [, ...otherNums] = arr;
console.log(otherNums);
