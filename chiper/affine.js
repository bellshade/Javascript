/*
    Implementasi metode Affine Cipher
    
    Affine Cipher adalah jenis cipher substitusi monoalphabetic , di mana setiap huruf dalam alfabet dipetakan ke padanan numeriknya, dienkripsi menggunakan fungsi matematika sederhana, dan dikonversi kembali menjadi huruf. 
    
    Rumus enkripsi
    C = aP + b mod n
    
    Rumus dekripsi
    P = a^-1 * (C - b) mod n
    
    Keterangan:
    a = bilangan bulat relatif prima dengan "n"
    P = letak alphabet
    b = jumlah pergeseran
    n = jumlah alphabet (26)
    m^-1 = invers m mod n

    Baca selengkapnya
    https://en.m.wikipedia.org/wiki/Affine_cipher
*/
function affineCipher(method, string) {
  let a = 5;
  let b = 7;
  let n = 26;

  function encrypt(char, isUpperCase) {
    const p = char.charCodeAt() - 97;
    const c = ((a * p + b) % n) + 97;
    return isUpperCase
      ? String.fromCharCode(c).toUpperCase()
      : String.fromCharCode(c);
  }

  function decrypt(char, isUpperCase) {
    let multinverse = 1;
    for (let i = 1; i <= 25; i = i + 2) {
      if ((a * i) % n === 1) {
        multinverse = i;
      }
    }
    const c = char.charCodeAt() - 97;
    const p = ((multinverse * Math.abs(c + n - b)) % n) + 97;
    return isUpperCase
      ? String.fromCharCode(p).toUpperCase()
      : String.fromCharCode(p);
  }

  let isUpperCase = false;

  if (method === "encrypt" || method === "decrypt") {
    if (string) {
      return [...string]
        .map((char) => {
          if (char.match(/[a-zA-Z]/)) {
            isUpperCase = char === char.toUpperCase();
            return method === "encrypt"
              ? encrypt(char.toLowerCase(), isUpperCase)
              : decrypt(char.toLowerCase(), isUpperCase);
          }
          return char;
        })
        .join("");
    }
    return "Text not found!";
  }
  return "Method not found!";
}

const encrypted = affineCipher("encrypt", "abcdefghijklmnopqrstuvwxyz");
const decrypted = affineCipher("decrypt", encrypted);
console.log(encrypted);
console.log(decrypted);
