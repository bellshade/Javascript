# Method-Method untuk Memanipulasi Object

## Object.keys()
Method ini mengembalikan sebuah array yang berisi kumpulan key dari object yang diberikan.
Parameter yang diterima adalah sebuah object.
```js
const person = {
  name: "John Doe",
  age: 24,
  gender: "male"
};

console.log(Object.keys(person)); // [ "name", "age", "gender" ]
```
Contoh penggunaan: [Object.keys()](objectKeys.js)

## Object.values()
Method ini mengembalikan sebuah array yang berisi kumpulan value dari object yang diberikan.
Parameter yang diterima adalah sebuah object.
```js
const person = {
  name: "John Doe",
  age: 24,
  gender: "male"
};

console.log(Object.values(person)); // [ "John Doe", 24, "male" ]
```
Contoh penggunaan: [Object.values()](objectValues.js)

## Object.entries()
Method ini mengembalikan array yang berpasangan antara key dan value dari object yang diberikan.
Parameter yang diterima adalah sebuah object.
```js
const person = {
  name: "John Doe",
  age: 24,
  gender: "male"
};

console.log(Object.entries(person)); // [ ["name", "John Doe"], ["age", 24], ["gender", "male"] ]
```
Contoh penggunaan: [Object.entries()](objectEntries.js)

## Object.assign()
Method menggabungkan dua object atau lebih menjadi satu dan mengembalikan object yang sudah digabung,
serta mengubah object target menjadi object gabungan tadi.
Parameter yang diterima adalah beberapa object dengan urutan sebagai berikut:
`Object.assign(target, source1, source2, source3, ...)`
```js
const object1 = {
  firstName: "Brendan"
};

const object2 = {
  lastName: "Eich"
};

console.log(Object.assign(object1, object2)); // { firstName: "Brendan", lastName: "Eich" }
```
Contoh penggunaan: [Object.assign()](objectAssign.js)