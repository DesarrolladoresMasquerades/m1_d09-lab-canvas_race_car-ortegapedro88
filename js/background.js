class Background {
    constructor(ctx){
      this.ctx = ctx;
      this.backgroundImg = {
          img: new Image(),
          width: this.ctx.canvas.width,
          height: this.ctx.canvas.height,
          x: 0,
          y: 0,
          }
      this.backgroundImg.img.src = "images/road.png"
    }
    

    draw(){

    this.ctx.drawImage(
        this.backgroundImg.img,
        this.backgroundImg.x,
        this.backgroundImg.y,
        this.backgroundImg.width,
        this.backgroundImg.height
        )        
    }
}