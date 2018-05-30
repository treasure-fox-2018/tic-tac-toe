function  ticTacToe(jumlahRow,jumlahCol) {
  let arrOutside = [];
  let countX = 0;
  let countO = 0
  for(let i=0; i<jumlahRow; i++){
    arrOutside.push([])
    var randomXO = "XO";
    for(let j=0; j<jumlahCol; j++){
      arrOutside[i].push(randomXO.charAt(Math.floor(Math.random() * randomXO.length)));
      if(arrOutside[i][j] === "X"){
        countX++
        if(countX >= 4){
          randomXO = "O"
        }
      }else if (arrOutside[i][j] === "O") {
        countO++
        if(countO >= 4){
          randomXO = "X"
        }
      }
    }
  }
  // console.log(countO)
  // console.log(countX)
  // console.log(randomXO)
  return arrOutside
}

console.log(ticTacToe(3,3));
