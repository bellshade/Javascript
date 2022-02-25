# _Pure Function_

Salah satu konsep terpenting pada functional programming adalah _Pure Function_. Functional programming mengharuskan kita untuk menuliskan fungsi yang hanya memiliki tujuan untuk mengubah input menjadi output seperti yang kita harapkan. Sebuah fungsi harus mengembalikan nilai yang sama dengan input yang sama.

[File contoh kode](example.js)

```js
const salam = nama => {
  return "Halo " + nama;
};

console.log(salam("Bellshade")); // Halo Bellshade
```

Fungsi `salam` akan selalu mengembalikan nilai `Halo <nama>` sesuai dengan input `<nama>` yang diberikan.

```js
let sapaan = "Halo";

const salam = nama => {
  return `${sapaan} ${nama}`;
};

console.log(salam("Bellshade")); // Halo Bellshade

sapaan = "Pagi";
console.log(salam("Bellshade")); // Pagi Bellshade
```

Pada contoh diatas, fungsi `salam` bergantung pada nilai variable `sapaan`. Bagaimana jika seseorang mengubah nilai `sapaan`? Maka nilai output fungsi `salam` akan berubah meskipun kita memberikan input yang sama.

Kondisi diatas disebut dengan _side effect_ yaitu fungsi tersebut mengembalikan nilai yang berbeda dengan input yang sama tanpa sepengetahuan fungsi tersebut.

Dengan cara ini, kode yang kita buat bisa lebih mudah dipahami dan lebih mudah dimaintain.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=First%20Class%20Object" />](../002_First_Class_Object)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=High%20Order%20Function" />](../004_High_Order_Function)
