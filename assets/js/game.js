document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const scoreDisplay = document.querySelector(".score");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0;
  let foodIndex = 0;
  let currentSnake = [2, 1, 0]; // grid 2 is the head, grid 0 is the tail and grid 1 is the body
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  //to start and restart game
  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[foodIndex].classList.remove("food");
    clearInterval(interval);
    score = 0;
    randomFood();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  // functions for all over actions for the snake
  function moveOutcomes() {
    // deals with snake hitting the border and itself
    if (
      (currentSnake[0] + width >= width * width && direction === width) || // if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || // if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || // if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || // if the snake hits the top
      squares[currentSnake[0] + direction].classList.contains("snake") // if the snake goes into itself
    ) {
      return clearInterval(interval); // clears interval if anything above happens
    }

    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    // deals with snake getting food
    if (squares[currentSnake[0]].classList.contains("food")) {
      squares[currentSnake[0]].classList.remove("food");
      squares[tail].classList.add("snake");
      currentSnake.push(tail);
      randomFood();
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed;
      intervalTime = setInterval(moveOutcomes, intervalTime);
    }

    squares[currentSnake[0]].classList.add("snake");
  }

  // generate new food when food is eaten

  function randomFood() {
    do {
      foodIndex = Math.floor(Math.random() * squares.length);
    } while (squares[foodIndex].classList.contains("snake")); // this makes sure food doesnt get put where snake is
    squares[foodIndex].classList.add("food");
  }

  //functions for key codes

  function control(e) {
    squares[currentIndex].classList.remove("snake");

    if (e.keycode === 39) {
      direction = 1; // pressing right on keyboard, snake goes right
    } else if (e.keycode === 38) {
      direction = -width; // pressing up arrow, snake will go back 10 divs appearing to go up
    } else if (e.keycode === 37) {
      direction = -1; // if pressing left arrow, snake goes left
    } else if (e.keycode === 40) {
      direction = +width; // pressing the down arrow moves the snake 10 divs forward making it look like it goes down
    }
  }

  document.addEventListener("keyup", control);
  startBtn.addEventListener("click", startGame);
});
function foodStart(randomFood) {
    randomFood();
}

