//Tipe Data Boolean
//tipe data number dan boolean tidak diapit dengan tanda petik

let x = true; // <- tipe data boolean hanya bernilai true dan false
let y = false; // <- tipe data boolean hanya bernilai true dan false

console.log(typeof x);
console.log(typeof y);

/*output: 
   boolean
   boolean*/

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater); // <- false karena const a lebih kecil daripada const b
console.log(isLess); // <- true karena const b lebih besar daripada const a

/* output:
  false
  true
  */
