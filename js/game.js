class Game {
    constructor(ctx,background, car, obstacles){
        this.ctx = ctx;
        this.background = background;
        this.car = car;
        this.obstacles = obstacles;
        this.frameNumber = 0;
    }

    start(){
        this.frameNumber += 1;
        this.move();
        this.checkCollisions();
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.draw();
        requestAnimationFrame(this.start.bind(this));
    }

    move() {
        this.obstacles.move(this.frameNumber);
        this.car.move(this.frameNumber);
    }

    draw(){
        this.background.draw();
        this.obstacles.draw(this.frameNumber);
        this.car.draw()
    }

    checkCollisions(){
        let collisions = false



    }


}