const ipAddress = "0.0.0.0";
const anotherIpAdress = "127.0.y.x";

const isValidIpAddress = (ipAddress) => {
  const splitted = ipAddress.split(".");

  for (let i = 0; i < splitted.length; i++) {
    if (isNaN(splitted[i])) {
      return "IP Address harus berupa angka!";
    }
  }

  if (splitted.length !== 4) {
    return "IP Address harus berjumlah 4 okte";
  }

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] < 0 || splitted[i] > 255) {
      return "IP Address harus diantara 0 - 255";
    }
  }

  return `IP Address ${ipAddress} valid`;
};

console.log(isValidIpAddress(ipAddress));
console.log(isValidIpAddress(anotherIpAdress));

/**
 * Penjelasan Kode
 *
 * Variable ipAddress berisi nilai IP Address yang valid
 * Variable anotherIpAddress berisi nilai IP Address yang tidak valid
 *
 * Fungsi isValidIpAddress() menerima parameter berupa String IP Address
 * di dalam fungsi tersebut terdapat berbagai pengecekan
 *
 * 1. Variable splitted berisi parameter ipAddress yang di pecah menjadi array berdasarkan . (dot / titik) menggunakan fungsi split()
 * untuk dokumentasi split() bisa di buka di https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split?retiredLocale=id
 *
 * 2. Cek apakah setiap okte pada IP Address berupa angka menggunakan perulangan for
 * 3. Cek jumlah okte pada IP Address, IP Addres yang valid berjumlah 4 okte
 * 4. Cek apakah setiap okte diantara 0 sampai 255
 *
 * Jika semua pengecekan diatas terlewati maka IP Address tersebut valid.
 *
 */
