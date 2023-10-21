/*
  mencetak terbilang dari suatu angka

  Misal :
  - 1 => Satu
  - 10 => Sepuluh
  - 11 => Sebelas
  - 15 => Lima Belas
  - 20 => Dua Puluh
  - 100 => Seratus
  - 110 => Seratus Sepuluh
  - 111 => Seratus Sebelas
  - 1000 => Seribu
  - 1000000 => Satu Juta
  - 111111111111111 => Seratus Sebelas Triliun Seratus Sebelas Miliar Seratus Sebelas Juta Seratus Sebelas Ribu Seratus Sebelas
*/

const TRILIUN = 1e12; // 1000000000000
const MILIAR = 1e9;
const JUTA = 1e6;
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
 * Function buat mengubah tiga angka yang udah dipisah
 *
 * 1. program memisahkan ratusan, puluhan, dan satuan dari angka menggunakan operasi pembagian dan modulo.
 *
 * 2. Jika ratusan lebih dari 0, program mengecek apakah ratusan adalah 1 (seratus) atau bukan.
 *    Jika iya, program menambahkan "Seratus" ke dalam hasil.
 *    Jika tidak, program menambahkan terbilang ratusan (dalam bentuk angka) diikuti oleh "Ratus".
 *
 * 3. Jika puluhan lebih dari 0, program mengecek apakah puluhan adalah 1 (sepuluh) atau bukan.
 *    Jika iya, program mengecek angka satuan dan menambahkan terbilang "Sepuluh", "Sebelas", atau "Belas" sesuai dengan angka satuan.
 *    Jika puluhan bukan 1, program menambahkan terbilang puluhan (dalam bentuk angka) diikuti oleh "Puluh".
 *
 * 4. Jika angka satuan lebih dari 0, program menambahkan terbilang angka satuan.
 *
 * 5. Akhirnya, program menggabungkan semua hasil terbilang dengan spasi dan mengembalikan string terbilang.
 *
 * @param {number} angka
 * @returns {string}
 */
function konvert(angka) {
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
 * Function buat memisahkan angka dan menjalankan function `konvert` diatas
 * @param {number} angka yang mau dicari terbilangnya
 * @returns terbilang
 */
function terbilang(angka) {
  const result = [];

  const triliun = Math.floor(angka / TRILIUN);
  let sisaAngka = angka % TRILIUN;
  if (triliun > 0) {
    result.push(konvert(triliun), "Triliun");
  }

  const miliar = Math.floor(sisaAngka / MILIAR);
  sisaAngka %= MILIAR;
  if (miliar > 0) {
    result.push(konvert(miliar), "Miliar");
  }

  const juta = Math.floor(sisaAngka / JUTA);
  sisaAngka %= JUTA;
  if (juta > 0) {
    result.push(konvert(juta), "Juta");
  }

  const ribu = Math.floor(sisaAngka / RIBU);
  sisaAngka %= RIBU;
  if (ribu > 0) {
    if (ribu === 1) {
      result.push("Seribu");
    } else {
      result.push(konvert(ribu), "Ribu");
    }
  }

  if (sisaAngka > 0) {
    result.push(konvert(sisaAngka));
  }

  return result.join(" ");
}

console.log(terbilang(1));
console.log(terbilang(10));
console.log(terbilang(11));
console.log(terbilang(15));
console.log(terbilang(20));
console.log(terbilang(100));
console.log(terbilang(110));
console.log(terbilang(111));
console.log(terbilang(1000));
console.log(terbilang(1000000));
console.log(terbilang(11e12 + 11e9 + 11e6 + 11111));
/*
  * Penjelasan
  kok dipisahin? karena ada pola pada terbilang.
  dimana tiap 3 digit itu dapat dibedakan

  misal :
  - 123 => Seratus Dua Puluh Tiga
  - 123123 => Seratus Dua Puluh Tiga Ribu Seratus Dua Puluh Tiga
  - 123123123 => Seratus Dua Puluh Tiga Juta Seratus Dua Puluh Tiga Ribu Seratus Dua Puluh Tiga
  - dst

  * Algoritma
  1. pisahkan angka menggunakan operasi pembagian dan modulo.
  ini bertujuan untuk mendapatkan nilai triliun, miliar, juta, ribu, dan satu
  
  2. Untuk setiap bagian (triliun, miliar, juta, ribu, dan satu)
  program memanggil fungsi `konvert` untuk mengonversi tiga digit tersebut menjadi
  terbilang dan menambahkannya ke dalam array result dengan unit Triliun, Miliar, Juta, Ribu, atau tanpa unit.
  
  3. Akhirnya, program menggabungkan semua hasil terbilang dengan spasi dan
  mengembalikan string terbilang lengkap.
*/
