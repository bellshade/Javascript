// Reverse Integer
// Adalah algoritma yang berguna untuk menukar sekumpulan angka

// === Cara Kerja ===
/**
 * 1. Mempersiapkan variabel
 *      - variabel result untuk menyimpan hasil akhir
 *      - temp untuk menyimpan sisa bagi variabel x dengan 10
 * 2. Looping:
 *      - simpan sisa bagi x % 10
 *      - tambahkan nilai result dengan nilai temp
 *      - jika x % 10 bukan menghasilkan nilai x itu sendiri maka result dikali dengan 10
 *      - hilangkan angka terakhir dari variabel x
 * 3. kembalikan hasil akhir
 */

// Contoh 1: 123 menjadi 321
// Contoh 2: -123 menjadi -321
// Contoh 3: 120 menjadi 21
// Bahasa: Javascript

/**
 *
 * @param {Integer} x
 * @returns
 */
const reverse = (x) => {
  let result = 0;
  let temp = 0;

  while (x - temp != 0) {
    temp = x % 10;
    result = result + temp;
    if (x % 10 != x) {
      result *= 10;
    }
    x = (x - temp) / 10;
  }

  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
