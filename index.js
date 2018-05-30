/**
 * @function tic_tac_toe
 * membuat array multidimensi permainan tic tac toe
 * @param {integer} rowCol jumlah baris dan kolom yang terbuat @param {string} winner menentukan karakter yang menang o atau x
 * @returns {array} mengembalikan array multidimensi berisi permainan tic tac toe yang sudah terisi
**/


function tic_tac_toe(rowCol, winner) {
    var rowArr = [];
    var tictacCharacter = ['o', 'x'];

    if (rowCol !== 3) {
        return 'Invalid board length!';
    }

    if (winner === 'o') {
        var countO = 5;
        var countX = 4;
    } else {
        var countO = 4;
        var countX = 5;
    }

    for (let i = 0; i < rowCol; i++) {
        let colArr = [];

        for (let j = 0; j < rowCol; j++) {
            let randomTicTacIndex = Math.floor((Math.random() * 2) + 0);
            if (tictacCharacter[randomTicTacIndex] === 'o' && countO > 0) {
                colArr.push(tictacCharacter[randomTicTacIndex]);
                countO -= 1;
            } else if (tictacCharacter[randomTicTacIndex] === 'x' && countX > 0) {
                colArr.push(tictacCharacter[randomTicTacIndex]);
                countX -= 1;
            } else {
                if (tictacCharacter[randomTicTacIndex] === 'x') {
                    colArr.push(tictacCharacter[0]);
                } else if (tictacCharacter[randomTicTacIndex] === 'o') {
                    colArr.push(tictacCharacter[1]);
                }
            }
        }
        rowArr.push(colArr);
    }

    return rowArr;c
}

console.log(tic_tac_toe(3, 'o'));
