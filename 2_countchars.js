/**
 * 문자열을 입력 받은 다음 입력 받은 문자열과 문자열의 글자 수를 출력하는 프로그램 작성
 */

var readline = require('readline-sync');
while (true) {

    var input_str = readline.question("What is the input string? ");
    console.log("raw : " + input_str);
    if (input_str.length == 0) {
        console.log("아무것도 입력되지 않았습니다.");
    } else
        console.log(input_str + " has " + input_str.length + " characters.");

}