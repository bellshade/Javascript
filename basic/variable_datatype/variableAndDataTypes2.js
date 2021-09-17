/**
 * Untuk tipe data yang selanjutnya, ada 3
 * yaitu:
 *
 * 1. null
 *  - Merupakan tipe data yang biasanya digunakan untuk menyatakan
 *    suatu yang tidak ada. null ini bersifat falsy jika digunakan
 *    untuk boolean operator.
 *    Value dari null hanya null.
 *
 * 2. undefined
 *   - Merupakan tipe data yang biasanya digunakan untuk menyatakan
 *     suatu yang tak terdefinisikan sebelumnya, akan bersifat falsy
 *     jika digunakan untuk boolean operator.
 *     Value dari undefined hanya null.
 *
 * 3. object
 *  - Merupakan tipe data yang mempunyai pasangan key dan value.
 *    Maksud dari key adalah nama yang harus diberikan untuk
 *    dijadikan tanda pengenal, supaya value dari object bisa
 *    digunakan.
 *
 *    Object ini menggunakan kurung kurawal ({}) untuk menyimpan
 *    pasangan dari key dan value.
 *
 * Jika mengandai-andai apa itu null dan undefined,
 * bayangkan sebuah tempat tisu toilet yang lengkap.
 *
 * Jika tisu toilet habis akan menyisakan kardus,
 * valuenya akan menjadi 0. Kardus tisu toilet tersebut
 * jika dibuang maka valuenya akan menjadi null.
 *
 * Jika tempat tisu toilet itu dibongkar, maka valuenya undefined.
 * Lihat meme ini: https://twitter.com/ddprrt/status/1074955395528040448
 *
 * Contoh:
 */

const jumlahBuah = null;
const dapur = undefined;

// Object orang ini akan berisi nama dan umur
const orang = {
  nama: "Abbie Sudiati",
  umur: 25
};

console.log(jumlahBuah);
console.log(dapur);

// Ini akan menampilkan dua key beserta valuenya
console.log(orang);

// Jika ingin mengakses nama atau umurnya
console.log(orang.nama); // Abbie Sudiati
console.log(orang.umur); // 25

// Jika key yang diluar object yang didefinisikan
// tidak pernah dibuat, maka hasilnya undefined
console.log(orang.nik);
