function tictactoe (size) {
    let arrpalingLuar = []
    let arrDalam = []
    let arrLuar = []
    let arrRandom = []
    countX = 0
    countO = 0
    var sizeBaru = size*size

    for (let i = 0; i < sizeBaru-1; i++) {
        if (i % 2 === 0) {
            arrDalam.push("X")
        } else {
            arrDalam.push("O")
        }
    }

    var randomXO = "XO".charAt(Math.floor(Math.random()*2))
    arrDalam.push(randomXO)

    for (let k = 0; k < arrDalam.length; k++) {
        let putXO = arrDalam[Math.floor(Math.random() * arrDalam.length)]
        arrRandom.push(putXO)
    }

    for (let j = 0; j < arrRandom.length; j++) {
        arrLuar.push(arrRandom[j])

        if (arrLuar.length === size) {
            arrpalingLuar.push(arrLuar)
            arrLuar = []
        } 
    }
    
    

    // for (let i = 0; i < 3; i ++) {
    //     let arrDalam = []
    //     for (let j = 0; j < 3; j++) {
    //         if(Math.random() <= 0.5) {
    //             arrDalam.push('X')
    //         } else {
    //             arrDalam.push('O')
    //         }
    //     }
    //     arrLuar.push(arrDalam)
    // }

    // for (let k = 0; k < arrDalam.length; k++) {
    //     if (arrDalam[k] === "X") {
    //         countX++
    //     } else if (arrDalam[k] === "O") {
    //         countO++
    //     }
    // }

    
    // console.log(arrDalam)
    // console.log(countX,countO)
    return arrpalingLuar
}

console.log(tictactoe(3))