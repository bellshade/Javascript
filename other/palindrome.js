/*
   Palindrom adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang.
*/
function isPalindrome(string) {
  string = string.toLowerCase();

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    let indexAwal = i;
    let indexAkhir = string.length - i - 1;

    if (string[indexAwal] !== string[indexAkhir]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Frog"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Kodok"));
