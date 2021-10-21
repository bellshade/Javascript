// 1. Membuat contoh variable array
const arrayPoint = [40, 100, 1, 5, 25, 10];

// 2. Membuat fungsi untuk mengurutkan angka dalam array dari yang terkecil hingga terbesar.
function sortAscending(point) {
  let result = point.sort(function (a, b) {
    return a - b;
  });

  return result;
}

// 3. Membuat fungsi untuk mengurutkan angka dalam array dari yang terbesar hingga terkecil.
function sortDescending(point) {
  let result = point.sort(function (a, b) {
    return b - a;
  });

  return result;
}

// 4. Penerapan menggunakan contoh variable arrayPoint
console.log(sortAscending(arrayPoint)); // [ 1, 5, 10, 25, 40, 100 ]
console.log(sortDescending(arrayPoint)); // [ 100, 40, 25, 10, 5, 1 ]
