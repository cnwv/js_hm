//8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
//       power(val, pow), где val — заданное число, pow –— степень.
var a = 2, b = 100;
function power(val, pow) {
    if (pow === 0) {
        return 1;
    }
    return val * power(val, pow - 1);
}

console.log(power(a, b))