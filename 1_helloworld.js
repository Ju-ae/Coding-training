var yourname = "";
/**
 * 이름을 입력 받아 이름을 이용하여 인사말 출력하는 프로그램.
 */
var readline = require('readline-sync');

var name = readline.question("What is your name? ");

console.log("Hello, " + name + ", nice to meet you.");