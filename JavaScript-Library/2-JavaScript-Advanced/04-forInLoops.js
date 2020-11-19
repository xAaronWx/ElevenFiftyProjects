let student = { name: "Mike", awesome: true, degree: "JavaScript", week: 1 };

for (item in student) {
  console.log(item);
  console.log(student[item]);
}

let catArray = ["tabby", "short hair", "calico", "burmese", "rag doll"];

for (cat in catArray) {
  console.log(cat);
  console.log(catArray[cat]);
}

// Write a for in-loop that capitalizes the first letter of a name

let instructor = "pAul";
let capName;

for (n in instructor) {
  if (n == 0) {
    capName = instructor[n].toUpperCase();
  } else {
    capName += instructor[n].toLowerCase();
  }
}
console.log(capName);

// Numbers of letters

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (letter in alphabet) {
  console.log(alphabet[letter], letter);
}

// SILVER

for (letter in alphabet) {
  if (letter % 2 == 0) {
    console.log(alphabet[letter]);
  } else {
    console.log("the index is an odd number");
  }
}

// GOLD

let arr = [];

for (let i = 0; i < alphabet.length; i++) {
  if (i % 2 == 0) {
    arr.push(alphabet[i]);
  } else {
    console.log(`The index ${i} is an odd number`);
  }
}
console.log(arr);

// PLATINUM

let arr = [];
for (let i = 0; i < alphabet.length; i++) {
  i % 2 === 0
    ? (arr.push(alphabet[i]), console.log(arr))
    : console.log(`the index ${i} is an odd number`);
}

// EXTRA DETAILS

/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. So although properties in an object don't contain an index like arrays, their properties can be simply counted. 

    - a key - so think a key in an object - goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects, and that means for of loops are best used with arrays
*/

let obj = {
  key1: "value", // 1
  key2: "value", // 2
  key3: "value", // 3
};

console.log(Object.keys(obj).length);

for (key of obj) {
  console.log(key); // error: object is not iterable
}

let fellowshipOfTheRing = {
  members: {
    Gandalf: "Staff",
    Frodo: "Sting",
    Sam: "Lembas Bread",
    Aragorn: "Anduril",
    Legolas: "Bow of the Galadhrim",
    Gimli: "Walking Axe",
    Pippin: "Barrow Blades",
    Merry: "Barrow Blades",
    Boromir: "Horn of Gondor",
  },
  purpose:
    'To take the One Ring to Mordor, where it is to be "cast into the fiery chasm from whence it came," in order for it to be destroyed and Sauron\'s power to come to an end.',
  formed: "25 October, 3018",
  dissolved: "26 February, 3019",
};

/* BRONZE

  - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.

*/

for (member in fellowshipOfTheRing.members) {
  console.log(member);
}

/* SILVER

  - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.

*/

for (member in fellowshipOfTheRing.members) {
  if (
    member[0] !== "A" &&
    member[0] !== "E" &&
    member[0] !== "I" &&
    member[0] !== "O" &&
    member[0] !== "U"
  ) {
    console.log(`${member}'s name does not begin with a vowel`);
  } else {
    console.log(`${member}'s name does begin with a vowel`);
  }
}

/* GOLD

  - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.

*/

let arr = [];

for (member in fellowshipOfTheRing.members) {
  if (
    member[0] !== "A" &&
    member[0] !== "E" &&
    member[0] !== "I" &&
    member[0] !== "O" &&
    member[0] !== "U"
  ) {
    arr.push(member);
  }
}
console.log(arr);
