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
