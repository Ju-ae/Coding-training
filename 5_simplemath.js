/**
 * 간단한 수학, 
 * 두 숫자를 이용한 사칙연산 결과 출력하는 프로그램
 */


var readline = require('readline-sync');

while (true) {
    var num1 = readline.question("What is the first number? ");
    var num2 = readline.question("What is the second number? ");
    calc(num1, num2);

}

function calc(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (Number.isInteger(num1) && Number.isInteger(num2) && num2 > 0 && num1 > 0) {
        var ret1 = num1 + num2;
        var ret2 = num1 - num2;
        var ret3 = num1 * num2;
        var ret4 = num1 / num2;

        console.log(num1 + " + " + num2 + " = " + ret1 + "\n" + num1 + " - " + num2 + " = " + ret2 + "\n" + num1 + " * " + num2 + " = " + ret3 + "\n" + num1 + " / " + num2 + " = " + ret4);
    } else {
        console.log("잘못된 입력입니다.");
    }
}