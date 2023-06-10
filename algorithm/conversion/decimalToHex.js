// konversi dari desimal ke hexedesimal
function intToHex(num) {
  const angkaHex = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F"
  };
  return angkaHex[num] || num;
}

function decimalToHex(num) {
  const hexOut = [];
  while (num > 15) {
    hexOut.unshift(intToHex(num % 16));
    num = Math.floor(num / 16);
  }
  return intToHex(num) + hexOut.join("");
}

console.log(decimalToHex(999098) === "F3EBA");
console.log(decimalToHex(123) === "7B");
