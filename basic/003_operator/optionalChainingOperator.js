/**
 * Optional chaining (?.)
 *
 *
 * Optional chaining operator adalah cara yang aman untuk mengambil nilai dari sebuah object tanpa menimbulkan error jika property tidak ditemukan.
 *
 * Referensi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */

const user = {
  name: "John Doe",
  address: {
    street: "Mawar"
  }
};

const street = user.address?.street;
const phone = user.contact?.phone;

// memanggil function dengan optional chaining
const getName = user.name?.getName?.();

console.log(street); // Mawar
console.log(phone); // undefined
console.log(getName); // undefined
