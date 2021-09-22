/**
 * Javascript operator
 *
 * Operator dalam bahasa pemrograman berguna untuk memberi informasi
 * kepada compiler atau intepreter untuk melakukan sebuah operasi
 * matematika, kesamaan atau kelogisan yang akan menghasilkan
 * sebuah keputusan.
 *
 * Javascript sendiri memiliki banyak operator, mulai dari
 * operator perbandingan, kelogisan, dan aritmatika.
 *
 * Disini file ini akan membahas operasi perbandingan.
 * Macam-macamnya yaitu:
 *
 * 1. == (sama dengan)
 * - Operator ini digunakan untuk mengecek apakah
 *   suatu nilai sama dengan nilai yang lain.
 *
 * 2. === (persis sama dengan)
 * - Operator ini digunakan untuk mengecek apakah
 *   suatu nilai dan tipe datanya sama dengan nilai
 *   yang lain.
 *
 * 3. != (tidak sama)
 * - Operator ini digunakan untuk mengecek apakah
 *   suatu nilai tidak sama dengan nilai yang lain.
 *
 * 4. !== (persis tidak sama)
 * - Operator ini digunakan untuk mengecek apakah
 *   suatu nilai dan tipe datanya tidak sama dengan
 *   nilai yang lain.
 *
 * 5. > (lebih besar dari)
 * - Operator ini digunakan untuk membandingkan sebuah
 *   nilai apakah lebih besar daripada nilai yang lain.
 *
 * 6. < (kurang dari)
 * - Operator ini digunakan untuk membandingkan sebuah
 *   nilai apakah kurang daripada nilai yang lain.
 *
 * 7. >= (lebih besar sama dengan)
 * - Operator ini digunakan untuk membandingkan sebuah
 *   nilai apah lebih besar daripada atau sama dengan
 *   nilai yang lain.
 *
 * 8. <= (kurang dari sama dengan)
 * - Operator ini digunakan untuk membandingkan sebuah
 *   nilai apah kurang daripada atau sama dengan
 *   nilai yang lain.
 *
 * Catatan:
 * Operator ini bisa digunakan sebagai
 * conditional statement if atau else if.
 *
 * Misal kita akan membandingkan sebuah angka
 * Contoh:
 */

const x = 10;

// Menyamakan
console.log(x == 10); // true
console.log(x == 1); // false, karena x itu 10
console.log(x === 10); // true

// Membedakan
console.log(x != 5); // true
console.log(x != 10); // false, karena x itu 10
console.log(x !== 12); // true
console.log(x !== 10); // false, karena x itu 10

// Membandingkan
console.log(x > 5); // true
console.log(x > 7); // true
console.log(x > 9.999); // true
console.log(2 < x); // true
console.log(5 < x); // true
console.log(x < 9.999); // false, karena x tidak lebih kecil dari 9.999
console.log(x >= 8); // true
console.log(x >= 10); // true
console.log(x <= 10); // true
console.log(x <= 8); // false
