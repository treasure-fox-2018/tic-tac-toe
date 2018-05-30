function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)); //The maximum is exclusive and the minimum is inclusive
}
// console.log(getRandomInt(0, 2))

function ticTacToe(jumX, jumO) {
  var xO = 'XOXOXOXOXOXOXOXOXOXO'
  var resultArr = []
  for (var a = 0; a < 3; a++) {
    var arr = []
    resultArr.push(arr)
    for (var b = 0; b < 3; b++) {
      var randomXO = xO[getRandomInt(0, xO.length - 1)]
      if (jumX > 0 && randomXO === 'X') {
        jumX -= 1
        resultArr[a].push('X')
      } else if (jumO > 0 && randomXO === 'O') {
        jumO -= 1
        resultArr[a].push('O')
      } else if (jumX === 0) {
        resultArr[a].push('O')
      } else if (jumO === 0) {
        resultArr[a].push('X')
      }
    }
  }
  return resultArr
}

console.log(ticTacToe(5, 4))
console.log(ticTacToe(4, 5))