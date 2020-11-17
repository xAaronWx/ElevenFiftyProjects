// Switch statements

// Change the value of friend to change the console log

let friend = "Tom";

switch (friend) {
  case "Tom":
    console.log("Bring me some sweet bread!");
    break;
  case "Ken":
    console.log("Welcome to the party Ken.");
    break;
  case "Alex":
    console.log("Alex, is late to the party.");
    break;
  default:
    console.log(`I'm sorry ${friend}, I don't know you.`);
    break;
}

let yep = true;

switch (typeof yep == "string" || typeof yep == "boolean") {
  case true:
    console.log("Yep is a string or boolean");
    break;

  default:
    console.log("Yep is not a string or number");
    break;
}

let num = 25;

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
