// Object

let obj = {
  id: 0,
  name: "Sandhika Galih",
  country: "Indonesia"
};

let { id, name: nama, country } = obj;

console.log(nama); // Sandhika Galih

/**
 * Note: Destructuring pada object, nama variabel yang akan di akses wajib mengikuti key yang ada. Tetapi kalian bisa memberikan alias pada key tersebut.
 *
 * Example:
 * let {name: nama, country: negara} = obj;
 * console.log(negara); // Indonesia
 */

// Array

let arr = ["Indonesia", "Malaysia", "Brunei"];

let [country1, country2, country3] = arr;

console.log(country1); // Indonesia

/*
 * Note: Destructuring pada array, dibebaskan dalam membuat nama pada variabel
 */