function tic_tac_toe(){
	var character = 'XO'
	var tictactoeBoard = []

	var xCounter = 0
	var oCounter = 0
	for(var i = 0; i < 3; i++){
		var tictactoeRow = []

		for(var j=0; j < 3; j++){

			var randomXO = character.substr(Math.floor(Math.random()*character.length), 1)

			if(randomXO === 'X' && xCounter > 4){
				xCounter += 1
				tictactoeRow.push('O')
			} else if(randomXO === 'O' && oCounter > 4){
				xCounter += 1
				tictactoeRow.push('X')
			} else if(randomXO === 'X' && xCounter < 5){
				xCounter += 1
				tictactoeRow.push(randomXO)
			} else if(randomXO === 'O' && oCounter < 5){
				oCounter += 1
				tictactoeRow.push(randomXO)
			} 
		}
		tictactoeBoard.push(tictactoeRow)
	}

	
	return tictactoeBoard;
}

console.log(tic_tac_toe())