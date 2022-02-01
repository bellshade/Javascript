# Object Oriented Programming (OOP)

## Apa itu OOP

OOP (Object Oriented Programming) atau dalam bahasa Indonesia disebut Pemrograman Berbasis Objek adalah sebuah paradigma pemrograman yang menggunakan [objek](../../Basic/011_object) sebagai representasi dari sebuah / sebagian program.

Nantinya [objek](../../Basic/011_object) yang dibuat dapat saling berinteraksi satu sama lain, sehingga dapat menyelesaikan suatu masalah dengan lebih mudah dan efisien.

## Bekerja dengan OOP

Dalam JavaScript kita menggunakan `class` agar dapat membuat program yang berbasis objek. `class` adalah sebuah _blueprint_ untuk membuat sebuah objek yang nantinya akan kita gunakan.

### Membuat `class`

```js
class Produk {}
```

Untuk membuat sebuah _instance_ dari `class` Produk, kita gunakan keyword `new` dan diikuti nama `class` tersebut.

```js
const produk1 = new Produk();
```

Selamat kalian telah membuat sebuah `class` dan `object` yang dimana menjadi pondasi awal untuk belajar konsep OOP ini.

### Cara lain dalam membuat _Blueprint_

Sebelum JavaScript memiliki sintaks `class`, kita membuat sebuah objek menggunakan `function` sebagai _blueprint_ nya. `class` merupakan sintaks terbaru di ES6 yang diciptakan agar cara dalam membuat program OOP sama dengan bahasa pemrograman lain seperti Java atau PHP. Tetapi sebenarnya apa yang dilakukan oleh `class` adalah sama dengan menggunakan `function`.

```js
function Produk() {}

const produk1 = new Produk();
```

Kedepannya kita akan menggunakan `class` dalam membuat sebuah objek.

### Alasan menggunakan `class`

Mungkin kalian bertanya - tanya kenapa kita harus menggunakan `class` untuk membuat sebuah objek. Sebelum itu coba kita lihat kode di bawah ini.

```js
const produk1 = {
  id: 1,
  nama: "Produk Satu",
  harga: 10000
};
```

Kita biasa membuat sebuah objek dengan cara di atas, tentunya sangat mudah. Namun bagaimana jika kita ingin membuat objek lebih banyak lagi, misalkan 10, 100, atau bahkan 1000. Nah, di sinilah `class` dapat kita andalkan.

```js
class Produk {
  constructor(id, nama, harga) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
  }
}

const produk1 = new Produk(1, "Produk Satu", 1000);
const produk2 = new Produk(2, "Produk Dua", 2000);
const produk3 = new Produk(3, "Produk Tiga", 3000);
```

> `constructor` adalah sebuah function yang akan dijalankan saat membuat objek baru dari sebuah `class` atau biasa disebut dengan instansiasi (instance).
> Biasanya digunakan untuk mendefinisikan sebuah properti yang dimiliki sebuah objek.

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Object, Property, Method" />](../002_Object_Property_Method)
