const canvas = document.getElementById("canvas")
const ctx =  canvas.getContext("2d")

const background = new Background (ctx)
const car = new Car (ctx)
const obstacles = new Obstacles (ctx)

const game = new Game (ctx, background, car, obstacles);

const startButton = document.getElementById("start-button")

startButton.onclick = function () {
    game.start();
};

document.addEventListener('keydown', function(event) {
  const key = event.key;

switch (event.key) {
  case "ArrowLeft":
      if(car.carImg.x > 40){
      car.carImg.x -= 10}
      break;
  case "ArrowRight":
    if(car.carImg.x < 390){
      car.carImg.x += 10}
      break;
  case "ArrowUp":
      // Up pressed
      break;
  case "ArrowDown":
      // Down pressed
      break;
}
});

