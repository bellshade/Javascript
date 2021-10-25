# DOM Collections
DOM Collections merupakan sebuah method yang hampir mirip seperti sebuah array namun perlu diingat bahwa **HTML Collections bukan sebuah array**, HTML Collections mirip dengan array karena bisa menggunakan loop, memiliki index, dan memiliki `.length` namun kalian tidak bisa menggunakan method `.push()` / `.pop()` atau semacamnya.

**Referensi**: [Apa itu HTML Collections beserta property dan methodnya](https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp)

## Apa saja HTML Collections itu?
HTML Collections terdiri atas 2 method yaitu:
- `.getElementsByTagName()` - Mencari elemen sesuai tag
- `.getElementsByClassName()` - Mencari elemen sesuai class

## Apa saja yang bisa dilakukan?
- **Query yang mudah** - Kita bisa mencari elemen yang sama dengan mudah dengan menggunakan index sebagai identitas elemen tersebut
- **Akses yang mudah** - Kita bisa mengakses seluruh elemen sekaligus dengan mudah dengan menggunakan loop

**Referensi**: [Cek selengkapnya](https://www.informit.com/articles/article.aspx?p=1333888&seqNum=4)

## Bagaimana cara pemakaiannya?

Berikut cara menggunakan method `.getElementsByTagName()`:

**HTML**
```html
<p>Paragraf 1</p>
<p>Paragraf 2</p>
<p>Paragraf 3</p>
```
**Javascript**
```js
const p = document.getElementsByTagName('p')
// Menyimpan seluruh elemen p yang ada pada dokumen 
// kedalam variable p
```
Maka variable `p` pada Javascript bisa kita referensikan seperti:
```js
const p = [
    '<p>Paragraf 1</p>',
    '<p>Paragraf 2</p>',
    '<p>Paragraf 3</p>'
]
```
Terbentuk seperti sebuah array, tapi sekali lagi **HTML Collections bukanlah array** yang sempurna, kita bisa menggunakan index untuk mengambil elemennya contohnya:
```js
const p = document.getElementsByTagName('p')
const p1 = p[1] // p1 = elemen dari variable p index ke-1
console.log(p1)
/* Expected output:
   <p>Paragraf 2</p>
*/
```
**Catatan**: Index akan selalu dimulai dengan 0. 
Method ini mengklasifikasi elemen menurut nama tag-nya.

Selanjutnya cara menggunakan method `.getElementsByClassName()`

**HTML**
```html
<p class="Class">Paragraf 1</p>
<p class="Class">Paragraf 2</p>
<p class="Class">Paragraf 3</p>
<p class="ClassLain">Paragraf 4</p> 
```
**Javascript**
```js
const p = document.getElementsByClassName('Class')
// Menyimpan seluruh elemen yang memiliki class "Class"
// kedalam variable p
```
Cara penggunaan method ini sama, terbentuk seperti array dan memiliki index, namun pengklasifikasiannya berbeda, method ini mengklasifikasi menurut nama classnya.

## HTML Collection with Loop
Ada kala kita ingin mengubah seluruh elemen atau elemen tertentu, dengan HTML Collection kita bisa melakukan hal tersebut, Berikut salah satu caranya:

**HTML**
```html
<p>Paragraf ke-</p>
<p>Paragraf ke-</p>
<p>Paragraf ke-</p>
```
**Javascript**
```js
const p = document.getElementsByTagName('p') 
// Menyimpan seluruh elemen dengan tag p

// Menggunakan for loop untuk mengatasi p satu per satu
// dengan menggunakan method .length
for (var i = 0; i < p.length; i++) {
	p[i].innerText += `${i}`
}
```
Expected output:

(Gambar)

## References
Selengkapnya kalian bisa mengunjungi [website berikut](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)