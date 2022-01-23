# Variabel dan Tipe Data

Apa itu variabel dalam bahasa pemrograman ?

Variabel adalah tempat penyimpanan di mana penyimpanan itu diberi nama, di mana nama yang digunakan harus unik.

## Jenis-Jenis Mendeklarasikan Variabel

Dalam bahasa pemrograman JavaScript sendiri memiliki **3 cara** mendeklarasikan sebuah variabel, yaitu

1. `const` (constant): sifatnya konstan tidak bisa diubah
2. `let` (let it change): sifatnya bisa diubah, lebih aman untuk digunakan
3. `var` (variable): sifatnya bisa diubah, tidak aman untuk digunakan

## Jenis-Jenis Tipe Data

Untuk tipe data, JavaScript memiliki banyak tipe data,
kali ini membahas 3 tipe data dasar yang sering digunakan, yaitu:

1.  `string`

Merupakan tipe data yang berupa tulisan/teks. Untuk mendeklarasikannya, gunakan tanda (`'`), (`"`), atau (` `` `).

2.  `number`

Merupakan tipe data yang berupa angka. Bisa berupa bilangan biasa (misal 1,2,3, dst.) juga bilangan yang memiliki koma, tetapi bilangan yang memiliki koma, tanda komanya diganti dengan titik (misal 1.5, 3.14, 7.27, 19.45 dst...).

3.  `boolean`

Merupakan tipe data yang berupa hal kelogisan. Valuenya hanya dua, `true` dan `false`.

4. `null`

Merupakan tipe data yang biasanya digunakan untuk menyatakan suatu yang tidak ada. null ini bersifat falsy jika digunakan untuk boolean operator. Value dari `null` hanya `null`.

5. `undefined`

Merupakan tipe data yang biasanya digunakan untuk menyatakan suatu yang tak terdefinisikan sebelumnya, akan bersifat falsy jika digunakan untuk boolean operator. Value dari `undefined` hanya `undefined`.

6.  `object`

Merupakan tipe data yang mempunyai pasangan key dan value. Maksud dari key adalah nama yang harus diberikan untuk dijadikan tanda pengenal, supaya value dari object bisa digunakan.

Object ini menggunakan kurung kurawal ({}) untuk menyimpan pasangan dari key dan value.

> *Truthy* : nilai yang dianggap benar ketika ditemui dalam konteks Boolean.
> *Falsy* : nilai yang dianggap salah ketika ditemui dalam konteks Boolean.


### typeOf

`typeOf` adalah salah satu jenis operator java script yang dapat digunakan untuk mengecek/melihat tipe data dari sebuah variabel.

contoh dari penggunaan typeOf adalah [ini](typeOf.js)

### Hint

Jika mengandai-andai apa itu null dan undefined, bayangkan sebuah tempat tisu toilet yang lengkap.

Jika tisu toilet habis akan menyisakan kardus, valuenya akan menjadi 0. Kardus tisu toilet tersebut jika dibuang maka valuenya akan menjadi null.

Jika tempat tisu toilet itu dibongkar, maka valuenya undefined.
Lihat meme ini:

![Meme Penjelasan](https://pbs.twimg.com/media/DusCOfyXcAA9_F7?format=jpg&name=large)

Sumber meme [original](https://twitter.com/ddprrt/status/1074955395528040448).

> Catatan: Ketiga jenis variabel bisa menggunakan semua jenis tipe data yang ada di JavaScript

Contoh

```js
const umur = 15;
console.log(umur); // 15
```

Cek file [pertama](variableAndDataTypes1.js) dan [kedua](variableAndDataTypes2.js) untuk contoh lebih lengkapnya.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Hello World" />](../001_hello_world)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Operator" />](../003_operator)