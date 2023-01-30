randomWords = require("random-words")
color = require("colors")
numWords = 12;
words = randomWords(numWords).join(" ");

console.log(words.green)