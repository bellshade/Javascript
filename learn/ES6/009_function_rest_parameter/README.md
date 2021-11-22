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

[<img align="left" src="https://cdn.discordapp.com/attachments/696006258792333352/911046517970833428/Previous-prev.png" />](../008_spread_operator)

[<img align="right" src="https://cdn.discordapp.com/attachments/696006258792333352/911046517756944414/Next-next.png" />](../010_default_parameter)