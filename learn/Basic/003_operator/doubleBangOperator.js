/**
 * Double Bang (!!)
 *
 * Double Bang merupakan operator yang mengkonversi suatu value
 * menjadi tipe data boolean, perlu di ingat operator ini bukan
 * berarti menggunakan operator NOT (!) sebanyak 2 kali
 * operator ini sama saja dengan menggunakan fungsi Boolean()
 * yang JavaScript miliki hanya saja lebih sederhana.
 *
 * Referensi: https://dev.to/sanchithasr/what-is-the-double-bang-operator-in-javascript-4i3h
 *
 * Berikut contoh value yang dianggap truthy oleh JavaScript:
 */

const obj = {};
const arr = [];
const bukanStringKosong = "abc";
const angkaSelainNol = 2.5;
const date = new Date();
const truthy = true;
console.log(!!obj, !!arr); // true true
// Diatas merupakan data yang akan dianggap true

// Contoh value yang akan dianggap false:
const kosong = "";
const nol = 0;
const nullish = null;
/* eslint-disable-next-line */
const notDefined = undefined;
const bukanAngka = NaN;
const falsey = false;
console.log(!!kosong, !!nol); // false false
