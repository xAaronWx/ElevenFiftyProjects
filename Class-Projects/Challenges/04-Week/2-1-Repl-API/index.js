// Repl 2.1 API Fetch
// Use the provided HTML, CSS, and JS files to fetch images of two separate characters from the Rick and Morty API. You will not need to edit/change anything in the HTML file, everything you need is already there.

// Your fetch call to the specified endpoint is already defined in the index.js file. Finish coding the necessary promise resolvers for your fetch to access character information from the API.

// Once you are seeing character information in the console, define a function that will be used to display the data. Your JSON-ified data from the API will need to be passed to this function.

// Inside the display function you will need to:
//      1. Declare two variables used to store the separate character image links from the API.
//      2. Grab each image element from the index.html file, and set the src to be the image link you stored in a variable during step 1.
//      3. After you are seeing images of two different characters, use the attached style.css file to style each image with the following properties:
//                   1. Each image must have a border-radius
//                   2. Each image must have a border
//                   3. Each image must be centered

// Your console.log should look like the screenshot below:
console.log("Working");

let mainDiv = document.querySelector("body");
let imageTop = document.createElement("img");
imageTop.setAttribute("id", "img1");
let imageBottom = document.createElement("img");
imageBottom.setAttribute("id", "img2");

let url = "https://rickandmortyapi.com/api/character/";

fetch(url).then((res) =>
  res.json().then((json) => {
    console.log(json.results[2].image);
    image1 = json.results[2].image;
    image2 = json.results[4].image;
    displayImg(image1, image2);
  })
);

function displayImg(image1, image2) {
  imageTop.src = image1;
  imageBottom.src = image2;
  mainDiv.appendChild(imageTop);
  mainDiv.appendChild(imageBottom);
}
