class Obstacles {
  constructor(ctx) {
    this.ctx = ctx;
    this.y = 0;
    this.x = 0;
  }

  move(frameNumber) {
      this.y += 1;
      }
    
  

  draw(frameNumber) {
    if (frameNumber % 10 === 0) {
      var randomWidth1 = Math.floor(Math.random()* 340 + 80) ;
      var randomWidth2 = Math.floor(Math.random()* 110 + 100)  ;
      var randomX = Math.floor(Math.random()*400)
      this.ctx.fillStyle = 'black';
      if(randomX > 250) this.ctx.fillRect(randomX, this.y, randomWidth2, 40);
      if(randomX >250 && randomX > 100) this.ctx.fillRect(randomX, this.y, randomWidth2, 40);
        else this.ctx.fillRect(randomX, this.y, randomWidth1, 40);
        console.log(randomX, randomWidth1, randomWidth2)
    }
    
  }
}


