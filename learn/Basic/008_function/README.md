## Fungsi

Function (fungsi) adalah sebuah sub-program / pecahan code yang dapat dipanggil berulang kali di manapun dan kapanpun. Function digunakan agar program yang dibuat lebih efisien dan mudah untuk dibaca, sehingga akan lebih mudah dalam menangani error.

### Macam-Macam Function

1. Function Declaration:

Function Declaration adalah function yang dapat dideklarasikan baik sebelum atau sesudah function tersebut dipanggil / dijalankan.

Contoh:

```js
function buah() {
  console.log("Durian");
}

buah();
```

2. Function Expression:

Function Expression adalah function yang disimpan ke dalam sebuah variabel, dan variabel tersebut dapat digunakan sebagai function (dipanggil). Namun function expression harus dibuat terlebih dahulu sebelum dipanggil.

Contoh:

```js
const benda = function () {
  console.log("Besi");
};

benda();
```

3. Function Anonymous / Tidak ada nama:

Function anonymous adalah function yang tidak memiliki nama/identifier. Jenis function ini biasa digunakan jika function akan langsung dipanggil atau biasa juga digunakan jika sebuah function membutuhkan parameter function (callback function)

Contoh:

```js
(function () {
  console.log("Halo");
})();
```

4. Function Callback

Function callback adalah function yang biasanya di gunakan sebagai parameter function lainnya. Function callback berfungsi jika kita ingin mengeksekusi kode setelah memanggil suatu function. Biasanya juga function callback adalah function anonymous.

Contoh:

```js
masukkanFunction(function () {
  console.log("hai");
});
```

Function juga bisa memproses data yang dinamis, disitulah Parameter dan Argumen ada.

- Parameter adalah variabel yang digunakan untuk menampung nilai
  yang dikirimkan saat memanggil function.

- Argument adalah nilai yang dikirimkan saat function dipanggil
  dan akan ditampung oleh parameter.

### Sifat Function

Sebuah function boleh mengembalikan sebuah nilai ataupun tidak mengembalikan nilai. Jika ingin mengembalikan sebuah nilai maka gunakan perintah return.

Dinamakan `Void Function` jika sebuah function tersebut tidak mengembalikan sebuah nilai, `Returning Function` ketika dia mengembalikan value.

Contoh:

```js
// Contoh void function
function contohVoidFunction() {
  console.log("Aku tidak mengembalikan nilai");
}

contohVoidFunction();

// Contoh returning function
function contohReturningFunction() {
  // nilai yang dikembalikan harus ditampung dengan variabel
  // atau dengan menjadikan argument dari sebuah function juga bisa
  return "Aku adalah fungsi yang mengembalikan nilai";
}

console.log(contohReturningFunction);
```

### Lingkup Function

Function juga memiliki lingkup untuk menangani variabel yang ingin digunakan, apabila variabel didefinisikan didalam function maka variabel tersebut tidak dapat digunakan jika function tidak dijalankan yang disebut sebagai `Function Scope`.

Contoh 1. Mendefisikan variabel didalam fungsi :

```js
function memancing() {
    let ikan = 'Lele'
    console.log(ikan)
}

console.log(ikan) // Error: ikan tidak terdefinisikan
memancing() // Lele
```

Variabel ikan hanya dapat digunakan saat fungsi memancing() dijalankan karena variabel ikan didefinisikan didalam fungsi sehingga tidak dapat digunakan apabila fungsi memancing() tidak dijalankan, ini lah yang disebut lingkup fungsi (Function Scope).

Contoh 2. Mendefisikan variabel diluar fungsi :

```js
let ikan = 'Gurame'
function kolamIkan() {
    console.log(ikan)
}

console.log(ikan) // Gurame
kolamIkan() // Gurame
```

Variabel ikan dapat digunakan saat fungsi kolamIkan() dijalankan maupun langsung menggunakannya karena variabel ikan didefinisikan diluar fungsi sehingga variabel tersebut merupakan variabel dengan lingkup global (Global Scope).

Contoh 3. Deklarasi variabel didalam dan diluar fungsi :

```js
let noktunal = 'Kelelawar'
let diurnal = 'Gajah'

function hewan() {
    let nokturnal = 'Burung Hantu'
    console.log(nokturnal)
    console.log(diurnal)
}

console.log(noktunal) // Kelelawar
console.log(diurnal) // Gajah
hewan() // Burung Hantu & // Gajah
```

Variabel nokturnal diluar fungsi hewan() memiliki nilai yang berbeda dengan variabel nokturnal didalam fungsi hewan(), karena variabel didalam fungsi memiliki lingkupnya sendiri maka saat fungsi hewan() dijalankan nilai yang didapat dari variabel `nokturnal` adalah "Burung Hantu" bukan "Kelelawar", sedangkan variabel yang didefinisikan diluar fungsi dapat digunakan didalam fungsi maka saat fungsi hewan() dijalankan nilai yang didapat dari variabel `diurnal` adalah "Gajah".


Lihat contoh lengkap untuk [Basic Function](functionBasic.js), [Argumen dan Parameter](parameterAndArgument.js), [Returning function](functionReturn.js), dan [Function Scope](functionScope.js).

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Conditioning" />](../007_conditioning)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Array" />](../009_array)
