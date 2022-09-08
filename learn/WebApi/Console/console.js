const warning = document.getElementById("warning"); // menyeleksi container
const methods = [
  { name: "console.log()", description: "general log" },
  { name: "console.warn()", description: "shows warning" },
  { name: "console.error()", description: "shows error" },
  { name: "console.time()", description: "sets time for action" },
  { name: "console.info()", description: "general log" },
  { name: "console.assert()", description: "warns assertion" },
  { name: "console.group()", description: "groups different log groups" },
  {
    name: "console.count()",
    description: "prints number of times the .count() is called"
  },
  { name: "console.clear()", description: "clears console" }
]; // membuat array of objects yang berisikan metode console

console.warn(warning.textContent); // menampilkan warning pada console

function tambah(a, b) {
  console.count("Function tambah dipanggil: "); // menampilkan jumlah function ini dipanggil berapa kali
  if (a && b) {
    console.log(`Jumlah tambah: ${a + b}`); // menampilkan hasil tambah
  } else {
    // console.error("Salah satu parameter harus diisi !")
    console.assert(a && b, "Salah satu parameter harus diisi !"); // akan menampilkan error jika a && b = false
  }
}

console.time("waktu tambah"); // memulai timer execute untuk tambah()
tambah(1);
tambah(1, 2);
console.timeEnd("waktu tambah"); // menampilkan hasil timer execute

console.group("Metode console");
console.table(methods); // menampilkan hasil table
console.groupEnd(); // menampilkan hasil grouping

// console.clear()
// untuk membersihkan console
