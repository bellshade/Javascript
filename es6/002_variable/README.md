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

*`Hoisting`*  menjadi kontroversial karena tidak sedikit developer yang dibuat bingung akan hal ini. Masalah ini sudah terselesaikan jika kita menggunakan `let` dalam mendeklarasikan variabel.
```javascript
y = 100;
let y;
console.log(y);

/* ReferenceError: Cannot access 'y' before initialization */
```

## let
`let` adalah sebuah kata kunci untuk mendeklarasikan variabel dengan lingkup blok.

 ```javascript
var x = 10;
// Disini x adalah 10
{
  let x = 2;
  // Disini x adalah 2
}
// Disini x adalah 10
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