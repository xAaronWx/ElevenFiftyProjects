// An array is a numerically indexed map of values. An array doesn't store one value, it stores a list of values. Arrays allow us to collect items like names, usernames, product names, prices, etc.

let rainbowColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Violet",
];
let raceWinners = [33, 72, 64];
let myFavoriteThings = ["Broccoli", 46074, "Zombie Cats From Mars"];

// Here are some key points:

// Create an array like a variable with any name.
// Use square brackets [] to collect/initialize values.
// We separate items with commas within the brackets.
// We can have a collection of one type  OR
// We can assign multiple types:

var mySecretSpyInfo = ["James Bond", 007, true]; // A string, a number (although the 00 is ignored), and a boolean

//0        1        2
var countryArray = ["USA", "Russia", "China"];

console.log(countryArray[2]); //what will print here?
console.log("Country Array:", countryArray[0]); //And here?

// Create four different arrays, each having four values. Print four of the values:
var gameConsoles = ["Xbox", "Playstation", "Stadia", "Switch"];

// first value of the first array. Remember 0 is the first index!
console.log(gameConsoles[0]);
// second value of the second array.
console.log(gameConsoles[1]);
// third value of the third array.
console.log(gameConsoles[2]);
// fourth value of the fourth array.
console.log(gameConsoles[3]);
