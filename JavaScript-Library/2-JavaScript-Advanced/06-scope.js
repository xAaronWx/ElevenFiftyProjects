// Javascript has LOCAL and GLOBAL scope

// Example 1
var x = 12; // global scope

function scope() {
  var x = 33; // local scope only
  console.log(x);
}
scope(); // reads 33
console.log(x); // reads 12

// Example 2
var x = 12;

function scope() {
  x = 33; // the var gets reassigned GLOBALLY
  console.log(x);
}
scope();
console.log(x);

// Example 3

var x = 1;

function scope() {
  var x = 2;
  function scopeInner() {
    var x = 3;
    console.log(x); //3
  }
  scopeInner();
  console.log(x); //2
}
scope();
console.log(x); //1

//Example 4 contrast with 5
var x = 12;

function scope() {
  var x = 33;
  if (true) {
    let x = 45;
    console.log(x); //45
  }
  console.log(x); //33
}
scope();
console.log(x); //12

// Example 5 contrasts with 4
var x = 12;

function scope() {
  var x = 33;
  if (true) {
    var x = 45;
    console.log(x); //45
  }
  console.log(x); //45 -> VAR doesn't obey block scope
}
scope();
console.log(x); //12
