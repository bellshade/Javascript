// Mengecek apakah sesuatu itu ada dalam sebuah array
let anggotaKeluarga = ["ibu", "ayah", "anak"];

// Semua yang di bawah ini hasilnya akan true
console.log(anggotaKeluarga.includes("ayah"));
console.log(anggotaKeluarga.includes("ibu"));
console.log(anggotaKeluarga.includes("anak"));

console.log(anggotaKeluarga.includes("kakek")); // false

// parameter kedua adalah index di mana pencarian harus dimulai
console.log(anggotaKeluarga.includes("ibu", 0)); // true

// "ibu" dimulai dari index 0, jika index di set 1 maka hasilnya false
console.log(anggotaKeluarga.includes("ibu", 1)); // false

/**
 * Penjelasan code:
 * Prototype array includes adalah salah satu fitur bawaan dari javascript
 * yang bisa membantu untuk mencari sesuatu di dalam sebuah array
 * paramter pertama: diisikan dengan value yang ingin dicari
 * parameter kedua: diisikan dengan index keberapa data
 **/

/**
 * Note:
 * Prototype array includes ini sifatnya case sensitive,
 * Dimohon agar teliti dalam penggunaannya
 */
