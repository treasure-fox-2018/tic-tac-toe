function nestedArr() {
  let xo = 'XO'
  let mainArr = []
  for (let a = 0; a < 3; a++) {
    let fillerArr = []
    mainArr.push(fillerArr)
    for (let b = 0; b < 3; b++) {
      mainArr[a].push(xo[Math.floor((Math.random() * xo.length))])
    }
  }
  let countX = 0
  let countO = 0
  for (let c = 0; c < mainArr.length; c++) {
    for (let d = 0; d < mainArr[c].length; d++) {
      if (mainArr[c][d] === 'X') {
        countX++
        if (countX > 5) {
          mainArr[c][d] = 'O'
        }
      } else if (mainArr[c][d] === 'O'){
        countO++
        if (countX > 5) {
          mainArr[c][d] = 'X'
        }
      }
    }
  }
  return mainArr
}

console.log(nestedArr())