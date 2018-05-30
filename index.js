var arr = []
var countX = 0
var countO = 0
for (let i = 0; i < 3; i++) {
    isi = []
    for (let j = 0; j < 3; j++) {
        var num = Math.floor(Math.random() * 10)
        if (num % 2 == 0) {
            countX++
            if (countX <= 5) {
                isi.push('X')                
            }else{
                isi.push('O')
            }
        }else
        if (num % 2 == 1) {
            countO++
            if (countO <=5) {
                isi.push('O')
            }else{
                isi.push('X')
            }
        }
    }
    arr.push(isi)
}

console.log(arr);
