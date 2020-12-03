// .getElementById()
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
