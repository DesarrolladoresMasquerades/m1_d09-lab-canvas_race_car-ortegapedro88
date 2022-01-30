const canvas = document.getElementById("canvas")
const ctx =  canvas.getContext("2d")

const background = new Background (ctx)
const car = new Car (ctx)
let obsArray = []
const obstacles = new Obstacles (ctx, obsArray)
const game = new Game (ctx, background, car, obstacles);

const startButton = document.getElementById("start-button")

startButton.onclick = function () {
    game.start();
};



for(let i=0;i < 1000;i++){
var randomWidth1 = Math.floor(Math.random()* 250 + 40);
var randomWidth2 = Math.floor(Math.random()* 110 + 100);
var randomX = Math.floor(Math.random()*400)
ctx.fillStyle = 'black';
if(randomX > 250) obsArray.push({x: randomX,y: 0,width: randomWidth2,height: 40});
if(randomX <250 && randomX > 130) obsArray.push({x: randomX,y: 0,width: randomWidth2,height: 40});
if(randomX < 130 ) obsArray.push({x: randomX,y: 0,width: randomWidth1,height: 40});
}
console.log(obsArray)


document.addEventListener('keydown', function(event) {
  const key = event.key;

switch (event.key) {
  case "ArrowLeft":
      if(car.carImg.x > 40){
      car.carImg.x -= 40}
      break;
  case "ArrowRight":
    if(car.carImg.x < 390){
      car.carImg.x += 40}
      break;
  case "ArrowUp":
      obstacles.vy += 10;
      break;
  case "ArrowDown":
     obstacles.vy = 0;
      break;
}
});

