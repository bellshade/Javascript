/** Apa itu variabel dalam bahasa pemrograman ?
 *
 * Variabel adalah tempat penyimpanan dimana
 * penyimpanan itu diberi nama, dimana nama
 * yang digunakan harus unik.
 *
 * Dalam bahasa pemrograman JavaScript sendiri memiliki
 * 3 cara mendeklarasikan sebuah variabel, ya itu
 *
 * 1. const (constant) - sifatnya konstan tidak bisa diubah
 * 2. let (let it change) - sifatnya bisa diubah, lebih aman untuk digunakan
 * 3. var (variable) - sifatnya bisa diubah, tidak aman untuk digunakan
 *
 * Untuk tipe data, JavaScript memiliki banyak tipe data,
 * kali ini membahas 3 tipe data dasar yang sering digunakan,
 * yaitu:
 *
 * 1. string
 *  - Merupakan tipe data yang berupa tulisan/teks.
 *    Untuk mendeklarasikannya, gunakan tanda ('), ("), atau (`)
 *
 * 2. number
 * - Merupakan tipe data yang berupa angka.
 *   Bisa berupa bilangan biasa (misal 1,2,3, dst.) juga bilangan
 *   yang memiliki koma, tetapi bilangan yang memiliki koma, tanda komanya
 *   diganti dengan titik (misal 1.5, 3.14, 7.27, 19.45 dst.).
 *
 * 3. boolean
 * - Merupakan tipe data yang berupa hal kelogisan.
 *   Valuenya hanya dua, true dan false
 *
 * Catatan:
 * Semua tipe data bisa menggunakan semua
 * tiga jenis variabel yang ada di JavaScript
 *
 * Contoh:
 **/

// Isi variabel umur tidak bisa diubah, jika
// dipaksa akan muncul sebuah pesan error
const umur = 17;
let namaBuah = "Pepaya";
var hoax = true;

console.log(umur); // 17
console.log(namaBuah); // Pepaya
console.log(hoax); // true

// Misal kita mengubah nama buah menjadi Durian
namaBuah = "Durian";

console.log(namaBuah); // Durian

// Misal mengubah variabel hoax menjadi false
hoax = false;

console.log(hoax);
