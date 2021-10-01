// Counting sort merupakan sebuah teknik pengurutan
// dengan cara menghitung jumlah kemunculan dari
// setiap data yang berada di dalam array.

// Language: JavaScript

function countingSort(arr, min, max) {
  const count = {};
  // Pertama isi objek count
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  /* Sekarang, hitungan diindeks dengan angka, dengan nilai yang sesuai dengan kejadian, misal:
   * {
   *   3: 1,
   *   4: 0,
   *   5: 2,
   *   6: 1,
   *   7: 0,
   *   8: 0,
   *   9: 1
   * }
   */

  // Kemudian, ulangi properti hitungan dari min ke maks:
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }
  return sortedArr;
}

console.log(countingSort([3, 6, 5, 5, 9], 3, 9));
