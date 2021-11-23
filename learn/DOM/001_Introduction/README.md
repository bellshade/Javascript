# Pengenalan Tentang Javascript DOM

teman-teman kali ini kita akan belajar tentang materi yang sangat penting pada bahasa pemrograman Javascript yaitu materi tentang DOM

DOM adalah singkatan dari Document Object Model, DOM ini digunakan untuk menghubungkan file HTML kita dengan javascript, tujuannya agar bisa terjadi interaksi pada website kita.

## DOM selector

DOM selector adalah materi pertama yang kita pelajari , sesuai namanya selector yaitu tujuannya menyeleksi element HTML.
untuk DOM terdapat 5 jenis selector yaitu sebagai berikut:

1. document.getElementById
2. document.getElementByClassName
3. document.getElementByTagName
4. document.querySelector
5. document.querySelectorAll

### document.getElementById()

fungsi document.getElementById berfungsi menyeleksi elemen HTML yang memiliki atribut id
contoh kodenya

```js
// <p id="paragraf">hello</p>
document.getElementById("paragraf");
```

### document.getElementsByClassName()

fungsi document.getElementsByClassName berfungsi menyeleksi elemen HTML yang memiliki atribut class.
contoh kodenya:

```js
// <div class="number">18</div>
document.getElementsByClassName("number");
```

### document.getElementsByTagName()

fungsi document.getElementsByTagName berfungsi menyeleksi elemen HTML dengan nama tag tertentu
contoh kodenya:

```js
// <span>world</span>
document.getElementsByTagName("span");
```

### document.querySelector()

fungsi document.querySelector berfungsi menyeleksi elemen HTML pertama yang ditemui dengan seperti selector css (**#** atau **.** atau **[ ]** , dll).

contoh kodenya:

```js
// <div class="number">18</div>
document.querySelector(".number"); // dengan selector class .
```

### document.querySelectorAll()

fungsi document.querySelectorAll berfungsi menyeleksi semua elemen HTML dengan selector css.

seperti document.querySelector tapi bedanya document.querySelector hanya menyeleksi satu element tapi document.querySelectorAll akan menyeleksi semua element dengan selector css tertentu.

contoh kodenya:

```js
// <div class="number">18</div>
// <div class="number">19</div>
// <div class="number">20</div>
document.querySelectorAll(".number"); //maka semua element dengan class number akan diseleksi
```

---

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=DOM%20Nodes" />](../002_DOM_Nodes)