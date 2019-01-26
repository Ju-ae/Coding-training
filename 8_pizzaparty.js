/**
 * 피자를 정확하게 나누는 프로그램
 * 남는 조각이 있다면 개수도 나타내기
 */
var readline = require('readline-sync');
//var Date = require('Date');
while (true) {
    var people = readline.question("HOw many people? ");
    people = Number(people);

    var pizza = readline.question("HOw many pizzas do you have? ");
    pizza = Number(pizza);
    var pizza_piece = readline.question("\nHow many pieces are in a pizza? ");
    pizza_piece = Number(pizza_piece);

    if (Number.isInteger(people) && Number.isInteger(pizza) && Number.isInteger(pizza_piece) && pizza > 0 && pizza_piece > 0 && people > 0) {
        console.log(people + " people with " + pizza + "pizzas");
        var left = (pizza * pizza_piece) % people;
        var each_piece = ((pizza * pizza_piece) - left) / people;

        console.log("Each person gets " + each_piece + " pieces of pizza");
        console.log("There are " + left + " leftover pieces.");
    } else {
        console.log("잘못된 입력입니다.");
    }
}