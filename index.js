const ticTacToeMake = (letsGoMakeTicTacToe => {
    let random = 'XO';
    let result = '';
    let count = '0 0';
    const ticTacToeBoard = [[],[],[]]
    let insertStart = 0;
    
    function ticTacCounter(string){
        let counterX = 0;
        let counterO = 0;
        for(let z = 0; z < string.length; z++){
            if(string[z] === 'X'){
                counterX++;
            }
            if(string[z] === 'O'){
                counterO++;
            }
        }
        return `${counterX} ${counterO}`
    }
    while(Number(count[0]) !== 4 && Number(count[0]) !== 5 || Number(count[0]) !== 5 && Number(count[0]) !== 4){
        result = '';
        for(let z = 0; z < 9; z ++){
            result += random[Math.floor(Math.random()*2)]
             }
             count = ticTacCounter(result)
    }
    
    for(let z = 0; z < result.length; z ++){
        ticTacToeBoard[insertStart].push(result[z]);
        insertStart++;
        if(insertStart > 2){
            insertStart = 0;
        }
    }
    console.log(ticTacToeBoard)
    
})

ticTacToeMake()