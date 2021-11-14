// implementasi recursive untuk mencari ujung dari garis geometri

// yang perlu diketahui :
// a = suku pertama
// n = banyak suku

// cara kerja :

// setiap pemanggilan function ,kita akan merubah nilai n dari variabel u1, misalnya n = 4, maka u1 = 3
// kemudian kita melakukan pengecekan dari variabel u1 , jika lebih besar dari 0.
// maka function getEndOfGeometryLine akan memanggil dirinya sendiri dengan parameter n dan a yang sudah diperbarui
// kemudian kembali ke langkah pertama tadi hingga u1 sama dengan 0, maka kita akan print un atau hasil akhir dari baris ke n di baris geometri
const getEndOfGeometryLine = (a, n) => {
  let un = a;
  let u1 = n - 1;
  if (u1 > 0) {
    return getEndOfGeometryLine(un + a, u1);
  } else {
    return un;
  }
};

console.log(getEndOfGeometryLine(2.5, 4));
