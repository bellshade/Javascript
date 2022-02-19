// Implementasi enkode base64 di javascript (node js)

// Fungsi enkode untuk mengubah tulisan biasa menjadi format base64
const btoa = (kataAwal) => Buffer.from(kataAwal, "utf8").toString("base64");

// Fungsi dekode untuk mengubah format base64 menjadi tulisan biasa
const atob = (kataTerkonversi) =>
  Buffer.from(kataTerkonversi, "base64").toString("utf8");

const kataAwal = "Halo Dunia";
const dikonversi = btoa(kataAwal);

console.log(dikonversi); // SGFsbyBEdW5pYQ==

console.log(atob(dikonversi) === kataAwal); // true

/**
 * Penjelasan code:
 * base64 adalah teknik pengenkodean yang mengubah tulisan biasa menjadi
 * tulisan format radix-64. Format ini sering digunakan pada web.
 *
 *
 * Misal:
 * Ada sebuah lukisan dari canvas html ingin di tampilkan dalam format gambar
 * biasa (png, jpeg) dengan mengubah elemen img, fungsi javascript canvas 'toDataURL' secara default
 * akan mengembalikan gambar dengan format 'data:image/png;base64,XXXX'
 *
 * Baca lebih lanjut
 * https://en.wikipedia.org/wiki/Base64
 * https://turbofuture.com/computers/HTML5-Tutorial-How-To-Use-Canvas-toDataURL
 **/

/**
 * Note:
 * Contoh kode diatas menggunakan node js Buffer,
 * untuk penggunaan di web cukup menggunakan 'btoa' dan 'atob'
 * bawaan saja
 *
 * btoa - https://developer.mozilla.org/en-US/docs/Web/API/btoa
 * atob - https://developer.mozilla.org/en-US/docs/Web/API/atob
 */
