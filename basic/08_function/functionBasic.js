// Function

/* Pengertian Function:
 * Function (fungsi) adalah sebuah sub-program / pecahan code
 * yang dapat dipanggil berulang kali dimanapun dan kapanpun.
 * Function digunakan agar program yang dibuat lebih efisien dan
 * mudah untuk dibaca, sehingga akan lebih mudah dalam menangani error.
 */

/*
 * Macam-Macam Function:
 * 1. Function Declaration, adalah function yang dapat dideklarasikan
 *    baik sebelum atau sesudah function tersebut dipanggil / dijalankan.
 * 2. Function Expression, adalah function yang disimpan ke dalam sebuah variabel,
 *    dan variabel tersebut dapat digunakan sebagai function (dipanggil).
 *    Namun function expression harus dibuat terlebih dahulu sebelum dipanggil.
 */

// == Contoh == //

// 1. Function Declaration
// Membuat function halo()
function halo() {
  console.log("Halo, apa kabar?");
}
// Memanggil function halo()
halo();

// 2. Function Expression
// Membuat function sapa()
var sapa = function () {
  console.log("Halo, selamat pagi!");
};
// Memanggil function sapa()
sapa();
