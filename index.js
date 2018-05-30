function tictactoe() {
  let fill = 'XO'
  var countX = 0
  var countO = 0

  let outside = []
  let inside = []

  for (let i = 0; i < 3; i++) {
    outside = []
    for (let j = 0; j < 3; j++) {
      let fillArr = Math.floor(Math.random() * fill.length);
      let value = fill[fillArr]

      if (countX >= 5) {
        outside.push('O')
      } else if (countO >= 5) {
        outside.push('X')
      } else {
        outside.push(value);
      }

      if (value === 'X') {
        countX++;
      } else {
        countO++;
      }
    }

    inside.push(outside)
  }


  return inside




}
console.log(tictactoe())
