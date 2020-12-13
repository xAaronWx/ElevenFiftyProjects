// Create a guessing game where a user, when prompted, can input a number between 1 and 10. The user has up to three (3) opportunities to guess the correct number. Upon evaluation of the user's input, the computer can nudge the user to guess higher or lower.

// What is needed for a guessing game?
// A range for our user to guess between. This should be 1-10.
// A randomized computer answer.
// A user guess that will provide a prompt
// A guess count (for loop variable declaration)
// gameLost = false
// The user will have 3 guesses to guess the correct answer.

// Logic
// A way to validate the user guess
// Check if the user guess === the computer answer and alert that they won
// If the user guess is greater than the computer answer - nudge them to guess lower
// If the user guess is lower than the computer answer - nudge them to guess higher
// Handle the case when a user loses

// *** You will need to explore documentation on:
// parseInt(),
// prompt,
// alert,
// Math.floor(),
// and Math.random()

// *** You will not need to use the provided HTML or CSS file - just JS!
// alert(
//   "Do you want to play a game? You have three chances to guess what number I have chosen. Press OK to continue and good luck"
// );

// var ask = prompt("Choose a number between 1 - 10");
// // converts input into a number value
// var guess = Number(ask);
// console.log(guess);
// // random value generated
// var RandomNum = Math.floor(Math.random() * 10 + 1);
// console.log(RandomNum);

// var guesses = 1;

// // the if else statement for getting the correct number
// if (guess == RandomNum) {
//   alert("Congratulations!!! You have bested me");
// } else if (guess > RandomNum) {
//   /* if guessed number is greater than actual number*/
//   guesses++;
//   alert("Too high, try a smaller number");
// } else {
//   // if guessed number is smaller than actual number
//   guesses++;
//   alert("Too low, try a larger number");
// }

// Try this method
function UserGuess() {
  var randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
  var guess;
  var lastGuess = "";
  alert(
    "Greetings and welcome. I would like to play a game. I have chosen a random number between 1 and 10. You have three chances to guess the number I have chosen. Good luck."
  );
  for (var i = 0; i < 3; i++) {
    do {
      guess = prompt(lastGuess + "Guess a number between 1 and 10");
      if (isNaN(guess)) alert("You must choose a number");
    } while (isNaN(guess));
    if (guess == randomNum) {
      alert(
        "Congratulations, you are very fortunate. " +
          guess +
          " was the right number!"
      );
      break;
    } else {
      if (guess > randomNum) lastGuess = guess + " was too high. ";
      if (guess < randomNum) lastGuess = guess + " was too low ";
    }
  }
  if (i > 2)
    alert("What a shame. You have lost. The number I chose was " + randomNum);
}
UserGuess();
