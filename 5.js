// 5. Реализовать четыре основные арифметические операции в виде 
//функций с двумя параметрами. 
//Обязательно использовать оператор return.

function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

module.exports = {
    plus,
    minus,
    division,
    multiplication
};

// console.log("сложение = " + plus(3, 5));
// console.log("вычитание = " + minus(3, 5));
// console.log("умножение = " + multiplication(3, 5));
// console.log("деление = " + division(3, 5));