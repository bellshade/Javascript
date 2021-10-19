# Function Rest Parameter

Sintaks **rest parameter** memungkinkan suatu fungsi menerima argumen dalam jumlah tak terbatas sebagai **larik (array)**, menyediakan cara untuk merepresentasikan fungsi variadik dalam JavaScript.

Contoh:
```Javascript
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(x); //Output: 326
```