function randomTicTacToe(x, o) {
  const tictactoe = 'XO'
  let hurufX = 4
  let hurufO = 4
  const random = tictactoe[Math.floor(Math.random() * 2)]
  let arrTicTacToe = []

  for (let a = 0; a < 3; a++) {
    if (random === 'X') {
      arrTicTacToe.push('X')
      hurufX -= 1
    } else if (random === 'O'){
      arrTicTacToe.push('O')
      hurufO -= 1
    }
  }

  return arrTicTacToe


}

console.log(randomTicTacToe(5, 4))