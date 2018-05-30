function tic_tac_toe (grid) {

    var result=[]
    const xo = ["X","O"]

    for(var i=0; i<grid; i++) {
        result.push([])
    }

    var xCount=0
    var oCount=0

    for(var x=0; x<grid; x++) {
        for(var y=0; y<grid; y++) {

            if(xCount>=5) {
                result[x].push(xo[1])
            } else if(oCount>=5) {
                result[x].push(xo[0])
            } else {
                 result[x].push(xo[(Math.floor(Math.random()*2))])
            }

            if(result[x][y]==="X") {
                xCount += 1
            } else if(result[x][y]==="O") {
                oCount += 1
            }
        }
    }

    return result

}

console.log(tic_tac_toe(3))