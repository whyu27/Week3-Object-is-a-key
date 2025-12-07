// Soal 2

//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!

  let a = Math.max(angka1, angka2);
  let b = Math.min(angka1, angka2);
  
  while(a % b != 0){
    let c = a % b;
    a = b;
    b = c;
  }
  return b;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

// SOAL 2 DONE