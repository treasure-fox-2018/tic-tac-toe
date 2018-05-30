function tic_tac_toe(size) {
  //create empty Array with determined size
let dictXO = "";
  if (size*size % 2 === 1) { //if odd
    dictXO = 'XO'.repeat(Math.floor(size*size/2))+"XO".charAt(Math.random()*2) //create dynamic dictionary
  } else {
    dictXO = 'XO'.repeat(Math.floor(size*size/2)) //create dynamic dictionary
  }
  dictXO = dictXO.split("");
  //randoming dictXO
  for (let k = 0 ; k < dictXO.length ; k++) {
    let indexRandom = Math.floor(Math.random()*(dictXO.length-1))
    let temp = dictXO[k];
    dictXO[k] = dictXO[indexRandom];
    dictXO[indexRandom] = temp;
  }
  let counterIndex = 0;
  let outputArr = [];
  for (let i = 0 ; i < size ; i ++) {
    let isiArr = [];
    for (let j = 0 ; j < size ; j++) {
      isiArr.push(dictXO[counterIndex]);
      counterIndex++;
    }
    outputArr.push(isiArr);
  }
  return outputArr
}

console.log(tic_tac_toe(3))
console.log(tic_tac_toe(4))
