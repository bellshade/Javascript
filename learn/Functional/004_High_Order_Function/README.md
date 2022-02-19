# _High Order Function_

_Hight Order Function_ adalah sebuah function yang menerima input berupa function atau mengembalikan nilai berupa function. Function yang menjadi sebuah parameter, biasanya disebut juga dengan _`callback function`_. `Array.prototype.map`, `Array.prototype.filter` and `Array.prototype.reduce` adalah sebuah contoh dari _`High Order Function`_.

## Contoh

[File contoh kode](example.js)

Katakanlah kita memiliki sebuah array angka, dan kita ingin membuat array baru yang berisi nilai dua kali lipat dari setiap nilai array pertama.

Tanpa _High Order Function_ (Contoh ini juga bukan merupakan functional programming karena tidak sesuai konsep [Immutability](../006_Immutability))

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2); // [2, 4, 6, 8, 10]
```

Menggunakan _High Order Function_

```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.map(val => {
  return val * 2;
});

console.log(arr2); // [2, 4, 6, 8, 10]
```

Contoh lain, kita memiliki 2 buah function untuk mengalikan sebuah angka dan menjumlahkan angka (`kali2` & `tambah2`). Dan juga ada function lain untuk melakukan operasi perhitungan berdasarkan function yang kita kirim (`lakukanOperasi`). Function `lakukanOperasi` adalah _High Order Function_.

```js
const kali2 = num => num * 2;
const tambah2 = num => num + 2;
const lakukanOperasi = (num, fn) => fn(num);

console.log(lakukanOperasi(5, kali2)); // 10
console.log(lakukanOperasi(5, tambah2)); // 7
```

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Pure%20Function" />](../003_Pure_Function)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Composition" />](../005_Composition)
