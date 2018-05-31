function randomTicTacToe(board) {
  const tictactoe = 'XO'
  let gameBoardTicTacToe = []

  for (let a = 0; a < board; a++) {
    var isiBoard = []
    for (let b = 0; b < board; b++) {
      isiBoard.push(tictactoe[Math.floor(Math.random() * 2)])
    }
    gameBoardTicTacToe.push(isiBoard)
  }
  return gameBoardTicTacToe
}

function gameTicTacToe(board) {
  let hurufX = 0
  let hurufO = 0
  let game = randomTicTacToe(3)
  for (let a = 0; a < game.length; a++) {
    for (let b = 0; b < game[a].length; b++) {
      if (game[a][b] === 'X') {
        hurufX++
        if (hurufX > 5) {
          game[a][b] = 'O'
        }
      } else if (game[a][b] === 'O') {
        hurufO++
        if (hurufO > 5) {
          game[a][b] = 'X'
        }
      }  
    }
  }

  console.log(game)
}
gameTicTacToe()