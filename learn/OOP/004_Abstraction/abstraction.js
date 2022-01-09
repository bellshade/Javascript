/*
 * Contoh disini adalah bagaimana abstraksi ini
 * sangat berguna ketika ingin mengolah nilai yang
 * sama dengan cara yang berbeda
 *
 * Contoh dibawah ini adalah contoh sederhana
 * bagaimana menghitung luas dan keliling persgi
 * dengan satu nilai yang sama
 */
class Persegi {
  constructor(sisi) {
    // Mendaftarkan nilai sisi
    // kedalam object "sisi"
    this.sisi = sisi;
  }

  // Menghitung luas persegi
  // sisi x sisi => Rumus dasar
  // sisi ^ 2 => Rumus yang disederhanakan
  hitungLuas() {
    // Contoh ini menggunakan pendekatan perpangkatan
    // daripada memanggil sisi dua kali, untuk kerapihan
    // dan efisiensi

    // return this.sisi * this.sisi
    return this.sisi ** 2;
  }

  // Menghitung keliling persegi
  // sisi + sisi + sisi + sisi => Rumus dasar
  // 4 x s => Rumus yang disederhanakan
  hitungKeliling() {
    return 4 * this.sisi;
  }
}

const persegi = new Persegi(15);
console.log(persegi.hitungLuas());
console.log(persegi.hitungKeliling());
