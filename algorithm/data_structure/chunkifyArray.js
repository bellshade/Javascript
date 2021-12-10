const dataList = ["a", "b", "c", "d", "e", "1", "2", "3", "4", "5"];

/**
 * @param { Array[*] } arr
 * @param { Integer } splitInto
 * @returns { Array[Array[*]] }
 */
function chunkifyArray(arr, splitInto) {
  if (!Number.isInteger(splitInto)) {
    throw new Error("Array chunk must be divided by an integer number!");
  }
  let returnArr = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if ((i + 1) % splitInto === 0 || i + 1 === arr.length) {
      returnArr = [...returnArr, temp];
      temp = [];
    }
  }
  return returnArr;
}

/**
 * Penjelasan Kode:
 *
 * function chunkifyArray akan membagi array yang di pass ke parameter arr
 * dan akan coba membagi rata berdasarkan parameter splitInto
 */

console.log(chunkifyArray(dataList, 3));
// >> [ ['a', 'b', 'c'], ['d', 'e', '1'], ['2', '3', '4'], ['5'] ]

console.log(chunkifyArray(dataList, 5));
// >> [ ['a', 'b', 'c', 'd', 'e'], ['1', '2', '3', '4', '5'] ]

console.log(chunkifyArray(dataList, 2));
// >> [ ['a', 'b'], ['c', 'd'], ['e', '1'], ['2', '3'], ['4', '5'] ]
