// Apa itu fizzbuzz? fizz buzz adalah suatu algoritma yang sering dipakai pada saat coding interview

// Cara kerja

// Jika bilangan a hasil sisa bagi 3 dan 5 adalah 0 ,maka akan mengconsole fizzbuzz
// Jika bilangan a hasil sisa bagi 3 adalah 0, maka akan mengconsole fizz
// Jika bilangan a hasil sisa bagi 5 adalah 0, maka akan mengconsole buzz
// jika tidak keduanya maka akan mengconsole angka a itu sendiri

// Demo kodenya
// Kita akan membuat sampai 100 (optional)
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
