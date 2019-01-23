/**
 * 직사각형 방의 면적
 * 방의 길이와 폭을 피트단위로 입력 -> 제곱피트와 제곱미터로 면적을 나타냄
 * 1. 출력문과 계산부분 분리
 * 2. 상수를 사용하여 변환 상수를 저장
 */


var FFFF = 0.09290304;

var readline = require('readline-sync');
//var Date = require('Date');
while (true) {
    var f_len = readline.question("What is the length of the room in feet? ");
    var f_width = readline.question("What is the width of the room in feet? ");
    f_len = Number(f_len);
    f_width = Number(f_width);
    if (Number.isInteger(f_len) && Number.isInteger(f_width) && f_width > 0 && f_len > 0) {
        console.log("You entered dimensions of " + f_len + " feet by " + f_width + " feet");
        get_area(f_len, f_width);
    } else {
        console.log("잘못된 입력입니다.");
    }
}

function get_area(length, width) {
    console.log("This area is ");
    var area = length * width;
    console.log(area + " square feet");
    console.log(area * FFFF + " square meters");
}