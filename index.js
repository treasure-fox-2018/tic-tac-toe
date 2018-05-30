function tictactoe (size) {
  var array = [];
  var huruf = 'XO';

  if (size % 2 === 0) {
    var arrayXO = ('XO'.repeat(Math.floor(size*size/huruf.length)));
  }
  else {
    var arrayXO = ('XO'.repeat(Math.floor(size*size/huruf.length)) + huruf.charAt(Math.floor(Math.random()*huruf.length))).split('');
  }
  

  for (var i = 0; i <= arrayXO.length - 1; i++) {
    var indexRandom = Math.floor(Math.random() * arrayXO.length)
    var sementara = arrayXO[indexRandom];
    arrayXO[indexRandom] = arrayXO[i];
    arrayXO[i] = sementara;
  }
  
  var index = 0;
  for (var i = 0 ; i <= size - 1; i++) {
    array.push([]);
    for (var j = 0; j <= size - 1; j++) {
      array[i].push(arrayXO[index])
      index++;
    }
  }

  return array;
}

console.log(tictactoe(3))
console.log(tictactoe(4))

