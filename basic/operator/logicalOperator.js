/**
 * Javascript logical (logika) operator
 *
 * Logika secara harfiahnya adalah hasil
 * pertimbangan dari akal dan pikiran
 * seseorang, disampaikan dan diutarakan
 * dengan bahasa.
 *
 * Penggunaan logika di seluruh bahasa pemrograman
 * itu selalu ada. Dalam Javascript ada 3 operator
 * dalam urusan kelogisan suatu yang dapat
 * menghasilkan keputusan pasti yang
 * hasilnya berupa true atau false,
 * yaitu:
 *
 * 1. && (AND operator, dan)
 * - Operator yang digunakan untuk mengecek apakah
 *   nilai satu dan yang lain apakah keduanya true.
 *   Jika salah satunya false maka akan mereturn
 *   nilai false.
 *
 * 2. || (OR operator, atau)
 * - Operator yang digunakan untuk mengecek apakah
 *   salah satu nilai dari dua nilai yang diuji
 *   hasilnya true. Jika dua nilai yang diuji
 *   hasilnya false maka yang direturn.
 *
 * 3. ! (NOT operator, bukan)
 * - Operator yang digunakan untuk mengecek apakah
 *   nilai yang diuji bukanlah yang diinginkan,
 *   maksudnya adalah apa benar pernyataan itu
 *   adalah kebalikannya.
 *
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
