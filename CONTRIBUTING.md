# Panduan Berkontribusi

## Kontributor

Kami sangat senang dan berterima kasih bila anda ikut berkontribusi dalam repositori ini.
Semua boleh ikut berkontribusi walaupun hal kecil dengan pengecualian sebagai berikut:

- Hasil pekerjaan kamu adalah buatan kamu sendiri dan tidak ada hak cipta dari orang lain.
  - Jika ditemukan kesamaan, maka tidak akan kami `merge`.
- Hasil kerja kamu akan berlisensi [MIT](LICENSE) ketika permintaan pull kamu sudah di merged.
- Hasil kerja kamu wajib mengikuti standar dan style koding dari kami.
- Penggunaan nama file bersifat `camelCase` dan berlaku juga untuk variable dan identifier.
- Menggunakan output `console.log()`.
- Menghindari penggunaan library pada koding (jika dibutuhkan silahkan diskusi di [issue](https://github.com/bellshade/JavascriptAlgorithm/issues)).

## Apa Itu Algoritma?

Algoritma adalah langkah-langkah untuk menyelesaikan suatu pekerjaan di mana terdiri dari 3 bagian utama, yaitu:

- Input/masukan, sebelum menjalankan sebuah algoritma maka hal yang pertama harus dilakukan adalah menerima masukan, input dapat berasal dari pengguna ataupun dari langkah sebelumnya.
- Proses, bagian utama dari algoritma yang melakukan pengolahan input yang akan menghasilkan output.
- Output/keluaran, output adalah hasil dari bagian proses, output ini juga bisa digunakan untuk langkah selanjutnya (jika masih ada).

Algoritma harus dikemas sedemikian rupa sehingga memudahkan pembaca untuk memasukkannya ke dalam program yang lebih besar.

Algoritma harus:

- Memiliki nama kelas dan fungsi intuitif yang memperjelas tujuannya bagi pembaca
- Menggunakan konvensi penamaan Javascript dan nama variabel intuitif untuk memudahkan pemahaman
- Fleksibel untuk mengambil nilai input yang berbeda
- Memiliki docstrings dengan penjelasan yang jelas dan/atau URL ke materi sumber
- Berisi doctests yang menguji nilai input yang valid dan salah
- Kembalikan semua hasil perhitungan alih-alih mencetak atau memplotnya

## Testing

Untuk mengikuti standar dari kode kami, kami menggunakan doctesting untuk mengeceknya

### Testing Bawaan

Kita sudah ada testing bawaan untuk mengecek apakah kode kamu masuk standar kami atau belum, sudah ada npm script tinggal pakai. Terdapat prettier dan eslint untuk merapikan juga menguji apakah kode dapat diterima.

Lakukan instalasi terlebih dahulu

```bash
npm install
# or yarn install
```

Untuk memudahkan doctest, ada mode watch yang bisa digunakan. Jika file javascript di save, maka otomatis doctest berjalan.

```bash
npm run doctest-watch
# or yarn doctest-watch
```

Untuk mengecek linting kode, Jalankan

```bash
npm run lint
# or yarn lint
```

Kemudian, untuk menjaga struktur kode tetap rapih, jalankan prettier.

```bash
npm run prettier
# or yarn prettier
```

Jika tidak ada prettier di _code editor_, bisa juga menjalankan prettier dengan mode watch.

```bash
npm run prettier-watch
# or yarn prettier-watch
```

Testing penting bagi kami untuk mengecek apakah kode kamu bisa digunakan atau tidak, jika testing gagal maka kami akan mengecek kembali.

## Pull Request

### Pull Request Yang Baik

- Lakukan fork pada repository kami
- Setelah melakukan fork kamu dibebaskan untuk mengubah atau menambah algoritma
  - Untuk pull request merubah diusahakan kamu menerapkan algoritma yang lebih baik dan lebih mudah
- Setelah merubah, menambah, atau perbaikan dokumentasi, usahakan kamu membuat branch baru

```bash
git checkout -b <branch_name>
git add .
git commit -m "add: menambahkan algoritma baru"
```

- Lakukan push ke branch kamu dan kemudian open pull request

### Pesan Commit

Pesan / message commit harus mengikuti conventional commit. Kami menggunakan bot label agar tidak susah dalam labeling.
Berikut adalah jenis - jenis pesan commit.

- `fix:` untuk memperbaiki bug (label `bug`).
- `feat:` untuk menambahkan algoritma terbaru (label `enhancement`).
- `docs:` untuk menambahkan dokumentasi (label `documentation`).
- `fix(UnknownScope):` memperbaiki algoritma yang sudah ada (label `fix`).

Referensi:
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Contoh penggunaan

```bash
git commit -m "docs: menambahkan dokumentasi"
```

```bash
git commit -m  "feat: menambahkan algoritma terbaru"
```

Pull request `merged` jika:

- Mengikuti standar dan arahan dari `CONTRIBUTING.md`
- Lulus test dan cek dari beberapa test yang sudah kami siapkan

## Tambahan

- Jika ada kendala atau masalah dalam pull request, kamu bisa laporkan masalah pada [issue](https://github.com/bellshade/Javascript/issues)
- Jika ada test yang tidak lewat atau gagal, kami akan mengecek kembali perubahan.

Untuk pull request kami sarankan untuk menjelaskan secara detail yang kamu ubah atau tambahkan, dan bersikap sopan, serta selalu berterima kasih, itu salah satu bentuk tata krama yang baik terhadap sesama contributor dan programmer lainnya.terima kasih sudah berkontribusi di **Javascript**.
