// Merubah angka menjadi format rupiah

// Cara step by step

/**
 *
 * @param {Number || String} num input berupa angka atau string kumpulan angka
 * @returns String yang sudah di format ke dalam bentuk rupiah
 */

function numberToRupiah(num) {
  // merubah input ke dalam format string | 123456 = '123456'
  let stringNum = num.toString();

  // pisah setiap karakter dan ubah kedalam format array | '123456' = ['1','2','3','4','5','6']
  let arrNum = stringNum.split("");

  // ubah urutan array menjadi terbalik |  ['1','2','3','4','5','6'] = ['6','5','4','3','2','1']
  let revArr = arrNum.reverse();

  // ubah array menjadi string | ['6','5','4','3','2','1'] = '654321'
  let toStr = revArr.join("");

  // pisah setiap tiga karakter menggunakan regex | '654321' = ['654','321']
  let matchThree = toStr.match(/\d{1,3}/g);

  // gabung menggunakan tanda titik (.) |  ['654','321'] = '654.321'
  let dotJoin = matchThree.join(".");

  // ubah ke bentuk array | '654.321' =  ['6','5','4','.','3','2','1']
  let toArr = dotJoin.split("");

  // balik urutan array kembali | ['6','5','4','.','3','2','1'] = ['1','2','3','.','4','5','6']
  let toRev = toArr.reverse("");

  // ubah kembali ke dalam bentuk string | ['1','2','3','.','4','5','6'] = '123.456'
  let toStrAgn = toRev.join("");

  // ubah string ke dalam format rupiah
  let rupiah = "Rp." + toStrAgn + ",-";

  return rupiah;
}

console.log(numberToRupiah(1000000)); // Rp.1.000.000,-
console.log(numberToRupiah(2520000)); // Rp.2.520.000,-

// Chainning method

const toRupiah = (num) => {
  const rupiah = num
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/\d{1,3}/g)
    .join(".")
    .split("")
    .reverse()
    .join("");

  return `Rp.${rupiah},-`;
};

console.log(toRupiah(1000)); // Rp.1.000,-
console.log(toRupiah(2300000)); // Rp.2.300.000,-
