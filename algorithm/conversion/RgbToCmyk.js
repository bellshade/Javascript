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

const RgbToCmyk = (r, g, b) => {
  // Validasi input: setiap nilai harus bilangan bulat 0-255
  // Number.isInteger menolak NaN, Infinity, desimal, dan string sekaligus
  const isValid = (value) =>
    Number.isInteger(value) && value >= 0 && value <= 255;

  if (!isValid(r) || !isValid(g) || !isValid(b)) {
    throw new Error("Nilai RGB harus bilangan bulat antara 0 sampai 255");
  }

  // Normalisasi RGB ke rentang 0-1
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const k = 1 - Math.max(red, green, blue);

  // Jika warna hitam pekat, hindari pembagian dengan nol
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  // Pembulatan nilai agar rapi
  return {
    c: Math.round(((1 - red - k) / (1 - k)) * 100),
    m: Math.round(((1 - green - k) / (1 - k)) * 100),
    y: Math.round(((1 - blue - k) / (1 - k)) * 100),
    k: Math.round(k * 100)
  };
};

// > RgbToCmyk(255, 0, 0)
// { c: 0, m: 100, y: 100, k: 0 }
// > RgbToCmyk(0, 255, 0)
// { c: 100, m: 0, y: 100, k: 0 }
// > RgbToCmyk(0, 0, 0)
// { c: 0, m: 0, y: 0, k: 100 }
// > RgbToCmyk(255, 255, 255)
// { c: 0, m: 0, y: 0, k: 0 }
// > RgbToCmyk(NaN, 0, 0)
// ! Error: Nilai RGB harus bilangan bulat antara 0 sampai 255
// > RgbToCmyk(300, 0, 0)
// ! Error: Nilai RGB harus bilangan bulat antara 0 sampai 255

// Ekspor untuk pemakaian ulang; dijaga agar file tetap jalan saat di-doctest sebagai ESM
if (typeof module !== "undefined") module.exports = RgbToCmyk;
