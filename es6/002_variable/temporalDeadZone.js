// == Temporal Dead Zone ==
//
// uncomment kode dibawah untuk melihat error

// console.log(benda);  // ReferenceError
// console.log(y);      // ReferenceError

// dua console log diatas akan menghasilkan ReferenceError karena berada dalam temporal dead zone (zona sebelum variabel dideklarasikan)

let benda = "laptop";
const y = 50;

console.log(benda); // laptop
console.log(y); // 50
// dua console log ini berada setelah variabel dideklarasikan sehingga nilai variabel dapat diambil dengan benar
