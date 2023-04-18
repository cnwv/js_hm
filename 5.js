// 5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i <= 10000; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += 'x';
    }
    console.log(row);
}

