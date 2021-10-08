# Spread Operator

`Spread Operator` adalah cara baru untuk memanipulasi array atau object yang diperkenalkan pada ES6. Cara Penggunaan `Spread Operator` adalah dengan melambangkan 3 buah titik (...) pada argument di dalam fungsi, atau ke dalam array jika kita ingin menyisipkan nilai array ke dalam array lainnya.

```javascript
let angka = [1, 2, 3];
function tambahkan(a, b, c) {
    console.log(a + b + c); // hasil : 6
}
/* Sebelum ES6
   Memecah satu per satu nilai dari array untuk diparsing menjadi parameter
   atau dengan menggunakan Function.prototype.apply */
jumlahkan(angka[0], angka[1], angka[2]);
jumlahkan.apply(null, angka);

// ES6
// Menggunakan Spread Operator
jumlahkan(...angka);
```
contoh `Spread Operator` digunakan dalam penggabungan dua buah array
```javascript
let a = [satu, dua, tiga];
let b = [empat, lima, enam];
let c = [...a, ...b];
console.log(c); // hasil : [satu, dua, tiga, empat, lima, enam];
```
pada kasus penggabungan 2 buah objek menggunakan `Spread Operator` jika terdapat key yang sama, maka value dari key tersebut akan diambil dari objek yang terakhir.

Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax