let board = document.getElementById('board');
const cells = Array.from({length: 9}).fill(null);
let winner = null;
let currentPlayer = 'X';

function handleCellClick(index){
    if(winner || cells[index]) return;
    cells[index] = currentPlayer;
    render();
    winner = checkWinner();
    if(winner){
        setTimeout(() => {
            alert(`The Winner is ${winner}`);
           resetGame();
        }, 100)
    }
    else if(!cells.includes(null)){
        setTimeout(() => {
            alert(`It's a Tie`);
           resetGame();
        }, 100)

    }
    else currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner(){
    const winnerConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let conditions of winnerConditions){
        const[a, b, c] = conditions;
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) 
            return cells[a];
    }
    return null;
}

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

function resetGame(){
    cells.fill(null);
    winner = null;
    currentPlayer = 'X';
    render();
}
render();