// Contoh 1

const ubahFormatNama = (nama) => nama.split("_").join(" ");
const ubahJadiHurufBesar = (nama) => nama.toUpperCase();
const namaOrang = "bellshade_javascript";

console.log(ubahJadiHurufBesar(ubahFormatNama(namaOrang)));

// Contoh 2

const daftarPengguna = [
  { nama: "Budi", umur: 20, jenisKelamin: "laki-laki" },
  { name: "Ayu", umur: 50, jenisKelamin: "perempuan" },
  { name: "Sinta", umur: 17, jenisKelamin: "perempuan" }
];

// function sederhana
const apakahMuda = (pengguna) => pengguna.umur < 30;
const apakahPerempuan = (pengguna) => pengguna.jenisKelamin === "perempuan";

// function composition
const daftarPenggunaTerpilih = daftarPengguna
  .filter(apakahMuda)
  .filter(apakahPerempuan);

console.log(daftarPenggunaTerpilih); // [{ name: "Sinta", umur: 17, jenisKelamin: "perempuan" }]
