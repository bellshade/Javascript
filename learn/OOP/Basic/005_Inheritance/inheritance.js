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

const cat = new Cat("Kucing oren", 5, "whiskas");
cat.run();
cat.stop();
cat.eat();
