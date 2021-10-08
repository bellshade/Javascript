# Map Objects

`Map` object menyimpan pasangan nilai-kunci `(key-value)` dan mengingat urutan penyisipan kunci yang asli. Nilai apapun (baik objek maupun nilai primitif) dapat digunakan sebagai kata kunci atau nilai.

```javascript
// Membuat Objek
const apel = {name: 'Apel'};
const pisang = {name: 'Pisang'};
const jeruk = {name: 'Jeruk'};

// Membuat Map baru
const buah = new Map();

// Menambahkan Objek ke dalam Map
buah.set(apel, 500);
buah.set(pisang, 300);
buah.set(jeruk, 200);

// Menampilkan tipe Objek
document.getElementById("demo").innerHTML = buah;
// Output : [object Map]
```