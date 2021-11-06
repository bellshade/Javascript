/**
 * Dapatkan Bilangan Prima Dalam Range Tertentu
 */
function isPrime(number) {
  // mengecek apakah itu bilangan prima

  //Mengecek apakah bilangan tersebut lebih kecil dari 2 atau tidak ,karena Bilangan Prima dimulai dari 2, ini juga berfungsi sebagai pengecekan Bilangan negatif
  if (number < 2) {
    return false;
  }

  //Didalam perulangan berikut bilangan tersebut akan dicek apakah bilangan tersebut habis dibagi dengan bilangan lainnya
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  //Jika perulangan/kondisi diatas tidak memenuhi maka akan return true
  return true;
}

function searchPrime(awal, akhir) {
  let arr = []; // tahap inisialisasi array pembungkus, yang nanti akan berisi hasil bilangan prima
  for (let i = awal; i <= akhir; i++) {
    // looping mulai dari angka input awal sampai input akhir
    if (isPrime(i) === true) {
      // cek apakah angka termasuk bilangan prima
      arr.push(i); // jika ya tambahkan angka pada array pembungkus
    }
  }
  return arr; // kembalikan dalam bentuk array
}
console.log(searchPrime(7, 15)); // output [ 7, 11, 13 ]
