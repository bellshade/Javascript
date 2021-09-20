// Implementasi caesar chiper di javascript

const caesarShift = (kataAwal, shifting) => {
  if (!shifting) {
    return false;
  }
  if (shifting < 0) {
    return caesarShift(kataAwal, shifting + 26);
  }

  const shift = [...kataAwal].map((txt) => {
    // Cek apakah text yang di mapping termsuk dalam rangkaian huruf alphabet, jika sama proses hurufnya
    if (txt.match(/[a-z]/i)) {
      const code = txt.charCodeAt();

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shifting) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shifting) % 26) + 97);
      }
    } else {
      // jika tidak termasuk, akan dikembalikan tulisan yang bukan huruf alphabet
      return txt;
    }
  });

  // Join semua array yang isinya string dengan ""
  return shift.join("");
};

const kataAwal = "Halo Dunia";
const jumlahShifting = 3;
const kembaliKeAwal = -Math.abs(jumlahShifting); // Mengubah bilangan positif menjadi negatif

// Konversi string dengan jumlah shift yang sudah ditentukan
const shifted = caesarShift(kataAwal, jumlahShifting);

console.log(shifted === "Kdor Gxqld"); // true

// String yang dikonversi bisa di kembalikan ke kalimat awal
// dengan jumlah shift negatif dari jumlah aslinya
console.log(caesarShift(shifted, kembaliKeAwal) === kataAwal); // true

/**
 * Penjelasan code:
 * Caesar chiper atau sandi geser adalah teknik enkripsi text paling sederhana.
 * Sandi ini hanya mengubah huruf alphabet yang memerlukan jumlah geseran
 *
 * Misal ingin mengencrypt huruf "teko" dengan jumlah geseran 2
 * Yang terjadi
 *
 * t = u => v
 * e = f => g
 * k = l => m
 * o = p => q
 *
 * Jadi, huruf "teko" jika di geser 2 kata akan menjadi 'vgmq'
 *
 * Lebih lengkap, baca
 * https://id.wikipedia.org/wiki/Sandi_Caesar
 **/
