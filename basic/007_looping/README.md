## Pengulangan (Looping)

Looping dalam bahasa pemrograman manapun itu melakukan tugas yang berulang berdasarkan kondisi yang diberikan.

### Jenis-Jenis Looping

Dalam JavaScript terdapat beberapa fungsi looping, diantaranya:

1. `for` loop

`for loop` ini akan menjalankan kode didalamnya dengan menambahkan kondisi, yaitu kondisi `initial`, `expressionCondition`, dan cara `increment` untuk menjalankan looping tersebut.

```
for(initial, expressionCondition, increment) {
  // kode di dalam sini
}
```

Contoh:

```js
// kode ini akan menjalankan perulangan
// selama 10 kali, dimulai dari angka 0
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Lihat kodenya di file [forLoop.js](forLoop.js)

2. `while` loop

Jika `for loop` berjalan dengan cara mengikuti instruksi tetap, `while loop` ini berjalan terus hingga paramater yang diberikan berupa boolean `false` baru akan berhenti.

```
while (boolean) {
  // kode di dalam sini
}
```

Contoh:

```js
let angka = 0;

while (angka < 5) {
  angka += 1;
  console.log(angka);
  // console.log(angka < 5);
}
```

> Jangan beri parameter **true** pada while loop, atau itu akan berjalan selamanya!

3. `dohile` loop

Pengulangan yang dilakukan `do while loop` ini mirip dengan `while` loop, tetapi ada satu perbedaan ya itu `do` di mana didalamnya akan tetap di eksekusi. Selanjutnya akan menjalankan instruksi `while`. Instruksi di dalam `do` akan tetap dijalankan oleh `while` di bawahnya.

```
do {
  // kode yang awalnya dieksekusi dan akan di looping
} while (boolean);
```

Contoh:

```js
let jumlahBarang = -2;

do {
  jumlahBarang += 3;
  console.log(jumlahBarang);
} while (jumlahBarang < 20);
```

### Keyword Spesial dalam Looping

1. `break`

Break merupakan statement untuk mengakhiri perulangan, biasanya digunakan pengkondisian untuk menghentikannya.

Contoh:

```js
// Kode ini akan berhenti jika i mencapai no 15
for (let i = 0; i <= 20; i++) {
  if (i > 14) {
    break;
  }

  console.log(i);
}
```

2. `continue`

Continue merupakan statement untuk melewati/melompati perulangan. Statement ini akan mengakhiri program dan melanjutkan ke perulangan selanjutnya.

Perbedaan `continue` dengan `break` yaitu cara berhentinya. Jika `continue` hanya berhenti di kondisi dan melewatinya, sedangkan `break` itu benar-benar mematikan programnya.

Contoh dari `continue`:

```js
// Tampilkan bilangan yang merupakan kelipatan 2
for (let i = 0; i <= 20; i++) {
  if (i % 2) {
    continue;
  }

  console.log(i);
}
```

Lihat contoh dari [Jenis Looping](forWhileLoop.js), [break](break.js), dan [continue](continue.js).
