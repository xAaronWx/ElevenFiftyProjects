console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

var tweet = "Lebron is king! Westbrook for president!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespauloconnor';

// You can use numbers in a string, but you won't be able to do math. Numbers in quotes are actually text.

let age = "21";
let years = "3";
console.log(age + years); // You won't get 24! What do you get?

//  Concatenation is adding two or more strings together. A plus sign is the concatenation operator.

var birthCity = "Houston";
var birthState = "Texas";

console.log(birthCity + ", " + birthState);

// We can mix strings and numbers together. When you do this, JavaScript turns numbers into strings. This is known as coercion. 

let ageInAugust = 40;
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

// CHALLENGE: Write a string with two variables. Output: "I graduated from Bill Murray High School in 1994."

// let gradYear = 1994;
// let highSchool = "Bill Murray High School";

// console.log("I graduated from " + highSchool + " in " + gradYear + ".");

let dogAge = 5;
let myAge = 30;

console.log("My dog is " + dogAge + " years old, and I am " + myAge);

// JavaScript has an extensive library of methods. We access methods with the dot (.) operator.
// str.length	            | Returns length of str
// str.toUpperCase	      | Converts str to all UPPERCASE letters
// str.toLowerCase	      | Converts str to all lowercase letters
// str.split(separator)	  | Splits str into an array1 of substrings separated by parameter separator
// str.slice(start, end)	| Extracts a section of str from start to end

//length - returns the length of a string (including spaces)
console.log(highSchool.length);

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]