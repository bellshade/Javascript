let result = [];

// mendapatkan bilangan genap sebanyak N
function getEvenNumber(N) {
  for (let i = 1; i <= N * 2; i++) {
    if (i % 2 === 0) {
      result.push(i); // tambahkan i ke dalam array
    }
  }
}

console.log(result); // []

getEvenNumber(6);
console.log(result); // [ 2, 4, 6, 8, 10, 12 ]
