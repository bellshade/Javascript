/**
 * Javascript arithmetic (penghitungan) operator
 *
 * Aritmatika atau biasa disebut penghitungan merupakan cabang matematika
 * yang mempelajari operasi dasar bilangan seperti penjumlahan,
 * pengurangan, perkalian, pembagian, dan sebagainya.
 *
 * Setiap bahasa pemrograman termasuk javascript memiliki operator aritmatika
 * untuk melakukan penghitungan dasar. Dalam Javascript sendiri
 * terdapat beberapa operator yaitu :
 *
 * 1. + (Penjumlahan)
 *    Operator ini digunakan untuk melakukan operasi penjumlahan.
 *
 * 2. - (pengurangan)
 *    Operator ini digunakan untuk melakukan operasi pengurangan.
 *
 * 3. * (Perkalian)
 *    Operator ini digunakan untuk melakukan operasi perkalian.
 *
 * 4. / (Pembagian)
 *    Operator ini digunakan untuk melakukan operasi pembagian.
 *
 * 5. % (Modulus)
 *    Operator ini berfungsi untuk mencari sisa bagi suatu bilangan.
 *    Operator ini biasa digunakan untuk mengecek apakah
 *    suatu bilangan ganjil atau genap.
 *
 * 6. ** (Eksponen)
 *     Sesuai namanya, operator ini berfungsi untuk membuat eksponen. Eksponen
 *     atau yang biasa disebut bilangan berpangkat adalah suatu bentuk
 *     perkalian dengan bilangan yang sama berulang-ulang.
 *
 * 7. ++ (Increment/kenaikan)
 *    Operator ini digunakan untuk menambah suatu bilangan
 *    sebanyak 1 angka. Operator ini biasa digunakan
 *    pada perulangan.
 *
 * 8. -- (Decrement/penurunan)
 *    Operator ini kebalikan dari operator increment, digunakan
 *    untuk mengurangi suatu bilangan sebanyak 1 angka.
 *    Operator ini biasa digunakan pada perulangan.
 *
 *
 *
 * catatan : pada javascript, operator + (penjumlahan) juga digunakan untuk
 *           merangkai (concate) string. Jadi perhatikan penggunaan
 *           + pada string dan integer.
 *
 * Berikut adalah contoh penggunaan operator aritmatika pada javascript :
 *
 */

let x = 10;
let y = 5;

// Penjumlahan
console.log(x + y); // 15

// Pengurangan
console.log(x - y); // 5

// Perkalian
console.log(x * y); // 50

// Pembagian
console.log(x / y); // 2

// Modulus
console.log(x % y); // 0

// Eksponen
console.log(x ** y); // 10 * 10 * 10 * 10 * 10 = 100000

// increment
console.log(x++, x++, x++, x++); // 10, 11, 12, 13

// Decrement
console.log(y--, y--, y--, y--); // 5, 4, 3, 2
