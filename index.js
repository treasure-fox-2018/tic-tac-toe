function ticTacToe(numRows, numCols){
    let mainArr = []
    let childArr = []
    let xo = 'XO'
    let check = ''
    let x = 0
    let o = 0
    for(var i = 0; i < numRows; i++){
        for(var j = 0; j < numCols; j++){
            check = xo[Math.floor(Math.random()*2)]     // j = 0; x x= 1        child = x x
            if(check === 'X'){                          // j = 1; x x = 2
                x++                                     // j = 2; 0 0 = 1       child = x x o
            }else {
                o++
            }

            if(check === 'O' && o <= 3){
                childArr.push(check)
            }else if(check === 'X' && x <= 3){
                childArr.push(check)
            }
            
        }
        mainArr.push(childArr)
        childArr = []
        o = 0
        x = 0

    }

    for(var i = 0; i < mainArr.length; i++){
        for(var j = 0; j < mainArr[i].length;j++)
        if(mainArr[i][j] === 'X'){
            x++
            if( x >= 6){
                mainArr[i][j] = 'O'
            }
        }else if(mainArr[i][j] === 'O'){
            o++
            if( o >= 6){
                mainArr[i][i] = 'X'
            }
        }
    }
    return mainArr
    
}

console.log(ticTacToe(3,3))
