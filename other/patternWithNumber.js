// Perulangan
// Membuat pola segitiga dengan angka 0-9
// contoh: 0
//         12
//         345
//         6789
//         01234

/**
 * Membuat pola segitiga berisi angka 0-9 menggunakan perulangan
 * @param {number} n - jumlah baris pada po;a
 * @returns pola yang terbentuk
 */

function generatePattern(n) {
  let num = 0;
  let pattern = "";

  // untuk baris ke-1 sampai ke-n
  for (let i = 1; i <= n; i++) {
    // untuk kolom ke-1 sampai ke-i
    // note: jumlah kolom mengikuti baris saat itu
    //       misal: baris ke-1 mempunyai 1 kolom
    //              baris ke-2 mempunyai 2 kolom
    //              dst.
    for (let j = 1; j <= i; j++) {
      // jika angka lebih dari 9, kembalikan menjadi 0
      if (num > 9) {
        num = 0;
      }

      pattern += num;
      num++;
    }

    // tambahkan baris baru
    pattern += "\n";
  }
  return pattern;
}

console.log(generatePattern(7));
