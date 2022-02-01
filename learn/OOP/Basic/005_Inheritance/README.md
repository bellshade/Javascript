# Inheritance (Pewarisan)

> Sebelum memasuki materi ini, diharapkan sudah mengetahui apa itu class dan cara penggunaanya pada Javascript.

## Apa itu Inheritance?

Dalam gambaran dunia nyata, banyak objek yang berbeda tetapi memiliki kesamaan atau kemiripan tertentu. Contoh sederhananya adalah seorang anak yang mewarisi rambut ikal dari ayahnya, kemudian seorang anak yang mewarisi sifat sabar dari ibunya.

Sama halnya dengan **OOP**, terdapat beberapa objek yang berbeda tetapi bisa saja mempunyai kesamaan dalam hal tertentu. Maka dari itu disitulah konsep **Inheritance** diterapkan.

## Implementasi dengan Inheritance

Dengan menerapkan **Inheritance** pada Javascript, kita tidak perlu lagi menuliskan kode secara berulang.

### Contoh

Sebagai contoh, kita buat class `Animal` yang nanti akan digunakan sebagai _`parent class`_.

```js
class Animal {
  constructor(nama, jarak) {
    this.nama = nama;
    this.jarak = jarak;
  }

  run() {
    console.log(`${this.nama} berlari dengan jarak ${this.jarak} meter.`);
  }

  stop() {
    console.log(`${this.nama} diam berdiri.`);
  }
}
```

Kemudian kita buat class `Cat` sebagai _`child class`_ dari `Animal`.

```js
class Cat extends Animal {
  constructor(nama, jarak, makanan) {
    super(nama, jarak);
    this.makanan = makanan;
  }

  eat() {
    console.log(`${this.nama} sedang makan ${this.makanan}.`);
  }

  hide() {
    console.log(`${this.nama} bersembunyi!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}
```

Untuk dapat mewariskan sifat class, lakukan dengan menambahkan keyword `extends`. Dengan begitu class `Cat` dapat mengakses seluruh properti dan method yang ada pada class `Animal`.

```js
class Cat extends Animal {
  ...
}
```

Pada `constructor` class `Cat`, terdapat keyword `super(...)`, keyword tersebut digunakan untuk mengakses seluruh properti dan method yang ada di _`parent class`_ saat berada di _`child class`_. Artinya `super(nama, jarak)` kita mengakses constructor _`parent class`_ kemudian mengirimkan `nama` dan `jarak` ke _`child class`_. Sama halnya dengan `super.stop()`, kita memanggil method `stop()` yang ada di _`parent class`_.

Maka outputnya akan seperti berikut

```js
const cat = new Cat("Kucing oren", 5, "whiskas");
cat.run();
cat.stop();
cat.eat();

/* Output

// hasil cat.run() //
Kucing oren berlari dengan jarak 5 meter.


// hasil cat.stop() //
Kucing oren diam berdiri.
Kucing oren bersembunyi!.

// hasil cat.eat() //
Kucing oren sedang makan whiskas.
*/
```

Silahkan buka file Javascript pada folder ini untuk melihat full kodenya.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Abstraction" />](../004_Abstraction)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Polymorphism" />](../006_Polymorphism)
