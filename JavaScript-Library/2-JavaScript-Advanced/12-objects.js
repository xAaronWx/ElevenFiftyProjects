/*
************
  OBJECTS
************
    - The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/

let netflix = {
  id: 1,
  name: "The Office",
  season1: {
    seasonInfo: {
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot",
        },
        {
          episode: 2,
          episodeName: "Diversity Day",
        },
        {
          episode: 3,
          episodeName: "Health Care",
        },
        {
          episode: 4,
          episodeName: "The Alliance",
        },
        {
          episode: 5,
          episodeName: "Basketball",
        },
      ],
    },
  },
  season2: {},
  season3: {},
};

console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName);

/*
    JSON OBJECTS

        - JSON stands for JavaScript Object Notation
        - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
        - JSON exists as a string — useful when you want to fetch data from a server. It needs to be converted to a native JavaScript object if you want to access the data.

        - show them what JSON data looks like in browser ---> https://rickandmortyapi.com/api/character/
        - https://jsonformatter.org/ --- > paste in text from above

        - we will talk more about JSON data when we start working with API's
*/

/*
************
OBJECT BRACKET NOTATION/PROPERTY ACCESSORS 
************
    - Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

   https://docs.google.com/forms/d/e/1FAIpQLScvGgqArq0MC0-LnFcSiDon1wwUnwkbitNRlWL2nZhb5hHAPA/viewform
*/

let dog = {};

dog["name"] = "Luna";
dog["breed"] = "Siberian Husky";

console.log(dog);
console.log(dog["name"], dog["breed"]);

// all keys in objects are strings, although they are not wrapped in quotes
let test = Object.keys(dog);
console.log(test);
console.log(typeof test[0]);

// Using square brackets is a good idea when you may not be able to use dot notation to dig through an object
// I personally haven't ran into many situations where I haven't been able to use dot notation, but we still want to teach this to you guys so you're aware

// about the only time you would need to use object bracket notation is if the key you're trying to grab has spaces in it
let testObj = {
  "Spaces Here": true,
  noSpaces: true,
};

console.log(testObj.noSpaces);
// notice how VSCode automatically correct us and places our key in brackets when we try to grab the key 'Spaces Here' using dot notation
console.log(testObj["Spaces Here"]);

// Objects
// HARDCORE NESTING of arrays and objects

let netflix = {
  id: 9,
  likes: 932,
  name: "The Good Place",
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot",
        },
        {
          episode: 2,
          episodeName: "Flying",
        },
        {
          episode: 3,
          episodeName: "Tahani Al-Jamil",
        },
        {
          episode: 4,
          episodeName: "Jason Mendoza",
        },
        {
          episode: 5,
          episodeName: "Category 55 Emergency Doomsday Crisis",
        },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Everything is Great!",
        },
        {
          episode: 2,
          episodeName: "Dance Dance Resolution",
        },
        {
          episode: 3,
          episodeName: "Team Cockroach",
        },
        {
          episode: 4,
          episodeName: "Existential Crisis",
        },
        {
          episode: 5,
          episodeName: "The Trolley Problem",
        },
        {
          episode: 6,
          episodeName: "Janet and Michael",
        },
      ],
    },
    season3: {
      numberOfEpisodes: 5,
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Everything Is Bonzer!",
        },
        {
          episode: 2,
          episodeName: "The Brainy Bunch",
        },
        {
          episode: 3,
          episodeName: "The Snowplow",
        },
        {
          episode: 4,
          episodeName: "Jeremy Bearimy",
        },
        {
          episode: 5,
          episodeName: "The Ballad of Donkey Doug",
        },
      ],
    },
  },
  description:
    "Four people and their otherworldly frenemy struggle in the afterlife to define what it means to be good.",
};

// console.log(netflix);

console.log(netflix.seasonInfo.season3.episodeInfo[3].episodeName); // Use a combination of square brackets and dot notation to dig into nested  array's and objects

// Pick an episode to log
// using dot notation, walk through the netflix object and print the episode number and name

console.log(
  "Episode " +
    netflix.seasonInfo.season2.episodeInfo[1].episode + // Logged episode number
    " " +
    netflix.seasonInfo.season2.episodeInfo[1].episodeName // Logged episode name
);

// JSON => JAvaScript Object Notation

var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
      when: "$(basename).ts",
    },
    "**/*.js.map": {
      when: "$(basename)",
    },
  },
  "editor.fontFamily": "Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]": {},
  "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact",
  },
  "html.format.indentInnerHtml": true,
  "editor.fontSize": 11,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.port": 3500,
  "[javascriptreact]": {},
};

let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit1: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevil: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky Pig",
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko",
  },
  nbaPlayers: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkNicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charlotteHornets2: "Muggsy Bogues",
  },
};

console.log(Object.keys(spaceJam)); // Object.keys returns an array with the keys of the object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString()); // toString outputs object log into a string

console.log(Object.values(spaceJam));

// EXAMPLE

let garden = {
  vegetable: "Zucchini",
  flower: "Sunflower",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10,
};

console.log(garden.vegetable);

let inc = "fruit";
console.log(garden[inc]); // Square bracket allows for a key to be assigned or re-assigned

let g = "water";

Object.keys(garden).forEach((key) => {
  if (key == g) {
    console.log(garden[key]);
  }
});

// Example on adding to an object

let baking = {};

baking["Sunflower"] = "Better make some bread!"; // Method 1
//         KEY:            VALUE of KEY
baking.newKey = "This is the best key!"; // Method 2  Both ways work

console.log(baking);
console.log(baking.Sunflower);
console.log(baking.newKey);
