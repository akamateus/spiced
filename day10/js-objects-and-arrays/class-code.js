const emptyObj = {};
const myObject = { name: "maria", age: 20, knowJS: true };
// console.log("myObject: ", myObject);
// console.log("emptyObj:", emptyObj);

myObject.favoriteFilms = ["holiday"];
// console.log("myObject with favFilm:", myObject);

myObject.name = "mateus";
// console.log("myObject new name:", myObject);

myObject["favoriteFilms"] = ["Best movie ever"];
// console.log("myObject with fav Film:", myObject);

delete myObject["favoriteFilms"];
// console.log("myObject clean:", myObject);

// myObject["favoriteFilms"].push("Holiday");
// console.log('myObject more films:', myObject);

myObject.address = {
  street: "Ritterstreet",
  house: 12,
  city: "Berlin",
  country: "Germany",
};
console.log("myObject with address:", myObject);
console.log("myObject city", myObject.address.city);
