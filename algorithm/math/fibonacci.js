/**
 * Fibonacci adalah deret angka yang dimulai dari 0 dan 1,
 * dan susunan angka setelah itu merupakan hasil penjumlahan dari dua angka sebelumnya.
 * Rumus dari fibonacci adalah sebagai berikut:
 * fib (n) = fib (n-2) + fib (n-1).
 * Fibonacci dimulai dari 0 dan 1, berarti fib(0) = 0, dan fib(1) = 1. Ini adalah base case dari fungsi fibonacci.
 * Berikut adalah beberapa contoh fungsi untuk mengimplementasikan deret fibonacci.
 */

/**
 * Fungsi untuk menghitung deret fibonacci dengan metode iteratif.
 * Fungsi ini menggunakan 3 pointer, yaitu first sebagai penunjuk hasil fibonacci ke n - 2,
 * second sebagai penunjuk hasil fibonacci ke n - 1,
 * dan result sebagai penunjuk hasil fibonacci ke n.
 * Algoritma:
 * 1. Inisialisasi first sebagai angka pertama deret fibonacci (0).
 * 2. Inisialisasi second sebagai angka kedua deret fibonacci (1).
 * 3. Lakukan iterasi mulai dari 2 sampai n:
 * 3. 1. Hitung result sebagai first + second.
 * 3. 2. Majukan pointer first (Inisialisasi dengan second).
 * 3. 3. Majukan pointer second (Inisialisasi dengan result).
 * 4. Return result.
 * Pada metode ini, time complexity adalah O(n), dan space complexity adalah O(1)
 * @param {number} n - Indeks fibonacci yang akan dihitung.
 * @returns {number} - Angka fibonacci pada indeks ke-n.
 */
const fibonacciIterative = (n) => {
  if (n < 0) {
    return console.log("Nomor invalid");
  }
  if (n < 2) {
    return n;
  }
  let first = 0;
  let second = 1;
  let result = 0;
  for (let index = 2; index <= n; index++) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};

/**
 * Fungsi untuk menghitung deret fibonacci dengan metode rekursif.
 * Fungsi ini mengimplementasikan rumus fibonacci secara rekursif.
 * Contoh pemanggilan secara rekursif:
 * fib (4) = fib (2) + fib (3)
 * fib (4) = (fib (0) + fib (1)) + (fib (1) + fib (2))
 * fib (4) = (0 + 1) + (1 + fib (0) + fib (1))
 * fib (4) = (1) + (1 + 0 + 1)
 * fib (4) = 1 + 2
 * fib (4) = 3
 * Seperti contoh di atas, penghitungan fibonacci ke n harus "menunggu" penghitungan fibonacci ke n - 2 dan fibonacci ke n - 1 secara terus menerus.
 * Pada metode ini, time complexity adalah O(2^n) karena proses pemanggilan berantai, dan space complexity adalah O(n) karena setiap pemanggilan fungsi disimpan pada stack.
 * @param {number} n - Indeks fibonacci yang akan dihitung.
 * @returns {number} - Angka fibonacci pada indeks ke-n.
 */

const fibonacciRecursive = (n) => {
  if (n < 0) {
    return console.log("Nomor invalid");
  }
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
};

/**
 * Fungsi untuk menghitung deret fibonacci dengan metode rekursif, dan memoization.
 * Memoization pada dasarnya adalah menyimpan penghitungan yang sudah dilakukan sebelumnya (caching),
 * sehingga proses penghitungan yang sudah dilakukan tidak diulang, melainkan mengambil dari cache.
 * Pada metode ini, time complexity adalah O(n) karena pemanggilan berantai dapat di minimalkan, dan space complexity adalah O(n).
 * @param {number} n - Indeks fibonacci yang akan dihitung.
 * @returns {number} - Angka fibonacci pada indeks ke-n.
 */
const fibonacciRecursiveMemoization = (n) => {
  if (n < 0) {
    return console.log("Nomor invalid");
  }
  // Map untuk menyimpan hasil perhitungan
  const fibSequence = {
    0: 0,
    1: 1
  };
  const fib = (n) => {
    // Mengembalikan hasil perhitungan sebelumnya jika sudah ada.
    if (n in fibSequence) {
      return fibSequence[n];
    }
    // Melakukan perhitungan dan menyimpan hasil perhitungan.
    fibSequence[n] = fib(n - 2) + fib(n - 1);
    return fibSequence[n];
  };
  return fib(n);
};

const main = () => {
  const fibIterRes = [];
  for (let i = 0; i < 10; i++) {
    fibIterRes.push(fibonacciIterative(i));
  }
  console.log(fibIterRes);

  const fibRecRes = [];
  for (let i = 0; i < 10; i++) {
    fibRecRes.push(fibonacciRecursive(i));
  }
  console.log(fibRecRes);

  const fibRecMemoRes = [];
  for (let i = 0; i < 10; i++) {
    fibRecMemoRes.push(fibonacciRecursiveMemoization(i));
  }
  console.log(fibRecMemoRes);

  // > fibonacciIterative(10);
  // 55;
  // > fibonacciRecursive(10);
  // 55;
  // > fibonacciRecursiveMemoization(10);
  // 55;
};

main();
