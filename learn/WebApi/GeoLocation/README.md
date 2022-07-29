# geoLocation web API javascript
GeoLocation web API adalah API yang sudah disediakan oleh browser yang bertujuan untuk memberikan data terkait lokasi anda

Data yang dikirim dapat berupa longitude, latitude dan juga altitude

Cara mengakses geoLocation API adalah dengan `navigator.geolocation.getCurrentPosition`

contoh kodenya seperti ini:
```js
function showGeo() { // inisialisasi fungsi showGeo
    navigator.geolocation.getCurrentPosition(show, error) 
    // memanggil fungsi show jika geolocation diizinkan
    // memanggil fungsi error jika tidak diizinkan (opsional)
}
function show(position) { // deklarasi fungsi show
    console.log(position)
}
function error(err) { // deklarasi fungsi error
    console.log(err)
}
```
Karena keterbatasan sistem maka ada data yang ditampilkan dan ada yang tidak ditampilkan

lihat tabel berikut ini:
| properti                | penjelasan                                     | selalu diberikan |
|-------------------------|------------------------------------------------|------------------|
| coords.latitude         | berisi data latitude, bertipe angka desimal    | ya               |
| coords.longitude        | berisi data longitude, bertipe angka desimal   | ya               |
| coords.accuracy         | berisi akurasi data yang diberikan             | ya               |
| coords.altitude         | berisi posisi kita terhadap permukaan air laut | jika ada         |
| coords.altitudeAccuracy | berisi akurasi data altitude                   | jika ada         |
| coords.heading          | berisi derajat dari utara                      | jika ada         |
| coords.speed            | berisi kecepatan dalam satuan m/s              | jika ada         |
| timestamp               | berisi data waktu dalam format unix            | jika ada         |

untuk program sederhana dari geoLocation API anda bisa melihat contohnya di `index.html` dan `geolocation.js`

API ini dapat memudahkan anda jika ingin membuat aplikasi yang membutuhkan lokasi seperti maps dan GPS