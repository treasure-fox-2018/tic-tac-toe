function ticTacToe(row,col) {

  let mainBoard = []
  let countX = 0;
  let countO = 0

  for (let i = 0; i < row ; i++) {
    // let rowArr = []
    mainBoard.push([]);
    let abjad = 'XO'

    for (let j = 0; j < col ; j++) {
      mainBoard[i].push(abjad.charAt(Math.floor(Math.random() * abjad.length)));
      if (mainBoard[i][j] == 'X') {
        countX++
        if(countX >= 4){
          abjad = 'O'
        }
      } else if (mainBoard[i][j] == 'O'){
        countO++
        if(countX >= 4){
          abjad ='X'
        }
      }
    }
  }
  console.log(countX)
  console.log(countO)
return mainBoard
}
console.log(ticTacToe(3,3));
// console.log(ticTacToe(5,4));
