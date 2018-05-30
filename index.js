function tictactoe () {

    let arrLuar = []

    for (let i = 0; i < 3; i ++) {
        let arrDalam = []
        for (let j = 0; j < 3; j++) {
            if(Math.random() <= 0.5) {
                arrDalam.push('X')
            } else {
                arrDalam.push('O')
            }
        }
        arrLuar.push(arrDalam)
    }

    return arrLuar
}

console.log(tictactoe())