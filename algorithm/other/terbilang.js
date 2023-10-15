/*
  mencetak terbilang dari suatu angka

  Misal :
  - 1 => Satu
  - 10 => Sepuluh
  - 11 => Sebelas
  - 15 => Lima Belas
  - 20 => Dua Puluh
  - 25 => Dua Puluh Lima
  - 100 => Seratus
  - 110 => Seratus Sepuluh
  - 111 => Seratus Sebelas
  - 1000 => Seribu
  - 1000000 => Satu Juta
  - 111111111111111 => Seratus Sebelas Triliun Seratus Sebelas Miliar Seratus Sebelas Juta Seratus Sebelas Ribu Seratus Sebelas
  - 999999999999999 => Sembilan Ratus Sembilan Puluh Sembilan Triliun Sembilan Ratus Sembilan Puluh Sembilan Miliar Sembilan Ratus Sembilan Puluh Sembilan Juta Sembilan Ratus Sembilan Puluh Sembilan Ribu Sembilan Ratus Sembilan Puluh Sembilan
*/

const TRILIUN = 1000000000000;
const MILIAR = 1000000000;
const JUTA = 1000000;
const RIBU = 1000;
const nominal = {
  1: "Satu",
  2: "Dua",
  3: "Tiga",
  4: "Empat",
  5: "Lima",
  6: "Enam",
  7: "Tujuh",
  8: "Delapan",
  9: "Sembilan"
};

/**
 * Function buat mengubah tiga angka yang udah dipisah menjadi terbilang
 * @param {number} angka
 * @returns {string} angka dalam bentuk terbilang
 */
function tigaDigit(angka) {
  // array untuk menyimpan hasil
  const result = [];

  const ratusan = Math.floor(angka / 100);
  let sisaAngka = angka % 100;

  const puluhan = Math.floor(sisaAngka / 10);
  sisaAngka %= 10;

  if (ratusan > 0) {
    if (ratusan === 1) {
      result.push("Seratus");
    } else {
      result.push(nominal[ratusan], "Ratus");
    }
  }

  if (puluhan > 0) {
    if (puluhan === 1) {
      if (sisaAngka === 0) {
        result.push("Sepuluh");
      } else if (sisaAngka === 1) {
        result.push("Sebelas");
        sisaAngka %= 1;
      } else {
        result.push(nominal[sisaAngka], "Belas");
        sisaAngka %= 1;
      }
    } else {
      result.push(nominal[puluhan], "Puluh");
    }
  }

  if (sisaAngka > 0) {
    result.push(nominal[sisaAngka]);
  }

  return result.join(" ");
}
/**
 * Function buat memisahkan angka dan menjalankan function `tigaDigit`   diatas
 * @param {number} angka yang mau dicari terbilangnya
 * @returns terbilang
 */
function terbilang(angka) {
  const result = [];

  const triliun = Math.floor(angka / TRILIUN);
  let sisaAngka = angka % TRILIUN;
  if (triliun > 0) {
    result.push(tigaDigit(triliun), "Triliun");
  }

  const miliar = Math.floor(sisaAngka / MILIAR);
  sisaAngka %= MILIAR;
  if (miliar > 0) {
    result.push(tigaDigit(miliar), "Miliar");
  }

  const juta = Math.floor(sisaAngka / JUTA);
  sisaAngka %= JUTA;
  if (juta > 0) {
    result.push(tigaDigit(juta), "Juta");
  }

  const ribu = Math.floor(sisaAngka / RIBU);
  sisaAngka %= RIBU;
  if (ribu > 0) {
    result.push(tigaDigit(ribu), "Ribu");
  }

  const satu = Math.floor(sisaAngka / 1);
  sisaAngka %= 1;
  if (satu > 0) {
    result.push(tigaDigit(satu));
  }

  return result.join(" ");
}

console.log(terbilang(123123123));

/*
  * Penjelasan

  loh bang kok dipisahin? karena ada pola pada terbilang.
  dimana tiap 3 digit itu dapat dibedakan

  misal :
  - 123 => Seratus Dua Puluh Tiga
  - 123123 => Seratus Dua Puluh Tiga Ribu Seratus Dua Puluh Tiga
  - 123123123 => Seratus Dua Puluh Tiga Juta Seratus Dua Puluh Tiga Ribu Seratus Dua Puluh Tiga
  - dst
*/
