# _High Order Function_

_Hight Order Function_ adalah sebuah function yang menerima input berupa function atau mengembalikan nilai berupa function. Function yang menjadi sebuah parameter, biasanya disebut juga dengan _`callback function`_. `Array.prototype.map`, `Array.prototype.filter` and `Array.prototype.reduce` adalah sebuah contoh dari _`High Order Function`_.

## Contoh

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
const arr2 = arr1.map((val) => {
  return val * 2;
});
console.log(arr2); // [2, 4, 6, 8, 10]
```
