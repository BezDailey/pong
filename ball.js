class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }

  reset(canvas) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speedX = -this.speedX;
  }

  update(canvas, player, ai) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wall collision (top and bottom)
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY;
    }

    // Paddle collision
    if (this.x - this.radius < player.x + player.width && this.y > player.y && this.y < player.y + player.height) {
      this.speedX = -this.speedX;
    }
    if (this.x + this.radius > ai.x && this.y > ai.y && this.y < ai.y + ai.height) {
      this.speedX = -this.speedX;
    }

    // Scoring
    if (this.x - this.radius < 0) {
      ai.score++;
      this.reset(canvas);
    } else if (this.x + this.radius > canvas.width) {
      player.score++;
      this.reset(canvas);
    }
  }
}
