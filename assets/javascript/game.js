

// Pick a random letter
//  *While* the allColors has not been guessed {
//      *Show* the player their current progress
//      *Get* a guess from the player
//  If the player wants to quit the game {
//      *Quit* the game
//  }
//  Else If the guess is not a single letter {
//      *Tell* the player to pick a single letter
//  }
//  Else {
//      *If* the guess is in the allColors {
//      *Update* the player's progress with the guess
//          }
//      }
// }
// Congratulate the player on guessing the allColors

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

// chooses our random color to play
var color = allColors[Math.floor(Math.random() * allColors.length)];

// our underscores for the color to be played
var answerArray = [];
for (var i = 0; i < color.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = color.length;

// the game loop
while (remainingLetters > 0) {
    // shows the player's progress aka joins the guess and the underscores / displays letters
    alert(answerArray.join(" "));
}

// get a guess from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");

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