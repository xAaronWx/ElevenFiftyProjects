console.log("I work");

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById("jokeButton");
jokeButton.addEventListener("click", fetchJokes);

function fetchJokes() {
  // alert("it works");  // A TEST TO SEE IF IT WORKS
  fetch(baseURL)
    .then((res) => res.json())
    .then((json) => displayJoke(json.value));
}

function displayJoke(joke) {
  let jokeText = document.getElementById("joke");
  jokeText.innerText = joke;
}
