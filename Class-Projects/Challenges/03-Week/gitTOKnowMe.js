// GIT to know me
// After you create the array of objects, loop through the array to grab the mostRecentMovieWatched for each person object and PUSH those values to a GLOBAL moviesWatched variable which should be an array.

let group1 = [
  {
    name: "Aj White",
    age: 38,
    graduatedHSYear: 1999,
    pets: true,
    petNames: ["Ruby", "Georgia"],
    recentMovieWatched: "The Great Outdoors",
    carsOwned: [{ make: "Jeep", model: "Wrangler" }],
    favoritePotato: "Sweet Potato",
  },
  {
    name: "Angie Cunningham",
    age: 33,
    graduatedHSYear: 2205,
    pets: true,
    petNames: ["Frank", "Roxy", "Loki"],
    recentMovieWatched: "Nine",
    carsOwned: [{ make: "Ford", model: "Crown Victoria" }],
    favoritePotato: "All of them",
  },
  {
    name: "Amy Melangton",
    age: 41,
    graduatedHSYear: 1997,
    pets: true,
    petNames: ["Jazzy"],
    recentMovieWatched: "Elf",
    carsOwned: [{ make: "Kia", model: "Sedona" }],
    favoritePotato: "Sweet Potato",
  },
  {
    name: "Ryan Eckerle",
    age: 39,
    graduationHSYear: 2000,
    pets: true,
    petNames: ["Bella"],
    recentMovieWatched: "The Titans",
    carsOwned: [],
    favoritePotato: "Baked",
  },
  {
    name: "Doug",
    age: 43,
    graduatedHSYear: 1995,
    pets: true,
    petNames: "Jama",
    recentMovieWatched: "Die Hard",
    carsOwned: [{ make: "Dodge", model: "Ram" }],
    favoritePotato: "fried",
  },
];

// console.log(group1);

let allMoviesWatched = [];

for (student of group1) {
  allMoviesWatched.push(student.recentMovieWatched);
}
console.log(allMoviesWatched);
