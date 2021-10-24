# Window.localStorage

localStorage adalah sebuah properti yang dapat menyimpan data berdasarkan pasangan antara `key` dan `value` di browser web tanpa tanggal kedaluwarsa. Ini berarti data tidak akan hilang meskipun browser telah ditutup.

Untuk dapat melihat data di dalam localStorage adalah dengan cara membuka `DevTools` pada browser kemudian buka tab `Application`. Pada sidebar sebelah kiri terdapat beberapa menu lainnya, termasuk localStorage. Disitulah nantinya data apa saja yang ada di dalam localStorage dapat kita lihat.

## Bekerja dengan localStorage

Dalam menuliskan sintaks terdapat 2 cara yaitu `window.localStorage` atau `localStorage`.

Beberapa method dan properti yang bisa digunakan localStorage diantaranya: `.setItem()`, `getItem()`, `.removeItem()`, `.clear()`, dan `.length`.

### localStorage.setItem()

Method ini digunakan untuk mengeset / menyimpan data ke dalam localStorage. Parameter yang dibutuhkan ada 2 yaitu nama `key` dan `value`.

Contoh:
```js
// Simpan data ke localStorage
localStorage.setItem("tes", "hello world!");
```
Saat code di atas dijalankan maka di dalam localStorage akan terdapat data baru dengan `key` bernama `"tes"` yang berisi `"hello world!"`.

`value` yang dikirimkan ke dalam localStorage hanya bisa yang bertipe data String, Number, dan Boolean.
Jika ingin memasukkan `value` berupa objek atau array maka harus dilakukan konversi menjadi sebuah String menggunakan method `JSON.stringify()`.

Contoh:
```js
// Simpan data ke localStorage
const array = ["hello", 1, true];
localStorage.setItem("array", JSON.stringify(array));
```

### localStorage.getItem()

Method ini digunakan untuk mengambil data dari dalam localStorage. Parameter yang dibutuhkan adalah nama `key` dari data yang ingin diambil. Data yang dikembalikan adalah `value` dari data yang diambil. Jika data yang diambil tidak ada maka akan mengembalikan nilai `null`.

Contoh:
```js
// Simpan data ke localStorage
localStorage.setItem("tes", "hello world!");

// Ambil data dari localStorage
console.log(localStorage.getItem("tes")); // "hello world!"
console.log(localStorage.getItem("foo")); // null
```

Jika sebelumnya `value` yang disimpan ke dalam localStorage berupa objek atau array yang telah diubah menjadi String. Maka untuk mengambil dan mengembalikan ke tipe data semula adalah dengan menggunakan method `JSON.parse()`.

Contoh:
```js
// Simpan data ke localStorage
const array = ["hello", 1, true];
localStorage.setItem("array", JSON.stringify(array));

// Ambil data dari localStorage
const newArray = JSON.parse(localStorage.getItem("array"));
console.log(newArray); // ["hello", 1, true]
```

### localStorage.removeItem()

Seperti namanya, method ini digunakan untuk menghapus data dari localStorage. Parameter yang dibutuhkan adalah nama `key` dari data yang akan dihapus.

Contoh:
```js
// Simpan data ke localStorage
localStorage.setItem("tes", "hello world!");

// Hapus data dari localStorage
localStorage.removeItem("tes");
```

### localStorage.clear()

Method ini digunakan untuk menghapus **seluruh** data dari dalam localStorage.

Contoh
```js
// Simpan data ke localStorage
const array = ["hello", 1, true];
localStorage.setItem("array", JSON.stringify(array));
localStorage.setItem("tes", "hello world!");

// Hapus semua data localStorage
localStorage.clear();
```

### localStorage.length

Properti ini berisi berapa banyak data yang ada di dalam localStorage.

Contoh
```js
// Simpan data ke localStorage
localStorage.setItem("tes1", "hello world!");
localStorage.setItem("tes2", "selamat pagi!");
localStorage.setItem("tes3", "apa kabar?");

// Cek banyak data dalam localStorage
console.log(localStorage.length); // 3
```
