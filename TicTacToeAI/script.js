let board = ['', '', '', '', '', '', '', '', '']; // Represents the game board as an array of 9 empty strings
let currentPlayer = 'X'; // Player starts as 'X'
let gameActive = true; // Game status flag to track if the game is ongoing

// Win conditions: These are the index positions that represent winning combinations
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM elements
const messageElement = document.getElementById('message'); // Message element to display game results
const difficultyElement = document.getElementById('difficulty'); // Select dropdown to choose difficulty

// This function handles when a player (or AI) makes a move
function makeMove(index) {
    // If the game is over or the cell is already filled, return early
    if (!gameActive || board[index] !== '') return;

    // Update the board array with the current player's symbol
    board[index] = currentPlayer;
    // Display the player's move on the game board in the corresponding cell
    document.getElementById(`cell-${index}`).innerText = currentPlayer;

    // Check if the current player has won
    if (checkWin()) {
        messageElement.innerText = `Player ${currentPlayer} Wins!`; // Display win message
        gameActive = false; // End the game
        return;
    }

    // Check if the board is full and it's a draw
    if (board.every(cell => cell !== '')) {
        messageElement.innerText = 'Draw!'; // Display draw message
        gameActive = false; // End the game
        return;
    }

    // Switch the current player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // If it's the AI's turn (player 'O'), make the computer move
    if (currentPlayer === 'O') {
        setTimeout(() => computerMove(), 100); // Add a short delay for AI's move for better UX
    }
}

// Function to handle the computer's move based on difficulty
function computerMove() {
    let move;

    // Use minimax algorithm for 'hard' difficulty, otherwise random move for 'easy'
    if (difficultyElement.value === 'hard') {
        move = getBestMove(); // Hard difficulty (AI makes the best possible move)
    } else {
        move = getRandomMove(); // Easy difficulty (AI picks a random available move)
    }

    // If a valid move is found, place the AI's move
    if (move !== -1) {
        board[move] = 'O'; // Update the board with AI's move
        document.getElementById(`cell-${move}`).innerText = 'O'; // Display AI's move
    }

    // Check if AI won
    if (checkWin()) {
        messageElement.innerText = 'Computer Wins!'; // Display AI win message
        gameActive = false; // End the game
        return;
    }

    // Check if the board is full and it's a draw
    if (board.every(cell => cell !== '')) {
        messageElement.innerText = 'Draw!'; // Display draw message
        gameActive = false; // End the game
        return;
    }

    // Switch back to the player (player 'X')
    currentPlayer = 'X';
}

// Function to get a random available move for easy difficulty
function getRandomMove() {
    // Get all available moves (empty cells) on the board
    let availableMoves = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    // Return a random move from the available ones
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}

// Function to get the best move for hard difficulty using the minimax algorithm
function getBestMove() {
    let bestScore = -Infinity; // Start with the worst possible score
    let move = -1; // Initialize move with an invalid value

    // Loop through all cells to find the best move for AI
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') { // If the cell is empty
            board[i] = 'O'; // Temporarily set AI's move
            let score = minimax(board, 0, false); // Run minimax to evaluate this move
            board[i] = ''; // Undo the move after evaluation
            if (score > bestScore) { // If this move is better than the current best
                bestScore = score; // Update best score
                move = i; // Set the best move to this index
            }
        }
    }
    return move; // Return the best move found
}

// Minimax algorithm: recursively evaluates moves to maximize AI's score and minimize player's score
function minimax(board, depth, isMaximizing) {
    let winner = checkWin(); // Check if there's a winner
    if (winner === 'O') return 10 - depth; // AI wins, higher score the faster the win
    if (winner === 'X') return depth - 10; // Player wins, worse for AI, so lower score the faster the loss
    if (board.every(cell => cell !== '')) return 0; // If it's a draw, score is 0

    if (isMaximizing) {
        // AI's turn (maximize)
        let bestScore = -Infinity; // Start with the worst possible score for maximizing
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') { // If the cell is empty
                board[i] = 'O'; // AI places a move
                let score = minimax(board, depth + 1, false); // Recursively evaluate this move
                board[i] = ''; // Undo the move
                bestScore = Math.max(score, bestScore); // Keep the maximum score
            }
        }
        return bestScore;
    } else {
        // Player's turn (minimize)
        let bestScore = Infinity; // Start with the worst possible score for minimizing
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') { // If the cell is empty
                board[i] = 'X'; // Player places a move
                let score = minimax(board, depth + 1, true); // Recursively evaluate this move
                board[i] = ''; // Undo the move
                bestScore = Math.min(score, bestScore); // Keep the minimum score
            }
        }
        return bestScore;
    }
}

// Function to check if the game has been won
function checkWin() {
    // Loop through each win condition
    for (let condition of winConditions) {
        const [a, b, c] = condition; // Destructure the condition array into three positions
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { // Check if the three cells are the same and not empty
            return board[a]; // Return the winner ('X' or 'O')
        }
    }
    return null; // If no one has won, return null
}

// Function to reset the game to its initial state
function resetGame() {
    board.fill(''); // Clear the game board
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = ''); // Clear the visual cells
    currentPlayer = 'X'; // Set player to 'X' for the next round
    gameActive = true; // Reactivate the game
    messageElement.innerText = ''; // Clear any messages
}