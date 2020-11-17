let student = { name: "Mike", awesome: true, degree: "JavaScript", week: 1 };

for (item in student) {
  console.log(item);
  console.log(student[item]);
}

let catArray = ["tabby", "short hair", "calico", "burmese", "rag doll"];

for (cat in catArray) {
  console.log(cat);
  console.log(catArray[cat]);
}

// Write a for in-loop that capitalizes the first letter of a name

let instructor = "pAul";
let capName;

for (n in instructor) {
  if (n == 0) {
    capName = instructor[n].toUpperCase();
  } else {
    capName += instructor[n].toLowerCase();
  }
}
console.log(capName);
