function tic_tac_toe(num1, num2){
    
    function generatePin(X,O){
        let arr = []  
        for(let i = 0; i < X; i++ ){
            arr.push('X')
        }

        for(let i = 0; i < O; i++ ){
            arr.push('O')
        }
        return arr;
    }

    let x = Math.floor(num1*num2/2)
    let o = Math.ceil(num1*num2/2)

    let pins = generatePin(x,o)
    
    //generate board
    let boardTicTacToe = [];
    for(let rw = 0; rw < num1; rw++){
        boardTicTacToe.push([]);
        for(let cl = 0; cl < num2; cl++){
            let random = Math.floor(Math.random()*pins.length)
            boardTicTacToe[rw].push(pins[random])
            pins.splice(random, 1)
        }
    }
    return boardTicTacToe;
}


console.log(tic_tac_toe(3,3))