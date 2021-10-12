# Spread Operator

`Spread Operator` adalah cara baru untuk memanipulasi array atau object yang diperkenalkan pada ES6. Cara Penggunaan `Spread Operator` adalah dengan melambangkan 3 buah titik (...) pada argument di dalam fungsi, atau ke dalam array jika kita ingin menyisipkan nilai array ke dalam array lainnya.

```javascript
let angka = [1, 2, 3];
function jumlahkan(a, b, c) {
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

Mirip dengan array, `Spread Operator` dapat memisahkan object menjadi pasangan properti-nilai yang membentuknya. Contoh menambahkan beberapa properti

```javascript
// Contoh sebelum ES6
// Menambahkan beberapa properti
let x = { a: 1, b: 2 };
x.c = 3; // Menambahkan properti c
x.d = 4; // Menambahkan properti d

console.log(x); // Output : { "a": 1, "b": 2, "c": 3, "d": 4 }

// ES6
// Dengan menggunakan spread operator, maka kode akan menjadi lebih singkat
let x = { a: 1, b: 2 };
x = { ...x, c: 3, d: 4 };

console.log(x); // Output : { "a": 1, "b": 2, "c": 3, "d": 4 }
```

Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
