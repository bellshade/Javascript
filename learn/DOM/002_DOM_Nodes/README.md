# DOM Nodes
Pada materi kedua ini kita akan belajar tentang Javascript DOM Nodes, apa itu DOM Nodes ?.

## Node
Node ibaratnya simpul, ada simpul utama, cabang dan lain-lain. Setiap satu elemen HTML yang kita seleksi itu adalah Node.

Node memiliki banyak tipe, diantaranya:
1. document
2. element
3. text
4. attribute 

kumpulan Node dibagi 2 yaitu: NodeList dan HTMLCollection, yang nanti akan dibahas dimateri selanjutnya.


## selector
saat kita menyeleksi element HTML dengan DOM selector seperti materi pertama kita akan bisa tahu tipe Node yang diseleksi dengan `console.log()`

contoh kodenya:
```javascript
// seleksi DOM misal:
let paragraf = document.getElementsByTagName("p");
// ketik console.log untuk mengetahui hasilnya
console.log(paragraf); // Node yang diseleksi bertipe HTMLCollection 
```
supaya lebih paham coba lihat tabel berikut ini:
| DOM selector                    | Tipe Node yang dihasilkan     |
|---------------------------------|----------------|
| document.getElementById         | element        |
| document.getElementsByClassName | HTMLCollection |
| document.getElementsByTagName   | HTMLCollection |
| document.querySelector          | element        |
| document.querySelectorAll       | NodeList       |

atau jalankan file `index.html` dan `Nodes.js` lalu lihat output di console.


[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Introduction" />](../001_Introduction)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Collections" />](../003_Collections)