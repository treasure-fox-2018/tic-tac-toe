



function generateXO() {

    var possible = "XO";
    var strXO = ''
    for (var i = 1; i < 2; i++)
        strXO += possible.charAt(Math.floor(Math.random() * possible.length));

    return strXO

}

function NestedArray(x, o) {
    var randomXO = generateXO()

    var board = [];
    var counter = 0
    for (let i = 0; i < 3; i++) {

        var arr = []; // create row

        board.push(arr);

        for (let j = 0; j < 3; j++) {
            var randomXO = generateXO()

            if (randomXO === 'X' && counter < 5) {
                counter++
                arr.push('X');

            } else {

                arr.push('O');
            }



        }
    }

    return board;
}

console.log(NestedArray(5, 4));



