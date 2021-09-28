/**
 * Permisalan, kita menggunakan pernyataan suatu berita
 * adalah berita bohong (hoax) atau bukan
 *
 * Contoh:
 */

// true itu hoax, false bukan
const beritaPertama = true;
const beritaKedua = true;
const beritaKetiga = false;
const beritaKeempat = false;

// Cek beritanya, apakah hoax ?
console.log(beritaPertama && beritaKedua); // true

// Apakah keduanya informasi dapat disandingkan kebenarannya ?
console.log(beritaPertama && beritaKeempat); // false

// Cek salah satu berita merupakan hoax
console.log(beritaKedua || beritaKetiga); // true

// Apakah beritanya bukanlah hoax ?
console.log(!beritaKetiga); // true
console.log(!beritaKeempat); // true
console.log(!beritaKetiga && !beritaKeempat); // true
