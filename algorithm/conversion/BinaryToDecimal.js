const BinaryToDecimal = binaryString => {
  let decimalNumber = 0;
  const BinaryDigits = binaryString.split("").reverse();
  BinaryDigits.forEach((BinaryDigits, index) => {
    decimalNumber += BinaryDigits * Math.pow(2, index);
  });
  console.log(`decimal of ${binaryString} is ${decimalNumber}`);
  return decimalNumber;
};

(() => {
  BinaryToDecimal("1111111001");
  BinaryToDecimal("101010101");
})();
