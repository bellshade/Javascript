# Encapsulation (Enkapsulasi)

## Apa itu Enkapsulasi?

Enkapsulasi dalam dunia pemrograman adalah sebuah konsep untuk mengatur struktur class dengan cara menyembunyikan alur kerja dari class tersebut. Struktur class yang dimaksud adalah berupa properti dan metode (function).

> Masih belum paham?
> Yuk simak contoh kasus berikut ini!

## Bekerja dengan Enkapsulasi

### Contoh tanpa menerapkan Enkapsulasi

Untuk contoh kasus sederhananya adalah saat kita ingin mengambil atau mengubah data dari sebuah objek. Tentu saja kita bisa langsung mengubah data di dalam objek seperti ini:

```js
myObj.name = "Ahmad";
```

Contoh di atas masih belum menerapkan konsep enkapsulasi karena kita bisa langsung mengubah datanya, dan ini bukan merupakan pendekatan _OOP_ dengan konsep enkapsulasi. Karena dengan enkapsulasi kita tidak bisa secara langsung mengambil ataupun mengubah data dari sebuah objek.

### Contoh dengan menerapkan Enkapsulasi

Tujuan utama dari penerapan konsep enkapsulasi adalah "melarang" sesuatu dari luar objek untuk mengakses secara langsung data-data di dalamnya.

Di JavaScript kita bisa membuat sebuah data / properti bahkan method menjadi bersifat _private_ yang artinya tidak bisa diakses dari luar objek, sehingga tidak bisa diakses secara langsung. Caranya adalah menambahkan _prefix_ `#` dan diikuti nama datanya. Contoh:

```js
class Car {
  #model;
  #maxSpeed;

  constructor(model, maxSpeed) {
    this.#model = model;
    this.#maxSpeed = maxSpeed;
  }
}

const myCar = new Car("Tesla", "240 Km/h");
```

Dan jika kita mencoba mengakses datanya, maka akan terjadi error.

```js
myCar.#model = "Bugatti";
console.log(myCar.#model);

Uncaught SyntaxError: Private field '#model' must be declared in an enclosing class
```

> Jika tidak bisa mengakses secara langsung, lalu bagaimana kita dapat berinteraksi dengan data-data dalam objek tersebut?

Untuk itulah kita harus berkenalan dulu dengan yang namanya _Setters_ dan _Getters_. Dengan menggunakan _Setters_ dan _Getters_ kita dapat mengakses data-data dari suatu objek secara tidak langsung alias melalui perantara. Untuk menggunakannya kita tinggal menambahkan keyword `set` dan `get` sebelum nama _function_ yang akan kita gunakan untuk mengakses data dari dalam objek.

Untuk lebih dapat memahaminya, mari kita lihat contoh kode di bawah ini.

```js
class Siswa {
  #nama;
  #umur;

  get nama() {
    return this.#nama;
  }

  set nama(nama) {
    // Mengecek apakah data yang diberikan sudah sesuai yaitu nama tidak boleh mengandung angka
    if (new RegExp(/\d/).test(nama)) {
      console.error("Nama tidak boleh mengandung angka!");
    } else {
      this.#nama = nama;
    }
  }

  get umur() {
    return this.#umur;
  }

  set umur(umur) {
    // Mengecek apakah data berbentuk integer
    if (typeof umur === "number") {
      this.#umur = umur;
    } else {
      console.error("Umur harus bertipe data integer!");
    }
  }
}

const siswa1 = new Siswa();

console.log(siswa1.nama); // undefined

siswa1.nama = "John Doe 123"; // error
siswa1.nama = "John Doe";

console.log(siswa1.nama); // "John Doe"
```

Dengan menggunakan function sebagai perantaranya kita bisa mengubah isi dari datanya sekaligus mengecek apakah data yang diberikan sudah sesuai.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Object, Property, Method" />](../002_Object_Property_Method)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Abstraction" />](../004_Abstraction)
