// all the colors array, 140 items
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

// GLOBAL VARIABLES
var wins = 0;
var losses = 0;
var inputText = document.getElementById("input-text"); // letters the user enters
var guessBtn = document.getElementById("guess-btn"); // button that needs to be clicked in order for letter to be taken
var winsText = document.getElementById("wins-text"); // the number of times a user answers a whole color correctly
// var lossesText = document.getElementById("losses-text"); // number of times the user has lost, ran out of guesses
// var guessesLeft = document.getElementById("guesses-left"); // number of single-letter guesses remaining, always 10
// var wrongLetters = document.getElementById("letters-guessed"); // listing of letters user entered but not part of word, already used
var currentWord = document.getElementById("current-word");
var unansweredArray = [];
var answeredArray = [];
var wrongArray = [];
var wrongGuess;

// GAME START CONFIG

// STEP 1) computer chooses our random color to play
var color = allColors[Math.floor(Math.random() * allColors.length)];
console.log(color);

// STEP 2) display underscores for the color to be played/guessed
for (var i = 0; i < color.length; i++) {
    unansweredArray[i] = "_";
    answeredArray[i] = "_";
}

// GAME PLAY CONFIG
var lettersRemaining = color.length;

function clickBtn() {
    event.preventDefault();
    event.stopPropagation();
    var guess = document.getElementById("input-text").value;
    var currentWord = document.getElementById("current-word");
    var winsText = document.getElementById("wins-text");
    for (var j = 0; j < color.length; j++) {
        if (color[j] === guess && lettersRemaining > 0) {
            answeredArray[j] = guess;
            lettersRemaining--;
         } else if (color[j] === guess && lettersRemaining < 1) {
            answeredArray[j] = guess;
            wins++;
            lettersRemaining;
        //  } else if (lettersRemaining > 0) {
        //      wrongArray[j] = guess;
        //      wrongLetters++
         }
    } 
    currentWord.textContent = answeredArray.join(" ");
    winsText.textContent = wins;
}


//     if (guess === null) {
//         break;
//     } else {
//         for (var j = 0; j < color.length; j++) {
//             if (color[j] === guess) {
//                 answerArray[j] = guess;
//                 letterRemaining--;
//             }
//         }
//     }

// while (lettersRemaining > 0) {
//     function clickBtn() {
//         event.preventDefault();
//         event.stopPropagation();
//         var guess = document.getElementById("inputText").value;
//         if (guess === null) {
//             break;
//         } else {
//             for (var j = 0; j < color.length; j++) {
//                 if (color[j] === guess) {
//                     answerArray[j] = guess;
//                     letterRemaining--;
//                 }
//             }
//         }
//     }
// }

// function clickBtn() {
//     event.preventDefault();
//     event.stopPropagation();
//     var guess = document.getElementById("inputText").value;
//     console.log(guess);
    // IF letter is in the COLOR, then display in the underscore area, keep looping until no letters left && guesses remain
    // IF letter is not in the COLOR, then display in the wrong letters area, guesses--
    // IF run out of guesses, startover
// }

// STEP 2) determine if letter is in color chosen from array

// STEP 3) IF letter in word, then join and show it on the blank spaces

// STEP 4) IF letter not in word, then don't join, and show it on the letters guessed incorrectly list; continue if there are remaining guesses



// GAME END / RESTART CONFIG

// STEP 1) IF all letters are guessed, the user wins, and the game restarts with a new word

// STEP 2) IF all guesses are used, the user loses, and game restarts with a new word





// lettersRemaining = color.length;

// while (lettersRemaining > 0) {
//     answerArray.join(" ");
//     document.getElementById("current-word").innerHTML = lettersRemaining;
// }

// document.getElementById("current-word").innerHTML = lettersRemaining;
// console.log(answerArray);



// is this in the word
// if in letter and in that word

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