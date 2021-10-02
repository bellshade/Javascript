/**
 * Ternary Operator
 *
 *
 * Ternary operator merupakan pengkondisian yang fungsinya sama seperti if/else
 *
 * Ternary operator juga bisa dibilang sebagai shorthand / shortcut untuk if/else
 *
 * Syntax:
 * condition ? exprIfTrue : exprIfFalse
 *
 * Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

const discount = true;

const price = discount ? "Rp. 100.000" : "Rp. 150.000";

console.log(price); // Rp. 100.000
