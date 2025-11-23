/**
 * Mengonversi nilai warna RGB ke format CMYK
 * RGB: Red, Green, Blue (0-255)
 * CMYK: Cyan, Magenta, Yellow, Key/Black (0-100%)
 *
 * Rumus:
 * R' = R/255, G' = G/255, B' = B/255
 * K = 1 - max(R', G', B')
 * C = (1 - R' - K) / (1 - K)
 * ... dst
 *
 * @param {number} r - Nilai Red (0-255)
 * @param {number} g - Nilai Green (0-255)
 * @param {number} b - Nilai Blue (0-255)
 * @returns {object} Object berisi nilai c, m, y, k dalam persen
 */

const RgbToCmyk = (r, g, b) => {
  let c = 0;
  let m = 0;
  let y = 0;
  let k = 0;

  // Validasi input
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("Nilai RGB harus antara 0 sampai 255");
  }

  // Normalisasi RGB ke rentang 0-1
  r = r / 255;
  g = g / 255;
  b = b / 255;

  k = 1 - Math.max(r, g, b);

  if (k === 1) {
    // Jika warna hitam pekat
    return { c: 0, m: 0, y: 0, k: 100 };
  } else {
    c = ((1 - r - k) / (1 - k)) * 100;
    m = ((1 - g - k) / (1 - k)) * 100;
    y = ((1 - b - k) / (1 - k)) * 100;
    k = k * 100;
  }

  // Pembulatan nilai agar rapi
  return {
    c: Math.round(c),
    m: Math.round(m),
    y: Math.round(y),
    k: Math.round(k)
  };
};

// Contoh Penggunaan (Wajib ada console.log)
console.log(RgbToCmyk(255, 0, 0)); // Merah -> { c: 0, m: 100, y: 100, k: 0 }
console.log(RgbToCmyk(0, 255, 0)); // Hijau -> { c: 100, m: 0, y: 100, k: 0 }
console.log(RgbToCmyk(0, 0, 0)); // Hitam -> { c: 0, m: 0, y: 0, k: 100 }
console.log(RgbToCmyk(255, 255, 255)); // Putih -> { c: 0, m: 0, y: 0, k: 0 }
