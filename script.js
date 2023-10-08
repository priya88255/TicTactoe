let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(row, col) {
    if (gameBoard[row * 3 + col] === '' && gameActive) {
        gameBoard[row * 3 + col] = currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].textContent = currentPlayer;
        
        if (checkWinner(currentPlayer)) {
            document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (!gameBoard.includes('')) {
            document.getElementById('message').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner(player) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    return winningCombos.some(combination => {
        return combination.every(index => gameBoard[index] === player);
    });
}

function resetBoard() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('message').textContent = '';
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
}

resetBoard();
