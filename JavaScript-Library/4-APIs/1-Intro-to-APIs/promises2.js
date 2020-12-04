// fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// async function slowResult() {
//   await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
//   console.log("This is a message!");
// }

// slowResult();

// async and await work in tandem to allow the code to process in the order that it was written
async function slowResult() {
  await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    .then((res) => res.json())
    .then((json) => {
      json.lolProperty = "I inserted this into the fetched object data ;)";
      return json;
    })
    .then((json) => console.log(json));
  console.log("This is a message!");
}

slowResult();
