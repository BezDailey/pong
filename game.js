const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Create ball and paddles
const ball = new Ball(canvas.width / 2, canvas.height / 2, 10, 4, 4);
const player = new Paddle(10, (canvas.height - 100) / 2, 10, 100, 8);
const ai = new Paddle(canvas.width - 20, (canvas.height - 100) / 2, 10, 100, 8);

function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText(`Player: ${player.score}`, 50, 20);
  ctx.fillText(`AI: ${ai.score}`, canvas.width - 50, 20);
}

function gameLoop() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw everything
  ball.draw(ctx);
  player.draw(ctx);
  ai.draw(ctx);
  drawScore();

  // Update game state
  ball.update(canvas, player, ai);
  ai.aiMove(ball, canvas);

  // Request the next frame
  requestAnimationFrame(gameLoop);
}

// Function to move player paddle based on mouse movement
function movePlayerPaddle(event) {
  const rect = canvas.getBoundingClientRect();
  player.move(event.clientY - rect.top - player.height / 2);
}

// Add event listener for player paddle movement
canvas.addEventListener("mousemove", movePlayerPaddle);

// Start the game loop
gameLoop()
