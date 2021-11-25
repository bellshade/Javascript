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
(function() {
  console.log("Halo");
})();
```

4. Function Callback

Function callback adalah function yang biasanya di gunakan sebagai parameter function lainnya. Function callback berfungsi jika kita ingin mengeksekusi kode setelah memanggil suatu function. Biasanya juga function callback adalah function anonymous.

Contoh:

```js
masukkanFunction(function() {
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

Lihat contoh lengkap untuk [Basic Function](functionBasic.js), [Argumen dan Parameter](parameterAndArgument.js), dan [Returning function](functionReturn.js).

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Looping" />](../007_looping)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Array" />](../009_array)