let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

// ==   Equality
// ===  Strict Equality
// !=   Inequality
// !==  Strict Inequality
// >    Greater Than
// >=   Greater Than or Equal to
// <    Less Than
// <=   Less Thank or Equal to

console.log(2 > 1); //true
console.log(3 < 2); //false

var test = 2 >= 3; //What will this print?
console.log(test);
console.log("Two is greater than one? " + (2 > 1));
console.log(3 >= 1);

// 2 == "2" -- true -- checks for equality not type
// 1 == "1" -- true -- checks for equality not type
// 2 === "2" -- false -- Equality is the same, but type is different
// 2 === 2 -- true -- Equality and type are the same
// "Password12!!" === "Password12!!" -- true -- Equality and type are the same

console.log("Password12!" === "Password12!!");
console.log(1 !== 2);
console.log(10 !== 10);

console.log("&& :", 2 === 2 && 1 === 1); //true because?
console.log("|| :", 2 === 2 || 2 === 1); //true because?
console.log("!=", 2 != 1); //true because?
