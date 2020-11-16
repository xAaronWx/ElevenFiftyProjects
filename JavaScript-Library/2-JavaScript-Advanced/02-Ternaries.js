// This is an elegant way to write if/else statements
let x = 6;

x > 0 ? console.log("x is positive") : console.log("x is negative");

// same as below. Top is one line, bottom is 5 lines

if (x > 0) {
  console.log("x is positive");
} else {
  console.log("x is negative");
}

let greeting = "Salutations!";

// This is the normal method
if (greeting.length > 10) {
  console.log("That is a long greeting.");
} else if (greeting.length == 10) {
  console.log("Your greeting is exactly 10 characters.");
} else {
  console.log("What a normal greeting.");
}

// Ths is the short hand
greeting.length > 10
  ? console.log("That is a long greeting.")
  : greeting.length == 10
  ? console.log("Your greeting is exactly 10 characters.")
  : console.log("What a normal greeting.");
