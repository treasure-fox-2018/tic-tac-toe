// function ticTacToe(size) {
//   var dictionary = ['o','x'];
//   var arrParent = [];
//
//   for (var i = 0; i < size; i++) {
//     var newArr = [];
//     for (var j = 0; j < size; j++) {
//       var randomXO = dictionary[Math.floor(Math.random() * dictionary.length)];
//       newArr.push(randomXO);
//     }
//     arrParent.push(newArr);
//   }
//   return arrParent;
// }
// console.log(ticTacToe(3));

function ticTacToe(size) {
  var panjang = size * size;
  var arrXO = [];
    for (var i = 0; i < panjang-1; i++) {
      if (i % 2 == 0) {
        arrXO.push('x');
      }else {
        arrXO.push('o');
      }
    }
  var indexTerakhir = 'xo'.charAt(Math.floor(Math.random() * 2));
  arrXO.push(indexTerakhir);

  for (var i = 0; i < arrXO.length; i++) {
    var random = Math.floor(Math.random() * arrXO.length);
    var swap = arrXO[i];
    arrXO[i] = arrXO[random];
    arrXO[random] = swap;
  }

  var arrParent = [];
  var newArr = []
  for (var i = 0; i < arrXO.length; i++) {
    newArr.push(arrXO[i]);
    if (newArr.length === 3) {
      arrParent.push(newArr);
      newArr = []
    }
  }
  return arrParent
}
console.log(ticTacToe(3));
