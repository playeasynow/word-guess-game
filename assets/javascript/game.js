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

// only choices allowed to play
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var answeredArray = [];
var guessedLetters = [];
var newColor;

// generate random color to guess
var color = allColors[Math.floor(Math.random() * allColors.length)];
console.log(color);

var lettersRemaining = color.length;

// add underscores to array
for (var i = 0; i < color.length; i++) {
    answeredArray[i] = "_";
}

function showUnderscores() {
    for (var i = 0; i < color.length; i++) {
        answeredArray[i] = "_";
    }
}

function updateColor() {
    // updateColor will update the color the computer has chosen after guesses run out / user wins
    color = allColors[Math.floor(Math.random() * allColors.length)];
    console.log(color);
};

function updateRightGuesses() {
    // guesses the user has tried -- then display it as letters joined with the underscores
    document.querySelector("#current-guess").innerHTML = answeredArray.join(" ");
};

function updateWrongGuesses() {
    // guesses the user has tried -- then display it as letters joined with the underscores
    document.querySelector("#guessed-letters").innerHTML = guessedLetters.join("  ");
};

function updateWins() {
    // wins-text will get displayed in HTML
    document.querySelector('#wins-text').innerHTML = wins;
};

function updateLosses() {
    // losses-text will get displayed in HTML
    document.querySelector('#losses-text').innerHTML = losses;
};

function updateGuessesLeft() {
    // guessesLeft will get displayed in HTML
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};


function changeBackgroundColor() {
    // hides instructions box
    // TBD
};

// will reset variables / array to set values, as well as run the functions listed
function reset() {
    guessesLeft = 9;
    answeredArray = [];
    guessedLetters = [];
    updateColor();
    showUnderscores();
    lettersRemaining = color.length;
    updateGuessesLeft();
    updateRightGuesses();
    updateWrongGuesses();
}

showUnderscores();

// when key is pressed/released it becomes the user's guess
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    var checkAlphabet = alphabet.includes(userGuess);
    var checkColor = color.includes(userGuess);
    // display wins / losses and hide instructions throughout the game
    updateWins();
    updateLosses();
    updateGuessesLeft();
    updateRightGuesses();
    updateWrongGuesses();

    if (checkAlphabet === false) {
        // alert("Only guess letters in this game! ;)");
        return false;

    } else if (checkAlphabet === true) {
        // update background color function
        if (guessesLeft > 0) {
            for (var j = 0; j < color.length; j++) {
                if (userGuess === color[j]) {
                    answeredArray[j] = userGuess;
                    lettersRemaining--;
                    console.log(lettersRemaining);
                    updateRightGuesses();
                }
            }
            if (checkColor === false) {
                guessedLetters.push(userGuess);
                updateWrongGuesses();
                guessesLeft--;
            }
            if (lettersRemaining < 1) {
                wins++;
                updateWins();
                reset();
            }
        } else {
            losses++;
            updateLosses();
            reset();
        }
    }
}