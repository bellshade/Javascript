/**
 * Mencetak faktor dari n, hentikan program jika terdapat angka 21
 * @param {number} n - bilangan yang akan dicari faktornya
 */
function printFactorOf(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      // jika ada angka 21, cetak ERROR dan hentikan program
      if (i === 21) {
        console.log("ERROR");
        break;
      }
      console.log(i);
    }
  }
}

printFactorOf(210);
// contoh output jika n=210
// 1
// 2
// 3
// 5
// 6
// 7
// 10
// 14
// 15
// ERROR
