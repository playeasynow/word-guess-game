

//  Computer picks a random color
//  *While* the color has not been guessed {
//      *Show* the player their current progress
//      *Get* a guess (a letter) from the player
//  If the player wants to quit the game {
//      *Quit* the game
//  }
//  Else If the guess is not a single letter {
//      *Tell* the player to pick a single letter
//  }
//  Else {
//      *If* the guess is in the allColors array {
//      *Update* the player's progress with the guess
//          }
//      }
// }
// Congratulate the player on guessing the color

// fun little welcome message
// var name = prompt("Hi, colorful. What's your name?");
// alert("Hello " + name);

// all the colors array, should be 140
var allColors = [
    "indianred", "lightcoral", "salmon", "darksalmon", "lightsalmon", "crimson",
    "red", "firebrick", "darkred", "pink", "lightpink", "hotpink", "deeppink", "mediumvioletred",
    "palevioletred", "coral", "tomato", "orangered", "darkorange", "orange", "gold", "yellow", "lightyellow",
    "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki",
    "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "rebeccapurple",
    "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "slateblue", "darkslateblue", "mediumslateblue",
    "greenyellow", "chartreuse", "lawngreen", "lime", "limegreen", "palegreen", "lightgreen", "mediumspringgreen", "springgreen",
    "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "yellowgreen", "olivedrab", "olive", "darkolivegreen",
    "mediumaquamarine", "darkseagreen", "lightseagreen", "darkcyan", "teal", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine",
    "turquoise", "mediumturquoise", "darkturquoise", "cadetblue", "steelblue", "lightsteelblue", "powderblue", "lightblue", "skyblue",
    "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue",
    "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "rosybrown", "sandybrown", "goldenrod", "darkgoldenrod",
    "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite",
    "whitesmoke", "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "gainsboro", "lightgray",
    "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black"
];

var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphabet = alphabetArray();

// variables to hold the number of wins, losses and remaining letters.
var wins = 0;
var losses = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var inputText = document.getElementById("inputText"); // letters the user enters
var winsText = document.getElementById("wins-text"); // the number of times a user answers a whole color correctly
var lossesText = document.getElementById("losses-text"); // number of times the user has lost, ran out of guesses
var guessesRemaining = document.getElementById("guesses-remaining"); // number of single-letter guesses remaining, always 10
var lettersGuessed = document.getElementById("letters-guessed"); // listing of letters user entered but not part of word, already used
var currentWord = document.getElementById("current-word");

// STEP 1) computer chooses our random color to play
var color = allColors[Math.floor(Math.random() * allColors.length)];
console.log(color);

// STEP 2) display underscores for the color to be played/guessed
var answerArray = [];
for (var i = 0; i < color.length; i++) {
    answerArray[color.length] = "_ ";
    console.log(answerArray[color.length]);
}
var remainingLetters = color.length;

console.log(answerArray.join(" "));

// This function is run whenever the user presses the guess button after entering a letter.
// document.getElementById("guessBtn").onclick = function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     // computer chooses our random color to play
//     var color = allColors[Math.floor(Math.random() * allColors.length)];
//     // variable to capture remanining letters to use in loop
//     var remainingLetters = color.length;
//     // Determines which key was pressed by the user.
//     var guess = document.getElementById("inputText").value;
//     console.log("guess " + guess);

//     // run block to determine if guessed letter is in the color. If so, print letter, deduct from remaining letters, increase wins
//     for (var j = 0; j < color.length; j++) {
//         if (color[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//             wins++;
//         }
//     }

//      our underscores for the color to be played
//      var answerArray = [];
//      for (var i = 0; i < color.length; i++) {
//          answerArray[i] = "_";
//      }

//     // the game loop
//     while (remainingLetters > 0) {
//         // shows the player's progress aka joins the guess and the underscores / displays letters
//         alert(answerArray.join(" "));
//     }

//     if (guess === null) {
//         // exit the game loop
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//     } else {
//         // update game status with the guess
//         for (var j = 0; j < color.length; j++) {
//             if (color[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
//     // show answer and congratulate player
//     // alert(answerArray.join(" "));
//     // alert("Good job! The answer was " + word);

//     winsText.textContent = "wins: " + wins;
//     lossesText.textContent = "losses: " + losses;