/**
 *  Faktorial adalah perkalian semua bilangan asli yang kurang atau sama
 *  dengan n. Faktorial dilambangkan dengan tanda !.
 *
 *  @param angka = bilangan yang akan dicari faktorialnya
 */

function getFactorial(angka) {
  // Factorial dari 0 adalah 1
  if (angka === 0) {
    return 1;
  }

  /**
   *  Jika yang diinput adalah bilangan bulat negatif, langsung hentikan program karena bilangan bulat negatif faktorial
   *  tidak terdefinisi, nilainya yang mengecil secara terus menerus sampai bilangan negatif tak hingga.
   */
  if (angka < 0) {
    return "Tidak terdefinisi";
  }

  let result = 1;
  for (let i = angka; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.log(getFactorial(0)); // output 1
console.log(getFactorial(-7)); // output "Tidak terdefinisi"
console.log(getFactorial(5)); // output 120
