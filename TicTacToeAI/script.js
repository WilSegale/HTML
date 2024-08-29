// script.js
const cells = document.querySelectorAll('.cell');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = 1;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (board[index] !== '' || !gameActive) return;
    updateBoard(index, currentPlayer);
    checkWinner();
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') aiMove();
    }
}

function updateBoard(index, player) {
    board[index] = player;
    cells[index].innerText = player;
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`${currentPlayer} wins!`);
        gameActive = false;
    } else if (!board.includes('')) {
        alert('Draw!');
        gameActive = false;
    }
}

function aiMove() {
    let availableCells = [];
    board.forEach((cell, index) => {
        if (cell === '') availableCells.push(index);
    });

    if (availableCells.length > 0) {
        const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
        updateBoard(randomIndex, 'O');
        checkWinner();
        currentPlayer = 'X';
    }
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));