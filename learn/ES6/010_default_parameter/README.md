# Default Parameter

`Default parameter` memungkinkan untuk memberikan `value`/nilai pengganti yang diberikan ke sebuah fungsi, apabila fungsi tersebut tidak mendapatkan argument pada parameter tersebut, maka argument akan memberikan nilai `default` (`undefined`).

```javascript
// ES5
function penjumlahan(a, b) {
  b = b || 1;
  return a + b;
}

console.log(penjumlahan(1)); // 2
console.log(penjumlahan(1, 2)); // 3
console.log(penjumlahan()); //NaN
```

`console.log` Ketiga menghasilkan output `NaN` / `Not a Number` karena parameter _a_ tidak memiliki nilai sedangkan pada parameter _b_ memiliki operator logika `OR` atau `||` pada fungsi penjumlahan. Artinya parameter b akan diset ke _b_ atau 1.

Kita ingat sebelumnya, jika parameter tidak memiliki nilai, maka nilai yang akan diberikan ke argumentnya adalah `undefined`. Sehingga `console.log` ketiga berjalan sebagai berikut :
`undefined + 1`
Sehingga output yang dihasilkan adalah `NaN`.

```javascript
// ES6
function penjumlahan(a, b = 1) {
  return a + b;
}

console.log(penjumlahan(1)); // 2
console.log(penjumlahan(1, 2)); // 3
console.log(penjumlahan()); //NaN
```

Dengan menggunakan `Default Parameter`, kode menjadi lebih singkat dan mudah dibaca.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Function%20Rest%20Parameter" />](../009_function_rest_parameter)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Map%20Objects" />](../011_map_objects)