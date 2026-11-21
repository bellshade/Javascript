/**
 * Cek Tahun Kabisat (Leap Year)
 * Tahun kabisat adalah tahun yang habis dibagi 4,
 * kecuali tahun yang habis dibagi 100, tetapi tahun yang habis dibagi 400 adalah tahun kabisat.
 *
 * @param {number} year - Tahun yang ingin dicek
 * @returns {boolean} True jika kabisat, False jika bukan
 */

const isLeapYear = (year) => {
  // Validasi input harus bilangan bulat
  // Number.isInteger menolak NaN, Infinity, desimal, dan string sekaligus
  if (!Number.isInteger(year)) {
    throw new TypeError("Input harus berupa bilangan bulat");
  }

  // Logika utama:
  // (Habis dibagi 400) ATAU (Habis dibagi 4 DAN TIDAK habis dibagi 100)
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

// > isLeapYear(2024)
// true
// > isLeapYear(2023)
// false
// > isLeapYear(2000)
// true
// > isLeapYear(1900)
// false
// > isLeapYear(2100)
// false
// > isLeapYear(NaN)
// ! TypeError: Input harus berupa bilangan bulat
// > isLeapYear(2024.5)
// ! TypeError: Input harus berupa bilangan bulat
// > isLeapYear("2024")
// ! TypeError: Input harus berupa bilangan bulat

// Ekspor untuk pemakaian ulang; dijaga agar file tetap jalan saat di-doctest sebagai ESM
if (typeof module !== "undefined") module.exports = isLeapYear;
