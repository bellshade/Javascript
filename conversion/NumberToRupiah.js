/**
 * Conversion Number to Rupiah
 */

function numberToRupiah(angka) {
  let rupiah = "";
  let angkarev = angka.toString().split("").reverse().join("");
  for (let i = 0; i < angkarev.length; i++) {
    if (i % 3 === 0) {
      // Kondisi jika index kelipatan 3 sama dengan 0
      rupiah += angkarev.substr(i, 3) + ".";
    }
  }
  const result =
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("");
  console.log(result);
}

numberToRupiah(10000); // Rp. 10.000
