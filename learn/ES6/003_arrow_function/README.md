# Arrow Functions

`Arrow function` memungkinkan sintaks pendek untuk menuliskan ekpresi fungsi. Tidak memerlukan kata kunci `function`, kata kunci `return`, dan tanda kurung kurawal.

```javascript
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
```

`Arrow function` tidak memiliki `this`, tidak cocok untuk mendefinisikan metode objek. `Arrow function` tidak diangkat `(hoisted)`, dan harus didefinisikan terlebih dahulu sebelum digunakan.

Menggunakan `const` lebih aman daripada menggunakan `var`, karena ekspresi fungsi selalu bernilai konstan.

Anda hanya dapat menghilangkan kata kunci `return` dan kurung kurawal jika fungsinya adalah pernyataan tunggal.
```javascript
const x = (x, y) => { return x * y };
```

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Variable" />](../002_variable)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Template%20Literals" />](../004_template_literals)