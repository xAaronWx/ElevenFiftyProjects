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
