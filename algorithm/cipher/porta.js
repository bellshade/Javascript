/**
 * @summary Implementasi Porta Cipher
 * @param {string} string
 * @param {string} keys
 * @description Porta Cipher adalah jenis cipher substitusi polialfabet yang ditemukan oleh Giovanni Battista della Porta. Porta chiper menggunakan 13 huruf alphabet (A-M) dan (N-Z) yang bersifat timbal balik.
 * @link Penjelasan lebih lanjut: http://practicalcryptography.com/ciphers/porta-cipher/
 * @link Implementasi berdasarkan: http://www.cryptogram.org/downloads/aca.info/ciphers/Porta.pdf
 * @returns string yang telah terenkripsi atau terdekripsi
 * @example portaCipher("hello world")
 * //=> "OYTUBCHJUQ"
 */

function portaCipher(string, keys = "PORTA") {
  /**
   * @summary mengambil kolom berdasarkan index genap
   * @description contoh arrray [[A,B], [C,D], [E,F], ...]
   *  - [A,B] index 0
   *  - [C,D] index 2
   *  - [E,F] index 4
   * @param {string} key
   * @returns
   */
  function getColumn(key) {
    const charACode = 65;
    let temp = key.charCodeAt() - charACode;

    return temp % 2 !== 0 ? --temp : temp;
  }

  /**
   * @summary mengambil baris dari nomor kolom berdasarkan key
   * @param {string} key
   * @returns
   */
  function getCurrentColumnRow(key) {
    const nToZ = "NOPQRSTUVWXYZ";
    const column = getColumn(key);
    const shiftLength = column / 2;
    const endOfShiftLength = nToZ.length + shiftLength;

    return (
      nToZ.substring(shiftLength, endOfShiftLength) +
      nToZ.substring(0, shiftLength)
    );
  }

  /**
   * @summary menukar huruf berdasarkan key di tabel
   * @param {string} key
   * @param {string} charToSwap
   * @returns
   */
  function swapCharFromPeriodicTable(key, charToSwap) {
    const aToMColumn = "ABCDEFGHIJKLM";
    const keyColumn = getCurrentColumnRow(key);

    return aToMColumn.includes(charToSwap)
      ? keyColumn[aToMColumn.indexOf(charToSwap)]
      : aToMColumn[keyColumn.indexOf(charToSwap)];
  }

  /**
   * @summary mengubah string menjadi alfabet saja
   * @description {ABCDEFGHIJKLMNOPQRSTUVWXYZ}
   * @param {string} key
   * @param {string} charToSwap
   * @returns
   */
  function filterToAlphabetOnly(string) {
    return string
      .toUpperCase()
      .split(/[\W\d]/)
      .join("");
  }

  const filteredString = filterToAlphabetOnly(string);
  const filteredKeys = filterToAlphabetOnly(keys);

  const groupOfString = [];

  for (let i = 0; i < filteredString.length; i += filteredKeys.length) {
    groupOfString.push(filteredString.substring(i, i + filteredKeys.length));
  }

  let result = "";

  for (let i = 0; i < groupOfString.length; i++) {
    const currentString = groupOfString[i];

    for (let j = 0; j < currentString.length; j++) {
      result += swapCharFromPeriodicTable(filteredKeys[j], currentString[j]);
    }
  }

  return result;
}

console.log(portaCipher("Andika Eka Kurnia"));
// UGYRXUYSWXAKFRN

console.log(portaCipher("UGYRXUYSWXAKFRN"));
// ANDIKAEKAKURNIA

console.log(portaCipher("Andika Eka Kurnia", "DikDns"));
// OJVWQWSOSYBIMZS

console.log(portaCipher("OJVWQWSOSYBIMZS", "DikDns"));
// ANDIKAEKAKURNIA
