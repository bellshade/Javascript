/**
 * Menentukan apakah data dalam array tersorting secara ascending, descending atau tidak
 *
 * Algoritma
 * 1. Melakukan pengecekan apakah array ter-sorting secara ascending
 * 2. Melakukan pengecekan apakah array ter-sorting secara descending
 * 3. Jika keduanya bernilai salah akan mengembalikan hasil "no"
 * 4. Jika ascending bernilai benar, akan mengembalikan "yes, ascending"
 * 5. Jika descending bernilai benar, akan mengembalikan "yes, descending"
 */

function isAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function isDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function isSortedAndHow(arr) {
  if (!arr || arr.length < 1) {
    console.log("Invalid array");
    return false;
  }

  const ascending = isAscending(arr);
  const descending = isDescending(arr);

  if (!ascending && !descending) {
    return "no";
  }

  return ascending ? "yes, ascending" : "yes, descending";
}

console.log(isSortedAndHow([4, 5, 9]));
// yes, ascending

console.log(isSortedAndHow([36, 22, 1, -1]));
// yes, descending

console.log(isSortedAndHow([40, 22, 10, 11]));
// no
