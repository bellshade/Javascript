# Console Object Methods

## Apa itu Console Object Methods ?

_Console Object Methods_ adalah object yang digunakan untuk mengakses browser debugging console, dengan bantuan console methods kita dapat memunculkan pesan, warning, dan error ke browser console yang sangat berguna untuk melakukan debugging dan testing.

Selain metode console.log() yang kebanyakan dari kita sering pakai, _console_ menyediakan metode lain yang lebih banyak.

## Metode apa saja yang ada ?

### console.log()

Metode console.log() digunakan untuk menampilkan output di dalam browser console. Kita juga dapat mengganti nilai-nilai dan dapat memberi style pada output console.

- Menampilkan output di dalam console.

```js
console.log("Hello World");
// output => Hello World
```

- Menggunakan variabel pengganti.

```js
console.log("Hello %c", "World");
// output => Hello World
```

- Menggunakan CSS untuk mengubah warna.

```js
console.log("%cHello World", "color:green");
// output => Hello World (berwarna hijau)

console.log("%cHello%c %cWorld%c", "color: green", "", "color: red", "");
//output => Hello(hijau) World(merah)
```

### console.warn()

Metode console.warn() digunakan untuk memberikan peringatan di dalam browser console, misalnya untuk meperingatkan penghentian versi atau penggunaan kode yang salah.

```js
console.warn("Ini peringatan");
```

![console.warn()](https://i.gyazo.com/c206d138294c0ddb333e791bf1665254.png)

### console.error()

Metode console.error() digunakan untuk menampilkan pesan error.

```js
console.error("Ini error");
```

![console.error()](https://i.gyazo.com/2e67b5e216ee3826518767cc5b180c6d.png)

### console.table()

Metode console.table() digunakan untuk menampilkan data sebagai table di dalam console. Metode console.table() mengambil satu argumen yang harus berupa array atau object dan satu parameter opsional tambahan.

- Tabel dengan array sederhana.

```js
const names = ["Tuki", "Tukiyem", "Maemunah"];
console.table(names);
```

![console.table()](https://i.gyazo.com/189be352cf40890feba304a196a5d060.png)

- Tabel dengan object, dengan menggunakan object browser akan membuat 2 kolom: kolom **index** akan menampung _keys_ dan **value** akan menampung _value_ dari object.

```js
const user = {
  name: "Tukiyem",
  negara: "Indonesia",
  kota: "Jakarta",
  age: 25
};
console.table(user);
```

![console.table()](https://i.gyazo.com/2edf2241e23583a8fb7f947235ab345f.png)

### console.time()

Metode console.time() akan memulai sebuah timer yang dapat digunakan untuk melacak berapa lama suatu operasi berlangsung. Jika kita memakai console.timeEnd() dengan nama yang sama dengan console.time(), browser akan menampilkan waktu dalam milisecond yang telah berlalu sejak timer dimulai.

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"]
];

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");
```

![console.time()](https://i.gyazo.com/95f70908989377a751c48541ab13dc9a.png)

### console.info()

Metode console.info() digunakan untuk menampilkan pesan informasi di browser console.

```js
console.info("Konser band XYZ akan tampil pada ...");
```

### console.assert()

Metode console.assert() digunakan untuk menampikan pesan error jika pernyataan itu _false_. Jika _true_, tidak akan ada pesan yang muncul. Parameter pertama adalah _expression_ , yang jika mendapatkan _false_ akan menampilkan sebuah pesan dari parameter kedua.

```js
console.assert(expression, pesan);

console.assert(4 > 3, "4 lebih besar dari 3"); // tidak ada hasil

console.assert(3 > 4, "3 tidak lebih besar dari 4"); // output => "Assertion failed: "3 tidak lebih besar dari 4"
```

### console.group()

Metode console.group() digunakan untuk mengelompokkan group log yang berbeda.

```js
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"]
];
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250
};
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28
  }
];

console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(user);
console.log(users);
console.groupEnd();
```

![console.group()](https://i.gyazo.com/a8acb287c7cd0c20de9154d897342ea1.png)

### console.count()

Metode ini akan menampilkan berapa kali console.count() ini dipanggil, metode ini sangat berguna untuk menghitung berapa kali sebuah function sudah dipanggil.

```js
const func = () => {
  console.count("Function dipanggil");
};
func();
func();
func();
```

```sh
Function dipanggil: 1
Function dipanggil: 2
Function dipanggil: 3
```

### console.clear()

Metode ini digunakan untuk membersihkan seluruh console.
