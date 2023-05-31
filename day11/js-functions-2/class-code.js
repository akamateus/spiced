/*const addNumber = (a = a + 10);

function addNumber(a, b) {
  console.log(a + b);
}

console.log(addNumber(4, 5));
*/

console.log("_______________________________");

const user = {
  name: "Mateus",
};

function getUserName(userObj) {
  if (!userObj) {
    return "there is nothing";
  }
  return userObj.name;
}

const userName = getUserName();

// console.log(getUserName());

console.log();

(() => {
  var i = 0;
  console.log("hello");
})();
