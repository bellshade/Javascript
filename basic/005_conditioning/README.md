# Pengkondisian

Kegunaan dari pengkondisian adalah memberi tau program blok kode mana yang bisa di di eksekusi/jalankan. Dalam javascript terdapat tiga macam pengkondisian, yaitu:

1. `if`

Didalam bahasa pemrograman javascript ada sebuah cara dimana kita bisa mengeksekusi sebuah kode, jika syarat yang kita tentukan sudah terpenuhi (`true`) yakni dengan menggunakan statement if biasanya syarat di if statement menggunakan comparison (perbandingan) operator ataupun logical (logika) operator kode yang didalam if statement akan dieksekusi hanya jika syarat mengeluarkan nilai `true`.

Contoh:

```js
if (true) {
  console.log("Kode ini pasti dijalankan");
}
```

2. `else`

Javascript juga memiliki sebuah cara untuk mengeksekusi sebuah kode jika syarat yang kita tentukan tidak terpenuhi (`false`) yakni dengan menggunakan statement else jika kode didalam if tidak dieksekusi karena syarat tidak terpenuhi atau mengeluarkan nilai false, maka kode didalam blok else akan dieksekusi.

Contoh:

```js
if (false) {
  console.log("Kode ini tidak akan pernah dijalankan");
} else {
  console.log("Kode ini pasti dijalankan");
}
```

3. `else if`

Ada metode lain untuk melakukan pengecekan ber-urut yakni dengan else if. Jika blok if pertama bernilai false, maka kode akan melakukan pengecekan dengan syarat kedua di blok else if. Jika syarat kedua bernilai true, maka blok else if akan dijalankan.

Contoh:

```js
const tanggal = 10;

if (tanggal < 5) {
  console.log("Kode ini tidak akan pernah dijalankan");
} else if (tanggal > 8) {
  console.log("Kode ini pasti dijalankan");
} else {
  console.log("Kode ini tidak akan pernah dijalankan");
}
```

4. `switch case`

Ada alternatif lain untuk melakukan pengecekan ber-urut yaitu dengan switch case. Kita bisa menentukan variabel mana yang akan kita cek, lalu tambahkan beberapa case dibawahnya untuk mengecek isi dari variabel yang kita tentukan di dalam switch tadi. Kita juga bisa memberikan kondisi default sama halnya dengan else di atas.

Contoh:

```js
const buah = "Jeruk";

switch (buah) {
  case "Apel":
    console.log("Kode ini tidak akan pernah dijalankan");
    break;
  case "Nanas":
    console.log("Kode ini tidak akan pernah dijalankan");
    break;
  default:
    console.log("Kode ini pasti dijalankan");
    break;
}
```

Lihat kode lengkapnya [disini](conditionalStatements.js).
