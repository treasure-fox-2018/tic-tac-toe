function generateTicTacToe() {
  let board = [];
  let dict = "XO";
  let count = { x: 0, o: 0 };

  for(let i = 0; i < 3; i++) {
    let column = [];
    for (let j = 0; j < 3; j++) {
      let randomNumber = Math.floor(Math.random() * dict.length);
      if (count.x === 5) {
        column.push(dict[1]);
      } else if (count.o === 5) {
        column.push(dict[0]);
      } else {
        column.push(dict[randomNumber]);
        dict[randomNumber] === dict[0] ? count.x += 1 : count.o += 1
      }
    }
    board.push(column)
  }
  return board;
}

console.log(generateTicTacToe())