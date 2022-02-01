## String dan Cara Memanipulasinya

Folder ini berisi penjelasan tentang string lanjutan dan bagaimana cara mengubahnya.

> Ada beberapa kode yang dikomentari karena akan menimbulkan error atau format prettier, hapus komentar tersebut atau salin ke dev tools console untuk mencobanya.

### Cara Lain Mendeklarasikan String

JavaScript memiliki tiga jenis dalam mendefinisikan apakah suatu tipe data termasuk string atau bukan, yaitu:

`''` (Petik Satu), `""` (Petik Dua), dan ` `` ` (_Backtick_).

> Nama lain dari deklarasi backtick adalah **template literal**.

Contoh Penggunaannya:

- [Kutip Satu](anotherStringDeclaration.js#L10-L11)
- [Kutip Dua](anotherStringDeclaration.js#L13-L14)
- [_Backtick_](anotherStringDeclaration.js#L16-L17)

Tetapi dalam penggunaannya juga jika kita tidak teliti, bisa saja menimbulkan [error](anotherStringDeclaration.js#L5-L7).

Untuk penggunaan jenis-jenis deklarasi bisa juga dilakukan dengan syarat menggunakan [escape character](anotherStringDeclaration.js#L26-L27) atau [menggunakan jenis deklarasi yang berlainan](anotherStringDeclaration.js#L20-L24).

### Manipulasi String

#### `.length`

Bisa menggunakan property `length` untuk mengecek panjangnya sebuah string.

```js
const teks = "abc";
console.log(teks.length); // 3
```

Atau lihat contoh [ini](stringManipulation.js#L2-L3).

Perlu diperhatikan, jika sebuah string memiliki spasi, maka spasi tersebut juga dihitung.

#### Concatenation (Penggabungan)

Concatenation atau _concat_ (singkatnya), adalah operasi penggabungan dua string atau lebih menjadi string yang baru.

Misal

```js
const nama = "Junaedi";
console.log(`Halo nama saya ${nama}.`);
```

Data dari object juga bisa digunakan untuk operasi _concat_ ini, contoh

```js
const obj = {
  namaMahluk: "Manusia",
  jenis: "mamalia"
};
console.log(`${obj.namaMahluk} juga termasuk dalam jenis ${obj.jenis}.`);
```

Atau lihat contoh [ini](stringManipulation.js#L6-L32).

#### Mengganti Tulisan (`.replace`)

Untuk mengganti tulisan di dalam string, di JavaScript bisa menggunakan function `replace` untuk mengganti sebuah teks dengan pola tertentu atau hanya tulisan spesifik saja.

```js
const teks = "Perkenalkan nama saya siti";
console.log(teks.replace("siti", "budi")); // Perkenalkan nama saya budi
```

Atau lihat contoh yang [ini](stringManipulation.js#L35-L36)

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Operator" />](../003_operator)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Arithmetic Operation" />](../005_arithmetic_operation)
