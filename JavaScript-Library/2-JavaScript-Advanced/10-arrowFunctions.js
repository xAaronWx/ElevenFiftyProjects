// Arrows do NOT get hoisted
// normal function declaration -- the function has a name
function coffee() {
  return "Coffee is good.";
}

// normal function expression -- the function does NOT have a name
let tea = function () {
  return "Tea is healthy";
};
console.log(coffee());
console.log(tea());

//Arrow functions are ALWAYS anonymous
let hotChocolate = () => {
  return "Hot chocolate is king!";
};
console.log(hotChocolate());

let animals = (kittens, puppies) => {
  return `I have ${kittens} kittens and ${puppies} puppies!`;
};
console.log(animals(2, 7));

//concise vs block body
//Concise method
let apples = (x) => `There are ${x} apples.`;
console.log(apples(3));

//Block body variable
let bananas = (x) => {
  return `There are ${x} bananas.`;
};
console.log(bananas(10));

//Return must be explicity written in a block -body arrow function
