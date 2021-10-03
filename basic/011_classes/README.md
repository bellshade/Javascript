  ## Class

Class adalah template untuk membuat object. Satu class mempunyai satu atau lebih properti atau fungsi.
Satu class dapat menghasilkan banyak object. Semua object mempunyai properti dan fungsi yang sama.
Setiap object bisa mempunyai nilai properti yang berbeda-beda.

1. `syntax class pada javascript`

  gunakan keyword class
  buat nama dari class setelah keyword class (dengan huruf besar di awal)
  selalu masukkan method  constructor() di awalan.

Contoh:

```js
class ClassName {
  constructor() { ... }
}
```

2. `constructor method`

apa itu constructor ? 
    constructor adalah method khusus yang akan dieksekusi pada saat pembuatan objek (instance).
    Biasanya method ini digunakan untuk inisialisasi atau mempersiapkan data untuk objek.
    jika kita tidak memasukkan method constructor pada class yang kita buat, maka javascript akan memasukkan method constructor kosong

3. `class method`

method-method di class dibuat dengan sintaks yang sama dengan sintaks method di object
method-method di class dibuat setelah constructor method.

Contoh:

```js
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
  }
```

Lihat kode lengkapnya [disini](classes.js).
