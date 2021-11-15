// Cara menyortir nama orang menggunakan Javascript

// Data nama didapatkan dari halaman demo Faker.js
// https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
// Faker - https://github.com/marak/Faker.js
const daftarNama = [
  "Jarret Sudrajat",
  "Demond Usada",
  "Ariel Safitri",
  "Jimmy Febian",
  "Elfrieda Elvina",
  "Wiley Satria",
  "Abbie Sudiati",
  "Susie Pradana",
  "Clarabelle Kusmawati"
];

// Sortir dari nama yang depannya huruf a yang di awal
const dariASampaiZ = [...daftarNama].sort((a, b) => a.localeCompare(b));

// Sortir dari nama yang depannya huruf z yang di awal
const dariZSampaiA = [...daftarNama].sort((a, b) => b.localeCompare(a));

console.log(dariASampaiZ);
console.log(dariZSampaiA);

/**
 * Penjelasan code:
 * Prototype string localeCompare adalah fitur javascript yang
 * fungsinya membandingkan string awal dengan string yang dijadikan
 * parameter. Fungsi ini akan mereturn -1, 1 atau 0, hal ini bisa
 * dikombinasikan dengan fungsi sort array
 **/

/**
 * Contoh fungsi yang bisa digunakan
 * const aKeZ = (array) => [...array].sort((a, b) => a.localeCompare(b));
 * const zKeA = (array) => [...array].sort((a, b) => b.localeCompare(a));
 **/
