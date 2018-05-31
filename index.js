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
                x++ 
                if(x <=5){
                    childArr.push(check)
                }else{
                    childArr.push('O')
                    o++
                    x--
                }                      
            }else if(check === 'O'){
                o++
                if(o <= 5){
                    childArr.push(check)
                }else{
                    childArr.push('X')
                    x++
                    o--
                }
            }
        }
        mainArr.push(childArr)
        childArr = []

    }
    
    return mainArr
    
}

console.log(ticTacToe(3,3))
