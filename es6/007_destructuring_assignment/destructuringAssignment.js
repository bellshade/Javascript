// Object

const obj = {
  id: 0,
  name: "Sandhika Galih",
  country: "Indonesia"
};

const { id, name: nama, country } = obj;

console.log(id); // 0
console.log(nama); // Sandhika Galih
console.log(country); // Indonesia

/**
 * Note: Destructuring pada object, nama variabel yang akan di akses wajib mengikuti key yang ada. Tetapi kalian bisa memberikan alias pada key tersebut.
 *
 * Example:
 * let {name: nama, country: negara} = obj;
 * console.log(negara); // Indonesia
 */

// Array

const arr = ["Indonesia", "Malaysia", "Brunei"];

const [country1, country2, country3] = arr;

console.log(country1); // Indonesia
console.log(country2); // Malaysia
console.log(country3); // Brunei

/*
 * Note: Destructuring pada array, dibebaskan dalam membuat nama pada variabel
 */
