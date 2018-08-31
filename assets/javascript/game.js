// // known bug: if you press the right key over and over, you will win hehe it's because it reads it as "right", so deducts the lettersRemaining. you can keep hitting it until lettersRemaining is <0 and win lol

// // all the colors array, 140 items
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

// // only choices allowed to play
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// // global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var answeredArray = [];
var guessedLetters = [];
var yay = new Audio("./assets/sounds/rupaul.mp3");
var boo = new Audio("./assets/sounds/fatality.swf.mp3");

// // generate random color to guess
var color = allColors[Math.floor(Math.random() * allColors.length)];
console.log(color);

// // will determine wins / loss
var lettersRemaining = color.length;

// // add underscores to array
for (var i = 0; i < color.length; i++) {
    answeredArray[i] = "_";
};

// // add underscores to array for reset
function showUnderscores() {
    for (var i = 0; i < color.length; i++) {
        answeredArray[i] = "_";
    }
};

// // will call function to show underscores on first go
showUnderscores();

// // updates color on reset
function updateColor() {
    color = allColors[Math.floor(Math.random() * allColors.length)];
    console.log(color);
};

// // updates array on html
function updateRightGuesses() {
    document.querySelector("#current-guess").innerHTML = answeredArray.join(" ");
};

// // updates wrong letters on html
function updateWrongGuesses() {
    document.querySelector("#guessed-letters").innerHTML = guessedLetters.join("  ");
};

// // updates wins on html
function updateWins() {
    document.querySelector('#wins-text').innerHTML = wins;
};

// // updates losses on html
function updateLosses() {
    document.querySelector('#losses-text').innerHTML = losses;
};

// // updates guesses left on html
function updateGuessesLeft() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

// // will change the background color...
function changeBackgroundColor() {
    document.body.style.backgroundColor = color;
};

// // will reset variables / array to set values, as well as run the functions listed
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
    changeBackgroundColor();
}

// // game logic based on keyup event
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var checkAlphabet = alphabet.includes(userGuess);
    var checkColor = color.includes(userGuess);
    // update scoreboard throughout the game
    updateWins();
    updateLosses();
    updateGuessesLeft();
    updateRightGuesses();
    updateWrongGuesses();
    changeBackgroundColor();

    if (checkAlphabet === true) {
        // update background color function
        if (guessesLeft > 0) {
            for (var j = 0; j < color.length; j++) {
                if (userGuess === color[j]) {
                    answeredArray[j] = userGuess;
                    lettersRemaining--;
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
                yay.play();
                updateWins();
                reset();
            }
        } else {
            boo.play();
            losses++;
            updateLosses();
            reset();
        }
    }
}