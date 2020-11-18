/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY
    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/

var count = 40;

function FB() {
  // while (count <= 100) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz");
  } else if (count % 3 === 0) {
    console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(count);
  }

  // count++
}
// }
FB();

// SILVER

let num = 45;

switch (true) {
  case num % 3 === 0 && num % 5 === 0:
    console.log("Fizz Buzz");
    break;
  case num % 3 === 0:
    console.log("Fizz");
    break;
  case num % 5 === 0:
    console.log("Buzz");
    break;
  default:
    console.log(num);
}

// GOLD

let digit = 37;

digit % 15 === 0
  ? console.log("Fizz Buzz")
  : digit % 3 === 0
  ? console.log("Fizz")
  : digit % 5 === 0
  ? console.log("Buzz")
  : console.log(digit);
