var tic_tac_toe = () => {
  var XO = 'XO'
  var board = []
  var jumlahX = 0
  var jumlahO = 0
  for(var i = 0; i < 3; i++){
    board.push([])
    for(var j = 0; j < 3; j++){
      var randomXO = XO[Math.round(Math.random())]
      if(randomXO == 'X' && jumlahX < 5){
        board[i].push(randomXO)
        jumlahX++
      }else if(randomXO == 'O' && jumlahO < 5){
        board[i].push(randomXO)
        jumlahO++
      }else if (randomXO == 'O' && jumlahO == 5) {
        randomXO = 'X'
        board[i].push(randomXO)
        jumlahX++
      }else if(randomXO == 'X' && jumlahO == 5){
        randomXO = 'O'
        board[i].push(randomXO)
        jumlahO++
      }
    }
  }
  console.log(board);
}

tic_tac_toe()


//tic_tac_toe 
