let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

let genap = arr.filter((a) => a % 2 === 0);
let ganjil = arr.filter((a) => a % 2 !== 0);

console.log(genap); // [2, 4, 6, 8, 20];
console.log(ganjil); // [ 1, 3, 5, 7, 9 ]
