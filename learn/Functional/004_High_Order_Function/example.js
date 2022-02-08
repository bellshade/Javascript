// Tanpa High Order Function
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2);

// Menggunakan High Order Function
const arrA = [1, 2, 3, 4, 5];
const arrB = arrA.map((val) => {
  return val * 2;
});

console.log(arrB); // [2, 4, 6, 8, 10]

// Contoh 2
const kali2 = (num) => num * 2;
const tambah2 = (num) => num + 2;
const lakukanOperasi = (num, fn) => fn(num);

console.log(lakukanOperasi(5, kali2)); // 10
console.log(lakukanOperasi(5, tambah2)); // 7
