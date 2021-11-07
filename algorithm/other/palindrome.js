/*
   Palindrom adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang.
*/
function isPalindrome(string) {
  return string.toLowerCase() === [...string.toLowerCase()].reverse().join("");
}

console.log(isPalindrome("Frog"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Kodok"));
