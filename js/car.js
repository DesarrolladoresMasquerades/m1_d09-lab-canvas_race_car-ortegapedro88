class Car {
    constructor(ctx){
        this.ctx = ctx;
     
        this.carImg = {
            img: new Image(),
            width: 80,
            height: 160,
            x: 210,
            y: 460,
            vx: 0
            }
        this.carImg.img.src = "/images/car.png"
      }
      

      move(){
        // this.carImg.x += this.carImg.vx;
    
      }


      draw(){ 
        
      this.ctx.drawImage(
          this.carImg.img,
          this.carImg.x,
          this.carImg.y,
          this.carImg.width,
          this.carImg.height
          )        
      }
     
  }

