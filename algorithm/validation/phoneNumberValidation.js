const phoneNumber = "6281212641324";
const anotherPhoneNumber = "081212641324";

const isValidPhoneNumber = (phoneNumber) => {
  if (isNaN(phoneNumber)) {
    return "No HP harus berupa angka!";
  }

  const isIndonesianFormat = (phoneNumber) => {
    return phoneNumber[0] + phoneNumber[1] !== "62";
  };

  if (phoneNumber[0] !== "0" && isIndonesianFormat(phoneNumber)) {
    return "No HP harus diawali dengan 0";
  }

  if (phoneNumber.length <= 10 && phoneNumber.length >= 14) {
    return "No HP harus diantara 11 sampai 13 digit";
  }

  return `No HP ${phoneNumber} valid`;
};

console.log(isValidPhoneNumber(phoneNumber));
console.log(isValidPhoneNumber(anotherPhoneNumber));

/**
 * Penjelasan Kode
 * Variable phoneNumber berisi No HP dengan awalan 62 atau format Indonesia
 * Variable anotherPhoneNumber berisi No HP biasa yang diawali dengan 0
 *
 * Function isValidPhoneNumber() menerima paramater berupa String no HP
 * di dalam fungsi tersebut terdapat berbagai pengecekan
 *
 * 1. Cek apakah No HP berupa Angka menggunakan fungsi isNan()
 * untuk dokumentasi isNan() silahkan buka https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN?retiredLocale=id
 *
 * 2. Function isIndonesianFormat() yang berguna untuk mengecek apakah no hp tersebut merupakan format Indonesia atau yang biasa diawali dengan 62
 * 3. cek apakah No HP diawali dengan 0 atau 62
 * 4. Cek jumlah karakter / digit pada no hp, umumnya berjumlah antara 11 - 13 digit (CMIIW)
 *
 * Jika semua pengecekan diatas terlewati maka No HP tersebut valid.
 *
 */
