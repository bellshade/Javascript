// Simpan data ke sessionStorage
const array = ["hello", 1, true];
sessionStorage.setItem("array", JSON.stringify(array));
sessionStorage.setItem("tes", "hello world!");
sessionStorage.setItem("num", 5);

// Ambil data dari sessionStorage
console.log(sessionStorage.getItem("tes"));
console.log(sessionStorage.getItem("num"));
console.log(sessionStorage.getItem("foo"));
const newArray = JSON.parse(sessionStorage.getItem("array"));
console.log(newArray);

// Hapus data dari sessionStorage
sessionStorage.removeItem("tes");

// Cek banyak data dalam sessionStorage
console.log(sessionStorage.length);

// Hapus semua data sessionStorage
// sessionStorage.clear();
