// Cara menconvert title ke slug

/*
 Apa itu Slug ?
 slug adalah bagian pada URL yang biasanya ada setelah nama domain (https://domain.com/ini-adalah-slug)
 slug biasanya digunakan untuk url sebuah artikel blog atau nama barang pada ecommerce
 penulisan slug menggunakan kebab-case.

 contoh slug:
 - cara-menconvert-title-ke-slug
 - laptop-asus-rog
 
 di sini saya akan memperlihatkan 3 cara menconvert title ke slug dengan javascript
*/

const title = "Convert Title To Slug";

// menggunakan split, join, dan toLowerCase
const caraPertama = title.split(" ").join("-").toLowerCase();
console.log(caraPertama);

// menggunakan replace, regex, dan toLowerCase
const caraKedua = title.replace(/ /g, "-").toLowerCase();
console.log(caraKedua);

// menggunakan replaceAll, dan toLowerCase
const caraKetiga = title.replaceAll(" ", "-").toLowerCase();
console.log(caraKetiga);

// result code : "convert-title-to-slug"
