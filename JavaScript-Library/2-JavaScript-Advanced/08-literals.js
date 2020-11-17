let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(weekDays.toString());
console.log(weekDays[4]);

let soup = {
  a: "chicken",
  b: "tomato",
  c: "beef",
};

console.log(soup.c);

// array and object literal can hold primitive and 'complex' types (arrays, objects, functions)
let complexArrLiteral = [
  1,
  true,
  "Academy",
  [1, 2, 3],
  { key: "test" },
  function () {
    return "yes";
  },
];

console.log(complexArrLiteral[3]);
console.log(complexArrLiteral[5]);

let complexObjectLiteral = {
  num: 1,
  boolean: true,
  string: "string",
  arr: [1, 2, 3],
  obj: {
    key: "test",
  },
  func: function () {
    return "yes";
  },
};

console.log(complexObjectLiteral.func);
console.log(complexObjectLiteral.arr);
