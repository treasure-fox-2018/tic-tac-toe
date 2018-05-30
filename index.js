function ticTacToe(row,col) {
  let abjad = 'XO'
  let mainBoard = []


  for (let i = 0; i < row ; i++) {
    let rowArr = []
    mainBoard.push(rowArr);

    for (let j = 0; j < col ; j++) {
      mainBoard[i].push(abjad[(Math.floor(Math.random() * abjad.length))])
    }
  }
return mainBoard
}
console.log(ticTacToe(3,3));
