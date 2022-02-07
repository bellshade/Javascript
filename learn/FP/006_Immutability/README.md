# _Immutability_

Sebuah _Immutable_ [object](../../Basic/011_object/) adalah object yang tidak dapat dimodifikasi setelah dibuat. Jika kita ingin mengubah nilai objek tersebut, maka kita harus membuat objek baru lalu menduplikasi nilai-nilai yang ada, bukan mengubah objek tersebut secara langsung.

## Contoh

[File contoh kode](example.js)

**Contoh non-immutable:**

```js
const mobil = {
  model: "Tesla",
  tahun: 2020
};

console.log(mobil); // { model: "Tesla", tahun: 2020 }

mobil.model = "Honda";
console.log(mobilBaru); // { model: "Honda", tahun: 2020 }
```

Pada contoh diatas, kita mengubah nilai `model` dari objek `mobil` dengan cara mengubah pada objek `mobil` menggunakan dot notation. Cara seperti ini bisa menyebabkan bug pada kode kita, karena bisa saja kita mengubah nilai objek `mobil` dari baris kode lain sehingga nilai dari objek tersebut menjadi berubah.

Contoh immutable:

```js
const mobil = {
  model: "Tesla",
  tahun: 2020
};
const mobilBaru = { ...mobil, model: "Honda" };

console.log(mobil); // { model: "Tesla", tahun: 2020 }
console.log(mobilBaru); // { model: "Honda", tahun: 2020 }
```

Pada contoh diatas, kita mengubah nilai `model` dari objek `mobil` dengan membuat objek baru menggunakan spread operator. Dengan cara ini, kita tidak mengubah objek `mobil` secara langsung, melainkan kita membuat objek baru.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Composition" />](../005_Composition)
