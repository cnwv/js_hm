//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 — значения аргументов, operation — строка с названием операции.В зависимости от 
//переданного значения выполнить одну из арифметических операций(использовать функции из пункта 5) 
//и вернуть полученное значение(применить switch).
const myMath = require('./5.js');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return myMath.plus(arg1, arg2);
        case "-":
            return myMath.minus(arg1, arg2);
        case "/":
            return myMath.division(arg1, arg2);
        case "*":
            return myMath.multiplication(arg1, arg2);
        default:
            return NaN;
    }
}

var a1 = 50, b1 = 100;
console.log(`Сложение ${a1} и ${b1} = ${mathOperation(a1, b1, "+")}`);
console.log(`Вычитание ${a1} из ${b1} = ${mathOperation(b1, a1, "-")}`);
console.log(`Умножение ${a1} на ${b1} = ${mathOperation(a1, b1, "*")}`);
console.log(`Деление ${b1} на ${a1} = ${mathOperation(b1, a1, "/")}`);

