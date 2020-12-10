//  1st draft Whiteboard Examples

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
