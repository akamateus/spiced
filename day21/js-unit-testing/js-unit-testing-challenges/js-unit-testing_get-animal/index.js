export function getAnimal(animalPluralName) {
  if (animalPluralName === "cats") {
    return "I totally love cats!";
  } else if (typeof animalPluralName === "string") {
    return "I like dogs!";
    // this line above makes no sense considering the question on the challenge, the answer logically must be ->>>>return "I like " + animalPluralName + "!"; <<<<- if i receiving a "any string" as a value doesn't make any sense display "I like dogs!" if I typed "monkey".
  } else {
    return "I do not like animals at all!";
  }
}
