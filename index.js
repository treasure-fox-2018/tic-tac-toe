function tictactoe(row,col) {
  // var xo = ['x','x','x','x','x','o','o','o','o']
  var count = row*col
  var x = Math.floor(count/2)
  var o = count - x
  // console.log(x);
  // console.log(o);
  var xo = ['x','o']
  var arr = []
  for (var i = 0; i < row; i++) {
    var temp = []
    for (var j = 0; j < col; j++) {
      var idx = Math.floor(Math.random()*xo.length)
      if (xo[idx]==='x') {
        x--;
        if (x<0) {
          temp.push("o")
        }
        else {
          temp.push(xo[idx])
        }
      }
      else {
        o--;
        if (o<0) {
          temp.push("x")
        }
        else {
          temp.push(xo[idx])
        }
      }
    }
    arr.push(temp)
  }
  return arr;
}

console.log(tictactoe(3,3));
