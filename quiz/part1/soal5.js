// Soal 5

//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let hasil = '';

  for (let i = 0; i < kata.length; i++) {
    let index = alphabet.indexOf(kata[i]);

    // jika huruf ada di alphabet
    if (index !== -1) {
      // pindah ke huruf berikutnya, jika z kembali ke a
      let nextIndex = (index + 1) % 26;
      hasil += alphabet[nextIndex];
    } else {
      // jika bukan huruf, tetap ditulis
      hasil += kata[i];
    }
  }

  return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

// SOAL 5 DONE