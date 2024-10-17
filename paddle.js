class Paddle {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.score = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(y) {
    this.y = y; 
  }

  aiMove(ball, canvas) {
    if (ball.y < this.y + this.height / 2) {
      this.y -= this.speed;
    } else {
      this.y += this.speed;
    }
  }
}
