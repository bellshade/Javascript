# String Helpers

Pada ES6 ada beberapa `String helpers` yang dapat membantu programmer untuk mempercepat proses coding.

## 1. String.includes()

method `includes()` digunakan untuk menentukan apakah sebuah string terdapat nilai tertentu. `includes()` mengembalikan nilai `boolean` (true/false).

### Syntax

```javascript
string.includes(searchString);
```

#### Contoh Kode

```javascript
let string = "abcde";
string.includes("ab"); // return nilai true
string.includes("xy"); // return nilai false
```

## 2. String.startsWith()

method `startsWith()` digunakan untuk menentukan apakah sebuah string diawali oleh nilai tertentu. `startsWith()` mengembalikan nilai `boolean` (true/false).

### Syntax

```javascript
string.startsWith(searchString);
string.startsWith(searchString, position);
```

#### Contoh Kode

```javascript
let string = "abcde";
string.startsWith("a"); // return nilai true
string.startsWith("b"); // return nilai false
```

Secara default posisi yang di cek adalah dari `index 0`, tetapi posisi ini dapat diubah dengan memberi parameter kedua.

```javascript
let string = "abcde";
string.startsWith("bc", 1); //return nilai true
string.startsWith("ab", 1); //return nilai false
```

## 3. String.endsWith()

method `endsWith()` digunakan untuk menentukan apakah sebuah string diakhiri oleh nilai tertentu. `endsWith()` mengembalikan nilai `boolean` (true/false).

### Syntax

```javascript
string.endsWith(searchString);
string.endsWith(searchString, length);
```

#### Contoh Kode

```javascript
let string = "abcde";
string.endsWith("de"); // return nilai true
string.endsWith("ab"); // return nilai false
```

Secara default `length` pada method `endsWith()` adalah panjang string, namun dapat diubah dengan menambahkan parameter kedua

```javascript
let string = "abcde";
string.endsWith("de", 4); // return nilai false
string.endsWith("cd", 4); // return nilai true
```

Parameter `length` pada method `endsWith()` menentukan berapa panjang string yang dicari. Dengan memberikan argumen `4` pada contoh diatas berarti dari string `abcde` hanya `abcd` yang digunakan.
