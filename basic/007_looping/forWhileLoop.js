// Jangan gunakan var, gunakan let untuk melakukan pengulangan

// i artinya index
// kode di bawah ini akan berjalan 5 kali
// yang dimulai dari angka 0
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// kode ini akan dijalankan 10 kali
// dimulai dari angka 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Bentuk "for" yang lain

// for in
const buah = ["Anggur", "Apel", "Pepaya", "Nanas", "Jeruk"];
for (const n in buah) {
  console.log(`${+n + 1}. ${buah[n]}`);
}
/*
Hasil:

1. Anggur
2. Apel
3. Pepaya
4. Nanas
5. Jeruk
*/

// for of
const buah2 = ["Anggur", "Apel", "Pepaya", "Nanas", "Jeruk"];
for (const x of buah2) {
  console.log(x);
}
/*
Hasil:

Anggur
Apel
Pepaya
Nanas
Jeruk
*/

// for of dengan entries
const buah3 = ["Anggur", "Apel", "Pepaya", "Nanas", "Jeruk"];
for (const [n, x] of buah3.entries()) {
  console.log(`${+n + 1}. ${x}`);
}
/*
Hasil:

1. Anggur
2. Apel
3. Pepaya
4. Nanas
5. Jeruk
*/

// while loop biasa
// Kode di bawah ini akan berjalan berdasarkan
// paramater yang diberikan.
// Jika paramater berupa nilai true maka
// while loop akan terus dijalankan.
// Jika sudah false akan lanjut ke baris berikutnya

let pengunjung = 0;

while (pengunjung < 20) {
  pengunjung++;
  if (pengunjung > 0) {
    console.log(`Pengujung ke: ${pengunjung}`);
  }
  // console.log(pengunjung < 100);
}

console.log("Baris berikutnya");

let penumpang = 0;

// Misal penumpang bertambah 2 tiap eksekusinya
do {
  penumpang += 2;
  console.log(`Jumlah penumpang: ${penumpang}`);
} while (penumpang < 20);

console.log("Akhir dari program");
