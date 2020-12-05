// Repl-1-1 - Loops
// 1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2).

// 2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below.

// After you've successfully console.logged 0-10 (as pictured above), move on to step 3.

// 3. Inside of the function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.

for (let i = 0; i <= 10; i++) {
  evenOdd(i);
}

function evenOdd(i) {
  console.log(i);
  if (i % 2 == 0) {
    console.log(`${i} the number is even`);
  } else {
    console.log(`${i} the number is odd`);
  }
}

// Repl 1-2 Objects and Arrays

// Write an object literal that stores information about your favorite movie.

// nameOfMovie, runTime, characters, and genre should be keys directly inside the object.

// characters will be an array that should store no more than two (2) character objects, each of which stores name, age, and items.

// items itself will also be an array that should store no more than two (2) item objects.

// These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

// Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.

let movie = {
  name: "Krull ",
  runTime: 164,
  characters: [
    {
      name: "Colwyn",
      age: 30,
      items: [{ itemOne: "Glave", itemTwo: "Swagger" }],
    },
    {
      name: "Rell the Cyclops",
      age: 37,
      items: [{ itemOne: "Trident", itemTwo: "Skill" }],
    },
  ],
  genre: "Fantasy",
};

console.log(movie.name, movie.runTime, movie.characters, movie.genre);
console.log(movie.characters[0].name);
console.log(movie.characters[0].items[0].itemOne);

//  1st draft Whiteboard Examples

function sumAll(min, max) {
  let total = ((max - min + 1) * (min + max)) / 2;
  console.log(total);
}
sumAll(1, 100);

let pets = {
  animal: "dog",
  name: "Doggy",
  gender: "female",
  age: 4,
  likes: ["carrots", "running"],
};

console.log(pets);

function trapezoidArea(b1, b2, h) {
  let sumArea = h * ((b1 + b2) / 2);
  console.log(sumArea);
}
trapezoidArea(3, 5, 10);
