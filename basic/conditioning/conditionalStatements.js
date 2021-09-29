// * macam-macam cara pengkodisian

//--------if-------------------
// di dalam javascript ada sebuah cara
// dimana kita bisa mengeksekusi sebuah kode, jika syarat yang kita tentukan sudah terpenuhi (true)
// yakni dengan menggunakan statement if
// biasanya syarat di if statement menggunakan comparisonOperator ataupun logilalOperator
//  kode yang didalam if statement akan dieksekusi hanya jika syarat mengeluarkan nilai true

//------------else---------------------
// javascript juga memiliki sebuah cara
// untuk mengeksekusi sebuah kode jika syarat yang kita tentukan tidak terpenuhi (false)
// yakni dengan menggunakan statement else
// jika kode didalam if tidak dieksekusi karena syarat tidak terpenuhi atau mengeluarkan nilai false,
// maka kode didalam blok else akan dieksekusi

// mari kita lihat contoh implementasi nya
let x = 10;
// kita mencari tau dengan comparisonOperator apakah nilai variabel x lebih kecil dari angka 11
if (x < 11) {
  // jika  iya
  console.log("BENAR, variabel x lebih kecil dari angka 11");
} else {
  // jika tidak
  console.log("SALAH, variabel x lebih besar dari angka 11 ");
}

//--------------else if-------------
// nah, adalagi nih sebuah cara di javascript
// untuk melakukan pengecekan ber-urut
// yakni dengan else if
// jika blok if pertama bernilai false, maka kode akan melakukan pengecekan dengan syaratkedua di blok else if
// jika syarat kedua bernilai true, maka blok else if akan dijalankan

// mari kita ke contoh implementasi nya
let jam = 13;
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
