/*
// Array methods
// An array has square brackets and can hold multiple data types
// arrays can list data types in an ordered, numbered way


    -Arrays are used to store multiple values in a single variable
    -there are array methods that allow us to traverse, as well as mutate, the data being held by an array
    
    -Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the arrays length -1

*/

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

//To access a specific element in an array, use bracket notation along with its index value
console.log(shoppingList[0]);

//Array.length - returns the number of elements in the array
console.log(shoppingList.length);

//Array.push() - adds element to the end of the array
shoppingList.push("salt");
console.log(shoppingList);

//Array.unshift() - adds a new element at the beginning of the array
shoppingList.unshift("salt");
console.log(shoppingList);

//Array.pop() - removes the last element in the array and returns that element
let removedElement = shoppingList.pop();
console.log(shoppingList);
console.log(removedElement);

//Array.shift() - removes the first element in the array and returns that element
let removedElement = shoppingList.shift();
console.log(shoppingList);
console.log(removedElement);

//Array.map() - transforms the elements in the original array by calling the given function once for each element in the array
console.log(shoppingList.map((item) => item.toUpperCase()));
let newShoppingList = shoppingList.map((item) => item.toUpperCase());
console.log(newShoppingList);

//Array.filter() - creates a new array with only the elements that pass the test in a given function
let newShoppingList = shoppingList.filter((item) => item.startsWith("l"));
console.log(newShoppingList);

//Array.find() - returns the first element in the array that passes a test given as a function
let shoppingItem = shoppingList.find((item) => item.startsWith("l"));
console.log(shoppingItem);

//Array.includes() - determines whether an array has a specific element
let isIncluded = shoppingList.includes("limes");
console.log(isIncluded);

//Array.indexOf() - search the array for a specific element and returns its first index. Returns -1 when element is not found
console.log(shoppingList.indexOf("lemons"));
console.log(shoppingList.indexOf("salt"));

//Array.findIndex() - returns the index of the first element in the array that passes the test in a given function. Returns -1 when the element is not found
let foundIndex = shoppingList.findIndex((item) => item.startsWith("g"));
console.log(foundIndex);

//Array.every() - check if all elements in an array pass a test given as a function. If there is 1 elements that returns a false value, the function returns false and does not check the rest of the elements
console.log(shoppingList.every((item) => item.length > 1));

//Array.concat() - merge two or more array, and returns a new array
let anotherShoppingList = ["salt", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);

//Array.slice() - selects a part of the array and returns a new array. Selects the elements starting the provided start argument and ends at, but does not include the provided end argument.
let newArray = shoppingList.slice(0, 4);
console.log(newArray);

//Array.splice() - adds/removes elements in the array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument that takes in the new elements to be added to the array.
shoppingList.splice(2, 2, "salt", "mint leaves");
console.log(shoppingList);

//Array.sort() - sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default, sort() orders the values as strings in alphabetical or ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending.
console.log(shoppingList);
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
// //want to sort by descending order
console.log(costs.sort((a, b) => b - a));
// //want to sort by ascending order
console.log(costs.sort((a, b) => a - b));

//Array.reverse() - reverses the order of the elements in the array
console.log(shoppingList.reverse());

//Array.toString() - converts the array into a string
console.log(shoppingList.toString());

//Array.join() - converts the elements in the array into a string. Can accept an optional parameter, "separator", which indicates how the elements will be separated. Default separator is a comma
console.log(shoppingList);
console.log(shoppingList.join("! and "));

//Lastly, an ES6 feature: the spread operator. The spread operator, indicated by these 3 dots "..." expands the contents of the array and takes it out of the array structure
console.log(shoppingList);
console.log(...shoppingList);

let numArray = [20, 40, 60];
function sum(numOne, numTwo, numThree) {
  console.log(numOne, numTwo, numThree);
  return numOne + numTwo + numThree;
}
console.log(sum(...numArray));

// Additional instruction code examples

let students = ["Tony", "Marshall", "Rhys", "Miles", ["Todd", "Ryan"]];
//  Hidden keys   0        1           2      3         4-counts as one

console.log(typeof students); // typeof calls this an OBJECT
console.log(students instanceof Array); // instanceof calls it TRUE as an Array
console.log(students[1]); // Marshall
console.log(students[4]); // [Todd, Ryan]

let name = students[4][0]; //The double sets of brackets dig into the child array
console.log(name); // Todd

// Recall for-of loop -> gives the values of the array
let food = ["Pecan pie", "Shrimp", "Hotdog", "Cheeseburger"];

for (f of food) {
  console.log(f + " is amazing");
}

// Array methods
let food = ["Pecan pie", "Shrimp", "Hotdog", "Cheeseburger"];

food.push("Pizza"); // Insert new value at the end of array
food.splice(1, 1, "Apples");
console.log(food);
food.splice(2, 0, "Watermelon"); // Asks for insertion point, asks for number of how many to remove after insertion point (0 if removing nothing), value of what to insert
console.log(food);
food.pop(); // Removes last item from an array
console.log(food);

food = food.slice(2, 4); // First number is the first element to slice from array, while second number is the stop position (NOT to be included)
console.log(food);

// forEach allows us to iterate with loops specifically, and we can grab both elements and their index numbers
// forEach method can NOT return an element

let food = ["Pecan pie", "Shrimp", "Hotdog", "Cheeseburger"];

food.forEach((f) => console.log(f)); // f is just a made-up value number for items in food. It could be any letter or name

food.forEach((food, index) => {
  console.log(food);
  console.log(index);
});

food.forEach((food, index) => {
  console.log(`The ${food} food in our array is at position ${index}.`);
});

// Array.push()
let movies = ["Brave", "Snow White", "Tangled", "Wall-E", "Bugs Life"];
movies.push("Cocoa");
// Array.splice()
movies.splice(4, 1, "Robin Hood");

movies.forEach((movie) => console.log(movie));
console.log(movies.length);

// Do the following with an array
// - check if working with an array
// - flip the values within the array (Item in index 4 is now in 0, 3 is now in 1)
// - using a method only, print the values of the new array

let arr = new Array(0, 1, 2, 3, 4, 5);

console.log(arr, arr instanceof Array);

if (arr instanceof Array) {
  let revArr = arr.reverse();
  revArr.forEach((numbers) => console.log(numbers));
}

// Array methods -- Arrays are used to store multiple values in a single variable
// There are array methods that allow us to traverse, as well as mutate the data inside

let arr = [
  "this is the first Element",
  "this is the second Element",
  "this is the third element",
];

console.log(arr[arr.length - 1]); // Always displays the last item in the array

// How to build new arrays

let test = new Array(); // Adding a single digit in the brackets (5) creates that many empty items
// Adding multiple digits inside the brackets (2, 4, 7) stores those values in the array

console.log(test);

// Example forEach methods

let boardgames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

// for (let i = 0; i < boardgames.length; i++) {
//   console.log(boardgames[i]);
// }

// Block body method
boardgames.forEach((game) => {
  console.log(game);
});

// Concise method
boardgames.forEach((game) => console.log(game));

// Anonymous function
boardgames.forEach(function (game) {
  console.log(game);
});
