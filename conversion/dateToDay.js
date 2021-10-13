/*  Konversi Tanggal ke Hari
    ------------------------
    Algoritma untuk mengkonversi tanggal menjadi hari.
    penjelasan dan rumus berdasarkan referensi: https://cs.uwaterloo.ca/~alopez-o/math-faq/node73.html
*/
const listBulan = {
  1: 11,
  2: 12,
  3: 1,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
  8: 6,
  9: 7,
  10: 8,
  11: 9,
  12: 10
};

const listHari = {
  0: "Minggu",
  1: "Senin",
  2: "Selasa",
  3: "Rabu",
  4: "Kamis",
  5: "Jumat",
  6: "Sabtu"
};

const dateToDay = (tanggal) => {
  // validasi inputan berupa string.
  if (typeof tanggal !== "string") {
    return new TypeError("Argument harus berupa string.");
  }
  // memecah tanggal menjadi hari, bulan, tahun.
  const [tgl, bulan, tahun] = tanggal.split("/").map((x) => Number(x));
  // validasi tanggal tidak lebih dari 31 dan bulan tidak lebih dari 12
  if (tgl < 0 || tgl > 31 || bulan > 12 || bulan < 0) {
    return new TypeError("tanggal tidak benar.");
  }
  const th = tahun % 100; // mengambil 2 digit tahun dari belakang
  const abad = Math.floor(tahun / 100); // mengambil 2 digit tahun dari depan

  if ((bulan === 2) && (tahun % 4 === 0) && (tahun % 100 !== 0) || (tahun % 400 === 0)) {
    const hasil = Math.abs((tgl + Math.floor(2.6 * listBulan[bulan] - 0.2) - 2 * abad + th + Math.floor(th / 4) + Math.floor(abad / 4)+5) % 7);
    return listHari[hasil];
  } else {
    const hasil = Math.abs((tgl + Math.floor(2.6 * listBulan[bulan] - 0.2) - 2 * abad + th + Math.floor(th / 4) + Math.floor(abad / 4)) % 7);
    return listHari[hasil];
  }
};

console.log(dateToDay("13/10/2021")); // output: Rabu
console.log(dateToDay("13/10/2020")); // output: Selasa
console.log(dateToDay("13/10/2019")); // output: Minggu
console.log(dateToDay("17/08/1945")); // output: Jumat
console.log(dateToDay("29/03/2020")); // output: Minggu

// Leap Year Test
console.log(dateToDay("29/02/2020")); // output: Sabtu
console.log(dateToDay("29/02/2024")); // output: Kamis
console.log(dateToDay("29/02/2028")); // output: Selasa
console.log(dateToDay("29/02/2032")); // output: Minggu