# Variabel (ES6)

Sejak `ECMAScript 2015 (ES6)` selain `var`, menginisialisasikan variabel dapat menggunakan `let` dan `const`. ES6 melakukan improvisasi pada deklarasi variabel karena menggunakan `var` terdapat beberapa hal yang kontroversial, salah satunya *`hoisting`*.

Apa itu *`hoisting`* ? sesuai artinya `“mengangkat”` variabel yang dideklarasikan menggunakan var ini dapat diinisialisasi terlebih dahulu sebelum dideklarasikan, contoh:

```javascript
x = 100;
var x;
console.log(x);

/* output: 100 */
```
Ini dikarenakan proses *`hoisting`*, sebenarnya di belakang layar deklarasi variabel x diangkat ke atas sehingga kode yang tampak seperti ini:
```javascript
var x;
x = 100;
console.log(x);

/* output: 100 */
```

*`Hoisting`*  menjadi kontroversial karena tidak sedikit developer yang dibuat bingung akan hal ini. Masalah ini sudah terselesaikan jika kita menggunakan `let` dan `const` dalam mendeklarasikan variabel. Berbeda dengan `var` yang dinaikkan keatas, `let` dan `const` dianggap tidak ada sebelum variabelnya dideklarasikan sehingga memunculkan `ReferenceError` ketika coba dipanggil, hal ini dikenal sebagai *`Temporal Dead Zone`* (TDZ).
```javascript
y = 100;
let y;
console.log(y);

/* ReferenceError: Cannot access 'y' before initialization */
```

*`Temporal Dead Zone`* (TDZ) adalah istilah yang merujuk pada daerah sebelum sebuah variabel dideklarasikan.
```javascript
console.log(x); // Temporal dead zone y dan x
console.log(y); // Temporal dead zone y dan x
let y = 100;    // Temporal dead zone x
const x = 200;

/* ReferenceError: x is not defined */
/* ReferenceError: y is not defined */
```

## let
`let` adalah sebuah kata kunci untuk mendeklarasikan variabel dengan lingkup blok. Lingkup blok berarti variabel yang dideklarasikan tidak dapat diakses diluar bloknya.

 ```javascript
var x = 10;
// Disini x adalah 10
{
  let y = 2;
  // Disini y adalah 2
  console.log(y); // 2
}
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
 ```

## const

`const` digunakan untuk mendeklarasikan sebuah variabel yang sifatnya *immutable* atau tidak perlu diinisialisasi kembali. Jika kita menginisialisasi kembali nilai variabel yang menggunakan `const`, maka akan mendapati eror `“TypeError: Assignment to constant variable.”`

```javascript
const z = 100;
console.log(z);

z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */
```

`const` mirip dengan variabel `let`, hanya saja nilainya tidak dapat diubah.

```javascript
var x = 10;
// Disini x adalah 10
{
  const x = 2;
  // Disini x adalah 2
}
// Disini x adalah 10
```

Perlu diingat bahwa nilai `array` dan `property` pada `object` masih dapat dirubah meskipun dideklarasikan menggunakan `const`. Meski demikian, merubah `array` dan `object` secara keseluruhan tetap menghasilkan TypeError.
```javascript
const bunga = ["mawar", "melati", "anggrek"];
const dataDiri = {nama: "Fatah", alamat: "Bandung", umur: 20};

bunga.push("dahlia");
dataDiri.nama = "Luna";

console.log(bunga);     // ["mawar", "melati", "anggrek", "dahlia"]
console.log(dataDiri);  // {nama: "Luna", alamat: "Bandung", umur: 20}

bunga = ["matahari", "dandelion"];                      // TypeError
dataDiri = {nama: "Nisa", alamat: "Bandung", umur: 20}; // TypeError
```