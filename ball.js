/**
 * Represents a ball in the Pong game.
 */
export class Ball {
  /**
   * Create a ball.
   * @param {number} x - The initial x-coordinate of the ball.
   * @param {number} y - The initial y-coordinate of the ball.
   * @param {number} radius - The radius of the ball. 
   * @param {number} speedX - The initial speed of the ball in the x direction.
   * @param {number} speedY - The initial speed of the ball in the y direction.
   */
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  /**
   * Draw the vall on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The drawing context of the canvas.
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
  }

  /**
   * Rest the ball to the center of the canvas and reverse its x-direction.
   * @param {HTMLCanvasElement} canvas - The canvas on which the game is drawn.
   */
  reset(canvas) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speedX = -this.speedX;
  }

  /**
   * Update the ball's position, handle collisions with walls and paddles, and track scoring.
   * @param {HTMLCanvasElement} canvas - The canvas on which the game is drawn.
   * @param {Object} player - The player paddle object with position and size properties.
   * @param {Object} ai - The AI paddle object with position, size, and score properties.
   */
  update(canvas, player, ai) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wall collision (top and bottom)
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY;
    }

    // Paddle collision
    if (
      this.x - this.radius < player.x + player.width &&
      this.y > player.y &&
      this.y < player.y + player.height
    ) {
      this.speedX = -this.speedX;
    }

    if (
      this.x + this.radius > ai.x &&
      this.y > ai.y &&
      this.y < ai.y + ai.height
    ) {
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
