// .getElementById() Stops at the first matching selection
// If you want to select a very specific item in a list or nested in a div
// You open the page in a browser (Inspect the page) \ (Inspect the specific element) \ (Copy the SELECTOR) \ (Paste the selection in the parens of the selector)
const header = document.getElementById("header");

header.style.color = "goldenrod"; // Changes the color of the header text
header.innerText = "Hello World"; // Overwrites the text of the header

// .getElementsByClassName()
const errorList = document.getElementsByClassName("error-list");
errorList[1].innerText = "This is not an error.";

// Example 1: THis method is a way to loop through a multi class selection
for (let i = 0; i < errorList.length; i++) {
  errorList[i].style.color = "red";
}

// Example 2: for\Of Loop
for (error of errorList) {
  error.style.color = "green";
}

// Example 3 for\each will NOT work
// errorList.forEach((error) => (error.style.color = "purple"));

// .getElementsByTagName()
const tags = document.getElementsByTagName("p");

tags[0].innerText = "This text is completely different";

// .querySelector() Stops at the first matching selection
const header = document.querySelector("h1");

// If you want to select a very specific item in a list or nested in a div
// You open the page in a browser (Inspect the page) \ (Inspect the specific element) \ (Copy the SELECTOR) \ (Paste the selection in the parens of the selector)
const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)"); // This targets something specific rather than the first item it finds

// .querySelectorAll() Will collect all items that match the query in an Array
const headerTag = document.querySelectorAll("h");

headerTag.forEach((h) => (h.style.color = "blue"));

const errorList = document.querySelectorAll(".error-list");
errorList.forEach((li) => (li.style.fontStyle = "italic"));
