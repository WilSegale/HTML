const cells = document.querySelectorAll('.cell');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

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
    let bestScore = -Infinity;
    let bestMove;

    board.forEach((cell, index) => {
        if (cell === '') {
            board[index] = 'O';
            let score = minimax(board, 0, false);
            board[index] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = index;
            }
        }
    });

    if (bestMove !== undefined) {
        updateBoard(bestMove, 'O');
        checkWinner();
        currentPlayer = 'X';
    }
}

function minimax(board, depth, isMaximizing) {
    let winner = checkForWinner();
    if (winner !== null) {
        if (winner === 'O') return 10 - depth;
        if (winner === 'X') return depth - 10;
        return 0; // draw
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        board.forEach((cell, index) => {
            if (cell === '') {
                board[index] = 'O';
                let score = minimax(board, depth + 1, false);
                board[index] = '';
                bestScore = Math.max(score, bestScore);
            }
        });
        return bestScore;
    } else {
        let bestScore = Infinity;
        board.forEach((cell, index) => {
            if (cell === '') {
                board[index] = 'X';
                let score = minimax(board, depth + 1, true);
                board[index] = '';
                bestScore = Math.min(score, bestScore);
            }
        });
        return bestScore;
    }
}

function checkForWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // return 'X' or 'O'
        }
    }
    if (!board.includes('')) return 'Draw';
    return null; // no winner yet
}

// Reset Game
document.getElementById('reset').addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.innerText = '');
    gameActive = true;
    currentPlayer = 'X';
});

cells.forEach(cell => cell.addEventListener('click', handleCellClick));