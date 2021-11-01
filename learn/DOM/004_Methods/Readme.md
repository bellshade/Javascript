#                                                 DOM Method  
--------------------------------------------------------------------------------------------------------------------------

### Penjelasan 

DOM Methods Ialah sekumpulan Method/Function yang di gunakan untuk melakukan manipulasi pada dokumen atau halaman web sehingga dapat belakukan hal yang diinginkan 

Banyak Sekali Method atau Function Yang dapat di gunakan diantaranya :

* .innerHTML
* .style 
* .appendChild()
* .setAttribute()
* .classList()

### 1. innerHTML 

Method ini dapat di gunakan untuk memasukkan/Mengganti  sebuah Teks atau Element HTML didalam Halaman Web 

contoh :
###### HTML
```html
<div class="percobaan">

</div>
```
Diatas kita ada sebuah element yaitu ```<div>``` yang tidak ada isinya dan di Web tampak seperti gambar dibawah

<img src="img/sebelum1.jpg" alt="toggle" width="50%">

jika di inspect source code seperti gambar di bawah ini 

<img src="img/sebelum2.jpg" alt="toggle" width="50%">

Sekarang saya akan menambahkan ```<a>``` yang berisi text, dengan menggunakan method/fungsi innerHTML caranya:

- pertama kita seleksi div nya
###### Javascript
```js
const app = document.getElementsByClassName('percobaan')[0];
```
- kedua kita masukkan tag dan tulisannya 
```js 
const app = document.getElementsByClassName('percobaan')[0];
app.innerHTML = '<a>Menggunakkan innerHTML</a>';
```
- maka hasilnya akan seperti di bawah ini di browser

<img src="img/hasilpage.jpg" alt="toggle" width="50%">

 jika di inspect source code berubah seperti ini 

<img src="img/hasilcode.jpg" alt="toggle" width="50%">

jika pada elemen html yang di isi ada isinya maka isinya akan di timpa seperti contoh berikut 

###### HTML 
```html 
  <div class="percobaan2">
        <a>ini akan di ganti dengan innerHTML</a>
    </div>
```
di atas kita ada ```<div>``` seperti pada contoh pertama tapi kali ini memiiki isi ```<a>```

- jika di buka di web hasil  seperti gambar di bawah 

<img src="img/sebelumc2.jpg" alt="toggle" width="50%">

- jika di inspect seperti gambar di bawah 

<img src="img/codesebelumc2.jpg" alt="toggle" width="50%">

Disini saya akan mengganti isinya ```<div>``` yang merupakan  ```<a>``` dengan ```<h1>``` berikut caranya :

- pertama kita seleksi div nya
###### Javascript
```js
const app2 = document.getElementsByTagName('div')[1];
```
- kedua kita masukkan tag dan tulisannya 
```js 
const app2 = document.getElementsByTagName('div')[1];
app2.innerHTML = '<h1>Sudah di ganti</h1>';
```
- maka hasilnya akan seperti di bawah ini di browser

<img src="img/sesudahc2.jpg" alt="toggle" width="50%">

 jika di inspect source code berubah seperti ini 

<img src="img/codesesudah.jpg" alt="toggle" width="50%">













 
