// Of requires that your "Thing" you're looping through be iterable--Meaning it needs to be numbered

// let student = { name: "Zach", isAwesome: true, degree: "JavaScript", week: 1 };

// for (item of student) {
//   console.log(item);
// }

let catArray = ["tabby", "short hair", "calico", "burmese", "rag doll"];

for (cat of catArray) {
  console.log(cat, "says meow");
}

// of loops use the actual value of an item while if loops use the place number of the value
