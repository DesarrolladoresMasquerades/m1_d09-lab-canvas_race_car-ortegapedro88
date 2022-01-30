class Obstacles {
  constructor(ctx) {
    this.ctx = ctx;
    this.y = 0;
    this.x = 0;
    this.vy = 0;
  }

  move(frameNumber) {
    this.y += this.vy + 1
  }

  draw(frameNumber) {

    for (let i = 0; i < 990; i++) {
      
        this.ctx.fillRect(
        obsArray[i].x,
        this.y-i*500,
        obsArray[i].width,
        obsArray[i].height
      );
      
     }
  }
}
