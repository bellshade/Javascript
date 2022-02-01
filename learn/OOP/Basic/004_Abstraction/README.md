# Abstraction (Abstraksi)

## Apa itu Abstraksi

Abstraksi dalam dunia pemrograman komputer adalah cara kita untuk mengurangi kompleksitas dan mendesign kode yang efisien, serta mengimplementasikannya ke sebuah software yang kompleks tanpa harus kehilangan fungsi aslinya. Jadi kita menghilangkan kesulitan yang teknis di balik kode yang lebih simpel.

## Contoh Kegunaannya

Untuk contoh lebih sederhananya, kita mau mengolah nilai persegi. Bagaimana cara menghitung keliling dan luas persegi hanya dengan satu nilai `sisi`. Di sinilah abstraksi sangatlah berguna.

Kita deklarasikan class `Persegi` yang fungsi menghitung luas dan keliling.

```js
class Persegi {
  constructor(sisi) {
    // Mendaftarkan nilai sisi
    // ke dalam object "sisi"
    this.sisi = sisi;
  }

  // Menghitung luas persegi
  hitungLuas() {
    // sisi x sisi => Rumus dasar
    // sisi ^ 2 => Rumus yang disederhanakan
    return this.sisi ** 2;
  }

  // Menghitung keliling persegi
  hitungKeliling() {
    // sisi + sisi + sisi + sisi => Rumus dasar
    // 4 x s => Rumus yang disederhanakan
    return 4 * this.sisi;
  }
}
```

Kita ingin memasukkan nilai `15` untuk sisi persegi yang ingin kita buat. Kita buat instance `persegi` untuk menggunakan fungsi yang terdapat dalam class `Persegi`.

```js
const persegi = new Persegi(15);
console.log(persegi.hitungLuas()); // 225
console.log(persegi.hitungKeliling()); // 60
```

Untuk contoh yang lain bisa cek file [abstraction.js](abstraction.js).

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Encapsulation" />](../003_Encapsulation)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Inheritance" />](../005_Inheritance)
