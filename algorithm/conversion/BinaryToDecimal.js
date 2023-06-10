/**
 * konversi string biner ke desimal
 * @param {string} binaryString
 * @returns {number} return menjadi angka integer
 */

const BinaryToDecimal = (binaryString) => {
  let decimalNumber = 0;
  const BinaryDigits = binaryString.split("").reverse();
  BinaryDigits.forEach((digit, index) => {
    decimalNumber += parseInt(digit) * Math.pow(2, index);
  });
  console.log(`decimal of ${binaryString} is ${decimalNumber}`);
  return decimalNumber;
};

(() => {
  BinaryToDecimal("1111111001");
  BinaryToDecimal("101010101");

  const biner1 = "1111111001";
  const biner2 = "101010101";
  const desimal1 = BinaryToDecimal(biner1);
  const desimal2 = BinaryToDecimal(biner2);
  console.log(desimal1 === 1001);
  console.log(desimal2 === 341);
})();
