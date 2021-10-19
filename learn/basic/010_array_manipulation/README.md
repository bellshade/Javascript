# Manipulasi Array (Array Manipulation)

Sebuah array bisa ditambah, dikurangi, atau diubah isinya. Operasi tersebut disebut dengan memanipulasi array.

## Jenis Method Untuk Memanipulasi Array

### 1. Filter

Method`.filter()` akan **membuat sebuah array baru** berisi element yang sesuai dengan kondisi yang diberikan. Method ini tidak akan mengubah array yang sebelumnya.

```js
let result = array.filter(function(item, index) {
	return true;
})
```

- `item`: nilai dari element yang sedang diproses
- `index`: index dari element yang sedang diproses *(optional)*

Contoh:

Mendapatkan array berisi bilangan ganjil

```js
let numbers = [1, 2, 3, 4, 5];
let oddNum = numbers.filter(function(number) {
	return number % 2 === 1;
})

console.log(numbers);
// expected output: [1, 2, 3, 4, 5]
console.log(oddNum);
// expected output: [1, 3, 5]
```

### 2. Map

Method `.map()` akan membuat array baru berisi hasil dari operasi yang diberikan.

```js
let result = array.map(function(item, index) {
	return true;
})
```

- `item`: nilai dari element yang sedang diproses
- `index`: index dari element yang sedang diproses *(optional)*

Contoh:

Mengalikan semua nilai dalam array dengan 2

```js
let numbers = [1, 2, 3, 4, 5];
let oddNum = numbers.map(function(number) {
	return number * 2;
})

console.log(numbers);
// expected output: [1, 2, 3, 4, 5]
console.log(oddNum);
// expected output: [2, 4, 6, 8, 10]
```
Lihat contoh lainnya di [map.js](map.js)

### 3. Sort

Method `.sort()` akan mengurutkan element dalam array.

```js
array.sort();
array.sort(function(firstEl, secondEl) {
	...
})
```

- `firstEl`: element pertama yang akan dibandingkan
- `secondEl`: element kedua yang akan dibandingkan

Contoh:

```js
let numbers = [3, 2, 5, 1, 4];

numbers.sort();
console.log(numbers);
// expected output: [1, 2, 3, 4, 5]
```

### 4. Push & Pop

Method `.push()` akan **menambahkan** element baru pada akhir array, sedangkan `.pop()` akan **menghapus** element terakhir dari array. Kedua method ini akan mengubah array asli.

```js
array.push(item1, item2, ..., itemN);
array.pop();
```

- `item`: element yang akan ditambahkan ke array

Contoh:

```js
let numbers = [1, 2, 3, 4, 5];

numbers.push(6) // menambahkan angka 6
console.log(numbers);
// expected output: [1, 2, 3, 4, 5, 6]

numbers.pop() // menghapus angka terakhir
console.log(numbers);
// expected output: [1, 2, 3, 4, 5]
```
Lihat contoh lainnya di [push.js](push.js)

### 5. Shift & Unshift

Method `.unshift()` akan **menambahkan** element baru pada awal array, sedangkan `.shift()` akan **menghapus** element pertama dari array. Kedua method ini akan mengubah array asli.

```js
array.unshift(item1, item2, ..., itemN);
array.shift();
```

- `item`: element yang akan ditambahkan ke array

Contoh:

```js
let numbers = [1, 2, 3, 4, 5];

numbers.unshift(-1, 0) // menambahkan angka -1 dan 0
console.log(numbers);
// expected output: [-1, 0, 1, 2, 3, 4, 5]

numbers.shift() // menghapus angka pertama
console.log(numbers);
// expected output: [0, 1, 2, 3, 4, 5]
```

### 6. Reduce

Method `.reduce()` akan menjalankan fungsi pada setiap element dimana pada setiap iterasinya menggunakan hasil *return* dari iterasi sebelumnya.

```js
const numbers = [1, 2, 3, 4, 5];

const totalNumber = numbers.reduce((akumulator, number) => akumulator + number);
// untuk setiap elemen akan menjalankan fungsi menambahkan akumulator dengan nilai dirinya
// akumulator adalah nilai dari perhitungan semua elemen sebelumnya

console.log(totalNumber);	// 15
```

dalam contoh di atas nilai awal akumulator secara *default* adalah 0, sehingga:
- 0 + `1` = 1
- 1 + `2` = 3
- 3 + `3` = 6
- 6 + `4` = 10
- 10 + `5` = 15 (nilai totalNumber menjadi 15)

Nilai awal akumulator dapat ditentukan pada parameter kedua method `.reduce()`

```js
const numbers = [1, 2, 3, 4, 5];

const totalNumber = numbers.reduce((akumulator, number) => akumulator + number, 100);
// parameter kedua (nilai awal akumulator) diberi nilai 100 sehingga perhitungan dimulai dari 100

console.log(totalNumber);	// 115
// nilai totalNumber menjadi 115
```