function portaCipher(string, keys = "PORTA") {
  function getColumn(key) {
    const charACode = 65;
    let temp = key.charCodeAt() - charACode;

    return temp % 2 !== 0 ? --temp : temp;
  }

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

  function swapCharFromPeriodicTable(key, charToSwap) {
    const aToMColumn = "ABCDEFGHIJKLM";
    const keyColumn = getCurrentColumnRow(key);

    return aToMColumn.includes(charToSwap)
      ? keyColumn[aToMColumn.indexOf(charToSwap)]
      : aToMColumn[keyColumn.indexOf(charToSwap)];
  }

  function filterToAlphabetOnly(string) {
    return string
      .toUpperCase()
      .split(/[\W\d]/)
      .join("");
  }

  const filteredString = filterToAlphabetOnly(string);
  const filteredKeys = filterToAlphabetOnly(keys);

  const groupOfString = filteredString.match(
    new RegExp(`.{1,${filteredKeys.length}}`, `g`)
  );

  let result = "";

  for (let i = 0; i < groupOfString.length; i++) {
    const currentString = groupOfString[i];

    for (let j = 0; j < currentString.length; j++) {
      result += swapCharFromPeriodicTable(KEYS[j], currentString[j]);
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
