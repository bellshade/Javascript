const string = "bellshade";
const mail = "bellshade@gmail.com";
const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

if (string.match(pattern)) {
  console.log("This is a valid email");
} else if (mail.match(pattern)) {
  console.log("This is a valid email");
} else {
  console.log("Invalid email");
}

/**
 * Penjelasan kode:
 *
 * Match adalah fungsi yang tersedia pada string untuk melakukan pengecekan menggunakan Regex (Regular Expression)
 *
 * Pada kondisi if pertama akan bernilai false karena yang di cek adalah variable yang bernilai kalimat biasa
 * Pada kondisi kedua ini akan bernilai true karena yang di cek adalah sebuah email yang valid
 */
