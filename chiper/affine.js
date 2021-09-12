/*
    Implementasi metode Affine Cipher
    
    Affine Cipher adalah jenis cipher substitusi monoalphabetic , di mana setiap huruf dalam alfabet dipetakan ke padanan numeriknya, dienkripsi menggunakan fungsi matematika sederhana, dan dikonversi kembali menjadi huruf. 
    
    Rumus enkripsi
    C = mP + b mod n
    
    Rumus dekripsi
    P = m^-1 * (C - b) mod n
    
    Keterangan:
    m = bilangan bulat relatif prima dengan "n"
    P = letak alphabet
    b = jumlah pergeseran
    n = jumlah alphabet (26)
    m^-1 = invers m mod n

    Baca selengkapnya
    https://en.m.wikipedia.org/wiki/Affine_cipher
*/
function affineCipher(method, string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const b = 5;
  const m = 7;
  const n = 26;

  const plainTextArr = string.split("");

  function encrypt(char, isUpperCase) {
    let P = alphabet.indexOf(char.toLowerCase());
    let C = (m * P + b) % n;
    return isUpperCase ? alphabet[C].toUpperCase() : alphabet[C];
  }

  /* 
    Mencari m^-1
    
    GCD (Great Common Divisor) atau kalau dalam bahasa Indonesia FPB (Faktor Persekutuan Terbesar)
  */
  function gcd() {
    for (let i = 0; i < n; i++) {
      if ((i * m) % n === 1) {
        return i;
      }
    }
  }

  function decrypt(char, isUpperCase) {
    let C = alphabet.indexOf(char.toLowerCase());
    let P = (gcd() * (C - b)) % n;
    return isUpperCase ? alphabet[P].toUpperCase() : alphabet[P];
  }

  if (method === "encrypt" || method === "decrypt") {
    return plainTextArr
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          let isUpperCase = false;
          if (char === char.toUpperCase()) {
            isUpperCase = true;
          }
          return method === "encrypt"
            ? encrypt(char, isUpperCase)
            : decrypt(char, isUpperCase);
        }
        return char;
      })
      .join("");
  }

  return "Method not found !";
}

console.log(affineCipher("encrypt", "Affine Chiper 123"));
console.log(affineCipher("decrypt", "Foojsh Tcjghu 123"));
console.log(affineCipher("decryt", "Izgjx 123"));
