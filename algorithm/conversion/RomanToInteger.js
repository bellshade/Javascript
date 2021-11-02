const romanNum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function romanToInt(num) {
  let accumulator = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "I" && num[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (num[i] === "I" && num[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (num[i] === "X" && num[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (num[i] === "X" && num[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (num[i] === "C" && num[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (num[i] === "C" && num[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      accumulator += romanNum[num[i]];
    }
  }
  return console.log(accumulator);
}

// Masukan Angka Romawi Disini.
romanToInt("MCMLXXXIX"); // 1989
