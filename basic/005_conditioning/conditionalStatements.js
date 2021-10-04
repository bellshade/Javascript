//--------------if else-------------

// mari kita lihat contoh implementasi nya
const x = 10;
// kita mencari tau dengan comparison (perbandingan) operator
// apakah nilai variabel x lebih kecil dari angka 11
if (x < 11) {
  // jika  iya
  console.log("BENAR, variabel x lebih kecil dari angka 11");
} else {
  // jika tidak
  console.log("SALAH, variabel x lebih besar dari angka 11 ");
}

//--------------else if-------------

// mari kita ke contoh implementasi nya
const jam = 13;
// kita melakukan pengecekan pada nilai variabel jam
// apakah variabel jam lebih kecil dari 12 ?
if (jam < 12) {
  // jika  iya
  console.log("good morning");
  //jika tidak....maka dilanjutkan ke blok else if
  //yakni apakah varabel jam lebih besar atau sama dengan  12
} else if (jam >= 12) {
  //jika iya
  console.log("good afternoon");
} else {
  // jika tidak ada syarat yang terpenuhi dari kedua blok diatas, maka blok else akan dieksekusi
  console.log("SALAH, variabel x lebih besar dari angka 10");
}

//------------switch case------------

// contoh implementasi
const buah = "Jeruk";

// pertama, kita tentukan variabel apa yang akan kita cek
switch (buah) {
  // kita cek, apakah variabel buah berisi Apel?
  case "Apel":
    console.log("Apel harganya 10 ribu");
    break;
  // jika tidak maka lanjut ke case berikutnya
  // apakah variabel buah berisi Nanas?
  case "Nanas":
    console.log("Nanas harganya 12 ribu");
    break;
  // jika masih tidak, maka akan mengambil dari default
  default:
    console.log("Jeruk sudah habis");
    break;
}

//--------------Operator Ternary-------------
// Contoh implementasi
const nama = "lorem";
function Jumlah(num) {
  /* Mendifinisikan 3 nilai
        1. Nilai pertama merupakan nilai yang akan dilakukan pengkondisian
        2. Nilai kedua merupakan nilai yg akan dikembalikan jika nilai pertama benar / ada 
        3. Nilai kedua merupakan nilai yg akan dikembalikan jika nilai pertama salah / tidak ada 
  */
  return num ? 100 : 50;
}

console.log("Hasil Operator Ternary", "=", Jumlah(true)); // output = 100
