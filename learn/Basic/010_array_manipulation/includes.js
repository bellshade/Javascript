// Method .includes() digunakan untuk mengecek apakah array mengandung elemen tertentu.
// Mengembalikan true jika elemen ditemukan, false jika tidak.
// Berbeda dengan .indexOf() yang mengembalikan index, .includes() mengembalikan boolean.

const fruits = ["apel", "mangga", "jeruk", "pisang"];

// Mengecek apakah "mangga" ada di dalam array
console.log(fruits.includes("mangga")); // expected output: true

// Mengecek apakah "durian" ada di dalam array
console.log(fruits.includes("durian")); // expected output: false

// .includes() juga bisa menerima parameter kedua yaitu posisi awal pencarian (fromIndex)
const numbers = [1, 2, 3, 4, 5, 3];

// Mencari angka 3 dimulai dari index 4
console.log(numbers.includes(3, 4)); // expected output: true (menemukan 3 di index 5)

// Mencari angka 3 dimulai dari index 6
console.log(numbers.includes(3, 6)); // expected output: false (sudah melewati semua 3)

// Catatan penting: .includes() menggunakan strict equality (===)
// Artinya, type coercion TIDAK dilakukan
console.log([1, 2, 3].includes("1")); // expected output: false (string "1" !== number 1)
console.log([1, 2, 3].includes(1));   // expected output: true
