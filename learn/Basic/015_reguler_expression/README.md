# Reguler Expression
Reguler Expression atau biasa disebut regex, dalam dunia pemerograman sangat penting untuk dipelajari, berikut beberapa alasannya.

## kenapa harus belajar Regex ?
- fungsi utama regex ialah untuk mengolah string atau text, sehingga bisa mencari, memisah, dan atau mengubah sebuah karakter/huruf/baris/kalimat dalam sebuah string
- berperan penting dalam munculnya bahasa pemrograman baru seperti Jaksel language yang sempat terkenal beberapa waktu lalu

## fungsi bawaan yang sering digunakan ketika menggunakan regex

### fungsi ```<RegExp>.test(<String>)```
digunakan untuk mengecek apakah sebuah text memenuhi persyaratan pencarian menggunakan regex.

#### contoh

```
let string = "Namaku fian";
let contoh_regex = /[fian]/;
let hasil = contoh_regex.test(string);  // true

console.log(hasil)                      // mengahasilkan nilai true, karna kata 'fian' ada dalam string tersebut.
```

### fungsi ```<String>.match(<RegExp>)```
digunakan untuk mencari setiap karakter/huruf/kata/kalimat yang ada pada string berdasarkan persyaratan regex.

#### contoh

```
let kalimat = "aku cinta indonesia";

console.log( kalimat.match(/aku cinta (kamu)/) ); // null, karna tidak memenuhi persyaratan dengan regex yang mengharuskan kata 'kamu' ada setelah kalimat 'cinta '

console.log( kalimat.match(/aku cinta (indonesia)/) );  // mengahasilkan array sebagai berikut.
/*  [
 *    'aku cinta indonesia',        // isi text yang di berhasil memenuhi syarat 
 *    'indonesia',                  // kalimat yang ada dalam sebuah "(" dan ")"
 *    index: 0,
 *    input: 'aku cinta indonesia', // nilai string yang di cari
 *    groups: undefined
 *  ]
 */
```

> Penting !, setiap karakter bahkan spasi akan berpengaruh dalam reguler expression (regex)

## materi

### mencari sebuah karakter atau lebih ```[any...]```

#### format penulisan
```
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



##  navigasi
[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Basic Program" />](../014_basic_program)