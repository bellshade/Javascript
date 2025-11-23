/**
 * Cek Tahun Kabisat (Leap Year)
 * Tahun kabisat adalah tahun yang habis dibagi 4,
 * kecuali tahun yang habis dibagi 100, tetapi tahun yang habis dibagi 400 adalah tahun kabisat.
 *
 * @param {number} year - Tahun yang ingin dicek
 * @returns {boolean} True jika kabisat, False jika bukan
 */

const isLeapYear = (year) => {
  // Validasi input harus angka
  if (typeof year !== "number") {
    throw new TypeError("Input harus berupa angka");
  }

  // Logika utama:
  // (Habis dibagi 400) ATAU (Habis dibagi 4 DAN TIDAK habis dibagi 100)
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

// Contoh Penggunaan (Wajib ada console.log)
console.log("2024 adalah kabisat:", isLeapYear(2024)); // true
console.log("2023 adalah kabisat:", isLeapYear(2023)); // false
console.log("2000 adalah kabisat:", isLeapYear(2000)); // true (habis dibagi 400)
console.log("1900 adalah kabisat:", isLeapYear(1900)); // false (habis dibagi 100 tapi tidak 400)
