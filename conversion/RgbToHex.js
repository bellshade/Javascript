function RGBToHex(r, g, b) {
  if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number") {
    throw new TypeError("argument harus berupa angka");
  }

  const toHex = (n) => (n || "0").toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(RGBToHex(255, 255, 255) === "#ffffff"); // true
console.log(RGBToHex(255, 99, 71) === "#ff6347"); // true
console.log(RGBToHex(246, 84, 106)) // output: #f6546a
console.log(RGBToHex(255, 87, 51)) // output: #FF5733