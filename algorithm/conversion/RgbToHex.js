/**
 * Algoritma mengkonversi RGB ke hexadecimal https://en.wikipedia.org/wiki/Web_colors#Converting_RGB_to_hexadecimal
 * @param {number} parameter berupa angka representasi nilai dari warna Red, Green, Blue
 * @returns {string} output berupa kombinasi hexadecimal https://en.wikipedia.org/wiki/Hexadecimal
 */

function RGBToHex(r, g, b) {
  // validasi setiap argument harus berupa angka
  if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number") {
    throw new TypeError("argument harus berupa angka");
  }

  /* Nilai RGB biasanya berada di dalam rentang 0-255
     fungsi toHex adalah mengkonversi masing-masing warna (rgb) ke hexadecimal dengan base/radix 16
     https://en.wikipedia.org/wiki/Radix
     nilai ini bisa kita dapatkan dengan menggunakan method Number.prototype.toString() bawaan dari javascript
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  */

  const toHex = (n) => (n || "0").toString(16).padStart(2, "0");

  // Mengkombinasikan tiap-tiap nilai hexadecimal dari hasil konversi dengan pola #+R+G+B
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(RGBToHex(255, 255, 255) === "#ffffff"); // true
console.log(RGBToHex(255, 99, 71) === "#ff6347"); // true
console.log(RGBToHex(246, 84, 106)); // output: #f6546a
console.log(RGBToHex(255, 87, 51)); // output: #FF5733
