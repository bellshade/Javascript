// Disimpan di variable
const constFunc = () => {};

// Disimpan di dalam object
const obj = {
  func: () => {}
};

// Disimpan di dalam array
const arr = [() => {}];

// Function sebagai argumen ke dalam function
const cmToM = (length) => length / 100;
const mToCm = (length) => length * 100;
const convert = (fn, length) => fn(length);

const nilaiAwal = 100;

console.log(convert(cmToM, nilaiAwal)); // 1
console.log(convert(mToCm, nilaiAwal)); // 10000

// Function sebagai nilai kembalian dari sebuah function
const helloFunc = () => {
  return () => {
    return "Hello!";
  };
};

const hello = helloFunc();
console.log(hello()); // Hello!
