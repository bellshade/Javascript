/**
 * Fungsi untuk mengecek apakah string memiliki tanda kurung yang valid.
 * String memiliki tanda kurung yang valid jika setiap kurung buka ("(", "{", "[")
 * ditutup dengan kurung tutup pasangannya (")", "}", "]").
 * Untuk menyelesaikan masalah ini, kita dapat menggunakan stack dengan logika sebagai berikut:
 * 1. Iterasi karakter pada string.
 * 2. Jika bertemu tanda kurung buka, push ke stack.
 * 3. Jika bertemu tanda kurung tutup, pop dari stack untuk mendapatkan tanda kurung buka terakhir.
 * 4. Bandingkan hasil pop dengan tanda kurung tutup. Jika kedua kurung tidak berpasangan,
 * maka tanda kurung pada string adalah invalid.
 * 5. Jika stack tidak kosong (masih ada tanda kurung buka yang belum ditutup),
 * maka tanda kurung pada string adalah invalid.
 * @example
 * isValidParentheses("()");
 * // returns true
 * isValidParentheses("(}");
 * // returns false
 * isValidParentheses("(((()");
 * // returns false
 * @param {string} string - String yang akan dicek apakah memiliki tanda kurung yang valid.
 * @returns {boolean} - Boolean yang menunjukkan apakah string memiliki tanda kurung yang valid.
 */
const isValidParentheses = (string) => {
  const bracketMatch = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  const stack = [];
  for (const char of string) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    }
    if ([")", "}", "]"].includes(char)) {
      const openingBracket = stack.pop();
      if (bracketMatch[openingBracket] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const main = () => {
  console.log(isValidParentheses("(1 + 2) + (7 * 9)")); //true
  console.log(isValidParentheses("(10 + (50 * 2) / (10 / (4 / 2)) * 3)")); //true
  console.log(isValidParentheses("[1, 2, 3, (50 * 2), {a: 3, b: 5)]")); //false
  console.log(
    isValidParentheses(
      "[1, 2, [3, 7, {c: 9, d: [20, 21]}], (50*3), [{e: (20)}]]"
    )
  ); //true
  // > isValidParentheses("maxArray([1, 2]) + (8 * 2) + sumObject({a: 9, b: 10})");
  // true;
  // > isValidParentheses(
  // .  "[1, 2, {m: 9}, (10 * 2), [{i: 9, j: 2}], [1, (20 + 1)], 9]"
  // . );
  // true;
  // > isValidParentheses("[[[1, 2, 3");
  // false;
  // > isValidParentheses("[1, 2, 3]]]");
  // false;
  // > isValidParentheses("[1, 2, (3*4), {a:1, b:2]]");
  // false;
};

main();
