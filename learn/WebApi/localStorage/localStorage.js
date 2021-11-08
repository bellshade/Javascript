// Simpan data ke localStorage
const array = ["hello", 1, true];
localStorage.setItem("array", JSON.stringify(array));
localStorage.setItem("tes", "hello world!");
localStorage.setItem("num", 5);

// Ambil data dari localStorage
console.log(localStorage.getItem("tes"));
console.log(localStorage.getItem("num"));
console.log(localStorage.getItem("foo"));
const newArray = JSON.parse(localStorage.getItem("array"));
console.log(newArray);

// Hapus data dari localStorage
localStorage.removeItem("tes");

// Cek banyak data dalam localStorage
console.log(localStorage.length);

// Hapus semua data localStorage
// localStorage.clear();
