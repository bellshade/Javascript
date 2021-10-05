// Menentukan median / nilai tengah dari sebuah array

/*
 * Algortima:
 * 1. Mengurutkan array dari terkecil ke terbesar
 * 2. Mengambil nilai tengah dari array yang sudah diurutkan dengan cara:
 *     -- Jika panjang / banyaknya array adalah genap, maka nilai tengahnya = (panjang array dibagi dua) ditambah (panjang array dibagi dua dikurang satu), lalu hasilnya dibagi dua
 *     -- Jika panjang / banyaknya array adalah ganjil, maka nilai tengahnya = panjang array dibagi dua, lalu dibulatkan kebawah
 */

const getMedian = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
};

console.log(getMedian([4, 6, 8, 3, 5, 8, 1, 3, 9, 7]));
console.log(getMedian([10, 90, 20, 80, 30, 70, 40, 60, 50]));
console.log(getMedian([13, 11, 15, 12, 16, 17, 19, 16, 18]));
