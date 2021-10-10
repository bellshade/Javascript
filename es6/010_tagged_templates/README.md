# Tagged Templates

`Tagged templates` adalah fitur lanjutan dari [template_literals](https://github.com/bellshade/Javascript/tree/main/es6/004_template_literals) yang memberikan kita kemudahan dalam mengolah ~~umumnya~~ sebuah kalimat dengan menggunakan fungsi yang disebut dengan *tag*.
Akan tetapi penggunaannya tidak terbatas hanya pada kalimat saja, karena fungsi *tag* tidak terbatas pada mengembalikan nilai *strings* bisa juga berupa *object / array*, semua kembali pada tujuan kita dalam menggunakannya.

contoh sederhana:
```Javascript
let salam = "selamat malam"; // variable yang akan diparse ke dalam fungsi tag
function tagSalam(arg, values) {
  // membuat variable untuk menyimpan strings argumen
  let str0 = arg[0];
  let str1 = arg[1];

  // mengembalikan strings dalam bentuk template literals yang telah diformat
  // 'strings pertama' + 'ekspresi' + 'strings kedua'
  return `${str0}${values}${str1}`;
}

console.log(tagSalam`Halo teman-teman ${salam}.`); // output: Halo teman-teman selamat malam.
console.log(tagSalam`Halo semuanya ${salam}, tetap semangat`); // output: Halo semuanya selamat malam, tetap semangat!
```
contoh kedua:
```Javascript
// penerapan tagged templates dengan kondisi tertentu (conditional formatting)
let person = "Suan";
let waktu = new Date().getHours(); // menyimpan variable waktu secara dinamis dengan format 24h

function myTag(strings, person, jam) {
  let str0 = strings[0];
  let str1 = strings[1];
  let str2 = strings[2];

  let waktu;
  if (jam > 5 && jam < 11) {
    waktu = "pagi hari";
  } else if (jam > 11 && jam < 15) {
    waktu = "siang hari";
  } else if (jam > 15 && jam < 18) {
    waktu = "sore hari";
  } else if (jam > 18 && jam < 24) {
    waktu = "malam hari";
  } else {
    waktu = "subuh";
  }

  return `${str0}${person}${str1}${waktu}${str2}`;
}
let output = myTag`Hi ${person} sekarang sudah ${waktu} waktunya istirahat.`;
console.log(output); // output: Hi Suan sekarang sudah malam hari waktunya istirahat.
let waktuNgoding = myTag`Halo ${person} sudah ${2} waktunya ngoding.`;
console.log(waktuNgoding); // output: Halo Suan sudah subuh waktunya ngoding.
```
contoh penggunaan pada templated css
```Javascript
// penggunaan tagged templates untuk css serta menggunakan rest parameters
function boldText(strings, ...args) {
    let result = ''; // membuat variable untuk menampung hasil akhir
    strings.forEach((str, i) => {
        result += `${str}<span class="textbold">${args[i] || ''}</span>`;
    });
    return result;
}
let doTemplate = boldText`Halo semuanya ${'ini adalah bagian yang dibold'} dan ${'ini juga'}`;
console.log(doTemplate);
```
`Output:` Halo semuanya **ini adalah bagian yang dibold** dan **ini juga**

Dalam penerapannya `Tagged Templates` banyak digunakan untuk:
* Escaping HTML Tags / Sanitize HTML
* Localization (translation and internationalization)
* CSS Libraries
* dan lainnya.

Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates