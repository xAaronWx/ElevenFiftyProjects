// at the broadest level, functions do the following

// They take some input which the function will handle/process
// They process the input given to them
// They usually, but not always return a value
// They can be invoked (used) as many times as we want, cutting down on repetition

// Example 1
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
