### Nullish Coalescing Operator

Nullish Coalescing Operator `(??)` adalah operator logika yang mengembalikan operan sisi kanan ketika operan sisi kirinya bernilai `null` atau `undefined`.

Jika operan sisi kanan bernilai `null` atau `undefined`, lalu operan sisi kirinya bernilai selain `null` atau `undefined` maka, nilai yang diambil adalah operan di sisi kiri.

Jika operan sisi kanan maupun kiri bernilai `null` atau `undefined` maka, nilai yang diambil adalah operan sisi kanan.

Jika operan sisi kanan maupun kiri bernilai bukan `null` atau `undefined` maka, nilai yang diambil adalah operan sisi kiri.

### Contoh penggunaan

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? null;
const valD = nullValue ?? undefined;

console.log(valA); // "default for A"
console.log(valB); // "" (meskipun bernilai falsy tapi string kosong bukan null atau undefined)
console.log(valC); // 42
```
