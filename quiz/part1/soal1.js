// Soal 1

//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
//   // you can only write your code here!

  let isPrima = true;

  for(let j=2; j<angka; j++){
    if(angka % j === 0){
        isPrima = false;
        break;
    }
  }
  return isPrima;
}

// // TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// SOAL 1 DONE