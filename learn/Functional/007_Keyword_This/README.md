# _The Keyword This_

Kata kunci `this` digunakan untuk mengakses properti lain di dalam objek parentnya / objek yang sama, untuk pemahaman mengenai kata kunci `this` silahkan dibaca, dipahami, dan dicoba contoh kode dibawah ini.

## Contoh & Penjelasan :

```js
// Membuat objek dan menampilkan data didalamnya
const buah = {
    nama: 'Jeruk',
    warna: 'Oranye',
    rasa: 'Manis',
    namaBuah() {
        return nama
    },
    warnaBuah() {
        return this.warna
    },
    fakta() {
        return `Buah ${this.nama} berwarna ${this.warna} rasanya ${this.rasa}`
    }
}

console.log(buah.namaBuah()) // Error: 'nama' tidak terdefinisikan
```

Objek `nama` tidak terdefinisikan karena merupakan properti didalam objek yang sama bukan sebuah variabel sehingga untuk mengakses properti objek diperlukan kata kunci `this` sebelumnya.

```js
console.log(buah.warnaBuah()) // Oranye
```

Dengan menambahkan kata kunci `this` maka properti objek dapat diakses.

Dan dapat diimplemantasikan pada fungsi didalam objek tersebut.

```js
console.log(buah.fakta()) // Buah Jeruk berwarna Oranye rasanya Manis
```

Membuat objek lain untuk mencoba akses properti pada objek `buah`.

```js
const hewan = {
    nama: 'Monyet',
    aksi: 'Melompat',
    makan() {
        return `${this.nama} ${this.aksi} untuk mengambil ${buah.nama} yang berwarna ${buah.warnaBuah()}`
    },
    cekThis() {
        console.log("Nilai dari 'this' adalah", this)
    }
}

console.log(hewan.makan()) // Monyet Melompat untuk mengambil Jeruk yang berwarna Oranye
```

Alhasil seluruh properti dalam objek buah juga dapat diakses oleh objek lain.

Kemudian untuk mengetahui isi dari `this` bisa dicoba jalankan fungsi cekThis() yang ada didalam objek `hewan`. 

```js
console.log(hewan.cekThis()) // Nilai dari 'this' adalah {hewan Object}
```

Alhasil yang ditampilkan adalah objek `hewan`, oleh karena itu properti didalam objek `hewan` dapat diakses oleh fungsi cekThis() yang ada didalamnya.

Dan terakhir coba membuat variabel yang mereferensikan fungsi didalam objek hewan.

```js
const isiThis = hewan.cekThis

console.log(hewan.cekThis) // cekThis() { console.log("Nilai dari 'this' adalah", this) }

console.log(isiThis()) // Nilai dari 'this' adalah {window Object}
```

Nahh `this` dari variabel `isiThis` adalah objek `window` bukan objek `hewan` karena nilai dari variabel `isiThis` berisikan baris kode fungsi cekThis() yang mana fungsi tersebut dijalankan diluar objek `hewan` dikarenakan kata kunci `this` menginvokasi objek parentnya sehingga `this` di variabel `isiThis` mengakses properti objek `window` yang merupakan default objek berisikan kumpulan fungsi dari javascript.

Oleh karena itu perlu diperhatikan penggunaan kata kunci `this` agar output yang didapatkan sesuai dengan ekspektasi yang diinginkan.

[Contoh Kode 📂](example.js)

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Immutability" />](../006_Immutability)