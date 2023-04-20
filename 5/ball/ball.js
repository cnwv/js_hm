
const ball = document.querySelector('#ball');
let speedY = 0;
let gravity = 5;

console.log(ball)

let isMove = false;

function fall() {
    if(ball.offsetTop < 600 && !isMove){
        speedY += gravity;
        gravity++;
        ball.style.top = ball.offsetTop + gravity + 'px';
    }
}

ball.addEventListener('mousedown', () => isMove = true)
ball.addEventListener('mouseup', () => {
    isMove = false;
    gravity = 5;
})

document.addEventListener('mousemove', (e) => {
    if(isMove) {
        ball.style.top = (e.pageY - 25) + 'px'
        ball.style.left = (e.pageX - 25) + 'px'
    }
})

setInterval(fall, 50)