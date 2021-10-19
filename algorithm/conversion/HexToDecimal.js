// konversi dari hexadesimal ke desimal

function hexToInt(hexNum) {
  const numArr = hexNum.split(""); // ubah ke array
  numArr.map((item, index) => {
    if (!(item > 0)) {
      switch (item) {
        case "A":
          return (numArr[index] = 10);
        case "B":
          return (numArr[index] = 11);
        case "C":
          return (numArr[index] = 12);
        case "D":
          return (numArr[index] = 13);
        case "E":
          return (numArr[index] = 14);
        case "F":
          return (numArr[index] = 15);
      }
    } else numArr[index] = parseInt(item);
  });
  return numArr;
}

function hexToDecimal(hexNum) {
  const intItemsArr = hexToInt(hexNum);
  return intItemsArr.reduce((accumulator, current, index) => {
    return (
      accumulator + current * Math.pow(16, intItemsArr.length - (1 + index))
    );
  }, 0);
}

console.log(hexToDecimal("5DE9A"));
console.log(hexToDecimal("3D"));
