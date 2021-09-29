/*
 * Sebuah function boleh mengembalikan sebuah nilai ataupun tidak mengembalikan nilai.
 * Jika ingin mengembalikan sebuah nilai maka gunakan perintah return.
 */

// == Contoh == //
function nama() {
  return "Fulan";
}

/*
 * Function nama akan mengembalikan sebuah nilai yaitu "Fulan",
 * lalu nilai tersebut akan ditampung oleh variabel siswa.
 */
var siswa = nama();
console.log(siswa); // Fulan
console.log(nama()); // Fulan
