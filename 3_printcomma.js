var readline = require('readline-sync');


var quote = readline.question("What is the quote? ");
var speaker = readline.question("Who said it? ");
console.log(speaker + " says,\"" + quote + "\"");