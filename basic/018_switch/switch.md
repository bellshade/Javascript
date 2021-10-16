# SWITCH

## Apa itu switch
switch adalah suatu merupakan perbandingan juga. switch ini hampir sama seperti if dan else. bedanya switch tidak terlalu bercabang  seperti if dan else. di switch terdapat case atau kasus. jika case itu sama maka akan mengconsole jika tidak akan ke tahap/case berikutnya.


## Langsung ke demonya agar lebih paham
```js
let num = 2 * 3 
switch (num) {
    case 3: 
        console.log(false);
        break;
    case 5:  
        console.log(false);
        break;
    case 6:
        console.log(true);
        break
    default:
        console.log("tidak ada yang benar");
}
```
## `Penjelasan`
Diawal kita sudah membuat variable num dengan isi `2 * 3` , nah selanjutnya membuat switch dengan cara mengetik kata kunci `switch (yang ingin dibandingkan)`. 
```js
switch (yang ingin di bandingkan){

}
```
Di switch terdapat kata kunci `case` dan `break`
```js
switch (num) {
    case:
        break;
}
```
- case : merupakan kasus. misalnya jika kamu membuat suatu case maka kamu harus seperti ini
```js
case (menurut perhitungan kamu):
    // jika case ini benar maka ini akan mengconsole case ini. jika tidak maka case ini akan di lewati 
```
- break : fungsi break apa ya ? fungsi break sendiri akan bekerja jika di suatu case,jika cocok maka break akan berhenti.jika tidak akan lanjut

## NOTE
jika tidak diberi break maka hasil akan error dan akan bentrok

- default : merupakan default, fungsinya jika di case tersebut tidak ada yang cocok. maka akan langsung ke default

### Contoh lagi
```js
// saya ingin membuat variable value yang berisi 3 + 3
let value = 3 + 3
// langsung dibuat switch nya
switch (value) {
    // saya akan membuat kasus pertama dengan isian 4
    case 4: 
        console.log(false);
        // jangan lupa menambah break
        break;
    case 6:
        console.log(true);
        break;
    case 7:
        console.log(false);
        break;
    default:
        console.log("tidak ada yang benar");
}
``` 
### Output
`true`