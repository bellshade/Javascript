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

console.log(produk1.nama);
console.log(produk2.nama);
console.log(produk3.nama);
