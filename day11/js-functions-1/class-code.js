// global var
// var name

function sayHello() {
  // scoped var
  const name = "mateus";
  console.log("Hello " + name + ", sua grande gostosa");
}

sayHello();

const name = "mateus";
console.log(name);

console.log("______________________________________________________________");

function sayHello(name) {
  console.log("hello " + name);
}

sayHello("mateus");

console.log("______________________________________________________________");

function sayHello(name, surname) {
  console.log("hello " + name + " " + surname);
}

sayHello("mateus");

console.log("______________________________________________________________");

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

const sumNum = sum(2, 5);

console.log("Log outside", sumNum);

console.log("______________________________________________________________");

const arr = [9, 10, 12];
const arr2 = ["marcel", "celery", "mateus", "alex"];

function returnLastElement(array) {
  //   console.log(array);
  return array[array.length - 1];
}

// returnLastElement(arr);

const value = returnLastElement(arr);
const value2 = returnLastElement(arr2);

console.log(value);
console.log(value2);
