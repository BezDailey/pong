/**
 * Represents a paddle in the Pong game.
 */
export class Paddle {
  /**
   * Creates a new Paddle instance.
   * @param {number} x - The x-coordinate of the paddle.
   * @param {number} y - The y-coordinate of the paddle.
   * @param {number} width - The width of the paddle.
   * @param {number} height - The height of the paddle.
   * @param {number} speed - The speed of the paddle.
   */
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.score = 0;
  }

  /**
   * Draws the paddle on the canvas.
   * @param {CanvasRenderingContext2d} ctx - The rendering context.
   */
  draw(ctx) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Moves teh paddles to a specified y-coordinate.
   * @param {number} y - The new y-coordinate of the paddle.
   */
  move(y) {
    this.y = y; 
  }

  /**
   * Moves the paddle automatically to track ball.
   * @param {Ball} ball - The ball in the game.
   */
  aiMove(ball) {
    if (ball.y < this.y + this.height / 2) {
      this.y -= this.speed;
    } else {
      this.y += this.speed;
    }
  }
}
