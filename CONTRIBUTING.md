# Contributing

**contributor**

Kami sangat senang anda telah ikut berkontribusi dalam implementasi algortima, struktur data atau memperbaiki error.
semua boleh ikut berkontribusi walaupun hal kecil dengan pengecualian sebagai berikut:

- hasil pekerjaan kamu adalah buatan kamu sendiri dan tidak ada hak cipta dari orang lain
  - jika kami menemukan kesamaan maka kami tidak `merged`.
- hasil kerja kamu akan berlisensi [MIT](LICENSE) ketika permintaan pull kamu sudah di merged
- hasil kerja kamu wajib mengikuti standar dan style koding dari kami
- penggunaan nama file yang bersifat CamelCase dan berlaku juga untuk variable dan identifier
- menggunakan ouput ``console.log()``
- menghindari penggunaan library pada koding (jika dibutuhkan silahkan diskusi di [issue](https://github.com/bellshade/JavascriptAlgorithm/issues))

**apa itu algoritma?**

Algoritma adalah satu atau lebih fungsi (atau kelas) yang:

- memiliki satu atau lebih inpu
- melakukan beberapa internal kalkulasi atau manipulasi data
- mengembalikan nilai hasil satu atau lebih

Algoritma harus dikemas sedemikian rupa sehingga memudahkan pembaca untuk memasukkannya ke dalam program yang lebih besar.

Algoritma harus memiliki:

- memiliki nama kelas dan fungsi intuitif yang memperjelas tujuannya bagi pembaca
- menggunakan konvensi penamaan Javascript dan nama variabel intuitif untuk memudahkan pemahaman
- fleksibel untuk mengambil nilai input yang berbeda
- memiliki docstrings dengan penjelasan yang jelas dan/atau URL ke materi sumber
- berisi doctests yang menguji nilai input yang valid dan salah
- kembalikan semua hasil perhitungan alih-alih mencetak atau memplotnya


## Testing
Untuk mengikuti standar dari kode kami, kami menggunakan doctesting untuk membuat mengecek

**instalasi**
```bash
npm install doctest
```

penggunaan
```bash
doctest MyFile.js
```
jika memiliki masalah kamu bisa menggunakan perintah ``npx``
```bash
npx doctst MyFile.js
```
testing penting bagi kami untuk mengecek apakah koding kamu bisa digunakan, jika testing gagal maka kami akan mengecek kembali.


## Pull Request
**Pull request yang baik**
- lakukan fork pada repository kami
- setelah melakukan fork kamu dibebaskan untuk mengubah atau menambah algoritma
  - untuk pull request merubah diusahakan kamu menerapkan algoritma yang lebih baik dan lebih mudah
- setelah merubah,menambah, atau perbaikan dokumentasi, usahakan kamu membuat branch baru
```bash
git checkout -b <branch_name>
git add .
git commit -m "add: menambahkan algoritma baru"
```
- lakukan push ke branch kamu dan kemudian open pull request
**saran pesan commit**
``add`` untuk menambah algoritma atau tambahan lainnya
``fix`` untuk mengubah algoritma yang sudah ada atau memperbaiki
``docs`` untuk mengubah atau membuat dokumentasi
``style`` untuk mengubah atau memperbaiki style kode untuk contohnya bisa dilihat pada commit yang diatas

pull request ``merged`` jika:
- mengikuti standar dan arahan dari ``CONTRIBUTING.md``
- lulus test dan cek dari beberapa test yang sudah kami siapkan

**tambahan**
- jika ada kendala atau masalah dalam pull request, kamu bisa laporkan masalah pada [issue](https://github.com/bellshade/JavascriptAlgorithm/issues)
- jika ada test yang tidak lewat atau gagal, kami akan mengecek kembali perubahan.

untuk pull request kami sarankan untuk menjelaskan secara detail yang kamu ubah atau tambahkan, dan bersikap sopan, serta selalu berterima kasih, itu salah satu bentuk tata krama yang baik terhadap sesama contributor dan programmer lainnya.terima kasih sudah berkontribusi di **JavascriptAlgorithm**