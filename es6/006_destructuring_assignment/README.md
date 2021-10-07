# Destructuring Assignment

Destructuring Assignment adalah sebuah ekspresi `Javascript` yang memungkinkan untuk memecah sebuah nilai pada Object ataupun Array ke dalam sebuah variabel terpisah dan menghemat kode secara signifikan.

**Contoh Penggunaan**

Before:

```JS
// Object

const obj = {
  id: 0,
  name: "Sandhika Galih",
  country: "Indonesia"
};

console.log(obj.name); // Sandhika Galih

// Array

const arr = [
  "Indonesia",
  "Malaysia",
  "Brunei",
];

console.log(arr[0]); // Indonesia
```

After:

```JS
// Object

const obj = {
  id: 0,
  name: "Sandhika Galih",
  country: "Indonesia"
};

const {id, name, country} = obj;

console.log(name); // Sandhika Galih

/**
 * Note: Destructuring pada object, nama variabel yang akan di akses wajib mengikuti key yang ada. Tetapi kalian bisa memberikan alias pada key tersebut.
 *
 * Example:
 * const {name: nama, country: negara} = obj;
 * console.log(negara); // Indonesia
 */

// Array

const arr = [
  "Indonesia",
  "Malaysia",
  "Brunei",
];

const [country1, country2, country3] = arr

console.log(country1); // Indonesia

/*
 * Note: Destructuring pada array, dibebaskan dalam membuat nama pada variabel
 */
```

Penggunaan `Destructuring Assigment` akan berguna jika kita memiliki kasus pada data yang cukup kompleks.

Dan masih banyak manfaat penggunaan `Destructuring Assigment` yang tidak saya sebutkan, kalian bisa mengulik lebih dalam lagi pada referensi yang saya berikan di bawah ini:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment