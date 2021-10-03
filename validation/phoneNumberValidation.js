const phoneNumber = "6281212641324"; // No HP dengan format +62 atau format Indonesia
const anotherPhoneNumber = "081212641324"; // No HP biasa yg diawali 0

const isValidPhoneNumber = (phoneNumber) => {
  // cek apakah no hp berupa angka menggunakan fungsi isNan();
  // untuk dokumentasi isNan() silahkan buka https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN?retiredLocale=id
  if (isNaN(phoneNumber)) {
    return "No HP harus berupa angka!";
  }

  //  cek apakah no hp tersebut merupakan format Indonesia atau yang biasa diawali dengan 62
  const isIndonesianFormat = (phoneNumber) => {
    return phoneNumber[0] + phoneNumber[1] !== "62";
  };

  // cek apakah no hp diawali dengan 0 atau 62
  if (phoneNumber[0] !== "0" && isIndonesianFormat(phoneNumber)) {
    return "No HP harus diawali dengan 0";
  }

  // cek jumlah karakter / digit pada no hp
  // umumnya berjumlah antara 11 - 13 digit (CMIIW)
  if (phoneNumber.length <= 10 && phoneNumber.length >= 14) {
    return "No HP harus diantara 11 sampai 13 digit";
  }

  return `No HP ${phoneNumber} valid`;
};

console.log(isValidPhoneNumber(phoneNumber));
console.log(isValidPhoneNumber(anotherPhoneNumber));
