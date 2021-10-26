# Window.sessionStorage

sessionStorage adalah sebuah properti yang dapat menyimpan data berdasarkan pasangan antara `key` dan `value` di browser web, tetapi tidak permanen seperti [localStorage](https://github.com/bellshade/Javascript/tree/main/learn/Web_Api/localStorage).  Data akan hilang jika browser sudah ditutup.

Data di dalam sessionStorage disimpan pada setiap tab yang dibuka, jadi jika 2 tab atau lebih membuka halaman yang sama maka session dari setiap tab akan berbeda.

Untuk dapat melihat data di dalam sessionStorage caranya sama seperti [localStorage](https://github.com/bellshade/Javascript/tree/main/learn/Web_Api/localStorage) yaitu dengan cara membuka `DevTools` pada browser kemudian buka tab `Application`. Pada sidebar sebelah kiri terdapat beberapa menu lainnya, termasuk sessionStorage.

## Bekerja dengan sessionStorage

Dalam menuliskan sintaks tidak jauh berbeda dengan [localStorage](https://github.com/bellshade/Javascript/tree/main/learn/Web_Api/localStorage) yaitu terdapat 2 cara yaitu `window.sessionStorage` atau `sessionStorage`.

Beberapa metode dan properti yang bisa digunakan sessionStorage diantaranya: `.setItem()`, `getItem()`, `.removeItem()`, `.clear()`, dan `.length`.

### sessionStorage.setItem()

Metode ini digunakan untuk mengatur / menyimpan data ke dalam sessionStorage. Parameter yang dibutuhkan ada 2 yaitu nama `key` dan `value`.

Contoh:
```js
// Simpan data ke sessionStorage
sessionStorage.setItem("tes", "hello world!");
```
Saat code di atas dijalankan maka di dalam sessionStorage akan terdapat data baru dengan `key` bernama `"tes"` yang berisi `"hello world!"`.

`value` yang dikirimkan ke dalam sessionStorage hanya bisa yang bertipe data String, Number, dan Boolean.
Jika ingin memasukkan `value` berupa objek atau array maka harus dikonversikan menjadi sebuah String menggunakan method `JSON.stringify()`.

Contoh:
```js
// Simpan data ke sessionStorage
const array = ["hello", 1, true];
sessionStorage.setItem("array", JSON.stringify(array));
```

### sessionStorage.getItem()

Metode ini digunakan untuk mengambil data dari dalam sessionStorage. Parameter yang dibutuhkan adalah nama `key` dari data yang ingin diambil. Data yang dikembalikan adalah `value` dari data yang diambil. Jika data yang diambil tidak ada maka akan mengembalikan nilai `null`.

Contoh:
```js
// Simpan data ke sessionStorage
sessionStorage.setItem("tes", "hello world!");

// Ambil data dari sessionStorage
console.log(sessionStorage.getItem("tes")); // "hello world!"
console.log(sessionStorage.getItem("foo")); // null
```

Jika sebelumnya `value` yang disimpan ke dalam sessionStorage berupa objek atau array yang telah diubah menjadi String. Maka untuk mengambil dan mengembalikan ke tipe data semula adalah dengan menggunakan method `JSON.parse()`.

Contoh:
```js
// Simpan data ke sessionStorage
const array = ["hello", 1, true];
sessionStorage.setItem("array", JSON.stringify(array));

// Ambil data dari sessionStorage
const newArray = JSON.parse(sessionStorage.getItem("array"));
console.log(newArray); // ["hello", 1, true]
```

### sessionStorage.removeItem()

Seperti namanya, metode ini digunakan untuk menghapus data dari sessionStorage. Parameter yang dibutuhkan adalah nama `key` dari data yang akan dihapus.

Contoh:
```js
// Simpan data ke sessionStorage
sessionStorage.setItem("tes", "hello world!");

// Hapus data dari sessionStorage
sessionStorage.removeItem("tes");
```

### sessionStorage.clear()

Metode ini digunakan untuk menghapus **seluruh** data dari dalam sessionStorage.

Contoh
```js
// Simpan data ke sessionStorage
const array = ["hello", 1, true];
sessionStorage.setItem("array", JSON.stringify(array));
sessionStorage.setItem("tes", "hello world!");

// Hapus semua data sessionStorage
sessionStorage.clear();
```

### sessionStorage.length

Properti ini berisi berapa banyak data yang ada di dalam sessionStorage.

Contoh
```js
// Simpan data ke sessionStorage
sessionStorage.setItem("tes1", "hello world!");
sessionStorage.setItem("tes2", "selamat pagi!");
sessionStorage.setItem("tes3", "apa kabar?");

// Cek banyak data dalam sessionStorage
console.log(sessionStorage.length); // 3
```
