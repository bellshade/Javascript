// Jangan gunakan var, gunakan let untuk melakukan pengulangan

// i artinya index
// kode dibawah ini akan berjalan 5 kali
// yang dimulai dari angka 0
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// kode ini akan dijalankan 10 kali
// dimulai dari angka 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while loop biasa
// Kode dibawah ini akan berjalan bedasarkan
// paramater yang diberikan.
// Jika paramater berupa nilai true maka
// while loop akan terus dijalankan.
// Jika sudah false akan lanjut ke baris berikutnya

let pengunjung = 0;

while (pengunjung < 20) {
  pengunjung++;
  if (pengunjung > 0) console.log(`Pengujung ke: ${pengunjung}`);
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
