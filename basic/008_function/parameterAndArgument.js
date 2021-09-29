/*
 * Parameter adalah variabel yang digunakan untuk menampung nilai
 * yang dikirimkan saat memanggil function.
 */

/*
 * Argument adalah nilai yang dikirimkan saat function dipanggil
 * dan akan ditampung oleh parameter.
 */

// == Contoh == //

function tambah(a, b) {
  /*
   * variabel a dan b disebut parameter,
   * dan akan menangkap nilai yang dikirimkan saat function dipanggil
   */
  return a + b;
}
console.log(tambah(4, 8)); // 12
console.log(tambah(10, 20)); // 30

function sapa(nama) {
  return "Halo " + nama + ", Selamat Pagi!";
}
console.log(sapa("Joe")); // Halo Joe, Selamat Pagi!
console.log(sapa("Andi")); // Halo Andi, Selamat Pagi!
