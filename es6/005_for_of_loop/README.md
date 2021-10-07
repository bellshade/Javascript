# For of loop

`For of loop` digunakan pada es6 untuk mempersingkat dan meperjelas proses looping pada Arrays, NodeList, Strings, Maps, dsb.

```javascript
// Sebelum ES6
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// ES6
for (let item of array) {
  console.log(item);
}
```

`for of loop` tidak dapat digunakan pada looping pada item yang non iterable.
`code` dibawah tidak dapat digantikan oleh for of loop

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
```

Untuk mengakses `index` pada for of loop diperlukan destructuring syntax
yang dinamakan `entries()` method pada array.

```javascript
for (let [index, item] of array.entries()) {
  console.log(index, item);
}
```
