document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll ('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let foodIndex = 0
    let currentSnake = [2,1,0] // grid 2 is the head, grid 0 is the tail and grid 1 is the body
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if(e.keycode === 39) {
            direction = 1 // pressing right on keyboard, snake goes right
        } else if (e.keycode === 38) {
            direction = -width // pressing up arrow, snake will go back 10 divs appearing to go up
        } else if (e.keycode === 37) {
            direction = -1 // if pressing left arrow, snake goes left 1
        } else if (e.keycode === 40) {
            direction = +width // pressing the down arrow moves the snake 10 divs forward making it look like it goes down
        }
    }

    document.addEventListener('keyup', control)

})