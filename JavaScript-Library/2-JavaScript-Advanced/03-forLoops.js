// Loops offer a quick and easy way to do something repeatedly
// There are many different kind of loops but they all do the same thing:
// for statement
// do while
// while
// labeled
// break
// continue
// for in
// for of
// .forEach
// .map

// Loop structure: a) creation of an index variable b) a run condition c) change to the index variable

// count to 10 and log the numbers
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// loops can run infinitely
// if you create an infinite loop you have to force kill the process or close VS code

// counts to -25 by -3, starting from 2
for (let i = 2; i >= -25; i += -3) {
  console.log(i);
}

// display the letters in a name individually
let name = "Kincade";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random() * 30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment) {
  console.log(i);
}
