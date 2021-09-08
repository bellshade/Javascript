// Cipher Atbash adalah jenis tertentu dari cipher monoalphabetic
// dibentuk dengan mengambil alfabet dan memetakannya ke kebalikannya,
// sehingga huruf pertama menjadi huruf terakhir,
// huruf kedua menjadi huruf kedua terakhir, dan seterusnya.
// informasi tentang atbash chiper
// https://en.wikipedia.org/wiki/Atbash

/**
 * Decrypt a Atbash
 * @param {String} str - string
 * @return {String} hasil dari decrypt/ encrypt string
 */

function Atbash(pesan) {
  let stringdecode = "";
  for (let i = 0; i < pesan.length; i++) {
    if (/[^a-zA-Z]/.test(pesan[i])) {
      stringdecode += pesan[i];
    } else if (pesan[i] === pesan[i].toUpperCase()) {
      stringdecode += String.fromCharCode(90 + 65 - pesan.charCodeAt(i));
    } else {
      stringdecode += String.fromCharCode(122 + 97 - pesan.charCodeAt(i));
    }
  }
  return stringdecode;
}

const testEnkripsi = "indonesia";
const encPesan = Atbash(testEnkripsi);
const descPesan = Atbash("rmwlmvhrz");
console.log(encPesan);
console.log(descPesan);
