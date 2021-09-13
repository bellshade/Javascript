// Menentukan mean/rata-rata dari sebuah kumpulan nilai (array)

// Algoritma:
// 1. Menjumlahkan seluruh nilai yang ada di dalam array
// 2. Membagi hasil penjumlahan sebelumnya dengan banyaknya nilai di dalam array

const getMean = (arr) => {
  const sum = arr.reduce((acc, value) => acc + value);
  return sum / arr.length;
}

console.log(getMean([1,2,3,4,5,6]));
console.log(getMean([2,4,6,8,10,12,14]));
console.log(getMean([4,6,8,3,5,8,1,7,3,9]));