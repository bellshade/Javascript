// Method .find() akan mengembalikan elemen pertama yang memenuhi kondisi.
// Jika tidak ada elemen yang memenuhi kondisi, akan mengembalikan undefined.

const numbers = [10, 20, 30, 40, 50];

// Mencari elemen pertama yang lebih besar dari 25
const found = numbers.find((number) => number > 25);

console.log(found); // expected output: 30

// Mencari elemen pertama yang lebih besar dari 100 (tidak ada)
const notFound = numbers.find((number) => number > 100);

console.log(notFound); // expected output: undefined

// Contoh dengan array of objects
const students = [
    { name: "Andi", score: 85 },
    { name: "Budi", score: 72 },
    { name: "Citra", score: 90 },
    { name: "Dewi", score: 65 },
];

// Mencari siswa pertama yang nilainya di atas 80
const topStudent = students.find((student) => student.score > 80);

console.log(topStudent); // expected output: { name: "Andi", score: 85 }
