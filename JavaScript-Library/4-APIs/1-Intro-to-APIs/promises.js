// setTimeout runs the script/function after a certain time period
setTimeout(() => console.log("This is a timeout test."), 1000);

// Building a promise check
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 3000); // This is the timer in milliseconds
});

promise
  .then((success) => console.log(success)) // This is the handler for the success state
  .catch((err) => console.log(err)); // This is the handler for the failure state
