# Polymorphism (Polimorfisme)

## Apa itu Polimorfisme

Dalam bahasa pemrograman JavaScript, Polimorfisme adalah sebuah konsep dimana kita menggunakan sebuah method dari sebuah class dengan object yang berbeda. Dengan kata lain kita hanya menggunakan method dari instance class yang sama tetapi kita mempunyai object yang berbeda.

## Contoh Kegunaannya

Sebagai contoh sederhana, kita akan membuat sebuah class `Buku` yang menerima judul sebagai parameter constructor dan mempunyai method `cetakJudul` untuk menampilkan judul ke layar.

Pertama deklarasikan terlebih dahulu Class-nya.

```js
class Buku {
  constructor(judul) {
    this.judul = judul;
  }

  cetakJudul() {
    console.log(`Judul bukunya adalah "${this.judul}"`);
  }
}
```

Kita akan membuat "rak buku" yang merupakan instance object-object yang berisikan judul buku `Malin Kundang`, `Sangkuriang`, dan `Timun Mas`. Kita akan menggunakan fungsi `cetakJudul` di seluruh buku yang ada di rak tanpa perlu khawatir akan ketersediaan method tersebut. Rak buku yang ada akan dilakukan sebuah perulangan untuk memanggil method `cetakJudul` sebanyak jumlah buku yang ada didalam rak.

```sh
const rakBuku = [new Buku("Malin Kundang"), new Buku("Sangkuriang"), new Buku("Timun Mas")];

rakBuku.forEach((buku) => {
  buku.cetakJudul();
});
```

Untuk contoh yang lain bisa cek file [polymorphism.js](polymorphism.js).

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Inheritance" />](../005_Inheritance)
