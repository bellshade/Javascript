// tahap menyeleksi
let dom1 = document.getElementById("paragraf"); // menyeleksi menggunakan document.getElementById
let dom2 = document.getElementsByClassName("kata"); // menyeleksi menggunakan document.getElementsByClassName
let dom3 = document.getElementsByTagName("p"); // menyeleksi menggunakan document.getElementsByTagName
let dom4 = document.querySelector("#paragraf"); // menyeleksi menggunakan document.querySelector
let dom5 = document.querySelectorAll("span.kata"); // menyeleksi menggunakan document.querySelectorAll

// tahap logging
console.log(`hasil menggunakan document.getElementById: ${dom1}`);
console.log(`hasil menggunakan document.getElementsByClassName: ${dom2}`);
console.log(`hasil menggunakan document.getElementsByTagName: ${dom3}`);
console.log(`hasil menggunakan document.querySelector: ${dom4}`);
console.log(`hasil menggunakan document.querySelectorAll: ${dom5}`);
