const jumlahBuah = null;

// Object orang ini akan berisi nama dan umur
const orang = {
  nama: "Abbie Sudiati",
  umur: 25
};

console.log(jumlahBuah);

// Ini akan menampilkan dua key beserta valuenya
console.log(orang);

// Jika ingin mengakses nama atau umurnya
console.log(orang.nama); // Abbie Sudiati
console.log(orang.umur); // 25

// Jika key yang diluar object yang didefinisikan
// tidak pernah dibuat, maka hasilnya undefined
console.log(orang.nik);
