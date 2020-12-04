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

//  Whiteboarding Examples

function sumAll(min, max) {
  let total = ((max - min + 1) * (min + max)) / 2;
  console.log(total);
}
sumAll(1, 100);

let pets = {
  animal: "dog",
  name: "Doggy",
  gender: "female",
  age: 4,
  likes: ["carrots", "running"],
};

console.log(pets);

function trapezoidArea(b1, b2, h) {
  let sumArea = h * ((b1 + b2) / 2);
  console.log(sumArea);
}
trapezoidArea(3, 5, 10);
