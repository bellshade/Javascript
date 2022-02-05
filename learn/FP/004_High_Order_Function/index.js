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
