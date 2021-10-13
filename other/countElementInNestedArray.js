/**
 * Menghitung kemunculan suatu elemen pada data dengan nilai pencarian yang ditetapkan.
 * Data dapat berupa array atau object, dan dapat berupa nested array atau object.
 * Perhitungan dilakukan secara rekursif pada setiap elemen array, dan setiap value dari object.
 * @example
 * // returns 2
 * countElement([1, 2, 3, 2, 1], 1);
 * @example
 * // returns 4
 * countElement([5, 7, 3, [3, 5, [3, 9]], 3], 3);
 * @example
 * // returns 2
 * countElement({a: 9, b: 8, c: 9}, 9);
 * @example
 * // returns 4
 * countElement([1, 3, 8, {a: 8, c: [1, 8, {d: 8}]}], 8);
 * @param {Object|Array} data - Array atau object untuk menampung elemen yang akan dihitung kemunculannya
 * @param {*} search - Target pencarian
 * @returns {Number} - Mengembalikan jumlah kemunculan elemen pada array atau object secara rekursif
 */
const countElement = (data, search) => {
  let total = 0;
  if (Array.isArray(data)) {
    for (const element of data) {
      if (Array.isArray(element)) {
        total += countElement(element, search);
      } else if (typeof element === "object") {
        total += countElement(Object.values(element), search);
      }
      if (element === search) {
        total++;
      }
    }
  } else if (typeof data === "object") {
    total += countElement(Object.values(data), search);
  }
  return total;
};

console.log(countElement([1, 2, 3, 4, 5, [1, 2, [1, 2], 3], 4], 1)); // 3
console.log(countElement([8, 9, 12, 3, 2, [9, 5, [3, 2], 3], 1], 2)); // 2
console.log(countElement({ a: 2, b: 2, c: 3, d: 4 }, 2)); // 2
console.log(
  countElement(
    [4, 8, 12, [2, 4, 9, 8, { a: 8, b: 7, c: [8, 9], d: { a: 8 } }]],
    8
  )
); // 5

// > countElement([1, 2, 3, 2, 1], 1);
// 2
// > countElement([5, 7, 3, [3, 5, [3, 9]], 3], 3);
// 4
// > countElement({a: 9, b: 8, c: 9}, 9);
// 2
// > countElement([1, 3, 8, {a: 8, c: [1, 8, {d: 8}]}], 8);
// 4
// > countElement([1, 3, 7, 9, 1, 2, 1], 1);
// 3
// > countElement([8, [2, 2, 5], 3, [4, 8, 9], 7, [3, 2, 12, 11], 1], 2);
// 3
// > countElement([[8, 1, 2, [2, 7, [8, 1, [1, 8]]]], [9, 1, 12], 7, [1, [1, 4, 5], [2, 3, 4]], 5, [3, 2, 9, 11], 1], 8);
// 3
