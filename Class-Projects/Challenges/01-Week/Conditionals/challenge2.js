/*
CHALLENGE 2
Types Challenge


BRONZE


Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.


--------------------------------------------------------------------------

SILVER


Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let object = {
  name: "Monkey Man",
  age: 140,
  active: false,
  details: ["Giant", "Monkey"],
  undefined: undefined,
};

// console.log(object);

let value = typeof object.undefined;

if (value === "string") {
  console.log("The value is a string");
} else if (value === "number") {
  console.log("The value is a number");
} else if (value === "boolean") {
  console.log("The value is a boolean");
} else if (value === "object") {
  console.log("The value is an object");
} else {
  console.log("What are you?");
}

// if ((object.age = Number)) {
//   console.log("number");
// } else {
//   console.log("Nope");
// }

// if ((object.active = Boolean)) {
//   console.log("boolean");
// } else {
//   console.log("Nope");
// }

// if ((object.details = Object)) {
//   console.log("object");
// } else {
//   console.log("Nope");
// }

// if (object.gender != Number) {
//   console.log("What are you?");
// } else {
//   console.log("Nope");
// }
