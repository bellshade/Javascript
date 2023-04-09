# Pendahuluan

Intl adalah sebuah objek di dalam JavaScript yang menyediakan fasilitas untuk melakukan operasi internasionalisasi atau pengolahan bahasa-bahasa lain selain bahasa Inggris. Objek Intl ini memungkinkan kita untuk memformat tanggal dan waktu, pengaturan zona waktu, mengubah angka dan mata uang, dan juga mengubah teks sesuai dengan kebutuhan bahasa atau budaya yang berbeda.

## Intl

Objek Intl memiliki beberapa metode dan properti yang dapat digunakan untuk melakukan operasi internasionalisasi, di antaranya:

- Intl.DateTimeFormat: Metode untuk memformat tanggal dan waktu dalam bahasa tertentu.

- Intl.NumberFormat: Metode untuk memformat angka dan mata uang sesuai dengan bahasa dan budaya tertentu.

- Intl.getCanonicalLocales: Properti untuk mendapatkan daftar nama-nama lokalisasi dalam bentuk standar.

- Intl.ListFormat: Metode untuk memformat daftar dalam bahasa tertentu.

- Intl.PluralRules: Metode untuk menentukan bentuk kata yang tepat dalam bahasa tertentu berdasarkan nilai numerik.

- Intl.RelativeTimeFormat: Metode yang memungkinkan kita untuk memformat waktu relatif dengan mudah

Untuk lebih lengkapnya silahkan kunjungi link ini https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

Disini, kita akan berfokus pada Intl.RelativeTimeFormat untuk pemformatan yang mudah dibaca oleh user atau pengguna.

## Intl.RelativeTimeFormat

### Pendahuluan

Anda mungkin menemukan situasi di mana anda perlu menunjukkan perbedaan antara dua tanggal dalam format yang dapat dibaca oleh user. Misalnya, anda mungkin memiliki postingan blog dan ingin menampilkan tanggal publikasi postingan tersebut.
Dalam skenario seperti itu, anda mungkin ingin menunjukkan perbedaan antara tanggal saat ini dan tanggal publikasi postingan. Misalnya, anda mungkin ingin menampilkan sesuatu seperti "2 hari yang lalu" atau "1 bulan yang lalu" atau "2 tahun yang lalu" tergantung pada perbedaan antara tanggal saat ini dan tanggal publikasi postingan.
Dalam JavaScript, ini dapat dicapai dengan menggunakan Intl.RelativeTimeFormat() API. Jadi, mari kita lihat bagaimana kita bisa menggunakan API ini untuk mendapatkan perbedaan tanggal yang bisa dibaca manusia di JavaScript.

### Contoh 1

Berikut adalah contoh sederhana bagaimana Anda dapat menggunakan Object ini.

```js
const olderDate = new Date("2022-10-31");
const currentDate = new Date("2022-11-01");

// bandingkan waktunya
const diff = olderDate - currentDate;

// memformat dengan internationalization Intl
const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

/* 
  variabel ONE_DAY_IN_MILLISECONDS dipakai sebagai acuan waktu yaitu, hari.
  karena variabel diff diatas merupakan nilai dalam milidetik,
  maka pembandingnya juga harus sama yaitu milidetik
*/
const ONE_DAY_IN_MILLISECONDS = 86400 * 1000;

console.log(
  formatter.format(Math.round(diff / ONE_DAY_IN_MILLISECONDS), "day")
);
```

Seperti yang anda lihat, kami membuat dua objek tanggal, satu untuk variable `olderDate` yang berisi object dengan tanggal pada masa lampau dan satu lagi untuk variable `currentDate` yang merepresentasikan tanggal saat ini. Variabel `diff` akan mengembalikan perbedaan antara dua tanggal dalam milidetik.

Selanjutnya, kita membuat instance dari objek Intl.RelativeTimeFormat dan meneruskan opsi `en` locale dan `{ numeric: 'auto' }`. Opsi `en` tentu saja bisa diganti sesuai kebutuhan. Sebagai informasi tambahan opsi `en` merupakan salah satu penulisan BCP 47 Language Tags untuk lebih lanjut silahkan kunjungi https://www.techonthenet.com/js/language_tags.php.Kemudian, kita memanggil method `format()` dari objek `Intl.RelativeTimeFormat` dan mempassing data (harus berupa nilai numerik yang valid) sebagai argument pertama dan "satuan" sebagai hari sebagai parameter kedua. Hasilnya, kami mendapatkan perbedaan tanggal yang dapat dibaca user dalam JavaScript.

### Contoh 2

Melanjutkan contoh di atas, jika kita menggunakan `{numeric: "always"}` di argument kedua pada method `RelativeTimeFormat`, maka hasilnya bukan `yesterday` melainkan `1 day ago`.

```js
const olderDate = new Date("2022-10-31");
const currentDate = new Date("2022-11-01");

// bandingkan waktunya
const diff = olderDate - currentDate;

// memformat dengan internationalization Intl
const formatter = new Intl.RelativeTimeFormat("en", { numeric: "always" });

/* 
  variabel ONE_DAY_IN_MILLISECONDS dipakai sebagai acuan waktu yaitu, hari.
  karena variabel diff diatas merupakan nilai dalam milidetik,
  maka pembandingnya juga harus sama yaitu milidetik
*/
const ONE_DAY_IN_MILLISECONDS = 86400 * 1000;

console.log(
  formatter.format(Math.round(diff / ONE_DAY_IN_MILLISECONDS), "day")
);
```

### Contoh 3

Untuk perbedaan tanggal yang nilainya positif, kita akan mendapatkan hasilnya `tommorow`, bukan `1 day ago`.
Kita dapat menentukan beberapa opsi lain seperti style dan localeMatcher juga.

```js
const futureDate = new Date("2022-11-02");
const currentDate = new Date("2022-11-01");

/* 
    bandingkan waktunya.
    variabel diff ini jika dibagi 86400000,
    maka akan menghasilkan bilangan positif
*/
const diff = futureDate - currentDate;

// memformat dengan internationalization Intl
const formatter = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
  style: "long",
  localeMatcher: "best fit"
});

/* 
  variabel ONE_DAY_IN_MILLISECONDS dipakai sebagai acuan waktu yaitu, hari.
  karena variabel diff diatas merupakan nilai dalam milidetik,
  maka pembandingnya juga harus sama yaitu milidetik
*/
const ONE_DAY_IN_MILLISECONDS = 86400 * 1000;

console.log(
  formatter.format(Math.round(diff / ONE_DAY_IN_MILLISECONDS), "day")
);
```

### Unit satuan yang didukung pada method format

metode `format()` pada argument kedua mendukung unit berikut :

`second | minute | hour | day | week | month | quarter | year`

Masukkan salah satu nilai di atas pada pada argument kedua pada method format. Gunakanlah sesuai kebutuhan.

## Penutup

Sekian tambahan artikel yang dapat disampaikan, mudah-mudah membuat kita semakin mengerti dan memperluas wawasan tentang javascript.

resource lebih lengkap di https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
