//-----------------syntax class pada javascript-------------------------
// contoh pengimplementasian nya
class Animal {
  constructor(name, isMamal) {
    this.name = name;
    this.isMamal = isMamal;
  }
}
// kita membuat class bernama Animal dengan 2 argumen di constructor method, yakni name dan isMamal
// disini kita bisa membuat object dengan menggunakan class yang kita buat barusan
let myAnimal1 = new Animal("Turtle", false);
let myAnimal2 = new Animal("Elephant", true);
console.log(myAnimal1);
// variabel myAnimal1 isinya menjadi seperti ini :
// {
//     "name": "Turtle",
//     "isMamal": false
// }
console.log(myAnimal2);
// variabel myAnimal1 isinya menjadi seperti ini :
// {
//     "name": "Elephant",
//     "isMamal": true
// }

//---------------------- class method --------------------------------------

// contoh pengimplementasiannya

// membuat method age di class Car untuk mengeluarkan umur mobil
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
// membuat objek di class Car dengan nama mobil : Ford , dan tahun mobil dibuat : 2014
let myCar = new Car("Ford", 2014);
// jika kita console.log seperti ini
console.log(myCar.age()); // mengeluarkan angka umur mobil yang diambil dari fungsi age di dalam class Car
