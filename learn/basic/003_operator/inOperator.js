/**
 * In Operator
 *
 *
 * In operator adalah sebuah operator yang digunakan untuk mengecek sebuah properti dari sebuah objek.
 * Jika properti ada di dalam objek maka akan mengembalikan boolean true dan sebaliknya.
 * Selain itu in operator juga bisa digunakan untuk mengecek index di dalam array.
 *
 * Note:
 * - In operator hanya mengecek apakah property atau index ada atau tidak
 * - Jadi walaupun property atau index nilainya null atau undefined maka return tetap true
 *
 * Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
 */

const user = {
  username: "John Doe",
  email: "johndoe@domain.com",
  profile: null
};

const hasEmail = "email" in user;
const hasPhone = "phone" in user;
const hasProfile = "profile" in user;

console.log(hasEmail); // true
console.log(hasPhone); // false
console.log(hasProfile); // true

const colors = ["red", "green", "blue"];

const firstIndexAvailable = 0 in colors;

console.log(firstIndexAvailable); // true
