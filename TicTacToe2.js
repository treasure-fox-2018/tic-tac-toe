function tictactoe() {
    let board = [];
    let player = 'XO';
    let countX = 0;
    let countO = 0;
    
    for(let i = 0; i < 3; i++) {
        board.push([]);
        for(let j = 0; j < 3; j++) {
            let rnd = Math.floor(Math.random()*2);
            if(player[rnd] == 'X' && countX != 5) {
                board[i].push(player[rnd]);
                countX++;
            } else if(player[rnd] == 'O' && countO != 5) {
                board[i].push(player[rnd]);
                countO++;
            } else {
                board[i].push('X');
                countX++;
            }
        }
    }

    return board;
}

console.log(tictactoe())