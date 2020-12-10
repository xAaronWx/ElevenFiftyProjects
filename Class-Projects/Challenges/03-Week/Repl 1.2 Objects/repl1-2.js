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
