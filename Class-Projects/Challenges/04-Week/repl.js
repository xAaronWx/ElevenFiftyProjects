// Repl 2.2: Async/Await
// Write a fat arrow async function that does the following:
// Uses await to fetch data from this endpoint - 'https://swapi.dev/api/people/4/'
// Uses await to jsonify the response received from the fetch
// console.log the results of the fetch before console.logging a message saying 'this should print last'
// our console.log of 'this should print last' should be accessed by using a promise resolver

// Your console.log should look like the screenshot below:

fetch("https://swapi.dev/api/people/")
  .then((res) => res.json())
  .then((res) => console.log(json));
