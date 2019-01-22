var readline = require('readline-sync');

var nown = readline.question("Enter a noun : ");
var verb = readline.question("Enter a verb : ");
var adjective = readline.question("Enter a adjective : ");
var adverb = readline.question("Enter a adverb : ");

console.log("Do you " + verb + " your " + adjective + " " + nown + " " + adverb + "? Tha's hilarious!");