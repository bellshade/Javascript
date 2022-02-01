class Siswa {
  #nama;
  #umur;

  get nama() {
    return this.#nama;
  }

  set nama(nama) {
    // Mengecek apakah data yang diberikan sudah sesuai yaitu nama tidak boleh mengandung angka
    if (new RegExp(/\d/).test(nama)) {
      console.error("Nama tidak boleh mengandung angka!");
    } else {
      this.#nama = nama;
    }
  }

  get umur() {
    return this.#umur;
  }

  set umur(umur) {
    // Mengecek apakah data berbentuk integer
    if (typeof umur === "number") {
      this.#umur = umur;
    } else {
      console.error("Umur harus bertipe data integer!");
    }
  }
}

const siswa1 = new Siswa();

console.log(siswa1.nama); // undefined

siswa1.nama = "John Doe 123"; // error
siswa1.nama = "John Doe";

console.log(siswa1.nama); // "John Doe"
