//1. С помощью цикла while вывести все простые числа в 
//промежутке от 0 до 100.

function simpleNum(n) {
    let array = [];
    for (let i = 2; i < n; i++) {
        array.push(i);
    }
    let i = 0;
    while (Math.sqrt(array.length) >= i) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[k] % array[i] === 0) {
                array.splice(k, 1);
                k--;
            }
        }
        i++;
    }
    return array;
}


console.log(simpleNum(1000));



