//1        //2
function hello() {
  //3
  console.log("Hello World!");
}

hello(); // invokes the function hello.

function pacersWon() {
  console.log("Pacers won!");
}
pacersWon();

pacersWon()
pacersWon()

// // Two things to know up front:

// Parameters are the names listed in the parentheses of the function definition
function bottleCapper(bottle, cap) {
  return bottle + cap;
}

// Arguments are the real values received by the function when you call it.
bottleCapper("green bottle", "white cap");

function numberEntered(num) {
  console.log("The number you entered was: ", num);
}
numberEntered(); // Undefined
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

numberEntered(40); // Value of 40

// Let's try a function with two params (slang for parameters). The following has a function definition and three calls to the function, each with two numeric arguments. 

function addAnyTwoNumbers(x, y) {
  console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum) {
  console.log(firstNum - secondNum);
}

subtractTwoNumbers(5, 7)
subtractTwoNumbers(2, 7)


// Stages follow:

function getMyBattingAverage(atBats, numberOfHits) {
  let myAverage = numberOfHits / atBats;
  return myAverage;
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

//--- The Flow of Events ---
// At the console.log(), JavaScript sees getMyBattingAverage.
// JS calls the function and sends 250 into atBats and 91 into numberOfHits.
// JS declares myAverage and initializes it to numberOfHits / atBats .
// JS will return the value in myAverage to the place where the function was called: inside the parentheses of the console.log().
// JS displays 0.364

function fullName(first, last) {
  let wholeName = first + " " + last;
  return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

function indianaPrice(quantity, price) {
  let totalPrice = 1.07 * quantity * price;
  return totalPrice;
}
console.log(indianaPrice(17, 5));