/*
 * Contoh di sini adalah bagaimana abstraksi ini
 * sangat berguna ketika ingin mengolah nilai yang
 * sama dengan cara yang berbeda.
 *
 * Contoh di bawah ini adalah contoh sederhana
 * bagaimana menghitung diameter, keliling, dan
 * luas lingkaran hanya dengan menggunakan
 * satu nilai jari-jari yang sama.
 */
class Lingkaran {
  constructor(jariJari) {
    // Mendaftarkan nilai jari-jari lingkaran
    // ke dalam object "jariJari"
    this.jariJari = jariJari;
  }

  // Menghitung diameter lingkaran
  hitungDiameter() {
    // r x 2
    return this.jariJari * 2;
  }

  // Menghitung luas lingkaran,
  // hasilnya dibulatkan karena menghasilkan
  // nilai desimal
  hitungLuas() {
    // PI x r x r => Rumus dasar
    // PI x r^2 => Rumus yang disederhanakan
    return Math.round(Math.PI * this.jariJari ** 2);
  }

  // Menghitung keliling lingkaran
  // hasilnya dibulatkan karena menghasilkan
  // nilai desimal
  hitungKeliling() {
    // 2 x PI x R
    return Math.round(2 * Math.PI * this.jariJari);
  }
}

// Mendeklarasikan instance lingkaran dengan nilai
// jari-jari 40
const lingkaran = new Lingkaran(40);
console.log(lingkaran.hitungDiameter()); // 80
console.log(lingkaran.hitungLuas()); // 527
console.log(lingkaran.hitungKeliling()); // 251
