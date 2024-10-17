# Pong Game

A simple Pong game built using JavaScript and HTML5 canvas.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Game Controls](#game-controls)
- [Project Structure](#project-structure)
- [Customization](#customization)

## Features
- Classic Pong game mechanics
- Player vs. AI gameplay
- Real-time collision detection
- Score tracking for both the player and AI
- Smooth animations using the HTML5 Cancas API

## Getting Started
To get started with this project, simply clone the repository and open `index.html` in a web browser.

### Prerequisites
You need a modern web browser to run the game, such as:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Installation
1. Clone the repository.
2. Navigate to the project folder.
3. Open `index.html` in your preferred web browser.

## Game Controls
- Move the mouse up and down to control the player's paddle on the left side of the screen.
- The AI controls the paddle on the right side of the screen.

## Project Structure
```bash
pong-game/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling the game
├── ball.js          # JavaScript class for the Ball object
├── paddle.js        # JavaScript class for the Paddle object
└── game.js          # Main game logic and initialization
```

### File Descriptions
- `index.html`: Sets up the HTML structure and includes the necessary CSS and JavaScript files.
- `styles.css`: Contains styles for the canvas element.
- `ball.js`: Defines the `Ball` class, which handles the ball's properties, drawing, movement, and collision logic.
- `paddle.js`: Defines the `Paddle` class, which handles paddle properties, drawing, and movement.
- `game.js`: Contains the main game logic including initialization, game loop, user input handling, and score display.

## Customization
You can customize various aspects of the game, such as:
- **Ball speed**: Modify the `speedX` and `speedY` values in the `Ball` class.
- **Paddle size**: Change the `width` and `height` of the player and AI paddles in `game.js`.
- **Canvas dimensions**: Updates the `width` and `height` attributes of the `<canvas>` element in `index.html`.


