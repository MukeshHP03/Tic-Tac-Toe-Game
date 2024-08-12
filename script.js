let board = document.getElementById('board');
const cells = Array.from({length: 9}).fill(null);
let winner = null;
let currentPlayer = 'X';

function render(){
    board.innerHTML = '';
    cells.forEach((value, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = value ;
        cell.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cell);
    })
}