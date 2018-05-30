function tictactoe(a,b){
    var arr="XO"
    var result=[]
    var countX=0
    var countO=0

    for(var i=0; i<a; i++){
        var arrKecil=[]
        for (var j=0; j<b; j++){
            var random= arr[Math.floor((Math.random() * arr.length))]
            if(random=== "X"){
                countX+=1
            }
            else if(random=== "O"){
                countO+=1
            }

            if(countO > 5){
                random="X"
            }
            if(countX > 5){
                random="O"
            }
            arrKecil.push(random)
        }
        result.push(arrKecil)       
    }
    return result
}

console.log(tictactoe(3,3))