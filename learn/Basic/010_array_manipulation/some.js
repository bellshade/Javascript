// Method .some() akan mengecek apakah minimal satu elemen memenuhi kondisi.
// Mengembalikan true jika ada minimal satu elemen yang memenuhi kondisi,
// dan false jika tidak ada satupun yang memenuhi.

const numbers = [1, 2, 3, 4, 5];

// Mengecek apakah ada elemen yang lebih besar dari 3
const hasGreaterThanThree = numbers.some((number) => number > 3);

console.log(hasGreaterThanThree); // expected output: true

// Mengecek apakah ada elemen yang negatif
const hasNegative = numbers.some((number) => number < 0);

console.log(hasNegative); // expected output: false

// Contoh dengan array of objects
const products = [
    { name: "Laptop", price: 15000000, inStock: true },
    { name: "Mouse", price: 150000, inStock: false },
    { name: "Keyboard", price: 500000, inStock: true },
];

// Mengecek apakah ada produk yang sedang kosong (out of stock)
const hasOutOfStock = products.some((product) => !product.inStock);

console.log(hasOutOfStock); // expected output: true

// Perbedaan .some() dengan .every():
// .some() -> true jika MINIMAL SATU elemen memenuhi kondisi
// .every() -> true jika SEMUA elemen memenuhi kondisi
const allInStock = products.every((product) => product.inStock);
console.log(allInStock); // expected output: false
