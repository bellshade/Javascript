/* eslint-disable no-undef */
// == Contoh == //

// Membuat objek dan menampilkan data didalamnya
const buah = {
  nama: "Jeruk",
  warna: "Oranye",
  rasa: "Manis",
  namaBuah() {
    return nama;
  },
  warnaBuah() {
    return this.warna;
  },
  fakta() {
    return `Buah ${this.nama} berwarna ${this.warna} rasanya ${this.rasa}`;
  }
};

console.log(buah.namaBuah()); // Error: 'nama' tidak terdefinisikan
console.log(buah.warnaBuah()); // Oranye
console.log(buah.fakta()); // Buah Jeruk berwarna Oranye rasanya Manis

const hewan = {
  nama: "Monyet",
  aksi: "Melompat",
  makan() {
    return `${this.nama} ${this.aksi} untuk mengambil ${
      buah.nama
    } yang berwarna ${buah.warnaBuah()}`;
  },
  cekThis() {
    console.log("Nilai dari 'this' adalah", this);
  }
};

console.log(hewan.makan()); // Monyet Melompat untuk mengambil Jeruk yang berwarna Oranye
console.log(hewan.cekThis()); // Nilai dari 'this' adalah {hewan Object}

const isiThis = hewan.cekThis;

console.log(hewan.cekThis); // cekThis() { console.log("Nilai dari 'this' adalah", this) }
console.log(isiThis()); // Nilai dari 'this' adalah {window Object}
