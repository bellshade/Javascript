function swapCharFromPeriodicTable(key, charToSwap) {
  const aToMColumn = "ABCDEFGHIJKLM";
  const keyColumn = getCurrentColumnRow(key);

  return aToMColumn.includes(charToSwap)
    ? keyColumn[aToMColumn.indexOf(charToSwap)]
    : aToMColumn[keyColumn.indexOf(charToSwap)];
}
