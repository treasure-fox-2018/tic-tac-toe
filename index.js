function ticTacToe(jumlahRow,jumlahCol){
  var arrMain =[]
  var strXO = "XO"
  var countX = 0
  var countO = 0
  for(let i = 0; i<jumlahRow; i++ ){
    var arrRow = [];
    for(var j = 0; j<jumlahCol; j++){
      let random = Math.random()*(strXO.length-1)
      let randomXO = strXO[Math.round(random)]

      if(randomXO === "X"){
        if(countX <= 4){
          arrRow.push(randomXO)
          countX++
        }else {
          arrRow.push(randomXO)
          countO++
        }
      }

      if(randomXO === "O"){
        if(countO <= 4){
          arrRow.push(randomXO)
          countO++
        }else{
          arrRow.push(randomXO)
          countX++
        }
      }

    }
    arrMain.push(arrRow);
  }
  console.log(arrMain)
  console.log(countO)
  console.log(countX)
}

console.log(ticTacToe(3,3))
