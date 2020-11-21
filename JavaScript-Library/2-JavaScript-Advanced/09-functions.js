/*
Functions:

-JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression

-Function declarations are hoisted in our code, and run ONLY when we call them(invoke them). So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his or her hand up, waiting to ask a question. That student does not ask the question until the teacher calls upon them

-function expressions are not hoisted, and are generally stored in variables

-functions without names are known as anonymous functions
*/

// at the broadest level, functions do the following

// They take some input which the function will handle/process
// They process the input given to them
// They usually, but not always return a value
// They can be invoked (used) as many times as we want, cutting down on repetition

function newFunc(num) {
  return num + 1;
}

console.log(newFunc(7));

// Example 2
function sentence(firstName, lastName) {
  return `My first name is ${firstName}, and my last name is ${lastName}.`;
}

console.log(sentence("Tom", "Ridley"));
let superImportantSentence = sentence("Nick", "Fury");
console.log(superImportantSentence);

// Example 3
// Build a function that takes a complex type--an array in this case and console.log each item
let arr = [1, true, { key: "string" }, 0, false, null, "heya!"];
let arr2 = [5, 6, 10, 15];

function iteratorFunc(inputArr) {
  for (let element of inputArr) {
    console.log(element);
  }
}
iteratorFunc(arr);

// Example 1  FUNCTION DECLARATION
function sayHello() {
  console.log("Hi!");
}
// INVOKE function
sayHello();

// FUNCTION EXPRESSION
let greetings = function () {
  console.log("Hello");
};

// INVOKE FUNCTION
greetings();

/*
Parameters

-Think of parameters as a newly declared variable that we have not given a value to yet
    -The value that we pass into our function when we call the function to run(which is known as an argument), is the value that gets assigned to the parameter

    -General naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) {
  console.log(`My dog's name is ${husky}`);
}
//  "husky" is the PARAMETER
myDog("Ruby"); //"Ruby" is the ARGUMENT
myDog("Todd");

function allMyDogs(dog1, dog2, dog3) {
  console.log(`My dogs are named ${dog1}, ${dog2}, and ${dog3}`);
}

allMyDogs("Mira", "Luna", "Charlie"); // The names are the ARGUMENT

/*
Return

-functions can also manipulate the data sent to them, and return a new value

-Code below the return does not get executed
*/

function calculator(one, two, three) {
  let totalWeight = one + two + three;
  let average = Math.round(totalWeight / 3);
  return `The average weight is ${average}`;
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function areaCalc(length, width) {
  let area = length * width;
  return area;
}

let area1 = areaCalc(5, 2);
let area2 = areaCalc(10, 2);
console.log(area1);
console.log(area2);

// Practice II

// Write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21

function dogToHumanYrs(dogYrs) {
  let humanAge = (dogYrs - 2) * 4 + 21;
  return humanAge;
}
console.log(dogToHumanYrs(5));

// OR

function dogToHumanYrs(dogYrs) {
  return (dogYrs - 2) * 4 + 21;
}
console.log(dogToHumanYrs(5));
