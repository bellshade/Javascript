let angka = [1, 2, 3];

function jumlahkan(a, b, c) {
  console.log(a + b + c); // hasil : 6
}

// Sebelum ES6
// Memecah satu per satu nilai dari array untuk diparsing menjadi parameter
jumlahkan(angka[0], angka[1], angka[2]);

// ES6
// Menggunakan Spread Operator
jumlahkan(...angka);

// Menggabungkan 2 buah array
// Sebelum ES6
let makanan = ["Nasi Goreng", "Bubur Ayam", "Bakso"];
let minuman = ["Kopi Panas", "Teh Hangat", "Air Mineral"];
let makananPlusMinuman = makanan.concat(minuman);
console.log(makananPlusMinuman);

// ES6
let menuPagi = [...makanan, ...minuman];
console.log(menuPagi);

// Menambah beberapa properti pada object
// Sebelum ES6
// let karyawan = { nama: "Boby", umur: 25 };
// karyawan.bagian = "Front-End";            // Menambakan properti bagian
// karyawan.status = "Sudah menikah";        // Menambahkan properti status

// console.log(karyawan);
/* Output :
  {
    "nama": "Boby",
    "umur": 25,
    "bagian": "Front-End",
    "status": "Sudah Menikah"
  }
*/
/* Menghapus blok kode di atas akan menimbulkan error  */

// ES6
let karyawan = { nama: "Boby", umur: 25 };
karyawan = { ...karyawan, bagian: "Front-End", status: "Sudah menikah" };

console.log(karyawan); // Output sama dengan console.log di atas.

// Menggabungkan Object
// Sebelum ES6
// const nilai1 = { Andre: 75, Budi: 85 };
// const nilai2 = { Putri: 75, Ditha: 95 };
// const nilaiGabungan = Object.assign({}, nilai1, nilai2);

// console.log(nilaiGabungan);
/* Output : 
  {
    "Andre": 75,
    "Budi": 85,
    "Putri": 75,
    "Ditha": 95
  }
*/
/* Menghapus blok kode di atas akan menimbulkan error  */

// ES6
const nilai1 = { Andre: 75, Budi: 85 };
const nilai2 = { Putri: 75, Ditha: 95 };
const nilaiGabungan = { ...nilai1, ...nilai2 };

console.log(nilaiGabungan); // Output sama dengan console.log di atas.
