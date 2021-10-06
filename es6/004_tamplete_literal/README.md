# Template Literal

`Template literal` adalah cara alternatif untuk menyisipkan sebuah ekspresi pada syntax `Javascript`.

Jika pada syntax `es5 (commonjs)` kita masih menggunakan tanda `+` untuk memisahkan sebuah ekspresi atau penggambungan string

contoh: 

```js

let say = "Selamat Pagi";

console.log("Halo Sandhika, " + say);
```

Dengan adanya `Template Literal` kita bisa mengkombinasikan langsung sebuah ekspresi di dalam string, bahkan kita juga bisa membuat multiline menggunakan `Template Literal`, dan masih banyak lagi kegunaan lainnya.

Syntax Template Literal cukup menggunakan tanda `backtik` lalu di dalam nya menggunakan tanda `${}`

contoh:

```js
// 1. Penggabungan String (concatenate strings)

let say = "Selamat Pagi";

console.log(`Halo Sandhika, ${say}`); // Halo Sandhika, Selamat Pagi

// 2. Menulis beberapa baris string / text (multiline strings)

let sayHello = `Halo Sandhika, Selamat Pagi.
Hari ini sangatlah cerah
Gunakanlah untuk bekerja dan menikmati secangkir kopi.`;

console.log(sayHello)
/* 
 * Halo Sandhika, Selamat Pagi.
 * Hari ini sangatlah cerah
 * Gunakanlah untuk bekerja dan menikmati secangkir kopi.
 */

// 3. Menyisipkan expression (expression interpolation)

console.log(`5 + 10 hasilnya adalah ${5+10}`); // 5 + 10 hasilnya adalah 15
```

Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals