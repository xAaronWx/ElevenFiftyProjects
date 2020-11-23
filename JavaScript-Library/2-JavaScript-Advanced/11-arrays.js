// An array has square brackets and can hold multiple data types
// arrays can list data types in an ordered, numbered way

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

let food = ["Pecan pie", "Shrimp", "Hotdog", "Cheeseburger"];

food.forEach((f) => console.log(f)); // f is just a made-up value number for items in food. It could be any letter or name

food.forEach((food, index) => {
  console.log(food);
  console.log(index);
});

food.forEach((food, index) => {
  console.log(`The ${food} food in our array is at position ${index}.`);
});

// Example

let movies = ["Brave", "Snow White", "Tangled", "Wall-E", "Bugs Life"];

movies.push("Cocoa");
movies.splice(4, 1, "Robin Hood");

movies.forEach((movie) => console.log(movie));
console.log(movies.length);

// // Do the following with an array
// - check if working with an array
// - flip the values within the array (Item in index 4 is now in 0, 3 is now in 1)
// - using a method only, print the values of the new array

let arr = new Array(0, 1, 2, 3, 4, 5);

console.log(arr, arr instanceof Array);

if (arr instanceof Array) {
  let revArr = arr.reverse();
  revArr.forEach((numbers) => console.log(numbers));
}
