// STARTING VARIABLES
// this variable defines the computer's 10 letter choices
var letters = ["a", "c", "f", "h", "k", "m", "o", "r", "x", "z"];
// this variable sets the computerChoice at null
var computerChoice = null;
// this variable sets a starting value for the user's total number of correct guesses
var wins = 0;
// this variable sets a starting value for the user's total number of incorrrect guesses
var losses = 0;
// this variable sets a starting value for the user's guesses so far
var guessesSoFar = [];
// this variable sets a starting value for the user's guesses remaining
var guessesLeft = 9;
// this defines the computer's random pick based on the letters array
var index = letters[Math.floor(Math.random() * letters.length)];
var computerChoice = letters[index];
console.log(index);
// This function is run whenever the user presses a key to start or continue a game.
document.onkeyup = function(event) {
// This variable determines which key was pressed.
var userGuess = event.key; //d h c
//if user gets it right
if (userGuess === index) {
console.log("wins");
wins++;
// for WIN or LOSE: need to reset guesses to 9, have computer pick another random letter, reset guessesSoFar
guessesSoFar = [];
guessesLeft = 9;
index = letters[Math.floor(Math.random() * letters.length)];
//if user gets it wrong
} else if (userGuess !== index) {
console.log("losses");
guessesLeft--; //8 7
// if user is out of guesses
if (guessesLeft == 0) {
console.log("You lose")
losses++;
// for WIN or LOSE: need to reset guesses to 9, have computer pick another random letter, reset guessesSoFar
guessesSoFar = [];
guessesLeft = 9;
index = letters[Math.floor(Math.random() * letters.length)];
}
}
// It then takes the user's response and "pushes" (or adds) the variable to the end of the guessesSoFar array.
guessesSoFar.push(userGuess);
console.log(guessesSoFar);
}
// INNER HTML
// This variable holds our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses.
var html =
"<p>Guesses left: " + guessesLeft + "</p>" +
"<p>Guesses so far: " + guessesSoFar + "</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>";
// This sets the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
}