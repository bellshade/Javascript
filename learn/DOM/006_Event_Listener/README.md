# DOM Event Listener

Setelah sebelumnya kita belajar tentang Event dan macam-macam Event pada javascript. Sekarang kita akan menerapkannya pada HTML dengan Event Listener

Event listener adalah sebuah fungsi Javascript yang menangani event yang terjadi pada DOM, bisa menambahkan event maupun menghilangkan event.

## addEventListener
adalah method yang digunakan untuk menambahkan event, contoh penggunaannya :
```js
let button = document.getElementById("btn"); // menyeleksi element HTML 
button.addEventListener("click", function(){ // menambahkan Event Listener Click pada element button
    console.log("button telah diklik");
});
```
atau bisa menggunakan eksternal Function, contohnya:

```js
let button = document.getElementById("btn"); // menyeleksi element HTML 
button.addEventListener("click", handleClick); // menambahkan Event Listener Click pada element button

function handleClick(){
    console.log("button telah diklik");
};

```

## removeEventListener
adalah method yang berguna untuk menghilangkan event pada DOM, contoh penggunaannya:
```js
let button = document.getElementById("btn"); // menyeleksi element HTML 
button.addEventListener("click", function(){ // menambahkan Event Listener Click pada element button
   document.getElementById("input").removeEventListener("change", function(){ // menghilangkan event change pada input
        return true // mereturn apa saja
   });
});
```

Untuk `click` dan `change` bisa disesuaikan dengan event yang kalian mau.

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Events" />](../005_Events)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Traversal" />](../007_Traversal)