// Mengecek apakah salah satu valuenya termasuk di sebuah array

const isiDapurSatu = ["panci", "penggorengan", "garpu"];
const isiDapurDua = ["garpu", "gelas", "sendok"];
const isiDapurTiga = ["sodet", "cangkir"];

// Mengecek array dengan some hanya dengan satu value
console.log(isiDapurSatu.some((isi) => isi === "panci")); // true
console.log(isiDapurDua.some((isi) => isi === "gelas")); // true
console.log(isiDapurTiga.some((isi) => isi === "sodet")); // true

// Mengecek satu array dengan array yang lain,
// jika value di salah satu array ada yang sama
// dengan array yang lain, maka akan mereturn
// value true

console.log(isiDapurSatu.some((isi) => isiDapurDua.includes(isi))); // true
console.log(isiDapurDua.some((isi) => isiDapurSatu.includes(isi))); // true

// Semua yang di bawah ini hasilnya akan false
console.log(isiDapurTiga.some((isi) => isiDapurSatu.includes(isi)));
console.log(isiDapurTiga.some((isi) => isiDapurDua.includes(isi)));

/**
 * Penjelasan code:
 * Prototype array some adalah fitur javascript yang mengecek
 * apakah salah satu valuenya ada atau tidak, jika di ada
 * maka akan mereturn value true
 *
 * "some" ini bisa membantu ketika ingin memvalidasi dua array,
 * apakah suatu array ini terdapat suatu value yang salah satunya
 * juga ada di array yang lain.
 **/
