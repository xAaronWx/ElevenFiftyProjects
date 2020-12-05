// console.log("sync 1");
// setTimeout(() => console.log("Timeout 2"), 0); // Macrotask
// Promise.resolve().then(() => console.log("Promise 3")); // Microtask
// console.log("sync 4");

// function wait(ms) {
//   console.log("wait()");
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function hello() {
//   console.log("hello()");
//   await wait(5000).then(() => {
//     console.log("world");
//   });
//   return new Promise((resolve) => resolve());
// }

// hello();

// BELOW is fetch dog API

let mainDiv = document.getElementById("mainDiv");
let img = document.createElement("img");
mainDiv.appendChild(img);

document.getElementById("navDog").addEventListener("click", dogFetch);

function dogFetch() {
  fetch("https://random.dog/woof.json").then((res) =>
    res.json().then((data) => {
      // console.log(data);
      let fileType = data.url.slice(-3);
      // console.log(fileType);
      if (fileType != "mp4") {
        img.setAttribute("src", data.url);
      } else {
        dogFetch();
      }
    })
  );
}
dogFetch();
