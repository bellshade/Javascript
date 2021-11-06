// menghitung sisa pemasukan
const pemasukan = 1000000;
const pengeluaran = [250000, 80000, 140000, 310000];

const sisaPemasukan = pengeluaran.reduce(function (acc, curr) {
  return acc - curr;
}, pemasukan);
// nilai variabel sisaPemasukan diambil dari hasil reduce array pengeluaran
// acc adalah akumulator (accumulator)
// nilai awal akumulator diambil dari argument kedua yaitu variabel pemasukan
// curr adalah nilai elemen pada tiap iterasi

console.log(sisaPemasukan); // 220000
