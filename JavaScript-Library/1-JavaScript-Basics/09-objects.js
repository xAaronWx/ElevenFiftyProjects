// Here is an object literal:
//1                //2
let bobAlcorn = {
  //3                 //4
  name: "Bob Alcorn",
  age: 59,
  vocation: "Chief Operating Officer",
  isRetired: false,
};

// 1 Use the let keyword, create a name and add an equal sign (=).
// 2 Next, add { }.
// 3 name, age, vocation, and isRetired are properties or keys of the object. Each has a colon (:) preceding the value.
// 4 Each of the properties have a value. "Bob Alcorn"   59   "Chief Operating Office"   false.

//  The dot . is an operator, like a plus sign. It gives you access to the object's properties and their values. Use the object's name, then the ., then the property name. This accesses the value of the property. Check it out:

console.log(bobAlcorn); //1
console.log(bobAlcorn.name); //2
console.log(bobAlcorn.age); //3

// Prints the whole object
// Prints the value of the name property.
// Prints the value of the age property.

console.log(bobAlcorn.middleName); //undefined: middleName does not exist

// console.log(bobAlcorn);, the object's full name.
console.log(bobAlcorn.name);
// console.log(bobAlcorn.age);.
console.log(bobAlcorn.age);
// Create another object named player.
// Add properties named username, power, and toughness.
// Assign values for each property.
let player = {
  username: "Rodney Crush",
  power: 500,
  toughness: 250,
};
// Display the player's username
console.log(player.username);

// Make a friend object with at least four properties.

// Make another object called movie with three properties

// Make an object about anything you want (recipe, car, sports team).
