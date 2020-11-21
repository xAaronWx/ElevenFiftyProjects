//Example 1
console.log(scissors);
var scissors = "blue";

// What JS does to the code
var scissors; //it HOISTS the var
console.log(scissors);
scissors = "blue";

// Example 2
function hoistTest(params) {
  console.log(testVar);
  var testVar = 10;
  console.log(testVar);
}
hoistTest();

//  EXAMPLES

goodbye(); // Functions get hoisted
var hello = "hello"; // Var's get hoisted

console.log(hello);

function goodbye() {
  console.log("goodbye");
}

console.log(name);
let name = "Aj";
