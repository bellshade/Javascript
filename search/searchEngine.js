/**
 * Search Engine untuk kebutuhan mencari data pada database atau data kita
 * Language : Javascript
 */

// tester data
const testData = require("./data-test.json");

// untuk mendapatkan array dari sebuah keyword
function getKeywords(query) {
  return String(query)
    .toLowerCase()
    .replace(/[^a-z0-9_\s]/g, "") // only alphabet and number
    .split(/\s+/g) // split per word
    .filter(function (data, pos, self) {
      // remove duplicate word
      return self.indexOf(data) === pos;
    })
    .filter((data) => {
      // remove null character
      return data !== "";
    })
    .map((token) => {
      // remove verb
      return token.replace(/(ing|s)$/, "");
    })
    .sort(); // ASC a~z | 0~9
}

/**
 * // Search Engine
 * @param {Array} array list data yang ingin di cari
 * @param {String} keywords kata kunci dalam pencarian
 * @param {Integer} percentage persentasi bertemu dengan data yang sesuai
 * @returns
 */
function search(array, keywords, percentage) {
  const keyword = getKeywords(keywords);
  return array.filter((data) => {
    if (typeof data === "object" && !Array.isArray(data) && data !== null) {
      const keys = Object.keys(data);
      const match = [];
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (
          keyword.some((kw) => {
            return String(data[key]).includes(kw);
          })
        ) {
          match.push(key);
        }
      }
      return (
        parseFloat(((match.length / keys.length) * 100).toFixed(2)) >=
        percentage
      );
    }
    return false;
  });
}

// result
console.log(search(testData, "is women", 40));
