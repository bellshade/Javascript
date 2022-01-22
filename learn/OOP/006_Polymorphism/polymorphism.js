/*
 * Contoh di file ini adalah menampilkan nama orang
 * dengan suatu method yang bisa dipanggil di object
 * yang memiliki instance class yang sama.
 *
 * Class ini dinamakan Orang, yang menerima constructor
 * dari nama orang object tertentu. Method perkenalanDiri
 * merupakan method polymorphism karena dia merupakan method
 * yang bisa dipanggil selama sebuah object memiliki instance
 * ke class yang sama.
 */

class Orang {
  constructor(nama) {
    this.nama = nama;
  }

  perkenalanDiri() {
    console.log(`Halo, perkenalkan nama saya ${this.nama}, salam kenal!`);
  }
}

// Ibaratkan nama-nama orang tersebut terdapat dalam suatu kontak
const kontak = [new Orang("Budi"), new Orang("Anton"), new Orang("Tono")];

// Melakukan perulangan sebanyak jumlah kontak yang ada
kontak.forEach((orang) => {
  orang.perkenalanDiri();
});
