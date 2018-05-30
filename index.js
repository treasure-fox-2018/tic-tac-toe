function tictactoe(row,col){
    var ox = ['x','o']
    var hasil =[]
    let countX = 0
    let countO = 0
    for(let i=0;i<3;i++){
       let tampung =[]
        for(let j=0;j<3;j++){
            var random = ox[(Math.floor(Math.random() * ox.length))]
            if(random == 'x' && countX !== 5){
                countX++
            }else if(random == 'o' && countO !== 5){
                countO++
            }else if(countX == 5){
                random = 'o'
            }
            else if(countO == 5){
                random = 'x'
            }
            tampung.push(random)
        }
        hasil.push(tampung)
    }
return hasil
}

console.log(tictactoe(3,3))