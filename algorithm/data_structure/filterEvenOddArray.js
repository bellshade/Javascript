let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

let genap = arr.filter((a) => a % 2 === 0);
let ganjil = arr.filter((a) => a % 2 !== 0);

console.log(genap); // [2, 4, 6, 8, 20];
console.log(ganjil); // [ 1, 3, 5, 7, 9 ]

/**
 * Penjelasan code:
 * Variable genap: Dilakukan filterisasi tiap-tiap index pada sebuah array menggunakan operator modulus, jika index sisa bagi 2 bernilai 0 / tidak memiliki sisa value maka dia bilangan Genap.
 * Variable ganjil: Kebalikan dari penjelasan di atas akan tetapi jika index sisa bagi 2 bernilai bukan 0 / memiliki sisa value maka dia bilangan Ganjil.
 **/

/**
 * Note:
 * Bilangan Genap: Bilangan yang tidak memiliki sisa / habis jika di bagi 2
 * Bilangan Ganjil: Bilangan yang memiliki sisa / tidak habis jika di bagi 2
 **/
