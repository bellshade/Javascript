/**
 * Mengonversi nilai warna RGB ke format CMYK
 * RGB: Red, Green, Blue (0-255)
 * CMYK: Cyan, Magenta, Yellow, Key/Black (0-100%)
 *
 * Rumus:
 * R' = R/255, G' = G/255, B' = B/255
 * K = 1 - max(R', G', B')
 * C = (1 - R' - K) / (1 - K)
 * M = (1 - G' - K) / (1 - K)
 * Y = (1 - B' - K) / (1 - K)
 *
 * @param {number} r - Nilai Red (0-255)
 * @param {number} g - Nilai Green (0-255)
 * @param {number} b - Nilai Blue (0-255)
 * @returns {object} Object berisi nilai c, m, y, k dalam persen
 */

// Cek tipe nilai: harus angka dan bukan NaN
const isNumber = (value) => typeof value === "number" && !Number.isNaN(value);

const validateChannel = (value, name) => {
  if (!isNumber(value)) {
    throw new TypeError(`Nilai ${name} harus berupa angka`);
  }
  if (!Number.isInteger(value) || value < 0 || value > 255) {
    throw new RangeError(
      `Nilai ${name} harus bilangan bulat antara 0 sampai 255`
    );
  }
};

const rgbToCmyk = (r, g, b) => {
  validateChannel(r, "Red");
  validateChannel(g, "Green");
  validateChannel(b, "Blue");

  // Normalisasi RGB ke rentang 0-1
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const k = 1 - Math.max(red, green, blue);

  // Perbandingan eksak aman di sini: nilai RGB sudah dijamin bilangan bulat,
  // sehingga red/green/blue habis dibagi 255 dan k bernilai tepat 1 hanya
  // ketika ketiga kanal bernilai 0 (hitam pekat).
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  // Tiap kanal dibulatkan sendiri-sendiri, jadi warna nyaris hitam bisa
  // menghasilkan k: 99 dengan c, m, y: 0 (lihat contoh di bawah).
  return {
    c: Math.round(((1 - red - k) / (1 - k)) * 100),
    m: Math.round(((1 - green - k) / (1 - k)) * 100),
    y: Math.round(((1 - blue - k) / (1 - k)) * 100),
    k: Math.round(k * 100)
  };
};

// > rgbToCmyk(255, 0, 0)
// { c: 0, m: 100, y: 100, k: 0 }
// > rgbToCmyk(0, 255, 0)
// { c: 100, m: 0, y: 100, k: 0 }
// > rgbToCmyk(0, 0, 0)
// { c: 0, m: 0, y: 0, k: 100 }
// > rgbToCmyk(255, 255, 255)
// { c: 0, m: 0, y: 0, k: 0 }
// > rgbToCmyk(1, 1, 1)
// { c: 0, m: 0, y: 0, k: 100 }
// > rgbToCmyk(2, 2, 2)
// { c: 0, m: 0, y: 0, k: 99 }
// > rgbToCmyk(12.5, 0, 0)
// ! RangeError: Nilai Red harus bilangan bulat antara 0 sampai 255
// > rgbToCmyk(-1, 0, 0)
// ! RangeError: Nilai Red harus bilangan bulat antara 0 sampai 255
// > rgbToCmyk(300, 0, 0)
// ! RangeError: Nilai Red harus bilangan bulat antara 0 sampai 255
// > rgbToCmyk(NaN, 0, 0)
// ! TypeError: Nilai Red harus berupa angka
// > rgbToCmyk("255", 0, 0)
// ! TypeError: Nilai Red harus berupa angka

// Ekspor dijaga karena repo memakai CommonJS, sedangkan doctest mengevaluasi
// file sebagai ESM. Tanpa guard, `require` gagal; dengan `export default`,
// doctest gagal.
if (typeof module !== "undefined") module.exports = rgbToCmyk;
