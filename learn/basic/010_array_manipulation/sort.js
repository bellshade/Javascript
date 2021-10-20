function sortAscending(point) {
  let result = point.sort(function (a, b) {
    return a - b;
  });

  return result;
}

function sortDescending(point) {
  let result = point.sort(function (a, b) {
    return b - a;
  });

  return result;
}

const arrayPoint = [40, 100, 1, 5, 25, 10];

console.log(sortAscending(arrayPoint)); // [ 1, 5, 10, 25, 40, 100 ]
console.log(sortDescending(arrayPoint)); // [ 100, 40, 25, 10, 5, 1 ]

/**
 * PENJELASAN :
 * SORT dalam bahasa indonesia berarti mengurutkan
 * sortAscending bertujuan untuk mengurutkan angka dalam array menjadi urutan dari yang terkecil ke terbesar
 * sortDescending bertujuan untuk mengurutkan angka dalam array menjadi urutan dari yang terbesar ke terkecil
 */