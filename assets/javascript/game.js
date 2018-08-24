

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
var name = prompt("Hi, colorful. What's your name?");
alert("Hello " + name);

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

// variables to hold the number of wins, losses and remaining letters.
var wins = 0;
var losses = 0;
var remainingLetters = color.length;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// computer chooses random color to play when user loads page


// This function is run whenever the user presses the guess button after entering a letter.
document.onclick = function (event) {
    // computer chooses our random color to play
    var color = allColors[Math.floor(Math.random() * allColors.length)];
    // Determines which key was pressed by the user.
    var guess = event.key;
    // Only run the following code block if the user keys a single letter.    
    if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // run block to determine if guessed letter is in the color. If so, print letter, deduct from remaining letters, increase wins
        for (var j = 0; j < color.length; j++) {
            if (color[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
                wins++;
            }
        }

        // our underscores for the color to be played
        var answerArray = [];
        for (var i = 0; i < color.length; i++) {
            answerArray[i] = "_";
        }

        // the game loop
        while (remainingLetters > 0) {
            // shows the player's progress aka joins the guess and the underscores / displays letters
            alert(answerArray.join(" "));
        }

        if (guess === null) {
            // exit the game loop
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            // update game status with the guess
            for (var j = 0; j < color.length; j++) {
                if (color[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
        // show answer and congratulate player
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);