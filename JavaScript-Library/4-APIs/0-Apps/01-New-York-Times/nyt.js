const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; // API endpoint
const key = "7i9AkKKJGaIHsrQKJURwL9UNlKkFjMVm"; // Personal Key
let url; // A variable

// Grab references to all the DOM elements you'll need to manipulate

const searchTerm = document.querySelector(".search"); // Creating a new constant by targeting the chosen selector
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form"); // No dot needed for a TAG

// This is never used
// const submitBtn = document.querySelector('.submit');

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");

const section = document.querySelector("section");
const nav = document.querySelector("nav"); // Creating a new constant by targeting the chosen selector

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.display = "none";

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;

// This is never used
// let displayNav = false;

// Event listeners to control the functionality
searchForm.addEventListener("submit", submitSearch); // Waiting for the submit button to be pressed and then will submitSearch
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function submitSearch(e) {
  pageNumber = 0;
  fetchResults(e);
}

// This is an event handling function e that allows you to interact with the object that get requested
function fetchResults(e) {
  // Use preventDefault() to stop the form submitting
  e.preventDefault();
  console.log(e);
  // Assemble the full URL
  url =
    baseURL +
    "?api-key=" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value +
    '&fq=document_type:("article")';

  // No search date will return ALL results
  if (startDate.value !== "") {
    url += "&begin_date=" + startDate.value;
  }

  if (endDate.value !== "") {
    url += "&end_date=" + endDate.value;
  }

  // Use fetch() to make the request to the API
  fetch(url)
    // Pulls the result from the API
    .then(function (result) {
      return result.json();
    })
    // It pulls down the json object from the return from the previous .then 1 step further in making it usable info
    .then(function (json) {
      displayResults(json); // calls a function with parameter
    });
  console.log("This is a test"); // Not needed but can be used to test if things work
}

// creating the function using the previous call
function displayResults(json) {
  // While loop will clear out any articles before a new article search is created
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  const articles = json.response.docs; //Pulling articles from API

  if (articles.length === 10) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }

  if (articles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
  } else {
    // This area creates the new features based on the return of a valid article
    for (let i = 0; i < articles.length; i++) {
      const article = document.createElement("article");
      const heading = document.createElement("h2");
      const link = document.createElement("a");
      const img = document.createElement("img");
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      const clearfix = document.createElement("div");

      // This finds the most current article
      const current = articles[i];
      console.log(current);

      link.href = current.web_url;
      link.textContent = current.headline.main;
      para1.textContent = current.snippet;
      // This creates and formats the 'Keywords' from the API articles
      para2.textContent = "Keywords: ";
      // This function pulls all of the keywords together
      for (let j = 0; j < current.keywords.length; j++) {
        const span = document.createElement("span");
        span.textContent = current.keywords[j].value + " ";
        para2.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute("class", "clearfix");

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
}
