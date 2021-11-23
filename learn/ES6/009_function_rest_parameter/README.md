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

[<img align="left" src="https://api.bellshade.org/badge/navigation?badgeType=previous&text=Spread%20Operator" />](../008_spread_operator)

[<img align="right" src="https://api.bellshade.org/badge/navigation?badgeType=next&text=Default%20Parameter" />](../010_default_parameter)