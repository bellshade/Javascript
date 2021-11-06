//DOM:Traversal
//DOM:Traversal dengan Method parentNode
const pNode = document.getElementById("parentnode");
const toggle = pNode.querySelectorAll("span");
toggle.forEach(function (t1) {
  t1.addEventListener("click", function (e) {
    e.target.parentNode.classList.toggle("select"); //code ini akan menegecek apakah parentNode punya kelas select atau tidak, jika ada akan dihapus jika tidak ada akan di kasih kelas selectnya
    e.target.parentNode.classList.toggle("card"); //code ini akan menegecek apakah parentNode punya kelas card atau tidak, jika ada akan dihapus jika tidak ada akan di berikan kelas cardnya
    e.target.classList.toggle("btn");
  });
});

//DOM:Traversal dengan Method parentElement
const pElement = document.getElementById("parentelement");
const toggleDua = pElement.querySelectorAll("span");
toggleDua.forEach(function (td) {
  td.addEventListener("click", function (e) {
    e.target.parentElement.classList.toggle("select"); //code ini akan menegecek apakah parentElement punya kelas select atau tidak, jika ada akan dihapus jika tidak ada akan di kasih kelas selectnya
    e.target.parentElement.classList.toggle("card"); //code ini akan menegecek apakah parentElement punya kelas card atau tidak, jika ada akan dihapus jika tidak ada akan di berikan kelas cardnya
    e.target.classList.toggle("btn");
  });
});
//DOM:Traversal dengan Method nextSibling
const nSibling = document.getElementById("nextsibling"); //ini akan menangkap div dengan id nextsibling yang membungkus input
const input = nSibling.getElementsByTagName("input")[0]; //ini akan menangkap input , diberikan index setelah code karena di tangkap menggunakan getElementByTagName Yang bersifat/berprilaku seperti array dan memiliki index
input.addEventListener("input", function (e) {
  //memberikkan aksi ketika input di beri input
  e.target.nextSibling.nextSibling.style.backgroundColor = "" + e.target.value; //maka background color div yang nextsibling dari nextsibling dari input menjadi warna yang di ketik di input
});
//DOM:Traversal dengan Method nextElementSibling
const nElSibling = document.getElementById("nextelementsibling"); //ini akan menangkap div dengan id nextelementsibling yang membungkus input
const isian = nElSibling.getElementsByTagName("input")[0]; //ini akan menangkap input , diberikan index setelah code karena di tangkap menggunakan getElementByTagName Yang bersifat/berprilaku seperti array dan memiliki index
isian.addEventListener("input", function (e) {
  //memberikkan aksi ketika input di beri value oleh user
  e.target.nextElementSibling.value = e.target.value; //ini akan memeberikan value berupa kode hexxa dari warna yang di plih oleh user
});
//DOM:Traversal dengan Method previousSibling
const preSibling = document.getElementById("previoussibling"); //ini akan menangkap div dengan id previoussibling yang membungkus input
const inputText = preSibling.getElementsByTagName("input")[1]; //ini akan menangkap input , diberikan index setelah code karena di tangkap menggunakan getElementByTagName Yang bersifat/berprilaku seperti array dan memiliki index
inputText.addEventListener("input", function (e) {
  // memberikan aksi ketika memasukkan value atau mengetik sesuatu
  e.target.previousSibling.previousSibling.value = e.target.value.length; //memberikan nilai berupa angkka kepada input type nomor sesuai jumlah karakter yang di ketik pada input bertipe text
});
//DOM:Traversal dengan Method previousElementSibling
const preEleSibling = document.getElementById("previouselementsibling"); //ini akan menangkap div dengan id previouselementsibling yang membungkus input
const rounded = preEleSibling.getElementsByTagName("input")[0]; //ini akan menangkap input , diberikan index setelah code karena di tangkap menggunakan getElementByTagName Yang bersifat/berprilaku seperti array dan memiliki index
rounded.addEventListener("input", function (e) {
  //memberian akksi etia user mengetik angka pada input tipe number
  e.target.previousElementSibling.style.borderRadius = e.target.value + "%"; //memberian rounded pada div sesuai dengan jumlah angan yang di keti user dan ini memiliki satuan persen jadi border-radius tergantung berapa persen yang di ketik oleh user
});
