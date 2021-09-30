// Pengulangan/looping rekursif adalah salah satu jenis pengulangan
// seperti for, while, forEach, dan sejenisnya.
// Namun pengulangan secara rekursif melakukan pemanggilan function-nya sendiri
// Ilustrasi: loop(loop(loop(loop(loop())))) <- function loop() akan memanggil function dia sendiri
// begitu seterusnya sampai batasan yang kita buat telah tercapai.

/**
 *
 * @param {*} num
 * @returns
 */
const loop = (num) => {
  // Ini kondisi untuk membatasi pengulangan rekursif
  if (num > 0) {
    console.log(`Loop ke-${num}`);
    // function loop() akan memanggil dirinya sendiri dengan pengurangan value parameternya
    loop(num - 1);
  }
  return;
};

// Perlu dicatat bahwa untuk pengulangan rekursif ini selain kodenya berbeda dengan for, while, foreach
// juga berbeda dalam penggunaan memorinya.

// Jika for, while, dan foreach untuk setiap pengulangan akan membuat 1 buah tumpukan pada memori
// lalu dijalankan,

// pengulangan secara rekursif akan terus menambah tumpukan sampai sejumlah yang diinputkan
// baru tumpukan fungsi tsb. dijalankan.

// Contoh 1
// loop(10)

// Contoh 2
// loop(100)

// Contoh 3
loop(100000);

// Contoh dengan pengulangan for biasa
// bandingkan dengan contoh ke 3 di atas!
// for (let index = 0; index < 100000; index++) {
//     console.log(index);
// }
