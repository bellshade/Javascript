// Menentukan median / nilai tengah dari sebuah array

/*
 * Algortima:
 * 1. Mengurutkan array dari terkecil ke terbesar
 *     -- Pada contoh kali ini menggunakan algoritma pengurutan yang bernama bubbleSort, untuk lebih detailnya bisa kunjungi folder sorting_algorithm
 * 2. Mengambil nilai tengah dari array yang sudah diurutkan dengan cara:
 *     -- Jika panjang / banyaknya array adalah genap, maka nilai tengahnya = (panjang array dibagi dua) ditambah (panjang array dibagi dua dikurang satu), lalu hasilnya dibagi dua
 *     -- Jika panjang / banyaknya array adalah ganjil, maka nilai tengahnya = panjang array dibagi dua, lalu dibulatkan kebawah
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Membandingkan elemen j dengan elemen j + 1(1 elemen didepan j)
      if (arr[j] > arr[j + 1]) {
        // Jika j lebih besar maka tukar posisi dengan j + 1(1 elemen didepan j)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const getMedian = (arr) => {
  const sortedArr = bubbleSort(arr);
  if (sortedArr.length % 2 === 0) {
    return (
      (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1]) /
      2
    );
  } else {
    return sortedArr[Math.floor(sortedArr.length / 2)];
  }
};

console.log(getMedian([4, 6, 8, 3, 5, 8, 1, 3, 9, 7]));
console.log(getMedian([10, 90, 20, 80, 30, 70, 40, 60, 50]));
console.log(getMedian([13, 11, 15, 12, 16, 17, 19, 16, 18]));
