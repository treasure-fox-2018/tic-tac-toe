function ticTacToe (colRow) {
    var mainBoard = [];
    var player = 'xo';

    for (let i = 0; i < colRow; i++) {
        let rowArr = [];
        mainBoard.push(rowArr);
        for (let j = 0; j < colRow; j++) {
            mainBoard[i].push(player[Math.floor(Math.random() * player.length)]);
        }
    }
    let xCounter = 0;
    let oCounter = 0;
    for (let a = 0; a < mainBoard.length; a++) {
        for (let b = 0; b < mainBoard[a].length; b++) {
            if (mainBoard[a][b] === 'o') {
                oCounter++;
                if (oCounter > 5) {
                    mainBoard[a][b] = 'x';
                }
            } else if (mainBoard[a][b] === 'x') {
                xCounter++;
                if (xCounter > 5) {
                    mainBoard[a][b] = 'o';
                }
            }
        }
    }
    return mainBoard;
}

console.log(ticTacToe(3));