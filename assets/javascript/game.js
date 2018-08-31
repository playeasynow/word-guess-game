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
var yay = new Audio("./sounds/rupaul.mp3");
var boo = new Audio("./sounds/applepay.mp3");

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

// (function e(t, n, r) {
//     function s(o, u) {
//         if (!n[o]) {
//             if (!t[o]) {
//                 var a = typeof require == "function" && require;
//                 if (!u && a)
//                     return a(o, !0);
//                 if (i)
//                     return i(o, !0);
//                 var f = new Error("Cannot find module '" + o + "'");
//                 throw f.code = "MODULE_NOT_FOUND", f
//             }
//             var l = n[o] = {
//                 exports: {}
//             };
//             t[o][0].call(l.exports, function (e) {
//                 var n = t[o][1][e];
//                 return s(n ? n : e)
//             },
//                 l, l.exports, e, t, n, r)
//         }
//         return n[o].exports
//     }
//     var i = typeof require == "function" && require;
//     for (var o = 0; o < r.length; o++)s(r[o]);
//     return s
// })

//     ({
//         1: [function (require, module, exports) {
//             function setHSL(e, t, n) {
//                 setColor.apply(null, convert.hsl.rgb(e, t, n))
//             }
//             function setColor(e, t, n) {
//                 var r; if (null != e)
//                     r = "#" + convert.rgb.hex(e, t, n), current = convert.rgb.hsl(e, t, n);
//                 else {
//                     var o = x / window.innerWidth * 360, c = 100 - y / window.innerHeight * 100, i = z; current = [o, c, i], r = "#" + convert.hsl.hex(o, c, i)
//                 }
//                 currentHex = r,
//                     ctx.fillStyle = r,
//                     ctx.fillRect(0, 0, 16, 16),
//                     link.href = canvas.toDataURL("image/x-icon"),
//                     dark && current[2] >= 40 ? (dark = !1, div.className = "xhair dark") : !dark && current[2] < 40 && (dark = !0, div.className = "xhair light"),
//                     document.body.style.backgroundColor = r,
//                     input.value = r
//             }
//             function lock() {
//                 if (picking = !1, document.body.className = "", current) {
//                     var e = current[0] / 360 * window.innerWidth,
//                         t = (100 - current[1]) / 100 * window.innerHeight;
//                     div.style.transform = "translateX(" + e + "px) translateY(" + t + "px)"
//                 }
//                 currentHex && (window.location.hash = currentHex)
//             }
//             function unlock(e) {
//                 picking = !0, e && (x = e.clientX,
//                     y = e.clientY, setColor()),
//                     window.location.hash = "",
//                     document.body.className = "picking"
//             }
//             function fromString(e) {
//                 e = e.trim().replace(/^#/, "");
//                 var t = e.trim().match(/^(([a-fA-F0-9]{3}){1,2})/);
//                 if (t)
//                     return setColor.apply(null, convert.hex.rgb(t[1])), !0;
//                 if (e.length > 0)
//                     try {
//                         return setColor.apply(null, convert.keyword.rgb(e.trim().toLowerCase())), !0
//                     } catch (e) {

//                     } return !1
//             }
//             var convert = require("color-convert"),
//                 copy = require("copy-to-clipboard"),
//                 x = 0, y = 0, z = 50, picking = !0, dark = !1, current, currentHex,
//                 form = document.querySelector("form"),
//                 input = document.querySelector("input"),
//                 button = document.querySelector("button"),
//                 div = document.querySelector(".xhair"),
//                 canvas = document.createElement("canvas");
//             canvas.width = 16,
//                 canvas.height = 16;
//             var ctx = canvas.getContext("2d"),
//                 link = document.createElement("link");
//             link.type = "image/x-icon",
//                 link.rel = "shortcut icon",
//                 document.querySelector("head").appendChild(link),
//                 document.addEventListener("mousemove", function (e) {
//                     picking && (x = e.clientX, y = e.clientY, setColor())
//                 }),
//                 document.addEventListener("mousewheel", function (e) {
//                     e.preventDefault(), z = Math.max(0, Math.min(100, z + e.deltaY / 10)), setColor()
//                 }),
//                 button.addEventListener("click", function (e) {
//                     e.preventDefault(), copy(input.value, {
//                         debug: !0
//                     })
//                 }),
//                 form.addEventListener("submit", function (e) {
//                     e.preventDefault(), fromString(input.value), lock()
//                 }),
//                 input.addEventListener("focus", input.select), input.addEventListener("click", input.select), document.addEventListener("click", function (e) {
//                     "HTML" != e.target.tagName && "BODY" != e.target.tagName || (picking ? lock() : unlock(e))
//                 }),
//                 fromString(window.location.hash) ? lock() : (document.body.className = "picking", setHSL(Math.round(360 * Math.random()), Math.round(100 * Math.random()), 50));
//         },
//         {
//             "color-convert": 3, "copy-to-clipboard": 6
//         }],
//         2: [function (require, module, exports) {
//             function comparativeDistance(r, n) {
//                 return Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2) + Math.pow(r[2] - n[2], 2)
//             } var cssKeywords = require("color-name"), reverseKeywords = {
//             };
//             for (var key in cssKeywords) cssKeywords.hasOwnProperty(key) && (reverseKeywords[cssKeywords[key]] = key);
//             var convert = module.exports = {
//                 rgb: {
//                     channels: 3, labels: "rgb"
//                 }, hsl: {
//                     channels: 3, labels: "hsl"
//                 }, hsv: {
//                     channels: 3, labels: "hsv"
//                 }, hwb: {
//                     channels: 3, labels: "hwb"
//                 },
//                 cmyk: {
//                     channels: 4, labels: "cmyk"
//                 }, xyz: {
//                     channels: 3, labels: "xyz"
//                 },
//                 lab: {
//                     channels: 3, labels: "lab"
//                 },
//                 lch: {
//                     channels: 3, labels: "lch"
//                 },
//                 hex: {
//                     channels: 1, labels: ["hex"]
//                 }, keyword: {
//                     channels: 1, labels: ["keyword"]
//                 },
//                 ansi16: {
//                     channels: 1, labels: ["ansi16"]
//                 },
//                 ansi256: {
//                     channels: 1, labels: ["ansi256"]
//                 },
//                 hcg: {
//                     channels: 3, labels: ["h", "c", "g"]
//                 },
//                 apple: {
//                     channels: 3, labels: ["r16", "g16", "b16"]
//                 },
//                 gray: {
//                     channels: 1, labels: ["gray"]
//                 }
//             };
//             for (var model in convert)
//                 if (convert.hasOwnProperty(model)) {
//                     if (!("channels" in convert[model]))
//                         throw new Error("missing channels property: " + model);
//                     if (!("labels" in convert[model]))
//                         throw new Error("missing channel labels property: " + model);
//                     if (convert[model].labels.length !== convert[model].channels)
//                         throw new Error("channel and label counts mismatch: " + model);
//                     var channels = convert[model].channels,
//                         labels = convert[model].labels;
//                     delete convert[model].channels,
//                         delete convert[model].labels,
//                         Object.defineProperty(convert[model], "channels", {
//                             value: channels
//                         }),
//                         Object.defineProperty(convert[model], "labels", {
//                             value: labels
//                         })
//                 }
//             convert.rgb.hsl = function (r) {
//                 var n, e, t, a = r[0] / 255, o = r[1] / 255, c = r[2] / 255,
//                     h = Math.min(a, o, c), s = Math.max(a, o, c), l = s - h;
//                 return s === h ? n = 0 : a === s ? n = (o - c) / l : o === s ? n = 2 + (c - a) / l : c === s && (n = 4 + (a - o) / l), n = Math.min(60 * n, 360), n < 0 && (n += 360), t = (h + s) / 2, e = s === h ? 0 : t <= .5 ? l / (s + h) : l / (2 - s - h), [n, 100 * e, 100 * t]
//             },
//                 convert.rgb.hsv = function (r) {
//                     var n, e, t, a = r[0], o = r[1], c = r[2], h = Math.min(a, o, c), s = Math.max(a, o, c), l = s - h;
//                     return e = 0 === s ? 0 : l / s * 1e3 / 10, s === h ? n = 0 : a === s ? n = (o - c) / l : o === s ? n = 2 + (c - a) / l : c === s && (n = 4 + (a - o) / l), n = Math.min(60 * n, 360), n < 0 && (n += 360), t = s / 255 * 1e3 / 10, [n, e, t]
//                 },
//                 convert.rgb.hwb = function (r) {
//                     var n = r[0], e = r[1], t = r[2], a = convert.rgb.hsl(r)[0], o = 1 / 255 * Math.min(n, Math.min(e, t));
//                     return t = 1 - 1 / 255 * Math.max(n, Math.max(e, t)), [a, 100 * o, 100 * t]
//                 },
//                 convert.rgb.cmyk = function (r) {
//                     var n, e, t, a, o = r[0] / 255, c = r[1] / 255, h = r[2] / 255;
//                     return a = Math.min(1 - o, 1 - c, 1 - h), n = (1 - o - a) / (1 - a) || 0, e = (1 - c - a) / (1 - a) || 0, t = (1 - h - a) / (1 - a) || 0, [100 * n, 100 * e, 100 * t, 100 * a]
//                 }, convert.rgb.keyword = function (r) {
//                     var n = reverseKeywords[r];
//                     if (n)
//                         return n; var e, t = 1 / 0;
//                     for (var a in cssKeywords)
//                         if (cssKeywords.hasOwnProperty(a)) {
//                             var o = cssKeywords[a], c = comparativeDistance(r, o); c < t && (t = c, e = a)
//                         }
//                     return e
//                 },
//                 convert.keyword.rgb = function (r) {
//                     return cssKeywords[r]
//                 },
//                 convert.rgb.xyz = function (r) {
//                     var n = r[0] / 255, e = r[1] / 255, t = r[2] / 255;
//                     return n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, [100 * (.4124 * n + .3576 * e + .1805 * t), 100 * (.2126 * n + .7152 * e + .0722 * t), 100 * (.0193 * n + .1192 * e + .9505 * t)]
//                 },
//                 convert.rgb.lab = function (r) {
//                     var n, e, t, a = convert.rgb.xyz(r), o = a[0], c = a[1], h = a[2];
//                     return o /= 95.047, c /= 100, h /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, c = c > .008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, h = h > .008856 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, n = 116 * c - 16, e = 500 * (o - c), t = 200 * (c - h), [n, e, t]
//                 },
//                 convert.hsl.rgb = function (r) {
//                     var n, e, t, a, o, c = r[0] / 360, h = r[1] / 100, s = r[2] / 100;
//                     if (0 === h)
//                         return o = 255 * s, [o, o, o]; e = s < .5 ? s * (1 + h) : s + h - s * h, n = 2 * s - e, a = [0, 0, 0];
//                     for (var l = 0; l < 3; l++)t = c + 1 / 3 * -(l - 1), t < 0 && t++ , t > 1 && t-- , o = 6 * t < 1 ? n + 6 * (e - n) * t : 2 * t < 1 ? e : 3 * t < 2 ? n + (e - n) * (2 / 3 - t) * 6 : n, a[l] = 255 * o;
//                     return a
//                 },
//                 convert.hsl.hsv = function (r) {
//                     var n, e, t = r[0], a = r[1] / 100, o = r[2] / 100, c = a, h = Math.max(o, .01);
//                     return o *= 2, a *= o <= 1 ? o : 2 - o, c *= h <= 1 ? h : 2 - h, e = (o + a) / 2, n = 0 === o ? 2 * c / (h + c) : 2 * a / (o + a), [t, 100 * n, 100 * e]
//                 },
//                 convert.hsv.rgb = function (r) {
//                     var n = r[0] / 60, e = r[1] / 100, t = r[2] / 100, a = Math.floor(n) % 6, o = n - Math.floor(n), c = 255 * t * (1 - e), h = 255 * t * (1 - e * o), s = 255 * t * (1 - e * (1 - o));
//                     switch (t *= 255, a) {
//                         case 0:
//                             return [t, s, c];
//                         case 1:
//                             return [h, t, c];
//                         case 2:
//                             return [c, t, s];
//                         case 3:
//                             return [c, h, t];
//                         case 4:
//                             return [s, c, t];
//                         case 5:
//                             return [t, c, h]
//                     }
//                 },
//                 convert.hsv.hsl = function (r) {
//                     var n, e, t, a = r[0], o = r[1] / 100, c = r[2] / 100, h = Math.max(c, .01);
//                     return t = (2 - o) * c, n = (2 - o) * h, e = o * h, e /= n <= 1 ? n : 2 - n, e = e || 0, t /= 2, [a, 100 * e, 100 * t]
//                 },
//                 convert.hwb.rgb = function (r) {
//                     var n, e, t, a, o = r[0] / 360, c = r[1] / 100, h = r[2] / 100, s = c + h; s > 1 && (c /= s, h /= s), n = Math.floor(6 * o), e = 1 - h, t = 6 * o - n, 0 != (1 & n) && (t = 1 - t), a = c + t * (e - c); var l, v, u;
//                     switch (n) {
//                         default:
//                         case 6:
//                         case 0: l = e, v = a, u = c;
//                             break;
//                         case 1: l = a, v = e, u = c;
//                             break;
//                         case 2: l = c, v = e, u = a;
//                             break;
//                         case 3: l = c, v = a, u = e;
//                             break;
//                         case 4: l = a, v = c, u = e;
//                             break;
//                         case 5: l = e, v = c, u = a
//                     }
//                     return [255 * l, 255 * v, 255 * u]
//                 }, convert.cmyk.rgb = function (r) {
//                     var n, e, t, a = r[0] / 100, o = r[1] / 100, c = r[2] / 100, h = r[3] / 100;
//                     return n = 1 - Math.min(1, a * (1 - h) + h), e = 1 - Math.min(1, o * (1 - h) + h), t = 1 - Math.min(1, c * (1 - h) + h), [255 * n, 255 * e, 255 * t]
//                 },
//                 convert.xyz.rgb = function (r) {
//                     var n, e, t, a = r[0] / 100, o = r[1] / 100, c = r[2] / 100;
//                     return n = 3.2406 * a + -1.5372 * o + -.4986 * c, e = -.9689 * a + 1.8758 * o + .0415 * c, t = .0557 * a + -.204 * o + 1.057 * c, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, t = t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = Math.min(Math.max(0, n), 1), e = Math.min(Math.max(0, e), 1), t = Math.min(Math.max(0, t), 1), [255 * n, 255 * e, 255 * t]
//                 },
//                 convert.xyz.lab = function (r) {
//                     var n, e, t, a = r[0], o = r[1], c = r[2];
//                     return a /= 95.047, o /= 100, c /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, c = c > .008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, n = 116 * o - 16, e = 500 * (a - o), t = 200 * (o - c), [n, e, t]
//                 },
//                 convert.lab.xyz = function (r) {
//                     var n, e, t, a = r[0], o = r[1], c = r[2]; e = (a + 16) / 116, n = o / 500 + e, t = e - c / 200; var h = Math.pow(e, 3), s = Math.pow(n, 3), l = Math.pow(t, 3);
//                     return e = h > .008856 ? h : (e - 16 / 116) / 7.787, n = s > .008856 ? s : (n - 16 / 116) / 7.787, t = l > .008856 ? l : (t - 16 / 116) / 7.787, n *= 95.047, e *= 100, t *= 108.883, [n, e, t]
//                 }, convert.lab.lch = function (r) {
//                     var n, e, t, a = r[0], o = r[1], c = r[2];
//                     return n = Math.atan2(c, o), e = 360 * n / 2 / Math.PI, e < 0 && (e += 360), t = Math.sqrt(o * o + c * c), [a, t, e]
//                 },
//                 convert.lch.lab = function (r) {
//                     var n, e, t, a = r[0], o = r[1], c = r[2];
//                     return t = c / 360 * 2 * Math.PI, n = o * Math.cos(t), e = o * Math.sin(t), [a, n, e]
//                 },
//                 convert.rgb.ansi16 = function (r) {
//                     var n = r[0], e = r[1], t = r[2], a = 1 in arguments ? arguments[1] : convert.rgb.hsv(r)[2];
//                     if (0 === (a = Math.round(a / 50)))
//                         return 30; var o = 30 + (Math.round(t / 255) << 2 | Math.round(e / 255) << 1 | Math.round(n / 255));
//                     return 2 === a && (o += 60), o
//                 },
//                 convert.hsv.ansi16 = function (r) {
//                     return convert.rgb.ansi16(convert.hsv.rgb(r), r[2])
//                 },
//                 convert.rgb.ansi256 = function (r) {
//                     var n = r[0], e = r[1], t = r[2];
//                     return n === e && e === t ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(e / 255 * 5) + Math.round(t / 255 * 5)
//                 },
//                 convert.ansi16.rgb = function (r) {
//                     var n = r % 10;
//                     if (0 === n || 7 === n)
//                         return r > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n]; var e = .5 * (1 + ~~(r > 50));
//                     return [(1 & n) * e * 255, (n >> 1 & 1) * e * 255, (n >> 2 & 1) * e * 255]
//                 },
//                 convert.ansi256.rgb = function (r) {
//                     if (r >= 232) {
//                         var n = 10 * (r - 232) + 8;
//                         return [n, n, n]
//                     } r -= 16; var e;
//                     return [Math.floor(r / 36) / 5 * 255, Math.floor((e = r % 36) / 6) / 5 * 255, e % 6 / 5 * 255]
//                 },
//                 convert.rgb.hex = function (r) {
//                     var n = ((255 & Math.round(r[0])) << 16) + ((255 & Math.round(r[1])) << 8) + (255 & Math.round(r[2])), e = n.toString(16).toUpperCase();
//                     return "000000".substring(e.length) + e
//                 },
//                 convert.hex.rgb = function (r) {
//                     var n = r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
//                     if (!n)
//                         return [0, 0, 0]; var e = n[0]; 3 === n[0].length && (e = e.split("").map(function (r) {
//                             return r + r
//                         }).join("")); var t = parseInt(e, 16);
//                     return [t >> 16 & 255, t >> 8 & 255, 255 & t]
//                 },
//                 convert.rgb.hcg = function (r) {
//                     var n, e, t = r[0] / 255, a = r[1] / 255, o = r[2] / 255, c = Math.max(Math.max(t, a), o), h = Math.min(Math.min(t, a), o), s = c - h;
//                     return n = s < 1 ? h / (1 - s) : 0, e = s <= 0 ? 0 : c === t ? (a - o) / s % 6 : c === a ? 2 + (o - t) / s : 4 + (t - a) / s + 4, e /= 6, e %= 1, [360 * e, 100 * s, 100 * n]
//                 },
//                 convert.hsl.hcg = function (r) {
//                     var n = r[1] / 100, e = r[2] / 100, t = 1, a = 0;
//                     return t = e < .5 ? 2 * n * e : 2 * n * (1 - e), t < 1 && (a = (e - .5 * t) / (1 - t)), [r[0], 100 * t, 100 * a]
//                 },
//                 convert.hsv.hcg = function (r) {
//                     var n = r[1] / 100, e = r[2] / 100, t = n * e, a = 0;
//                     return t < 1 && (a = (e - t) / (1 - t)), [r[0], 100 * t, 100 * a]
//                 },
//                 convert.hcg.rgb = function (r) {
//                     var n = r[0] / 360, e = r[1] / 100, t = r[2] / 100;
//                     if (0 === e)
//                         return [255 * t, 255 * t, 255 * t]; var a = [0, 0, 0], o = n % 1 * 6, c = o % 1, h = 1 - c, s = 0;
//                     switch (Math.floor(o)) {
//                         case 0: a[0] = 1, a[1] = c, a[2] = 0;
//                             break;
//                         case 1: a[0] = h, a[1] = 1, a[2] = 0;
//                             break;
//                         case 2: a[0] = 0, a[1] = 1, a[2] = c;
//                             break;
//                         case 3: a[0] = 0, a[1] = h, a[2] = 1;
//                             break;
//                         case 4: a[0] = c, a[1] = 0, a[2] = 1;
//                             break;
//                         default: a[0] = 1, a[1] = 0, a[2] = h
//                     }
//                     return s = (1 - e) * t, [255 * (e * a[0] + s), 255 * (e * a[1] + s), 255 * (e * a[2] + s)]
//                 },
//                 convert.hcg.hsv = function (r) {
//                     var n = r[1] / 100, e = r[2] / 100, t = n + e * (1 - n), a = 0;
//                     return t > 0 && (a = n / t), [r[0], 100 * a, 100 * t]
//                 },
//                 convert.hcg.hsl = function (r) {
//                     var n = r[1] / 100, e = r[2] / 100, t = e * (1 - n) + .5 * n, a = 0;
//                     return t > 0 && t < .5 ? a = n / (2 * t) : t >= .5 && t < 1 && (a = n / (2 * (1 - t))), [r[0], 100 * a, 100 * t]
//                 },
//                 convert.hcg.hwb = function (r) {
//                     var n = r[1] / 100, e = r[2] / 100, t = n + e * (1 - n);
//                     return [r[0], 100 * (t - n), 100 * (1 - t)]
//                 },
//                 convert.hwb.hcg = function (r) {
//                     var n = r[1] / 100, e = r[2] / 100, t = 1 - e, a = t - n, o = 0;
//                     return a < 1 && (o = (t - a) / (1 - a)), [r[0], 100 * a, 100 * o]
//                 },
//                 convert.apple.rgb = function (r) {
//                     return [r[0] / 65535 * 255, r[1] / 65535 * 255, r[2] / 65535 * 255]
//                 },
//                 convert.rgb.apple = function (r) {
//                     return [r[0] / 255 * 65535, r[1] / 255 * 65535, r[2] / 255 * 65535]
//                 },
//                 convert.gray.rgb = function (r) {
//                     return [r[0] / 100 * 255, r[0] / 100 * 255, r[0] / 100 * 255]
//                 },
//                 convert.gray.hsl = convert.gray.hsv = function (r) {
//                     return [0, 0, r[0]]
//                 },
//                 convert.gray.hwb = function (r) {
//                     return [0, 100, r[0]]
//                 },
//                 convert.gray.cmyk = function (r) {
//                     return [0, 0, 0, r[0]]
//                 },
//                 convert.gray.lab = function (r) {
//                     return [r[0], 0, 0]
//                 },
//                 convert.gray.hex = function (r) {
//                     var n = 255 & Math.round(r[0] / 100 * 255), e = (n << 16) + (n << 8) + n, t = e.toString(16).toUpperCase();
//                     return "000000".substring(t.length) + t
//                 }, convert.rgb.gray = function (r) {
//                     return [(r[0] + r[1] + r[2]) / 3 / 255 * 100]
//                 };
//         },
//         {
//             "color-name": 5
//         }],
//         3: [function (require, module, exports) {
//             function wrapRaw(e) { var n = function (n) { 
//                 return void 0 === n || null === n ? n : (arguments.length > 1 && (n = Array.prototype.slice.call(arguments)), e(n)) 
//             }; 
//             return "conversion" in e && (n.conversion = e.conversion), n 
//         } 
//         function wrapRounded(e) { 
//             var n = function (n) { if (void 0 === n || null === n) return n; arguments.length > 1 && (n = Array.prototype.slice.call(arguments)); var r = e(n); if ("object" == typeof r) for (var o = r.length, t = 0; t < o; t++)r[t] = Math.round(r[t]); return r }; return "conversion" in e && (n.conversion = e.conversion), n } var conversions = require("./conversions"), route = require("./route"), convert = {}, models = Object.keys(conversions); models.forEach(function (e) { convert[e] = {}, Object.defineProperty(convert[e], "channels", { value: conversions[e].channels }), Object.defineProperty(convert[e], "labels", { value: conversions[e].labels }); var n = route(e); Object.keys(n).forEach(function (r) { var o = n[r]; convert[e][r] = wrapRounded(o), convert[e][r].raw = wrapRaw(o) }) }), module.exports = convert;

//         }, { "./conversions": 2, "./route": 4 }], 4: [function (require, module, exports) {
//             function buildGraph() { for (var n = {}, r = models.length, e = 0; e < r; e++)n[models[e]] = { distance: -1, parent: null }; return n } function deriveBFS(n) { var r = buildGraph(), e = [n]; for (r[n].distance = 0; e.length;)for (var t = e.pop(), o = Object.keys(conversions[t]), i = o.length, s = 0; s < i; s++) { var a = o[s], c = r[a]; -1 === c.distance && (c.distance = r[t].distance + 1, c.parent = t, e.unshift(a)) } return r } function link(n, r) { return function (e) { return r(n(e)) } } function wrapConversion(n, r) { for (var e = [r[n].parent, n], t = conversions[r[n].parent][n], o = r[n].parent; r[o].parent;)e.unshift(r[o].parent), t = link(conversions[r[o].parent][o], t), o = r[o].parent; return t.conversion = e, t } var conversions = require("./conversions"), models = Object.keys(conversions); module.exports = function (n) { for (var r = deriveBFS(n), e = {}, t = Object.keys(r), o = t.length, i = 0; i < o; i++) { var s = t[i]; null !== r[s].parent && (e[s] = wrapConversion(s, r)) } return e };
//         }, { "./conversions": 2 }], 5: [function (require, module, exports) {
//             module.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
//         }, {}], 6: [function (require, module, exports) {
//             "use strict"; function format(e) { var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"; return e.replace(/#{\s*key\s*}/g, t) } function copy(e, t) { var o, r, n, c, s, a, l = !1; t || (t = {}), o = t.debug || !1; try { n = deselectCurrent(), c = document.createRange(), s = document.getSelection(), a = document.createElement("span"), a.textContent = e, a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", document.body.appendChild(a), c.selectNode(a), s.addRange(c); if (!document.execCommand("copy")) throw new Error("copy command was unsuccessful"); l = !0 } catch (n) { o && console.error("unable to copy using execCommand: ", n), o && console.warn("trying IE specific stuff"); try { window.clipboardData.setData("text", e), l = !0 } catch (n) { o && console.error("unable to copy using clipboardData: ", n), o && console.error("falling back to prompt"), r = format("message" in t ? t.message : defaultMessage), window.prompt(r, e) } } finally { s && ("function" == typeof s.removeRange ? s.removeRange(c) : s.removeAllRanges()), a && document.body.removeChild(a), n() } return l } var deselectCurrent = require("toggle-selection"), defaultMessage = "Copy to clipboard: #{key}, Enter"; module.exports = copy;
//         }, { "toggle-selection": 7 }], 7: [function (require, module, exports) {
//             module.exports = function () { var e = document.getSelection(); if (!e.rangeCount) return function () { }; for (var n = document.activeElement, t = [], a = 0; a < e.rangeCount; a++)t.push(e.getRangeAt(a)); switch (n.tagName.toUpperCase()) { case "INPUT": case "TEXTAREA": n.blur(); break; default: n = null }return e.removeAllRanges(), function () { "Caret" === e.type && e.removeAllRanges(), e.rangeCount || t.forEach(function (n) { e.addRange(n) }), n && n.focus() } };
//         }, {}]
//     }, 
//     {}, 
//     [1]);
