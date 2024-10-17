# Pong Game

A simple Pong game built using modern JavaScript (ES6) and HTML5 Canvas. This project serves as an introduction to game development in JavaScript and demonstrates fundamental concepts such as animation, collision detection, and user input handling. The codebase is documented using JSDoc for better maintainability and understanding.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Game Controls](#game-controls)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [JSDoc Documentation](#jsdoc-documentation)

## Features
- Classic Pong game mechanics
- Player vs. AI gameplay
- Real-time collision detection
- Score tracking for both the player and AI
- Smooth animations using the HTML5 Cancas API
- Modern ES6 syntax with classes and modules
- Code documentation using JSDoc

## Getting Started
To get started with this project, simply clone the repository and use a local development server like `http-server` to serve the game.

### Prerequisites
You need:
- A modern web browser that supports ES6 modules, such as:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
- Node.js installed on your system for running `http-server`

### Installation
1. Clone the repository.
2. Navigate to the project folder:
  ```bash
  cd pong
  ```
3. Install `http-server` globally if you haven't already:
  ```bash
  npm install -g http-server
  ```
4. Start the server:
  ```bash
  npm start
  ```
5. Open your web browser and navigate to the address shown in the terminal

## Game Controls
- Move the mouse up and down to control the player's paddle on the left side of the screen.
- The AI controls the paddle on the right side of the screen.

## Project Structure
```bash
pong/
├── ball.js                # JavaScript class for the Ball object
├── game.js                # Main game logic and initialization
├── index.html             # Main HTML file
├── jsdoc.json             # JSDoc configuration file
├── package.json           # Project configuration and dependencies
├── paddle.js              # JavaScript class for the Paddle object
├── README.md              # This README file
└── styles.css             # CSS for styling the game
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

## JSDoc Documentation
The codebase uses JSDoc for documenting classes and functions. To generate the documentation:
1. Install JSDoc globally:
  ```bash
  npm install -g jsdoc
  ```
2. Generate the documentation:
  ```bash
  jsdoc -c jsdoc.json
  ```
3. The documentation will be generated in the `docs/` directory by default.
