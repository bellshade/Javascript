# Reguler Expression
Reguler Expression atau biasa disebut regex, dalam dunia pemerograman sangat penting untuk dipelajari, berikut beberapa alasannya.

## kenapa harus belajar Regex ?
- fungsi utama regex ialah untuk mengolah string atau text, sehingga bisa mencari, memisah, dan atau mengubah sebuah karakter/huruf/baris/kalimat dalam sebuah string
- berperan penting dalam munculnya bahasa pemrograman baru seperti Jaksel language yang sempat terkenal beberapa waktu lalu

## fungsi bawaan yang sering digunakan ketika menggunakan regex

### fungsi ```<RegExp>.test(<String>)```
digunakan untuk mengecek apakah sebuah text memenuhi persyaratan pencarian menggunakan regex.

#### contoh

```javascript
let string = "Namaku fian";
let contoh_regex = /[fian]/;
let hasil = contoh_regex.test(string);  // true

console.log(hasil)                      // mengahasilkan nilai true, karna kata 'fian' ada dalam string tersebut.
```

### fungsi ```<String>.match(<RegExp>)```
digunakan untuk mencari setiap karakter/huruf/kata/kalimat yang ada pada string berdasarkan persyaratan regex.

#### contoh

```javascript
let kalimat = "aku cinta indonesia";

console.log( kalimat.match(/aku cinta (kamu)/) ); // null, karna tidak memenuhi persyaratan dengan regex yang mengharuskan kata 'kamu' ada setelah kalimat 'cinta '

console.log( kalimat.match(/aku cinta (indonesia)/) );  // mengahasilkan array sebagai berikut.
/*  [
 *    'aku cinta indonesia',        // isi text yang di berhasil memenuhi syarat 
 *    'indonesia',                  // kalimat yang ada dalam sebuah "(" dan ")"
 *    index: 0,                     // index dimana syarat regex terpenuhi
 *    input: 'aku cinta indonesia', // nilai string yang di cari
 *    groups: undefined
 *  ]
 */
```

> Penting !, setiap karakter bahkan spasi akan berpengaruh dalam reguler expression (regex)

## materi

### mencari **sebuah karakter atau lebih** ```[any...]```

#### format penulisan
```javascript
/[<karakter 1><karakter 2>dst...]/
```

```javascript
let CONTOH_REGEX_1 = /[a]/;   // mencari karakter a saja
let CONTOH_REGEX_2 = /[abc]/; // mencari karakter a, b dan c
```

#### contoh

```javascript
let SINGLE_CHARACTER = /[a]/;       // hanya satu karakter yang dicari
let MANY_CHARACTER = /[abc]/;       // mencari karakter a, b dan c 
let string = "aku suka javascript"; // contoh string

string.match(SINGLE_CHARACTER)      // akan mengembalikan array yang berisi [ 'a', index: 0, input: 'aku suka javascript', groups: undefined ]
string.match(MANY_CHARACTER)        // akan mengembalikan array yang berisi [ 'a', index: 0, input: 'aku suka javascript', groups: undefined ]
```

> kenapa hasilnya sama ?, karna ```[any...]``` hanya mencari karakter pertama yang memenuhi syarat dalam "[" dan "]"

### mencari semua karakter **kecuali** ```[^any...]```

#### format penulisan
```javascript
/[^<karakter 1><karakter 2>dst...]/
```

```javascript
let CONTOH_REGEX_1 = /[^a]/;   // mencari semua karakter kecuali a saja
let CONTOH_REGEX_2 = /[^abc]/; // mencari semua karakter kecuali a, b dan c
```

#### contoh

```javascript
let SINGLE_CHARACTER = /[^a]/;      // hanya satu karakter yang tidak dicari
let MANY_CHARACTER = /[^abc]/;      // tidak mencari karakter a, b dan c 
let string = "aku suka javascript"; // contoh string

string.match(SINGLE_CHARACTER)      // akan mengembalikan array yang berisi [ 'k', index: 0, input: 'aku suka javascript', groups: undefined ]
string.match(MANY_CHARACTER)        // akan mengembalikan array yang berisi [ 'k', index: 0, input: 'aku suka javascript', groups: undefined ]
```

> kenapa hasilnya sama ?, karna ```[^any...]``` hanya mencari karakter pertama yang tidak ada dalam tanda "[" dan "]"

### mencari semua karakter dalam **cakupan tertentu** ```[a-z...]```

#### format penulisan
```javascript
/[<cakupan 1><cakupan 2>dst...]/
```

```javascript
let CONTOH_REGEX_1 = /[0-9]/;       // mencari semua karakter 1 sampai 9
let CONTOH_REGEX_2 = /[a-z]/;       // mencari semua karakter a sampai z
let CONTOH_REGEX_3 = /[0-9a-z]/;    // mencari semua karakter 0 sampai 9 dan a sampai z
let CONTOH_REGEX_4 = /[0-9a-zA-Z]/; // mencari semua karakter 0 sampai 9, a sampai z dan A sampai Z
```

#### contoh

```javascript
let REGEX_1 = /[a-z]/;      // cakupan a sampai z (lowercase)
let REGEX_2 = /[A-Z]/;      // cakupan A sampai Z (uppercase) 
let REGEX_3 = /[0-9]/;      // cakupan 0 sampai 9 (number) 
let REGEX_4 = /[a-Z]/;      // Error sebagai berikut:
let REGEX_5 = /[a-z]+/;     // kalimat pertama yang memenuhi syarat cakupan a sampai z (lowercase) 
/*
 * Uncaught: SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class
 * Hal ini disebabkan a (lowercase) tidak berformat sama dengan A (uppercase)
 */
 
let string = "1, 2, 3 Sayang Semuanya"
string.match(REGEX_1)      // akan mengembalikan array yang berisi [ 'a', index: 9, input: '1, 2, 3 Sayang Semuanya', groups: undefined ]
string.match(REGEX_2)      // akan mengembalikan array yang berisi [ 'S', index: 8, input: '1, 2, 3 Sayang Semuanya', groups: undefined ]

// contoh fungsi tanda '+'
string.match(REGEX_5)      // akan mengembalikan array yang berisi [ 'ayang', index: 9, input: '1, 2, 3 Sayang Semuanya', groups: undefined ]
```

> Penting !, setiap cakupan karakter harus dalam tipe dan format yang sama **(case sensitive)**.

##  navigasi
[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Basic Program" />](../014_basic_program)