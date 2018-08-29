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
var guessesLeft = 10;
var unansweredArray = [];
var answeredArray = [];
var guessedLetters = [];
var wrongGuess;

// GAME START CONFIG

// STEP 1) computer chooses our random color to play
var computerGuess = allColors[Math.floor(Math.random() * allColors.length)];
console.log(computerGuess);

// // STEP 2) display underscores for the color to be played/guessed
// for (var i = 0; i < computerGuess.length; i++) {
//     // unansweredArray[i] = "_";
//     answeredArray[i] = "_";
//     console.log(answeredArray);
// }

// function showUnderscores() {
//     for (var i = 0; i < computerGuess.length; i++) {
//         answeredArray[i] = "_";
//     }
// }

function insertCorrectLetter() {

}

function updateGuessesLeft() {
    // guessesLeft will get displayed in HTML
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

function updateColor() {
    // updateColor will update the color the computer has chosen after guesses run out / user wins
    this.color = this.allColors[Math.floor(Math.random() * this.allColors.length)];
};

function updateCurrentGuesses() {
    // guesses the user has tried -- then display it as letters joined with the underscores
    document.querySelector("#current-guess").innerHTML = answeredArray.join(" ");
};

function updateWins() {
    // wins-text will get displayed in HTML
    document.querySelector('#wins-text').innerHTML = wins;
};

function updateLosses() {
    // losses-text will get displayed in HTML
    document.querySelector('#losses-text').innerHTML = losses;
};

function changeBackgroundColor() {
    // hides instructions box
    // TBD
};

// will reset variables / array to set values, as well as run the functions listed
function reset() {
    guessesLeft = 10;
    answeredArray = [];

    updateColor();
    updateGuessesLeft();
    updateCurrentGuesses();
}

// when key is pressed/released it becomes the user's guess
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    var check = computerGuess.includes(userGuess);
    // display wins / losses and hide instructions throughout the game
    updateWins();
    updateLosses();
    // showUnderscores();
    // changeBackgroundColor();

    // if (check === false) {
    //     alert("Make sure to use only letters!");
    //     return false;
    // } else 
    if (check === true) {
        for (var j = 0; j < computerGuess.length; j++) {
            if (userGuess === computerGuess[j]) {
                // if the user's choice was in the alphabet then update guesses left and add user's guess to the array of guessed letters
                answeredArray.push(userGuess);
                guessesLeft--;
                // update the scoreboard
                updateGuessesLeft();
            }
            updateCurrentGuesses();
        }
    }
}
//         if (guessesLeft > 0) {
//             // if the user's guess is the randomly chosen letter, win
//             for (var j = 0; j < color.length; j++) {
//                 if (userGuess === color[j]) {
//                     wins++;
//                     answeredArray.push(userGuess);
//                     document.querySelector('#wins-text').innerHTML = wins;
//                     userGuess = userGuess.toUpperCase();
//                     alert("Yes, you are psychic! The chosen letter was " + userGuess);
//                     //  call to reset the guesses left and the guesses so far i.e. restart the game
//                     reset();
//             }
//         } else if (guessesLeft === 0) {
//             // user will lose and we'll update the html to display the loss 
//             losses++;
//             document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
//             alert("Sorry!! Not a psychic yet. Keep trying!");
//             // call to reset the guesses left and the guesses so far i.e. restart the game
//             reset();
//         }
//         return false;
//     } else {
//         // this hasn't appeared, but should not... which is why it's weird
//         alert("this is weird.");
//     }

// };


// // GAME PLAY CONFIG
// var lettersRemaining = color.length;

// function clickBtn() {
//     event.preventDefault();
//     event.stopPropagation();
//     var guess = document.getElementById("input-text").value;
//     var currentWord = document.getElementById("current-word");
//     var winsText = document.getElementById("wins-text");
//     var wrongLetters = document.getElementById("wrong-letters");
//     if (lettersRemaining > 0 && guesses > 0) {
//         for (var j = 0; j < color.length; j++) {
//             if (color[j] === guess) {
//                 answeredArray[j] = guess;
//                 lettersRemaining--;
//                 console.log(lettersRemaining);
//             } else if (color[j] !== guess) {
//                 wrongArray[guess];
//                 console.log(wrongArray);
//                 guesses--;
//                 console.log(guesses);
//                 }
//         }
//         currentWord.textContent = answeredArray.join(" ");
//         wrongLetters.textContent = wrongArray;
//     } else {
//         answeredArray[j] = guess;
//         wins++;
//     }
//     winsText.textContent = wins;
// };

    // while (remainingLetters > 0) {
    //  if (guess.length !== 1) {
    //         alert("Please enter a single letter.");
    //     } else {
    //         // Update the game state with the guess
    //         for (var j = 0; j < word.length; j++) {
    //             if (word[j] === guess) {
    //                 answerArray[j] = guess;
    //                 remainingLetters--;
    //             }
    //         }
    //     }
        // The end of the game loop
    // }

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