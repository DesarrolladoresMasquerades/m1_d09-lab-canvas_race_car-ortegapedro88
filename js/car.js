class Car {
  constructor(ctx) {
    this.ctx = ctx;

    this.carImg = {
      img: new Image(),
      width: 80,
      height: 160,
      x: 210,
      y: 460,
      vx: 0,
    };
    this.carImg.img.src = "/images/car.png";
  }

  collidesWith(object) {
    for (let i = 0; i < object.length; i++) {
      return (
        this.x < object[i].x + object[i].width &&
        this.x + this.width > object[i].x &&
        this.y < object[i].y + object[i].height &&
        this.y + this.height > object[i].y
      );
    }
  }

  draw() {
    this.ctx.drawImage(
      this.carImg.img,
      this.carImg.x,
      this.carImg.y,
      this.carImg.width,
      this.carImg.height
    );
  }
}
