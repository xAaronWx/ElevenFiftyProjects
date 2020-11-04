//1
var isOn = true;

//2   //3
if (isOn === true) {
  console.log("The light is on."); //4
}

//  SHORTHAND

var isOn = true;
//1
if (isOn) { // same as if (isOn === true) 
  console.log("The light is on. It's bright.");
}

var weather = 80;

if (weather > 70) {
  console.log("It is " + weather + " degrees. Wear shorts today! It's going to be hot!");
}

// Practice writing if statements involving concepts from your life. Keep it simple:

// If caveman is hungry, print: "Caveman need food."
// If episode number equals ten, print: "I am sad that this season is ending."

var hungry = true;

if (hungry) {
  console.log("Caveman need food.")
}

var episode = 10;

if (episode = 10) {
  console.log("I am sad that this season is ending.")
}

console.log(7 % 3)

var temp;
temp = 40 % 7;
temp += 28;

if (temp >= 50) {
  console.log("Grab the shorts!");
} else {
  console.log("I need my hoodie!");
}