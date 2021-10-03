// Perbedaan dengan break:
// - Break akan menghentikan program dan tidak melanjutkan perulangan
// - Continue akan menghentikan program dan melanjutkan ke perulangan/index selanjutnya

/**
 * Mencetak faktor dari n, jika terdapat angka kelipatan 21
 * jangan cetak angka tersebut dan lanjutkan ke angka berikutnya
 * @param {number} n - bilangan yang akan dicari faktornya
 */
function printFactorOf(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      // lewati angka kelipatan 21
      if (i % 21 === 0) {
        continue;
      }
      console.log(i);
    }
  }
}

printFactorOf(84);
// contoh output jika n=84
// 1
// 2
// 3
// 4
// 6
// 7
// 12
// 14
// ----- angka 21 tidak dicetak
// 28
// ----- angka 42 tidak dicetak
// ----- angka 84 tidak dicetak
