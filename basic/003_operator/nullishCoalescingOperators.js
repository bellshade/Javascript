/**
 * Nullish coalescing operator (??)
 *
 *
 * Nullish coalescing operator hampir sama dengan logical OR (||).
 *
 * Perbedaannya dengan logical OR adalah:
 * - Logical OR akan mengembalikan nilai right-hand jika left-hand bernilai falsy
 * - Sedangkan Nullish coalescing operator akan mengembalikan nilai right-hand jika left-hand bernilai null atau undefined
 *
 *
 * Nullish
 * Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 *
 * Falsy
 * Referensi: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */

const theme = null;
const color = theme ?? "dark";

console.log(color); // dark

const user = "";
const username = user ?? "admin";

console.log(username); // ''
