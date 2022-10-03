/*
Javascript menyediakan built-in function yang dapat kita gunakan pada array
*/

const exampleArray = [4,5,6,7];

// Menemukan value pada array pada indeks tertentu 
const at = exampleArray.at(1); // 5

// Memasukkan value ke dalam array
const pushValue = exampleArray.push(8); // [4, 5, 6, 7, 8]

// Mengeluarkan value pada indeks pada array
const popValue = exampleArray.pop(); // [4, 5, 6]

// Reverse value pada array
const reverse = exampleArray.reverse(); // [7, 6, 5, 4]

// Mengecek apakah value tertentu ada di dalam array
const includes = exampleArray.includes(6); // true

// Melakukan perulangan pada array secara langsung terhadap nilainya
const map = exampleArray.map(item => item * 2); // [8, 10, 12, 14]

// Filter array value dengan kondisi tertentu
const filter = exampleArray.filter(item => item > 5); // [6, 7]

// Find array value dengan kondisi tertentu
const find = exampleArray.find(item => item > 5); // 6 // first match

// Melakukan pengecekan pada setiap value array dengan kondisi tertentu
const every = exampleArray.every(item => item > 0); // true

// Mencari index dari sebuah value di dalam array
const findIndex = exampleArray.findIndex(item => item === 5); // 1