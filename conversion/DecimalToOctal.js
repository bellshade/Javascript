function decimalToOctal(num) {
  let oct = 0;
  let c = 0;
  while (num > 0) {
    const r = num % 8;
    oct = oct + r * Math.pow(10, c++);
    num = Math.floor(num / 8);
  }
  console.log(`bilangan desimal ke octal adalah  ${oct}`);
}

decimalToOctal(2);
decimalToOctal(8);
decimalToOctal(65);
decimalToOctal(216);
decimalToOctal(512);
