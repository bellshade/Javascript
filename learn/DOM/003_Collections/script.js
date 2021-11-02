// Deklarasikan variable untuk menyimpan HTML Collections
const rotasi = document.getElementsByClassName("rotasi");
const condong = document.getElementsByClassName("condong");

// Mengubah rotasi 45 derajat untuk
// seluruh elemen dengan class rotasi
for (let i = 0; i < rotasi.length; i++) {
  rotasi[i].style.transform = "rotate(45deg)";
}

// Mencondongkan elemen 20 derajat-x dan 15 derajat-y untuk
// seluruh elemen dengan class condog
for (let i = 0; i < condong.length; i++) {
  condong[i].style.transform = "skew(20deg, 15deg)";
}
