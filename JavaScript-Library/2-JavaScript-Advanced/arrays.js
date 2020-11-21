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
food.splice(2, 0, "Watermelon"); // Asks for insertion point, asks for what to remove(0 if removing nothing), value of what to insert
console.log(food);
food.pop(); // Removes last item from an array
console.log(food);
