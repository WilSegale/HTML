// Define the initial game state
let gameState = {
  location: "start",
  inventory: [],
  score: 0,
  gameOver: false
};

// Function to update the game text on the HTML page
function renderGameText(text) {
  const gameTextElement = document.getElementById("game-text");
  gameTextElement.innerHTML = text;
}

// Function to handle user input
function processInput() {
  if (gameState.gameOver) {
    renderGameText("The game is over. Refresh the page to play again.");
    return;
  }

  const userInput = document.getElementById("user-input").value;
  // Call the appropriate game action function based on user input
  if (gameState.location === "start") {
    handleStartLocation(userInput);
  } else if (gameState.location === "forest") {
    handleForestLocation(userInput);
  } else if (gameState.location === "cave") {
    handleCaveLocation(userInput);
  } else {
    renderGameText("Invalid location.");
  }

  // Clear the input field after processing
  document.getElementById("user-input").value = "";

  // Check for game over condition
  if (gameState.gameOver) {
    renderGameText("Game Over! Your score: " + gameState.score);
  }
}

// Function to handle actions in the start location
function handleStartLocation(input) {
  if (input === "look") {
    renderGameText("You are in a dark room. There is a door in front of you.");
  } else if (input === "open door") {
    gameState.location = "forest";
    renderGameText("You open the door and enter the forest.");
  } else {
    renderGameText("Invalid action.");
  }
}

// Function to handle actions in the forest location
function handleForestLocation(input) {
  if (input === "look") {
    renderGameText("You are in a dense forest. There is a path leading deeper into the woods.");
  } else if (input === "take key") {
    gameState.inventory.push("key");
    renderGameText("You pick up a rusty key.");
  } else if (input === "use key") {
    if (gameState.inventory.includes("key")) {
      gameState.location = "cave";
      renderGameText("You use the key to unlock the cave entrance.");
    } else {
      renderGameText("You don't have a key.");
    }
  } else {
    renderGameText("Invalid action.");
  }
}

// Function to handle actions in the cave location
function handleCaveLocation(input) {
  if (input === "look") {
    renderGameText("You are in a dark cave. There is a treasure chest in the corner.");
  } else if (input === "open chest") {
    if (gameState.inventory.includes("key")) {
      gameState.score += 10;
      gameState.gameOver = true;
      renderGameText("Congratulations! You found the treasure chest and earned 10 points.");
    } else {
      renderGameText("The chest is locked.");
    }
  } else {
    renderGameText("Invalid action.");
  }
}

// Initial game text
renderGameText("Welcome to the game!");
