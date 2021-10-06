//Bilangan prima adalah Bilangan yang habis dibagi dengan bilangan nya sendiri
//Contoh Bilangan Prima : 2,3,5,7,11,13

//Disini saya akan menggunakan function untuk mengecek apakah suatu Bilangan itu merupakan bilangan Prima atau bukan
function isPrime(num) {
  //Mengecek apakah bilangan tersebut lebih kecil dari 2 atau tidak ,karena Bilangan Prima dimulai dari 2, ini juga berfungsi sebagai pengecekan Bilangan negatif
  if (num < 2) {
    return "Bukan Bilangan Prima";
  }

  //Didalam perulangan berikut bilangan tersebut akan dicek apakah bilangan tersebut habis dibagi dengan bilangan lainnya
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Bukan Bilangan Prima";
    }
  }
  //Jika perulangan/kondisi diatas tidak memenuhi maka akan return "Bilangan Prima"
  return "Bilangan Prima";
}

console.log(isPrime(10)); // output "Bukan Bilangan Prima"
console.log(isPrime(5)); // output "Bilangan prima"
console.log(isPrime(97)); // output "Bilangan Prima"
