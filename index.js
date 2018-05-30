function ticTac(firstMove){
  var board = [];
  var xo = 'XO';
  var x = 4;
  var o = 4;

  if (firstMove === 'X') {
    x += 1;
  }else {
    o += 1;
  }

  for (var i = 0; i < 3; i++) {
    var arr1 = [];
    for (var j = 0; j < 3; j++) {
      if (x > 0 || o > 0) {
        if (x === 0) {
          arr1.push(xo[1]);
          o -= 1;
        }else if (o === 0) {
          arr1.push(xo[0]);
          x -= 0;
        }else {
          arr1.push(xo[Math.floor(Math.random()*xo.length)])
          if (arr1[j] === xo[0]) {
            x -= 1;
          }else if (arr1[j] === xo[1]){
            o -= 1;
          }
        }
      }
    }
    board.push(arr1);
  }
  return board;
}

console.log('X first move:');
console.log(ticTac('X'));
console.log('O first move:');
console.log(ticTac('O'));
