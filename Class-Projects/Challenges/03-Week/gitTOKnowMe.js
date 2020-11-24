// GIT to know me
// After you create the array of objects, loop through the array to grab the mostRecentMovieWatched for each person object and PUSH those values to a GLOBAL moviesWatched variable which should be an array.

let group1 = {
  Aj: {
    name: "Aj White",
    age: 38,
    graduatedHSYear: 1999,
    pets: true,
    petNames: ["Ruby", "Georgia"],
    recentMovieWatched: "The Great Outdoors",
    carsOwned: [{ make: "Jeep", model: "Wrangler" }],
    favoritePotato: "Sweet Potato",
  },
  Amy: {
    name: "Amy Melangton",
    age: 41,
    graduatedHSYear: 1997,
    pets: true,
    petNames: ["Jazzy"],
    recentMovieWatched: "Elf",
    carsOwned: [{ make: "Kia", model: "Sedona" }],
    favoritePotato: "Sweet Potato",
  },
  Ryan: {
    name: "Ryan Eckerle",
    age: 39,
    graduationHSYear: 2000,
    pets: true,
    petNames: ["Bella"],
    recentMovieWatched: "The Titans",
    carsOwned: [],
    favoritePotato: "Baked",
  },
  Doug: {
    name: "Doug",
    age: 43,
    graduatedHSYear: 1995,
    pets: true,
    petNames: "Jama",
    recentMovieWatched: "Coke",
    carsOwned: [{ make: "Dodge", model: "Ram" }],
    favoritePotato: "fried",
  },
};
// console.log(group1);
console.log(
  group1.Aj.recentMovieWatched,
  group1.Amy.recentMovieWatched,
  group1.Doug.recentMovieWatched,
  group1.Ryan.recentMovieWatched
);

// Create new array and push recentMovieWatched to the array
let moviesWatched = [];

console.log(
  moviesWatched.push(
    group1.Aj.recentMovieWatched,
    group1.Amy.recentMovieWatched,
    group1.Doug.recentMovieWatched,
    group1.Ryan.recentMovieWatched
  )
);

// End Result
console.log(moviesWatched);
