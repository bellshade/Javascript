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
