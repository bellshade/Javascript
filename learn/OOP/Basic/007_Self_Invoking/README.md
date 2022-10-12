# Self-Invoking Function

`Self-Invoking Function` adalah function yang mengeksekusi dirinya sendiri segera pada saat
kode function tersebut selesai dibaca oleh JavaScript engine. Banyak developer yang lebih suka
menyebutnya sebagai Immediately-invoked Function Execution (IIFE, dieja: iffy ) untuk
menghindari kerancuan dengan istilah recursive function yang juga berarti function yang
mengeksekusi dirinya sendiri tetapi dalam konteks yang berbeda. Fitur ini adalah fitur unik dalam
bahasa JavaScript yang setahu saya tidak ada dalam bahasa lain kecuali mungkin bahasa
functional seperti Haskell dan Erlang.

Berikut ini ![Output](selfInvoking.js) contoh dari self-invoking function. Begitu halaman HTML dimuat oleh browser,
kita akan melihat output log di JavaScript console. Perhatikan tambahan tanda kurung, satu
sebelum kata function, tiga setelah kurung kurawal penutup body. Karena function ini otomatis
dieksekusi, kita tidak perlu memberinya nama.

```Javascript
(function() {
    console.log('Self-Invoking Function');
}());

//self-invoking function dengan parameter
(function(name) {
    console.log('Halo,' + name);
}('OM'));
```