/**
 * 퇴직 계산기
 * 정년까지 몇 년 남았는지, 퇴직하는 해는 몇년이 되는지 구하기,
 * 입력 : 현재 나이, 퇴직 나이
 */

var readline = require('readline-sync');
//var Date = require('Date');
while (true) {
    var age = readline.question("What is your current age? ");
    var retire_age = readline.question("At what age would you like to retire? ");
    retire_calc(age, retire_age);
}

function retire_calc(age, retire_age) {
    age = Number(age);
    retire_age = Number(retire_age);
    if (Number.isInteger(age) && Number.isInteger(retire_age) && age > 0 && retire_age >= age) {
        var left_year = retire_age - age;
        console.log("You have " + left_year + "years left until you can retire.");
        var d = new Date();
        var retire_d = new Date();
        retire_d.setFullYear(retire_d.getFullYear() + left_year);
        console.log("It's " + d.getFullYear() + ", so you can retire in " + retire_d.getFullYear());
    } else {
        console.log("잘못된 입력입니다.");
        return;
    }
}