# DOM Nodelist

DOM Nodelist sendiri adalah kumpulan Node yang diekstrak melalui dokumen HTML. Jika kalian sudah pernah mempelajari `HTML Collection` sebelumnya, maka kalian mungkin bisa melihat perbedaan yang tidak terlalu jauh dengan `Nodelist`. Pembuatan `Nodelist` sendiri biasanya menggunakan `querySelectorAll()`

## Nodelist Method

Nodelist memiliki beberapa method seperti :

- **Nodelist.item() :**
  `Digunakan untuk mengembalikan item dalam daftar menurut indeksnya.`
- **Nodelist.entries() :**
  `Berguna untuk mengembalikan iterator untuk mendapatkan key atau value.`
- **Nodelist.forEach() :**
  `Digunakan untuk mengambil semua elemen yang ada pada Nodelist.`
- **Nodelist.keys() :**
  `Berguna untuk mengembalikan iterator keys dari key atau value berupa urutan index 0 dan seterusnya.`
- **Nodelist.values() :**
  `Berguna untuk mengembalikan iterator values dari key atau value yang ada pada collection.`

## Penggunaan Nodelist (Studi Kasus Pertama)

`HTML :`

```html
<p>Halo Dunia!</p>
<p>Halo Bellshade!</p>
<p id="test"></p>
```

`Javascript :`

```javascript
const nodeList = document.querySelectorAll("p");
const test = document.getElementById("test");

// Mengambil elemen nodelist menggunakan index
const text = document.createTextNode(`Saya berkata : ${nodeList[0].innerHTML} & ${nodeList[1].innerHTML}`);
test.appendChild(text);

// Membuat semua elemen <p> memiliki text berwarna biru
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.color = "blue";
}

// Membuat semua elemen <p> memiliki background hitam
nodeList.forEach((node) => (node.style.backgroundColor = "black"));
```

## Penjelasan

Diawal kita buat terlebih dahulu beberapa elemen `<p>` yang akan kita manipulasi dengan DOM, lanjut ke Javascript kita mulai dengan menyeleksi elemen `<p>` menggunakan `querySelectorAll()` dan kita juga mengambil elemen `<p>` satunya dengan id `test` menggunakan `getElementById()`. Langkah selanjutnya kita akan gabungkan elemen yang ada pada `Nodelist` menggunakan properti `innerHTML`, terlihat pada implementasi elemen `Nodelist` kita menggunakan `[0]` dan `[1]` karena pada dasarnya elemen `Nodelist` memiliki index yang sama seperti `Array`.

Kita juga menggunakan `for loop` untuk mengambil semua elemen yang ada pada `Nodelist` untuk memberi warna biru pada text elemen `<p>` dan penggunaan `forEach` disini sama halnya dengan `for loop`, yakni mengambil semua elemen yang ada pada `Nodelist` dan memanipulasi elemen `<p>` dengan memberi background hitam.

**Hasil:**

<img src="img/nodelist1.png" alt="toggle" width="60%">

## Penggunaan Nodelist (Studi Kasus Kedua)

`HTML :`

```html
<input type="checkbox" />
<input type="checkbox" />
<input type="checkbox" />
```

`Javascript :`

```javascript
const checkbox = document.querySelectorAll("input[type=checkbox]");

// Mengambil elemen nodelist menggunakan for of untuk memanipulasi checkbox agar terceklis untuk pertama kali
for (const check of checkbox) {
  check.checked = true;
}
```

## Penjelasan

Pada studi kasus kedua ini kita ingin mengambil semua elemen input bertipe `checkbox`, tentu dengan menggunakan `Nodelist` akan menjadi lebih mudah karena kita bisa langsung mengambil semua inputnya. Pertama kita seleksi semua elemennya menggunakan `querySelectorAll()` sama seperti studi kasus pertama, setelahnya kita akan menggunakan `for of` untuk mengambil elemennya satu per satu untuk kita manipulasi checkboxnya agar terceklis untuk pertama kali.

**Hasil:**

<img src="img/nodelist2.png" alt="toggle" width="40%">

**Referensi:** [HTML DOM Nodelist W3School](https://www.w3schools.com/js/js_htmldom_nodelist.asp)
**Referensi:** [HTML DOM Nodelist MDN](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Event Bubbling & Capturing" />](../008_Event_Bubbling_and_Capturing)
