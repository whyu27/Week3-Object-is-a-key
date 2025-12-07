// Soal 3

//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  // you can only write your code here!

  let upperStr = kalimat.toUpperCase();
  let charArr = upperStr.split('');
  let hasil = [];
  
  for(let i=0; i<charArr.length; i++){
    if(kalimat[i] != charArr[i]){
        hasil.push(kalimat[i].toUpperCase());
    }
    else{
        hasil.push(kalimat[i].toLowerCase());
    }
  }

  return hasil.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// SOAL 3 DONE