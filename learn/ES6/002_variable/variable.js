// == let ==
// Mendeklarasikan dan menginisialisasi variabel
let y = 50;
let benda = "laptop";

// Menampilkan variabel ke dalam console
console.log(y); // 50
console.log(benda); // laptop

// Variabel let dapat diinisialisasi ulang nilainya
benda = "buku";

// Ketika ditampilkan tidak akan error
console.log(benda); // buku

// == const ==
// Mendeklarasikan dan menginisialisasi variabel
const z = 80;
const minuman = "jus";

// Menampilkan variabel ke dalam console
console.log(z); // 80
console.log(minuman); // jus

// Variabel const tidak dapat diinisialisasi ulang nilainya
// minuman = "susu";

// Ketika ditampilkan akan error
// console.log(minuman);
// TypeError: Assignment to constant variable

// nilai array dan properti object dapat dirubah meskipun dideklarasikan dengan const
const buah = ["pepaya", "nanas", "pisang", "jambu"];
const stokBarang = { pulpen: 20, buku: 15, pensil: 25 };

buah.pop();
// nilai paling ujung kanan pada array buah dihapus
stokBarang.buku = 10;
// nilai properti buku diubah menjadi 10

console.log(buah); // ["pepaya", "nanas", "pisang"]
console.log(stokBarang); // {pulpen: 20, buku: 10, pensil: 25}

// meski demikian, mengganti keseluruhan array atau objek menjadi array atau objek baru tetap akan menghasilkan TypeError
// buah = ["semangka", "apel", "anggur"];       // TypeError
// stokBarang = {penggaris: 40, penghapus: 30}; // TypeError
