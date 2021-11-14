# DOM Event Listener

Setelah sebelumnya kita belajar tentang Event dan macam-macam Event pada javascript. Sekarang kita akan menerapkannya pada HTML dengan Event Listener

Event listener adalah cara kita memasang Event pada element HTML, jika element terjadi Event maka akan ditangani oleh Event Listener ini apa yang akan terjadi selanjutnya

Cara memakai Event listener. contohnya:

```js
let button = document.getElementById("btn"); // menyeleksi element HTML 
button.addEventListener("click", function(){ // menambahkan Event Listener Click pada element button
    console.log("button telah diklik");
});
```
atau bisa menggunakan eksternal Function, contohnya:

```js
let button = document.getElementById("btn"); // menyeleksi element HTML 
button.addEventListener("click", handleClick); menambahkan Event Listener Click pada element button

function handleClick(){
    console.log("button telah diklik")
};

```
untuk `click` bisa disesuaikan dengan Event yang kalian mau.

