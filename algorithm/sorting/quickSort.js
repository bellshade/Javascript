/*
Quick Sort adalah teknik mengurutkan data dengan cara mempartisi sebuah array
menjadi beberapa bagianlalu mengambil salah satu nilai dari elemen array untuk
dijadikan sebuah poros perbandingan. Jika nilai dari elemen pembanding lebih kecil
maka elemen tersebut dipindah ke bagian kiri dari elemen porosnya sebaliknya jika elemen
pembandingnya lebih besar dari porosnya maka elemen tersebut dipindah ke bagian kakan
dari elemen porosnya

Berikut gambaran cara kerja dari Quick Sort
=============================================
Inisialisasi [5, 3, 8, 4, 6] Inisialisasi array acak
                          ^  Angap saja elemen terakhir menjadi sebuah poros

Langkah 1              6      Angka 6 menjadi poros dan elemen yang nilainya lebih besar dari porosnya akan dipindahkan
             [5, 3, 4]    8   ke sisi kanan dari elemen porosnya dan elemen yang nilainya lebih kecil dipindahkan ke kiri
Langkah 2        4            Angka 4 menjadi poros dan melakukan pengecekan yang sama seperti langkah sebelumnya
              3     5
Hasil        [3, 4, 5, 6, 8]
=============================================
*/

function partisi(array, kiri, kanan) {
  let poros = array[Math.floor((kanan + kiri) / 2)],
    i = kiri,
    j = kanan;

  while (i <= j) {
    while (array[i] < poros) {
      i++;
    }
    while (array[j] > poros) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, kiri = 0, kanan = array.length - 1) {
  if (kiri < kanan) {
    const indexPoros = partisi(array, kiri, kanan);
    quickSort(array, kiri, indexPoros - 1);
    quickSort(array, indexPoros, kanan);
  }
  return array;
}
const arr = [7, 2, 5, 1, 8, 9];
const sortedArr = quickSort(arr);
console.log(sortedArr);
