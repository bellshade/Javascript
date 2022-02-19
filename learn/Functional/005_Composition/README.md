# _Composition_

Esensi utama dari functional programming adalah composition, yaitu menyambung-nyambung function-function sederhana untuk menyelesaikan masalah yang kompleks. Bayangkan seperti tiap function adalah block Lego yang bisa disambung dengan block Lego lain yang pada akhirnya bisa jadi bentuk bangunan Lego yang kompleks.

## Contoh

[File contoh kode](example.js)

Pada contoh pertama, Katakanlah kita memiliki sebuah nama dengan format `namaDepan_namaBelakang` dan kita ingin mengubah formatnya menjadi `namaDepan namaBelakang` dalam huruf besar semua.

```js
const ubahFormatNama = nama => nama.split("_").join(" ");
const ubahJadiHurufBesar = nama => nama.toUpperCase();
const namaOrang = "bellshade_javascript";

console.log(ubahJadiHurufBesar(ubahFormatNama(namaOrang)));
```

Pada contoh kedua, kita memiliki array daftar pengguna. Kita ingin memilih pengguna yang memiliki umur dibawah 30 dan berjenis kelamin perempuan.

```js
const daftarPengguna = [
  { nama: "Budi", umur: 20, jenisKelamin: "laki-laki" },
  { name: "Ayu", umur: 50, jenisKelamin: "perempuan" },
  { name: "Sinta", umur: 17, jenisKelamin: "perempuan" }
];

// function sederhana
const apakahMuda = pengguna => pengguna.umur < 30;
const apakahPerempuan = pengguna => pengguna.jenisKelamin == "perempuan";

// function composition
const daftarPenggunaTerpilih = daftarPengguna
  .filter(apakahMuda)
  .filter(apakahPerempuan);

console.log(daftarPenggunaTerpilih); // [{ name: "Sinta", umur: 17, jenisKelamin: "perempuan" }]
```

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=High%20Order%20Function" />](../004_High_Order_Function)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Immutability" />](../006_Immutability)
