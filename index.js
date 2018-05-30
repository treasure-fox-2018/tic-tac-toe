function ticTacToe() {
  var arr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]

  var numberOfX = 0;
  var numberOfO = 0;
  for (var i = 0; i < arr.length; i++) {
    var arrAccess = arr[i]
    for (var j = 0; j < arrAccess.length; j++) {
      var randomXO = randomCharacter()
      if (randomXO === "X") {
        numberOfX ++
      } else {
        numberOfO ++
      }

      if (numberOfX > 5) {
        arrAccess[j] += "O";
        numberOfO ++
      } else if (numberOfO > 5) {
        arrAccess[j] += "X";
        numberOfX ++
      } else {
        arrAccess[j] += randomXO;
      }
    }
  }
  // console.log(numberOfO, numberOfX);
  return arr;
}

function randomCharacter() {
  var alphabet = "0X";
  var str = "";
  str += alphabet.charAt(Math.trunc(Math.random() * alphabet.length));
  return str;
}

console.log(ticTacToe());
