//--------------if else-------------

// mari kita lihat contoh implementasi nya
const x = 10;
// kita mencari tau dengan comparison (perbandingan) operator
// apakah nilai variabel x lebih kecil dari angka 11

// prettier-ignore
if (x < 11) { // lgtm [js/useless-comparison-test]
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

// prettier-ignore
if (jam < 12) { // lgtm [js/useless-comparison-test]
  // jika  iya
  console.log("good morning");
  //jika tidak....maka dilanjutkan ke blok else if
  //yakni apakah varabel jam lebih besar atau sama dengan  12

  // prettier-ignore
} else if (jam >= 12) { // lgtm [js/useless-comparison-test]
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
