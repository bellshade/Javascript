// Tanpa Default Parameter
function jualBuah(buah, berat, harga) {
  return `Buah ${buah} dengan berat ${berat}, di pasar seharga ${harga}.`;
}

// 1. Memberikan semua argument pada parameter
console.log(jualBuah("semangka", "1 kg", "22 ribu")); // Output : Buah semangka dengan berat 1 kg, di pasar seharga 22 ribu.

// 2. Tidak memberikan argument pada salah satu dan semua parameter
console.log(jualBuah("semangka", "1 kg")); // Output : Buah semangka dengan berat 1 kg, di pasar seharga undefined.
console.log(jualBuah()); // Output : Buah undefiend dengan berat undefiend, di pasar seharga undefined.

/* - Pada fungsi jualBuah memiliki parameter (buah, berat, harga).
   Artinya saat kita memanggil sebuah fungsi jualBuah, maka parameter di dalam fungsi tersebut akan menangkap sebuah argument yang kita berikan seperti contoh nomor 1, yaitu "semangka", "1 kg", "22 ribu".
 
* - Bagaimana jika argument tersebut tidak kita isi?
  Apabila kita tidak memberikan argument pada sebuah parameter, maka argument tersebut akan memberikan nilai default, yaitu "undefiend".  
  
 */

// Menggunakan Default Parameter
function outfit(baju = "Erigo", celana = "Carvil", sepatu = "Ventela") {
  return `Hari ini, saya menggunakan baju dari ${baju}, celana dari ${celana}, dan sepatu dari ${sepatu}`;
}

console.log(outfit("Uniqlo", "Levis", "Nike"));
// Output : Hari ini, saya menggunakan baju dari Uniqlo, celana dari Levis, dan sepatu dari Nike

console.log(outfit());
// Output : Hari ini, saya menggunakan baju dari Erigo, celana dari Carvil, dan sepatu dari Ventela
