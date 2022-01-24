# Object, property, and method

## Apa itu object

Object adalah suatu tipe data di Javascript yang bisa menyimpan banyak value / nilai, sama seperti array, yang membedakan adalah array memiliki index sedangkan object memiliki property, array juga termasuk object

contoh object:
```js
const person = {
    name: "salim",
    age: 20
};
```
`name` dan `age` disebut property sedangkan `"salim"` dan `14` disebut value

## Property

Dalam pelajaran sebelumnya kita sudah belajar tentang `class`, jika kita ingin membuat program yang berorientasi object (OOP) kita akan membuat class yang bisa digunakan berulang-ulang, maka gunakanlah property di dalam `constructor`

contohnya:
```js
 class Person { // membuat object dengan class
     constructor(name,age){ // Mendeklarasikan property name dan age
         this.name = name; // menggunakan property name dan age
         this.age = age;
     }
 }
 console.log(new Person("burhan", 23)); // output : {name:"burhan",age: 23}
```

## Method 

Method adalah fungsi yang ada di property yang bisa kita eksekusi / jalankan. Misalnya saya ingin membuat method greet yang menampilkan nama dan usia di console, maka code nya akan seperti ini:
```js
 class Person { // membuat object dengan class
     constructor(name,age){ // Mendeklarasikan property name dan age
         this.name = name; // menggunakan property name dan age
         this.age = age;
     }
     greet() {
         console.log(`hai nama saya ${this.name} saya berumur ${this.age} tahun`)
     }
 }

```
dalam contoh ada method `greet` yang menerima parameter `name` dan `age` dari  constructor property, yang jika dijalankan akan seperti ini
```js
const person1 = new Person("burhan", 23);
person1.greet(); // output: hai nama saya burhan saya berumur 23 tahun
```

> dengan `property` dan `method` kita bisa membuat object yang dinamis yang bisa digunakan sesuai kebutuhan tanpa membuat banyak object